// Utilità
function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}

// Anno nel footer
(function setYear() {
  const yearSpan = $all('#year');
  const year = new Date().getFullYear();
  yearSpan.forEach(span => (span.textContent = year));
})();

// Dark mode toggle
(function themeToggleLogic() {
  const toggle = $('#theme-toggle');
  if (!toggle) return;

  const stored = localStorage.getItem('siteTheme');
  if (stored === 'dark') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', function () {
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('siteTheme', 'light');
      toggle.textContent = '🌙';
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('siteTheme', 'dark');
      toggle.textContent = '☀️';
    }
  });
})();

// Modulo contatto: validazione + invio via mailto
(function contactFormLogic() {
  const form = $('#contact-form');
  if (!form) return;

  const successEl = $('#form-success');

  function showError(fieldName, message) {
    const errorSpan = document.querySelector(`.error-message[data-for="${fieldName}"]`);
    if (errorSpan) {
      errorSpan.textContent = message || '';
    }
  }

  function clearErrors() {
    $all('.error-message').forEach(span => (span.textContent = ''));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    if (successEl) successEl.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const privacyConsent = form['privacy-consent'].checked;

    let valid = true;

    if (!name) {
      showError('name', 'Inserisci il tuo nome e cognome.');
      valid = false;
    }

    if (!email) {
      showError('email', 'Inserisci il tuo indirizzo email.');
      valid = false;
    } else if (!validateEmail(email)) {
      showError('email', 'Inserisci un indirizzo email valido.');
      valid = false;
    }

    if (!subject) {
      showError('subject', 'Inserisci un oggetto per la richiesta.');
      valid = false;
    }

    if (!message) {
      showError('message', 'Descrivi la tua richiesta o il progetto.');
      valid = false;
    }

    if (!privacyConsent) {
      showError('privacy-consent', 'È necessario accettare la Privacy Policy per inviare la richiesta.');
      valid = false;
    }

    if (!valid) return;

    const mailTo = 'info.automationsoftware@gmail.com';
    const mailSubject = encodeURIComponent('[Preventivo] ' + subject);
    const mailBody = encodeURIComponent(
      `Richiesta preventivo dal sito Automation & Software Solutions\n\n` +
      `Nome: ${name}\n` +
      `Email: ${email}\n` +
      `Telefono: ${phone || 'non indicato'}\n\n` +
      `Messaggio:\n${message}\n`
    );

    const mailtoLink = `mailto:${mailTo}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoLink;

    if (successEl) {
      successEl.textContent = 'Richiesta preparata. Si aprirà il tuo client email per completare l’invio.';
    }

    form.reset();
  });
})();

// Gestione cookie + localStorage
(function cookieConsentLogic() {
  const BANNER_KEY = 'cookieConsent';
  const PREF_KEY = 'cookiePreferences';

  const banner = $('#cookie-banner');
  const modal = $('#cookie-modal');
  const acceptAllBtn = $('#cookie-accept-all');
  const rejectAllBtn = $('#cookie-reject-all');
  const customizeBtn = $('#cookie-customize');
  const settingsLink = $('#cookie-settings-link');
  const modalCloseBtn = $('#cookie-modal-close');
  const savePreferencesBtn = $('#cookie-save-preferences');
  const analyticsCheckbox = $('#cookie-analytics');
  const marketingCheckbox = $('#cookie-marketing');

  function getConsent() {
    try {
      const value = localStorage.getItem(BANNER_KEY);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }

  function setConsent(consent) {
    try {
      localStorage.setItem(BANNER_KEY, JSON.stringify(consent));
    } catch {
      // ignore
    }
  }

  function getPreferences() {
    try {
      const value = localStorage.getItem(PREF_KEY);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }

  function setPreferences(prefs) {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    } catch {
      // ignore
    }
  }

  function showBanner() {
    if (!banner) return;
    banner.classList.add('visible');
    banner.setAttribute('aria-hidden', 'false');
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.remove('visible');
    banner.setAttribute('aria-hidden', 'true');
  }

  function showModal() {
    if (!modal) return;
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');

    const prefs = getPreferences();
    if (prefs) {
      if (analyticsCheckbox) analyticsCheckbox.checked = !!prefs.analytics;
      if (marketingCheckbox) marketingCheckbox.checked = !!prefs.marketing;
    }
  }

  function hideModal() {
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
  }

  function initFromStorage() {
    const consent = getConsent();
    const prefs = getPreferences();

    if (!consent) {
      showBanner();
    } else {
      hideBanner();
      if (prefs) {
        if (analyticsCheckbox) analyticsCheckbox.checked = !!prefs.analytics;
        if (marketingCheckbox) marketingCheckbox.checked = !!prefs.marketing;
      }
    }
  }

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', function () {
      setConsent({ status: 'accepted_all', date: new Date().toISOString() });
      setPreferences({ necessary: true, analytics: true, marketing: true });
      hideBanner();
      hideModal();
    });
  }

  if (rejectAllBtn) {
    rejectAllBtn.addEventListener('click', function () {
      setConsent({ status: 'rejected_non_necessary', date: new Date().toISOString() });
      setPreferences({ necessary: true, analytics: false, marketing: false });
      hideBanner();
      hideModal();
    });
  }

  if (customizeBtn) {
    customizeBtn.addEventListener('click', function () {
      showModal();
    });
  }

  if (settingsLink) {
    settingsLink.addEventListener('click', function (e) {
      e.preventDefault();
      showModal();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function () {
      hideModal();
    });
  }

  if (savePreferencesBtn) {
    savePreferencesBtn.addEventListener('click', function () {
      const prefs = {
        necessary: true,
        analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
        marketing: marketingCheckbox ? marketingCheckbox.checked : false
      };
      setPreferences(prefs);
      setConsent({ status: 'custom', date: new Date().toISOString() });
      hideBanner();
      hideModal();
    });
  }

  initFromStorage();
})();
