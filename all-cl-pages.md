---
---
{% for index in site.data.nnc-index %}
{% assign short-name = index.short-name %}
{% for item in site.data.index[short-name] %}
    "{{item.link}}",
{% endfor %}
{% endfor %}