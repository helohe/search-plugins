#!/bin/bash

AMO=(
	"AMO"
	"Firefox Add-ons"
	"32" "images/x-icon" "https://addons.cdn.mozilla.net/favicon.ico"
	"https://addons.mozilla.org/firefox/search" "q"
	"amo.xml"
)
ARCHWIKI=(
	"ArchWiki"
	"Arch Linux Wiki"
	"16" "images/x-icon" "https://wiki.archlinux.org/favicon.ico"
	"https://wiki.archlinux.org/index.php" "search"
	"archwiki.xml"
)
AUR=(
	"AUR"
	"Arch User Repository"
	"16" "images/x-icon" "https://aur.archlinux.org/images/favicon.ico"
	"https://aur.archlinux.org/packages" "K"
	"aur.xml"
)
CRATES_IO=(
	"crates.io"
	"The Rust community’s crate registry"
	"48" "images/x-icon" "https://crates.io/favicon.ico"
	"https://crates.io/search" "q"
	"crates_io.xml"
)
DDG=(
	"DuckDuckGo JS"
	"Privacy, simplified."
	"32" "image/x-icon" "https://duckduckgo.com/favicon.ico"
	"https://duckduckgo.com/" "q"
	"duckduckgo.xml"
)
DDG_HTML=(
	"DuckDuckGo HTML"
	"Privacy, simplified."
	"32" "image/x-icon" "https://duckduckgo.com/favicon.ico"
	"https://html.duckduckgo.com/html" "q"
	"duckduckgo_html.xml"
)
DDG_LITE=(
	"DuckDuckGo Lite"
	"Privacy, simplified."
	"32" "image/x-icon" "https://duckduckgo.com/favicon.ico"
	"https://lite.duckduckgo.com/lite" "q"
	"duckduckgo_lite.xml"
)
DEB_MAN=(
	"Debian Manpages"
	"Debian Manpages"
	"32" "images/x-icon" "https://manpages.debian.org/favicon.ico"
	"https://dyn.manpages.debian.org/jump" "q"
	"debian_manpages.xml"
)
DEEPL=(
	"DeepL"
	"DeepL Translate"
	"16" "image/png" "https://www.deepl.com/img/favicon/favicon_16.png"
	"https://www.deepl.com/translator#en/de/" ""
	"deepl.xml"
)
DUDEN=(
	"Duden"
	"Duden online suche"
	"32" "image/x-icon" "https://www.duden.de/sites/default/res/D.ico"
	"https://www.duden.de/suchen/dudenonline/" ""
	"duden.xml"
)
ECOSIA=(
	"Ecosia"
	"The search engine that plants trees"
	"64" "image/x-icon" "https://cdn-static.ecosia.org/assets/images/ico/favicon.ico"
	"https://www.ecosia.org/search" "q"
	"ecosia.xml"
)
GITHUB=(
	"GitHub"
	"Search GitHub"
	"32" "image/png" "https://github.githubassets.com/favicons/favicon.png"
	"https://github.com/search" "q"
	"github.xml"
)
LEO=(
	"LEO"
	"Englisch-Deutsch Online Wörterbuch"
	"16" "image/png" "https://dict.leo.org/img/favicons/ende-16-4e48a7c9.png"
	"https://dict.leo.org/englisch-deutsch/" ""
	"leo.xml"
)
LINGUEE=(
	"Linguee"
	"English-German Dictionary"
	"48" "image/x-icon" "https://www.linguee.com/favicon.ico"
	"https://www.linguee.com/english-german/search" "query"
	"linguee.xml"
)
MDN=(
	"MDN"
	"MDN Web Docs"
	"32" "image/png" "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
	"https://developer.mozilla.org/en-US/search" "q"
	"mdn.xml"
)
METAGER=(
	"MetaGer"
	"Privacy Protected Search &amp; Find"
	"64" "image/x-icon" "https://metager.org/favicon.ico"
	"https://metager.org/meta/meta.ger3" "eingabe"
	"metager.xml"
)
MOJEEK=(
	"Mojeek"
	"The alternative search engine that puts the people who use it first"
	"32" "image/png" "https://www.mojeek.com/favicon.png"
	"https://www.mojeek.com/search" "q"
	"mojeek.xml"
)
OALD=(
	"OALD"
	"Oxford Learner's Dictionaries"
	"48" "image/x-icon" "https://www.oxfordlearnersdictionaries.com/external/images/favicon.ico"
	"https://www.oxfordlearnersdictionaries.com/search/american_english/" "q"
	"oald.xml"
)
PKGS=(
	"pkgs.org"
	"Packages Search for Linux and Unix"
	"16" "image/x-icon" "https://assets.pkgs.org/img/favicon.ico"
	"https://pkgs.org/search" "q"
	"pkgs.xml"
)
PYPI=(
	"PyPI"
	"Python Package Index"
	"32" "images/x-icon" "https://pypi.org/static/images/favicon.6a76275d.ico"
	"https://pypi.org/search" "q"
	"pypi.xml"
)
QWANT=(
	"Qwant"
	"The search engine that respects your privacy."
	"16" "image/x-icon" "https://www.qwant.com/favicon.ico"
	"https://www.qwant.com/" "q"
	"qwant.xml"
)
QWANT_LITE=(
	"Qwant Lite"
	"The search engine that respects your privacy."
	"16" "image/x-icon" "https://www.qwant.com/favicon.ico"
	"https://lite.qwant.com/" "q"
	"qwant_lite.xml"
)
RUST=(
	"Rust"
	"The Rust Standard Library"
	"16" "image/png" "https://www.rust-lang.org/static/images/favicon-16x16.png"
	"https://doc.rust-lang.org/stable/std/" "search"
	"rust.xml"
)
SEARCHFOX=(
	"Searchfox"
	"Mozilla code search website"
	"52" "image/png" "https://searchfox.org/static/icons/search.png"
	"https://searchfox.org/mozilla-central/search" "q"
	"searchfox.xml"
)
STARTPAGE=(
	"Startpage"
	"Private Search Engine"
	"16" "image/png" "https://www.startpage.com/sp/cdn/favicons/favicon-16x16--default.png"
	"https://www.startpage.com/sp/search" "query"
	"startpage.xml"
)
WIKIPEDIA=(
	"Wikipedia (DE)"
	"Wikipedia (DE)"
	"16" "image/x-icon" "https://de.wikipedia.org/static/favicon/wikipedia.ico"
	"https://de.wikipedia.org/w/index.php" "search"
	"wikipedia_de.xml"
)

SEARCH_ENGINES=(
	AMO
	ARCHWIKI
	AUR
	CRATES_IO
	DDG
	DDG_HTML
	DDG_LITE
	DEB_MAN
	DEEPL
	DUDEN
	ECOSIA
	GITHUB
	LEO
	LINGUEE
	MDN
	METAGER
	MOJEEK
	OALD
	PKGS
	PYPI
	QWANT
	QWANT_LITE
	RUST
	SEARCHFOX
	STARTPAGE
	WIKIPEDIA
)

cd -P -- "$(readlink -e "$(dirname "$0")")"/..

echo "<!DOCTYPE html><html><head><meta charset=\"utf-8\" />" > index.html

for search_engine in "${SEARCH_ENGINES[@]}"; do
	declare -n se=$search_engine
	short_name="${se[0]}"
	description="${se[1]}"
	icon_size="${se[2]}"
	icon_mime="${se[3]}"
	icon_uri="${se[4]}"
	search_url="${se[5]}"
	search_param="${se[6]}"
	file_name="${se[7]}"
	sed \
		-e "s|@SHORTNAME@|$short_name|" \
		-e "s|@DESCRIPTION@|$description|" \
		-e "s|@ICON-SIZE@|$icon_size|g" \
		-e "s|@ICON-MIME@|$icon_mime|" \
		-e "s|@ICON-URI@|$icon_uri|" \
		-e "s|@SEARCH-URL@|$search_url|" \
		-e "s|@SEARCH-PARAM@|$search_param|" \
		source/opensearch.xml.in > "plugins/$file_name"
	echo "<link rel=\"search\" type=\"application/opensearchdescription+xml\" title=\"$short_name\" href=\"plugins/$file_name\" />" >> index.html
done

echo "</head></html>" >> index.html
