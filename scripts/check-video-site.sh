#!/usr/bin/env bash
# Fails if a publish can ship the pre-video site or drop a cache lock.
set -euo pipefail
root=$(cd "$(dirname "$0")/.." && pwd)
cd "$root"

python3 -c 'import json; json.load(open("vercel.json")); json.load(open("version.json"))'
build=$(python3 -c 'import json; print(json.load(open("version.json"))["build"])')
site=$(python3 -c 'import json; print(json.load(open("version.json"))["site"])')
test "$site" = "video"

fail=0
need() {
  if ! grep -q -F "$2" "$1"; then
    echo "missing in $1: $2" >&2
    fail=1
  fi
}

need sw.js "$build"
need sw.js "skipWaiting"
need sw.js "caches.delete"
need sw.js "no-store"
need js/app.js "$build"
need js/app.js "serviceWorker"
need js/app.js "location.replace"
need js/app.js "pageshow"
need vercel.json "no-store"
need vercel.json "Vercel-CDN-Cache-Control"
need vercel.json "X-Silent-Actions-Site"
need vercel.json "sa_build=$build"
need .github/workflows/video-site.yml "check-video-site.sh"

pages="index.html shop.html product.html mind.html story.html cart.html size-guide.html"
for page in $pages; do
  need "$page" "data-site=\"video\""
  need "$page" "data-build=\"$build\""
  need "$page" "no-store, no-cache"
  need "$page" "css/styles.css?v=$build"
  need "$page" "js/app.js?v=$build"
  need "$page" "og:image"
  need "$page" "/version.json"
done

need index.html "<video"
need index.html "videos/gym-floor.mp4?v=$build"
need index.html "og:video"
need mind.html "og:video"
need story.html "og:video"

if grep -q "Silent Actions — Be better Do better" index.html; then
  echo "old homepage title is back in index.html" >&2
  fail=1
fi

exit "$fail"
