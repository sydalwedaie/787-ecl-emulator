---
---
const nc = [{% for item in site.data.index["nc"] %}
	"{{item.link}}",{% endfor %}
]
const nnc = [{% for page in site.pages %}{% if page.path contains 'nnc' %}
	"/{{ page.path }}",{% endif %}{% endfor %}
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

const content_images = [{% for file in site.static_files %}{% if file.path contains 'images/content' %}
	"{{ file.path }}",{% endif %}{% endfor %}
]

const scripts = [{% for file in site.static_files %}{% if file.path contains 'assets/js' %}
	"{{ file.path }}",{% endif %}{% endfor %}
]

const other = [
	"/nc/index.html",
	"/assets/css/style.css",
	"/404.html",
	"/offline.html",
	"/"
]


const all_assets = [...nnc, ...nc, ...checklist_content, ...info, ...fonts, ...content_images, ...scripts,  ...other]

var cacheName = "ecl-cache-013"
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
		}).catch(() => caches.match('/offline.html'))
	);
});