---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Introduction
---
![signage-introduction](/assets/images/signage_dairy_intro.jpg){:class="img-responsive"}

Hello! Welcome to the Dairy Digital Signage website. Here you can upload images and display them as automatic slideshows. It's built using GitHub Pages, so in order to update the slides you must have access to the repository.

The website currently supports two active slideshows, but this number can be easily upscaled. Go to the GitHub page's README to learn more!

## Navigation

To open a slideshow, click on its name in this page's header. Each slideshow can have its own images, name, and time between slides. 

To access the GitHub repository, click on the GitHub (Admin) link.

Here is a list of current slideshows (these cards will automatically update after editing the settings.yml file).

<ul style="list-style-type: none; padding: 0;">
{% for view in site.data.settings %}
    <li style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
        <strong>Name:</strong> {{ view[1].name }}
        <br>
        <strong>Update Interval:</strong> {{ view[1].update }} seconds
        <br>
        <strong>Image Folders:</strong>
        <span style="display: inline-block; padding: 3px; background-color: #f0f0f0; border-radius: 3px;">
            {% for folder in view[1].folders %}
                {{ folder }}
                {% if forloop.last == false %}, {% endif %}
            {% endfor %}
        </span>
    </li>
{% endfor %}
</ul>

## Making Changes

If you want to update the website, head to the <a class="page-link" href="https://github.com/AydenTheKinch/aydenthekinch.github.io">GitHub repository</a> and take a look at the README. 




