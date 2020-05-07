---
title: Intro to SharePoint Online Management Shell
---

# Intro to SharePoint Online Management Shell

The SharePoint Online Management Shell is a Windows PowerShell module that you can use to manage SharePoint settings at the organization level and site collection level. Command-line operations in Windows PowerShell are composed of a series of commands. Each command uses a cmdlet and a set of settings known as parameters. For example, you use the **New-SPOSite** cmdlet to create a new site collection with a specified title, URL, owner, storage quota, and template (the parameters).

SharePoint Online PowerShell commands can be very efficient for batch operations — for example, creating a dozen new site collections or adding hundreds of new users to a site. For more information, see [Why you need to use Office 365 PowerShell](/office365/enterprise/powershell/why-you-need-to-use-office-365-powershell).

## Getting Started with SharePoint Online PowerShell

To use SharePoint Online PowerShell commands, you must have the SharePoint Admin role or Global Administrator role in Office 365.

You must install the SharePoint Online Management Shell module and connect to the SharePoint Online service. For more information, see [Connect SharePoint Online](connect-sharepoint-online.md).

## What's the difference between SharePoint Online PowerShell commands and Office 365 PowerShell commands?

The major and obvious difference is the nouns they use. Every SharePoint Online cmdlet will start with SPO as its noun. Conversely, Office 365 will start with MSO as its noun.

SharePoint Online Management Shell commands manage SharePoint settings and site collections, whereas Office 365 commands manage Office 365-level tasks such as users, licenses, organization information, and services. They both manage users and groups. However, Office 365 PowerShell commands manage users and groups for all of the Office 365 services. The SharePoint Online commands manage users and groups only for SharePoint Online.

## Should I use the SharePoint admin center or SharePoint Online PowerShell commands? 

If you are new to Office 365 and SharePoint Online and you have not done much managing of SharePoint sites or users, the SharePoint admin center is a good place to start.

After you get familiar with SharePoint sites and users, try using SharePoint Online PowerShell commands, especially when you want to manage lots of site collections or users.

> [!NOTE] 
> For the complete list of SharePoint Online cmdlets, see [SharePoint Online PowerShell](https://docs.microsoft.com/powershell/module/sharepoint-online/?view=sharepoint-ps)

## How do I get permissions and set up the environment?

To use SharePoint Online PowerShell commands, you must be a SharePoint admin in your organization. For info about installing the SharePoint Online Management Shell module and connecting to the SharePoint Online service, see [Get started with SharePoint Online Management Shell](connect-sharepoint-online.md)
