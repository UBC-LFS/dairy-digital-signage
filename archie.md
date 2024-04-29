---
title: Archie
layout: slideshow
---

<div class="slideshow-container">
{% assign image_files = site.static_files %}
{% for file in image_files %}
{% if file.path contains 'archie/' %}
    <div class="mySlides fade">
        <img src="{{ file.path }}">
    </div>
{% endif %}
{% endfor %}
</div>