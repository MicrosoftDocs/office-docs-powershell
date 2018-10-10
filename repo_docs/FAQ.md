# Frequently Asked Questions

## What are best practices for content on GitHub?
It is best practice to keep each sentence or idea on its own line.
This is so that anyone that is reviewing a commit can quickly and easily see what changed.
If you have a giant string of text on a single line then Git just flags that entire line as a 'change'.
To learn more about this concept, see http://rhodesmill.org/brandon/2012/one-sentence-per-line/. 

## When will my content go live?

When you submit a Pull Request it goes through a validation check and the results are shown on the Pull Request page in GitHub.
Once the checks are completed, and there are no errors or warnings, and the appropriate sign off has been completed by the product team, a GitHub maintainer will merged the Pull Request into the Master branch on GitHub.

A site located at review.docs.microsoft.com shows a mirror of the docs.microsoft.com and pulls from the Master branch.
Unfortunately the review site requires a Microsoft login at this time.
This review site provides an opportunity for Microsoft product teams, support, and other internal stakeholders to review any changes before they are pushed to the live site.

The next step is for a GitHub maintainer to merge the Master branch into the Live branch. 
Once this is complete the changes in the Pull Request will show up on docs.microsoft.com (docs.microsoft.com pulls its content from the Live branch).
There is not a set schedule for this to happen but the maintainers are good about doing this fairly quickly.

## When does the GitHub content show up in the products with Get-Help?

The one source of truth for Office PowerShell cmdlets is the GitHub repository. 
When a product team ships an update or new version they can use the PlatyPS tool to generate XML and add that to the release.

The XML contains the latest version of the reference content on GitHub.
Ideally the Online versions will always have the latest content from GitHub and the On Premises products will always have the latest help with Update-Help. 
The work to make this happen is not yet done so the content is only refreshed on product team releases. 

NOTE: For now (3/1/2018) the XML is being placed in skype/update-help.
This help is generated from the New-ExternalHelp command that is part of PlatyPS.
The 2019 release is working towards pulling help from here with Update-Help.
Stay tuned.

## What metadata do reference topics need to have?

Every cmdlet reference topic needs at least the following in the metadata field at the top of the reference article:

```
external help file: 
applicable: Skype for Business Server 2015
title: Add-CsSlaDelegates
schema: 2.0.0
```
The *external help file* tag is for the docs.microsoft.com infrastructure. 
It can be empty but without it the build will fail.

The *applicable* tag is so that when PlatyPS is run to generate the XML that goes in the product it can only pull help content for specific product versions.
Every applicable tag is located in the [Applicable Tags](https://github.com/MicrosoftDocs/office-docs-powershell/wiki/Applicable-Tags) wiki page.
These tags have to be added to the docs.microsoft.com infrastructure. 
If you try to include a tag that has not been added then the build will fail.

The *title* tag is for metrics. More information about metrics coming.

The *schema* tag let's the build system know what schema to use. 
The 2.0.0 is the only supported schema currently.
The schema can be viewed on the PlatyPS site, see https://github.com/PowerShell/platyPS/blob/master/platyPS.schema.md. 

There is also metadata at the global level for the folder. 
This metadata is contained in the docfx.json file of the folder. 
For example, SharePoint is here: https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/sharepoint/docfx.json

## What is the special Table of Contents (TOC) file all about?

Every folder has a special file that is a table of contents for all the files in the folder.

Some examples are:
* Teams: https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/teams/teams-ps/teams/teams.md
* Skype: https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/skype.md
* SharePoint Server: https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/sharepoint/sharepoint-ps/sharepoint-server/sharepoint-server.md

Every folder must have this TOC file.
When you browse the list of cmdlets in the Reference folder this is the file you see.
For example, https://docs.microsoft.com/en-us/powershell/module/skype/?view=skype-ps.
Note that docs.microsoft.com automatically strips out the note about manually entering a description.
It ONLY strips this out if it is in the exact format given. 
Any slight deviation from the format and it won't strip it out and you will see that "manually enter description" text.

## I can't find the cmdlet I am looking for, what can I do?

Finding a cmdlet can sometimes be a challenge. 
This is because you might need to use cmdlets that are in various modules and across multiple products.
For example, you might need a Windows cmdlet, then an Azure cmdlet, then a SharePoint cmdlet, then an Office 365 cmdlet.

The best way to find cmdlets is to use the PowerShell Browser and search. 
The PowerShell Browser searches across all products and platforms.
You can find the PowerShell Browser here: https://docs.microsoft.com/powershell/module

## I am a Microsoft employee but new to GitHub, what should I do?

You can learn about working with GitHub as a Microsoft employee here: https://docs.opensource.microsoft.com/github/

In a nutshell you need to create a GitHub account and link it with your Microsoft account so you can contribute openly.

## I made a change and need to get the Pull Request merged ASAP, what can I do?

When you submit a Pull Request an email is generated by GitHub and sent to the repository maintainers.

They try to get to these every day and verify and merge Pull Requests.

If it is an emergency you can look through the merge history and see who has worked on and merged a recent version and contact them directly.

If you are a Microsoft employee you can email the distribution group which includes the maintainers of the repository.
The distribution group is Office Docs PowerShell Maintainers (od-powershell).

## Git is getting on my nerves, do you have any advice?

One of the most confusing things with Git and GitHub is that there are many, many ways to do things.

You can use the command line with a cmd prompt or you can use a command line with git bash or you can use a GUI like GitHub Desktop https://desktop.github.com/.

If you are working with the command line using Git Bash, this will help:
https://www.codeproject.com/Articles/457305/Basic-Git-Command-Line-Reference-for-Windows-Users

Also check out Git Kraken https://www.gitkraken.com/ which has a great user interface and visualizations.

## Why are all the cmdlets for a given product in a single folder in the repo? Wouldn't it be better to put them in buckets?
GitHub is the single source of truth for Office PowerShell cmdlet reference. 
There is a single reference article per cmdlet.
There is a folder for each major product area in order to create a basic structure but this isn't require for the system to work.
Each article is tagged with appropriate metadata for versioning.
Keeping things as simple as possible has a number of benefits.
For more about the design of the system, see the FAQ item *"Why is this open source project designed the way it is?"*.


## Why is this open source project designed the way it is?
The system was designed to be as simple as possible in order to achieve three primary objectives.

1. Increase community engagement.

    There are many open source projects and every one of them is striving for community involvement.
    We designed the PowerShell reference project to be easily understood in order to increase community ownership and contributions.
    If a person comes to a project and they cannot understand what they can do in 20-30 seconds then they are likely to bounce on to something else. 
    The open source PowerShell reference project was designed to break down the barriers to understanding and so someone can ‘flow’ directly into contributions once they have discovered the project.
    A vibrant and active community results in the best reference content that goes directly back into PowerShell Get-Help.
    
1. Central location for content that feeds multiple surfacing mechanisms.

    The first two places the PowerShell reference content is surfaces is Get-Help in PowerShell itself and the docs.microsoft.com website.
    In the future the content can also be surfaced in an iOS app, Android app, Windows Universal app, and other mechanisms. 
    With a simple, centralized, system for the source of truth, in GitHub, it becomes much easier to surface content using multiple mechanisms since GitHub is not tailored for once specific location, such as Get-Help. 
    If the GitHub repo focused on one specific site or mechanism then surfacing from other mechansisms could become too complex or could exponentially expound the effort required.

1. Keep content fresh and up to date.

    The system uses a single [PlatyPS](https://github.com/PowerShell/platyPS) command to generate the XML file that goes into the product so that Get-Help shows the current reference content.
    The system was designed so that the process can be automated, perhaps with a GitHub webhook that triggers on any merge.
    The idea is that in the past the Get-Help content was immediately outdated once a product shipped.
    With the new system the content in Get-Help will always be up-to-date by running an Update-Help, or equivalent, command in PowerSHell.


