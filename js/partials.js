/* ============================================================
   CR Rao AIMSCS — Partials injector
   Renders a consistent nav, mobile menu, footer and floating
   CTAs into <div data-partial="..."> placeholders.
   Used by all subpages in /pages/ to avoid duplicating ~200
   lines of nav+footer markup across 13 HTML files.
   ============================================================ */
'use strict';

(function () {
  const BASE = '../';   // pages live one level below site root

  const TOPBAR = `
  <div class="container top-bar-inner">
    <div class="top-bar-info">
      <span class="top-bar-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 7331 155 319</span>
      <span class="top-bar-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>admissions@crraoaimscs.res.in</span>
      <span class="top-bar-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>University of Hyderabad Campus</span>
    </div>
    <div class="top-bar-links"><a href="#">Student Login</a><a href="#">Faculty Portal</a><a href="research.html">Research</a></div>
  </div>`;

  function navHTML(active) {
    const a = (id) => active === id ? ' aria-current="page"' : '';
    return `
  <div class="container nav-inner">
    <a href="${BASE}index.html" class="nav-logo" aria-label="CR Rao AIMSCS Home">
      <span class="nav-logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 .5 1.5 2 6 2s6-1.5 6-2v-5"/></svg></span>
      <span class="nav-logo-text"><span class="nav-logo-name">CR Rao AIMSCS</span><br><span class="nav-logo-sub">University of Hyderabad Campus</span></span>
    </a>
    <ul class="nav-links">
      <li class="nav-item"><a href="${BASE}index.html" class="nav-link"${a('home')}>Home</a></li>
      <li class="nav-item"><a href="about.html" class="nav-link"${a('about')}>About</a></li>
      <li class="nav-item">
        <a href="#" class="nav-link has-dropdown">Programs</a>
        <div class="mega-dropdown">
          <a href="btech-cse.html" class="mega-item"><span class="mega-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg></span><span><span class="mega-item-title">B.Tech CSE</span><span class="mega-item-sub">Computer Science &amp; Engineering</span></span></a>
          <a href="btech-aiml.html" class="mega-item"><span class="mega-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6"/></svg></span><span><span class="mega-item-title">B.Tech AI &amp; ML</span><span class="mega-item-sub">Artificial Intelligence &amp; ML</span></span></a>
          <a href="btech-ds.html" class="mega-item"><span class="mega-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/></svg></span><span><span class="mega-item-title">B.Tech Data Science</span><span class="mega-item-sub">Engineering &amp; Analytics</span></span></a>
          <a href="btech-cyber.html" class="mega-item"><span class="mega-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><span><span class="mega-item-title">B.Tech Cyber Security</span><span class="mega-item-sub">Information Security</span></span></a>
          <a href="btech-mc.html" class="mega-item"><span class="mega-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16M4 12h16M4 20h16M9 4l3 16M15 4l-3 16"/></svg></span><span><span class="mega-item-title">B.Tech Math &amp; Computing</span><span class="mega-item-sub">Applied Math + CS</span></span></a>
        </div>
      </li>
      <li class="nav-item"><a href="admissions.html" class="nav-link"${a('admissions')}>Admissions</a></li>
      <li class="nav-item"><a href="placements.html" class="nav-link"${a('placements')}>Placements</a></li>
      <li class="nav-item"><a href="faculty.html" class="nav-link"${a('faculty')}>Faculty</a></li>
      <li class="nav-item"><a href="campus-life.html" class="nav-link"${a('campus-life')}>Campus Life</a></li>
      <li class="nav-item"><a href="contact.html" class="nav-link"${a('contact')}>Contact</a></li>
    </ul>
    <div class="nav-cta">
      <a href="tel:+917331155319" class="btn btn-secondary btn-sm">Call Now</a>
      <a href="admissions.html#apply" class="btn btn-primary btn-sm">Apply Now</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>`;
  }

  const MOBILE = `
  <div class="mobile-menu-header">
    <span class="nav-logo"><span class="nav-logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 .5 1.5 2 6 2s6-1.5 6-2v-5"/></svg></span><span class="nav-logo-text"><span class="nav-logo-name" style="color:#1a3a6b">CR Rao AIMSCS</span><br><span class="nav-logo-sub" style="color:#6b7280">B.Tech 2026-27</span></span></span>
    <button class="mobile-close" id="mobileClose" aria-label="Close menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
  </div>
  <ul class="mobile-nav-links">
    <li class="mobile-nav-item"><a href="${BASE}index.html" class="mobile-nav-link">Home</a></li>
    <li class="mobile-nav-item"><a href="about.html" class="mobile-nav-link">About</a></li>
    <li class="mobile-nav-item">
      <a class="mobile-nav-link" data-toggle="m-programs">Programs<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
      <ul class="mobile-sub-links" id="m-programs">
        <li><a href="btech-cse.html" class="mobile-sub-link">B.Tech CSE</a></li>
        <li><a href="btech-aiml.html" class="mobile-sub-link">B.Tech AI &amp; ML</a></li>
        <li><a href="btech-ds.html" class="mobile-sub-link">B.Tech Data Science</a></li>
        <li><a href="btech-cyber.html" class="mobile-sub-link">B.Tech Cyber Security</a></li>
        <li><a href="btech-mc.html" class="mobile-sub-link">B.Tech Math &amp; Computing</a></li>
      </ul>
    </li>
    <li class="mobile-nav-item"><a href="admissions.html" class="mobile-nav-link">Admissions 2026</a></li>
    <li class="mobile-nav-item"><a href="placements.html" class="mobile-nav-link">Placements</a></li>
    <li class="mobile-nav-item"><a href="faculty.html" class="mobile-nav-link">Faculty</a></li>
    <li class="mobile-nav-item"><a href="research.html" class="mobile-nav-link">Research</a></li>
    <li class="mobile-nav-item"><a href="campus-life.html" class="mobile-nav-link">Campus Life</a></li>
    <li class="mobile-nav-item"><a href="scholarships.html" class="mobile-nav-link">Scholarships</a></li>
    <li class="mobile-nav-item"><a href="contact.html" class="mobile-nav-link">Contact</a></li>
  </ul>
  <div class="mobile-cta">
    <a href="admissions.html#apply" class="btn btn-primary btn-lg">Apply Now</a>
    <a href="https://wa.me/917331155319" class="btn btn-whatsapp btn-lg">WhatsApp Counsellor</a>
  </div>`;

  const FOOTER = `
  <div class="container footer-top">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo"><span class="footer-logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 .5 1.5 2 6 2s6-1.5 6-2v-5"/></svg></span><div><div class="footer-logo-name">CR Rao AIMSCS</div><div class="footer-logo-sub">University of Hyderabad Campus</div></div></div>
        <p class="footer-desc">Advanced Institute of Mathematics, Statistics and Computer Science — a research-driven B.Tech destination at the University of Hyderabad campus.</p>
        <div class="footer-accreditations"><span class="accred-badge">AICTE</span><span class="accred-badge">JNTUH</span><span class="accred-badge">EoA 2026-27</span><span class="accred-badge">UoH Campus</span></div>
        <div class="footer-social">
          <a href="#" class="social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
          <a href="#" class="social-link" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
          <a href="#" class="social-link" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg></a>
          <a href="#" class="social-link" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg></a>
        </div>
      </div>
      <div>
        <h4 class="footer-col-title">Programs</h4>
        <ul class="footer-links">
          <li><a class="footer-link" href="btech-cse.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>B.Tech CSE</a></li>
          <li><a class="footer-link" href="btech-aiml.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>B.Tech AI &amp; ML</a></li>
          <li><a class="footer-link" href="btech-ds.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>B.Tech Data Science</a></li>
          <li><a class="footer-link" href="btech-cyber.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>B.Tech Cyber Security</a></li>
          <li><a class="footer-link" href="btech-mc.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>B.Tech Math &amp; Computing</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-col-title">Quick Links</h4>
        <ul class="footer-links">
          <li><a class="footer-link" href="about.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>About Us</a></li>
          <li><a class="footer-link" href="admissions.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Admissions 2026</a></li>
          <li><a class="footer-link" href="scholarships.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Scholarships</a></li>
          <li><a class="footer-link" href="placements.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Placements</a></li>
          <li><a class="footer-link" href="faculty.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Faculty</a></li>
          <li><a class="footer-link" href="research.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Research</a></li>
          <li><a class="footer-link" href="campus-life.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Campus Life</a></li>
          <li><a class="footer-link" href="contact.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-col-title">Contact</h4>
        <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Prof C R Rao Road,<br>UoH Campus, Hyderabad – 500046, Telangana</div>
        <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+917331155319">+91 7331 155 319</a></div>
        <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:admissions@crraoaimscs.res.in">admissions@crraoaimscs.res.in</a></div>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <div>© 2026 CR Rao AIMSCS. All rights reserved.</div>
    <div class="footer-bottom-links"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Sitemap</a><a href="#">Disclosure</a></div>
  </div>`;

  const WHATSAPP_FLOAT = `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.875 2.909 4.376 2.909 7.026-.004 5.444-4.46 9.879-9.945 9.879M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>
    <span class="whatsapp-float-label">Chat on WhatsApp</span>`;

  const STICKY_MOBILE = `
    <a href="tel:+917331155319"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Call</a>
    <a href="https://wa.me/917331155319" class="whatsapp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4M12 22h-.1c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 16 2 14.1 2 12.1 2 6.7 6.4 2.2 11.9 2.2c2.7 0 5.1 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.9-9.8 9.9"/></svg>WhatsApp</a>
    <a href="admissions.html#apply" class="primary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Apply</a>`;

  function inject() {
    const active = document.body.dataset.activeNav || '';
    const slots = {
      'topbar':       { tag: 'div',     id: null, cls: 'top-bar', html: TOPBAR },
      'nav':          { tag: 'nav',     id: 'navbar', cls: '', html: navHTML(active), attrs: { 'aria-label': 'Primary' } },
      'mobile-menu':  { tag: 'aside',   id: 'mobileMenu', cls: 'mobile-menu', html: MOBILE, attrs: { 'aria-label': 'Mobile menu' } },
      'mobile-overlay':{ tag: 'div',    id: 'mobileOverlay', cls: 'mobile-overlay', html: '' },
      'footer':       { tag: 'footer',  id: null, cls: '', html: FOOTER },
      'whatsapp':     { tag: 'a',       id: 'floatCTA', cls: 'whatsapp-float', html: WHATSAPP_FLOAT, attrs: { href: 'https://wa.me/917331155319', 'aria-label': 'Chat on WhatsApp' } },
      'back-to-top':  { tag: 'button',  id: 'backToTop', cls: 'back-to-top', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>', attrs: { 'aria-label': 'Back to top' } },
      'sticky-mobile':{ tag: 'div',     id: null, cls: 'sticky-mobile-cta', html: STICKY_MOBILE },
    };

    document.querySelectorAll('[data-partial]').forEach(el => {
      const key = el.dataset.partial;
      const cfg = slots[key];
      if (!cfg) return;
      const node = document.createElement(cfg.tag);
      if (cfg.id) node.id = cfg.id;
      if (cfg.cls) node.className = cfg.cls;
      if (cfg.attrs) Object.entries(cfg.attrs).forEach(([k, v]) => node.setAttribute(k, v));
      node.innerHTML = cfg.html;
      el.replaceWith(node);
    });
  }

  /* Inject before main.js wires up its event handlers — main.js is
     deferred and DOMContentLoaded fires after we run synchronously. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
