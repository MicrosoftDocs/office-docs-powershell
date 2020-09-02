---
title: PnP PowerShell Overview
---


# PnP PowerShell overview

SharePoint Patterns and Practices (PnP) contains a library of PowerShell commands (PnP PowerShell) that allows you to perform complex provisioning and artifact management actions towards SharePoint. The commands use CSOM and can work against both SharePoint Online as SharePoint On-Premises.

![SharePoint Patterns and Practices](https://devofficecdn.azureedge.net/media/Default/PnP/sppnp.png)

_**Applies to:** SharePoint Online | SharePoint 2019 | SharePoint 2016 | SharePoint 2013_

## Installation #

There are 3 ways to install the cmdlets. We recommend, where possible, to install them from the [PowerShell Gallery](https://www.powershellgallery.com). Alternatively you can download the setup files or run a PowerShell script to download the PowerShellGet module and install the cmdlets subsequently.

### PowerShell Gallery ###
If you main OS is Windows 10, or if you have [PowerShellGet](https://github.com/powershell/powershellget) installed, you can run the following commands to install the PowerShell cmdlets:

|**SharePoint Version**|**Command to install**|
|------------------|------------------|
|SharePoint Online|```Install-Module SharePointPnPPowerShellOnline ```|
|SharePoint 2019|```Install-Module SharePointPnPPowerShell2019```|
|SharePoint 2016|```Install-Module SharePointPnPPowerShell2016```|
|SharePoint 2013|```Install-Module SharePointPnPPowerShell2013```|

*Notice*: if you install the latest PowerShellGet from Github, you might receive an error message stating 
>PackageManagement\Install-Package : The version 'x.x.x.x' of the module 'SharePointPnPPowerShellOnline' being installed is not catalog signed.

In order to install the cmdlets when you get this error specify the -SkipPublisherCheck switch with the Install-Module cmdlet, e.g. ```Install-Module SharePointPnPPowerShellOnline -SkipPublisherCheck -AllowClobber```

### Setup files ##
You can download setup files from the [releases](https://github.com/pnp/pnp-powershell/releases) section of the PnP PowerShell repository. These files will up be updated on a monthly basis. Run the install and restart any open instances of PowerShell to use the cmdlets.

### Installation script ##
This is an alternative for installation on machines that have at least PowerShell v3 installed. You can find the version of PowerShell  by opening PowerShell and running ```$PSVersionTable.PSVersion```. The value for ```Major``` should be above 3.

To install the cmdlets you can run the below command which will install PowerShell Package Management and then install the PowerShell Modules from the PowerShell Gallery.

```powershell
Invoke-Expression (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/pnp/PnP-PowerShell/master/Samples/Modules.Install/Install-SharePointPnPPowerShell.ps1')
```

## Updating ##
Every month a new release will be made available of the PnP PowerShell Cmdlets. If you earlier installed the cmdlets using the setup file, simply download the [latest version](https://github.com/SharePoint/PnP-PowerShell/releases/latest) and run the setup. This will update your existing installation.

If you have installed the cmdlets using PowerShellGet with ```Install-Module``` from the PowerShell Gallery then you will be able to use the following command to install the latest updated version:

```powershell
Update-Module SharePointPnPPowerShell*
``` 

This will automatically load the module after starting PowerShell 3.0.

You can check the installed PnP-PowerShell versions with the following command:

```powershell
Get-Module SharePointPnPPowerShell* -ListAvailable | Select-Object Name,Version | Sort-Object Version -Descending
```

## Getting Started #

To use the library you first need to connect to your tenant:

```powershell
Connect-PnPOnline –Url https://yoursite.sharepoint.com –Credentials (Get-Credential)
```

Notice: if you use multi-factor authentication on your tenant, use 

```powershell
Connect-PnPOnline -Url https://yoursite.sharepoint.com -UseWebLogin
```

To view all cmdlets, enter

```powershell
Get-Command -Module *PnP*
```

At the following links you will find a few videos on how to get started with the cmdlets:

* https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Web-Cast-Introduction-to-Office-365-PnP-PowerShell
* https://channel9.msdn.com/blogs/OfficeDevPnP/Introduction-to-PnP-PowerShell-Cmdlets
* https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Webcast-PnP-PowerShell-Getting-started-with-latest-updates

### Setting up credentials ##
See this [wiki page](https://github.com/pnp/PnP-PowerShell/wiki/How-to-use-the-Windows-Credential-Manager-to-ease-authentication-with-PnP-PowerShell) for more information on how to use the Windows Credential Manager to setup credentials that you can use in unattended scripts

## Cmdlet overview


### Apps 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPApp |Add/uploads an available app to the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPApp |Returns the available apps from the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Install-PnPApp |Installs an available app from the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Publish-PnPApp |Publishes/Deploys/Trusts an available app in the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Remove-PnPApp |Removes an app from the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Uninstall-PnPApp |Uninstalls an available add-in from the site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Unpublish-PnPApp |Unpublishes/retracts an available add-in from the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Update-PnPApp |Updates an available app from the app catalog|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPAppInstance |Returns a SharePoint AddIn Instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Uninstall-PnPAppInstance |Removes an app from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPApplicationCustomizer |Adds a SharePoint Framework client side extension application customizer|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPApplicationCustomizer |Returns all SharePoint Framework client side extension application customizers|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Remove-PnPApplicationCustomizer |Removes a SharePoint Framework client side extension application customizer|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Set-PnPApplicationCustomizer |Updates a SharePoint Framework client side extension application customizer|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Import-PnPAppPackage |Adds a SharePoint Addin to a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Sync-PnPAppToTeams |Synchronize an app from the tenant app catalog to the Microsoft Teams app catalog|SharePoint Online
@SharePointPnPPowerShell.Grant-PnPTenantServicePrincipalPermission |Explicitly grants a specified permission to the "SharePoint Online Client" service principal|SharePoint Online


### Base Cmdlets 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Request-PnPAccessToken |Requests an OAuth Access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPAppAuthAccessToken |Returns the access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPAuthenticationRealm |Returns the authentication realm|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPAzureCertificate |Get PEM values and manifest settings for an existing certificate (.pfx) for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPAzureCertificate |Generate a new 2048bit self-signed certificate and manifest settings for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPConnection |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPContext |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPContext |Set the ClientContext|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPException |Returns the last exception that occurred|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPHealthScore |Retrieves the healthscore of the site given in his Url parameter or from the current connection if the Url parameter is not provided|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
@SharePointPnPPowerShell.Connect-PnPOnline |Connect to a SharePoint site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Disconnect-PnPOnline |Disconnects the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPProperty |Returns a previously not loaded property of a ClientObject|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Invoke-PnPQuery |Executes the currently queued actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Invoke-PnPSPRestMethod |Invokes a REST request towards a SharePoint site|SharePoint Online
@SharePointPnPPowerShell.Add-PnPStoredCredential |Adds a credential to the Windows Credential Manager|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPStoredCredential |Get a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPStoredCredential |Removes a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPTraceLog |Turn log tracing on or off|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Branding 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPCustomAction |Adds a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPCustomAction |Return user custom actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPCustomAction |Removes a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFooter |Gets the configuration regarding the footer of the current web|SharePoint Online
@SharePointPnPPowerShell.Set-PnPFooter |Configures the footer of the current web|SharePoint Online
@SharePointPnPPowerShell.Get-PnPHomePage |Return the homepage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPHomePage |Sets the home page of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPJavaScriptBlock |Adds a link to a JavaScript snippet/block to a web or site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPJavaScriptLink |Adds a link to a JavaScript file to a web or sitecollection, valid only for SharePoint classic site experience.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPJavaScriptLink |Returns all or a specific custom action(s) with location type ScriptLink|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPJavaScriptLink |Removes a JavaScript link or block from a web or sitecollection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPMasterPage |Returns the URLs of the default Master Page and the custom Master Page.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPMasterPage |Set the masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPMinimalDownloadStrategy |Activates or deactivates the minimal downloading strategy.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPNavigationNode |Adds an item to a navigation element|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPNavigationNode |Returns all or a specific navigation node|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPNavigationNode |Removes a menu item from either the quicklaunch or top navigation|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Disable-PnPResponsiveUI |Deactivate the PnP Response UI add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Enable-PnPResponsiveUI |Activates the PnP Response UI Add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTheme |Returns the current theme/composed look of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPTheme |Sets the theme of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPWebTheme |Sets the theme of the current web.|SharePoint Online


### Client-Side Pages 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPAvailableClientSideComponents |Gets the available client side components on a particular page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Move-PnPClientSideComponent |Moves a Client-Side Component to a different section/column|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Add-PnPClientSidePage |Adds a Client-Side Page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.ConvertTo-PnPClientSidePage |Converts a classic page (wiki or web part page) into a Client-Side Page|SharePoint Online
@SharePointPnPPowerShell.Get-PnPClientSidePage |Gets a modern site page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Remove-PnPClientSidePage |Removes a Client-Side Page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Set-PnPClientSidePage |Sets parameters of a Client-Side Page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Save-PnPClientSidePageConversionLog |Persists the current client side page conversion log data to the loggers linked to the last used page transformation run. Needs to be used in conjunction with the -LogSkipFlush flag on the ConvertTo-PnPClientSidePage cmdlet|SharePoint Online
@SharePointPnPPowerShell.Export-PnPClientSidePageMapping |Get's the built-in maping files or a custom mapping file for your publishing portal page layouts. These mapping files are used to tailor the page transformation experience.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPClientSidePageSection |Adds a new section to a Client-Side page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Add-PnPClientSideText |Adds a text element to a client-side page.|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Add-PnPClientSideWebPart |Adds a Client-Side Web Part to a client-side page|SharePoint Online, SharePoint 2019


### Content Types 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPContentType |Adds a new content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPContentType |Retrieves a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPContentType |Removes a content type from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPContentTypeFromList |Removes a content type from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPContentTypePublishingHubUrl |Returns the url to Content Type Publishing Hub|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPContentTypeToList |Adds a new content type to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPDefaultContentTypeToList |Sets the default content type for a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPFieldFromContentType |Removes a site column from a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPFieldToContentType |Adds an existing site column to a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Diagnostic utilities 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Measure-PnPList |Returns statistics on the list object. This may fail on lists larger than the list view threshold|SharePoint Online, SharePoint 2016, SharePoint 2019
@SharePointPnPPowerShell.Measure-PnPResponseTime |Gets statistics on response time for the specified endpoint by sending probe requests|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Measure-PnPWeb |Returns statistics on the web object|SharePoint Online, SharePoint 2016, SharePoint 2019


### Document Sets 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Remove-PnPContentTypeFromDocumentSet |Removes a content type from a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPContentTypeToDocumentSet |Adds a content type to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPDocumentSet |Creates a new document set in a library.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPDocumentSetField |Sets a site column from the available content types to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPDocumentSetTemplate |Retrieves a document set template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Event Receivers 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPEventReceiver |Adds a new remote event receiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPEventReceiver |Return registered eventreceivers|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPEventReceiver |Remove an eventreceiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Features 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.New-PnPExtensibilityHandlerObject |Creates an ExtensibilityHandler Object, to be used by the Get-PnPProvisioningTemplate cmdlet|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Disable-PnPFeature |Disables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Enable-PnPFeature |Enables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFeature |Returns all activated or a specific activated feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Fields 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPField |Add a field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPField |Returns a field from a list or site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPField |Removes a field from a list or a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPField |Changes one or more properties of a field in a specific list or for the whole web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPFieldFromXml |Adds a field to a list or as a site column based upon a CAML/XML field definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPTaxonomyField |Add a taxonomy field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPView |Change view properties|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Files and Folders 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPFile |Uploads a file to Web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Copy-PnPFile |Copies a file or folder to a different location. This location can be within the same document library, same site, same site collection or even to another site collection on the same tenant. Currently there is a 200MB file size limit for the file or folder to be copied.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Find-PnPFile |Finds a file in the virtual file system of the web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFile |Downloads a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Move-PnPFile |Moves a file or folder to a different location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPFile |Removes a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Rename-PnPFile |Renames a file in its current location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPFileCheckedIn |Checks in a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPFileCheckedOut |Checks out a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFileVersion |Retrieves all versions of a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPFileVersion |Removes all or a specific file version.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Reset-PnPFileVersion |Resets a file to its previous version|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Restore-PnPFileVersion |Restores a specific file version.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPFolder |Creates a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFolder |Return a folder object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Move-PnPFolder |Move a folder to another location in the current web. If you want to move a folder to a different site collection, use the Move-PnPFile cmdlet instead, which also supports moving folders and also accross site collections.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPFolder |Deletes a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Rename-PnPFolder |Renames a folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Resolve-PnPFolder |Returns a folder from a given site relative path, and will create it if it does not exist.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPFolderItem |List content in folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Copy-PnPItemProxy |Proxy cmdlet for using Copy-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Move-PnPItemProxy |Proxy cmdlet for using Move-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Information Management 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPLabel |Gets the Office 365 retention label/tag of the specified list or library (if applicable)|SharePoint Online
@SharePointPnPPowerShell.Reset-PnPLabel |Resets a retention label on the specified list or library to None|SharePoint Online
@SharePointPnPPowerShell.Set-PnPLabel |Sets a retention label on the specified list or library. Use Reset-PnPLabel to remove the label again.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPListInformationRightsManagement |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPListInformationRightsManagement |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteClosure |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPSiteClosure |Opens or closes a site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPSitePolicy |Sets a site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPSitePolicy |Retrieves all or a specific site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Lists 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Clear-PnPDefaultColumnValues |Clear default column values for a document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPDefaultColumnValues |Gets the default column values for all folders in document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPDefaultColumnValues |Sets default column values for a document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPFolderPermission |Sets folder permissions. Use Get-PnPRoleDefinition to retrieve all available roles you can add or remove using this cmdlet.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPList |Returns lists from SharePoint|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPList |Creates a new list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPList |Deletes a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPList |Updates list settings|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPListItem |Adds an item to the list and sets the creation time to the current date and time. The author is set to the current authenticated user executing the cmdlet. In order to set the author to a different user, please refer to Set-PnPListItem.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPListItem |Retrieves list items|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPListItem |Deletes an item from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPListItem |Updates a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPListItemPermission |Sets list item permissions. Use Get-PnPRoleDefinition to retrieve all available roles you can add or remove using this cmdlet.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Move-PnPListItemToRecycleBin |Moves an item from a list to the Recycle Bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPListPermission |Sets list permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Request-PnPReIndexList |Marks the list for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPView |Adds a view to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPView |Returns one or all views from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPView |Deletes a view from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Management API 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPManagementApiAccessToken |Gets an access token for the Office 365 Management API|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOffice365CurrentServiceStatus |Gets current service status of the Office 365 Services from the Office 365 Management API|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOffice365HistoricalServiceStatus |Gets the historical service status of the Office 365 Services of the last 7 days from the Office 365 Management API|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOffice365ServiceMessage |Gets the service messages regarding services in Office 365 from the Office 365 Management API|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOffice365Services |Gets the services available in Office 365 from the Office 365 Management API|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOfficeManagementApiAccessToken |Gets an access token for the Microsoft Office 365 Management API from the current connection|SharePoint Online
@SharePointPnPPowerShell.Get-PnPUnifiedAuditLog |Gets unified audit logs from the Office 365 Management API. Requires the Azure Active Directory application permission 'ActivityFeed.Read'.|SharePoint Online


### Microsoft Graph 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPAADUser |Retrieves users from Azure Active Directory|SharePoint Online
@SharePointPnPPowerShell.Get-PnPAccessToken |Returns the current OAuth Access token|SharePoint Online
@SharePointPnPPowerShell.Get-PnPDeletedMicrosoft365Group |Gets one deleted Microsoft 365 Group or a list of deleted Microsoft 365 Groups|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPDeletedMicrosoft365Group |Permanently removes one deleted Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Restore-PnPDeletedMicrosoft365Group |Restores one deleted Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Get-PnPGraphSubscription |Gets subscriptions from Microsoft Graph. Requires the Azure Active Directory application permission 'Subscription.Read.All'.|SharePoint Online
@SharePointPnPPowerShell.New-PnPGraphSubscription |Creates a new Microsof Graph Subscription which allows your webhook API to be called when a change occurs in Microsoft Graph|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPGraphSubscription |Removes an existing Microsoft Graph subscription. Required Azure Active Directory application permission depends on the resource the subscription exists on, see https://docs.microsoft.com/graph/api/subscription-delete#permissions.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPGraphSubscription |Updates an existing Microsoft Graph subscription. Required Azure Active Directory application permission depends on the resource the subscription exists on, see https://docs.microsoft.com/graph/api/subscription-delete#permissions.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPMicrosoft365Group |Gets one Microsoft 365 Group or a list of Microsoft 365 Groups|SharePoint Online
@SharePointPnPPowerShell.New-PnPMicrosoft365Group |Creates a new Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPMicrosoft365Group |Removes one Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Set-PnPMicrosoft365Group |Sets Microsoft 365 Group properties|SharePoint Online
@SharePointPnPPowerShell.Reset-PnPMicrosoft365GroupExpiration |Renews the Microsoft 365 Group by extending its expiration with the number of days defined in the group expiration policy set on the Azure Active Directory|SharePoint Online
@SharePointPnPPowerShell.Add-PnPMicrosoft365GroupMember |Adds members to a particular Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Clear-PnPMicrosoft365GroupMember |Removes all current members from a particular Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPMicrosoft365GroupMember |Removes members from a particular Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Get-PnPMicrosoft365GroupMembers |Gets members of a particular Microsoft 365 Group (aka Unified Group). Requires the Azure Active Directory application permissions 'Group.Read.All' and 'User.Read.All'.|SharePoint Online
@SharePointPnPPowerShell.Clear-PnPMicrosoft365GroupOwner |Removes all current owners from a particular Microsoft 365 Group (aka Unified Group)|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPMicrosoft365GroupOwner |Removes owners from a particular Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Get-PnPMicrosoft365GroupOwners |Gets owners of a particular Microsoft 365 Group|SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteClassification |Adds one ore more site classification values to the list of possible values|SharePoint Online
@SharePointPnPPowerShell.Disable-PnPSiteClassification |Disables Site Classifications for the tenant|SharePoint Online
@SharePointPnPPowerShell.Enable-PnPSiteClassification |Enables Site Classifications for the tenant|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteClassification |Returns the defined Site Classifications for the tenant|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteClassification |Removes one or more existing site classification values from the list of available values|SharePoint Online
@SharePointPnPPowerShell.Update-PnPSiteClassification |Updates Site Classifications for the tenant|SharePoint Online


### Microsoft Teams 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPTeamsApp |Gets one Microsoft Teams App or a list of all apps.|SharePoint Online
@SharePointPnPPowerShell.New-PnPTeamsApp |Adds an app to the Teams App Catalog.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTeamsApp |Removes an app from the Teams AppCatalog.|SharePoint Online
@SharePointPnPPowerShell.Update-PnPTeamsApp |Updates an existing app in the Teams App Catalog.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTeamsChannel |Adds a channel to an existing Microsoft Teams instance.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTeamsChannel |Gets the channels for a specified Team.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTeamsChannel |Removes a channel from a Microsoft Teams instance.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTeamsChannel |Updates an existing Teams Channel|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTeamsChannelMessage |Sends a message to a Microsoft Teams Channel.|SharePoint Online
@SharePointPnPPowerShell.Submit-PnPTeamsChannelMessage |Sends a message to a Microsoft Teams Channel.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTeamsTab |Adds a tab to an existing Channel|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTeamsTab |Gets one or all tabs in a channel.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTeamsTab |Removes a Microsoft Teams tab in a channel.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTeamsTab |Updates Teams Tab settings|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTeamsTeam |Gets one Microsoft Teams Team or a list of Teams.|SharePoint Online
@SharePointPnPPowerShell.New-PnPTeamsTeam |Creates a new Team in Microsoft Teams. The cmdlet will create a Microsoft 365 group and then add a team to the group.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTeamsTeam |Removes a Microsoft Teams Team instance|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTeamsTeam |Updates an existing Team.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTeamsTeamArchivedState |Sets the archived state of a team.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTeamsTeamPicture |Sets the picture of an existing team.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTeamsUser |Adds a channel to an existing Microsoft Teams instance.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTeamsUser |Returns owners, members or guests from a team.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTeamsUser |Removes users from a team.|SharePoint Online


### Provisioning 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Export-PnPClientSidePage |Exports a Client Side Page to a PnP Provisioning Template|SharePoint Online
@SharePointPnPPowerShell.Add-PnPDataRowsToProvisioningTemplate |Adds datarows to a list inside a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPFileFromProvisioningTemplate |Removes a file from a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPFileToProvisioningTemplate |Adds a file to a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Convert-PnPFolderToProvisioningTemplate |Creates a pnp package file of an existing template xml, and includes all files in the current folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPListFoldersToProvisioningTemplate |Adds folders to a list in a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Export-PnPListToProvisioningTemplate |Exports one or more lists to provisioning template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPProvisioningTemplate |Adds a PnP Provisioning Template object to a tenant template|SharePoint Online
@SharePointPnPPowerShell.Apply-PnPProvisioningTemplate |Applies a site template to a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Convert-PnPProvisioningTemplate |Converts a provisioning template to an other schema version|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPProvisioningTemplate |Generates a provisioning site template from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPProvisioningTemplate |Creates a new provisioning template object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Read-PnPProvisioningTemplate |Loads/Reads a PnP file from the file system or a string|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Save-PnPProvisioningTemplate |Saves a PnP site template to the file system|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPProvisioningTemplateFromFolder |Generates a provisioning template from a given folder, including only files that are present in that folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPProvisioningTemplateMetadata |Sets metadata of a provisioning template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPTenantSequence |Adds a tenant sequence object to a tenant template|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantSequence |Returns one ore more provisioning sequence object(s) from a tenant template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantSequence |Creates a new tenant sequence object|SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantSequenceCommunicationSite |Creates a communication site object|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTenantSequenceSite |Adds a existing tenant sequence site object to a tenant template|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantSequenceSite |Returns one ore more sites from a tenant template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPTenantSequenceSubSite |Adds a tenant sequence sub site object to a tenant sequence site object|SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantSequenceTeamNoGroupSite |Creates a new team site without a Microsoft 365 group in-memory object|SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantSequenceTeamNoGroupSubSite |Creates a team site subsite with no Microsoft 365 group object|SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantSequenceTeamSite |Creates a team site object|SharePoint Online
@SharePointPnPPowerShell.Apply-PnPTenantTemplate |Applies a tenant template to the current tenant. You must have the Office 365 Global Admin role to run this cmdlet successfully.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantTemplate |Generates a provisioning tenant template from a site. If the site is a hubsite any connected site will be included.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTenantTemplate |Creates a new tenant template object|SharePoint Online
@SharePointPnPPowerShell.Read-PnPTenantTemplate |Loads/Reads a PnP tenant template from the file system and returns an in-memory instance of this template.|SharePoint Online
@SharePointPnPPowerShell.Save-PnPTenantTemplate |Saves a PnP provisioning hierarchy to the file system|SharePoint Online
@SharePointPnPPowerShell.Test-PnPTenantTemplate |Tests a tenant template for invalid references|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Publishing 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Set-PnPAvailablePageLayouts |Sets the available page layouts for the current site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPDefaultPageLayout |Sets a specific page layout to be the default page layout for a publishing site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPHtmlPublishingPageLayout |Adds a HTML based publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPMasterPage |Adds a Masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPPublishingImageRendition |Adds an Image Rendition if the Name of the Image Rendition does not already exist. This prevents creating two Image Renditions that share the same name.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPPublishingImageRendition |Returns all image renditions or if Identity is specified a specific one|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPPublishingImageRendition |Removes an existing image rendition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPPublishingPage |Adds a publishing page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPPublishingPageLayout |Adds a publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPWikiPage |Adds a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWikiPage |Removes a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWikiPageContent |Gets the contents/source of a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPWikiPageContent |Sets the contents of a wikipage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Records Management 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPInPlaceRecordsManagement |Returns if the place records management feature is enabled.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPInPlaceRecordsManagement |Activates or deactivates in the place records management feature.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Disable-PnPInPlaceRecordsManagementForSite |Disables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Enable-PnPInPlaceRecordsManagementForSite |Enables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Clear-PnPListItemAsRecord |Undeclares a list item as a record|SharePoint Online
@SharePointPnPPowerShell.Set-PnPListItemAsRecord |Declares a list item as a record, for more information, see https://docs.microsoft.com/sharepoint/governance/records-management-in-sharepoint-server|SharePoint Online
@SharePointPnPPowerShell.Test-PnPListItemIsRecord |Checks if a list item is a record|SharePoint Online
@SharePointPnPPowerShell.Get-PnPListRecordDeclaration |Returns the manual record declaration settings for a list|SharePoint Online
@SharePointPnPPowerShell.Set-PnPListRecordDeclaration |The RecordDeclaration parameter supports 4 values:  AlwaysAllowManualDeclaration NeverAllowManualDeclaration UseSiteCollectionDefaults |SharePoint Online


### Search 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPSearchConfiguration |Returns the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSearchConfiguration |Remove the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPSearchConfiguration |Sets the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPSearchCrawlLog |Returns entries from the SharePoint search crawl log. Make sure you are granted access to the crawl log via the SharePoint search admin center at https://<tenant>-admin.sharepoint.com/_layouts/15/searchadmin/crawllogreadpermission.aspx in order to run this cmdlet.|SharePoint Online
@SharePointPnPPowerShell.Submit-PnPSearchQuery |Executes an arbitrary search query against the SharePoint search index|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPSearchSettings |Retrieves search settings for a site|SharePoint Online
@SharePointPnPPowerShell.Set-PnPSearchSettings |Sets search settings for a site|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteSearchQueryResults |Executes a search query to retrieve indexed site collections|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### SharePoint Recycle Bin 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Clear-PnPRecycleBinItem |Permanently deletes all or a specific recycle bin item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPRecycleBinItem |Returns the items in the recycle bin from the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Move-PnPRecycleBinItem |Moves all items or a specific item in the first stage recycle bin of the current site collection to the second stage recycle bin|SharePoint Online
@SharePointPnPPowerShell.Restore-PnPRecycleBinItem |Restores the provided recycle bin item to its original location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantRecycleBinItem |Returns all modern and classic site collections in the tenant scoped recycle bin|SharePoint Online


### SharePoint WebHooks 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPWebhookSubscription |Adds a new Webhook subscription|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWebhookSubscription |Removes a Webhook subscription from the resource|SharePoint Online
@SharePointPnPPowerShell.Set-PnPWebhookSubscription |Updates a Webhook subscription|SharePoint Online
@SharePointPnPPowerShell.Get-PnPWebhookSubscriptions |Gets all the Webhook subscriptions of the resource|SharePoint Online


### Sites 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Set-PnPAppSideLoading |Enables the App SideLoading Feature on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPAuditing |Get the Auditing setting of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPAuditing |Set Auditing setting for a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Enable-PnPCommSite |Enables the modern communication site experience on a classic team site.|SharePoint Online
@SharePointPnPPowerShell.Test-PnPOffice365GroupAliasIsUsed |Tests if a given alias is already used used|SharePoint Online
@SharePointPnPPowerShell.Add-PnPRoleDefinition |Adds a Role Defintion (Permission Level) to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPRoleDefinition |Retrieves a Role Definitions of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPRoleDefinition |Remove a Role Definition from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Disable-PnPSharingForNonOwnersOfSite |Configures the site to only allow sharing of the site and items in the site by owners|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSharingForNonOwnersOfSite |Returns $false if sharing of the site and items in the site is restricted only to owners or $true if members and owners are allowed to share|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSite |Returns the current site collection from the context.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPSite |Sets Site Collection properties.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteCollectionAdmin |Adds one or more users as site collection administrators to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteCollectionAdmin |Returns the current site collection administrators of the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteCollectionAdmin |Removes one or more users as site collection administrators from the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Install-PnPSolution |Installs a sandboxed solution to a site collection. WARNING! This method can delete your composed look gallery due to the method used to activate the solution. We recommend you to only to use this cmdlet if you are okay with that.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Uninstall-PnPSolution |Uninstalls a sandboxed solution from a site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPTeamsTeam |Adds a Teams team to an existing, group connected, site collection|SharePoint Online


### Taxonomy 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPSiteCollectionTermStore |Returns the site collection term store|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Export-PnPTaxonomy |Exports a taxonomy to either the output or to a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Import-PnPTaxonomy |Imports a taxonomy from either a string array or a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPTaxonomyFieldValue |Sets a taxonomy term value in a listitem field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTaxonomyItem |Returns a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTaxonomyItem |Removes a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTaxonomySession |Returns a taxonomy session|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTerm |Returns a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTerm |Creates a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTermGroup |Returns a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTermGroup |Creates a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTermGroup |Removes a taxonomy term group and all its containing termsets|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Import-PnPTermGroupFromXml |Imports a taxonomy TermGroup from either the input or from an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Export-PnPTermGroupToXml |Exports a taxonomy TermGroup to either the output or to an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTermLabel |Creates a localized label for a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTermSet |Returns a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Import-PnPTermSet |Imports a taxonomy term set from a file in the standard format.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPTermSet |Creates a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Tenant Administration 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Register-PnPAppCatalogSite |Creates a new App Catalog Site and sets this site as the Tenant App Catalog|SharePoint Online
@SharePointPnPPowerShell.Get-PnPGraphAccessToken |Returns the current OAuth Access token for the Microsoft Graph API|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPHideDefaultThemes |Returns if the default / OOTB themes should be visible to users or not.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPHideDefaultThemes |Defines if the default / OOTB themes should be visible to users or not.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPHomeSite |Returns the home site url for your tenant|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPHomeSite |Removes the currently set site as the home site|SharePoint Online
@SharePointPnPPowerShell.Set-PnPHomeSite |Sets the home site for your tenant|SharePoint Online
@SharePointPnPPowerShell.Get-PnPHubSite |Retrieve all or a specific hubsite.|SharePoint Online
@SharePointPnPPowerShell.Register-PnPHubSite |Registers a site as a hubsite|SharePoint Online
@SharePointPnPPowerShell.Set-PnPHubSite |Sets hub site properties|SharePoint Online
@SharePointPnPPowerShell.Unregister-PnPHubSite |Unregisters a site as a hubsite|SharePoint Online
@SharePointPnPPowerShell.Add-PnPHubSiteAssociation |Connects a site to a hubsite.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPHubSiteAssociation |Disconnects a site from a hubsite.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPHubSiteChild |Retrieves all sites linked to a specific hub site|SharePoint Online
@SharePointPnPPowerShell.Grant-PnPHubSiteRights |Grant additional permissions to the permissions already in place to associate sites to Hub Sites for one or more specific users|SharePoint Online
@SharePointPnPPowerShell.Revoke-PnPHubSiteRights |Revoke permissions to the permissions already in place to associate sites to Hub Sites for one or more specific users|SharePoint Online
@SharePointPnPPowerShell.Get-PnPIsSiteAliasAvailable |Validates if a certain alias is still available to be used to create a new site collection for. If it is not, it will propose an alternative alias and URL which is still available.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPKnowledgeHubSite |Gets the Knowledge Hub Site URL for your tenant|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPKnowledgeHubSite |Removes the Knowledge Hub Site setting for your tenant|SharePoint Online
@SharePointPnPPowerShell.Set-PnPKnowledgeHubSite |Sets the Knowledge Hub Site for your tenant|SharePoint Online
@SharePointPnPPowerShell.Add-PnPMicrosoft365GroupToSite |Groupifies a classic team site by creating a Microsoft 365 group for it and connecting the site with the newly created group|SharePoint Online
@SharePointPnPPowerShell.Add-PnPOrgAssetsLibrary |Adds a given document library as a organizational asset source|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOrgAssetsLibrary |Returns the list of all the configured organizational asset libraries|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPOrgAssetsLibrary |Removes a given document library as a organizational asset source|SharePoint Online
@SharePointPnPPowerShell.Add-PnPOrgNewsSite |Adds the site as an organization news source in your tenant|SharePoint Online
@SharePointPnPPowerShell.Get-PnPOrgNewsSite |Returns the list of all the configured organizational news sites.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPOrgNewsSite |Removes a given site from the list of organizational news sites.|SharePoint Online
@SharePointPnPPowerShell.Initialize-PnPPowerShellAuthentication |Initializes a Azure AD App and optionally creates a new self-signed certificate to use with the application registration.|SharePoint Online
@SharePointPnPPowerShell.Disable-PnPPowerShellTelemetry |Disables PnP PowerShell telemetry tracking|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Enable-PnPPowerShellTelemetry |Enables PnP PowerShell telemetry tracking.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPPowerShellTelemetryEnabled |Returns true if the PnP PowerShell Telemetry has been enabled.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPSite |Creates either a communication site or a Microsoft 365 group-connected team site|SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteCollectionAppCatalog |Adds a Site Collection scoped App Catalog to a site|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteCollectionAppCatalog |Removes a Site Collection scoped App Catalog from a site|SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteDesign |Creates a new Site Design on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteDesign |Retrieve Site Designs that have been registered on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Invoke-PnPSiteDesign |Apply a Site Design to an existing site. * Requires Tenant Administration Rights *|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteDesign |Removes a Site Design|SharePoint Online
@SharePointPnPPowerShell.Set-PnPSiteDesign |Updates a Site Design on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteDesignRights |Returns the principals with design rights on a specific Site Design|SharePoint Online
@SharePointPnPPowerShell.Grant-PnPSiteDesignRights |Grants the specified principals rights to use the site design.|SharePoint Online
@SharePointPnPPowerShell.Revoke-PnPSiteDesignRights |Revokes the specified principals rights to use the site design.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteDesignRun |Retrieves a list of site designs applied to a specified site collection. If the WebUrl parameter is not specified we show the list of designs applied to the current site. The returned output includes the ID of the scheduled job, the web and site IDs, and the site design ID, version, and title.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteDesignRunStatus |Retrieves and displays a list of all site script actions executed for a specified site design applied to a site.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteDesignTask |This command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-PnPSiteDesign is limited to 30 actions and subactions). This command is intended to replace Invoke-PnPSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteDesignTask |Used to retrieve a scheduled site design script. It takes the ID of the scheduled site design task and the URL for the site where the site design is scheduled to be applied.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteDesignTask |Removes a Site Design Task. If the execution of the associated site script has already started the execution will not be terminated.|SharePoint Online
@SharePointPnPPowerShell.Add-PnPSiteScript |Creates a new Site Script on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteScript |Retrieve Site Scripts that have been registered on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPSiteScript |Removes a Site Script|SharePoint Online
@SharePointPnPPowerShell.Set-PnPSiteScript |Updates an existing Site Script on the current tenant.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteScriptFromList |Generates a Site Script from an existing list|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSiteScriptFromWeb |Generates a Site Script from an existing site|SharePoint Online
@SharePointPnPPowerShell.Get-PnPStorageEntity |Retrieve Storage Entities / Farm Properties from either the Tenant App Catalog or from the current site if it has a site scope app catalog.|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPStorageEntity |Remove Storage Entities / Farm Properties from either the tenant scoped app catalog or the current site collection if the site has a site collection scoped app catalog|SharePoint Online
@SharePointPnPPowerShell.Set-PnPStorageEntity |Set Storage Entities / Farm Properties in either the tenant scoped app catalog or the site collection app catalog.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenant |Returns organization-level site collection properties|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenant |Sets organization-level site collection properties|SharePoint Online
@SharePointPnPPowerShell.Clear-PnPTenantAppCatalogUrl |Removes the url of the tenant scoped app catalog. It will not delete the site collection itself.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantAppCatalogUrl |Retrieves the url of the tenant scoped app catalog|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenantAppCatalogUrl |Sets the url of the tenant scoped app catalog|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantCdnEnabled |Retrieves if the Office 365 Content Delivery Network has been enabled.|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenantCdnEnabled |Enables or disabled the public or private Office 365 Content Delivery Network (CDN).|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTenantCdnOrigin |Adds a new origin to the public or private content delivery network (CDN).|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantCdnOrigin |Returns the current registered origins from the public or private content delivery network (CDN).|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTenantCdnOrigin |Removes an origin from the Public or Private content delivery network (CDN).|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantCdnPolicies |Returns the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenantCdnPolicy |Sets the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantId |Returns the Tenant ID|SharePoint Online
@SharePointPnPPowerShell.Clear-PnPTenantRecycleBinItem |Permanently deletes a site collection from the tenant scoped recycle bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Restore-PnPTenantRecycleBinItem |Restores a site collection from the tenant scoped recycle bin|SharePoint Online
@SharePointPnPPowerShell.Disable-PnPTenantServicePrincipal |Enables the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
@SharePointPnPPowerShell.Enable-PnPTenantServicePrincipal |Enables the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantServicePrincipal |Returns the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
@SharePointPnPPowerShell.Revoke-PnPTenantServicePrincipalPermission |Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantServicePrincipalPermissionGrants |Gets the collection of permission grants for the "SharePoint Online Client" service principal|SharePoint Online
@SharePointPnPPowerShell.Approve-PnPTenantServicePrincipalPermissionRequest |Approves a permission request for the current tenant's "SharePoint Online Client" service principal|SharePoint Online
@SharePointPnPPowerShell.Deny-PnPTenantServicePrincipalPermissionRequest |Denies a permission request for the current tenant's "SharePoint Online Client" service principal|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantServicePrincipalPermissionRequests |Gets the collection of permission requests for the "SharePoint Online Client" service principal|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantSite |Retrieve site information.|SharePoint Online, SharePoint 2016, SharePoint 2019
@SharePointPnPPowerShell.New-PnPTenantSite |Creates a new (classic) site collection for the current tenant|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTenantSite |Removes a site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenantSite |Updates settings of a site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantSyncClientRestriction |Returns organization-level OneDrive synchronization restriction settings|SharePoint Online
@SharePointPnPPowerShell.Set-PnPTenantSyncClientRestriction |Sets organization-level sync client restriction properties|SharePoint Online
@SharePointPnPPowerShell.Add-PnPTenantTheme |Adds or updates a theme to the tenant.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTenantTheme |Returns all or a specific theme|SharePoint Online
@SharePointPnPPowerShell.Remove-PnPTenantTheme |Removes a theme|SharePoint Online
@SharePointPnPPowerShell.Get-PnPTimeZoneId |Returns a time zone ID|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWebTemplates |Returns the available classic web templates|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### User and group management 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPAlert |Adds an alert for a user to a list|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPAlert |Returns registered alerts for a user.|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Remove-PnPAlert |Removes an alert for a user|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPGroup |Returns a specific SharePoint group or all SharePoint groups in site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPGroup |Adds group to the Site Groups List and returns a group object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPGroup |Removes a group from a web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPGroup |Updates a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPGroupMembers |Retrieves all members of a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPGroupPermissions |Returns the permissions for a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPGroupPermissions |Adds and/or removes permissions of a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPUser |Returns site users of current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPUser |Adds a user to the built-in Site User Info List and returns a user object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPUser |Removes a specific user from the site collection User Information List|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPUserFromGroup |Removes a user from a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPUserToGroup |Adds a user to a SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### User Profiles 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.New-PnPPersonalSite |Office365 only: Creates a personal / OneDrive For Business site|SharePoint Online
@SharePointPnPPowerShell.New-PnPUPABulkImportJob |Submit up a new user profile bulk import job.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPUPABulkImportStatus |Get user profile bulk import status.|SharePoint Online
@SharePointPnPPowerShell.Get-PnPUserOneDriveQuota |Retrieves the current quota set on the OneDrive for Business site for a specific user|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPUserOneDriveQuota |Sets the quota on the OneDrive for Business site for a specific user|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Reset-PnPUserOneDriveQuotaToDefault |Resets the current quota set on the OneDrive for Business site for a specific user to the tenant default|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPUserProfileProperty |You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet. |SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPUserProfileProperty |Office365 only: Uses the tenant API to retrieve site information. You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this command.|SharePoint Online


### Utilities 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Send-PnPMail |Sends an email using the Office 365 SMTP Service or SharePoint, depending on the parameters specified. See detailed help for more information.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Web Parts 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPClientSideComponent |Retrieve one or more Client-Side components from a site page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Remove-PnPClientSideComponent |Removes a Client-Side component from a page|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Set-PnPClientSideText |Set Client-Side Text Component properties|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Set-PnPClientSideWebPart |Set Client-Side Web Part properties|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Get-PnPWebPart |Returns a web part definition object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWebPart |Removes a web part from a page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWebPartProperty |Returns a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPWebPartProperty |Sets a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPWebPartToWebPartPage |Adds a web part to a web part page in a specified zone|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPWebPartToWikiPage |Adds a web part to a wiki page in a specified table row and column|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWebPartXml |Returns the web part XML of a web part registered on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Webs 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Get-PnPAvailableLanguage |Returns the available languages on the current web|SharePoint Online, SharePoint 2019
@SharePointPnPPowerShell.Set-PnPIndexedProperties |Marks values of the propertybag to be indexed by search. Notice that this will overwrite the existing flags, i.e. only the properties you define with the cmdlet will be indexed.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPIndexedProperty |Marks the value of the propertybag key specified to be indexed by search.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPIndexedProperty |Removes a key from propertybag to be indexed by search. The key and it's value remain in the propertybag, however it will not be indexed anymore.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPIndexedPropertyKeys |Returns the keys of the property bag values that have been marked for indexing by search|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPPropertyBag |Returns the property bag values.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPPropertyBagValue |Removes a value from the property bag|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPPropertyBagValue |Sets a property bag value|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Request-PnPReIndexWeb |Marks the web for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPRequestAccessEmails |Returns the request access e-mail addresses|SharePoint Online
@SharePointPnPPowerShell.Set-PnPRequestAccessEmails |Sets Request Access Email on a web|SharePoint Online
@SharePointPnPPowerShell.Get-PnPSubWebs |Returns the subwebs of the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWeb |Returns the current web object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.New-PnPWeb |Creates a new subweb under the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWeb |Removes a subweb in the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPWeb |Sets properties on a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Invoke-PnPWebAction |Executes operations on web, lists and list items.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Set-PnPWebPermission |Set permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


### Workflows 
Cmdlet|Description|Platform
:-----|:----------|:-------
@SharePointPnPPowerShell.Add-PnPWorkflowDefinition |Adds a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWorkflowDefinition |Returns a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWorkflowDefinition |Removes a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWorkflowInstance |Gets SharePoint 2010/2013 workflow instances|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Resume-PnPWorkflowInstance |Resume a workflow|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Start-PnPWorkflowInstance |Starts a SharePoint 2010/2013 workflow instance on a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Stop-PnPWorkflowInstance |Stops a workflow instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Add-PnPWorkflowSubscription |Adds a workflow subscription to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Get-PnPWorkflowSubscription |Return a workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
@SharePointPnPPowerShell.Remove-PnPWorkflowSubscription |Removes a SharePoint 2010/2013 workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online


## Additional resources
<a name="bk_addresources"> </a>

-  [SharePoint PnP PowerShell on GitHub](https://github.com/pnp/PnP-PowerShell)
