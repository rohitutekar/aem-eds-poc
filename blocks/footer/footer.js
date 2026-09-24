/**
 * Mounts the shared @jlr/ui-react Footer, replacing the boilerplate's
 * default fragment-fetching markup entirely.
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const { mountFooter } = await import('../jlr-shared/dist/footer.js');
  mountFooter(block);
}

