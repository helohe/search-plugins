
/*** OVERRIDES ***/
/*** ========= ***/

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
/* O-0204: set search region
 * [NOTE] May not be hidden if Firefox has changed your settings due to your region (0203) ***/
user_pref("browser.search.region", "DE"); // [HIDDEN PREF]
/* O-0210: set preferred language for displaying web pages
 * [TEST] https://addons.mozilla.org/about ***/
user_pref("intl.accept_languages", "de, en-US, en");
/* O-0211: use US English locale regardless of the system locale
 * [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630 ***/
user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]
/* OOOO: disable spoof english *prompt* ***/
user_pref("privacy.spoof_english", 1);

/*** [SECTION 0300]: QUIETER FOX ***/
/* 0304: disable auto-INSTALLING extension and theme updates (after the check in 0303)
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) ***/
user_pref("extensions.update.autoUpdateDefault", false);
/* OOOO: disable connections when clicking on a uri which FF can not handle
 * [NOTE] This must be applied before the first start off a profile (TODO: $FF_PROFILE/handlers.json) ***/
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.1.name", "");
user_pref("gecko.handlerService.schemes.irc.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.2.name", "");
user_pref("gecko.handlerService.schemes.irc.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.3.name", "");
user_pref("gecko.handlerService.schemes.irc.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.1.name", "");
user_pref("gecko.handlerService.schemes.ircs.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.2.name", "");
user_pref("gecko.handlerService.schemes.ircs.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.3.name", "");
user_pref("gecko.handlerService.schemes.ircs.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.2.name", "");
user_pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.3.name", "");
user_pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.1.name", "");
user_pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.2.name", "");
user_pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.3.name", "");
user_pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "");

/*** [SECTION 0400]: SAFE BROWSING (SB)
   SB has taken many steps to preserve privacy. If required, a full url is never sent
   to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes.
   Firefox takes measures such as striping out identifying parameters and since SBv4 (FF57+)
   doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)
   FWIW, Google also swear it is anonymized and only used to flag malicious sites.
   [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   [2] https://wiki.mozilla.org/Security/Safe_Browsing
   [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
***/
/* 0401: disable SB (Safe Browsing)
 * [WARNING] Do this at your own risk! These are the master switches
 * [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content ***/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS / IPv6 ***/
/* O-0705: enable DNS-over-HTTPS (DoH)
 * 0=off by default, 2=TRR (Trusted Recursive Resolver) first, 3=TRR only, 5=explicitly off
 * see "doh-rollout.home-region": USA Feb 2020, Canada July 2021 [3]
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://blog.mozilla.org/en/mozilla/news/firefox-by-default-dns-over-https-rollout-in-canada/
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 3);
/* OOOO: set a DoH resolver ***/
user_pref("network.trr.uri", "https://dns.example.com/dns-query");
user_pref("network.trr.bootstrapAddr", "xxx.xxx.xxx.xxx"); // HIDDEN; Until FF89 this was network.trr.bootstrapAddress
/* OOOO: enable DoH even if the parental control canary domain is blocked ***/
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
/* OOOO: enable Encrypted Client Hello ***/
   // user_pref("network.dns.echconfig.enabled", true);
   // user_pref("network.dns.use_https_rr_as_altsvc", true);
   // EVALUATE: network.dns.echconfig.fallback_to_origin_when_all_failed
   // https://blog.mozilla.org/security/2021/01/07/encrypted-client-hello-the-future-of-esni-in-firefox/
// network.trr.odoh.enabled

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
/* 0810: disable coloring of visited links
 * [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
 * redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
 * attacks. Don't forget clearing history on close (2803). However, social engineering [2#limits][4][5]
 * and advanced targeted timing attacks could still produce usable results
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
user_pref("layout.css.visited_links_enabled", false);

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
   Your cipher and other settings can be used in server side fingerprinting
   [TEST] https://www.ssllabs.com/ssltest/viewMyClient.html
   [TEST] https://browserleaks.com/ssl
   [TEST] https://ja3er.com/
   [1] https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/
***/
/** OCSP (Online Certificate Status Protocol)
   [1] https://scotthelme.co.uk/revocation-is-broken/
   [2] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
***/
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1); // XXX FIXME XXX

/** MIXED CONTENT ***/
/* 1245: enable HTTPS-Only mode for local resources [FF77+] ***/
user_pref("dom.security.https_only_mode.upgrade_local", true);

/*** [SECTION 1700]: CONTAINERS
   Check out Temporary Containers [2], read the article [3], and visit the wiki/repo [4]
   [1] https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
   [2] https://addons.mozilla.org/firefox/addon/temporary-containers/
   [3] https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21
   [4] https://github.com/stoically/temporary-containers/wiki
***/
/* 1702: set behaviour on "+ Tab" button to display container menu on left click [FF74+]
 * [NOTE] The menu is always shown on long press and right click
 * [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab ***/
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
/* OOOO: isolate site permissions by userContext ***/
user_pref("permissions.isolateBy.userContext", true);

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
/* 2020: disable GMP (Gecko Media Plugins)
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
/* 2030: disable autoplay of HTML5 media [FF63+]
 * 0=Allow all, 1=Block non-muted media (default), 5=Block all
 * [NOTE] You can set exceptions under site permissions
 * [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites ***/
user_pref("media.autoplay.default", 5);

/*** [SECTION 2600]: MISCELLANEOUS ***/
/* O-2620: disable PDFJS [SETUP-CHROME]
 * This setting controls if the option "Display in Firefox" is available in the setting below
 *   and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
 * PROS: pdfjs is lightweight, open source, and as secure/vetted more than most
 *   Exploits are rare (one serious case in seven years), treated seriously and patched quickly.
 *   It doesn't break "state separation" of browser content (by not sharing with OS, independent apps).
 *   It maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
 * CONS: You may prefer a different pdf reader for security reasons
 * CAVEAT: JS can still force a pdf to open in-browser by bundling its own code
 * [SETTING] General>Applications>Portable Document Format (PDF) ***/
   // user_pref("pdfjs.disabled", true); // [DEFAULT: false]

/** EXTENSIONS ***/
/* 2662: disable webextension restrictions on certain mozilla domains (you also need 4503) [FF60+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("extensions.webextensions.restrictedDomains", "");
/* OOOO: accept all WebExtensions permission prompts
 * [WARNING] Do this at your own risk! ***/
   // user_pref("extensions.webextPermissionPrompts", false);
   // user_pref("extensions.webextOptionalPermissionPrompts", false);

/*** [SECTION 2700]: PERSISTENT STORAGE
   Data SET by websites including
          cookies : profile\cookies.sqlite
     localStorage : profile\webappsstore.sqlite
        indexedDB : profile\storage\default
   serviceWorkers :
   [NOTE] indexedDB and serviceWorkers are not available in Private Browsing Mode
   [NOTE] Blocking cookies also blocks websites access to: localStorage (incl. sessionStorage),
   indexedDB, sharedWorker, and serviceWorker (and therefore service worker cache and notifications)
   If you set a site exception for cookies (either "Allow" or "Allow for Session") then they become
   accessible to websites except shared/service workers where the cookie setting must be "Allow"
***/
user_pref("_user.js.parrot", "2700 syntax error: the parrot's joined the bleedin' choir invisible!");
/* O-2701: disable or isolate 3rd-party cookies and site-data [SETUP-WEB]
 * 0 = Accept cookies and site data
 * 1 = (Block) All third-party cookies
 * 2 = (Block) All cookies
 * 3 = (Block) Cookies from unvisited websites
 * 4 = (Block) Cross-site tracking cookies (default)
 * 5 = (Isolate All) Cross-site cookies (TCP: Total Cookie Protection / dFPI: dynamic FPI) [1] (FF86+)
 * Option 5 with FPI enabled (4001) is ignored and not shown, and option 4 used instead
 * [NOTE] You can set cookie exceptions under site permissions or use an extension
 * [NOTE] Enforcing category to custom ensures ETP related prefs are always honored
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cookies
 * [1] https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/ ***/
   // user_pref("network.cookie.cookieBehavior", 1);

/*** [SECTION 2800]: SHUTDOWN
   * Sanitizing on shutdown is all or nothing. It does not use Managed Exceptions under
     Privacy & Security>Delete cookies and site data when Firefox is closed (1681701)
   * If you want to keep some sites' cookies (exception as "Allow") and optionally other site
     data but clear all the rest on close, then you need to set the "cookie" and optionally the
     "offlineApps" prefs below to false, and to set the cookie lifetime pref to 2 (2703)
***/
/* OE-2803: set what items to clear on shutdown (if 2802 is true) [SETUP-CHROME]
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings
 * [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
user_pref("privacy.clearOnShutdown.siteSettings", true); // Site Preferences
/* OE-2804: reset default items to clear with Ctrl-Shift-Del (to match 2803) [SETUP-CHROME]
 * This dialog can also be accessed from the menu History>Clear Recent History
 * Firefox remembers your last choices. This will reset them when you start Firefox ***/
user_pref("privacy.cpd.siteSettings", true); // Site Preferences

/*** [SECTION 4000]: FPI (FIRST PARTY ISOLATION) ***/
/* 4002: enforce FPI restriction for window.opener [FF54+]
 * [NOTE] Setting this to false may reduce the breakage in 4001
 * FF65+ blocks postMessage with targetOrigin "*" if originAttributes don't match. But
 * to reduce breakage it ignores the 1st-party domain (FPD) originAttribute [2][3]
 * The 2nd pref removes that limitation and will only allow communication if FPDs also match
 * [1] https://bugzilla.mozilla.org/1319773#c22
 * [2] https://bugzilla.mozilla.org/1492607
 * [3] https://developer.mozilla.org/docs/Web/API/Window/postMessage ***/
user_pref("privacy.firstparty.isolate.block_post_message", true);

/*** [SECTION 5000]: OPTIONAL OPSEC
   Disk avoidance, application data isolation, eyeballs...
***/
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 5004: disable permissions manager from writing to disk [FF41+] [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 5005: disable intermediate certificate caching [FF41+] [RESTART]
 * [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only.
 * Saved logins and passwords are not available. Reset the pref and restart to return them ***/
   // user_pref("security.nocertdb", true); // [HIDDEN PREF]
/* 5006: disable favicons in history and bookmarks
 * [NOTE] Stored as data blobs in favicons.sqlite, these don't reveal anything that your
 * actual history (and bookmarks) already do. Your history is more detailed, so
 * control that instead; e.g. disable history, clear history on close, use PB mode
 * [NOTE] favicons.sqlite is sanitized on Firefox close ***/
   // user_pref("browser.chrome.site_icons", false);
/* 5009: disable "open with" in download dialog [FF50+]
 * Application data isolation [1]
 * [1] https://bugzilla.mozilla.org/1281959 ***/
user_pref("browser.download.forbid_open_with", true);
/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
   // user_pref("browser.urlbar.suggest.history", false);
   // user_pref("browser.urlbar.suggest.bookmark", false);
   // user_pref("browser.urlbar.suggest.openpage", false);
   // user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5013: disable browsing and download history
 * [NOTE] We also clear history and downloads on exit (2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
user_pref("places.history.enabled", false);
/* 5016: discourage downloading to desktop
 * 0=desktop, 1=downloads (default), 2=last used
 * [SETTING] To set your default "downloads": General>Downloads>Save files to ***/
   // user_pref("browser.download.folderList", 2);

/*** [SECTION 5500]: OPTIONAL HARDENING
   Not recommended. Keep in mind that these can cause breakage, performance
   issues, are mostly fingerpintable, and the threat model is practically zero
***/
/* 5501: disable MathML (Mathematical Markup Language) [FF51+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mathml ***/
   // user_pref("mathml.disabled", true); // 1173199
/* 5502: disable in-content SVG (Scalable Vector Graphics) [FF53+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+svg ***/
   // user_pref("svg.disabled", true); // 1216893
/* 5503: disable graphite
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+graphite
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL) ***/
user_pref("gfx.font_rendering.graphite.enabled", false);
/* 5504: disable asm.js [FF22+]
 * [1] http://asmjs.org/
 * [2] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=asm.js
 * [3] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/ ***/
user_pref("javascript.options.asmjs", false);
/* 5505: disable Ion and baseline JIT to harden against JS exploits
 * [NOTE] In FF75+, when **both** Ion and JIT are disabled, **and** the new
 * hidden pref is enabled, then Ion can still be used by extensions (1599226)
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+jit ***/
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
/* 5506: disable WebAssembly [FF52+]
 * Vulnerabilities [1] have increasingly been found, including those known and fixed
 * in native programs years ago [2]. WASM has powerful low-level access, making
 * certain attacks (brute-force) and vulnerabilities more possible
 * [STATS] ~0.2% of websites, about half of which are for crytopmining / malvertising [2][3]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=wasm
 * [2] https://spectrum.ieee.org/tech-talk/telecom/security/more-worries-over-the-security-of-web-assembly
 * [3] https://www.zdnet.com/article/half-of-the-websites-using-webassembly-use-it-for-malicious-purposes ***/
user_pref("javascript.options.wasm", false);

/*** [SECTION 6000]: Resets ***/

/* 6900: enable IPv6 ***/
   // user_pref("network.dns.disableIPv6", false);
/* 6901: enable location bar using search ***/
user_pref("keyword.enabled", true);
/* 6902: enable WebRTC ***/
user_pref("media.peerconnection.enabled", true);
/* 6903: enable WegGL ***/
   // user_pref("webgl.disabled", false);
/* 6904: restrict autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 1);
/* 6905: allow autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 0);
/* 6906: allow "Confirm you want to leave" dialog on page close ***/
user_pref("dom.disable_beforeunload", false);
/* 6907: enable WebAssembly ***/
   // user_pref("javascript.options.wasm", true);
/* 6908: relax lock down of allowed extension directories a bit ***/
user_pref("extensions.enabledScopes", 7);
/* 6909: disable tracker cookies and site-data ***/
   // user_pref("network.cookie.cookieBehavior", 4);
/* 6910: do not make thirdparty cookies session only because it can be detected ***/
user_pref("network.cookie.thirdparty.sessionOnly", false);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", false);
/* 6911: Keep cookies on cpd ***/
user_pref("privacy.cpd.cookies", false);
/* 6912: disable FPI ***/
   // user_pref("privacy.firstparty.isolate", true);
/* 6913: disable RFP ***/
   // user_pref("privacy.resistFingerprinting", false);
/* 6914: disable RFP letterboxing ***/
   // user_pref("privacy.resistFingerprinting.letterboxing", false);


/*** [SECTION 7000]: Personal ***/

/** Improved behavior ***/
/* 7001: keep open if the last tab is closed ***/
user_pref("browser.tabs.closeWindowWithLastTab", false);
/* 7002: disable tab detaching ***/
user_pref("browser.tabs.allowTabDetach", false);
/* 7003: save new bookmarks in "Other bookmarks" (old behaviour) ***/
user_pref("browser.bookmarks.defaultLocation", "unfiled");
/* 7004: always show the bookmarks toolbar ***/
user_pref("browser.toolbars.bookmarks.visibility", "always");

/** Disable features that are designed to be annoying ***/
/* 7101: use "old" crtl+tab behaviour ***/
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
/* 7102: disable usesless and annoying notification ***/
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
/* 7103: disable "Report This Extension to Mozilla" ***/
user_pref("extensions.abuseReport.enabled", false);
/* 7104: disable pocket ***/
user_pref("extensions.pocket.enabled", false);
/* 7105: disable firefox account and sync ***/
user_pref("identity.fxaccounts.enabled", false);
/* 7106: stop annoying me with DRM ***/
user_pref("media.gmp-widevinecdm.visible", false);
/* 7107: disabled stealing of media keys ***/
user_pref("media.hardwaremediakeys.enabled", false);
/* 7108: hide the global WebRTC indicator ***/
   // user_pref("privacy.webrtc.hideGlobalIndicator", true);

/** Expose hidden features ***/
/* 7201: show compactmode ***/
user_pref("browser.compactmode.show", true);
/* 7202: expose Firefox Experiments on about:preferences ***/
user_pref("browser.preferences.experimental", true);
/* 7203: enable the new global WebRTC indicator ***/
user_pref("privacy.webrtc.globalMuteToggles", true);
user_pref("privacy.webrtc.legacyGlobalIndicator", false);

/** Other personal overrides ***/
/* 7801: always have bookmarks in a textual form ***/
user_pref("browser.bookmarks.autoExportHTML", true);
/* 7802: change default download dir for my hardened firejail profile ***/
user_pref("browser.download.dir", "~/Downloads/Firefox");
user_pref("browser.download.lastDir", "~/Downloads/Firefox");
/* 7803: devtools customizations ***/
user_pref("devtools.aboutdebugging.showHiddenAddons", true);
user_pref("devtools.command-button-measure.enabled", true);
user_pref("devtools.command-button-paintflashing.enabled", true);
user_pref("devtools.command-button-rulers.enabled", true);
user_pref("devtools.command-button-screenshot.enabled", true);
user_pref("devtools.dom.enabled", true);
user_pref("devtools.selfxss.count", 5);
/* 7804: reset to Mozilla Firefox default, changed by RedHat ***/
user_pref("network.negotiate-auth.trusted-uris", "");
/* 7805: enable userChrome.css and userContent.css support ***/
   // user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* 7806: (untested) ***/
user_pref("distribution.fedora.bookmarksProcessed", true);

user_pref("security.sandbox.content.headless", true);

user_pref("network.security.ports.banned.override", "");

