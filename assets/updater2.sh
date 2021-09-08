#!/bin/bash

# Firefox Config - Config for a hardened, secure, privacy friendly firefox.
#
# Written in 2021 by rusty-snake
#
# To the extent possible under law, the author(s) have dedicated all copyright and
# related and neighboring rights to this software to the public domain worldwide.
# This software is distributed without any warranty.
#
# You should have received a copy of the CC0 Public Domain Dedication along with
# this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

set -euo pipefail

trap "echo 'An error occurred'" EXIT

cd -P -- "$(readlink -e "$(dirname "$0")")"

# Create a backup of the current user.js if it exists
if [[ -e user.js ]]; then
	mkdir -p userjs_backups
	cp user.js userjs_backups/"$(date --utc --iso-8601=seconds)"_user.js
fi

sed_commands=()
while read -r pref; do
	if [[ ! $pref =~ ^[A-Za-z0-9._-]*$ ]]; then
		echo "Pref contains disallowed chars ('$pref'), skipping."
		continue
	fi

	# sed command: Apply command "s:^   // ::" (i.e. remove "   // " at the
	# begin) for lines matching "   // user_pref("${pref}", "
	# Pattern substitution: Escape all dots to match them literally
	sed_commands+=("-e \\:   // user_pref\(\"${pref//./\\.}\", :s:^   // ::")
# sed: Remove comments and empty lines
done < <(sed -E "\\:^[[:space:]]*(//|$):d" "user.js_prefs_to_uncomment.txt")

ARKENFOX_USERJS="https://raw.githubusercontent.com/arkenfox/user.js/master/user.js"
wget -qO- "$ARKENFOX_USERJS" | sed --sandbox -E "${sed_commands[@]}" > user.js

cat user-overrides.js >> user.js

echo "Success"

trap - EXIT
exit 0
