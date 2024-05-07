# Dairy Digital Signage

This project is a web-based slideshow system, built using Jekyll and running on GitHub Pages.

## Making Changes

You can access the website at [aydenthekinch.git.io](https://aydenthekinch.github.io). To make changes, you need permission to edit this repository. You can navigate to a file and edit it directly from GitHub browser. After every change, you must "Commit changes" before they can take effect.

* To add a file, drag and drop it into the file explorer.
* To delete a file, select it and click the three dots in the upper right corner. Then click delete file. 

GitHub Pages can only publish repositories that are smaller than 1GB. Most 1920x1080 images are 0.5 to 1 MB while GIFs and videos are substantially larger. 

This repository should not be your only storage for certain media files. You can always delete older slideshows to make space.

## Settings.yml

To edit the slide interval or folders accessed by a specefic slideshow, navigate to the _data folder and open the settings.yml file. Here you will see a collection of all the active slideshows.

![settings example](/assets/images/settings_example.png)

Here you can see multiple settings, Name, Update, Folder, and URL. Each will be explained in more detail below. 

### Name
This is what is displayed in the header of the landing page.

![header example](/assets/images/name_header_example.png)

### Update
This changes the length of time each slide is shown before updating. The time is in seconds, so 300 is 5 minutes and 3600 is 1 hour.

### Folder
This is the name of the subfolder in "slideshows" that contains the images to be displayed. You can list multiple folders and the view will cycle through all the photos in each of them.

### URL
This is the path from the root to the file associated with each view. You shouldn't have to change this unless you're changing the structure of the site.

## Adding Slides

In order to add slides to a slide show, you can:
* add images to an existing folder
* make a new folder and put it in 'slideshows'.

You can edit the Folder list in setting.yml for each slideshow to cycle through the images of one or more folders. 

It's recommended to use images with a resolution of at least 1920x1080 and an aspect ratio around 16:9 to preserve the best quality when displayed on the TV's set up in the UBC Dairy Farm. 

The TV's browser can render .png, .jpg, .webp, .gif, .apng, .pdf, .ico, and .bmp files. 

### Ordering Slides

Slides are automatically organized alphanumerically in the slideshow folders. If you want to change the ordering, you should add 1a, 1b, 1c... 2a, 2b ... etc. to the front of each file name. If a view is given multiple folders to pull from, it will show all slides in the first folder first and then show all the slides in the second folder before looping. 

### Adding Views

To add a new view (and a new slideshow), you need to create a new key in settings.yml and a new page. The new key should have all the setttings listed above.
The new page only needs to have YAML front matter that includes
- layout: slideshow_image
- screen: (name of the new key in setting.yml)
