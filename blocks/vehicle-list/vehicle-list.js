/**
 * Mounts an asynchronously loaded vehicle-card list. DummyJSON is used until
 * window.JLR_PUBLIC_VEHICLE_API_ORIGIN points to the public vehicle service.
 * @param {Element} block The vehicle-list block element
 */
export default async function decorate(block) {
  const { mountVehicleList } = await import('../jlr-shared/dist/vehicle-list.js');
  const content = [...block.children].reduce((values, row) => {
    const [keyCell, valueCell] = [...row.children];
    const key = keyCell?.textContent.trim().toLowerCase();
    const value = valueCell?.textContent.trim();
    if (key === 'heading' || key === 'description') values[key] = value;
    return values;
  }, {});
  const container = document.createElement('div');
  container.className = 'jlr-ds-root';
  block.replaceChildren(container);
  mountVehicleList(container, 'range-rover', content);
}
