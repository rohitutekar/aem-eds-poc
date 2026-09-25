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
  return section
    ? [...section.querySelectorAll('a[href]')].map((link) => ({
      id: toId(link.textContent),
      name: link.textContent.trim(),
      url: link.href,
    }))
    : [];
}

function parseDisclaimers(section) {
  if (!section) return [];
  return [...section.querySelectorAll('p')].map((paragraph) => {
    const text = paragraph.textContent.trim();
    const match = text.match(/^(\*1|\*{1,2})\s*/);
    return {
      marker: match?.[1],
      text: match ? text.slice(match[0].length) : text,
    };
  }).filter((item) => item.text);
}

function parseLines(section) {
  return section ? [...section.querySelectorAll('p')].map((line) => line.textContent.trim()).filter(Boolean) : [];
}

const SOCIAL_IDS = new Set(['instagram', 'tiktok', 'facebook', 'youtube', 'x']);

function sectionHeading(section) {
  return section.querySelector('h1, h2, h3, h4, h5, h6')?.textContent.trim().toLowerCase();
}

function sectionParagraphs(section) {
  return [...section.querySelectorAll('p')];
}

function addUnheadedSection(section, content) {
  const links = parseLinks(section);
  const paragraphs = sectionParagraphs(section);
  const linkIds = links.map((link) => link.id);
  const text = section.textContent.toLowerCase();
  const hasDisclaimerMarker = paragraphs.some((paragraph) => /^(\*1|\*{1,2})\s*/.test(paragraph.textContent.trim()));

  if (links.length && linkIds.every((id) => SOCIAL_IDS.has(id))) {
    content.socialLinks.push(...links);
  } else if (links.length) {
    content.footerLinks.push(...links);
  } else if (hasDisclaimerMarker || /wltp|disclaimer|equivalent all electric|images shown/.test(text)) {
    content.disclaimers.push(...parseDisclaimers(section));
  } else if (paragraphs.length) {
    content.legalLines.push(...parseLines(section));
  }
}

function parseFooterContent(fragment) {
  const content = {
    socialLinks: [],
    footerLinks: [],
    disclaimers: [],
    legalLines: [],
  };

  getSections(fragment).forEach((section) => {
    const heading = sectionHeading(section);
    if (heading === 'social links') content.socialLinks.push(...parseLinks(section));
    else if (heading === 'footer links') content.footerLinks.push(...parseLinks(section));
    else if (heading === 'disclaimers') content.disclaimers.push(...parseDisclaimers(section));
    else if (heading === 'legal') content.legalLines.push(...parseLines(section));
    else addUnheadedSection(section, content);
  });

  return content;
}

/**
 * Loads the authored /footer fragment and passes its content to the shared
 * React Footer.
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const { mountFooter } = await import('../jlr-shared/dist/footer.js');
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';

  try {
    const fragment = await loadFragment(footerPath);
    mountFooter(block, 'range-rover', parseFooterContent(fragment));
  } catch (error) {
    mountFooter(block);
  }
}
