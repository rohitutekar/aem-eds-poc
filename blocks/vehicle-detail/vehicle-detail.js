/**
 * Dynamically loads a vehicle detail by the vehicle ID in the page URL.
 * Set window.JLR_PUBLIC_VEHICLE_API_ORIGIN to the public API origin before
 * loading the page; the bundle defaults to http://localhost:8787 locally.
 * @param {Element} block The vehicle-detail block element
 */
export default async function decorate(block) {
  const { mountVehicleDetail } = await import('../jlr-shared/dist/vehicle-detail.js');
  const container = document.createElement('div');
  container.className = 'jlr-ds-root';
  block.replaceChildren(container);
  mountVehicleDetail(container);
}
