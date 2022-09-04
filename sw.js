---
---
const nnc = [{% for page in site.pages %}{% if page.path contains 'nnc' %}
	"/{{ page.path }}",{% endif %}{% endfor %}
]

const nc = [{% for item in site.data.index["nc"] %}
	"{{item.link}}",{% endfor %}
]

const checklist_content = [{% for image in site.static_files %}{% if image.path contains 'assets/checklist-content' %}
	"{{ image.path }}",{% endif %}{% endfor %}
]

const info = [{% for page in site.pages %}{% if page.path contains 'info' %}
	"/{{ page.path }}",{% endif %}{% endfor %}
]

const fonts = [{% for file in site.static_files %}{% if file.path contains 'fonts' %}
	"{{ file.path }}",{% endif %}{% endfor %}
]

const other = [
	"/assets/css/style.css",
	"/assets/images/checklist-end.png",
	"/assets/images/bisb-iban-qr-code.jpeg",
	"/assets/js/clipboard.min.js",
	"/assets/js/script.js",
	"/404.html",
	"/"
]


const all_assets = [...nnc, ...nc, ...checklist_content, ...info, ...fonts, ...other]

var cacheName = "ecl-cache-002"
self.addEventListener('install', function (event) {

	event.waitUntil((async () => {
	    const cache = await caches.open(cacheName);
	    await cache.addAll(all_assets);
	})());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      return caches.delete(key);
    }))
  }));
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		// Try the cache
		caches.match(event.request).then(function (response) {
			// return it if there is a response,or else fetch again
			return response || fetch(event.request);
		})
	);
});