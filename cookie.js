/* =======================================================
   AUTOMATION & SOFTWARE SOLUTIONS — Cookie Consent
   GDPR-compliant: necessary / analytics / marketing
   Stato salvato in localStorage key: ass_consent
   ======================================================= */

(function () {
  'use strict';

  const STORAGE_KEY = 'ass_consent';

  /* ── Leggi/scrivi consenso ── */
  function getConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
    catch { return null; }
  }

  function saveConsent(prefs) {
    const payload = {
      necessary: true,
      analytics: !!prefs.analytics,
      marketing: !!prefs.marketing,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    hideBanner();
    closeModal();
    applyConsent(payload);
    return payload;
  }

  /* ── Applica il consenso (carica script di terze parti) ── */
  function applyConsent(prefs) {
    // Analytics (Google Analytics o simili)
    if (prefs.analytics) {
      // Decommentare e configurare con il proprio GA4 ID:
      // loadGoogleAnalytics('G-XXXXXXXXXX');
    }
    // Marketing (Pixel FB, Google Ads…)
    if (prefs.marketing) {
      // loadMarketingScripts();
    }
  }

  /* ── Mostra/nascondi banner ── */
  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.display = 'block';
      banner.removeAttribute('aria-hidden');
    }
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.display = 'none';
      banner.setAttribute('aria-hidden', 'true');
    }
  }

  /* ── Apri/chiudi modale ── */
  function openModal() {
    var overlay = document.getElementById('cookie-modal-overlay');
    if (!overlay) return;
    // Precompila toggle con stato attuale
    var consent = getConsent();
    var analytics = document.getElementById('cookie-analytics');
    var marketing = document.getElementById('cookie-marketing');
    if (analytics) analytics.checked = consent ? !!consent.analytics : false;
    if (marketing) marketing.checked = consent ? !!consent.marketing : false;
    overlay.classList.add('active');
    hideBanner();
    // Focus trap
    var firstFocusable = overlay.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) setTimeout(function () { firstFocusable.focus(); }, 50);
  }

  function closeModal() {
    var overlay = document.getElementById('cookie-modal-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  /* ── Inizializzazione ── */
  function init() {
    var consent = getConsent();
    if (!consent) {
      // Prima visita: mostra banner dopo breve ritardo
      setTimeout(showBanner, 700);
    } else {
      applyConsent(consent);
    }

    /* Banner: Accetta tutti */
    var btnAccept = document.getElementById('cookie-accept');
    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        saveConsent({ analytics: true, marketing: true });
      });
    }

    /* Banner: Rifiuta */
    var btnReject = document.getElementById('cookie-reject');
    if (btnReject) {
      btnReject.addEventListener('click', function () {
        saveConsent({ analytics: false, marketing: false });
      });
    }

    /* Banner: Gestisci preferenze */
    var btnManage = document.getElementById('cookie-manage');
    if (btnManage) {
      btnManage.addEventListener('click', openModal);
    }

    /* Modal: Chiudi (×) */
    var btnModalClose = document.getElementById('cookie-modal-close');
    if (btnModalClose) {
      btnModalClose.addEventListener('click', function () {
        closeModal();
        if (!getConsent()) showBanner(); // Rimostra banner se non c'è consenso
      });
    }

    /* Modal: Rifiuta opzionali */
    var btnModalReject = document.getElementById('cookie-modal-reject');
    if (btnModalReject) {
      btnModalReject.addEventListener('click', function () {
        saveConsent({ analytics: false, marketing: false });
      });
    }

    /* Modal: Salva preferenze */
    var btnModalSave = document.getElementById('cookie-modal-save');
    if (btnModalSave) {
      btnModalSave.addEventListener('click', function () {
        var analytics = document.getElementById('cookie-analytics');
        var marketing = document.getElementById('cookie-marketing');
        saveConsent({
          analytics: analytics ? analytics.checked : false,
          marketing: marketing ? marketing.checked : false
        });
      });
    }

    /* Footer: Impostazioni Cookie */
    var btnSettings = document.getElementById('cookie-settings-link');
    if (btnSettings) {
      btnSettings.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    }

    /* Chiudi modale su click overlay */
    var overlay = document.getElementById('cookie-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          closeModal();
          if (!getConsent()) showBanner();
        }
      });
    }

    /* Chiudi modale con Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var o = document.getElementById('cookie-modal-overlay');
        if (o && o.classList.contains('active')) {
          closeModal();
          if (!getConsent()) showBanner();
        }
      }
    });
  }

  /* Avvia dopo caricamento DOM */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
