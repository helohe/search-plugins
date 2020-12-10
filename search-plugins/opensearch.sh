#!/bin/bash

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
METAGER=(
	"MetaGer"
	"Privacy Protected Search &amp; Find"
	"64" "image/x-icon" "https://metager.org/favicon.ico"
	"https://metager.org/meta/meta.ger3" "eingabe"
	"metager.xml"
)
RUST=(
	"Rust"
	"The Rust Standard Library"
	"16" "image/png" "https://www.rust-lang.org/static/images/favicon-16x16.png"
	"https://doc.rust-lang.org/stable/std/" "search"
	"rust.xml"
)
MDN=(
	"MDN"
	"MDN Web Docs"
	"32" "image/png" "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
	"https://developer.mozilla.org/en-US/search" "q"
	"mdn.xml"
)
DEB_MAN=(
	"Debian Manpages"
	"Debian Manpages"
	"32" "images/x-icon" "https://manpages.debian.org/favicon.ico"
	"https://dyn.manpages.debian.org/jump" "q"
	"debian_manpages.xml"
)
WIKIPEDIA=(
	"Wikipedia (de)"
	"Wikipedia (de)"
	"16" "image/x-icon" "https://de.wikipedia.org/static/favicon/wikipedia.ico"
	"https://de.wikipedia.org/w/index.php" "search"
	"wikipedia_de.xml"
)

SEARCH_ENGINES=(QWANT QWANT_LITE DDG DDG_HTML DDG_LITE METAGER RUST MDN DEB_MAN WIKIPEDIA)

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
		opensearch.xml.in > "$file_name"
	echo "<link rel=\"search\" type=\"application/opensearchdescription+xml\" title=\"$short_name\" href=\"$file_name\" />" >> index.html
done

echo "</head></html>" >> index.html
