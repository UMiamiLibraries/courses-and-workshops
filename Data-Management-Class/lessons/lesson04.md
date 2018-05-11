Lesson 4
========

**Learning Objectives**
  - Identify major concerns with storage and backup
  - Identify different hardware and online solutions
  - Describe advantages and disadvantages of different strategies

---

**Lesson Plan**
  
*__Class 1__*  

1. Houskeeping (5 minutes)
  - by Wednesday, have their interviewee identified - discuss options
2. Introduction and Methodological Considerations (lecture 15 minutes)
  - really have them think for a momoent on computer failure - compare to loss of wallet or purse
  - have them think through the loss scenarios before showing - see if the get them all
  - backups
    - emphasize periodic snapshots that get erased over and over again, frequent schedule
  - archives
    - emphasize long term - checksum, decay, LOCKSS
  - emphasize: you can't save everything, introduce storage is cheap debate?
  - on the "don't forget" slide use opportunity to talk about file system organization (time and space, file types, structures and formats) and file naming conventions all in the context of the research data lifecycle.
  - on validation: admit that ithis is a hard habit, but important for some . . . think of examples together  . . . do a command line example
  - STOP on the Backup Media Options Slide (picture of the disk and the cloud)
3. share excercise (15 minutes or less)
  - describe to a partner your current backup strategy, partner write it down (3 minutes)
  - switch and do the same (3 minutes)
  - critique parter's and your strategy: identify weaknesses and strengths (2 minutes)
  - share (7 minutes)
4. Backup and storage media options and solutions (lecture 30 minutes)
  - on intro slide (disk and cloud) introduce idea of pros and cons, no magic solution, must be designed for your work flow
  - on magnetic tapes slide amphasize that this is still very common
  - on repositories, suggest they start exploring now (they have an assignment later as well)
    - also note the dulication of: data is accesible and visible
  - versioning - note that we will get into this later and do some hands-on learning with git
  - make sure they know who Richard Stallman is (GNU public license)
  - on the bottom line slide:
    - know that xfat is a disk format, not a file format
    - re-emphasize again, organization, naming, formats
5. End with on campus solutions and a transition to security
6. If there is time and curiosity, introduce command line sync tools

*__Class 2__*  

1. Security and Privacy (lecture 20 minutes)
  - at start emphasize how security and storage are very related
  - two key components (link both to privacy concerns and IP):
    - corruption (very related to storage)
    - access
    - on this slide (#3) again connect to backup and storage strategies. This leads directly to a review of the first session pros and cons for storage strategies
  - security and privacy
    - give context - any policy related interviews or surveys (land managers, conservation employees, park visitors, etc.)
    - PII (personally identifyable information): NOTE that this is a fuzzy line, give examples
      - addresses of people in a known study for AIDS or immigration (is the address PII?)
      - ID theft or worse
    - note that UM optoins are often available at other institutional settings (govt, NGO, etc)
  - general Security Notes
    - anti-intrusion: not anti-virus, but instead atching network traffic on your computer - make note of rougue linux server at UCSC with 1000s of attacks a day - relate to firewall (especially on public networks)
    - ssh: secure shell for command line on remote computer
    - scp: secure copy for transfer of files between two computers
    - sFTP: File Transfer Protocol (Check in on this - who uses?)
    - macs need virus software too
  - for encryption suggest the system tools, but show the command line base
    - the code book has mixed reviews: those that know don't like it, on the other hand it is a good introduction (but you will NOT be an expert)
  - access and passwords
    - find out how many know about VPN - common tool all around
    - note that the long password mantra is new - this tends to change with hackign technologies
2. The Data Storage, Backup, Security Checklist (excercise 15 minutes)
  - Word doc from University of Massachusets: [*http://library.umassmed.edu/necdmc/necdmc\_activity4b.docx*](http://library.umassmed.edu/necdmc/necdmc\_activity4b.docx)
  - take 2-3 minutes to fill it out
  - reflect for 5 minutes and write notes on what you want to change (share if desired)
  - NOTE: in storage and backup the difference between full, incremental, and differential was never introduced. If this does not come up as a question, make sure to introduce the concept (see last slide in the presentation)
3. Introduction to DCP assignment (lecture 15 minutes)
  - review of major course components so far
  - introduction to research includes background on person (previous research, publications etc.)
  - this will not be a true Curation Profile, but instead a critique that synthesizes the first part of the course
  - end with recomendations (the researcher will not see these)
  - go over time frame for assignment

NOTE: there may be extra class time, then again maybe not. If there is, start in on git software carpentry lesson
  
---

> Readings (Required)

  - Backing Up Data (UK Data Archive): [*http://www.data-archive.ac.uk/create-manage/storage/back-up*](http://www.data-archive.ac.uk/create-manage/storage/back-up)
  - Ruggiero and Heckathorn (2012). Data Backup Options. United States Computer Emergency Readiness Team. [*https://www.us-cert.gov/sites/default/files/publications/data\_backup\_options.pdf*](https://www.us-cert.gov/sites/default/files/publications/data_backup_options.pdf).
  - Version Control and Authenticity (UK Data Archive): [*http://www.data-archive.ac.uk/create-manage/format/versions*](http://www.data-archive.ac.uk/create-manage/format/versions)
