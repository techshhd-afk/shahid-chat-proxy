const chatMessages = document.getElementById('chatMessages');

async function sendMsg(){  
  const text = inputEl.value.trim();
  if(!text) return;
  inputEl.value = "";

  // Append user message
  const userDiv = document.createElement('div');
  userDiv.style.alignSelf = "flex-end";
  userDiv.style.background = "var(--user-msg)";
  userDiv.style.color = "#fff";
  userDiv.style.padding = "8px 12px";
  userDiv.style.borderRadius = "12px";
  userDiv.textContent = text;
  chatMessages.appendChild(userDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Clear AI cards & show loading
  models.forEach(m => {
    const replyEl = document.querySelector('#'+m.name+'-card .ai-reply');
    replyEl.textContent = "";
    document.querySelector('#'+m.name+'-card .progress-dots').style.display = "flex";
  });

  for(const m of models){
    try{
      const payload = {model:m.model,messages:[{role:"system",content:`You are ${m.name} AI.`},{role:"user",content:text}],max_tokens:512,temperature:0.7};
      const res = await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":"Bearer "+m.apiKey},
        body:JSON.stringify(payload)
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "⚠️ No reply";

      // Update AI card
      const replyEl = document.querySelector('#'+m.name+'-card .ai-reply');
      replyEl.textContent = reply;
      document.querySelector('#'+m.name+'-card .progress-dots').style.display="none";

      // Append AI message to chat
      const aiDiv = document.createElement('div');
      aiDiv.style.alignSelf = "flex-start";
      aiDiv.style.background = "var(--bot-msg)";
      aiDiv.style.color = "#000";
      aiDiv.style.padding = "8px 12px";
      aiDiv.style.borderRadius = "12px";
      aiDiv.textContent = `${m.name}: ${reply}`;
      chatMessages.appendChild(aiDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;

    } catch(e){
      const replyEl = document.querySelector('#'+m.name+'-card .ai-reply');
      replyEl.textContent="⚠️ Error: "+e.message;
      document.querySelector('#'+m.name+'-card .progress-dots').style.display="none";
    }
  }
}
