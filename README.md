# Dairy Digital Signage

This project is a web-based slideshow system, built using Jekyll and running on GitHub Pages.

# Making Changes

## Settings.yml

First, navigate to the _data folder and open the settings.yml file. Here you will see a dictionary of all the active slideshows.

Editing this file can change several elements of the slideshow.

The settings.yml is a dictionary of views paired to a list of elements for each of them.

### Name
This is what is displayed in the header of the landing page. This is primairly for organizational use.

### Update
This changes the length of time each slide is shown before updating. The time is in seconds, so 300 is 5 minutes and 3600 is 1 hour.

### Folder
This is the name of the subfolder in "slideshows" that contains the images to be displayed. You can have multiple subfolders, but the screen will only display the images of one at a time. 

### URL
This is the path from the root to the file associated with each view. You shouldn't have to change this unless you're changing the structure of the site.

## Adding Slides

In order to add slides to a slide show, you can either add images to an existing folder or make a new folder and put it in 'slideshows'. Make sure you edit settings.yml so that a view is using the right folder!

### Adding Views

To add a new view (and a new slideshow), you need to create a new key in settings.yml and a new page. The new key should have all the setttings listed above.
The new page only need to have YAML front matter that includes
- layout: slideshow_image
- screen: (name of new key in dictionary)
