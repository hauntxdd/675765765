// utils/menu.js
export function createMenu() {
  const style = document.createElement('style');
  style.innerHTML = `
    #menu {
      display: none;
      width: 600px;
      height: 700px;
      padding: 25px;
      background-color: #121212;
      border: 1px solid #2a2a2a;
      border-radius: 10px;
      position: absolute;
      top: 50px;
      left: 50px;
      z-index: 9999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #f0f0f0;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
      cursor: move;
    }

    .tabs {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #2a2a2a;
      margin-bottom: 15px;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 8px;
      cursor: pointer;
      color: #d1d1d1;
      background-color: #1c1c1c;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font-size: 0.9em;
    }

    .tab.active {
      background-color: #007acc;
      color: white;
    }

    .tab-content {
      display: none;
      height: calc(100% - 110px);
      padding-bottom: 50px;
      box-sizing: border-box;
    }

    .tab-content.active {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      height: calc(100% - 100px);
    }

    .footer {
      text-align: right;
      font-size: 0.8em;
      color: #888;
      position: absolute;
      bottom: 10px;
      right: 10px;
      user-select: none;
    }
  `;
  document.head.appendChild(style);

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.innerHTML = `
    <h3>⚙️ Panel Narzędzi</h3>
    <div class="tabs">
      <div class="tab active" data-tab="tab-1">A</div>
      <div class="tab" data-tab="tab-2">B</div>
      <div class="tab" data-tab="tab-3">C</div>
      <div class="tab" data-tab="tab-4">D</div>
      <div class="tab" data-tab="tab-5">E</div>
      <div class="tab" data-tab="tab-6">F</div>
    </div>
    <div class="tab-content active" id="tab-1">
      <p>Zawartość zakładki A</p>
    </div>
    <div class="tab-content" id="tab-2">
      <p>Zawartość zakładki B</p>
    </div>
    <div class="tab-content" id="tab-3">
      <p>Zawartość zakładki C</p>
    </div>
    <div class="tab-content" id="tab-4">
      <p>Zawartość zakładki D</p>
    </div>
    <div class="tab-content" id="tab-5">
      <p>Zawartość zakładki E</p>
    </div>
    <div class="tab-content" id="tab-6">
      <label class="control control-checkbox">
        Watermark
        <input type="checkbox" class="toggle" />
        <div class="control_indicator"></div>
      </label>
    </div>
    <div class="footer">Made by kokaina</div>
  `;

  document.body.appendChild(menu);

  let isDragging = false;
  let offsetX, offsetY;

  // Obsługa przeciągania
  menu.addEventListener('mousedown', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
      isDragging = true;
      offsetX = e.clientX - menu.getBoundingClientRect().left;
      offsetY = e.clientY - menu.getBoundingClientRect().top;
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      menu.style.left = `${e.clientX - offsetX}px`;
      menu.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Obsługa przełączania widoczności
  document.addEventListener('keypress', (e) => {
    if (e.key === '.') {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  });

  // Obsługa zakładek
  const tabs = menu.querySelectorAll('.tab');
  const tabContents = menu.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tabContents.forEach((tc) => tc.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  return menu;
}
