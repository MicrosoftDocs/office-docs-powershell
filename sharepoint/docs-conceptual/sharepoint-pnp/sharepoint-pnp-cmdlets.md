---
title: SharePoint PnP Cmdlets
---

# PnP PowerShell overview

SharePoint Patterns and Practices (PnP) contains a library of PowerShell commands (PnP PowerShell) that allows you to perform complex provisioning and artifact management actions towards SharePoint. The commands use CSOM and REST APIs. They do work against both SharePoint Online as SharePoint on-premises.

![SharePoint Patterns and Practices](https://raw.githubusercontent.com/pnp/media/master/pnp-logos-sp/png/1x/SharePoint_PnP_logo_fullcolor.png)

_**Applies to:** SharePoint Online | Sharepoint 2019 | SharePoint 2016 | SharePoint 2013_

## Installation

There are 3 ways to install the cmdlets. We recommend, where possible, to install them from the [PowerShell Gallery](https://www.powershellgallery.com). Alternatively you can download the setup files or run a PowerShell script to download the PowerShellGet module and install the cmdlets subsequently.

### PowerShell Gallery

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

### Setup files

You can download setup files from the [releases](https://github.com/sharepoint/pnp-powershell/releases) section of the PnP PowerShell repository. These files will up be updated on a monthly basis. Run the install and restart any open instances of PowerShell to use the cmdlets.

### Installation script

This is an alternative for installation on machines that have at least PowerShell v3 installed. You can find the version of PowerShell  by opening PowerShell and running ```$PSVersionTable.PSVersion```. The value for ```Major``` should be above 3.

To install the cmdlets you can run the below command which will install PowerShell Package Management and then install the PowerShell Modules from the PowerShell Gallery.

```powershell
Invoke-Expression (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/sharepoint/PnP-PowerShell/master/Samples/Modules.Install/Install-SharePointPnPPowerShell.ps1')
```

## Updating

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

## Getting Started 

To use the library you first need to connect to your tenant:

```powershell
Connect-PnPOnline -Url https://yoursite.sharepoint.com -Credentials (Get-Credential)
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

### Setting up credentials

See this [wiki page](https://github.com/SharePoint/PnP-PowerShell/wiki/How-to-use-the-Windows-Credential-Manager-to-ease-authentication-with-PnP-PowerShell) for more information on how to use the Windows Credential Manager to setup credentials that you can use in unattended scripts

## Cmdlet overview

### Apps 

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Add-PnPApp.md)** |Add/uploads an available app to the app catalog|SharePoint Online, SharePoint 2019
**[Get&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Get-PnPApp.md)** |Returns the available apps from the app catalog|SharePoint Online, SharePoint 2019
**[Install&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Install-PnPApp.md)** |Installs an available app from the app catalog|SharePoint Online, SharePoint 2019
**[Publish&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Publish-PnPApp.md)** |Publishes/Deploys/Trusts an available app in the app catalog|SharePoint Online, SharePoint 2019
**[Remove&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Remove-PnPApp.md)** |Removes an app from the app catalog|SharePoint Online, SharePoint 2019
**[Uninstall&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Uninstall-PnPApp.md)** |Uninstalls an available add-in from the site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Unpublish&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Unpublish-PnPApp.md)** |Unpublishes/retracts an available add-in from the app catalog|SharePoint Online, SharePoint 2019
**[Update&#45;PnPApp](../../sharepoint-ps/sharepoint-pnp/Update-PnPApp.md)** |Updates an available app from the app catalog|SharePoint Online, SharePoint 2019
**[Get&#45;PnPAppInstance](../../sharepoint-ps/sharepoint-pnp/Get-PnPAppInstance.md)** |Returns a SharePoint AddIn Instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Uninstall&#45;PnPAppInstance](../../sharepoint-ps/sharepoint-pnp/Uninstall-PnPAppInstance.md)** |Removes an app from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Import&#45;PnPAppPackage](../../sharepoint-ps/sharepoint-pnp/Import-PnPAppPackage.md)** |Adds a SharePoint Addin to a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Sync&#45;PnPAppToTeams](../../sharepoint-ps/sharepoint-pnp/Sync-PnPAppToTeams.md)** |Synchronize an app from the tenant app catalog to the Microsoft Teams app catalog|SharePoint Online
**[Grant&#45;PnPTenantServicePrincipalPermission](../../sharepoint-ps/sharepoint-pnp/Grant-PnPTenantServicePrincipalPermission.md)** |Explicitly grants a specified permission to the "SharePoint Online Client" service principal|SharePoint Online


### Base Cmdlets

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPAppAuthAccessToken](../../sharepoint-ps/sharepoint-pnp/Get-PnPAppAuthAccessToken.md)** |Returns the access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPAuthenticationRealm](../../sharepoint-ps/sharepoint-pnp/Get-PnPAuthenticationRealm.md)** |Returns the authentication realm|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPAzureADManifestKeyCredentials](../../sharepoint-ps/sharepoint-pnp/Get-PnPAzureADManifestKeyCredentials.md)** |Return the JSON Manifest snippet for Azure Apps|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPAzureCertificate](../../sharepoint-ps/sharepoint-pnp/Get-PnPAzureCertificate.md)** |Get PEM values and manifest settings for an existing certificate (.pfx) for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPAzureCertificate](../../sharepoint-ps/sharepoint-pnp/New-PnPAzureCertificate.md)** |Generate a new 2048bit self-signed certificate and manifest settings for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPConnection](../../sharepoint-ps/sharepoint-pnp/Get-PnPConnection.md)** |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPContext](../../sharepoint-ps/sharepoint-pnp/Get-PnPContext.md)** |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPContext](../../sharepoint-ps/sharepoint-pnp/Set-PnPContext.md)** |Set the ClientContext|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPException](../../sharepoint-ps/sharepoint-pnp/Get-PnPException.md)** |Returns the last exception that occurred|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPHealthScore](../../sharepoint-ps/sharepoint-pnp/Get-PnPHealthScore.md)** |Retrieves the healthscore value.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Connect&#45;PnPOnline](../../sharepoint-ps/sharepoint-pnp/Connect-PnPOnline.md)** |Connect to a SharePoint site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Disconnect&#45;PnPOnline](../../sharepoint-ps/sharepoint-pnp/Disconnect-PnPOnline.md)** |Disconnects the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPProperty](../../sharepoint-ps/sharepoint-pnp/Get-PnPProperty.md)** |Returns a previously not loaded property of a ClientObject|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Invoke&#45;PnPQuery](../../sharepoint-ps/sharepoint-pnp/Invoke-PnPQuery.md)** |Executes the currently queued actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Invoke&#45;PnPSPRestMethod](../../sharepoint-ps/sharepoint-pnp/Invoke-PnPSPRestMethod.md)** |Invokes a REST request towards a SharePoint site|SharePoint Online
**[Add&#45;PnPStoredCredential](../../sharepoint-ps/sharepoint-pnp/Add-PnPStoredCredential.md)** |Adds a credential to the Windows Credential Manager|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPStoredCredential](../../sharepoint-ps/sharepoint-pnp/Get-PnPStoredCredential.md)** |Get a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPStoredCredential](../../sharepoint-ps/sharepoint-pnp/Remove-PnPStoredCredential.md)** |Removes a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPTraceLog](../../sharepoint-ps/sharepoint-pnp/Set-PnPTraceLog.md)** |Turn log tracing on or off|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Branding 

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPCustomAction](../../sharepoint-ps/sharepoint-pnp/Add-PnPCustomAction.md)** |Adds a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPCustomAction](../../sharepoint-ps/sharepoint-pnp/Get-PnPCustomAction.md)** |Return user custom actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPCustomAction](../../sharepoint-ps/sharepoint-pnp/Remove-PnPCustomAction.md)** |Removes a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPHomePage](../../sharepoint-ps/sharepoint-pnp/Get-PnPHomePage.md)** |Return the homepage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPHomePage](../../sharepoint-ps/sharepoint-pnp/Set-PnPHomePage.md)** |Sets the home page of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPJavaScriptBlock](../../sharepoint-ps/sharepoint-pnp/Add-PnPJavaScriptBlock.md)** |Adds a link to a JavaScript snippet/block to a web or site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPJavaScriptLink](../../sharepoint-ps/sharepoint-pnp/Add-PnPJavaScriptLink.md)** |Adds a link to a JavaScript file to a web or sitecollection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPJavaScriptLink](../../sharepoint-ps/sharepoint-pnp/Get-PnPJavaScriptLink.md)** |Returns all or a specific custom action(s) with location type ScriptLink|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPJavaScriptLink](../../sharepoint-ps/sharepoint-pnp/Remove-PnPJavaScriptLink.md)** |Removes a JavaScript link or block from a web or sitecollection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPMasterPage](../../sharepoint-ps/sharepoint-pnp/Get-PnPMasterPage.md)** |Returns the URLs of the default Master Page and the custom Master Page.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPMasterPage](../../sharepoint-ps/sharepoint-pnp/Set-PnPMasterPage.md)** |Set the masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPMinimalDownloadStrategy](../../sharepoint-ps/sharepoint-pnp/Set-PnPMinimalDownloadStrategy.md)** |Activates or deactivates the minimal downloading strategy.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPNavigationNode](../../sharepoint-ps/sharepoint-pnp/Add-PnPNavigationNode.md)** |Adds an item to a navigation element|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPNavigationNode](../../sharepoint-ps/sharepoint-pnp/Get-PnPNavigationNode.md)** |Returns all or a specific navigation node|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPNavigationNode](../../sharepoint-ps/sharepoint-pnp/Remove-PnPNavigationNode.md)** |Removes a menu item from either the quicklaunch or top navigation|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Disable&#45;PnPResponsiveUI](../../sharepoint-ps/sharepoint-pnp/Disable-PnPResponsiveUI.md)** |Deactivate the PnP Response UI add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Enable&#45;PnPResponsiveUI](../../sharepoint-ps/sharepoint-pnp/Enable-PnPResponsiveUI.md)** |Activates the PnP Response UI Add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTheme](../../sharepoint-ps/sharepoint-pnp/Get-PnPTheme.md)** |Returns the current theme/composed look of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPTheme](../../sharepoint-ps/sharepoint-pnp/Set-PnPTheme.md)** |Sets the theme of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPWebTheme](../../sharepoint-ps/sharepoint-pnp/Set-PnPWebTheme.md)** |Sets the theme of the current web.|SharePoint Online

### Client-Side Pages

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPAvailableClientSideComponents](../../sharepoint-ps/sharepoint-pnp/Get-PnPAvailableClientSideComponents.md)** |Gets the available client side components on a particular page|SharePoint Online, SharePoint 2019
**[Move&#45;PnPClientSideComponent](../../sharepoint-ps/sharepoint-pnp/Move-PnPClientSideComponent.md)** |Moves a Client-Side Component to a different section/column|SharePoint Online, SharePoint 2019
**[Add&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/Add-PnPClientSidePage.md)** |Adds a Client-Side Page|SharePoint Online, SharePoint 2019
**[ConvertTo&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/ConvertTo-PnPClientSidePage.md)** |Converts a classic page (wiki or web part page) into a Client-Side Page|SharePoint Online
**[Get&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/Get-PnPClientSidePage.md)** |Gets a Client-Side Page|SharePoint Online, SharePoint 2019
**[Remove&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/Remove-PnPClientSidePage.md)** |Removes a Client-Side Page|SharePoint Online, SharePoint 2019
**[Set&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/Set-PnPClientSidePage.md)** |Sets parameters of a Client-Side Page|SharePoint Online, SharePoint 2019
**[Save&#45;PnPClientSidePageConversionLog](../../sharepoint-ps/sharepoint-pnp/Save-PnPClientSidePageConversionLog.md)** |Persists the current client side page conversion log data to the loggers linked to the last used page transformation run. Needs to be used in conjunction with the -LogSkipFlush flag on the ConvertTo-PnPClientSidePage cmdlet|SharePoint Online
**[Export&#45;PnPClientSidePageMapping](../../sharepoint-ps/sharepoint-pnp/Export-PnPClientSidePageMapping.md)** |Get's the built-in maping files or a custom mapping file for your publishing portal page layouts. These mapping files are used to tailor the page transformation experience.|SharePoint Online
**[Add&#45;PnPClientSidePageSection](../../sharepoint-ps/sharepoint-pnp/Add-PnPClientSidePageSection.md)** |Adds a new section to a Client-Side page|SharePoint Online, SharePoint 2019
**[Add&#45;PnPClientSideText](../../sharepoint-ps/sharepoint-pnp/Add-PnPClientSideText.md)** |Adds a text element to a client-side page.|SharePoint Online, SharePoint 2019
**[Add&#45;PnPClientSideWebPart](../../sharepoint-ps/sharepoint-pnp/Add-PnPClientSideWebPart.md)** |Adds a Client-Side Web Part to a client-side page|SharePoint Online

### Content Types

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPContentType](../../sharepoint-ps/sharepoint-pnp/Add-PnPContentType.md)** |Adds a new content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPContentType](../../sharepoint-ps/sharepoint-pnp/Get-PnPContentType.md)** |Retrieves a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPContentType](../../sharepoint-ps/sharepoint-pnp/Remove-PnPContentType.md)** |Removes a content type from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPContentTypeFromList](../../sharepoint-ps/sharepoint-pnp/Remove-PnPContentTypeFromList.md)** |Removes a content type from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPContentTypePublishingHubUrl](../../sharepoint-ps/sharepoint-pnp/Get-PnPContentTypePublishingHubUrl.md)** |Returns the url to Content Type Publishing Hub|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPContentTypeToList](../../sharepoint-ps/sharepoint-pnp/Add-PnPContentTypeToList.md)** |Adds a new content type to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPDefaultContentTypeToList](../../sharepoint-ps/sharepoint-pnp/Set-PnPDefaultContentTypeToList.md)** |Sets the default content type for a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPFieldFromContentType](../../sharepoint-ps/sharepoint-pnp/Remove-PnPFieldFromContentType.md)** |Removes a site column from a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPFieldToContentType](../../sharepoint-ps/sharepoint-pnp/Add-PnPFieldToContentType.md)** |Adds an existing site column to a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Diagnostic utilities

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Measure&#45;PnPList](../../sharepoint-ps/sharepoint-pnp/Measure-PnPList.md)** |Returns statistics on the list object|SharePoint Online, SharePoint 2016, SharePoint 2019
**[Measure&#45;PnPResponseTime](../../sharepoint-ps/sharepoint-pnp/Measure-PnPResponseTime.md)** |Gets statistics on response time for the specified endpoint by sending probe requests|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Measure&#45;PnPWeb](../../sharepoint-ps/sharepoint-pnp/Measure-PnPWeb.md)** |Returns statistics on the web object|SharePoint Online, SharePoint 2016, SharePoint 2019

### Document Sets

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Remove&#45;PnPContentTypeFromDocumentSet](../../sharepoint-ps/sharepoint-pnp/Remove-PnPContentTypeFromDocumentSet.md)** |Removes a content type from a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPContentTypeToDocumentSet](../../sharepoint-ps/sharepoint-pnp/Add-PnPContentTypeToDocumentSet.md)** |Adds a content type to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPDocumentSet](../../sharepoint-ps/sharepoint-pnp/Add-PnPDocumentSet.md)** |Creates a new document set in a library.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPDocumentSetField](../../sharepoint-ps/sharepoint-pnp/Set-PnPDocumentSetField.md)** |Sets a site column from the available content types to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPDocumentSetTemplate](../../sharepoint-ps/sharepoint-pnp/Get-PnPDocumentSetTemplate.md)** |Retrieves a document set template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Event Receivers

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPEventReceiver](../../sharepoint-ps/sharepoint-pnp/Add-PnPEventReceiver.md)** |Adds a new remote event receiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPEventReceiver](../../sharepoint-ps/sharepoint-pnp/Get-PnPEventReceiver.md)** |Return registered eventreceivers|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPEventReceiver](../../sharepoint-ps/sharepoint-pnp/Remove-PnPEventReceiver.md)** |Remove an eventreceiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Features

Cmdlet|Description|Platform
:-----|:----------|:-------
**[New&#45;PnPExtensibilityHandlerObject](../../sharepoint-ps/sharepoint-pnp/New-PnPExtensibilityHandlerObject.md)** |Creates an ExtensibilityHandler Object, to be used by the Get-SPOProvisioningTemplate cmdlet|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Disable&#45;PnPFeature](../../sharepoint-ps/sharepoint-pnp/Disable-PnPFeature.md)** |Disables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Enable&#45;PnPFeature](../../sharepoint-ps/sharepoint-pnp/Enable-PnPFeature.md)** |Enables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPFeature](../../sharepoint-ps/sharepoint-pnp/Get-PnPFeature.md)** |Returns all activated or a specific activated feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Fields

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPField](../../sharepoint-ps/sharepoint-pnp/Add-PnPField.md)** |Add a field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPField](../../sharepoint-ps/sharepoint-pnp/Get-PnPField.md)** |Returns a field from a list or site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPField](../../sharepoint-ps/sharepoint-pnp/Remove-PnPField.md)** |Removes a field from a list or a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPField](../../sharepoint-ps/sharepoint-pnp/Set-PnPField.md)** |Changes one or more properties of a field in a specific list or for the whole web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPFieldFromXml](../../sharepoint-ps/sharepoint-pnp/Add-PnPFieldFromXml.md)** |Adds a field to a list or as a site column based upon a CAML/XML field definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPTaxonomyField](../../sharepoint-ps/sharepoint-pnp/Add-PnPTaxonomyField.md)** |Add a taxonomy field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPView](../../sharepoint-ps/sharepoint-pnp/Set-PnPView.md)** |Change view properties|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Files and Folders

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Add-PnPFile.md)** |Uploads a file to Web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Copy&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Copy-PnPFile.md)** |Copies a file or folder to a different location, currently there is a 200MB file size limit for the file to be copied.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Find&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Find-PnPFile.md)** |Finds a file in the virtual file system of the web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Get-PnPFile.md)** |Downloads a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Move&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Move-PnPFile.md)** |Moves a file to a different location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Remove-PnPFile.md)** |Removes a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Rename&#45;PnPFile](../../sharepoint-ps/sharepoint-pnp/Rename-PnPFile.md)** |Renames a file in its current location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPFileCheckedIn](../../sharepoint-ps/sharepoint-pnp/Set-PnPFileCheckedIn.md)** |Checks in a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPFileCheckedOut](../../sharepoint-ps/sharepoint-pnp/Set-PnPFileCheckedOut.md)** |Checks out a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Reset&#45;PnPFileVersion](../../sharepoint-ps/sharepoint-pnp/Reset-PnPFileVersion.md)** |Resets a file to its previous version|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Add-PnPFolder.md)** |Creates a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Get-PnPFolder.md)** |Return a folder object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Move&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Move-PnPFolder.md)** |Move a folder to another location in the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Remove-PnPFolder.md)** |Deletes a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Rename&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Rename-PnPFolder.md)** |Renames a folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Resolve&#45;PnPFolder](../../sharepoint-ps/sharepoint-pnp/Resolve-PnPFolder.md)** |Returns a folder from a given site relative path, and will create it if it does not exist.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPFolderItem](../../sharepoint-ps/sharepoint-pnp/Get-PnPFolderItem.md)** |List content in folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Copy&#45;PnPItemProxy](../../sharepoint-ps/sharepoint-pnp/Copy-PnPItemProxy.md)** |Proxy cmdlet for using Copy-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Move&#45;PnPItemProxy](../../sharepoint-ps/sharepoint-pnp/Move-PnPItemProxy.md)** |Proxy cmdlet for using Move-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Information Management

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPLabel](../../sharepoint-ps/sharepoint-pnp/Get-PnPLabel.md)** |Gets the label/tag of the specified list or library (if applicable)|SharePoint Online
**[Set&#45;PnPLabel](../../sharepoint-ps/sharepoint-pnp/Set-PnPLabel.md)** |Sets a label/tag on the specified list or library|SharePoint Online
**[Get&#45;PnPListInformationRightsManagement](../../sharepoint-ps/sharepoint-pnp/Get-PnPListInformationRightsManagement.md)** |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPListInformationRightsManagement](../../sharepoint-ps/sharepoint-pnp/Set-PnPListInformationRightsManagement.md)** |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSiteClosure](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteClosure.md)** |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPSiteClosure](../../sharepoint-ps/sharepoint-pnp/Set-PnPSiteClosure.md)** |Opens or closes a site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPSitePolicy](../../sharepoint-ps/sharepoint-pnp/Set-PnPSitePolicy.md)** |Sets a site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSitePolicy](../../sharepoint-ps/sharepoint-pnp/Get-PnPSitePolicy.md)** |Retrieves all or a specific site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Lists

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Clear&#45;PnPDefaultColumnValues](../../sharepoint-ps/sharepoint-pnp/Clear-PnPDefaultColumnValues.md)** |Clear default column values for a document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPDefaultColumnValues](../../sharepoint-ps/sharepoint-pnp/Get-PnPDefaultColumnValues.md)** |Gets the default column values for all folders in document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPDefaultColumnValues](../../sharepoint-ps/sharepoint-pnp/Set-PnPDefaultColumnValues.md)** |Sets default column values for a document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPList](../../sharepoint-ps/sharepoint-pnp/Get-PnPList.md)** |Returns a List object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPList](../../sharepoint-ps/sharepoint-pnp/New-PnPList.md)** |Creates a new list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPList](../../sharepoint-ps/sharepoint-pnp/Remove-PnPList.md)** |Deletes a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPList](../../sharepoint-ps/sharepoint-pnp/Set-PnPList.md)** |Updates list settings|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPListItem](../../sharepoint-ps/sharepoint-pnp/Add-PnPListItem.md)** |Adds an item to the list and sets the creation time to the current date and time. The author is set to the current authenticated user executing the cmdlet. In order to set the author to a different user, please refer to Set-PnPListItem.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPListItem](../../sharepoint-ps/sharepoint-pnp/Get-PnPListItem.md)** |Retrieves list items|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPListItem](../../sharepoint-ps/sharepoint-pnp/Remove-PnPListItem.md)** |Deletes an item from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPListItem](../../sharepoint-ps/sharepoint-pnp/Set-PnPListItem.md)** |Updates a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPListItemPermission](../../sharepoint-ps/sharepoint-pnp/Set-PnPListItemPermission.md)** |Sets list item permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Move&#45;PnPListItemToRecycleBin](../../sharepoint-ps/sharepoint-pnp/Move-PnPListItemToRecycleBin.md)** |Moves an item from a list to the Recycle Bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPListPermission](../../sharepoint-ps/sharepoint-pnp/Set-PnPListPermission.md)** |Sets list permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Request&#45;PnPReIndexList](../../sharepoint-ps/sharepoint-pnp/Request-PnPReIndexList.md)** |Marks the list for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPView](../../sharepoint-ps/sharepoint-pnp/Add-PnPView.md)** |Adds a view to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPView](../../sharepoint-ps/sharepoint-pnp/Get-PnPView.md)** |Returns one or all views from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPView](../../sharepoint-ps/sharepoint-pnp/Remove-PnPView.md)** |Deletes a view from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Microsoft Graph

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Connect&#45;PnPMicrosoftGraph](../../sharepoint-ps/sharepoint-pnp/Connect-PnPMicrosoftGraph.md)** |Connect to the Microsoft Graph|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteClassification.md)** |Adds one ore more site classification values to the list of possible values. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Disable&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Disable-PnPSiteClassification.md)** |Disables Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Enable&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Enable-PnPSiteClassification.md)** |Enables Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Get&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteClassification.md)** |Returns the defined Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Remove&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteClassification.md)** |Removes one or more existing site classification values from the list of available values. Requires a connection to the Microsoft Graph|SharePoint Online
**[Update&#45;PnPSiteClassification](../../sharepoint-ps/sharepoint-pnp/Update-PnPSiteClassification.md)** |Updates Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Get&#45;PnPUnifiedGroup](../../sharepoint-ps/sharepoint-pnp/Get-PnPUnifiedGroup.md)** |Gets one Office 365 Group (aka Unified Group) or a list of Office 365 Groups|SharePoint Online
**[New&#45;PnPUnifiedGroup](../../sharepoint-ps/sharepoint-pnp/New-PnPUnifiedGroup.md)** |Creates a new Office 365 Group (aka Unified Group)|SharePoint Online
**[Remove&#45;PnPUnifiedGroup](../../sharepoint-ps/sharepoint-pnp/Remove-PnPUnifiedGroup.md)** |Removes one Office 365 Group (aka Unified Group)|SharePoint Online
**[Set&#45;PnPUnifiedGroup](../../sharepoint-ps/sharepoint-pnp/Set-PnPUnifiedGroup.md)** |Sets Office 365 Group (aka Unified Group) properties|SharePoint Online
**[Get&#45;PnPUnifiedGroupMembers](../../sharepoint-ps/sharepoint-pnp/Get-PnPUnifiedGroupMembers.md)** |Gets members of a particular Office 365 Group (aka Unified Group)|SharePoint Online
**[Get&#45;PnPUnifiedGroupOwners](../../sharepoint-ps/sharepoint-pnp/Get-PnPUnifiedGroupOwners.md)** |Gets owners of a particular Office 365 Group (aka Unified Group)|SharePoint Online

### Provisioning

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Export&#45;PnPClientSidePage](../../sharepoint-ps/sharepoint-pnp/Export-PnPClientSidePage.md)** |Exports a Client Side Page to a PnP Provisioning Template|SharePoint Online
**[Add&#45;PnPDataRowsToProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Add-PnPDataRowsToProvisioningTemplate.md)** |Adds datarows to a list inside a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPFileFromProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Remove-PnPFileFromProvisioningTemplate.md)** |Removes a file from a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPFileToProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Add-PnPFileToProvisioningTemplate.md)** |Adds a file to a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Convert&#45;PnPFolderToProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Convert-PnPFolderToProvisioningTemplate.md)** |Creates a pnp package file of an existing template xml, and includes all files in the current folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPListFoldersToProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Add-PnPListFoldersToProvisioningTemplate.md)** |Adds folders to a list in a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Add-PnPProvisioningTemplate.md)** |Adds a PnP Provisioning Template object to a tenant template|SharePoint Online
**[Apply&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Apply-PnPProvisioningTemplate.md)** |Applies a site template to a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Convert&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Convert-PnPProvisioningTemplate.md)** |Converts a provisioning template to an other schema version|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Get-PnPProvisioningTemplate.md)** |Generates a provisioning site template from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/New-PnPProvisioningTemplate.md)** |Creates a new provisioning template object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Read&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Read-PnPProvisioningTemplate.md)** |Loads/Reads a PnP file from the file system or a string|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Save&#45;PnPProvisioningTemplate](../../sharepoint-ps/sharepoint-pnp/Save-PnPProvisioningTemplate.md)** |Saves a PnP site template to the file system|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPProvisioningTemplateFromFolder](../../sharepoint-ps/sharepoint-pnp/New-PnPProvisioningTemplateFromFolder.md)** |Generates a provisioning template from a given folder, including only files that are present in that folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPProvisioningTemplateMetadata](../../sharepoint-ps/sharepoint-pnp/Set-PnPProvisioningTemplateMetadata.md)** |Sets metadata of a provisioning template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPTenantSequence](../../sharepoint-ps/sharepoint-pnp/Add-PnPTenantSequence.md)** |Adds a tenant sequence object to a tenant template|SharePoint Online
**[Get&#45;PnPTenantSequence](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantSequence.md)** |Returns one ore more provisioning sequence object(s) from a tenant template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPTenantSequence](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSequence.md)** |Creates a new tenant sequence object|SharePoint Online
**[New&#45;PnPTenantSequenceCommunicationSite](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSequenceCommunicationSite.md)** |Creates a communication site object|SharePoint Online
**[Add&#45;PnPTenantSequenceSite](../../sharepoint-ps/sharepoint-pnp/Add-PnPTenantSequenceSite.md)** |Adds a existing tenant sequence site object to a tenant template|SharePoint Online
**[Get&#45;PnPTenantSequenceSite](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantSequenceSite.md)** |Returns one ore more sites from a tenant template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPTenantSequenceSubSite](../../sharepoint-ps/sharepoint-pnp/Add-PnPTenantSequenceSubSite.md)** |Adds a tenant sequence sub site object to a tenant sequence site object|SharePoint Online
**[New&#45;PnPTenantSequenceTeamNoGroupSite](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSequenceTeamNoGroupSite.md)** |Creates a new team site without an Office 365 group in-memory object|SharePoint Online
**[New&#45;PnPTenantSequenceTeamNoGroupSubSite](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSequenceTeamNoGroupSubSite.md)** |Creates a team site subsite with no Office 365 group object|SharePoint Online
**[New&#45;PnPTenantSequenceTeamSite](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSequenceTeamSite.md)** |Creates a team site object|SharePoint Online
**[Apply&#45;PnPTenantTemplate](../../sharepoint-ps/sharepoint-pnp/Apply-PnPTenantTemplate.md)** |Applies a tenant template to the current tenant. You must be a SharePoint Online global administrator to run the cmdlet.|SharePoint Online
**[New&#45;PnPTenantTemplate](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantTemplate.md)** |Creates a new tenant template object|SharePoint Online
**[Read&#45;PnPTenantTemplate](../../sharepoint-ps/sharepoint-pnp/Read-PnPTenantTemplate.md)** |Loads/Reads a PnP tenant template from the file system and returns an in-memory instance of this template.|SharePoint Online
**[Save&#45;PnPTenantTemplate](../../sharepoint-ps/sharepoint-pnp/Save-PnPTenantTemplate.md)** |Saves a PnP provisioning hierarchy to the file system|SharePoint Online
**[Test&#45;PnPTenantTemplate](../../sharepoint-ps/sharepoint-pnp/Test-PnPTenantTemplate.md)** |Tests a tenant template for invalid references|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Publishing

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#45;PnPAvailablePageLayouts](../../sharepoint-ps/sharepoint-pnp/Set-PnPAvailablePageLayouts.md)** |Sets the available page layouts for the current site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPDefaultPageLayout](../../sharepoint-ps/sharepoint-pnp/Set-PnPDefaultPageLayout.md)** |Sets a specific page layout to be the default page layout for a publishing site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPHtmlPublishingPageLayout](../../sharepoint-ps/sharepoint-pnp/Add-PnPHtmlPublishingPageLayout.md)** |Adds a HTML based publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPMasterPage](../../sharepoint-ps/sharepoint-pnp/Add-PnPMasterPage.md)** |Adds a Masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPPublishingImageRendition](../../sharepoint-ps/sharepoint-pnp/Add-PnPPublishingImageRendition.md)** |Adds an Image Rendition if the Name of the Image Rendition does not already exist. This prevents creating two Image Renditions that share the same name.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPPublishingImageRendition](../../sharepoint-ps/sharepoint-pnp/Get-PnPPublishingImageRendition.md)** |Returns all image renditions or if Identity is specified a specific one|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPPublishingImageRendition](../../sharepoint-ps/sharepoint-pnp/Remove-PnPPublishingImageRendition.md)** |Removes an existing image rendition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPPublishingPage](../../sharepoint-ps/sharepoint-pnp/Add-PnPPublishingPage.md)** |Adds a publishing page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPPublishingPageLayout](../../sharepoint-ps/sharepoint-pnp/Add-PnPPublishingPageLayout.md)** |Adds a publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPWikiPage](../../sharepoint-ps/sharepoint-pnp/Add-PnPWikiPage.md)** |Adds a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPWikiPage](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWikiPage.md)** |Removes a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWikiPageContent](../../sharepoint-ps/sharepoint-pnp/Get-PnPWikiPageContent.md)** |Gets the contents/source of a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPWikiPageContent](../../sharepoint-ps/sharepoint-pnp/Set-PnPWikiPageContent.md)** |Sets the contents of a wikipage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Records Management

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPInPlaceRecordsManagement](../../sharepoint-ps/sharepoint-pnp/Get-PnPInPlaceRecordsManagement.md)** |Returns if the place records management feature is enabled.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPInPlaceRecordsManagement](../../sharepoint-ps/sharepoint-pnp/Set-PnPInPlaceRecordsManagement.md)** |Activates or deactivates in the place records management feature.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Disable&#45;PnPInPlaceRecordsManagementForSite](../../sharepoint-ps/sharepoint-pnp/Disable-PnPInPlaceRecordsManagementForSite.md)** |Disables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Enable&#45;PnPInPlaceRecordsManagementForSite](../../sharepoint-ps/sharepoint-pnp/Enable-PnPInPlaceRecordsManagementForSite.md)** |Enables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Clear&#45;PnPListItemAsRecord](../../sharepoint-ps/sharepoint-pnp/Clear-PnPListItemAsRecord.md)** |Undeclares a list item as a record|SharePoint Online
**[Set&#45;PnPListItemAsRecord](../../sharepoint-ps/sharepoint-pnp/Set-PnPListItemAsRecord.md)** |Declares a list item as a record, for more information, see https://docs.microsoft.com/sharepoint/governance/records-management-in-sharepoint-server |SharePoint Online
**[Test&#45;PnPListItemIsRecord](../../sharepoint-ps/sharepoint-pnp/Test-PnPListItemIsRecord.md)** |Checks if a list item is a record|SharePoint Online
**[Get&#45;PnPListRecordDeclaration](../../sharepoint-ps/sharepoint-pnp/Get-PnPListRecordDeclaration.md)** |Returns the manual record declaration settings for a list|SharePoint Online
**[Set&#45;PnPListRecordDeclaration](../../sharepoint-ps/sharepoint-pnp/Set-PnPListRecordDeclaration.md)** |The RecordDeclaration parameter supports 4 values:  AlwaysAllowManualDeclaration NeverAllowManualDeclaration UseSiteCollectionDefaults |SharePoint Online

### Search

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPSearchConfiguration](../../sharepoint-ps/sharepoint-pnp/Get-PnPSearchConfiguration.md)** |Returns the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPSearchConfiguration](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSearchConfiguration.md)** |Remove the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPSearchConfiguration](../../sharepoint-ps/sharepoint-pnp/Set-PnPSearchConfiguration.md)** |Sets the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSearchCrawlLog](../../sharepoint-ps/sharepoint-pnp/Get-PnPSearchCrawlLog.md)** |Returns entries from the SharePoint search crawl log|SharePoint Online
**[Submit&#45;PnPSearchQuery](../../sharepoint-ps/sharepoint-pnp/Submit-PnPSearchQuery.md)** |Executes an arbitrary search query against the SharePoint search index|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSiteSearchQueryResults](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteSearchQueryResults.md)** |Executes a search query to retrieve indexed site collections|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### SharePoint Recycle Bin

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Clear&#45;PnPRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Clear-PnPRecycleBinItem.md)** |Permanently deletes all or a specific recycle bin item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Get-PnPRecycleBinItem.md)** |Returns the items in the recycle bin from the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Move&#45;PnPRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Move-PnPRecycleBinItem.md)** |Moves all items or a specific item in the first stage recycle bin of the current site collection to the second stage recycle bin|SharePoint Online
**[Restore&#45;PnPRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Restore-PnPRecycleBinItem.md)** |Restores the provided recycle bin item to its original location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTenantRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantRecycleBinItem.md)** |Returns all modern and classic site collections in the tenant scoped recycle bin|SharePoint Online

### SharePoint WebHooks

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPWebhookSubscription](../../sharepoint-ps/sharepoint-pnp/Add-PnPWebhookSubscription.md)** |Adds a new Webhook subscription|SharePoint Online
**[Remove&#45;PnPWebhookSubscription](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWebhookSubscription.md)** |Removes a Webhook subscription from the resource|SharePoint Online
**[Set&#45;PnPWebhookSubscription](../../sharepoint-ps/sharepoint-pnp/Set-PnPWebhookSubscription.md)** |Updates a Webhook subscription|SharePoint Online
**[Get&#45;PnPWebhookSubscriptions](../../sharepoint-ps/sharepoint-pnp/Get-PnPWebhookSubscriptions.md)** |Gets all the Webhook subscriptions of the resource|SharePoint Online

### Sites

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#45;PnPAppSideLoading](../../sharepoint-ps/sharepoint-pnp/Set-PnPAppSideLoading.md)** |Enables the App SideLoading Feature on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPAuditing](../../sharepoint-ps/sharepoint-pnp/Get-PnPAuditing.md)** |Get the Auditing setting of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPAuditing](../../sharepoint-ps/sharepoint-pnp/Set-PnPAuditing.md)** |Set Auditing setting for a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Test&#45;PnPOffice365GroupAliasIsUsed](../../sharepoint-ps/sharepoint-pnp/Test-PnPOffice365GroupAliasIsUsed.md)** |Tests if a given alias is already used used|SharePoint Online
**[Add&#45;PnPRoleDefinition](../../sharepoint-ps/sharepoint-pnp/Add-PnPRoleDefinition.md)** |Adds a Role Defintion (Permission Level) to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPRoleDefinition](../../sharepoint-ps/sharepoint-pnp/Get-PnPRoleDefinition.md)** |Retrieves a Role Definitions of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPRoleDefinition](../../sharepoint-ps/sharepoint-pnp/Remove-PnPRoleDefinition.md)** |Remove a Role Definition from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSite](../../sharepoint-ps/sharepoint-pnp/Get-PnPSite.md)** |Returns the current site collection from the context.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPSite](../../sharepoint-ps/sharepoint-pnp/Set-PnPSite.md)** |Sets Site Collection properties.|SharePoint Online
**[Add&#45;PnPSiteCollectionAdmin](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteCollectionAdmin.md)** |Adds one or more users as site collection administrators to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPSiteCollectionAdmin](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteCollectionAdmin.md)** |Returns the current site collection administrators of the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPSiteCollectionAdmin](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteCollectionAdmin.md)** |Removes one or more users as site collection administrators from the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Install&#45;PnPSolution](../../sharepoint-ps/sharepoint-pnp/Install-PnPSolution.md)** |Installs a sandboxed solution to a site collection. WARNING! This method can delete your composed look gallery due to the method used to activate the solution. We recommend you to only to use this cmdlet if you are okay with that.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Uninstall&#45;PnPSolution](../../sharepoint-ps/sharepoint-pnp/Uninstall-PnPSolution.md)** |Uninstalls a sandboxed solution from a site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Taxonomy

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPSiteCollectionTermStore](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteCollectionTermStore.md)** |Returns the site collection term store|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Export&#45;PnPTaxonomy](../../sharepoint-ps/sharepoint-pnp/Export-PnPTaxonomy.md)** |Exports a taxonomy to either the output or to a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Import&#45;PnPTaxonomy](../../sharepoint-ps/sharepoint-pnp/Import-PnPTaxonomy.md)** |Imports a taxonomy from either a string array or a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPTaxonomyFieldValue](../../sharepoint-ps/sharepoint-pnp/Set-PnPTaxonomyFieldValue.md)** |Sets a taxonomy term value in a listitem field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTaxonomyItem](../../sharepoint-ps/sharepoint-pnp/Get-PnPTaxonomyItem.md)** |Returns a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPTaxonomyItem](../../sharepoint-ps/sharepoint-pnp/Remove-PnPTaxonomyItem.md)** |Removes a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTaxonomySession](../../sharepoint-ps/sharepoint-pnp/Get-PnPTaxonomySession.md)** |Returns a taxonomy session|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTerm](../../sharepoint-ps/sharepoint-pnp/Get-PnPTerm.md)** |Returns a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPTerm](../../sharepoint-ps/sharepoint-pnp/New-PnPTerm.md)** |Creates a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTermGroup](../../sharepoint-ps/sharepoint-pnp/Get-PnPTermGroup.md)** |Returns a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPTermGroup](../../sharepoint-ps/sharepoint-pnp/New-PnPTermGroup.md)** |Creates a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPTermGroup](../../sharepoint-ps/sharepoint-pnp/Remove-PnPTermGroup.md)** |Removes a taxonomy term group and all its containing termsets|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Import&#45;PnPTermGroupFromXml](../../sharepoint-ps/sharepoint-pnp/Import-PnPTermGroupFromXml.md)** |Imports a taxonomy TermGroup from either the input or from an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Export&#45;PnPTermGroupToXml](../../sharepoint-ps/sharepoint-pnp/Export-PnPTermGroupToXml.md)** |Exports a taxonomy TermGroup to either the output or to an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPTermSet](../../sharepoint-ps/sharepoint-pnp/Get-PnPTermSet.md)** |Returns a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Import&#45;PnPTermSet](../../sharepoint-ps/sharepoint-pnp/Import-PnPTermSet.md)** |Imports a taxonomy term set from a file in the standard format.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPTermSet](../../sharepoint-ps/sharepoint-pnp/New-PnPTermSet.md)** |Creates a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Tenant Administration

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPAccessToken](../../sharepoint-ps/sharepoint-pnp/Get-PnPAccessToken.md)** |Returns the current OAuth Access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Enable&#45;PnPCommSite](../../sharepoint-ps/sharepoint-pnp/Enable-PnPCommSite.md)** |Enable communication site on the root site of a tenant|SharePoint Online
**[Get&#45;PnPHideDefaultThemes](../../sharepoint-ps/sharepoint-pnp/Get-PnPHideDefaultThemes.md)** |Returns if the default / OOTB themes should be visible to users or not.|SharePoint Online
**[Set&#45;PnPHideDefaultThemes](../../sharepoint-ps/sharepoint-pnp/Set-PnPHideDefaultThemes.md)** |Defines if the default / OOTB themes should be visible to users or not.|SharePoint Online
**[Get&#45;PnPHomeSite](../../sharepoint-ps/sharepoint-pnp/Get-PnPHomeSite.md)** |Returns the home site url for your tenant|SharePoint Online
**[Remove&#45;PnPHomeSite](../../sharepoint-ps/sharepoint-pnp/Remove-PnPHomeSite.md)** |Removes the currently set site as the home site|SharePoint Online
**[Set&#45;PnPHomeSite](../../sharepoint-ps/sharepoint-pnp/Set-PnPHomeSite.md)** |Sets the home site for your tenant|SharePoint Online
**[Get&#45;PnPHubSite](../../sharepoint-ps/sharepoint-pnp/Get-PnPHubSite.md)** |Retrieve all or a specific hubsite.|SharePoint Online
**[Register&#45;PnPHubSite](../../sharepoint-ps/sharepoint-pnp/Register-PnPHubSite.md)** |Registers a site as a hubsite|SharePoint Online
**[Set&#45;PnPHubSite](../../sharepoint-ps/sharepoint-pnp/Set-PnPHubSite.md)** |Sets hubsite properties|SharePoint Online
**[Unregister&#45;PnPHubSite](../../sharepoint-ps/sharepoint-pnp/Unregister-PnPHubSite.md)** |Unregisters a site as a hubsite|SharePoint Online
**[Add&#45;PnPHubSiteAssociation](../../sharepoint-ps/sharepoint-pnp/Add-PnPHubSiteAssociation.md)** |Connects a site to a hubsite.|SharePoint Online
**[Remove&#45;PnPHubSiteAssociation](../../sharepoint-ps/sharepoint-pnp/Remove-PnPHubSiteAssociation.md)** |Disconnects a site from a hubsite.|SharePoint Online
**[Grant&#45;PnPHubSiteRights](../../sharepoint-ps/sharepoint-pnp/Grant-PnPHubSiteRights.md)** |Grant additional permissions to the permissions already in place to associate sites to Hub Sites for one or more specific users|SharePoint Online
**[Add&#45;PnPOffice365GroupToSite](../../sharepoint-ps/sharepoint-pnp/Add-PnPOffice365GroupToSite.md)** |Groupifies a classic team site by creating an Office 365 group for it and connecting the site with the newly created group|SharePoint Online
**[Disable&#45;PnPPowerShellTelemetry](../../sharepoint-ps/sharepoint-pnp/Disable-PnPPowerShellTelemetry.md)** |Disables PnP PowerShell telemetry tracking|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Enable&#45;PnPPowerShellTelemetry](../../sharepoint-ps/sharepoint-pnp/Enable-PnPPowerShellTelemetry.md)** |Enables PnP PowerShell telemetry tracking.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPPowerShellTelemetryEnabled](../../sharepoint-ps/sharepoint-pnp/Get-PnPPowerShellTelemetryEnabled.md)** |Returns true if the PnP PowerShell Telemetry has been enabled.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPSite](../../sharepoint-ps/sharepoint-pnp/New-PnPSite.md)** |Creates a new site collection|SharePoint Online
**[Add&#45;PnPSiteCollectionAppCatalog](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteCollectionAppCatalog.md)** |Adds a Site Collection scoped App Catalog to a site|SharePoint Online
**[Remove&#45;PnPSiteCollectionAppCatalog](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteCollectionAppCatalog.md)** |Removes a Site Collection scoped App Catalog from a site|SharePoint Online
**[Add&#45;PnPSiteDesign](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteDesign.md)** |Creates a new Site Design on the current tenant.|SharePoint Online
**[Get&#45;PnPSiteDesign](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteDesign.md)** |Retrieve Site Designs that have been registered on the current tenant.|SharePoint Online
**[Invoke&#45;PnPSiteDesign](../../sharepoint-ps/sharepoint-pnp/Invoke-PnPSiteDesign.md)** |Apply a Site Design to an existing site. * Requires Tenant Administration Rights *|SharePoint Online
**[Remove&#45;PnPSiteDesign](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteDesign.md)** |Removes a Site Design|SharePoint Online
**[Set&#45;PnPSiteDesign](../../sharepoint-ps/sharepoint-pnp/Set-PnPSiteDesign.md)** |Updates a Site Design on the current tenant.|SharePoint Online
**[Get&#45;PnPSiteDesignRights](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteDesignRights.md)** |Returns the principals with design rights on a specific Site Design|SharePoint Online
**[Grant&#45;PnPSiteDesignRights](../../sharepoint-ps/sharepoint-pnp/Grant-PnPSiteDesignRights.md)** |Grants the specified principals rights to use the site design.|SharePoint Online
**[Revoke&#45;PnPSiteDesignRights](../../sharepoint-ps/sharepoint-pnp/Revoke-PnPSiteDesignRights.md)** |Revokes the specified principals rights to use the site design.|SharePoint Online
**[Get&#45;PnPSiteDesignRun](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteDesignRun.md)** |Retrieves a list of site designs applied to a specified site collection. If the WebUrl parameter is not specified we show the list of designs applied to the current site. The returned output includes the ID of the scheduled job, the web and site IDs, and the site design ID, version, and title.|SharePoint Online
**[Get&#45;PnPSiteDesignRunStatus](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteDesignRunStatus.md)** |Retrieves and displays a list of all site script actions executed for a specified site design applied to a site.|SharePoint Online
**[Add&#45;PnPSiteDesignTask](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteDesignTask.md)** |This command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-PnPSiteDesign is limited to 30 actions and subactions). This command is intended to replace Invoke-PnPSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.|SharePoint Online
**[Get&#45;PnPSiteDesignTask](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteDesignTask.md)** |Used to retrieve a scheduled site design script. It takes the ID of the scheduled site design and the URL for the site where the site design is scheduled to be applied. |SharePoint Online
**[Remove&#45;PnPSiteDesignTask](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteDesignTask.md)** |Removes a Site Design Task. If the execution of the associated site script has already started the execution will not be terminated.|SharePoint Online
**[Add&#45;PnPSiteScript](../../sharepoint-ps/sharepoint-pnp/Add-PnPSiteScript.md)** |Creates a new Site Script on the current tenant.|SharePoint Online
**[Get&#45;PnPSiteScript](../../sharepoint-ps/sharepoint-pnp/Get-PnPSiteScript.md)** |Retrieve Site Scripts that have been registered on the current tenant.|SharePoint Online
**[Remove&#45;PnPSiteScript](../../sharepoint-ps/sharepoint-pnp/Remove-PnPSiteScript.md)** |Removes a Site Script|SharePoint Online
**[Set&#45;PnPSiteScript](../../sharepoint-ps/sharepoint-pnp/Set-PnPSiteScript.md)** |Updates an existing Site Script on the current tenant.|SharePoint Online
**[Get&#45;PnPStorageEntity](../../sharepoint-ps/sharepoint-pnp/Get-PnPStorageEntity.md)** |Retrieve Storage Entities / Farm Properties from either the Tenant App Catalog or from the current site if it has a site scope app catalog.|SharePoint Online
**[Remove&#45;PnPStorageEntity](../../sharepoint-ps/sharepoint-pnp/Remove-PnPStorageEntity.md)** |Remove Storage Entities / Farm Properties from either the tenant scoped app catalog or the current site collection if the site has a site collection scoped app catalog|SharePoint Online
**[Set&#45;PnPStorageEntity](../../sharepoint-ps/sharepoint-pnp/Set-PnPStorageEntity.md)** |Set Storage Entities / Farm Properties in either the tenant scoped app catalog or the site collection app catalog.|SharePoint Online
**[Get&#45;PnPTenant](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenant.md)** |Returns organization-level site collection properties|SharePoint Online
**[Set&#45;PnPTenant](../../sharepoint-ps/sharepoint-pnp/Set-PnPTenant.md)** |Sets organization-level site collection properties|SharePoint Online
**[Get&#45;PnPTenantAppCatalogUrl](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantAppCatalogUrl.md)** |Retrieves the url of the tenant scoped app catalog.|SharePoint Online
**[Get&#45;PnPTenantCdnEnabled](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantCdnEnabled.md)** |Retrieves if the Office 365 Content Delivery Network has been enabled.|SharePoint Online
**[Set&#45;PnPTenantCdnEnabled](../../sharepoint-ps/sharepoint-pnp/Set-PnPTenantCdnEnabled.md)** |Enables or disabled the public or private Office 365 Content Delivery Network (CDN).|SharePoint Online
**[Add&#45;PnPTenantCdnOrigin](../../sharepoint-ps/sharepoint-pnp/Add-PnPTenantCdnOrigin.md)** |Adds a new origin to the public or private content delivery network (CDN).|SharePoint Online
**[Get&#45;PnPTenantCdnOrigin](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantCdnOrigin.md)** |Returns the current registered origins from the public or private content delivery network (CDN).|SharePoint Online
**[Remove&#45;PnPTenantCdnOrigin](../../sharepoint-ps/sharepoint-pnp/Remove-PnPTenantCdnOrigin.md)** |Removes an origin from the Public or Private content delivery network (CDN).|SharePoint Online
**[Get&#45;PnPTenantCdnPolicies](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantCdnPolicies.md)** |Returns the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
**[Set&#45;PnPTenantCdnPolicy](../../sharepoint-ps/sharepoint-pnp/Set-PnPTenantCdnPolicy.md)** |Sets the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
**[Clear&#45;PnPTenantRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Clear-PnPTenantRecycleBinItem.md)** |Permanently deletes a site collection from the tenant scoped recycle bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Restore&#45;PnPTenantRecycleBinItem](../../sharepoint-ps/sharepoint-pnp/Restore-PnPTenantRecycleBinItem.md)** |Restores a site collection from the tenant scoped recycle bin|SharePoint Online
**[Disable&#45;PnPTenantServicePrincipal](../../sharepoint-ps/sharepoint-pnp/Disable-PnPTenantServicePrincipal.md)** |Enables the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
**[Enable&#45;PnPTenantServicePrincipal](../../sharepoint-ps/sharepoint-pnp/Enable-PnPTenantServicePrincipal.md)** |Enables the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
**[Get&#45;PnPTenantServicePrincipal](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantServicePrincipal.md)** |Returns the current tenant's "SharePoint Online Client" service principal.|SharePoint Online
**[Revoke&#45;PnPTenantServicePrincipalPermission](../../sharepoint-ps/sharepoint-pnp/Revoke-PnPTenantServicePrincipalPermission.md)** |Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.|SharePoint Online
**[Get&#45;PnPTenantServicePrincipalPermissionGrants](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantServicePrincipalPermissionGrants.md)** |Gets the collection of permission grants for the "SharePoint Online Client" service principal|SharePoint Online
**[Approve&#45;PnPTenantServicePrincipalPermissionRequest](../../sharepoint-ps/sharepoint-pnp/Approve-PnPTenantServicePrincipalPermissionRequest.md)** |Approves a permission request for the current tenant's "SharePoint Online Client" service principal|SharePoint Online
**[Deny&#45;PnPTenantServicePrincipalPermissionRequest](../../sharepoint-ps/sharepoint-pnp/Deny-PnPTenantServicePrincipalPermissionRequest.md)** |Denies a permission request for the current tenant's "SharePoint Online Client" service principal|SharePoint Online
**[Get&#45;PnPTenantServicePrincipalPermissionRequests](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantServicePrincipalPermissionRequests.md)** |Gets the collection of permission requests for the "SharePoint Online Client" service principal|SharePoint Online
**[Get&#45;PnPTenantSite](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantSite.md)** |Retrieve site information.|SharePoint Online
**[New&#45;PnPTenantSite](../../sharepoint-ps/sharepoint-pnp/New-PnPTenantSite.md)** |Creates a new site collection for the current tenant|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPTenantSite](../../sharepoint-ps/sharepoint-pnp/Remove-PnPTenantSite.md)** |Removes a site collection|SharePoint Online
**[Set&#45;PnPTenantSite](../../sharepoint-ps/sharepoint-pnp/Set-PnPTenantSite.md)** |Set site information.|SharePoint Online
**[Add&#45;PnPTenantTheme](../../sharepoint-ps/sharepoint-pnp/Add-PnPTenantTheme.md)** |Adds or updates a theme to the tenant.|SharePoint Online
**[Get&#45;PnPTenantTheme](../../sharepoint-ps/sharepoint-pnp/Get-PnPTenantTheme.md)** |Returns all or a specific theme|SharePoint Online
**[Remove&#45;PnPTenantTheme](../../sharepoint-ps/sharepoint-pnp/Remove-PnPTenantTheme.md)** |Removes a theme|SharePoint Online
**[Get&#45;PnPTimeZoneId](../../sharepoint-ps/sharepoint-pnp/Get-PnPTimeZoneId.md)** |Returns a time zone ID|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWebTemplates](../../sharepoint-ps/sharepoint-pnp/Get-PnPWebTemplates.md)** |Returns the available web templates.|SharePoint Online

### User and group management

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPAlert](../../sharepoint-ps/sharepoint-pnp/Add-PnPAlert.md)** |Adds an alert for a user to a list|SharePoint Online, SharePoint 2019
**[Get&#45;PnPAlert](../../sharepoint-ps/sharepoint-pnp/Get-PnPAlert.md)** |Returns registered alerts for a user.|SharePoint Online, SharePoint 2019
**[Remove&#45;PnPAlert](../../sharepoint-ps/sharepoint-pnp/Remove-PnPAlert.md)** |Removes an alert for a user|SharePoint Online, SharePoint 2019
**[Get&#45;PnPGroup](../../sharepoint-ps/sharepoint-pnp/Get-PnPGroup.md)** |Returns a specific SharePoint group or all SharePoint groups in site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPGroup](../../sharepoint-ps/sharepoint-pnp/New-PnPGroup.md)** |Adds group to the Site Groups List and returns a group object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPGroup](../../sharepoint-ps/sharepoint-pnp/Remove-PnPGroup.md)** |Removes a group from a web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPGroup](../../sharepoint-ps/sharepoint-pnp/Set-PnPGroup.md)** |Updates a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPGroupMembers](../../sharepoint-ps/sharepoint-pnp/Get-PnPGroupMembers.md)** |Retrieves all members of a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPGroupPermissions](../../sharepoint-ps/sharepoint-pnp/Get-PnPGroupPermissions.md)** |Returns the permissions for a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPGroupPermissions](../../sharepoint-ps/sharepoint-pnp/Set-PnPGroupPermissions.md)** |Adds and/or removes permissions of a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPUser](../../sharepoint-ps/sharepoint-pnp/Get-PnPUser.md)** |Returns site users of current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPUser](../../sharepoint-ps/sharepoint-pnp/New-PnPUser.md)** |Adds a user to the built-in Site User Info List and returns a user object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPUser](../../sharepoint-ps/sharepoint-pnp/Remove-PnPUser.md)** |Removes a specific user from the site collection User Information List|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPUserFromGroup](../../sharepoint-ps/sharepoint-pnp/Remove-PnPUserFromGroup.md)** |Removes a user from a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPUserToGroup](../../sharepoint-ps/sharepoint-pnp/Add-PnPUserToGroup.md)** |Adds a user to a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### User Profiles

Cmdlet|Description|Platform
:-----|:----------|:-------
**[New&#45;PnPPersonalSite](../../sharepoint-ps/sharepoint-pnp/New-PnPPersonalSite.md)** |Office365 only: Creates a personal / OneDrive For Business site|SharePoint Online
**[New&#45;PnPUPABulkImportJob](../../sharepoint-ps/sharepoint-pnp/New-PnPUPABulkImportJob.md)** |Submit up a new user profile bulk import job.|SharePoint Online
**[Get&#45;PnPUPABulkImportStatus](../../sharepoint-ps/sharepoint-pnp/Get-PnPUPABulkImportStatus.md)** |Get user profile bulk import status.|SharePoint Online
**[Get&#45;PnPUserProfileProperty](../../sharepoint-ps/sharepoint-pnp/Get-PnPUserProfileProperty.md)** |You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet.  |SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPUserProfileProperty](../../sharepoint-ps/sharepoint-pnp/Set-PnPUserProfileProperty.md)** |Office365 only: Uses the tenant API to retrieve site information.  You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this command.  |SharePoint Online

### Utilities

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Send&#45;PnPMail](../../sharepoint-ps/sharepoint-pnp/Send-PnPMail.md)** |Sends an email using the Office 365 SMTP Service or SharePoint, depending on the parameters specified. See detailed help for more information.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Web Parts

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#45;PnPClientSideComponent](../../sharepoint-ps/sharepoint-pnp/Get-PnPClientSideComponent.md)** |Retrieve one or more Client-Side components from a page|SharePoint Online, SharePoint 2019
**[Remove&#45;PnPClientSideComponent](../../sharepoint-ps/sharepoint-pnp/Remove-PnPClientSideComponent.md)** |Removes a Client-Side component from a page|SharePoint Online, SharePoint 2019
**[Set&#45;PnPClientSideText](../../sharepoint-ps/sharepoint-pnp/Set-PnPClientSideText.md)** |Set Client-Side Text Component properties|SharePoint Online, SharePoint 2019
**[Set&#45;PnPClientSideWebPart](../../sharepoint-ps/sharepoint-pnp/Set-PnPClientSideWebPart.md)** |Set Client-Side Web Part properties|SharePoint Online, SharePoint 2019
**[Get&#45;PnPWebPart](../../sharepoint-ps/sharepoint-pnp/Get-PnPWebPart.md)** |Returns a web part definition object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPWebPart](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWebPart.md)** |Removes a web part from a page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWebPartProperty](../../sharepoint-ps/sharepoint-pnp/Get-PnPWebPartProperty.md)** |Returns a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPWebPartProperty](../../sharepoint-ps/sharepoint-pnp/Set-PnPWebPartProperty.md)** |Sets a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPWebPartToWebPartPage](../../sharepoint-ps/sharepoint-pnp/Add-PnPWebPartToWebPartPage.md)** |Adds a web part to a web part page in a specified zone|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPWebPartToWikiPage](../../sharepoint-ps/sharepoint-pnp/Add-PnPWebPartToWikiPage.md)** |Adds a web part to a wiki page in a specified table row and column|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWebPartXml](../../sharepoint-ps/sharepoint-pnp/Get-PnPWebPartXml.md)** |Returns the web part XML of a web part registered on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Webs

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#45;PnPIndexedProperties](../../sharepoint-ps/sharepoint-pnp/Set-PnPIndexedProperties.md)** |Marks values of the propertybag to be indexed by search. Notice that this will overwrite the existing flags, i.e. only the properties you define with the cmdlet will be indexed.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPIndexedProperty](../../sharepoint-ps/sharepoint-pnp/Add-PnPIndexedProperty.md)** |Marks the value of the propertybag key specified to be indexed by search.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPIndexedProperty](../../sharepoint-ps/sharepoint-pnp/Remove-PnPIndexedProperty.md)** |Removes a key from propertybag to be indexed by search. The key and it's value remain in the propertybag, however it will not be indexed anymore.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPIndexedPropertyKeys](../../sharepoint-ps/sharepoint-pnp/Get-PnPIndexedPropertyKeys.md)** |Returns the keys of the property bag values that have been marked for indexing by search|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPPropertyBag](../../sharepoint-ps/sharepoint-pnp/Get-PnPPropertyBag.md)** |Returns the property bag values.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPPropertyBagValue](../../sharepoint-ps/sharepoint-pnp/Remove-PnPPropertyBagValue.md)** |Removes a value from the property bag|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPPropertyBagValue](../../sharepoint-ps/sharepoint-pnp/Set-PnPPropertyBagValue.md)** |Sets a property bag value|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Request&#45;PnPReIndexWeb](../../sharepoint-ps/sharepoint-pnp/Request-PnPReIndexWeb.md)** |Marks the web for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPRequestAccessEmails](../../sharepoint-ps/sharepoint-pnp/Get-PnPRequestAccessEmails.md)** |Returns the request access e-mail addresses|SharePoint Online
**[Set&#45;PnPRequestAccessEmails](../../sharepoint-ps/sharepoint-pnp/Set-PnPRequestAccessEmails.md)** |Sets Request Access Emails on a web|SharePoint Online
**[Get&#45;PnPSubWebs](../../sharepoint-ps/sharepoint-pnp/Get-PnPSubWebs.md)** |Returns the subwebs of the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWeb](../../sharepoint-ps/sharepoint-pnp/Get-PnPWeb.md)** |Returns the current web object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[New&#45;PnPWeb](../../sharepoint-ps/sharepoint-pnp/New-PnPWeb.md)** |Creates a new subweb under the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPWeb](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWeb.md)** |Removes a subweb in the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPWeb](../../sharepoint-ps/sharepoint-pnp/Set-PnPWeb.md)** |Sets properties on a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Invoke&#45;PnPWebAction](../../sharepoint-ps/sharepoint-pnp/Invoke-PnPWebAction.md)** |Executes operations on web, lists and list items.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Set&#45;PnPWebPermission](../../sharepoint-ps/sharepoint-pnp/Set-PnPWebPermission.md)** |Set permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

### Workflows

Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#45;PnPWorkflowDefinition](../../sharepoint-ps/sharepoint-pnp/Add-PnPWorkflowDefinition.md)** |Adds a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWorkflowDefinition](../../sharepoint-ps/sharepoint-pnp/Get-PnPWorkflowDefinition.md)** |Returns a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPWorkflowDefinition](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWorkflowDefinition.md)** |Removes a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWorkflowInstance](../../sharepoint-ps/sharepoint-pnp/Get-PnPWorkflowInstance.md)** |Get workflow instances|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Resume&#45;PnPWorkflowInstance](../../sharepoint-ps/sharepoint-pnp/Resume-PnPWorkflowInstance.md)** |Resume a workflow|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Start&#45;PnPWorkflowInstance](../../sharepoint-ps/sharepoint-pnp/Start-PnPWorkflowInstance.md)** |Starts a workflow instance on a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Stop&#45;PnPWorkflowInstance](../../sharepoint-ps/sharepoint-pnp/Stop-PnPWorkflowInstance.md)** |Stops a workflow instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Add&#45;PnPWorkflowSubscription](../../sharepoint-ps/sharepoint-pnp/Add-PnPWorkflowSubscription.md)** |Adds a workflow subscription to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Get&#45;PnPWorkflowSubscription](../../sharepoint-ps/sharepoint-pnp/Get-PnPWorkflowSubscription.md)** |Return a workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
**[Remove&#45;PnPWorkflowSubscription](../../sharepoint-ps/sharepoint-pnp/Remove-PnPWorkflowSubscription.md)** |Remove workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online

## Additional resources
<a name="bk_addresources"> </a>

* [SharePoint PnP PowerShell on GitHub](https://github.com/SharePoint/PnP-PowerShell)
