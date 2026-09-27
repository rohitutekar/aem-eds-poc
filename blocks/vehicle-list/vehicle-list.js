/**
 * Mounts an asynchronously loaded vehicle-card list. DummyJSON is used until
 * window.JLR_PUBLIC_VEHICLE_API_ORIGIN points to the public vehicle service.
 * @param {Element} block The vehicle-list block element
 */
export default async function decorate(block) {
  const { mountVehicleList } = await import('../jlr-shared/dist/vehicle-list.js');
  const container = document.createElement('div');
  container.className = 'jlr-ds-root';
  block.replaceChildren(container);
  mountVehicleList(container);
}
