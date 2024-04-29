---
layout: slideshow
---
<div class="slideshow-container">
{% assign image_files = site.static_files %}
{% for file in image_files %}
    {% if file.path contains page.slideshow_folder %}
        <div class="mySlides fade">
            <img src="{{ file.path }}" alt="Slideshow image">
        </div>
    {% endif %}
{% endfor %}
</div>