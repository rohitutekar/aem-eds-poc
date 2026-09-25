import { getMetadata, loadFragment } from '../../scripts/aem.js';

function toId(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getSections(fragment) {
  const sections = [...fragment.querySelectorAll(':scope > .section')];
  return sections.length ? sections : [...fragment.children];
}

function getContentSection(fragment, name) {
  const sectionName = name.toLowerCase();
  return getSections(fragment).find((section) => {
    const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
    return heading?.textContent.trim().toLowerCase() === sectionName;
  });
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

function parseFooterContent(fragment) {
  const socialSection = getContentSection(fragment, 'social links');
  const footerSection = getContentSection(fragment, 'footer links');
  const disclaimerSection = getContentSection(fragment, 'disclaimers');
  const legalSection = getContentSection(fragment, 'legal');

  if (socialSection || footerSection || disclaimerSection || legalSection) {
    return {
      socialLinks: parseLinks(socialSection),
      footerLinks: parseLinks(footerSection),
      disclaimers: parseDisclaimers(disclaimerSection),
      legalLines: parseLines(legalSection),
    };
  }

  const paragraphs = [...fragment.querySelectorAll('p')];
  const disclaimers = paragraphs
    .map((paragraph) => paragraph.textContent.trim())
    .map((text) => {
      const match = text.match(/^(\*1|\*{1,2})\s*/);
      return match ? { marker: match[1], text: text.slice(match[0].length) } : null;
    })
    .filter(Boolean);

  return {
    socialLinks: [],
    footerLinks: parseLinks(fragment),
    disclaimers,
    legalLines: paragraphs
      .filter((paragraph) => !paragraph.querySelector('a') && !/^(\*1|\*{1,2})\s*/.test(paragraph.textContent.trim()))
      .map((paragraph) => paragraph.textContent.trim())
      .filter(Boolean),
  };
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
    console.error('[footer] failed to load authored footer content', error);
    mountFooter(block);
  }
}

