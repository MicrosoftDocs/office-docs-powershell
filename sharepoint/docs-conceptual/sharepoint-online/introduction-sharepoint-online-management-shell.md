# What is the SharePoint Online Management Shell? #

The SharePoint Online Management Shell is a Windows PowerShell module that you can use to manage SharePoint Online users, sites, and site collections. Command-line operations in Windows PowerShell are composed of a series of commands. Each command uses a cmdlet and a set of settings known as parameters. For example, you use the **New-SPOSite** cmdlet for a command that creates a new SharePoint Online site collection with a specified title, URL, owner, storage quota, and template (the parameters).

SharePoint Online PowerShell commands can be very efficient for batch operations — for example, creating a dozen new site collections or adding hundreds of new SharePoint Online users to a site. For more information, see [Why you need to use Office 365 PowerShell](https://technet.microsoft.com/library/dn568034.aspx).

#### What is the difference between SharePoint Online PowerShell commands and Office 365 PowerShell commands? ####

The major and obvious difference is the nouns they use. Every SharePoint Online cmdlet will start with SPO as its noun. Conversely, Office 365 will start with MSO as it noun. 

The set of SharePoint Online Management Shell commands differs from the set of Office 365 for professionals and small businesses PowerShell commands. SharePoint Online Management Shell commands manage SharePoint Online users and site collections, whereas Office 365 commands manage Office 365-level tasks such as users, licenses, organization information, and services. They both manage users and groups. However, Office 365 PowerShell commands manage users and groups for all of the Office 365 services. The  SharePoint Online commands manage users and groups only for SharePoint Online.

#### Should I use the SharePoint Online Admin Center or SharePoint Online PowerShell commands? ####

If you are new to Office 365 and SharePoint Online and you have not done much managing of SharePoint sites or users, the SharePoint Online Administration Center is a good place to start. 

After you get familiar with SharePoint Online sites and users, try using SharePoint Online commands, especially when you want to manage lots of users, sites, or site collections.

# How do I get permissions and set up the environment? #

To use SharePoint Online PowerShell commands, you must be a SharePoint Online global administrator.

Before you can run SharePoint Online commands, you must install the SharePoint Online Management Shell module and connect to the SharePoint Online service. For more information, see [Connect SharePoint Online](connect-sharepoint-online.md)
