Lesson 8
========

**Learning Objectives**
  - Describe purpose, domain, community, and function of metadata and identify categories in each
  - Identify and list the types of information typically included in metadata records
  - Design or identify a standardized process to document data throughout the research endeavor
  - Produce metadata that serves for discovery, re-use, publication, and archival needs

---

**Lesson Plan**
  
*__Class 1__*  

1. Housekeeping (5 minutes)
2. Introduction to Metadata (lecture 20 minutes)
  - quick note at the beginning: 
    - metadata for some is data for others . . . give the geographic metadata example
	- NSA and metadata (phones, apple, etc.)
	- Metadata is not bad, it is just misunderstood
  - what is metadata, where does it fit in the research data lifecycle, what roles does it play
    - purposes (descriptive, structural, administrative)
    - functions (structure, vocabs, record formats, standards, frameworks)
    - domains (things, data, texts, video, photos, sounds, geospatial)
    - who does it serve ( archives, museam, library, onfo industry \[ what about scientists? \])
  - creation processes
  - ** pause **
    - reflect on a good understanding of a description, what it is
  - standard elements in metadata
    - how to structure the elements, schemas
    - introduce dublin core
	- introduce FGDC
  - close with a quick review and go to excercise
3. Card Sorting Excercise (20 minutes)
  - NOTE: bring lots of note cards \[3x5 or bigger\] and a few sharpies to class
  - students get several cards on which they can write their acronyms from the homework
  - have them descibe the acronyms briefly and place them categorically under one or more of the following bins: purpose { Technical, descriptive, preservation, rights, structural }, function { structure, vocabulary, record format, framework, standard }, domain { cultural objects, datasets, geospatial, video, sound, texts, images }, community { archives, museum, library, Information Industry }
  - discuss (based on Riley's poster)
  - acronym awareness (slide, for review)
    - Federal Geographic Data Committee
    - International Standards Organization
    - Data Documentation Initiative (with ICPSR) for social science data
    - exchangeable image file format (mention adobe tools - lightroom, photoshop) (mention mac mdls command line) (exiv2)
    - IPTC - International Press Telecomunications Council (more than just photos)
4. Elliot's guest lecture (20 minutes)

*__Class 2__*  

1. Housekeeping (5 minutes)
  - make sure to ask about the midterm assignment (problems, questions, etc.)
2. Example walkthrough (25 minutes)
  - look at the ecological dataset and two forms of metadata
    - think about two forms of metadata: what purpose they serve, how they funtion, their domain, and who they serve
  - [*http://esapubs.org/archive/instruct_d.htm*](http://esapubs.org/archive/instruct_d.htm)
    - [*http://esapubs.org/archive/ecol/E096/226/metadata.php*](http://esapubs.org/archive/ecol/E096/226/metadata.php)
    - discuss human readable aspect of metadata
    - view source and look at machine readable aspects
  - [*http://dx.doi.org/10.5063/F1HD7SK1*](http://dx.doi.org/10.5063/F1HD7SK1)
    - same discussion here
    - look for kinds of metadata (descriptive, structrual, administrative)
  - search for "Huayhuash Water Quality" and use the DASH repository as a final example
    - highlight moethods description
    - highlight problems with references
  - bring up adobe bridge and show a few of the Nat Geo photos
    - EXIF vs ITPC
    - go to command line and use exiv2 to show the same metadata
3. Introduce more on git (continue software carpentry lesson: 30 minutes until end)
  
---

> Readings (Required)

> Assigned Reading:

-   Riley, “Seeing Standards.”
    [*http://www.dlib.indiana.edu/~jenlrile/metadatamap/*](http://www.dlib.indiana.edu/~jenlrile/metadatamap/).
    Download and study this poster in depth.
-   Willis, Greenberg and White (2012), Analysis and Sythensis of Metadata Goals for Scientific Data. *Journal of the American Society for Information Science and Technology* 63(8): 1505-1520. [http://dx.doi.org/10.1002/asi.22683](DOI: 10.1002/asi.22683).
-   Star, Castro, *et al* (2015)*.* Achieving human and machine
    accessibility of cited data in scholarly publications. *PeerJ
    Computer Science* 1:e1[*https://dx.doi.org/10.7717/peerj-cs.1*](https://dx.doi.org/10.7717/peerj-cs.1).

> Optional Reading:

-   Curdt, Constanze, Dirk Hoffmeister, Guido Waldhoff, Christian Jekel,
    and Georg Bareth. "Scientific Research Data Management for
    Soil-Vegetation-Atmosphere Data—The TR32DB." *International Journal
    of Digital Curation* 7, no. 2 (2012): 68-80.[*http://www.ijdc.net/index.php/ijdc/article/view/220/295*](http://www.ijdc.net/index.php/ijdc/article/view/220/295)
-   \[ for ecology: read the introduction through to 2.3.4 \] KNB
    (no date). “Ecological Metadata Language (EML) Specification.” The
    Knowledge Network,
    [*https://knb.ecoinformatics.org/\#external//emlparser/docs/eml-2.1.1/index.html*](https://knb.ecoinformatics.org/#external//emlparser/docs/eml-2.1.1/index.html).
-   \[ for marine biology \] Neiswender (2010). "Introduction to
    Metadata." In *The MMI Guides: Navigating the World of Marine
    Metadata*.
    [*http://marinemetadata.org/guides/mdataintro*](http://marinemetadata.org/guides/mdataintro).
-   \[ for atmospheric science: read the introduction through 2.6.2 \]
    Eaton, *et al* (2011). NetCDF Climate and Forecast (CF)
    Metadata Conventions.
    [*http://cfconventions.org/Data/cf-conventions/cf-conventions-1.6/build/cf-conventions.pdf*](http://cfconventions.org/Data/cf-conventions/cf-conventions-1.6/build/cf-conventions.pdf).
-   \[ for marine geology: read the introduction through chapter 6 \]
    SEG (2015). SEG Y rev 2 Data Exchange Format.
    [*http://www.seg.org/documents/51956/6062543/SEG-Y+rev+2+Draft+Jan+2015*](http://www.seg.org/documents/51956/6062543/SEG-Y+rev+2+Draft+Jan+2015)
-   \[ for geographic data: read the introduction through page 31 \]
    FGDC (2000). Content Standard for Digital Geospatial Metadata
    Workbook, Version 2.0.
    [*https://www.fgdc.gov/metadata/documents/workbook\_0501\_bmk.pdf*](https://www.fgdc.gov/metadata/documents/workbook_0501_bmk.pdf).
