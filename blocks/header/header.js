import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function toId(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getSections(fragment) {
  const sections = [...fragment.querySelectorAll(':scope > .section')];
  return sections.length ? sections : [...fragment.children];
}

function parseLinks(section) {
  return section ? [...section.querySelectorAll('a[href]')].map((link) => ({
    id: toId(link.textContent),
    label: link.textContent.trim(),
    href: new URL(link.getAttribute('href'), window.location).pathname,
  })).filter((link) => link.label) : [];
}

const BRAND_IDS = new Set(['jaguar', 'range-rover', 'discovery']);

function addNavSection(section, content) {
  const links = parseLinks(section);
  const linkIds = links.map((link) => link.id);

  if (links.length && links.every((link) => link.href.includes('/vehicle-listing/'))) {
    content.contextNavigation.push(...links.map((link) => ({ ...link, kind: 'link' })));
  } else if (links.length === 1 && linkIds[0] === 'range-rover' && links[0].href === '/') {
    content.logoHref = links[0].href;
  } else if (links.length && linkIds.every((id) => BRAND_IDS.has(id))) {
    content.brands.push(...linkIds);
  } else if (links.length && linkIds.every((id) => /^[a-z]{2}(-[a-z]{2})?$/.test(id))) {
    content.languages.push(...links);
  } else {
    content.otherLinks.push(...links);
  }
}

function parseNavContent(fragment) {
  if (!fragment) {
    return {
      contextNavigation: [],
      brands: [],
      otherLinks: [],
      languages: [],
    };
  }

  const content = {
    contextNavigation: [],
    logoHref: undefined,
    brands: [],
    otherLinks: [],
    languages: [],
  };

  getSections(fragment).forEach((section) => {
    const heading = section.querySelector('h1, h2, h3, h4, h5, h6')?.textContent.trim().toLowerCase();
    const links = parseLinks(section);
    if (heading === 'context navigation') content.contextNavigation.push(...links.map((link) => ({ ...link, kind: 'link' })));
    else if (heading === 'logo') content.logoHref = links[0]?.href;
    else if (heading === 'brand switcher') content.brands.push(...links.map((link) => link.id).filter((id) => BRAND_IDS.has(id)));
    else if (heading === 'other links') content.otherLinks.push(...links);
    else if (heading === 'language switcher') content.languages.push(...links);
    else addNavSection(section, content);
  });

  return content;
}
/**
 * Mounts the shared @jlr/ui-react Header, replacing the boilerplate's
 * default nav-fragment parsing entirely.
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const { mountHeader } = await import('../jlr-shared/dist/header.js');
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';

  try {
    const fragment = await loadFragment(navPath);
    mountHeader(block, 'range-rover', parseNavContent(fragment));
  } catch {
    mountHeader(block);
  }
}
