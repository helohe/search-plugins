/*** OVERRIDES ***/
/*** ========= ***/

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
/* O-0204: set search region ***/
user_pref("browser.search.region", "DE");
/* O-0210: set preferred language for displaying web pages ***/
user_pref("intl.accept_languages", "de, en-US, en");
/* O-0211: do not use US English locale regardless of the system locale ***/
user_pref("javascript.use_us_english_locale", false);
/* OOOO: disable spoof english *prompt* ***/
user_pref("privacy.spoof_english", 1);

/*** [SECTION 0300]: QUIETER FOX ***/
/* OOOO: only if 2020 (disable GMP) is used ***/
user_pref("media.gmp-manager.url", "");
/* OOOO: disable connections when clicking on a uri which FF can not handle
 * [NOTE] If you apply this to a existing profile, you need to delete handlers.json ***/
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

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS / IPv6 ***/
/* O-0705: enable DNS-over-HTTPS (DoH)
 * 0=off by default, 2=TRR (Trusted Recursive Resolver) first, 3=TRR only, 5=explicitly off
 * [TEST] about:networking
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DNS_Over_HTTPS
 * [3] https://wiki.mozilla.org/Trusted_Recursive_Resolver
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 3);
/* OOOO: configure a DoH resolver
 * [NOTE] If the second pref is not setup (correctly), firefox will ask your system resolver once ***/
user_pref("network.trr.uri", "https://dns.digitale-gesellschaft.ch/dns-query");
user_pref("network.trr.bootstrapAddr", "185.95.218.43"); // [HIDDEN PREF]
/* OOOO: use DoH even if parental control is enabled ***/
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
/* OOOO: ***/
// TODO: user_pref("network.trr.confirmationNS", "skip");
/* OOOO: configure ODoH ***/
   // user_pref("network.trr.odoh.enabled", true);
   // user_pref("network.trr.odoh.
/* OOOO: enable Encrypted Client Hello ***/
   // user_pref("network.dns.echconfig.enabled", true);
   // user_pref("network.dns.use_https_rr_as_altsvc", true);
   // EVALUATE: network.dns.echconfig.fallback_to_origin_when_all_failed
   // https://blog.mozilla.org/security/2021/01/07/encrypted-client-hello-the-future-of-esni-in-firefox/

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/** OCSP (Online Certificate Status Protocol) ***/
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1);

/*** [SECTION 1700]: CONTAINERS ***/
/* OOOO: isolate site permissions by userContext ***/
user_pref("permissions.isolateBy.userContext", true);

/*** [SECTION 2600]: MISCELLANEOUS ***/
/* O-2620: disable PDFJS [SETUP-CHROME]
 * This setting controls if the option "Display in Firefox" is available in the setting below
 *   and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
 * PROS: pdfjs is lightweight, open source, and as secure/vetted more than most
 *   Exploits are rare (one serious case in seven years), treated seriously and patched quickly.
 *   It doesn't break "state separation" of browser content (by not sharing with OS, independent apps).
 *   It maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
 * CONS: You may prefer a different pdf reader for security reasons
 * CAVEAT: JS can still force a pdf to open in-browser by bundling its own code ***/
   // user_pref("pdfjs.disabled", true); // [DEFAULT: false]
/* OOOO: Run content processes in headless mode and disallow connections to
 * the X server.  Experimental; breaks WebGL, and requires
 * "widget.non-native-theme.enabled" (enforced in 2502). [RESTART]
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1640345
 * [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1672013 ***/
user_pref("security.sandbox.content.headless", true);

/** EXTENSIONS ***/
/* OOOO: accept all WebExtensions permission prompts
 * [WARNING] Do this at your own risk! ***/
   // user_pref("extensions.webextPermissionPrompts", false);
   // user_pref("extensions.webextOptionalPermissionPrompts", false);

/*** [SECTION 2800]: SHUTDOWN ***/
/* OE-2803: set what items to clear on shutdown (if 2802 is true) [SETUP-CHROME] ***/
user_pref("privacy.clearOnShutdown.siteSettings", true); // Site Preferences
/* OE-2804: reset default items to clear with Ctrl-Shift-Del (to match 2803) [SETUP-CHROME]
 * This dialog can also be accessed from the menu History>Clear Recent History
 * Firefox remembers your last choices. This will reset them when you start Firefox ***/
user_pref("privacy.cpd.siteSettings", true); // Site Preferences

/*** [SECTION 6000]: Resets ***/
/* 6901: enable IPv6 ***/
   // user_pref("network.dns.disableIPv6", false);
/* 6902: enable location bar using search ***/
user_pref("keyword.enabled", true);
/* 6903: enable WebRTC ***/
user_pref("media.peerconnection.enabled", true);
/* 6904: restrict autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 1);
/* 6905: allow autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 0);
/* 6906: allow "Confirm you want to leave" dialog on page close ***/
user_pref("dom.disable_beforeunload", false);
/* 6907: enable WegGL ***/
   // user_pref("webgl.disabled", false);
/* 6908: relax lock down of allowed extension directories a bit ***/
user_pref("extensions.enabledScopes", 7);
/* 6909: disable Cross-site tracking cookies and site-data ***/
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
   // user_pref("browser.download.lastDir", "~/Downloads/Firefox");
/* 7803: devtools customizations ***/
user_pref("devtools.aboutdebugging.showHiddenAddons", true);
user_pref("devtools.command-button-measure.enabled", true);
user_pref("devtools.command-button-paintflashing.enabled", true);
user_pref("devtools.command-button-rulers.enabled", true);
user_pref("devtools.command-button-screenshot.enabled", true);
user_pref("devtools.dom.enabled", true);
user_pref("devtools.selfxss.count", 5);
/* 7804: reset to Mozilla Firefox default, changed by RedHat/Fedora ***/
user_pref("network.negotiate-auth.trusted-uris", "");
/* 7805: enable userChrome.css and userContent.css support ***/
   // user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* 7806: skip creation of default bookmarks patched in by Fedora (untested) ***/
user_pref("distribution.fedora.bookmarksProcessed", true);
/* 7807: whitelist additionals ports (to find the pref on about:config and reset it on restart) ***/
user_pref("network.security.ports.banned.override", "");

