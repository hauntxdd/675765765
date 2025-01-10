(async function () {
  try {
    const menuModule = await import('https://cdn.jsdelivr.net/gh/hauntxdd/675765765@main/utils/menu.js?v=' + Date.now());
    const featuresModule = await import('https://cdn.jsdelivr.net/gh/hauntxdd/675765765@main/features/bypasschatfilters.js?v=' + Date.now());

    const createMenu = menuModule.createMenu;
    const modifyWebSocket = featuresModule.modifyWebSocket;

    let bypassEnabled = false;

    // Tworzymy menu i dopiero po jego stworzeniu szukamy elementów
    const menu = createMenu();

    // Poczekaj aż cały DOM menu zostanie zaktualizowany
    setTimeout(() => {
      const bypassCheckbox = document.getElementById('msp2CheckboxBypass');

      if (!bypassCheckbox) {
        console.error('[MSP2] Nie znaleziono elementu "msp2CheckboxBypass".');
        return;
      }

      bypassCheckbox.addEventListener('change', () => {
        bypassEnabled = bypassCheckbox.checked;
        console.log(`[MSP2] Bypass Unicode ${bypassEnabled ? 'włączony' : 'wyłączony'}`);
        modifyWebSocket(bypassEnabled);
      });
    }, 100); // Czekamy chwilę, by upewnić się, że element został dodany do DOM.
  } catch (error) {
    console.error('[MSP2] Błąd podczas importu modułów:', error);
  }
})();
