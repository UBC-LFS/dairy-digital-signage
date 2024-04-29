---
title: Bartholomew
layout: slideshow
---
{%- assign slideshow_folder = site.data.settings.bartholomew.folder -%}
<div class="slideshow-container">
{%- assign image_files = site.static_files -%}
{%- for file in image_files -%}
    {%- if file.path contains slideshow_folder -%}
        <div class="mySlides fade">
            <img src="{{ file.path }}" alt="Slideshow image">
        </div>
    {%- endif -%}
{%- endfor -%}
</div>