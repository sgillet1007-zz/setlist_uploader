# The Constant Tourists Setlist Uploader

React/Redux app for uploading a csv file containing a list of songs to a drag and drop interface for building and arranging a setlist.  Accordion songs, which involve an instrument switch, are highlighted on the drag and drop interface.

Input .csv file should have three column headers:
* 'id' (unique id)
* 'title' (song title)
* 'accordion' (boolean, truthy if the song has accordion)