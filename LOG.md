
 - Install firefox
 - Edit policies.json (Remove unwanted Extensions)
 - Add policies.json to firefox (`$XDG_RUNTIME_DIR/firefox/policies.json` or `/usr/lib64/firefox/distribution/policies.json`).
 - Create a new firefox profile
   - Start firefox with `--ProfileManager` and create a profile
 - Setup the user.js
   - Go to the new firefox-profile
   - Add the arkenfox user.js [`updater2.sh`] script
   - Make `updater2.sh` executable if necessary.
   - Add your `user-overrides.js` and `user.js_prefs_to_uncomment.txt`
   - Run `./updater2.sh`
 - Start firefox with the new profile
 - FIXME: LangPack
 - Configure Extensions
   - uBlock origin
     - Settings:
       - {OFF} Make use of context menu where appropriate
       - {ON} I am an advanced user
       - {ON} Block remote fonts
     - Filter lists:
       - Use all filterlists except those loaded via http or not for your region
     - My filters: [uBlockOrigin:My_filters.txt]
     - My rules: [uBlockOrigin:My_rules.txt]
   - Temporary Containers
     - {ON} General > Automatic Mode
     - General > Delete no longer needed Temporary Containers: 5 minutes
     - General > Toolbar Icon Color: black (simple)
     - Isolation > Global > Navigation > Different from Tab Domain & Subdomain
     - Advanced > General > Popup > Default Tab: Isolation Per Domain
     - {ON} Advanced > Popup > Show icon in the address bar that reveals the popup
     - Advanced > General > Ignoring requests to: _EMPTY_
     - TODO: Advanced > General > Keyboard shortcuts 
     - {ON} Statistics > Collect local statistics about Temporary Containers
   - ClearURLs
     - {OFF} Allow domain blocking
     - {OFF} Display context menu entry
     - {OFF} Filters ETag headers from requests
   - Request Control
     - Disable/Remove all rules
     - Import [request-control-rules.json]
   - KeePassXC-Browser
     - Filling credentials:
       - {OFF} Automatically retrieve credentials.
       - {OFF} Activate autocomplete for username fields.
       - {ON} Auto-submit login forms
     - {OFF} Saving credentials > Show a banner on the page when new credentials can be saved to the database.
     - Updates > Check for updates of KeePassXC: never
   - Any other Add-Ons you want like LocalCDN, Privacy-Oriented Origin Policy, True Sight, NoScript, CSS Exfil Protection, CanvasBlocker or HTTPS Everywhere.
 - Allow uBlock origin in PBM
 - Delete default-containers and create your own.
 - Remove policies.json
 - Add search-engines, see [search-plugins/README.md]
 - Import Bookmarks

[`updater2.sh`]: assets/updater2.sh
[uBlockOrigin:My_filters.txt]: assets/uBlockOrigin:My_filters.txt
[uBlockOrigin:My_rules.txt]: assets/uBlockOrigin:My_rules.txt
[request-control-rules.json]: assets/request-control-rules.json
[search-plugins/README.md]: search-plugins/README.md
