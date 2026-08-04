/* =============================================================
   Automation & Software Solutions — i18n.js
   Lingue native: IT · EN · DE · ES · PT · FR · HR · SL · RO
   Auto-traduzione: qualsiasi altra lingua via MyMemory API
   Cache: localStorage (7 giorni per lingua auto-tradotta)
   ============================================================= */

/* ─── METADATI LINGUA ─────────────────────────────────────── */
const LANG_META = {
  it: { name: 'Italiano',    flag: '🇮🇹', code: 'IT' },
  en: { name: 'English',     flag: '🇬🇧', code: 'EN' },
  de: { name: 'Deutsch',     flag: '🇩🇪', code: 'DE' },
  es: { name: 'Español',     flag: '🇪🇸', code: 'ES' },
  pt: { name: 'Português',   flag: '🇵🇹', code: 'PT' },
  fr: { name: 'Français',    flag: '🇫🇷', code: 'FR' },
  hr: { name: 'Hrvatski',    flag: '🇭🇷', code: 'HR' },
  sl: { name: 'Slovenščina', flag: '🇸🇮', code: 'SL' },
  ro: { name: 'Română',      flag: '🇷🇴', code: 'RO' },
};

/* ─── TRADUZIONI ──────────────────────────────────────────── */
const I18N = {

/* ══════════════════════ ITALIANO ══════════════════════════ */
it: {
  'nav.services':'Servizi','nav.tech':'Tecnologie','nav.about':'Chi Siamo','nav.cta':'Richiedi Preventivo',
  'hero.badge':'Software · Web · Automazione Industriale',
  'hero.h1':'Sviluppo Software<br><em>Su Misura</em> per Ogni Esigenza',
  'hero.desc':'Realizziamo <strong>applicazioni web, gestionali e software su misura</strong> per qualsiasi settore, e siamo specialisti in <strong>PLC, HMI, SCADA e Robotica</strong> per l\'industria. Un solo partner per ogni progetto software.',
  'hero.cta1':'Richiedi un Preventivo','hero.cta2':'Scopri i Servizi',
  'services.label':'Cosa Facciamo','services.h2':'Sviluppo Software, Web &amp; Automazione',
  'services.desc':'Applicazioni web, gestionali e software su misura per qualsiasi settore — e soluzioni complete per l\'automazione industriale: PLC, HMI, SCADA, Robotica e Consulenza IT/OT.',
  'card.plc.h':'Sviluppo PLC','card.plc.p':'Programmazione per Siemens S7-1200/S7-1500, Rockwell Allen-Bradley ed <strong>Emerson</strong>. Ladder, FBD, SCL e ST con TIA Portal e Studio 5000. Sistemi di controllo sicuri e manutenibili.',
  'card.hmi.h':'Progettazione HMI','card.hmi.p':'Interfacce operatore intuitive ed ergonomiche. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> e soluzioni web-based conformi ISA-101.',
  'card.scada.h':'Sistemi SCADA','card.scada.p':'Integrazione e sviluppo SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Acquisizione dati real-time, allarmi, trend storici e reportistica avanzata.',
  'card.robot.h':'Robotica Industriale','card.robot.p':'Programmazione e integrazione di robot industriali e cobot. Cicli di lavoro, integrazione PLC e visione artificiale per assemblaggio, pick&amp;place e saldatura.',
  'card.python.h':'Applicazioni Python','card.python.p':'Script di automazione, data analysis, API REST per MES/ERP, dashboard di monitoraggio. Integrazione PLC via OPC-UA e Modbus.',
  'card.web.h':'Sviluppo Web &amp; Software','card.web.p':'Applicazioni web, gestionali, e-commerce e API REST in Python, PHP, Java e C/C++. Frontend, backend, database e software desktop per qualsiasi tipo di azienda.',
  'card.itot.h':'Consulenza IT &amp; OT','card.itot.p':'Reti IT/OT, segmentazione DMZ, audit cybersecurity OT. <strong>MS SQL</strong>, Windows/Linux/macOS, virtualizzazione VMware/Hyper-V e supporto infrastruttura.',
  'tech.label':'Tecnologie &amp; Piattaforme',
  'about.label':'Chi Siamo','about.h2':'Un solo partner per software, web e automazione',
  'about.p1':'Sviluppiamo software su misura per aziende di ogni settore: dai siti web e applicazioni gestionali alle soluzioni di automazione industriale più complesse.',
  'about.p2':'Non siamo solo specialisti di automazione: realizziamo web app, e-commerce, API, programmi desktop e database per clienti di qualsiasi settore. Per il manifatturiero integriamo entrambi i mondi.',
  'about.li1':'Sviluppo web, gestionali, e-commerce e app su misura','about.li2':'Programmazione PLC, HMI, SCADA e Robotica per l\'industria',
  'about.li3':'Integrazione ERP/MES con reti OT di produzione','about.li4':'Database MS SQL, MySQL, PostgreSQL e infrastruttura IT/OS',
  'about.li5':'Consulenza tecnica, formazione e supporto continuativo',
  'cta.label':'Inizia il tuo Progetto','cta.h2':'Hai un progetto software, web<br>o di automazione industriale?',
  'cta.p':'Che si tratti di un sito web, un gestionale, un\'app, un PLC o un sistema SCADA — contattaci per una consulenza gratuita senza impegno.',
  'cta.btn':'Richiedi Preventivo Gratuito','cta.loc':'Provincia di Rovigo, Veneto – Italia',
  'contact.label':'Contatti','contact.h2':'Parliamo del tuo progetto',
  'contact.p':'Che sia un sito web, un gestionale, un\'app mobile o un sistema PLC — compila il modulo per ricevere un preventivo su misura. Risposta entro 24 ore lavorative.',
  'contact.tel':'Telefono','contact.email':'Email','contact.addr':'Sede','contact.addr.v':'Provincia di Rovigo, Veneto – Italia','contact.hours':'Orari','contact.hours.v':'Lun–Ven&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Richiedi un preventivo','form.nome':'Nome','form.cognome':'Cognome','form.email':'Email','form.tel':'Telefono','form.azienda':'Azienda','form.servizio':'Tipo di Servizio','form.msg':'Descrizione del Progetto',
  'form.privacy':'Ho letto e accetto la <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>. Acconsento al trattamento dei dati personali.',
  'form.required':'* Campi obbligatori','form.submit':'Invia Richiesta di Preventivo','form.sending':'Invio in corso…',
  'form.success':'✅ Messaggio inviato! Ti risponderemo entro 24 ore lavorative.',
  'form.error':'❌ Errore nell\'invio. Scrivi a <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Mario','ph.cognome':'Rossi','ph.email':'mario@azienda.it','ph.tel':'+39 …','ph.azienda':'Nome Azienda S.r.l.','ph.msg':'Descrivi il tuo progetto: tecnologie, obiettivi, tempistiche…',
  'err.nome':'Inserisci il tuo nome','err.cognome':'Inserisci il cognome','err.email':'Email non valida','err.servizio':'Seleziona un servizio','err.msg':'Inserisci una descrizione',
  'og.industrial':'Automazione Industriale','og.software':'Sviluppo Software','og.it':'IT &amp; Infrastruttura',
  'opt.default':'– Seleziona un servizio –','opt.plc':'Sviluppo PLC (Siemens / Rockwell / Emerson)','opt.hmi':'Progettazione HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Sistema SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Robotica Industriale','opt.python':'Applicazione Python','opt.web':'Sviluppo Web &amp; PHP','opt.javac':'Sviluppo Java / C / C++',
  'opt.itot':'Consulenza IT / OT','opt.db':'Database MS SQL / MySQL','opt.infra':'Sistemi Operativi &amp; Virtualizzazione','opt.integ':'Integrazione IT/OT','opt.altro':'Altro',
  'footer.services':'Servizi','footer.contacts':'Contatti','footer.brand':'Sviluppo software su misura: web, gestionali, PLC, HMI, SCADA, robotica. Python, PHP, Java, C, MS SQL. Consulenza IT/OT. Provincia di Rovigo – Italia.',
  'footer.hours':'Lun–Ven&nbsp;08:30–18:00','footer.loc':'Provincia di Rovigo, Veneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Tutti i diritti riservati.',
  'footer.privacy':'Privacy Policy','footer.cookie':'Cookie Policy','footer.settings':'Impostazioni Cookie',
  'ck.title':'🍪 Utilizziamo i cookie','ck.desc':'Usiamo cookie tecnici necessari e, con il tuo consenso, cookie analitici e di marketing. Leggi la <a href="cookie-policy.html">Cookie Policy</a>.','ck.reject':'Rifiuta','ck.manage':'Gestisci Preferenze','ck.accept':'Accetta Tutti',
  'cm.title':'⚙️ Preferenze Cookie','cm.desc':'Seleziona quali cookie abilitare. I cookie necessari non possono essere disabilitati.',
  'cm.nec':'🔒 Cookie Necessari','cm.nec.p':'Essenziali per il funzionamento del sito. Non raccolgono dati identificabili.',
  'cm.always':'Sempre attivi','cm.ana':'📊 Cookie Analytics','cm.ana.p':'Dati aggregati e anonimi sull\'uso del sito (es. Google Analytics 4).',
  'cm.mkt':'📣 Cookie Marketing','cm.mkt.p':'Annunci personalizzati su piattaforme esterne (Google Ads, Meta Pixel).','cm.rejectOpt':'Rifiuta Opzionali','cm.save':'Salva Preferenze',
  'auto.translating':'Traduzione in corso…','auto.error':'Traduzione automatica non disponibile. Visualizzazione in italiano.',
  'legal.note':'',
},

/* ══════════════════════ ENGLISH ════════════════════════════ */
en: {
  'nav.services':'Services','nav.tech':'Technologies','nav.about':'About Us','nav.cta':'Get a Quote',
  'hero.badge':'Software · Web · Industrial Automation',
  'hero.h1':'Custom Software<br><em>Solutions</em> for Every Need',
  'hero.desc':'We build <strong>web applications, management systems and bespoke software</strong> for any industry, and we specialise in <strong>PLC, HMI, SCADA and Robotics</strong> for industrial automation. One partner for every software project.',
  'hero.cta1':'Request a Quote','hero.cta2':'Our Services',
  'services.label':'What We Do','services.h2':'Software Development, Web &amp; Automation',
  'services.desc':'Web apps, management systems and custom software for any sector — plus complete industrial automation: PLC, HMI, SCADA, Robotics and IT/OT Consulting.',
  'card.plc.h':'PLC Development','card.plc.p':'Programming for Siemens S7-1200/S7-1500, Rockwell Allen-Bradley and <strong>Emerson</strong>. Ladder, FBD, SCL and ST with TIA Portal and Studio 5000. Reliable, maintainable control systems.',
  'card.hmi.h':'HMI Design','card.hmi.p':'Intuitive, ergonomic operator interfaces. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> and responsive web-based HMI compliant with ISA-101.',
  'card.scada.h':'SCADA Systems','card.scada.p':'Integration and development of SCADA systems: <strong>GE iFIX</strong>, Ignition, WinCC OA. Real-time data, alarms, trends and advanced reporting.',
  'card.robot.h':'Industrial Robotics','card.robot.p':'Programming and integration of industrial robots and cobots. Work cycles, PLC integration and machine vision for assembly, pick&amp;place and welding.',
  'card.python.h':'Python Applications','card.python.p':'Automation scripts, industrial data analysis, REST APIs for MES/ERP, monitoring dashboards. PLC integration via OPC-UA and Modbus.',
  'card.web.h':'Web &amp; Software Development','card.web.p':'Web applications, management systems, e-commerce and REST APIs in Python, PHP, Java and C/C++. Frontend, backend, databases and desktop software for any business.',
  'card.itot.h':'IT &amp; OT Consulting','card.itot.p':'IT/OT network integration, DMZ segmentation, OT cybersecurity audits. <strong>MS SQL</strong>, Windows/Linux/macOS, VMware/Hyper-V virtualisation and infrastructure support.',
  'tech.label':'Technologies &amp; Platforms',
  'about.label':'About Us','about.h2':'One partner for software, web and automation',
  'about.p1':'We develop custom software for companies of all sizes and sectors: from websites and management systems to complex industrial automation solutions.',
  'about.p2':'We are not only automation specialists: we build web apps, e-commerce, APIs, desktop programmes and databases for clients in any sector. For manufacturers, we bridge both worlds.',
  'about.li1':'Custom web, management systems, e-commerce and apps for any sector','about.li2':'PLC, HMI, SCADA and Robotics programming for industry',
  'about.li3':'ERP/MES integration with OT production networks','about.li4':'MS SQL, MySQL, PostgreSQL databases and IT/OS infrastructure',
  'about.li5':'Technical consulting, training and ongoing support',
  'cta.label':'Start Your Project','cta.h2':'Have a software, web<br>or industrial automation project?',
  'cta.p':'Whether it\'s a website, a management system, an app, a PLC or a SCADA — contact us for a free technical consultation with no commitment.',
  'cta.btn':'Request a Free Quote','cta.loc':'Province of Rovigo, Veneto – Italy',
  'contact.label':'Contact Us','contact.h2':'Let\'s talk about your project',
  'contact.p':'Whether it\'s a website, a management system, a mobile app or a PLC — fill in the form for a tailored quote. We reply within 24 business hours.',
  'contact.tel':'Phone','contact.email':'Email','contact.addr':'Location','contact.addr.v':'Province of Rovigo, Veneto – Italy','contact.hours':'Hours','contact.hours.v':'Mon–Fri&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Request a quote','form.nome':'First Name','form.cognome':'Last Name','form.email':'Email','form.tel':'Phone','form.azienda':'Company','form.servizio':'Service Type','form.msg':'Project Description',
  'form.privacy':'I have read and accept the <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a> and consent to the processing of my personal data.',
  'form.required':'* Required fields','form.submit':'Send Quote Request','form.sending':'Sending…',
  'form.success':'✅ Message sent! We\'ll reply within 24 business hours.',
  'form.error':'❌ Sending failed. Please email us at <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'John','ph.cognome':'Smith','ph.email':'john@company.com','ph.tel':'+39 …','ph.azienda':'Company Ltd.','ph.msg':'Describe your project: technologies, goals, timeline…',
  'err.nome':'Please enter your first name','err.cognome':'Please enter your last name','err.email':'Please enter a valid email','err.servizio':'Please select a service','err.msg':'Please describe your project',
  'og.industrial':'Industrial Automation','og.software':'Software Development','og.it':'IT &amp; Infrastructure',
  'opt.default':'– Select a service –','opt.plc':'PLC Development (Siemens / Rockwell / Emerson)','opt.hmi':'HMI Design (WinCC / Movicon / Weintek)',
  'opt.scada':'SCADA System (GE iFIX / Ignition / WinCC OA)','opt.robot':'Industrial Robotics','opt.python':'Python Application','opt.web':'Web Development &amp; PHP','opt.javac':'Java / C / C++ Development',
  'opt.itot':'IT / OT Consulting','opt.db':'Database MS SQL / MySQL','opt.infra':'Operating Systems &amp; Virtualisation','opt.integ':'IT/OT Integration','opt.altro':'Other',
  'footer.services':'Services','footer.contacts':'Contacts','footer.brand':'Custom software for any sector: web apps, management systems, PLC, HMI, SCADA, robotics. Python, PHP, Java, C, MS SQL. IT/OT consulting. Province of Rovigo – Italy.',
  'footer.hours':'Mon–Fri&nbsp;08:30–18:00','footer.loc':'Province of Rovigo, Veneto','footer.copy':'© 2025 Automation &amp; Software Solutions. All rights reserved.',
  'footer.privacy':'Privacy Policy','footer.cookie':'Cookie Policy','footer.settings':'Cookie Settings',
  'ck.title':'🍪 We use cookies','ck.desc':'We use necessary technical cookies and, with your consent, analytics and marketing cookies. Read our <a href="cookie-policy.html">Cookie Policy</a>.','ck.reject':'Reject','ck.manage':'Manage Preferences','ck.accept':'Accept All',
  'cm.title':'⚙️ Cookie Preferences','cm.desc':'Select which cookie categories to enable. Necessary cookies cannot be disabled.',
  'cm.nec':'🔒 Necessary Cookies','cm.nec.p':'Essential for the site to function. They do not collect identifiable data.',
  'cm.always':'Always on','cm.ana':'📊 Analytics Cookies','cm.ana.p':'Aggregated, anonymous site usage data (e.g. Google Analytics 4).',
  'cm.mkt':'📣 Marketing Cookies','cm.mkt.p':'Personalised ads on external platforms (Google Ads, Meta Pixel).','cm.rejectOpt':'Reject Optional','cm.save':'Save Preferences',
  'auto.translating':'Translating…','auto.error':'Auto-translation unavailable. Displaying in Italian.',
  'legal.note':'⚠️ The legal text (Privacy Policy / Cookie Policy) is available in Italian only, as required by Italian law.',
},

/* ══════════════════════ DEUTSCH ════════════════════════════ */
de: {
  'nav.services':'Leistungen','nav.tech':'Technologien','nav.about':'Über uns','nav.cta':'Angebot anfragen',
  'hero.badge':'Software · Web · Industrieautomation',
  'hero.h1':'Maßgeschneiderte<br><em>Softwarelösungen</em> für jeden Bedarf',
  'hero.desc':'Wir entwickeln <strong>Webanwendungen, Verwaltungssysteme und individuelle Software</strong> für jede Branche und sind Spezialisten für <strong>SPS, HMI, SCADA und Robotik</strong> in der Industrieautomation.',
  'hero.cta1':'Angebot anfordern','hero.cta2':'Unsere Leistungen',
  'services.label':'Was wir machen','services.h2':'Softwareentwicklung, Web &amp; Automation',
  'services.desc':'Webanwendungen, Verwaltungssysteme und individuelle Software für jede Branche — plus vollständige Industrieautomation: SPS, HMI, SCADA, Robotik und IT/OT-Beratung.',
  'card.plc.h':'SPS-Entwicklung','card.plc.p':'Programmierung für Siemens S7-1200/S7-1500, Rockwell Allen-Bradley und <strong>Emerson</strong>. Ladder, FBD, SCL und ST mit TIA Portal und Studio 5000.',
  'card.hmi.h':'HMI-Entwicklung','card.hmi.p':'Intuitive, ergonomische Bedieneroberflächen. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> und responsive Web-HMI nach ISA-101.',
  'card.scada.h':'SCADA-Systeme','card.scada.p':'Integration und Entwicklung von SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Echtzeit-Daten, Alarme, Trends und erweiterte Berichte.',
  'card.robot.h':'Industrierobotik','card.robot.p':'Programmierung und Integration von Industrierobotern und Cobots. Arbeitszyklen, SPS-Integration und Bildverarbeitung für Montage, Pick&amp;Place und Schweißen.',
  'card.python.h':'Python-Anwendungen','card.python.p':'Automatisierungsskripte, industrielle Datenanalyse, REST-APIs für MES/ERP, Überwachungs-Dashboards. SPS-Integration über OPC-UA und Modbus.',
  'card.web.h':'Web- &amp; Softwareentwicklung','card.web.p':'Webanwendungen, Verwaltungssysteme, E-Commerce und REST-APIs in Python, PHP, Java und C/C++. Frontend, Backend und Datenbanken für jedes Unternehmen.',
  'card.itot.h':'IT- &amp; OT-Beratung','card.itot.p':'IT/OT-Integration, industrielle DMZ-Segmentierung, OT-Cybersecurity-Audits. <strong>MS SQL</strong>, Windows/Linux/macOS, VMware/Hyper-V und Infrastruktur-Support.',
  'tech.label':'Technologien &amp; Plattformen',
  'about.label':'Über uns','about.h2':'Ein Partner für Software, Web und Automation',
  'about.p1':'Wir entwickeln individuelle Software für Unternehmen jeder Größe: von Websites und Verwaltungssystemen bis hin zu komplexen Industrieautomationslösungen.',
  'about.p2':'Wir sind nicht nur Automatisierungsspezialisten: wir entwickeln Web-Apps, E-Commerce, APIs und Desktop-Software für Kunden jeder Branche.',
  'about.li1':'Web, Verwaltungssysteme, E-Commerce und Apps für jede Branche','about.li2':'SPS-, HMI-, SCADA- und Robotik-Programmierung',
  'about.li3':'ERP/MES-Integration mit OT-Produktionsnetzwerken','about.li4':'MS SQL, MySQL, PostgreSQL und IT-Infrastruktur',
  'about.li5':'Technische Beratung, Schulung und laufender Support',
  'cta.label':'Projekt starten','cta.h2':'Haben Sie ein Software-, Web-<br>oder Automatisierungsprojekt?',
  'cta.p':'Ob Website, Verwaltungssystem, App, SPS oder SCADA — kontaktieren Sie uns für eine kostenlose Beratung.',
  'cta.btn':'Kostenloses Angebot anfordern','cta.loc':'Provinz Rovigo, Venetien – Italien',
  'contact.label':'Kontakt','contact.h2':'Sprechen wir über Ihr Projekt',
  'contact.p':'Ob Website, App oder SPS-System — füllen Sie das Formular aus. Wir antworten innerhalb von 24 Arbeitsstunden.',
  'contact.tel':'Telefon','contact.email':'E-Mail','contact.addr':'Standort','contact.addr.v':'Provinz Rovigo, Venetien – Italien','contact.hours':'Öffnungszeiten','contact.hours.v':'Mo–Fr&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Angebot anfordern','form.nome':'Vorname','form.cognome':'Nachname','form.email':'E-Mail','form.tel':'Telefon','form.azienda':'Unternehmen','form.servizio':'Leistungsart','form.msg':'Projektbeschreibung',
  'form.privacy':'Ich akzeptiere die <a href="privacy-policy.html" target="_blank" rel="noopener">Datenschutzerklärung</a> und stimme der Verarbeitung meiner Daten zu.',
  'form.required':'* Pflichtfelder','form.submit':'Angebotsanfrage senden','form.sending':'Wird gesendet…',
  'form.success':'✅ Nachricht gesendet! Wir antworten innerhalb von 24 Arbeitsstunden.',
  'form.error':'❌ Fehler beim Senden. Schreiben Sie uns: <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Max','ph.cognome':'Müller','ph.email':'max@firma.de','ph.tel':'+39 …','ph.azienda':'Firma GmbH','ph.msg':'Beschreiben Sie Ihr Projekt: Technologien, Ziele, Zeitplan…',
  'err.nome':'Bitte Vornamen eingeben','err.cognome':'Bitte Nachnamen eingeben','err.email':'Bitte gültige E-Mail eingeben','err.servizio':'Bitte Leistungsart wählen','err.msg':'Bitte Projektbeschreibung eingeben',
  'og.industrial':'Industrieautomation','og.software':'Softwareentwicklung','og.it':'IT &amp; Infrastruktur',
  'opt.default':'– Leistungsart wählen –','opt.plc':'SPS (Siemens / Rockwell / Emerson)','opt.hmi':'HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Industrierobotik','opt.python':'Python-Anwendung','opt.web':'Webentwicklung &amp; PHP','opt.javac':'Java / C / C++',
  'opt.itot':'IT / OT-Beratung','opt.db':'Datenbank MS SQL / MySQL','opt.infra':'Betriebssysteme &amp; Virtualisierung','opt.integ':'IT/OT-Integration','opt.altro':'Sonstiges',
  'footer.services':'Leistungen','footer.contacts':'Kontakt','footer.brand':'Individuelle Software für jede Branche: Web-Apps, SPS, HMI, SCADA, Robotik. Python, PHP, Java, C, MS SQL. IT/OT-Beratung. Provinz Rovigo – Italien.',
  'footer.hours':'Mo–Fr&nbsp;08:30–18:00','footer.loc':'Provinz Rovigo, Venetien','footer.copy':'© 2025 Automation &amp; Software Solutions. Alle Rechte vorbehalten.',
  'footer.privacy':'Datenschutzerklärung','footer.cookie':'Cookie-Richtlinie','footer.settings':'Cookie-Einstellungen',
  'ck.title':'🍪 Wir verwenden Cookies','ck.desc':'Wir verwenden notwendige Cookies und, mit Ihrer Einwilligung, Analyse- und Marketing-Cookies. Lesen Sie unsere <a href="cookie-policy.html">Cookie-Richtlinie</a>.','ck.reject':'Ablehnen','ck.manage':'Einstellungen','ck.accept':'Alle akzeptieren',
  'cm.title':'⚙️ Cookie-Einstellungen','cm.desc':'Wählen Sie, welche Cookies aktiviert werden sollen. Notwendige Cookies können nicht deaktiviert werden.',
  'cm.nec':'🔒 Notwendige Cookies','cm.nec.p':'Unbedingt erforderlich. Keine personenbezogenen Daten.',
  'cm.always':'Immer aktiv','cm.ana':'📊 Analyse-Cookies','cm.ana.p':'Aggregierte, anonyme Nutzungsdaten (z. B. Google Analytics 4).',
  'cm.mkt':'📣 Marketing-Cookies','cm.mkt.p':'Personalisierte Werbung (Google Ads, Meta Pixel).','cm.rejectOpt':'Optionale ablehnen','cm.save':'Einstellungen speichern',
  'auto.translating':'Übersetzung läuft…','auto.error':'Automatische Übersetzung nicht verfügbar. Anzeige auf Italienisch.',
  'legal.note':'⚠️ Der Rechtstext ist nur auf Italienisch verfügbar (gesetzliche Pflicht).',
},

/* ══════════════════════ ESPAÑOL ════════════════════════════ */
es: {
  'nav.services':'Servicios','nav.tech':'Tecnologías','nav.about':'Quiénes somos','nav.cta':'Solicitar presupuesto',
  'hero.badge':'Software · Web · Automatización Industrial',
  'hero.h1':'Soluciones Software<br><em>a Medida</em> para Cada Necesidad',
  'hero.desc':'Desarrollamos <strong>aplicaciones web, sistemas de gestión y software personalizado</strong> para cualquier sector, y somos especialistas en <strong>PLC, HMI, SCADA y Robótica</strong> para la industria.',
  'hero.cta1':'Solicitar presupuesto','hero.cta2':'Nuestros servicios',
  'services.label':'Qué hacemos','services.h2':'Desarrollo Software, Web &amp; Automatización',
  'services.desc':'Aplicaciones web, sistemas de gestión y software a medida para cualquier sector — más automatización industrial completa: PLC, HMI, SCADA, Robótica y Consultoría IT/OT.',
  'card.plc.h':'Desarrollo PLC','card.plc.p':'Programación para Siemens S7-1200/S7-1500, Rockwell Allen-Bradley y <strong>Emerson</strong>. Ladder, FBD, SCL y ST con TIA Portal y Studio 5000.',
  'card.hmi.h':'Diseño HMI','card.hmi.p':'Interfaces de operador intuitivas y ergonómicas. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> y soluciones web conformes con ISA-101.',
  'card.scada.h':'Sistemas SCADA','card.scada.p':'Integración y desarrollo SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Datos en tiempo real, alarmas, tendencias e informes avanzados.',
  'card.robot.h':'Robótica Industrial','card.robot.p':'Programación e integración de robots industriales y colaborativos. Ciclos de trabajo, integración PLC y visión artificial para ensamblaje, pick&amp;place y soldadura.',
  'card.python.h':'Aplicaciones Python','card.python.p':'Scripts de automatización, análisis de datos industriales, APIs REST para MES/ERP. Integración con PLC via OPC-UA y Modbus.',
  'card.web.h':'Desarrollo Web &amp; Software','card.web.p':'Aplicaciones web, sistemas de gestión, e-commerce y APIs REST en Python, PHP, Java y C/C++. Frontend, backend y bases de datos para cualquier empresa.',
  'card.itot.h':'Consultoría IT &amp; OT','card.itot.p':'Integración redes IT/OT, segmentación DMZ, auditorías ciberseguridad OT. <strong>MS SQL</strong>, Windows/Linux/macOS, virtualización VMware/Hyper-V.',
  'tech.label':'Tecnologías &amp; Plataformas',
  'about.label':'Quiénes somos','about.h2':'Un único partner para software, web y automatización',
  'about.p1':'Desarrollamos software a medida para empresas de todos los sectores: desde sitios web y sistemas de gestión hasta las soluciones de automatización industrial más complejas.',
  'about.p2':'No somos solo especialistas en automatización: desarrollamos web apps, e-commerce, APIs y software de escritorio para clientes de cualquier sector.',
  'about.li1':'Web, sistemas de gestión, e-commerce y apps a medida','about.li2':'Programación PLC, HMI, SCADA y Robótica para la industria',
  'about.li3':'Integración ERP/MES con redes OT de producción','about.li4':'Bases de datos MS SQL, MySQL, PostgreSQL e infraestructura IT',
  'about.li5':'Consultoría técnica, formación y soporte continuo',
  'cta.label':'Inicia tu proyecto','cta.h2':'¿Tienes un proyecto de software, web<br>o automatización industrial?',
  'cta.p':'Ya sea un sitio web, un sistema de gestión, una app, un PLC o un SCADA — contáctanos para una consulta técnica gratuita sin compromiso.',
  'cta.btn':'Solicitar presupuesto gratuito','cta.loc':'Provincia de Rovigo, Véneto – Italia',
  'contact.label':'Contacto','contact.h2':'Hablemos de tu proyecto',
  'contact.p':'Rellena el formulario para recibir un presupuesto personalizado. Respondemos en 24 horas laborables.',
  'contact.tel':'Teléfono','contact.email':'Email','contact.addr':'Sede','contact.addr.v':'Provincia de Rovigo, Véneto – Italia','contact.hours':'Horario','contact.hours.v':'Lun–Vie&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Solicitar presupuesto','form.nome':'Nombre','form.cognome':'Apellido','form.email':'Email','form.tel':'Teléfono','form.azienda':'Empresa','form.servizio':'Tipo de servicio','form.msg':'Descripción del proyecto',
  'form.privacy':'He leído y acepto la <a href="privacy-policy.html" target="_blank" rel="noopener">Política de Privacidad</a> y consiento el tratamiento de mis datos.',
  'form.required':'* Campos obligatorios','form.submit':'Enviar solicitud de presupuesto','form.sending':'Enviando…',
  'form.success':'✅ ¡Mensaje enviado! Responderemos en 24 horas laborables.',
  'form.error':'❌ Error al enviar. Escríbenos a <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Carlos','ph.cognome':'García','ph.email':'carlos@empresa.es','ph.tel':'+39 …','ph.azienda':'Empresa S.L.','ph.msg':'Describe tu proyecto: tecnologías, objetivos, plazos…',
  'err.nome':'Por favor, introduce tu nombre','err.cognome':'Por favor, introduce tu apellido','err.email':'Introduce un email válido','err.servizio':'Por favor, selecciona un servicio','err.msg':'Por favor, describe tu proyecto',
  'og.industrial':'Automatización Industrial','og.software':'Desarrollo de Software','og.it':'IT &amp; Infraestructura',
  'opt.default':'– Selecciona un servicio –','opt.plc':'Desarrollo PLC (Siemens / Rockwell / Emerson)','opt.hmi':'Diseño HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Sistema SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Robótica Industrial','opt.python':'Aplicación Python','opt.web':'Desarrollo Web &amp; PHP','opt.javac':'Desarrollo Java / C / C++',
  'opt.itot':'Consultoría IT / OT','opt.db':'Base de datos MS SQL / MySQL','opt.infra':'Sistemas Operativos &amp; Virtualización','opt.integ':'Integración IT/OT','opt.altro':'Otro',
  'footer.services':'Servicios','footer.contacts':'Contacto','footer.brand':'Software a medida para cualquier sector: web, gestión, PLC, HMI, SCADA, robótica. Python, PHP, Java, C, MS SQL. Consultoría IT/OT. Provincia de Rovigo – Italia.',
  'footer.hours':'Lun–Vie&nbsp;08:30–18:00','footer.loc':'Provincia de Rovigo, Véneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Todos los derechos reservados.',
  'footer.privacy':'Política de Privacidad','footer.cookie':'Política de Cookies','footer.settings':'Configuración de cookies',
  'ck.title':'🍪 Usamos cookies','ck.desc':'Usamos cookies técnicas necesarias y, con tu consentimiento, cookies analíticas y de marketing. Lee nuestra <a href="cookie-policy.html">Política de Cookies</a>.','ck.reject':'Rechazar','ck.manage':'Gestionar preferencias','ck.accept':'Aceptar todo',
  'cm.title':'⚙️ Preferencias de cookies','cm.desc':'Selecciona qué categorías de cookies activar. Las cookies necesarias no se pueden desactivar.',
  'cm.nec':'🔒 Cookies necesarias','cm.nec.p':'Esenciales para el funcionamiento del sitio. No recopilan datos identificables.',
  'cm.always':'Siempre activas','cm.ana':'📊 Cookies analíticas','cm.ana.p':'Datos agregados y anónimos sobre el uso del sitio (ej. Google Analytics 4).',
  'cm.mkt':'📣 Cookies de marketing','cm.mkt.p':'Anuncios personalizados en plataformas externas (Google Ads, Meta Pixel).','cm.rejectOpt':'Rechazar opcionales','cm.save':'Guardar preferencias',
  'auto.translating':'Traduciendo…','auto.error':'Traducción automática no disponible. Mostrando en italiano.',
  'legal.note':'⚠️ El texto legal (Política de Privacidad / Cookies) está disponible únicamente en italiano, según la legislación italiana.',
},

/* ══════════════════════ PORTUGUÊS ══════════════════════════ */
pt: {
  'nav.services':'Serviços','nav.tech':'Tecnologias','nav.about':'Sobre nós','nav.cta':'Pedir orçamento',
  'hero.badge':'Software · Web · Automação Industrial',
  'hero.h1':'Soluções Software<br><em>à Medida</em> para Cada Necessidade',
  'hero.desc':'Desenvolvemos <strong>aplicações web, sistemas de gestão e software personalizado</strong> para qualquer sector, e somos especialistas em <strong>PLC, HMI, SCADA e Robótica</strong> para a indústria.',
  'hero.cta1':'Pedir orçamento','hero.cta2':'Os nossos serviços',
  'services.label':'O que fazemos','services.h2':'Desenvolvimento Software, Web &amp; Automação',
  'services.desc':'Aplicações web, sistemas de gestão e software à medida para qualquer sector — mais automação industrial completa: PLC, HMI, SCADA, Robótica e Consultoria IT/OT.',
  'card.plc.h':'Desenvolvimento PLC','card.plc.p':'Programação para Siemens S7-1200/S7-1500, Rockwell Allen-Bradley e <strong>Emerson</strong>. Ladder, FBD, SCL e ST com TIA Portal e Studio 5000.',
  'card.hmi.h':'Design HMI','card.hmi.p':'Interfaces de operador intuitivas e ergonómicas. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> e soluções web conformes com ISA-101.',
  'card.scada.h':'Sistemas SCADA','card.scada.p':'Integração e desenvolvimento SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Dados em tempo real, alarmes, tendências e relatórios avançados.',
  'card.robot.h':'Robótica Industrial','card.robot.p':'Programação e integração de robôs industriais e colaborativos. Ciclos de trabalho, integração PLC e visão artificial para montagem, pick&amp;place e soldadura.',
  'card.python.h':'Aplicações Python','card.python.p':'Scripts de automação, análise de dados industriais, APIs REST para MES/ERP. Integração com PLC via OPC-UA e Modbus.',
  'card.web.h':'Desenvolvimento Web &amp; Software','card.web.p':'Aplicações web, sistemas de gestão, e-commerce e APIs REST em Python, PHP, Java e C/C++. Frontend, backend e bases de dados para qualquer empresa.',
  'card.itot.h':'Consultoria IT &amp; OT','card.itot.p':'Integração redes IT/OT, segmentação DMZ, auditorias cibersegurança OT. <strong>MS SQL</strong>, Windows/Linux/macOS, virtualização VMware/Hyper-V.',
  'tech.label':'Tecnologias &amp; Plataformas',
  'about.label':'Sobre nós','about.h2':'Um único parceiro para software, web e automação',
  'about.p1':'Desenvolvemos software à medida para empresas de todos os sectores: desde websites e sistemas de gestão até soluções complexas de automação industrial.',
  'about.p2':'Não somos apenas especialistas em automação: desenvolvemos web apps, e-commerce, APIs e software de secretária para clientes de qualquer sector.',
  'about.li1':'Web, sistemas de gestão, e-commerce e apps à medida','about.li2':'Programação PLC, HMI, SCADA e Robótica para a indústria',
  'about.li3':'Integração ERP/MES com redes OT de produção','about.li4':'Bases de dados MS SQL, MySQL, PostgreSQL e infraestrutura IT',
  'about.li5':'Consultoria técnica, formação e suporte contínuo',
  'cta.label':'Inicie o seu projeto','cta.h2':'Tem um projeto de software, web<br>ou automação industrial?',
  'cta.p':'Seja um website, sistema de gestão, app, PLC ou SCADA — contacte-nos para uma consulta técnica gratuita sem compromisso.',
  'cta.btn':'Pedir orçamento gratuito','cta.loc':'Província de Rovigo, Véneto – Itália',
  'contact.label':'Contacto','contact.h2':'Vamos falar do seu projeto',
  'contact.p':'Preencha o formulário para receber um orçamento personalizado. Respondemos em 24 horas úteis.',
  'contact.tel':'Telefone','contact.email':'Email','contact.addr':'Sede','contact.addr.v':'Província de Rovigo, Véneto – Itália','contact.hours':'Horário','contact.hours.v':'Seg–Sex&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Pedir orçamento','form.nome':'Nome','form.cognome':'Apelido','form.email':'Email','form.tel':'Telefone','form.azienda':'Empresa','form.servizio':'Tipo de serviço','form.msg':'Descrição do projeto',
  'form.privacy':'Li e aceito a <a href="privacy-policy.html" target="_blank" rel="noopener">Política de Privacidade</a> e consinto o tratamento dos meus dados.',
  'form.required':'* Campos obrigatórios','form.submit':'Enviar pedido de orçamento','form.sending':'A enviar…',
  'form.success':'✅ Mensagem enviada! Responderemos em 24 horas úteis.',
  'form.error':'❌ Erro ao enviar. Escreva-nos para <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'João','ph.cognome':'Silva','ph.email':'joao@empresa.pt','ph.tel':'+39 …','ph.azienda':'Empresa Lda.','ph.msg':'Descreva o seu projeto: tecnologias, objetivos, prazos…',
  'err.nome':'Por favor, introduza o seu nome','err.cognome':'Por favor, introduza o apelido','err.email':'Introduza um email válido','err.servizio':'Por favor, selecione um serviço','err.msg':'Por favor, descreva o seu projeto',
  'og.industrial':'Automação Industrial','og.software':'Desenvolvimento de Software','og.it':'IT &amp; Infraestrutura',
  'opt.default':'– Selecione um serviço –','opt.plc':'Desenvolvimento PLC (Siemens / Rockwell / Emerson)','opt.hmi':'Design HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Sistema SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Robótica Industrial','opt.python':'Aplicação Python','opt.web':'Desenvolvimento Web &amp; PHP','opt.javac':'Desenvolvimento Java / C / C++',
  'opt.itot':'Consultoria IT / OT','opt.db':'Base de dados MS SQL / MySQL','opt.infra':'Sistemas Operativos &amp; Virtualização','opt.integ':'Integração IT/OT','opt.altro':'Outro',
  'footer.services':'Serviços','footer.contacts':'Contacto','footer.brand':'Software à medida para qualquer sector: web, gestão, PLC, HMI, SCADA, robótica. Python, PHP, Java, C, MS SQL. Consultoria IT/OT. Província de Rovigo – Itália.',
  'footer.hours':'Seg–Sex&nbsp;08:30–18:00','footer.loc':'Província de Rovigo, Véneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Todos os direitos reservados.',
  'footer.privacy':'Política de Privacidade','footer.cookie':'Política de Cookies','footer.settings':'Definições de cookies',
  'ck.title':'🍪 Usamos cookies','ck.desc':'Usamos cookies técnicos necessários e, com o seu consentimento, cookies analíticos e de marketing. Leia a nossa <a href="cookie-policy.html">Política de Cookies</a>.','ck.reject':'Rejeitar','ck.manage':'Gerir preferências','ck.accept':'Aceitar tudo',
  'cm.title':'⚙️ Preferências de cookies','cm.desc':'Selecione quais categorias de cookies ativar. Os cookies necessários não podem ser desativados.',
  'cm.nec':'🔒 Cookies necessários','cm.nec.p':'Essenciais para o funcionamento do site. Não recolhem dados identificáveis.',
  'cm.always':'Sempre ativos','cm.ana':'📊 Cookies analíticos','cm.ana.p':'Dados agregados e anónimos sobre o uso do site (ex. Google Analytics 4).',
  'cm.mkt':'📣 Cookies de marketing','cm.mkt.p':'Anúncios personalizados em plataformas externas (Google Ads, Meta Pixel).','cm.rejectOpt':'Rejeitar opcionais','cm.save':'Guardar preferências',
  'auto.translating':'A traduzir…','auto.error':'Tradução automática indisponível. A mostrar em italiano.',
  'legal.note':'⚠️ O texto legal (Política de Privacidade / Cookies) está disponível apenas em italiano, conforme a legislação italiana.',
},

/* ══════════════════════ FRANÇAIS ═══════════════════════════ */
fr: {
  'nav.services':'Services','nav.tech':'Technologies','nav.about':'Qui sommes-nous','nav.cta':'Demander un devis',
  'hero.badge':'Logiciel · Web · Automatisation Industrielle',
  'hero.h1':'Solutions Logicielles<br><em>Sur Mesure</em> pour Chaque Besoin',
  'hero.desc':'Nous développons des <strong>applications web, systèmes de gestion et logiciels sur mesure</strong> pour tout secteur, et sommes spécialistes en <strong>API, HMI, SCADA et Robotique</strong> pour l\'industrie.',
  'hero.cta1':'Demander un devis','hero.cta2':'Nos services',
  'services.label':'Ce que nous faisons','services.h2':'Développement Logiciel, Web &amp; Automatisation',
  'services.desc':'Applications web, systèmes de gestion et logiciels sur mesure pour tout secteur — plus automatisation industrielle complète : API, HMI, SCADA, Robotique et Conseil IT/OT.',
  'card.plc.h':'Développement API','card.plc.p':'Programmation pour Siemens S7-1200/S7-1500, Rockwell Allen-Bradley et <strong>Emerson</strong>. Ladder, FBD, SCL et ST avec TIA Portal et Studio 5000.',
  'card.hmi.h':'Conception HMI','card.hmi.p':'Interfaces opérateur intuitives et ergonomiques. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> et solutions web conformes ISA-101.',
  'card.scada.h':'Systèmes SCADA','card.scada.p':'Intégration et développement SCADA : <strong>GE iFIX</strong>, Ignition, WinCC OA. Données temps réel, alarmes, tendances et rapports avancés.',
  'card.robot.h':'Robotique Industrielle','card.robot.p':'Programmation et intégration de robots industriels et collaboratifs. Cycles de travail, intégration API et vision artificielle pour assemblage, pick&amp;place et soudure.',
  'card.python.h':'Applications Python','card.python.p':'Scripts d\'automatisation, analyse de données industrielles, API REST pour MES/ERP. Intégration API via OPC-UA et Modbus.',
  'card.web.h':'Développement Web &amp; Logiciel','card.web.p':'Applications web, systèmes de gestion, e-commerce et API REST en Python, PHP, Java et C/C++. Frontend, backend et bases de données pour toute entreprise.',
  'card.itot.h':'Conseil IT &amp; OT','card.itot.p':'Intégration réseaux IT/OT, segmentation DMZ, audits cybersécurité OT. <strong>MS SQL</strong>, Windows/Linux/macOS, virtualisation VMware/Hyper-V.',
  'tech.label':'Technologies &amp; Plateformes',
  'about.label':'Qui sommes-nous','about.h2':'Un seul partenaire pour logiciel, web et automatisation',
  'about.p1':'Nous développons des logiciels sur mesure pour des entreprises de tous secteurs : des sites web et systèmes de gestion aux solutions d\'automatisation industrielle les plus complexes.',
  'about.p2':'Nous ne sommes pas seulement spécialistes de l\'automatisation : nous développons des web apps, e-commerce, APIs et logiciels de bureau pour des clients de tout secteur.',
  'about.li1':'Web, gestion, e-commerce et apps sur mesure','about.li2':'Programmation API, HMI, SCADA et Robotique pour l\'industrie',
  'about.li3':'Intégration ERP/MES avec réseaux OT de production','about.li4':'Bases de données MS SQL, MySQL, PostgreSQL et infrastructure IT',
  'about.li5':'Conseil technique, formation et support continu',
  'cta.label':'Démarrez votre projet','cta.h2':'Vous avez un projet logiciel, web<br>ou d\'automatisation industrielle ?',
  'cta.p':'Que ce soit un site web, un système de gestion, une app, un API ou un SCADA — contactez-nous pour une consultation gratuite sans engagement.',
  'cta.btn':'Demander un devis gratuit','cta.loc':'Province de Rovigo, Vénétie – Italie',
  'contact.label':'Contact','contact.h2':'Parlons de votre projet',
  'contact.p':'Remplissez le formulaire pour recevoir un devis personnalisé. Nous répondons dans les 24 heures ouvrables.',
  'contact.tel':'Téléphone','contact.email':'Email','contact.addr':'Siège','contact.addr.v':'Province de Rovigo, Vénétie – Italie','contact.hours':'Horaires','contact.hours.v':'Lun–Ven&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Demander un devis','form.nome':'Prénom','form.cognome':'Nom','form.email':'Email','form.tel':'Téléphone','form.azienda':'Entreprise','form.servizio':'Type de service','form.msg':'Description du projet',
  'form.privacy':'J\'ai lu et j\'accepte la <a href="privacy-policy.html" target="_blank" rel="noopener">Politique de confidentialité</a> et je consens au traitement de mes données.',
  'form.required':'* Champs obligatoires','form.submit':'Envoyer la demande de devis','form.sending':'Envoi en cours…',
  'form.success':'✅ Message envoyé ! Nous vous répondrons dans les 24 heures ouvrables.',
  'form.error':'❌ Erreur d\'envoi. Écrivez-nous à <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Jean','ph.cognome':'Dupont','ph.email':'jean@entreprise.fr','ph.tel':'+39 …','ph.azienda':'Entreprise S.A.S.','ph.msg':'Décrivez votre projet : technologies, objectifs, délais…',
  'err.nome':'Veuillez entrer votre prénom','err.cognome':'Veuillez entrer votre nom','err.email':'Veuillez entrer un email valide','err.servizio':'Veuillez sélectionner un service','err.msg':'Veuillez décrire votre projet',
  'og.industrial':'Automatisation Industrielle','og.software':'Développement Logiciel','og.it':'IT &amp; Infrastructure',
  'opt.default':'– Sélectionnez un service –','opt.plc':'Développement API (Siemens / Rockwell / Emerson)','opt.hmi':'Conception HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Système SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Robotique Industrielle','opt.python':'Application Python','opt.web':'Développement Web &amp; PHP','opt.javac':'Développement Java / C / C++',
  'opt.itot':'Conseil IT / OT','opt.db':'Base de données MS SQL / MySQL','opt.infra':'Systèmes d\'exploitation &amp; Virtualisation','opt.integ':'Intégration IT/OT','opt.altro':'Autre',
  'footer.services':'Services','footer.contacts':'Contact','footer.brand':'Logiciels sur mesure pour tout secteur : web, gestion, API, HMI, SCADA, robotique. Python, PHP, Java, C, MS SQL. Conseil IT/OT. Province de Rovigo – Italie.',
  'footer.hours':'Lun–Ven&nbsp;08:30–18:00','footer.loc':'Province de Rovigo, Vénétie','footer.copy':'© 2025 Automation &amp; Software Solutions. Tous droits réservés.',
  'footer.privacy':'Politique de confidentialité','footer.cookie':'Politique des cookies','footer.settings':'Paramètres des cookies',
  'ck.title':'🍪 Nous utilisons des cookies','ck.desc':'Nous utilisons des cookies techniques nécessaires et, avec votre consentement, des cookies analytiques et marketing. Lisez notre <a href="cookie-policy.html">Politique des cookies</a>.','ck.reject':'Refuser','ck.manage':'Gérer les préférences','ck.accept':'Tout accepter',
  'cm.title':'⚙️ Préférences des cookies','cm.desc':'Sélectionnez les catégories de cookies à activer. Les cookies nécessaires ne peuvent pas être désactivés.',
  'cm.nec':'🔒 Cookies nécessaires','cm.nec.p':'Essentiels au fonctionnement du site. Aucune donnée identifiable.',
  'cm.always':'Toujours actifs','cm.ana':'📊 Cookies analytiques','cm.ana.p':'Données agrégées et anonymes sur l\'utilisation du site (ex. Google Analytics 4).',
  'cm.mkt':'📣 Cookies marketing','cm.mkt.p':'Publicités personnalisées sur des plateformes externes (Google Ads, Meta Pixel).','cm.rejectOpt':'Refuser les optionnels','cm.save':'Enregistrer les préférences',
  'auto.translating':'Traduction en cours…','auto.error':'Traduction automatique indisponible. Affichage en italien.',
  'legal.note':'⚠️ Le texte légal (Politique de confidentialité / Cookies) est disponible uniquement en italien, conformément à la loi italienne.',
},

/* ══════════════════════ HRVATSKI ═══════════════════════════ */
hr: {
  'nav.services':'Usluge','nav.tech':'Tehnologije','nav.about':'O nama','nav.cta':'Zatraži ponudu',
  'hero.badge':'Softver · Web · Industrijska automatizacija',
  'hero.h1':'Softverska rješenja<br><em>po mjeri</em> za svaku potrebu',
  'hero.desc':'Razvijamo <strong>web aplikacije, upravljačke sustave i softver po mjeri</strong> za svaki sektor te smo stručnjaci za <strong>PLC, HMI, SCADA i robotiku</strong> u industrijskoj automatizaciji.',
  'hero.cta1':'Zatraži ponudu','hero.cta2':'Naše usluge',
  'services.label':'Što radimo','services.h2':'Razvoj softvera, web &amp; automatizacija',
  'services.desc':'Web aplikacije, upravljački sustavi i softver po mjeri za svaki sektor — plus potpuna industrijska automatizacija: PLC, HMI, SCADA, robotika i IT/OT savjetovanje.',
  'card.plc.h':'Razvoj PLC-a','card.plc.p':'Programiranje za Siemens S7-1200/S7-1500, Rockwell Allen-Bradley i <strong>Emerson</strong>. Ladder, FBD, SCL i ST s TIA Portalom i Studio 5000.',
  'card.hmi.h':'Dizajn HMI-ja','card.hmi.p':'Intuitivna i ergonomska sučelja za operatere. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> i responzivna web rješenja prema ISA-101.',
  'card.scada.h':'SCADA sustavi','card.scada.p':'Integracija i razvoj SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Podaci u stvarnom vremenu, alarmi, trendovi i napredni izvještaji.',
  'card.robot.h':'Industrijska robotika','card.robot.p':'Programiranje i integracija industrijskih robota i kobot. Radni ciklusi, PLC integracija i strojni vid za montažu, pick&amp;place i zavarivanje.',
  'card.python.h':'Python aplikacije','card.python.p':'Skripte za automatizaciju, industrijska analiza podataka, REST API-ji za MES/ERP. Integracija s PLC-om putem OPC-UA i Modbus.',
  'card.web.h':'Web &amp; razvoj softvera','card.web.p':'Web aplikacije, upravljački sustavi, e-commerce i REST API-ji u Pythonu, PHP-u, Javi i C/C++. Frontend, backend i baze podataka za svako poduzeće.',
  'card.itot.h':'IT &amp; OT savjetovanje','card.itot.p':'Integracija IT/OT mreža, DMZ segmentacija, OT kibernetička sigurnost. <strong>MS SQL</strong>, Windows/Linux/macOS, VMware/Hyper-V virtualizacija.',
  'tech.label':'Tehnologije &amp; platforme',
  'about.label':'O nama','about.h2':'Jedan partner za softver, web i automatizaciju',
  'about.p1':'Razvijamo softver po mjeri za tvrtke svih veličina i sektora: od web stranica do kompleksnih rješenja industrijske automatizacije.',
  'about.p2':'Nismo samo stručnjaci za automatizaciju: razvijamo web aplikacije, e-commerce, API-je i desktop softver za klijente iz svih sektora.',
  'about.li1':'Web, upravljački sustavi, e-commerce i aplikacije po mjeri','about.li2':'Programiranje PLC, HMI, SCADA i robotike za industriju',
  'about.li3':'Integracija ERP/MES s OT proizvodnim mrežama','about.li4':'Baze podataka MS SQL, MySQL, PostgreSQL i IT infrastruktura',
  'about.li5':'Tehničko savjetovanje, obuka i kontinuirana podrška',
  'cta.label':'Pokrenite projekt','cta.h2':'Imate projekt softvera, weba<br>ili industrijske automatizacije?',
  'cta.p':'Bilo da se radi o web stranici, upravljačkom sustavu, aplikaciji, PLC-u ili SCADA-i — kontaktirajte nas za besplatne tehničke konzultacije.',
  'cta.btn':'Zatraži besplatnu ponudu','cta.loc':'Pokrajina Rovigo, Veneto – Italija',
  'contact.label':'Kontakt','contact.h2':'Razgovarajmo o vašem projektu',
  'contact.p':'Ispunite obrazac za personaliziranu ponudu. Odgovaramo u roku od 24 radna sata.',
  'contact.tel':'Telefon','contact.email':'Email','contact.addr':'Sjedište','contact.addr.v':'Pokrajina Rovigo, Veneto – Italija','contact.hours':'Radno vrijeme','contact.hours.v':'Pon–Pet&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Zatražite ponudu','form.nome':'Ime','form.cognome':'Prezime','form.email':'Email','form.tel':'Telefon','form.azienda':'Tvrtka','form.servizio':'Vrsta usluge','form.msg':'Opis projekta',
  'form.privacy':'Pročitao/la sam i prihvaćam <a href="privacy-policy.html" target="_blank" rel="noopener">Politiku privatnosti</a> i pristaje na obradu mojih podataka.',
  'form.required':'* Obavezna polja','form.submit':'Pošalji zahtjev za ponudu','form.sending':'Slanje…',
  'form.success':'✅ Poruka poslana! Odgovorit ćemo u roku od 24 radna sata.',
  'form.error':'❌ Greška pri slanju. Pišite nam na <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Ivan','ph.cognome':'Horvat','ph.email':'ivan@tvrtka.hr','ph.tel':'+39 …','ph.azienda':'Tvrtka d.o.o.','ph.msg':'Opišite projekt: tehnologije, ciljevi, rokovi…',
  'err.nome':'Unesite svoje ime','err.cognome':'Unesite prezime','err.email':'Unesite valjanu e-mail adresu','err.servizio':'Odaberite vrstu usluge','err.msg':'Opišite projekt',
  'og.industrial':'Industrijska automatizacija','og.software':'Razvoj softvera','og.it':'IT &amp; Infrastruktura',
  'opt.default':'– Odaberite uslugu –','opt.plc':'Razvoj PLC-a (Siemens / Rockwell / Emerson)','opt.hmi':'Dizajn HMI-ja (WinCC / Movicon / Weintek)',
  'opt.scada':'SCADA sustav (GE iFIX / Ignition / WinCC OA)','opt.robot':'Industrijska robotika','opt.python':'Python aplikacija','opt.web':'Web razvoj &amp; PHP','opt.javac':'Java / C / C++ razvoj',
  'opt.itot':'IT / OT savjetovanje','opt.db':'Baza podataka MS SQL / MySQL','opt.infra':'Operativni sustavi &amp; Virtualizacija','opt.integ':'IT/OT integracija','opt.altro':'Ostalo',
  'footer.services':'Usluge','footer.contacts':'Kontakt','footer.brand':'Softver po mjeri za svaki sektor: web, upravljanje, PLC, HMI, SCADA, robotika. Python, PHP, Java, C, MS SQL. IT/OT savjetovanje. Pokrajina Rovigo – Italija.',
  'footer.hours':'Pon–Pet&nbsp;08:30–18:00','footer.loc':'Pokrajina Rovigo, Veneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Sva prava pridržana.',
  'footer.privacy':'Politika privatnosti','footer.cookie':'Politika kolačića','footer.settings':'Postavke kolačića',
  'ck.title':'🍪 Koristimo kolačiće','ck.desc':'Koristimo neophodne tehničke kolačiće i, uz vaš pristanak, analitičke i marketinške kolačiće. Pročitajte našu <a href="cookie-policy.html">Politiku kolačića</a>.','ck.reject':'Odbij','ck.manage':'Upravljaj preferencijama','ck.accept':'Prihvati sve',
  'cm.title':'⚙️ Postavke kolačića','cm.desc':'Odaberite koje kategorije kolačića aktivirati. Neophodne kolačiće nije moguće deaktivirati.',
  'cm.nec':'🔒 Neopodni kolačići','cm.nec.p':'Neophodni za funkcioniranje stranice. Ne prikupljaju osobne podatke.',
  'cm.always':'Uvijek aktivni','cm.ana':'📊 Analitički kolačići','cm.ana.p':'Agregirani anonimni podaci o korištenju stranice (npr. Google Analytics 4).',
  'cm.mkt':'📣 Marketinški kolačići','cm.mkt.p':'Personalizirani oglasi na vanjskim platformama (Google Ads, Meta Pixel).','cm.rejectOpt':'Odbij neobavezne','cm.save':'Spremi postavke',
  'auto.translating':'Prevođenje…','auto.error':'Automatski prijevod nije dostupan. Prikazuje se na talijanskom.',
  'legal.note':'⚠️ Pravni tekst (Politika privatnosti / Kolačića) dostupan je samo na talijanskom, sukladno talijanskom zakonu.',
},

/* ══════════════════════ SLOVENŠČINA ════════════════════════ */
sl: {
  'nav.services':'Storitve','nav.tech':'Tehnologije','nav.about':'O nas','nav.cta':'Zahtevaj ponudbo',
  'hero.badge':'Programska oprema · Splet · Industrijska avtomatizacija',
  'hero.h1':'Programske rešitve<br><em>po meri</em> za vsako potrebo',
  'hero.desc':'Razvijamo <strong>spletne aplikacije, sisteme za upravljanje in programsko opremo po meri</strong> za vsak sektor ter smo strokovnjaki za <strong>PLK, HMI, SCADA in robotiko</strong> v industrijski avtomatizaciji.',
  'hero.cta1':'Zahtevaj ponudbo','hero.cta2':'Naše storitve',
  'services.label':'Kaj počnemo','services.h2':'Razvoj programske opreme, spleta &amp; avtomatizacije',
  'services.desc':'Spletne aplikacije, sistemi za upravljanje in programska oprema po meri za vsak sektor — plus popolna industrijska avtomatizacija: PLK, HMI, SCADA, robotika in IT/OT svetovanje.',
  'card.plc.h':'Razvoj PLK','card.plc.p':'Programiranje za Siemens S7-1200/S7-1500, Rockwell Allen-Bradley in <strong>Emerson</strong>. Ladder, FBD, SCL in ST s TIA Portalom in Studio 5000.',
  'card.hmi.h':'Oblikovanje HMI','card.hmi.p':'Intuitivni in ergonomski operaterski vmesniki. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> in odzivne spletne rešitve po ISA-101.',
  'card.scada.h':'Sistemi SCADA','card.scada.p':'Integracija in razvoj SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Podatki v realnem času, alarmi, trendi in napredna poročila.',
  'card.robot.h':'Industrijska robotika','card.robot.p':'Programiranje in integracija industrijskih robotov in kobotov. Delovni cikli, integracija PLK in strojni vid za sestavljanje, pick&amp;place in varjenje.',
  'card.python.h':'Python aplikacije','card.python.p':'Skripte za avtomatizacijo, industrijska analiza podatkov, REST API-ji za MES/ERP. Integracija PLK prek OPC-UA in Modbus.',
  'card.web.h':'Razvoj spleta &amp; programske opreme','card.web.p':'Spletne aplikacije, sistemi za upravljanje, e-commerce in REST API-ji v Pythonu, PHP-u, Javi in C/C++. Frontend, backend in baze podatkov za vsako podjetje.',
  'card.itot.h':'IT &amp; OT svetovanje','card.itot.p':'Integracija IT/OT omrežij, DMZ segmentacija, OT kibernetska varnost. <strong>MS SQL</strong>, Windows/Linux/macOS, VMware/Hyper-V virtualizacija.',
  'tech.label':'Tehnologije &amp; platforme',
  'about.label':'O nas','about.h2':'En partner za programsko opremo, splet in avtomatizacijo',
  'about.p1':'Razvijamo programsko opremo po meri za podjetja vseh velikosti in sektorjev: od spletnih mest do kompleksnih rešitev industrijske avtomatizacije.',
  'about.p2':'Nismo le strokovnjaki za avtomatizacijo: razvijamo spletne aplikacije, e-commerce, API-je in namizno programsko opremo za stranke iz vseh sektorjev.',
  'about.li1':'Splet, sistemi za upravljanje, e-commerce in aplikacije po meri','about.li2':'Programiranje PLK, HMI, SCADA in robotike za industrijo',
  'about.li3':'Integracija ERP/MES z OT proizvodnimi omrežji','about.li4':'Baze podatkov MS SQL, MySQL, PostgreSQL in IT infrastruktura',
  'about.li5':'Tehnično svetovanje, usposabljanje in stalna podpora',
  'cta.label':'Začnite projekt','cta.h2':'Imate projekt programske opreme, spleta<br>ali industrijske avtomatizacije?',
  'cta.p':'Bodisi spletna stran, sistem upravljanja, aplikacija, PLK ali SCADA — kontaktirajte nas za brezplačno tehnično posvetovanje.',
  'cta.btn':'Zahtevaj brezplačno ponudbo','cta.loc':'Provinca Rovigo, Veneto – Italija',
  'contact.label':'Kontakt','contact.h2':'Pogovorimo se o vašem projektu',
  'contact.p':'Izpolnite obrazec za personalizirano ponudbo. Odgovorimo v 24 delovnih urah.',
  'contact.tel':'Telefon','contact.email':'E-pošta','contact.addr':'Sedež','contact.addr.v':'Provinca Rovigo, Veneto – Italija','contact.hours':'Delovni čas','contact.hours.v':'Pon–Pet&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Zahtevaj ponudbo','form.nome':'Ime','form.cognome':'Priimek','form.email':'E-pošta','form.tel':'Telefon','form.azienda':'Podjetje','form.servizio':'Vrsta storitve','form.msg':'Opis projekta',
  'form.privacy':'Prebral/a sem in sprejemam <a href="privacy-policy.html" target="_blank" rel="noopener">Politiko zasebnosti</a> in soglašam z obdelavo svojih podatkov.',
  'form.required':'* Obvezna polja','form.submit':'Pošlji zahtevo za ponudbo','form.sending':'Pošiljanje…',
  'form.success':'✅ Sporočilo poslano! Odgovorili bomo v 24 delovnih urah.',
  'form.error':'❌ Napaka pri pošiljanju. Pišite nam na <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Janez','ph.cognome':'Novak','ph.email':'janez@podjetje.si','ph.tel':'+39 …','ph.azienda':'Podjetje d.o.o.','ph.msg':'Opišite projekt: tehnologije, cilji, roki…',
  'err.nome':'Vnesite svoje ime','err.cognome':'Vnesite priimek','err.email':'Vnesite veljavni e-naslov','err.servizio':'Izberite vrsto storitve','err.msg':'Opišite projekt',
  'og.industrial':'Industrijska avtomatizacija','og.software':'Razvoj programske opreme','og.it':'IT &amp; Infrastruktura',
  'opt.default':'– Izberite storitev –','opt.plc':'Razvoj PLK (Siemens / Rockwell / Emerson)','opt.hmi':'Oblikovanje HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Sistem SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Industrijska robotika','opt.python':'Python aplikacija','opt.web':'Spletni razvoj &amp; PHP','opt.javac':'Java / C / C++ razvoj',
  'opt.itot':'IT / OT svetovanje','opt.db':'Podatkovna baza MS SQL / MySQL','opt.infra':'Operacijski sistemi &amp; Virtualizacija','opt.integ':'IT/OT integracija','opt.altro':'Drugo',
  'footer.services':'Storitve','footer.contacts':'Kontakt','footer.brand':'Programska oprema po meri za vsak sektor: splet, upravljanje, PLK, HMI, SCADA, robotika. Python, PHP, Java, C, MS SQL. IT/OT svetovanje. Provinca Rovigo – Italija.',
  'footer.hours':'Pon–Pet&nbsp;08:30–18:00','footer.loc':'Provinca Rovigo, Veneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Vse pravice pridržane.',
  'footer.privacy':'Politika zasebnosti','footer.cookie':'Politika piškotkov','footer.settings':'Nastavitve piškotkov',
  'ck.title':'🍪 Uporabljamo piškotke','ck.desc':'Uporabljamo nujne tehnične piškotke in, z vašim soglasjem, analitične in marketinške piškotke. Preberite našo <a href="cookie-policy.html">Politiko piškotkov</a>.','ck.reject':'Zavrni','ck.manage':'Upravljaj nastavitve','ck.accept':'Sprejmi vse',
  'cm.title':'⚙️ Nastavitve piškotkov','cm.desc':'Izberite, katere kategorije piškotkov aktivirati. Nujnih piškotkov ni mogoče deaktivirati.',
  'cm.nec':'🔒 Nujni piškotki','cm.nec.p':'Nujni za delovanje spletnega mesta. Ne zbirajo osebnih podatkov.',
  'cm.always':'Vedno aktivni','cm.ana':'📊 Analitični piškotki','cm.ana.p':'Agregirani anonimni podatki o uporabi spletnega mesta (npr. Google Analytics 4).',
  'cm.mkt':'📣 Marketinški piškotki','cm.mkt.p':'Personalizirani oglasi na zunanjih platformah (Google Ads, Meta Pixel).','cm.rejectOpt':'Zavrni neobvezne','cm.save':'Shrani nastavitve',
  'auto.translating':'Prevajanje…','auto.error':'Samodejni prevod ni na voljo. Prikazuje se v italijanščini.',
  'legal.note':'⚠️ Pravno besedilo (Politika zasebnosti / Piškotkov) je na voljo samo v italijanščini v skladu z italijansko zakonodajo.',
},

/* ══════════════════════ ROMÂNĂ ═════════════════════════════ */
ro: {
  'nav.services':'Servicii','nav.tech':'Tehnologii','nav.about':'Despre noi','nav.cta':'Solicită ofertă',
  'hero.badge':'Software · Web · Automatizare Industrială',
  'hero.h1':'Soluții Software<br><em>la Cheie</em> pentru Orice Nevoie',
  'hero.desc':'Dezvoltăm <strong>aplicații web, sisteme de management și software personalizat</strong> pentru orice sector și suntem specialiști în <strong>PLC, HMI, SCADA și Robotică</strong> pentru industrie.',
  'hero.cta1':'Solicită o ofertă','hero.cta2':'Serviciile noastre',
  'services.label':'Ce facem','services.h2':'Dezvoltare Software, Web &amp; Automatizare',
  'services.desc':'Aplicații web, sisteme de management și software personalizat pentru orice sector — plus automatizare industrială completă: PLC, HMI, SCADA, Robotică și Consultanță IT/OT.',
  'card.plc.h':'Dezvoltare PLC','card.plc.p':'Programare pentru Siemens S7-1200/S7-1500, Rockwell Allen-Bradley și <strong>Emerson</strong>. Ladder, FBD, SCL și ST cu TIA Portal și Studio 5000.',
  'card.hmi.h':'Design HMI','card.hmi.p':'Interfețe de operator intuitive și ergonomice. WinCC Unified, FactoryTalk View, <strong>Movicon</strong>, <strong>Weintek</strong> și soluții web conform ISA-101.',
  'card.scada.h':'Sisteme SCADA','card.scada.p':'Integrare și dezvoltare SCADA: <strong>GE iFIX</strong>, Ignition, WinCC OA. Date în timp real, alarme, tendințe și rapoarte avansate.',
  'card.robot.h':'Robotică Industrială','card.robot.p':'Programare și integrare de roboți industriali și colaborativi. Cicluri de lucru, integrare PLC și vedere artificială pentru asamblare, pick&amp;place și sudură.',
  'card.python.h':'Aplicații Python','card.python.p':'Scripturi de automatizare, analiză date industriale, API-uri REST pentru MES/ERP. Integrare PLC via OPC-UA și Modbus.',
  'card.web.h':'Dezvoltare Web &amp; Software','card.web.p':'Aplicații web, sisteme de management, e-commerce și API-uri REST în Python, PHP, Java și C/C++. Frontend, backend și baze de date pentru orice companie.',
  'card.itot.h':'Consultanță IT &amp; OT','card.itot.p':'Integrare rețele IT/OT, segmentare DMZ, audituri cybersecuritate OT. <strong>MS SQL</strong>, Windows/Linux/macOS, virtualizare VMware/Hyper-V.',
  'tech.label':'Tehnologii &amp; Platforme',
  'about.label':'Despre noi','about.h2':'Un singur partener pentru software, web și automatizare',
  'about.p1':'Dezvoltăm software personalizat pentru companii de toate dimensiunile și sectoarele: de la site-uri web și sisteme de management la soluții complexe de automatizare industrială.',
  'about.p2':'Nu suntem doar specialiști în automatizare: dezvoltăm web app-uri, e-commerce, API-uri și software desktop pentru clienți din orice sector.',
  'about.li1':'Web, management, e-commerce și aplicații personalizate','about.li2':'Programare PLC, HMI, SCADA și Robotică pentru industrie',
  'about.li3':'Integrare ERP/MES cu rețele OT de producție','about.li4':'Baze de date MS SQL, MySQL, PostgreSQL și infrastructură IT',
  'about.li5':'Consultanță tehnică, formare și suport continuu',
  'cta.label':'Începe proiectul tău','cta.h2':'Ai un proiect software, web<br>sau de automatizare industrială?',
  'cta.p':'Fie că e un site web, un sistem de management, o aplicație, un PLC sau un SCADA — contactează-ne pentru o consultație tehnică gratuită.',
  'cta.btn':'Solicită ofertă gratuită','cta.loc':'Județul Rovigo, Veneto – Italia',
  'contact.label':'Contact','contact.h2':'Vorbim despre proiectul tău',
  'contact.p':'Completează formularul pentru o ofertă personalizată. Răspundem în 24 de ore lucrătoare.',
  'contact.tel':'Telefon','contact.email':'Email','contact.addr':'Sediu','contact.addr.v':'Județul Rovigo, Veneto – Italia','contact.hours':'Program','contact.hours.v':'Lun–Vin&nbsp;&nbsp;08:30 – 18:00',
  'form.h3':'Solicită o ofertă','form.nome':'Prenume','form.cognome':'Nume','form.email':'Email','form.tel':'Telefon','form.azienda':'Companie','form.servizio':'Tip serviciu','form.msg':'Descrierea proiectului',
  'form.privacy':'Am citit și accept <a href="privacy-policy.html" target="_blank" rel="noopener">Politica de confidențialitate</a> și sunt de acord cu procesarea datelor mele.',
  'form.required':'* Câmpuri obligatorii','form.submit':'Trimite cererea de ofertă','form.sending':'Se trimite…',
  'form.success':'✅ Mesaj trimis! Vom răspunde în 24 de ore lucrătoare.',
  'form.error':'❌ Eroare la trimitere. Scrie-ne la <a href="mailto:info.automationsoftware@gmail.com">info.automationsoftware@gmail.com</a>',
  'ph.nome':'Ion','ph.cognome':'Popescu','ph.email':'ion@companie.ro','ph.tel':'+39 …','ph.azienda':'Companie S.R.L.','ph.msg':'Descrie proiectul: tehnologii, obiective, termene…',
  'err.nome':'Introdu prenumele','err.cognome':'Introdu numele','err.email':'Introdu un email valid','err.servizio':'Selectează un serviciu','err.msg':'Descrie proiectul',
  'og.industrial':'Automatizare Industrială','og.software':'Dezvoltare Software','og.it':'IT &amp; Infrastructură',
  'opt.default':'– Selectează un serviciu –','opt.plc':'Dezvoltare PLC (Siemens / Rockwell / Emerson)','opt.hmi':'Design HMI (WinCC / Movicon / Weintek)',
  'opt.scada':'Sistem SCADA (GE iFIX / Ignition / WinCC OA)','opt.robot':'Robotică Industrială','opt.python':'Aplicație Python','opt.web':'Dezvoltare Web &amp; PHP','opt.javac':'Dezvoltare Java / C / C++',
  'opt.itot':'Consultanță IT / OT','opt.db':'Baze de date MS SQL / MySQL','opt.infra':'Sisteme de operare &amp; Virtualizare','opt.integ':'Integrare IT/OT','opt.altro':'Altele',
  'footer.services':'Servicii','footer.contacts':'Contact','footer.brand':'Software personalizat pentru orice sector: web, management, PLC, HMI, SCADA, robotică. Python, PHP, Java, C, MS SQL. Consultanță IT/OT. Județul Rovigo – Italia.',
  'footer.hours':'Lun–Vin&nbsp;08:30–18:00','footer.loc':'Județul Rovigo, Veneto','footer.copy':'© 2025 Automation &amp; Software Solutions. Toate drepturile rezervate.',
  'footer.privacy':'Politica de confidențialitate','footer.cookie':'Politica de cookies','footer.settings':'Setări cookies',
  'ck.title':'🍪 Folosim cookie-uri','ck.desc':'Folosim cookie-uri tehnice necesare și, cu consimțământul tău, cookie-uri analitice și de marketing. Citește <a href="cookie-policy.html">Politica de cookies</a>.','ck.reject':'Refuză','ck.manage':'Gestionează preferințe','ck.accept':'Acceptă tot',
  'cm.title':'⚙️ Preferințe cookies','cm.desc':'Selectează categoriile de cookies de activat. Cookie-urile necesare nu pot fi dezactivate.',
  'cm.nec':'🔒 Cookie-uri necesare','cm.nec.p':'Esențiale pentru funcționarea site-ului. Nu colectează date identificabile.',
  'cm.always':'Mereu active','cm.ana':'📊 Cookie-uri analitice','cm.ana.p':'Date agregate și anonime despre utilizarea site-ului (ex. Google Analytics 4).',
  'cm.mkt':'📣 Cookie-uri de marketing','cm.mkt.p':'Reclame personalizate pe platforme externe (Google Ads, Meta Pixel).','cm.rejectOpt':'Refuză opționale','cm.save':'Salvează preferințe',
  'auto.translating':'Se traduce…','auto.error':'Traducerea automată nu este disponibilă. Se afișează în italiană.',
  'legal.note':'⚠️ Textul legal (Politica de confidențialitate / Cookies) este disponibil numai în italiană, conform legislației italiene.',
},

}; /* fine I18N */

/* ─────────────────────────────────────────────────────────────
   AUTO-TRADUZIONE (MyMemory API) per lingue non elencate
───────────────────────────────────────────────────────────── */
var AUTO_API    = 'https://api.mymemory.translated.net/get';
var CACHE_TTL   = 7 * 24 * 60 * 60 * 1000; // 7 giorni
var AUTO_DELAY  = 250; // ms tra richieste API

function sleep(ms) { return new Promise(function(r){ setTimeout(r, ms); }); }

/* Estrae testo puro, sostituisce tag HTML con segnaposto [T0],[T1]… */
function htmlToPlaceholders(str) {
  var tags = [];
  var plain = str.replace(/<[^>]+>/g, function(tag) {
    tags.push(tag);
    return '[T' + (tags.length - 1) + ']';
  });
  return { plain: plain, tags: tags };
}

function placeholdersToHtml(str, tags) {
  return str.replace(/\[T(\d+)\]/g, function(_, i) {
    return tags[parseInt(i, 10)] || '';
  });
}

async function translateSingle(text, targetLang) {
  var url = AUTO_API + '?q=' + encodeURIComponent(text) + '&langpair=it|' + targetLang;
  var res  = await fetch(url);
  var data = await res.json();
  if (data.responseStatus === 200) return data.responseData.translatedText;
  throw new Error('API ' + data.responseStatus);
}

async function autoTranslate(lang) {
  /* 1 — Controlla cache localStorage */
  var cacheKey = 'ass_i18n_' + lang;
  try {
    var cached = JSON.parse(localStorage.getItem(cacheKey));
    if (cached && cached.exp > Date.now()) {
      I18N[lang] = cached.data;
      return true;
    }
  } catch(e) {}

  showLoader(lang);

  var itStrings  = I18N['it'];
  var keys       = Object.keys(itStrings);
  var translated = {};
  var errors     = 0;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var src = itStrings[key];
    if (!src) { translated[key] = src; continue; }

    try {
      var hasHtml = /<[^>]+>/.test(src);
      var result;
      if (hasHtml) {
        var ph = htmlToPlaceholders(src);
        var raw = await translateSingle(ph.plain, lang);
        result  = placeholdersToHtml(raw, ph.tags);
      } else {
        result = await translateSingle(src, lang);
      }
      translated[key] = result;
    } catch(e) {
      translated[key] = src; /* fallback italiano */
      errors++;
    }

    /* Aggiorna progress */
    updateLoader(Math.round(((i + 1) / keys.length) * 100));
    await sleep(AUTO_DELAY);
  }

  I18N[lang] = translated;

  /* 2 — Salva cache 7 giorni */
  if (errors < keys.length / 2) { /* salva solo se >50% traduzioni riuscite */
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        data: translated,
        exp:  Date.now() + CACHE_TTL
      }));
    } catch(e) {}
  }

  hideLoader();
  return errors < keys.length;
}

/* ─────────────────────────────────────────────────────────────
   LOADER AUTO-TRADUZIONE
───────────────────────────────────────────────────────────── */
function ensureLoader() {
  if (document.getElementById('i18n-loader')) return;
  var el = document.createElement('div');
  el.id = 'i18n-loader';
  el.innerHTML =
    '<span class="i18n-spinner"></span>' +
    '<span id="i18n-loader-text">Traduzione in corso…</span>' +
    '<span id="i18n-loader-pct">0%</span>';
  document.body.appendChild(el);
  /* Stile iniettato inline per evitare dipendenze CSS esterne */
  var style = document.createElement('style');
  style.textContent =
    '#i18n-loader{position:fixed;top:72px;right:16px;z-index:9998;' +
    'display:none;align-items:center;gap:8px;padding:10px 16px;' +
    'background:var(--bg-card);border:1px solid var(--cyan-border);' +
    'border-radius:8px;font-size:.82rem;color:var(--cyan);' +
    'box-shadow:0 8px 24px rgba(0,0,0,.4);}' +
    '#i18n-loader.visible{display:flex;}' +
    '.i18n-spinner{width:14px;height:14px;border:2px solid var(--cyan-border);' +
    'border-top-color:var(--cyan);border-radius:50%;' +
    'animation:i18n-spin .8s linear infinite;flex-shrink:0;}' +
    '@keyframes i18n-spin{to{transform:rotate(360deg)}}' +
    '#i18n-loader-pct{color:var(--text-muted);font-size:.75rem;}';
  document.head.appendChild(style);
}

function showLoader(lang) {
  ensureLoader();
  var el = document.getElementById('i18n-loader');
  var txt = document.getElementById('i18n-loader-text');
  if (txt) txt.textContent = LANG_META[lang] ? LANG_META[lang].name + '…' : 'Translating…';
  if (el) el.classList.add('visible');
}

function updateLoader(pct) {
  var el = document.getElementById('i18n-loader-pct');
  if (el) el.textContent = pct + '%';
}

function hideLoader() {
  var el = document.getElementById('i18n-loader');
  if (el) el.classList.remove('visible');
}

/* ─────────────────────────────────────────────────────────────
   HELPER: ottieni traduzione (fallback su IT)
───────────────────────────────────────────────────────────── */
function tt(lang, key) {
  return (I18N[lang] && I18N[lang][key] !== undefined)
    ? I18N[lang][key]
    : (I18N['it'][key] !== undefined ? I18N['it'][key] : key);
}

/* ─────────────────────────────────────────────────────────────
   REBUILD SEZIONI DINAMICHE
───────────────────────────────────────────────────────────── */
function buildServiceCards(lang) {
  var grid = document.querySelector('.services-grid');
  if (!grid) return;
  var cards = [
    { icon:'⚙️', hKey:'card.plc.h',    pKey:'card.plc.p',    tags:['Siemens S7','Rockwell','Emerson','TIA Portal','Studio 5000','IEC 61131-3'] },
    { icon:'🖥️', hKey:'card.hmi.h',    pKey:'card.hmi.p',    tags:['WinCC Unified','FactoryTalk','Movicon','Weintek','Web HMI'] },
    { icon:'📡', hKey:'card.scada.h',  pKey:'card.scada.p',  tags:['GE iFIX','Ignition','WinCC OA','Movicon','OPC-UA','MQTT'] },
    { icon:'🦾', hKey:'card.robot.h',  pKey:'card.robot.p',  tags:['ABB','FANUC','KUKA','Universal Robots','Cobot','Vision'] },
    { icon:'🐍', hKey:'card.python.h', pKey:'card.python.p', tags:['Python 3','FastAPI','Pandas','Node-RED','n8n','OPC-UA'] },
    { icon:'🌐', hKey:'card.web.h',    pKey:'card.web.p',    tags:['Python','PHP','Java','C/C++','REST API','Web App'] },
    { icon:'🔌', hKey:'card.itot.h',   pKey:'card.itot.p',   tags:['IT/OT Security','MS SQL','Windows Server','Linux','VMware','Docker'] },
  ];
  grid.innerHTML = cards.map(function(c) {
    return '<article class="service-card">' +
      '<div class="service-icon" aria-hidden="true">' + c.icon + '</div>' +
      '<h3>' + tt(lang, c.hKey) + '</h3>' +
      '<p>'  + tt(lang, c.pKey) + '</p>' +
      '<div class="service-tags">' +
        c.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
      '</div></article>';
  }).join('');
}

function buildHeroStats(lang) {
  var el = document.querySelector('.hero-stats');
  if (!el) return;
  var sub = {
    it: { web:'App · Gestionali · API',  plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supervisione · GE iFIX',  robot:'ABB · FANUC · UR', itot:'Consulenza · MS SQL · OS' },
    en: { web:'Apps · Systems · APIs',   plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supervision · GE iFIX',   robot:'ABB · FANUC · UR', itot:'Consulting · MS SQL · OS' },
    de: { web:'Apps · Systeme · APIs',   plc:'Siemens · Rockwell · Emerson', scada:'HMI · Überwachung · GE iFIX',   robot:'ABB · FANUC · UR', itot:'Beratung · MS SQL · OS' },
    es: { web:'Apps · Gestión · APIs',   plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supervisión · GE iFIX',   robot:'ABB · FANUC · UR', itot:'Consultoría · MS SQL · OS' },
    pt: { web:'Apps · Gestão · APIs',    plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supervisão · GE iFIX',    robot:'ABB · FANUC · UR', itot:'Consultoria · MS SQL · OS' },
    fr: { web:'Apps · Gestion · APIs',   plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supervision · GE iFIX',   robot:'ABB · FANUC · UR', itot:'Conseil · MS SQL · OS' },
    hr: { web:'Aplikacije · Upravljanje · API', plc:'Siemens · Rockwell · Emerson', scada:'HMI · Nadzor · GE iFIX', robot:'ABB · FANUC · UR', itot:'Savjetovanje · MS SQL · OS' },
    sl: { web:'Aplikacije · Upravljanje · API', plc:'Siemens · Rockwell · Emerson', scada:'HMI · Nadzor · GE iFIX', robot:'ABB · FANUC · UR', itot:'Svetovanje · MS SQL · OS' },
    ro: { web:'Aplicații · Management · API',   plc:'Siemens · Rockwell · Emerson', scada:'HMI · Supraveghere · GE iFIX', robot:'ABB · FANUC · UR', itot:'Consultanță · MS SQL · OS' },
  };
  var s = sub[lang] || sub['en'] || sub['it'];
  el.innerHTML =
    '<div class="hero-stat"><strong>WEB</strong><span>'   + s.web   + '</span></div>' +
    '<div class="hero-stat"><strong>PLC</strong><span>'   + s.plc   + '</span></div>' +
    '<div class="hero-stat"><strong>SCADA</strong><span>' + s.scada + '</span></div>' +
    '<div class="hero-stat"><strong>ROBOT</strong><span>' + s.robot + '</span></div>' +
    '<div class="hero-stat"><strong>IT/OT</strong><span>' + s.itot  + '</span></div>';
}

function buildAboutVisual(lang) {
  var visual = document.querySelector('.about-visual');
  if (!visual) return;
  var items = [
    { icon:'🏭', it:['Automazione Industriale','PLC, HMI, SCADA – dalla specifica al collaudo'],
      en:['Industrial Automation','PLC, HMI, SCADA – from spec to commissioning'],
      de:['Industrieautomation','SPS, HMI, SCADA – von der Spezifikation bis zur Inbetriebnahme'],
      es:['Automatización Industrial','PLC, HMI, SCADA – de la especificación a la puesta en marcha'],
      pt:['Automação Industrial','PLC, HMI, SCADA – da especificação à comissionamento'],
      fr:['Automatisation Industrielle','API, HMI, SCADA – de la spécification à la mise en service'],
      hr:['Industrijska automatizacija','PLC, HMI, SCADA – od specifikacije do puštanja u rad'],
      sl:['Industrijska avtomatizacija','PLK, HMI, SCADA – od specifikacije do zagona'],
      ro:['Automatizare Industrială','PLC, HMI, SCADA – de la specificație la punerea în funcțiune'] },
    { icon:'🦾', it:['Robotica Industriale','ABB, FANUC, KUKA, Universal Robots'],
      en:['Industrial Robotics','ABB, FANUC, KUKA, Universal Robots'],
      de:['Industrierobotik','ABB, FANUC, KUKA, Universal Robots'],
      es:['Robótica Industrial','ABB, FANUC, KUKA, Universal Robots'],
      pt:['Robótica Industrial','ABB, FANUC, KUKA, Universal Robots'],
      fr:['Robotique Industrielle','ABB, FANUC, KUKA, Universal Robots'],
      hr:['Industrijska robotika','ABB, FANUC, KUKA, Universal Robots'],
      sl:['Industrijska robotika','ABB, FANUC, KUKA, Universal Robots'],
      ro:['Robotică Industrială','ABB, FANUC, KUKA, Universal Robots'] },
    { icon:'🌐', it:['Web & Software Development','Python, PHP, Java, C – web app, gestionali e software su misura'],
      en:['Web & Software Development','Python, PHP, Java, C – web apps, management systems and bespoke software'],
      de:['Web- & Softwareentwicklung','Python, PHP, Java, C – Web-Apps, Verwaltungssysteme und individuelle Software'],
      es:['Desarrollo Web y Software','Python, PHP, Java, C – apps web, sistemas de gestión y software a medida'],
      pt:['Desenvolvimento Web e Software','Python, PHP, Java, C – web apps, sistemas de gestão e software à medida'],
      fr:['Développement Web et Logiciel','Python, PHP, Java, C – apps web, systèmes de gestion et logiciels sur mesure'],
      hr:['Web i razvoj softvera','Python, PHP, Java, C – web aplikacije, upravljački sustavi i softver po mjeri'],
      sl:['Spletni in razvoj programske opreme','Python, PHP, Java, C – spletne aplikacije in programska oprema po meri'],
      ro:['Dezvoltare Web și Software','Python, PHP, Java, C – aplicații web, sisteme de management și software personalizat'] },
    { icon:'🗄️', it:['IT & Infrastruttura','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      en:['IT & Infrastructure','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      de:['IT & Infrastruktur','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      es:['IT e Infraestructura','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      pt:['IT e Infraestrutura','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      fr:['IT & Infrastructure','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      hr:['IT i infrastruktura','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      sl:['IT in infrastruktura','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'],
      ro:['IT și Infrastructură','MS SQL, Windows/Linux/macOS, VMware, Hyper-V, Docker'] },
    { icon:'🔗', it:['Integrazione IT/OT','Bridge tra sistemi gestionali e impianti produttivi'],
      en:['IT/OT Integration','Bridge between business systems and production plants'],
      de:['IT/OT-Integration','Verbindung zwischen Geschäftssystemen und Produktionsanlagen'],
      es:['Integración IT/OT','Puente entre sistemas de gestión e instalaciones de producción'],
      pt:['Integração IT/OT','Ponte entre sistemas de gestão e instalações de produção'],
      fr:['Intégration IT/OT','Pont entre systèmes de gestion et installations de production'],
      hr:['IT/OT integracija','Most između upravljačkih sustava i proizvodnjih postrojenja'],
      sl:['IT/OT integracija','Most med sistemi upravljanja in proizvodnimi obrati'],
      ro:['Integrare IT/OT','Punte între sisteme de management și instalații de producție'] },
    { icon:'🛡️', it:['OT Cybersecurity','Audit di rete, segmentazione e hardening industriale'],
      en:['OT Cybersecurity','Network audits, segmentation and industrial hardening'],
      de:['OT-Cybersecurity','Netzwerk-Audits, Segmentierung und industrielles Hardening'],
      es:['OT Ciberseguridad','Auditorías de red, segmentación y hardening industrial'],
      pt:['OT Cibersegurança','Auditorias de rede, segmentação e hardening industrial'],
      fr:['OT Cybersécurité','Audits réseau, segmentation et durcissement industriel'],
      hr:['OT kibernetička sigurnost','Mrežni auditi, segmentacija i industrijsko učvršćivanje'],
      sl:['OT kibernetska varnost','Omrežni reviziji, segmentacija in industrijsko utrjevanje'],
      ro:['OT Cybersecuritate','Audituri de rețea, segmentare și hardening industrial'] },
    { icon:'📍', it:['Provincia di Rovigo, Veneto','Intervento in loco in tutto il Nord-Est Italia'],
      en:['Province of Rovigo, Veneto','On-site throughout North-East Italy'],
      de:['Provinz Rovigo, Venetien','Vor-Ort-Einsatz in ganz Nordostitalien'],
      es:['Provincia de Rovigo, Véneto','Intervención presencial en todo el noreste de Italia'],
      pt:['Província de Rovigo, Véneto','Intervenção in loco em todo o nordeste da Itália'],
      fr:['Province de Rovigo, Vénétie','Intervention sur site dans tout le nord-est de l\'Italie'],
      hr:['Pokrajina Rovigo, Veneto','Teren po cijelom sjeveroistoku Italije'],
      sl:['Provinca Rovigo, Veneto','Terenska dela po vsem severovzhodnem delu Italije'],
      ro:['Județul Rovigo, Veneto','Intervenție la fața locului în tot nord-estul Italiei'] },
  ];
  var l = lang;
  if (!items[0][l]) l = 'en';
  visual.innerHTML = items.map(function(item) {
    var pair = item[l] || item['en'];
    return '<div class="about-item">' +
      '<div class="about-item-icon">' + item.icon + '</div>' +
      '<div class="about-item-text">' +
        '<strong>' + pair[0] + '</strong>' +
        '<span>'   + pair[1] + '</span>' +
      '</div></div>';
  }).join('');
}

function buildFormSelect(lang) {
  var sel = document.getElementById('f-servizio');
  if (!sel) return;
  sel.innerHTML =
    '<option value="">'      + tt(lang,'opt.default') + '</option>' +
    '<optgroup label="'      + tt(lang,'og.industrial') + '">' +
      '<option value="plc">'   + tt(lang,'opt.plc')   + '</option>' +
      '<option value="hmi">'   + tt(lang,'opt.hmi')   + '</option>' +
      '<option value="scada">' + tt(lang,'opt.scada') + '</option>' +
      '<option value="robot">' + tt(lang,'opt.robot') + '</option>' +
    '</optgroup>' +
    '<optgroup label="'      + tt(lang,'og.software') + '">' +
      '<option value="python">'  + tt(lang,'opt.python') + '</option>' +
      '<option value="web">'     + tt(lang,'opt.web')    + '</option>' +
      '<option value="javac">'   + tt(lang,'opt.javac')  + '</option>' +
    '</optgroup>' +
    '<optgroup label="'      + tt(lang,'og.it') + '">' +
      '<option value="it-ot">'         + tt(lang,'opt.itot')  + '</option>' +
      '<option value="database">'      + tt(lang,'opt.db')    + '</option>' +
      '<option value="infra">'         + tt(lang,'opt.infra') + '</option>' +
      '<option value="integrazione">'  + tt(lang,'opt.integ') + '</option>' +
    '</optgroup>' +
    '<option value="altro">' + tt(lang,'opt.altro') + '</option>';
}

/* ─────────────────────────────────────────────────────────────
   DROPDOWN LINGUE generato dinamicamente da LANG_META
───────────────────────────────────────────────────────────── */
function buildSwitcher(currentLang) {
  var dd = document.getElementById('lang-dropdown');
  if (!dd) return;
  var btns = Object.entries(LANG_META).map(function(entry) {
    var code = entry[0], meta = entry[1];
    var active = code === currentLang ? ' class="active"' : '';
    return '<button data-lang="' + code + '" onclick="setLanguage(\'' + code + '\')"' + active + '>' +
      '<span class="lang-flag">' + meta.flag + '</span> ' + meta.name + '</button>';
  }).join('');
  /* Separatore + opzione auto per altre lingue */
  btns += '<hr style="border:none;border-top:1px solid var(--border);margin:4px 0">' +
    '<button onclick="autoDetectBrowser()" style="color:var(--text-muted)">' +
    '<span class="lang-flag">🌐</span> Altre lingue / Other…</button>';
  dd.innerHTML = btns;
}

/* Rileva lingua browser e prova auto-traduzione */
async function autoDetectBrowser() {
  var browser = (navigator.language || navigator.userLanguage || 'it').split('-')[0].toLowerCase();
  if (I18N[browser]) {
    await setLanguage(browser);
  } else {
    await setLanguage(browser); /* auto-translate */
  }
}

/* ─────────────────────────────────────────────────────────────
   SET LANGUAGE (async per supporto auto-traduzione)
───────────────────────────────────────────────────────────── */
async function setLanguage(lang) {
  if (!lang) lang = 'it';

  /* Se la lingua non è nelle traduzioni native, auto-traduci */
  if (!I18N[lang]) {
    var ok = await autoTranslate(lang);
    if (!ok) lang = 'it';
  }

  /* 1 — data-i18n (innerHTML) */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.innerHTML = tt(lang, el.getAttribute('data-i18n'));
  });

  /* 2 — Placeholder */
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    el.placeholder = tt(lang, el.getAttribute('data-i18n-ph'))
                       .replace(/&amp;/g,'&').replace(/&nbsp;/g,' ');
  });

  /* 3 — Rebuild sezioni dinamiche */
  buildServiceCards(lang);
  buildHeroStats(lang);
  buildAboutVisual(lang);
  buildFormSelect(lang);

  /* 4 — Nota lingua pagine legali */
  var legalNote = document.querySelector('.legal-lang-note');
  if (legalNote) {
    var note = tt(lang, 'legal.note');
    legalNote.textContent = note;
    legalNote.classList.toggle('visible', lang !== 'it' && !!note);
  }

  /* 5 — Language switcher UI */
  var meta = LANG_META[lang] || { flag: '🌐', code: lang.toUpperCase() };
  var flagEl = document.getElementById('lang-flag');
  var codeEl = document.getElementById('lang-code');
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code || lang.toUpperCase();
  buildSwitcher(lang);

  /* 6 — Persiste e html lang */
  try { localStorage.setItem('ass_lang', lang); } catch(e) {}
  document.documentElement.lang = lang;

  /* 7 — Chiudi dropdown */
  var dd = document.getElementById('lang-dropdown');
  if (dd) dd.classList.remove('open');
}

/* ─────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────── */
function initI18n() {
  /* Lingua: 1) localStorage 2) browser 3) IT */
  var saved, browser, chosen;
  try { saved = localStorage.getItem('ass_lang'); } catch(e) {}
  browser = (navigator.language || '').split('-')[0].toLowerCase();
  chosen  = (saved) ? saved : (I18N[browser] ? browser : 'it');

  setLanguage(chosen);

  /* Dropdown toggle */
  var toggle = document.getElementById('lang-toggle');
  var dropdown = document.getElementById('lang-dropdown');
  if (toggle && dropdown) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
    });
    document.addEventListener('click', function() {
      dropdown.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
    dropdown.addEventListener('click', function(e) { e.stopPropagation(); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
