Lesson 3
========

**Learning Objectives**
  - Recognize different data types and structures and their related software and/or scripts
  - Categorize data by its stage in the research cycle
  - Identify file formats and their related software and/or scripts for different kinds of media
  - Plan file format practices/choices for both research workflows and for preservation.

---

**Lesson Plan**

*__Class 1__*  

1. Review readings (5 minutes)
  - Kitchin book chapter: "Conceptualizing Data"
  - rest of book is good overview of major issues in the 'data revolution' (not all relevant to data management)
  - the point is: data is not just technology, but a social technical assemblage (mention Bowker)
2. Data Stages/Types (lecture 15 minutes) 
  - many ways to think of data, none is correct but all are useful
  - we are reviewing five ways and then focusing in on Captured Data
3. Pair/Share activity - my data levels/formats (15 minutes)
  - draw their research cycle and attach data types/levels to each stage of the cycle (5 minutes)
  - share this with your neighbor (2 minutes)
  - share out good/bad/problems to class (5 minutes)
4. Introduce File Formats 
  - as a way of storing/encoding the different data types and levels
  - too much to possibly know them all
  - introduce readings as a way to seek preferred formats for their work

*__Class 2__*  

1. Check in on
  - any questions, requests or observations
  - drawing of their research data lifecycle
2. Review readings (5 minutes)
    - emphasize that always a work in progress
    - best format ?! PAPER !??!
3. Review recomended formats (lecture 15 minutes) 
  - proprietary/open
    - note jpeg (joint photographic experts group) long and recent (up to 2013) patent battle
    - note odt and odf formats (Apache Open Office - originally from Sun Microsystems [also java, now Oracle]) if only more people would use . . .
  - lossy/lossless
  - indexable?
    - character encodings (utf-8, utf-16)
  - conversions from one format to another (from the UK data archive)
    - often problematic and lossy 
      - use the example of excel to csv
      - use the example of stat files to csv
  - quickly go over the 'Some Things to Remember'
    - ask about bits and bytes on text encoding slide - if they don't know give a quick introduction - return to this on color slides below
    - ask about bitmap vs vector images
    - they do not need to remember all of this, but the history and association of the acronyms IS useful
4. Quick share (5 minutes)
    - have them do a one minute brainstorm on expected formats in their work - share out
5. Text Based Formats Live Coding Excercise (25 minutes)
  - turn on visible extensions on all computers!!
  - Introduce text editors
    - various platforms
    - problems with text on different platforms (CR and LF)
  - Introduce various data structures and their text formats
    - tables: CSV, TXT, etc
      - open the listaEspecias.csv in excel, note that it is a "flat file"
      - then in the text editor
      - note the comma problem, remove with find and replace
      - open again in excel
    - trees: XML, JSON, etc - excercise on deconstructing HTML and JSON
      - have them open the someColors.html in both a text editor and a web browser
      - work in pairs to draw the "tree" structure and identify elements
      - open the twoDatasets.xml file, note the flatter "tree" structure
        - give link to Dublin Core
	- follow links to DTD and the schema - open in the text editor
	- note the links for the dc:rights and dc:identifier
      - search for "XML to JSON" in a web browser, cut and paste the twoDatasets.xml file into the web based tool
        - compare XML and JSON: file size, ease of reading (machine and human), note javascript (like JSON), css, html (like xml) combo
        - note to XSL (extensible stylesheet language) and XSLT (XSL transformations)
    - introduce W3C
      - governing body of world wide web
      - introduce w3schools.com - great reference
  - Final note - you find an unknown file format - OPEN IT IN A TEXT EDITOR TO SEE WHAT IT IS
    - get the svg file and open it in a broswer and then in the text editor
6. Image Formats (lecure 10 minutes)
  - a little on color theory for computers
    - remember, each pixel is stored as either three or four color numbers (size difference)
    - you can count to 0-255 with eight bits (one byte)
    - hexidecimal is easier to read than bits
  - a little on resolution
    - "highest resolution possible" LOC
    - go over the relation between file size and resolution-compression-color.model
  - one minute exercise - draw a graph of resolution and file size, compression and file size, resolution and image quality, compression and iamge quality
7. introduce next weeks readings (5 minutes)
  - talk for a moment about the software carpentry excercise
  - homework, install git bash on your computer

---

> Readings (Required)

  - Kitchin, R (2014). ÎéÎíConceptualizing DataÎéÎí in Kitchin, R *The Data Revolution.* Washington DC: Sage. [*http://uk.sagepub.com/sites/default/files/upm-binaries/63923\_Kitchin\_CH1.pdf*](http://uk.sagepub.com/sites/default/files/upm-binaries/63923_Kitchin_CH1.pdf)
  - UK Data Archive (2015). Create and Manage Data: formatting Your Data: File Formats and Software. [*http://www.data-archive.ac.uk/create-manage/format/formats*](http://www.data-archive.ac.uk/create-manage/format/formats). (follow "Recommended File Formats" link as well).
  - Library of Congress (2015). Recommended Formats Statement 2015-2016. [*https://www.loc.gov/preservation/resources/rfs/RFS%202015-2016.pdf*](https://www.loc.gov/preservation/resources/rfs/RFS%202015-2016.pdf).
