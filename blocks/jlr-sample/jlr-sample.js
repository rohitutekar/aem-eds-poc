/**
 * Mounts a standalone slice of @jlr/ui-react primitives (Button, Badge,
 * Heading, Text) - proves the shared design system renders correctly inside
 * an EDS page. Header/Footer are mounted by their own dedicated blocks
 * (blocks/header, blocks/footer), not duplicated here.
 * @param {Element} block The jlr-sample block element
 */
export default async function decorate(block) {
  const { mount } = await import('../jlr-shared/dist/sample.js');
  const container = document.createElement('div');
  container.className = 'jlr-ds-root';
  block.replaceChildren(container);
  mount(container);
}
