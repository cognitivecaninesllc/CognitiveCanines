/* Cognitive Canines FAQ chat widget
   One shared file used by every page. Edit the FAQS list below to change answers.
   Each FAQ has: q (button text), a (answer), keys (words that trigger it when typed),
   and an optional link {text, href}. */
(function () {
  'use strict';
  if (window.__cckChat) return;
  window.__cckChat = true;

  var EMAIL = 'admin@cognitivecanines.com';

  var FAQS = [
    { q: 'Which program is right for me?',
      a: 'Our 2 minute intake quiz recommends a starting program based on your dog and your goals. If your dog needs a consultation first, it will tell you that too.',
      keys: ['which program', 'which tier', 'right program', 'right tier', 'recommend', 'not sure', 'quiz', 'best for', 'which one', 'help me choose', 'what should i'],
      link: { text: 'Take the quiz', href: 'quiz.html' } },
    { q: 'What programs do you offer?',
      a: 'We have five tiers: Bronze ($29/mo), Silver ($59/mo), Gold ($149/mo), Platinum ($249/mo), and Celestial ($399/mo). Each builds on the last, from self-paced content up to elite sport and behavior work.',
      keys: ['program', 'tier', 'price', 'cost', 'pricing', 'how much', 'membership', 'bronze', 'silver', 'gold', 'platinum', 'celestial', 'monthly', 'fee', 'afford', 'plans', 'packages'],
      link: { text: 'See all programs', href: 'programs.html' } },
    { q: 'How does training work?',
      a: 'All of our training is 100% virtual and done over video. You and your dog stay at home while you are coached in real time. No travel, no other dogs, no distractions.',
      keys: ['virtual', 'video', 'online', 'zoom', 'remote', 'how does', 'how do you', 'works', 'in person', 'in-person', 'session', 'lesson', 'private lesson'] },
    { q: 'How do I get started?',
      a: 'We are now accepting select clients for select programs. Take the intake quiz, then send an inquiry and we will reach out within 24 hours to talk about you and your dog.',
      keys: ['start', 'begin', 'sign up', 'signup', 'book', 'enroll', 'join', 'register', 'apply', 'inquiry', 'accepting', 'waitlist', 'new client', 'openings', 'availability', 'available'],
      link: { text: 'Send an inquiry', href: 'contact.html' } },
    { q: 'Is there a free consultation?',
      a: 'Yes. Send an inquiry and we will talk through your dog, your goals, and which program makes sense before you commit to anything.',
      keys: ['consult', 'free', 'call', 'talk to', 'speak', 'meet'],
      link: { text: 'Send an inquiry', href: 'contact.html' } },
    { q: 'Will my dog interact with other dogs?',
      a: 'Never. Your dog works only with you, in your own home, in every program. There is no dog-to-dog contact of any kind.',
      keys: ['other dog', 'other dogs', 'dog park', 'socializ', 'interact', 'play date', 'playdate', 'around dogs', 'group class', 'meet dogs'] },
    { q: 'Do you ship equipment?',
      a: 'Yes, starting at the Gold tier. Equipment is shipped based on your dog\'s individual needs and protocol, since not every dog needs the same tools.',
      keys: ['equipment', 'ship', 'leash', 'collar', 'prong', 'muzzle', 'tools', 'gear', 'e-collar', 'ecollar', 'slip lead', 'harness', 'buy'] },
    { q: 'What is your training approach?',
      a: 'We train the dog in front of us. Tools and techniques are chosen for what each dog and handler needs, never out of habit or convenience. Equipment like a basket muzzle or an e-collar is only used if your trainer decides it fits your dog\'s protocol, and everything is talked through with you first.',
      keys: ['punish', 'method', 'philosophy', 'positive', 'force', 'shock', 'aversive', 'approach', 'style', 'balanced', 'treat', 'reward', 'humane', 'techniques'] },
    { q: 'Can you help with aggression or reactivity?',
      a: 'We work with behavior concerns, with minor to moderate cases starting at Platinum. Serious cases, including any bite history, begin with a consultation first so we can make sure we are the right fit and keep everyone safe.',
      keys: ['aggress', 'reactive', 'reactivity', 'bite', 'bit ', 'lunge', 'lunging', 'growl', 'anxiety', 'fear', 'behavior', 'barking', 'resource guard'],
      link: { text: 'Take the quiz', href: 'quiz.html' } },
    { q: 'Do you work with puppies?',
      a: 'Yes. Bronze includes puppy raising guides and a general obedience curriculum you can follow at your own pace.',
      keys: ['puppy', 'puppies', 'young dog', 'baby', 'new dog', 'adopted', 'rescue'] },
    { q: 'Who will I be working with?',
      a: 'Allie Sherman, the owner and operator, coaches you and your dog over video. Your dog only ever works with you, in your home.',
      keys: ['who', 'trainer', 'allie', 'owner', 'behaviorist', 'instructor', 'coach', 'qualif', 'experience', 'credentials'],
      link: { text: 'Our story', href: 'about.html' } },
    { q: 'Where are you located?',
      a: 'We are 100% virtual, so there are no geographic limits. We work with clients anywhere in the world, across all time zones.',
      keys: ['where', 'located', 'location', 'worldwide', 'country', 'international', 'state', 'travel', 'time zone', 'timezone', 'near me', 'local', 'city'] },
    { q: 'Can I cancel anytime?',
      a: 'Bronze and Silver are month to month. Gold has a 2 month minimum, Platinum 3 months, and Celestial 4 months.',
      keys: ['cancel', 'minimum', 'commitment', 'contract', 'month-to-month', 'month to month', 'pause', 'quit', 'how long', 'lock in'] },
    { q: 'What is your guarantee?',
      a: 'If you are not satisfied after your first session, it is on us. We are committed to finding the right approach for you and your dog.',
      keys: ['guarantee', 'satisfied', 'money back', 'refund', 'warranty', 'risk'] },
    { q: 'What is the age requirement?',
      a: 'Our services are for clients 18 years of age and older.',
      keys: ['age requirement', '18', 'how old are you', 'minor', 'under 18', 'teen', 'kid', 'child'] },
    { q: 'Do clients get a portal login?',
      a: 'Yes. Enrolled clients get a private portal with their documents and session recordings.',
      keys: ['portal', 'login', 'log in', 'recording', 'account', 'password', 'sign in'],
      link: { text: 'Client login', href: 'portal/login.html' } },
    { q: 'How can I contact you?',
      a: 'Email us at ' + EMAIL + ' or send an inquiry through our contact page and we will reply within 24 hours.',
      keys: ['email', 'contact', 'phone', 'reach', 'message', 'text you', 'number', 'address'],
      link: { text: 'Contact page', href: 'contact.html' } }
  ];

  var STOP = ['the', 'and', 'you', 'your', 'for', 'are', 'can', 'what', 'with', 'this', 'that', 'have', 'does', 'will'];
  var DEFAULT_CHIPS = ['Which program is right for me?', 'What programs do you offer?', 'How do I get started?'];
  var asked = {};
  var started = false;

  var css = '' +
    '#cck9-btn{position:fixed;bottom:calc(1.25rem + env(safe-area-inset-bottom,0px));right:1.25rem;width:56px;height:56px;border-radius:50%;background:#2d3a2e;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,.25);z-index:90;transition:transform .2s,background .2s}' +
    '#cck9-btn:hover{transform:scale(1.08);background:#4a6741}' +
    '#cck9-btn:focus-visible,.cck9-chip:focus-visible,.cck9-send:focus-visible,.cck9-link:focus-visible{outline:2px solid #e09558;outline-offset:2px}' +
    '#cck9-btn svg{width:26px;height:26px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
    '#cck9-btn .x{display:none}#cck9-btn.open .c{display:none}#cck9-btn.open .x{display:block}' +
    '#cck9-box{position:fixed;bottom:calc(5.5rem + env(safe-area-inset-bottom,0px));right:1.25rem;width:min(360px,calc(100vw - 2.5rem));background:#fff;color:#1a1a18;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.22);z-index:89;display:none;flex-direction:column;overflow:hidden;font-family:"DM Sans",system-ui,sans-serif;max-height:min(560px,calc(100vh - 8rem));max-height:min(560px,calc(100dvh - 8rem))}' +
    '#cck9-box.open{display:flex}' +
    '.cck9-head{background:#2d3a2e;color:#fff;padding:.9rem 1.1rem;display:flex;align-items:center;gap:10px}' +
    '.cck9-av{width:34px;height:34px;border-radius:50%;overflow:hidden;border:2px solid rgba(255,255,255,.3);flex-shrink:0;background:#4a6741}' +
    '.cck9-av img{width:100%;height:100%;object-fit:cover;object-position:center 20%}' +
    '.cck9-name{font-size:14px;font-weight:500}.cck9-sub{font-size:11px;opacity:.7}' +
    '.cck9-msgs{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.7rem;min-height:140px;-webkit-overflow-scrolling:touch}' +
    '.cck9-msg{max-width:88%;padding:.6rem .9rem;border-radius:10px;font-size:14px;line-height:1.5;overflow-wrap:anywhere}' +
    '.cck9-msg.bot{background:#f2f0eb;color:#1a1a18;align-self:flex-start;border-bottom-left-radius:3px}' +
    '.cck9-msg.user{background:#2d3a2e;color:#fff;align-self:flex-end;border-bottom-right-radius:3px}' +
    '.cck9-link{display:inline-block;margin-top:.5rem;padding:.4rem .8rem;border-radius:16px;background:#2d3a2e;color:#fff !important;font-size:13px;text-decoration:none}' +
    '.cck9-link:hover{background:#4a6741}' +
    '.cck9-chips{padding:0 1rem .8rem;display:flex;flex-wrap:wrap;gap:.4rem}' +
    '.cck9-chip{background:transparent;border:1px solid #2d3a2e;color:#2d3a2e;padding:.45rem .8rem;border-radius:20px;font-size:13px;cursor:pointer;font-family:inherit;text-align:left;transition:all .2s}' +
    '.cck9-chip:hover{background:#2d3a2e;color:#fff}' +
    '.cck9-row{display:flex;border-top:1px solid #e0ddd6;padding:.5rem}' +
    '.cck9-input{flex:1;min-width:0;border:none;outline:none;font-family:inherit;font-size:16px;padding:.5rem .6rem;background:transparent;color:inherit}' +
    '.cck9-send{background:none;border:none;cursor:pointer;padding:.4rem .6rem;color:#2d3a2e}' +
    '.cck9-send:hover{color:#4a6741}' +
    '.cck9-send svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
    'footer{padding-bottom:5rem !important}' +
    '@media(min-width:768px){footer{padding-bottom:2rem !important}}' +
    '@media(prefers-color-scheme:dark){#cck9-box{background:#222520;color:#e8e4dc}.cck9-msg.bot{background:#2a2f28;color:#e8e4dc}.cck9-chip{border-color:#5a7d4a;color:#e8e4dc}.cck9-chip:hover{background:#3d5c3e}.cck9-row{border-color:#333830}.cck9-send{color:#8fb87c}.cck9-link{background:#3d5c3e}}';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  var btn, box, msgs, chips, input;

  function build() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    btn = el('button');
    btn.id = 'cck9-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Open FAQ chat');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'cck9-box');
    btn.innerHTML = '<svg class="c" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' +
      '<svg class="x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    btn.addEventListener('click', toggle);

    box = el('div');
    box.id = 'cck9-box';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Cognitive Canines FAQ chat');

    var head = el('div', 'cck9-head');
    var av = el('div', 'cck9-av');
    var img = el('img');
    img.src = 'https://i.imgur.com/Oght24y.jpg';
    img.alt = '';
    av.appendChild(img);
    var ht = el('div');
    ht.appendChild(el('div', 'cck9-name', 'Cognitive Canines'));
    ht.appendChild(el('div', 'cck9-sub', 'Quick answers to common questions'));
    head.appendChild(av);
    head.appendChild(ht);

    msgs = el('div', 'cck9-msgs');
    msgs.setAttribute('aria-live', 'polite');
    chips = el('div', 'cck9-chips');

    var row = el('div', 'cck9-row');
    input = el('input', 'cck9-input');
    input.type = 'text';
    input.placeholder = 'Ask a question...';
    input.maxLength = 200;
    input.setAttribute('aria-label', 'Type your question');
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });
    var sb = el('button', 'cck9-send');
    sb.type = 'button';
    sb.setAttribute('aria-label', 'Send');
    sb.innerHTML = '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    sb.addEventListener('click', send);
    row.appendChild(input);
    row.appendChild(sb);

    box.appendChild(head);
    box.appendChild(msgs);
    box.appendChild(chips);
    box.appendChild(row);

    document.body.appendChild(box);
    document.body.appendChild(btn);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('open')) { toggle(); btn.focus(); }
    });
  }

  function toggle() {
    var open = box.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close FAQ chat' : 'Open FAQ chat');
    if (open && !started) {
      started = true;
      addMsg('bot', 'Hi! I am the Cognitive Canines FAQ assistant. What can I help you with?');
      setChips(DEFAULT_CHIPS);
    }
    if (open && window.matchMedia('(min-width:768px)').matches) input.focus();
  }

  function addMsg(type, text, link) {
    var d = el('div', 'cck9-msg ' + type);
    d.appendChild(document.createTextNode(text));
    if (link) {
      d.appendChild(document.createElement('br'));
      var a = el('a', 'cck9-link', link.text);
      a.href = link.href;
      d.appendChild(a);
    }
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function setChips(list) {
    chips.innerHTML = '';
    list.forEach(function (q) {
      var b = el('button', 'cck9-chip', q);
      b.type = 'button';
      b.addEventListener('click', function () { ask(q); });
      chips.appendChild(b);
    });
  }

  function nextChips(exceptQ) {
    var out = [];
    var order = ['Which program is right for me?', 'What programs do you offer?', 'How do I get started?', 'Is there a free consultation?', 'Do you ship equipment?', 'Can I cancel anytime?', 'Will my dog interact with other dogs?', 'Who will I be working with?', 'What is your training approach?', 'How can I contact you?'];
    for (var i = 0; i < order.length && out.length < 3; i++) {
      if (order[i] !== exceptQ && !asked[order[i]]) out.push(order[i]);
    }
    return out.length ? out : DEFAULT_CHIPS;
  }

  function findFaq(text) {
    var low = ' ' + text.toLowerCase().replace(/[^a-z0-9$\- ]+/g, ' ') + ' ';
    var best = null, bestScore = 0;
    FAQS.forEach(function (f) {
      var score = 0;
      f.keys.forEach(function (k) {
        var kk = k.trim();
        var hit = kk.length <= 4 ? low.indexOf(' ' + kk + ' ') !== -1 : low.indexOf(k) !== -1;
        if (hit && STOP.indexOf(kk) === -1) score += kk.length > 5 ? 2 : 1;
      });
      if (score > bestScore) { best = f; bestScore = score; }
    });
    return best;
  }

  function ask(text) {
    addMsg('user', text);
    chips.innerHTML = '';
    var exact = null;
    FAQS.forEach(function (f) { if (f.q === text) exact = f; });
    var faq = exact || findFaq(text);
    setTimeout(function () {
      if (faq) {
        asked[faq.q] = true;
        addMsg('bot', faq.a, faq.link);
      } else {
        addMsg('bot', 'I am not sure about that one. Send us a message at ' + EMAIL + ' or through our contact page and we will reply within 24 hours.', { text: 'Contact page', href: 'contact.html' });
      }
      setChips(nextChips(faq && faq.q));
    }, 300);
  }

  function send() {
    var v = input.value.trim();
    if (!v) return;
    input.value = '';
    ask(v);
  }

  function init() { build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
