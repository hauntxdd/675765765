// main.js
(async function() {
    const menuModule = await import('https://cdn.jsdelivr.net/gh/hauntxdd/msp2@main/utils/menu.js?v=' + Date.now());
    const featuresModule = await import('https://cdn.jsdelivr.net/gh/hauntxdd/msp2@main/features/bypasschatfilters.js?v=' + Date.now());

    // Tworzenie menu
    menuModule.createMenu();

    // Inicjalizacja funkcji z modułu bypasschatfilters.js
    if (featuresModule.initBypassChatFilter) {
        featuresModule.initBypassChatFilter();
    }
})();
