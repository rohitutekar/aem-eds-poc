/*
 * JLR Design System Block
 * Mounts the shared @jlr/ui-react component tree (built from the JLR-GlobalCVL-FE
 * workspace) into a scoped container, so the design system renders inside an
 * EDS-authored page with no Next.js runtime involved.
 *
 * `./dist/eds-poc.js` is vendored from apps/eds-poc's `pnpm --filter eds-poc build`
 * output. Once the bundle is published to a CDN, replace the relative import below
 * with the absolute CDN URL and drop the vendored ./dist folder.
 */
export default async function decorate(block) {
  const { mount } = await import('../jlr-shared/dist/eds-poc.js');
  const container = document.createElement('div');
  container.className = 'jlr-ds-root';
  block.replaceChildren(container);
  mount(container);
}
