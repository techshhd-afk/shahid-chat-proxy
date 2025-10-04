const models = [
  { id: "gpt-4o-mini", name: "GPT-4o Mini", desc: "Balanced speed and quality", speed: 9, cost: 3, quality: 8 },
  { id: "gpt-4o", name: "GPT-4o", desc: "High quality multimodal", speed: 7, cost: 2, quality: 10 },
  { id: "gpt-4.1-mini", name: "GPT-4.1 Mini", desc: "Reasoning-optimized", speed: 8, cost: 4, quality: 8 },
];

let currentModel = models[0].id;

function renderModels() {
  const grid = document.getElementById("modelGrid");
  grid.innerHTML = models.map(m => `
    <div class="ai-model-card" data-id="${m.id}">
      <div class="model-header">
        <div class="model-avatar"><i class="fa-solid fa-brain"></i></div>
        <div class="model-info">
          <h4>${m.name}</h4>
          <p>${m.desc}</p>
        </div>
      </div>
      <div class="model-stats">
        <div class="stat-item"><div class="stat-value">${m.speed}</div><div class="stat-label">Speed</div></div>
        <div class="stat-item"><div class="stat-value">${m.quality}</div><div class="stat-label">Quality</div></div>
        <div class="stat-item"><div class="stat-value">${m.cost}</div><div class="stat-label">Cost↓</div></div>
      </div>
      <div class="consciousness-meter">
        <div class="consciousness-bar"><div class="consciousness-fill" style="width:${m.quality * 10}%"></div></div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll('.ai-model-card').forEach(card => {
    card.addEventListener('click', () => {
      currentModel = card.getAttribute('data-id');
      toast(`Selected ${currentModel}`);
    });
  });
}

function toast(text) {
  const el = document.createElement('div');
  el.textContent = text;
  el.style.position = 'fixed';
  el.style.bottom = '20px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = 'rgba(0,0,0,0.7)';
  el.style.color = 'white';
  el.style.padding = '10px 16px';
  el.style.borderRadius = '12px';
  el.style.zIndex = '2000';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function addMessage(role, content) {
  const wrap = document.getElementById('messages');
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble ' + (role === 'user' ? 'user' : '');
  bubble.innerHTML = `
    <div class="message-header">
      <div class="message-author">
        <div class="ai-avatar"><i class="fa-solid ${role === 'user' ? 'fa-user' : 'fa-robot'}"></i></div>
        <span>${role === 'user' ? 'You' : 'Nexus'}</span>
      </div>
      <div class="message-meta">
        <span>${new Date().toLocaleTimeString()}</span>
        <span class="confidence-indicator confidence-high">OK</span>
      </div>
    </div>
    <div class="response-content"></div>
  `;
  bubble.querySelector('.response-content').textContent = content;
  wrap.appendChild(bubble);
  wrap.scrollTop = wrap.scrollHeight;
}

async function sendMessage() {
  const textarea = document.getElementById('prompt');
  const text = textarea.value.trim();
  if (!text) return;
  textarea.value = '';
  addMessage('user', text);

  const thinking = document.createElement('div');
  thinking.className = 'message-bubble';
  thinking.innerHTML = `
    <div class="thinking-animation">
      Thinking <div class="thinking-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  document.getElementById('messages').appendChild(thinking);
  document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;

  try {
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: currentModel, message: text })
    });
    const data = await res.json();
    thinking.remove();
    if (data.reply) addMessage('assistant', data.reply);
    else addMessage('assistant', 'No reply received.');
  } catch (e) {
    thinking.remove();
    addMessage('assistant', 'Error: ' + e.message);
  }
}

function wireUI() {
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('prompt').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('messages').innerHTML = '';
  });

  document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  document.getElementById('openFeatures').addEventListener('click', () => {
    document.getElementById('featurePanel').style.display = 'flex';
  });
  document.getElementById('closeFeatures').addEventListener('click', () => {
    document.getElementById('featurePanel').style.display = 'none';
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      document.getElementById('tab-models').style.display = tab === 'models' ? '' : 'none';
      document.getElementById('tab-metrics').style.display = tab === 'metrics' ? '' : 'none';
    });
  });
}

renderModels();
wireUI();
