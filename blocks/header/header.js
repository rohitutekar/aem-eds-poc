import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function toId(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getSections(fragment) {
  const sections = [...fragment.querySelectorAll(':scope > .section')];
  return sections.length ? sections : [...fragment.children];
}

function getSection(fragment, name) {
  const expectedName = name.toLowerCase();
  return getSections(fragment).find((section) => (
    section.querySelector('h1, h2, h3, h4, h5, h6')?.textContent.trim().toLowerCase() === expectedName
  ));
}

function parseLinks(section) {
  return section ? [...section.querySelectorAll('a[href]')].map((link) => ({
    id: toId(link.textContent),
    label: link.textContent.trim(),
    href: new URL(link.getAttribute('href'), window.location).pathname,
  })).filter((link) => link.label) : [];
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

  const contextNavigation = parseLinks(getSection(fragment, 'context navigation'))
    .map((link) => ({ ...link, kind: 'link' }));
  const logoLinks = parseLinks(getSection(fragment, 'logo'));
  const brandLinks = parseLinks(getSection(fragment, 'brand switcher'));
  const otherLinks = parseLinks(getSection(fragment, 'other links'));
  const languages = parseLinks(getSection(fragment, 'language switcher'));
  const brands = brandLinks
    .map((link) => link.id)
    .filter((id) => ['jaguar', 'range-rover', 'discovery'].includes(id));

  return {
    contextNavigation,
    logoHref: logoLinks[0]?.href,
    brands,
    otherLinks,
    languages,
  };
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
