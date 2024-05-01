# Dairy Digital Signage

This project is a web-based slideshow system, built using Jekyll and running on GitHub Pages.

## Making Changes

You can access the website at aydenthekinch.git.io. To make changes, you need permission to edit this repository. You can navigate to a file and edit it directly from GitHub browser. After every change, you must "Commit changes" before they can take effect.

To add a file, drag and drop it into the file explorer. To delete a file, select it and click the three dots in the upper right corner. Then click delete file. 

## Settings.yml

First, navigate to the _data folder and open the settings.yml file. Here you will see a dictionary of all the active slideshows.

![settings example](/assets/images/settings_example.png){:class="img-responsive"}

Editing this file can change several elements of the slideshow.

The settings.yml is a dictionary of views paired to a list of settings.

### Name
This is what is displayed in the header of the landing page. This is primarily for organizational use.

![header example](/assets/images/name_header_example.png){:class="img-responsive"}

### Update
This changes the length of time each slide is shown before updating. The time is in seconds, so 300 is 5 minutes and 3600 is 1 hour.

### Folder
This is the name of the subfolder in "slideshows" that contains the images to be displayed. You can have multiple subfolders, but the screen will only display the images of one at a time. 

### URL
This is the path from the root to the file associated with each view. You shouldn't have to change this unless you're changing the structure of the site.

## Adding Slides

In order to add slides to a slide show, you can either add images to an existing folder or make a new folder and put it in 'slideshows'. You can edit setting.yml for each view to use one or more folders. 

### Adding Views

To add a new view (and a new slideshow), you need to create a new key in settings.yml and a new page. The new key should have all the setttings listed above.
The new page only needs to have YAML front matter that includes
- layout: slideshow_image
- screen: (name of new key in dictionary)
