# 787 ECL Emulator

## What is this?

This is a 787 ECL emulator. It is a cross platform application available on iOS and Android. The content of the checklists is based on the paper QRH of one specific airline. It is not meant to replicate the functionality of the aircraft-installed ECL; It is not interactive. Not for official nor training use.

## Why did you make this app?

A dear colleague of mine told me he wanted to have the ECL on his phone. I told him I'll make it for you!

## How did you make it?

My goal was to write one code base and have the app available on every device. I chose the PWA technique. PWAs, or Progressive Web Apps, are essentially simple websites with some clever code that make them installable. This app has litterally 450+ HTML webpages for all the checklists and accessories. That is why installation takes a bit of time to downlaod about 23 megabytes of data.

I used a Static Site Generator called Jekyll to build all these web pages. Basically, I wrote a template that scans a data folder to automatically generate the pages with every bit of information in its correct spot. This was the clever part.

The difficult bit was the time consuming task of converting the paper QRH to a format I could use inside these web pages. I made a little script that would take the paper QRH, convet the pages to individual images and invert their colors to make them somewhat similar to the real ECL. Then, I manaully cropped every page and assigned them to their correct pages inside the app.

All the assets, from the icons to the splash screens and everything in between are home made too!

## Why didn't you make it like the reall ECL?

Short answer: Because it was way too complicated and I didn't have the required coding skills to do so!

However, I believe the paper QRH is much better in terms of presenation and as a study tool. The ECL is very good in being efficient and getting the job done with little to no confusion. Many steps get automatically skipped based on phase of flight or configuration. In my opinion, this makes it a bit confusing to understand the logic behind and to follow the flow of events.

## Did you find anything interesting?

Absolutely! Through months of deliberate tinkering with the QRH and ECL pape by page, I found out the following:

Depending on airline configuration, some checklists are only available in the paper QRH. For my airline, Bomb on Board and Lithium Battery Fire are such examples.

There is a RADIO ALTIMETER L+R, but no L or R only. Instead, we have SGL SOURCE RADIO ALTIMETER.

Engine turbine damage checklist is not under the Damage sub-category, though the term damage is litterally in the title!

The unannunciated checklists accessed from the Unannunciated menu are the exact same checklists accessed from their respective systems, except for Tail Strike. There are seperate annunciated and unannunciated versions, but they only differ in the title (capitalized vs. uncapitalized) and the condition.

## Who are you?

I'm Sayed Ali. Airline first officer and I like tinkering with technology :)
