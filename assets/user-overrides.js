/*** [SECTION 6000]: OVERRIDES ***/
user_pref("_user.js.parrot", "6000 syntax error: the parrot still keeps flying");

/* 6001: disable Activity Stream recent Highlights in the Library ***/
user_pref("browser.library.activity-stream.enabled", false); // 0105d
/* 6002: disable auto-INSTALLING extension and theme updates ***/
user_pref("extensions.update.autoUpdateDefault", false); // 0302b
/* 6003: disable extension metadata ***/
   // user_pref("extensions.getAddons.cache.enabled", false); // 0306
/* 6604: disable SB (Safe Browsing) ***/
user_pref("browser.safebrowsing.malware.enabled", false); // 0410
user_pref("browser.safebrowsing.phishing.enabled", false); // 0410
/* 6005: disable Screenshots ***/
   // user_pref("extensions.screenshots.disabled", true); // 0515
/* 6006: disable FTP ***/
user_pref("network.ftp.enabled", false); // 0708
/* 6007: disable location bar suggestion types ***/
user_pref("browser.urlbar.suggest.history", false); // 0850a
   // user_pref("browser.urlbar.suggest.bookmark", false); // 0850a
user_pref("browser.urlbar.suggest.openpage", false); // 0850a
user_pref("browser.urlbar.suggest.topsites", false); // 0850a
/* 6008: disable browsing and download history ***/
user_pref("places.history.enabled", false); // 0862
/* 6009: disable saving passwords ***/
user_pref("signon.rememberSignons", false); // 0901
/* 6010: disable permissions manager from writing to disk ***/
user_pref("permissions.memory_only", true); // 1006
/* 6011: disable favicons in history and bookmarks ***/
   // user_pref("browser.chrome.site_icons", false); // 1031
/* 6012: Disable OCSP (enhance privacy, bites DoH) ***/
user_pref("security.OCSP.enabled", 0); // 1211
/* 6013: disable intermediate certificate caching ***/
user_pref("security.nocertdb", true); // 1222
/* 6014: set behaviour on "+ Tab" button to display container menu on left click ***/
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true); // 1703
/* 6015: disable GMP (Gecko Media Plugins) ***/
user_pref("media.gmp-provider.enabled", false); // 1820
user_pref("media.gmp-manager.url", "");
/* 6015a: limit WebGL ***/
user_pref("webgl.min_capability_mode", true); // 2012
/* 6016: disable website access to clipboard events/content ***/
user_pref("dom.event.clipboardevents.enabled", false); // 2402
/* 6017: disable Ion and baseline JIT ***/
user_pref("javascript.options.ion", false); // 2421
user_pref("javascript.options.baselinejit", false); // 2421
user_pref("javascript.options.jit_trustedprincipals", true); // 2421
/* 6018: disable MathML ***/
user_pref("mathml.disabled", true); // 2609
/* 6019: disable SVG ***/
   // user_pref("svg.disabled", true); // 2610
/* 6020: disable Firefox's built-in PDF reader ***/
user_pref("pdfjs.disabled", true); // 2620
/* 6021: disable "open with" in download dialog ***/
user_pref("browser.download.forbid_open_with", true); // 2654
/* 6022: disable webextension restrictions on certain mozilla domains ***/
user_pref("extensions.webextensions.restrictedDomains", ""); // 2662
/* 6023: set other cookieBehavior ***/
   // user_pref("network.cookie.cookieBehavior", 1); // 2701
/* 6024: make all cookies session-cookies ***/
   // user_pref("network.cookie.lifetimePolicy", 2); // 2703
/* 6025: clear also site settings ***/
user_pref("privacy.clearOnShutdown.siteSettings", true); // 2803
user_pref("privacy.cpd.siteSettings", true); // 2804
/* 6026: stricter FPI restriction ***/
user_pref("privacy.firstparty.isolate.block_post_message", true); // 4002
/* 6027: enable scheme with FPI ***/
   // user_pref("privacy.firstparty.isolate.use_site", true); // 4003


/*** [SECTION 6100]: MORE OVERRIDES ***/
user_pref("_user.js.parrot", "6100 syntax error: the parrot continues");

/* 6101: isolate site permissions by userContext ***/
user_pref("permissions.isolateBy.userContext", true);
/* 6102: enable trackingprotection in all windows ***/
user_pref("privacy.trackingprotection.enabled", true);
/* 6103: block insecure downloads from secure origins ***/
user_pref("dom.block_download_insecure", true);
/* 6104: enforce direct connection */
user_pref("network.proxy.type", 0);
/* 6105: disable pocket ***/
user_pref("extensions.pocket.enabled", false);
/* 6106: disable firefox account and sync ***/
user_pref("identity.fxaccounts.enabled", false);
/* 6107: disable CFR ***/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* 6108: disable reader-view ***/
   // user_pref("reader.parse-on-load.enabled", false);
/* 6109: disable "Report This Extension to Mozilla" ***/
user_pref("extensions.abuseReport.enabled", false);
/* 6110: allow unsigned Extensions
 * [NOTE] offical release and beta builds ignore this pref
 * [WARNING] at your own risk ***/
   // user_pref("xpinstall.signatures.required", false);
/* 6111: accept all WebExtensions permission prompts
 * [WARNING] at your own risk ***/
   // user_pref("extensions.webextPermissionPrompts", false);
   // user_pref("extensions.webextOptionalPermissionPrompts", false);
/* 6112: disable connections when clicking on a uri which FF can not handle
 * [NOTE] This must be applied before the first start off a profile ***/
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
/* 6113: disabled screenshots uploads
 * screenshot uploading is no longer possible, keep as Defense-in-Depth
 * because the pref still exist ***/
user_pref("extensions.screenshots.upload-disabled", true);
/* 6114: treat cookies as "SameSite=Lax" by default if no "SameSite"
 * attribute is specified. ***/
user_pref("network.cookie.sameSite.laxByDefault", true);
/* 6115: cookies with "SameSite=None" attribute require the secure attribute ***/
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
/* 6116: treat cookies from the same domain, but with different schemes
 * as cross-site instead of same-site ***/
user_pref("network.cookie.sameSite.schemeful", true);


/*** [SECTION 6200]: Language ***/
user_pref("_user.js.parrot", "6200 syntax error: the parrot can speak");

/* 6201: set preferred language for displaying web pages ***/
user_pref("intl.accept_languages", "de, en-US, en"); // 0210
/* 6202: do not enforce US English locale ***/
user_pref("javascript.use_us_english_locale", false); // 0211
/* 6203: disable spoof english **prompt** ***/
user_pref("privacy.spoof_english", 1);
/* 6205: IDK if this is still in use, but it exists in firefox' code base ***/
user_pref("browser.search.region", "DE");


/*** [SECTION 6300]: DoH ***/
user_pref("_user.js.parrot", "6300 syntax error: the parrot discovers RC4 and MD5");

/* 6301: enable DoH
 * 0=disabled (dohrollout may override) 2=enabled (with system fallback)
 * 3=enabled (without system fallbakc) 5=disabled ***/
user_pref("network.trr.mode", 3);
/* 6302: set a DoH resolver ***/
user_pref("network.trr.uri", ""); // TODO: Add your DNS here.
user_pref("network.trr.bootstrapAddress", ""); // TODO: Add your DNS here.
/* 6303: enable DoH even if the parental control canary domain is blocked ***/
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
/* 6305: enable Encrypted Client Hello ***/
   // user_pref("network.dns.echconfig.enabled", true);
   // user_pref("network.dns.use_https_rr_as_altsvc", true);
   // EVALUATE: network.dns.echconfig.fallback_to_origin_when_all_failed
   // https://blog.mozilla.org/security/2021/01/07/encrypted-client-hello-the-future-of-esni-in-firefox/


/*** [SECTION 6900]: Resets ***/
user_pref("_user.js.parrot", "6900 syntax error: the parrot is the flying dead");

/* 6901: enable location bar using search ***/
user_pref("keyword.enabled", true); // 0801
/* 6903: enable WebRTC ***/
   // user_pref("media.peerconnection.enabled", true); // 2001
/* 6904: enable WegGL ***/
   // user_pref("webgl.disabled", false); // 2010
   // user_pref("webgl.enable-webgl2", true); // 2010
/* 6905: restrict autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 1); // 2031
/* 6906: allow autoplay of HTML5 media if you interacted with the site ***/
   // user_pref("media.autoplay.blocking_policy", 0); // 2031
/* 6907: allow "Confirm you want to leave" dialog on page close ***/
user_pref("dom.disable_beforeunload", false); // 2405
/* 6908: enable WebAssembly ***/
   // user_pref("javascript.options.wasm", true); // 2422
/* 6909: enable Web Audio API ***/
   // user_pref("dom.webaudio.enabled", true); // 2510
/* 6910: relax lock down of allowed extension directories a bit ***/
user_pref("extensions.enabledScopes", 7); // 2660
/* 6911: disable tracker cookies and site-data ***/
   // user_pref("network.cookie.cookieBehavior", 4); // 2701
/* 6912: do not make thirdparty cookies session only because it can be detected ***/
user_pref("network.cookie.thirdparty.sessionOnly", false); // 2702
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", false); // 2702
/* 6913: Keep cookies on cpd ***/
user_pref("privacy.cpd.cookies", false); // 2804
/* 6914: disable FPI ***/
   // user_pref("privacy.firstparty.isolate", true); // 4001
/* 6915: disable RFP ***/
   // user_pref("privacy.resistFingerprinting", false); // 4501
/* 6916: disable RFP letterboxing ***/
   // user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504
/* 6917: enable chrome animations ***/
user_pref("ui.prefersReducedMotion", 0); // 4520, 4614


/*** [SECTION 7000]: Personal ***/
user_pref("_user.js.parrot", "7000 syntax error: the parrot's plumage");

/* 7001: use "old" crtl+tab behaviour ***/
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
/* 7002: keep open if the last tab is closed ***/
user_pref("browser.tabs.closeWindowWithLastTab", false);
/* 7003: disable tab detaching ***/
user_pref("browser.tabs.allowTabDetach", false);
/* 7004: disable usesless and annoying notification ***/
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
/* 7005: enable userChrome.css and userContent.css support ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* 7006: always have bookmarks in a textual form ***/
user_pref("browser.bookmarks.autoExportHTML", true);
/* 7007: reset to Mozilla Firefox default, changed by RedHat ***/
user_pref("network.negotiate-auth.trusted-uris", "");
/* 7008: change default download dir for my hardened firejail profile ***/
user_pref("browser.download.dir", "~/Downloads/Firefox");
user_pref("browser.download.lastDir", "~/Downloads/Firefox");
/* 7009: expose Firefox Experiments on about:preferences ***/
user_pref("browser.preferences.experimental", true);
/* 7010: enable the new global WebRTC indicator ***/
user_pref("privacy.webrtc.globalMuteToggles", true);
user_pref("privacy.webrtc.legacyGlobalIndicator", false);
/* 7011: devtools customizations ***/
user_pref("devtools.command-button-measure.enabled", true);
user_pref("devtools.command-button-paintflashing.enabled", true);
user_pref("devtools.command-button-rulers.enabled", true);
user_pref("devtools.command-button-screenshot.enabled", true);
user_pref("devtools.dom.enabled", true);
/* 7012: disabled stealing of media keys ***/
user_pref("media.hardwaremediakeys.enabled", false);
/* 7013: save new bookmarks in "Other bookmarks" (old behaviour) ***/
user_pref("browser.bookmarks.defaultLocation", "unfiled");
/* 7014: always show the bookmarks toolbar ***/
user_pref("browser.toolbars.bookmarks.visibility", "always");


user_pref("_user.js.parrot", "SUCCESS: the parrot has finally reached his food");
