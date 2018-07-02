# The Constant Toursist Setlist Uploader

React/Redux app for uploading a csv file containing a list of songs to a Drag and Drop interface for aranging a setlist.  Since TCT accordion songs involve an instrument switch, those songs are highlighted on the drag and drop interaface.

Input .csv file should have three column headers:
* 'id' (unique id)
* 'title' (song title)
* 'accordion' (boolean, truthy if Cass plays accordion on the song)