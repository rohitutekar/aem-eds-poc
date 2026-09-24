/**
 * Mounts the shared @jlr/ui-react Header, replacing the boilerplate's
 * default nav-fragment parsing entirely.
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const { mountHeader } = await import('../jlr-shared/dist/header.js');
  mountHeader(block);
}

