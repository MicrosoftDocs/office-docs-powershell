#SharePoint Patterns and Practices (PnP) Cmdlets

SharePoint Patterns and Practices (PnP) contains a library of PowerShell commands (PnP PowerShell) that allows you to perform complex provisioning and artifact management actions towards SharePoint. The commands use CSOM and can work against both SharePoint Online as SharePoint On-Premises. 

![SharePoint Patterns and Practices](https://devofficecdn.azureedge.net/media/Default/PnP/sppnp.png)

_**Applies to:** SharePoint Online | SharePoint 2016 | SharePoint 2013_

## Installation #

There are 3 ways to install the cmdlets. We recommend, where possible, to install them from the [PowerShell Gallery](https://www.powershellgallery.com). Alternatively you can download the setup files or run a PowerShell script to download the PowerShellGet module and install the cmdlets subsequently.

### PowerShell Gallery ###
If you main OS is Windows 10, of if you have [PowerShellGet](https://github.com/powershell/powershellget) installed, you can run the following commands to install the PowerShell cmdlets:

|**SharePoint Version**|**Command to install**|
|------------------|------------------|
|SharePoint Online|```Install-Module SharePointPnPPowerShellOnline ```|
|SharePoint 2016|```Install-Module SharePointPnPPowerShell2016```|
|SharePoint 2013|```Install-Module SharePointPnPPowerShell2013```|

*Notice*: if you install the latest PowerShellGet from Github, you might receive an error message stating 
>PackageManagement\Install-Package : The version 'x.x.x.x' of the module 'SharePointPnPPowerShellOnline' being installed is not catalog signed.

In order to install the cmdlets when you get this error specify the -SkipPublisherCheck switch with the Install-Module cmdlet, e.g. ```Install-Module SharePointPnPPowerShellOnline -SkipPublisherCheck -AllowClobber```

### Setup files ##
You can download setup files from the [releases](https://github.com/SharePoint/pnp-powershell/releases) section of the PnP PowerShell repository. These files will up be updated on a monthly basis. Run the install and restart any open instances of PowerShell to use the cmdlets.

### Installation script ##
This is an alternative for installation on machines that have at least PowerShell v3 installed. You can find the version of PowerShell  by opening PowerShell and running ```$PSVersionTable.PSVersion```. The value for ```Major``` should be above 3.

To install the cmdlets you can run the below command which will install PowerShell Package Management and then install the PowerShell Modules from the PowerShell Gallery.

```powershell
Invoke-Expression (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/OfficeDev/PnP-PowerShell/master/Samples/Modules.Install/Install-SharePointPnPPowerShell.ps1')
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

To view all cmdlets, enter

```powershell
Get-Command -Module *PnP*
```

At the following links you will find a few videos on how to get started with the cmdlets:

* https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Web-Cast-Introduction-to-Office-365-PnP-PowerShell
* https://channel9.msdn.com/blogs/OfficeDevPnP/Introduction-to-PnP-PowerShell-Cmdlets
* https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Webcast-PnP-PowerShell-Getting-started-with-latest-updates

### Setting up credentials ##
See this [wiki page](https://github.com/SharePoint/PnP-PowerShell/wiki/How-to-use-the-Windows-Credential-Manager-to-ease-authentication-with-PnP-PowerShell) for more information on how to use the Windows Credential Manager to setup credentials that you can use in unattended scripts

## Cmdlet overview


### Apps 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPAppInstance](../../module/sharepoint-pnp/Get-PnPAppInstance.md)** |Returns a SharePoint AddIn Instance in the site|All
**[Uninstall&#8209;PnPAppInstance](../../module/sharepoint-pnp/Uninstall-PnPAppInstance.md)** |Removes an app from a site|All
**[Import&#8209;PnPAppPackage](../../module/sharepoint-pnp/Import-PnPAppPackage.md)** |Adds a SharePoint Addin to a site|All


### Base Cmdlets 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPAppAuthAccessToken](../../module/sharepoint-pnp/Get-PnPAppAuthAccessToken.md)** |Returns the access token from the current client context (In App authentication mode only)|All
**[Get&#8209;PnPAuthenticationRealm](../../module/sharepoint-pnp/Get-PnPAuthenticationRealm.md)** |Gets the authentication realm for the current web|All
**[Get&#8209;PnPAzureADManifestKeyCredentials](../../module/sharepoint-pnp/Get-PnPAzureADManifestKeyCredentials.md)** |Creates the JSON snippet that is required for the manifest JSON file for Azure WebApplication / WebAPI apps|All
**[Get&#8209;PnPContext](../../module/sharepoint-pnp/Get-PnPContext.md)** |Returns a Client Side Object Model context|All
**[Set&#8209;PnPContext](../../module/sharepoint-pnp/Set-PnPContext.md)** |Sets the Client Context to use by the cmdlets|All
**[Get&#8209;PnPHealthScore](../../module/sharepoint-pnp/Get-PnPHealthScore.md)** |Retrieves the current health score value of the server|All
**[Connect&#8209;PnPOnline](../../module/sharepoint-pnp/Connect-PnPOnline.md)** |Connects to a SharePoint site and creates a context that is required for the other PnP Cmdlets|All
**[Disconnect&#8209;PnPOnline](DisconnectPnPOnline.md)** |Disconnects the context|All
**[Get&#8209;PnPProperty](../../module/sharepoint-pnp/Get-PnPProperty.md)** |Will populate properties of an object and optionally, if needed, load the value from the server. If one property is specified its value will be returned to the output.|All
**[Execute&#8209;PnPQuery](../../module/sharepoint-pnp/Execute-PnPQuery.md)** |Executes any queued actions / changes on the SharePoint Client Side Object Model Context|All
**[Get&#8209;PnPStoredCredential](../../module/sharepoint-pnp/Get-PnPStoredCredential.md)** |Returns a stored credential from the Windows Credential Manager|All
**[Set&#8209;PnPTraceLog](../../module/sharepoint-pnp/Set-PnPTraceLog.md)** |Defines if tracing should be turned on. PnP Core, which is the foundation of these cmdlets uses the standard Trace functionality of .NET. With this cmdlet you can turn capturing of this trace to a log file on or off.|All


### Branding 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPCustomAction](../../module/sharepoint-pnp/Add-PnPCustomAction.md)** |Adds a custom action to a web|All
**[Get&#8209;PnPCustomAction](../../module/sharepoint-pnp/Get-PnPCustomAction.md)** |Returns all or a specific custom action(s)|All
**[Remove&#8209;PnPCustomAction](../../module/sharepoint-pnp/Remove-PnPCustomAction.md)** |Removes a custom action|All
**[Get&#8209;PnPHomePage](../../module/sharepoint-pnp/Get-PnPHomePage.md)** |Returns the URL to the home page|All
**[Set&#8209;PnPHomePage](../../module/sharepoint-pnp/Set-PnPHomePage.md)** |Sets the home page of the current web.|All
**[Add&#8209;PnPJavaScriptBlock](../../module/sharepoint-pnp/Add-PnPJavaScriptBlock.md)** |Adds a link to a JavaScript snippet/block to a web or site collection|All
**[Add&#8209;PnPJavaScriptLink](../../module/sharepoint-pnp/Add-PnPJavaScriptLink.md)** |Adds a link to a JavaScript file to a web or sitecollection|All
**[Get&#8209;PnPJavaScriptLink](../../module/sharepoint-pnp/Get-PnPJavaScriptLink.md)** |Returns all or a specific custom action(s) with location type ScriptLink|All
**[Remove&#8209;PnPJavaScriptLink](../../module/sharepoint-pnp/Remove-PnPJavaScriptLink.md)** |Removes a JavaScript link or block from a web or sitecollection|All
**[Get&#8209;PnPMasterPage](../../module/sharepoint-pnp/Get-PnPMasterPage.md)** |Returns the URLs of the default Master Page and the custom Master Page.|All
**[Set&#8209;PnPMasterPage](../../module/sharepoint-pnp/Set-PnPMasterPage.md)** |Sets the default master page of the current web.|All
**[Set&#8209;PnPMinimalDownloadStrategy](../../module/sharepoint-pnp/Set-PnPMinimalDownloadStrategy.md)** |Activates or deactivates the minimal downloading strategy.|All
**[Add&#8209;PnPNavigationNode](../../module/sharepoint-pnp/Add-PnPNavigationNode.md)** |Adds a menu item to either the quicklaunch or top navigation|All
**[Remove&#8209;PnPNavigationNode](../../module/sharepoint-pnp/Remove-PnPNavigationNode.md)** |Removes a menu item from either the quicklaunch or top navigation|All
**[Disable&#8209;PnPResponsiveUI](../../module/sharepoint-pnp/Disable-PnPResponsiveUI.md)** |Disables the PnP Responsive UI implementation on a classic SharePoint Site|All
**[Enable&#8209;PnPResponsiveUI](../../module/sharepoint-pnp/Enable-PnPResponsiveUI.md)** |Enables the PnP Responsive UI implementation on a classic SharePoint Site|All
**[Get&#8209;PnPTheme](../../module/sharepoint-pnp/Get-PnPTheme.md)** |Returns the current theme/composed look of the current web.|All
**[Set&#8209;PnPTheme](../../module/sharepoint-pnp/Set-PnPTheme.md)** |Sets the theme of the current web.|All


### Client-Side Pages 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPAvailableClientSideComponents](../../module/sharepoint-pnp/Get-PnPAvailableClientSideComponents.md)** |Gets the available client side components on a particular page|SharePoint Online
**[Add&#8209;PnPClientSidePage](../../module/sharepoint-pnp/Add-PnPClientSidePage.md)** |Adds a Client-Side Page|SharePoint Online
**[Get&#8209;PnPClientSidePage](../../module/sharepoint-pnp/Get-PnPClientSidePage.md)** |Gets a Client-Side Page|SharePoint Online
**[Remove&#8209;PnPClientSidePage](../../module/sharepoint-pnp/Remove-PnPClientSidePage.md)** |Removes a Client-Side Page|SharePoint Online
**[Set&#8209;PnPClientSidePage](../../module/sharepoint-pnp/Set-PnPClientSidePage.md)** |Sets parameters of a Client-Side Page|SharePoint Online
**[Add&#8209;PnPClientSidePageSection](../../module/sharepoint-pnp/Add-PnPClientSidePageSection.md)** |Adds a new section to a Client-Side page|SharePoint Online
**[Add&#8209;PnPClientSideText](../../module/sharepoint-pnp/Add-PnPClientSideText.md)** |Adds a Client-Side Page|SharePoint Online
**[Add&#8209;PnPClientSideWebPart](../../module/sharepoint-pnp/Add-PnPClientSideWebPart.md)** |Adds a Client-Side Component to a page|SharePoint Online


### Content Types 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPContentType](../../module/sharepoint-pnp/Add-PnPContentType.md)** |Adds a new content type|All
**[Get&#8209;PnPContentType](../../module/sharepoint-pnp/Get-PnPContentType.md)** |Retrieves a content type|All
**[Remove&#8209;PnPContentType](../../module/sharepoint-pnp/Remove-PnPContentType.md)** |Removes a content type from a web|All
**[Remove&#8209;PnPContentTypeFromList](../../module/sharepoint-pnp/Remove-PnPContentTypeFromList.md)** |Removes a content type from a list|All
**[Get&#8209;PnPContentTypePublishingHubUrl](../../module/sharepoint-pnp/Get-PnPContentTypePublishingHubUrl.md)** |Returns the url to Content Type Publishing Hub|All
**[Add&#8209;PnPContentTypeToList](../../module/sharepoint-pnp/Add-PnPContentTypeToList.md)** |Adds a new content type to a list|All
**[Set&#8209;PnPDefaultContentTypeToList](../../module/sharepoint-pnp/Set-PnPDefaultContentTypeToList.md)** |Sets the default content type for a list|All
**[Remove&#8209;PnPFieldFromContentType](../../module/sharepoint-pnp/Remove-PnPFieldFromContentType.md)** |Removes a site column from a content type|All
**[Add&#8209;PnPFieldToContentType](../../module/sharepoint-pnp/Add-PnPFieldToContentType.md)** |Adds an existing site column to a content type|All


### Document Sets 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Remove&#8209;PnPContentTypeFromDocumentSet](../../module/sharepoint-pnp/Remove-PnPContentTypeFromDocumentSet.md)** |Removes a content type from a document set|All
**[Add&#8209;PnPContentTypeToDocumentSet](../../module/sharepoint-pnp/Add-PnPContentTypeToDocumentSet.md)** |Adds a content type to a document set|All
**[Add&#8209;PnPDocumentSet](../../module/sharepoint-pnp/Add-PnPDocumentSet.md)** |Creates a new document set in a library.|All
**[Set&#8209;PnPDocumentSetField](../../module/sharepoint-pnp/Set-PnPDocumentSetField.md)** |Sets a site column from the available content types to a document set|All
**[Get&#8209;PnPDocumentSetTemplate](../../module/sharepoint-pnp/Get-PnPDocumentSetTemplate.md)** |Retrieves a document set template|All


### Event Receivers 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPEventReceiver](../../module/sharepoint-pnp/Add-PnPEventReceiver.md)** |Adds a new event receiver|All
**[Get&#8209;PnPEventReceiver](../../module/sharepoint-pnp/Get-PnPEventReceiver.md)** |Returns all or a specific event receiver|All
**[Remove&#8209;PnPEventReceiver](../../module/sharepoint-pnp/Remove-PnPEventReceiver.md)** |Removes/unregisters a specific event receiver|All


### Features 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[New&#8209;PnPExtensbilityHandlerObject](../../module/sharepoint-pnp/New-PnPExtensbilityHandlerObject.md)** |Creates an ExtensibilityHandler Object, to be used by the Get-SPOProvisioningTemplate cmdlet|All
**[Disable&#8209;PnPFeature](../../module/sharepoint-pnp/Disable-PnPFeature.md)** |Disables a feature|All
**[Enable&#8209;PnPFeature](../../module/sharepoint-pnp/Enable-PnPFeature.md)** |Enables a feature|All
**[Get&#8209;PnPFeature](../../module/sharepoint-pnp/Get-PnPFeature.md)** |Returns all activated or a specific activated feature|All


### Fields 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPField](../../module/sharepoint-pnp/Add-PnPField.md)** |Adds a field to a list or as a site column|All
**[Get&#8209;PnPField](../../module/sharepoint-pnp/Get-PnPField.md)** |Returns a field from a list or site|All
**[Remove&#8209;PnPField](../../module/sharepoint-pnp/Remove-PnPField.md)** |Removes a field from a list or a site|All
**[Set&#8209;PnPField](../../module/sharepoint-pnp/Set-PnPField.md)** |Changes one or more properties of a field in a specific list or for the whole web|All
**[Add&#8209;PnPFieldFromXml](../../module/sharepoint-pnp/Add-PnPFieldFromXml.md)** |Adds a field to a list or as a site column based upon a CAML/XML field definition|All
**[Add&#8209;PnPTaxonomyField](../../module/sharepoint-pnp/Add-PnPTaxonomyField.md)** |Adds a taxonomy field to a list or as a site column.|All
**[Set&#8209;PnPView](../../module/sharepoint-pnp/Set-PnPView.md)** |Changes one or more properties of a specific view|All


### Files and Folders 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPFile](../../module/sharepoint-pnp/Add-PnPFile.md)** |Uploads a file to Web|All
**[Copy&#8209;PnPFile](../../module/sharepoint-pnp/Copy-PnPFile.md)** |Copies a file or folder to a different location|All
**[Find&#8209;PnPFile](../../module/sharepoint-pnp/Find-PnPFile.md)** |Finds a file in the virtual file system of the web.|All
**[Get&#8209;PnPFile](../../module/sharepoint-pnp/Get-PnPFile.md)** |Downloads a file.|All
**[Move&#8209;PnPFile](../../module/sharepoint-pnp/Move-PnPFile.md)** |Moves a file to a different location|All
**[Remove&#8209;PnPFile](../../module/sharepoint-pnp/Remove-PnPFile.md)** |Removes a file.|All
**[Rename&#8209;PnPFile](../../module/sharepoint-pnp/Rename-PnPFile.md)** |Renames a file in its current location|All
**[Set&#8209;PnPFileCheckedIn](../../module/sharepoint-pnp/Set-PnPFileCheckedIn.md)** |Checks in a file|All
**[Set&#8209;PnPFileCheckedOut](../../module/sharepoint-pnp/Set-PnPFileCheckedOut.md)** |Checks out a file|All
**[Add&#8209;PnPFolder](../../module/sharepoint-pnp/Add-PnPFolder.md)** |Creates a folder within a parent folder|All
**[Ensure&#8209;PnPFolder](../../module/sharepoint-pnp/Ensure-PnPFolder.md)** |Returns a folder from a given site relative path, and will create it if it does not exist.|All
**[Get&#8209;PnPFolder](../../module/sharepoint-pnp/Get-PnPFolder.md)** |Return a folder object|All
**[Move&#8209;PnPFolder](../../module/sharepoint-pnp/Move-PnPFolder.md)** |Move a folder to another location in the current web|All
**[Remove&#8209;PnPFolder](../../module/sharepoint-pnp/Remove-PnPFolder.md)** |Deletes a folder within a parent folder|All
**[Rename&#8209;PnPFolder](../../module/sharepoint-pnp/Rename-PnPFolder.md)** |Renames a folder|All
**[Get&#8209;PnPFolderItem](../../module/sharepoint-pnp/Get-PnPFolderItem.md)** |List content in folder|All
**[Copy&#8209;PnPItemProxy](../../module/sharepoint-pnp/Copy-PnPItemProxy.md)** |Proxy cmdlet for using Copy-Item between SharePoint provider and FileSystem provider|All
**[Move&#8209;PnPItemProxy](../../module/sharepoint-pnp/Move-PnPItemProxy.md)** |Proxy cmdlet for using Move-Item between SharePoint provider and FileSystem provider|All


### Information Management 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPSiteClosure](../../module/sharepoint-pnp/Get-PnPSiteClosure.md)** |Get the site closure status of the site which has a site policy applied|All
**[Set&#8209;PnPSiteClosure](../../module/sharepoint-pnp/Set-PnPSiteClosure.md)** |Opens or closes a site which has a site policy applied|All
**[Set&#8209;PnPSitePolicy](../../module/sharepoint-pnp/Set-PnPSitePolicy.md)** |Sets a site policy|All
**[Get&#8209;PnPSitePolicy](../../module/sharepoint-pnp/Get-PnPSitePolicy.md)** |Retrieves all or a specific site policy|All


### Lists 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPDefaultColumnValues](../../module/sharepoint-pnp/Get-PnPDefaultColumnValues.md)** |Gets the default column values for all folders in document library|All
**[Set&#8209;PnPDefaultColumnValues](../../module/sharepoint-pnp/Set-PnPDefaultColumnValues.md)** |Sets default column values for a document library|All
**[Get&#8209;PnPList](../../module/sharepoint-pnp/Get-PnPList.md)** |Returns a List object|All
**[New&#8209;PnPList](../../module/sharepoint-pnp/New-PnPList.md)** |Creates a new list|All
**[Remove&#8209;PnPList](../../module/sharepoint-pnp/Remove-PnPList.md)** |Deletes a list|All
**[Set&#8209;PnPList](../../module/sharepoint-pnp/Set-PnPList.md)** |Updates list settings|All
**[Add&#8209;PnPListItem](../../module/sharepoint-pnp/Add-PnPListItem.md)** |Adds an item to a list|All
**[Get&#8209;PnPListItem](../../module/sharepoint-pnp/Get-PnPListItem.md)** |Retrieves list items|All
**[Remove&#8209;PnPListItem](../../module/sharepoint-pnp/Remove-PnPListItem.md)** |Deletes an item from a list|All
**[Set&#8209;PnPListItem](../../module/sharepoint-pnp/Set-PnPListItem.md)** |Updates a list item|All
**[Set&#8209;PnPListItemPermission](../../module/sharepoint-pnp/Set-PnPListItemPermission.md)** |Sets list item permissions|All
**[Move&#8209;PnPListItemToRecycleBin](../../module/sharepoint-pnp/Move-PnPListItemToRecycleBin.md)** |Moves an item from a list to the Recycle Bin|All
**[Set&#8209;PnPListPermission](../../module/sharepoint-pnp/Set-PnPListPermission.md)** |Sets list permissions|All
**[Get&#8209;PnPProvisioningTemplateFromGallery](../../module/sharepoint-pnp/Get-PnPProvisioningTemplateFromGallery.md)** |Retrieves or searches provisioning templates from the PnP Template Gallery|All
**[Request&#8209;PnPReIndexList](../../module/sharepoint-pnp/Request-PnPReIndexList.md)** |Marks the list for full indexing during the next incremental crawl|All
**[Add&#8209;PnPView](../../module/sharepoint-pnp/Add-PnPView.md)** |Adds a view to a list|All
**[Get&#8209;PnPView](../../module/sharepoint-pnp/Get-PnPView.md)** |Returns one or all views from a list|All
**[Remove&#8209;PnPView](../../module/sharepoint-pnp/Remove-PnPView.md)** |Deletes a view from a list|All


### Microsoft Graph 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Connect&#8209;PnPMicrosoftGraph](../../module/sharepoint-pnp/Connect-PnPMicrosoftGraph.md)** |Uses the Microsoft Authentication Library (Preview) to connect to Azure AD and to get an OAuth 2.0 Access Token to consume the Microsoft Graph API|All
**[Get&#8209;PnPUnifiedGroup](../../module/sharepoint-pnp/Get-PnPUnifiedGroup.md)** |Gets one Office 365 Group (aka Unified Group) or a list of Office 365 Groups|All
**[New&#8209;PnPUnifiedGroup](../../module/sharepoint-pnp/New-PnPUnifiedGroup.md)** |Creates a new Office 365 Group (aka Unified Group)|All
**[Remove&#8209;PnPUnifiedGroup](../../module/sharepoint-pnp/Remove-PnPUnifiedGroup.md)** |Removes one Office 365 Group (aka Unified Group) or a list of Office 365 Groups|All
**[Set&#8209;PnPUnifiedGroup](../../module/sharepoint-pnp/Set-PnPUnifiedGroup.md)** |Sets Office 365 Group (aka Unified Group) properties|All


### Provisioning 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPDataRowsToProvisioningTemplate](../../module/sharepoint-pnp/Add-PnPDataRowsToProvisioningTemplate.md)** |Adds datarows to a list inside a PnP Provisioning Template|All
**[Remove&#8209;PnPFileFromProvisioningTemplate](../../module/sharepoint-pnp/Remove-PnPFileFromProvisioningTemplate.md)** |Removes a file from a PnP Provisioning Template|All
**[Add&#8209;PnPFileToProvisioningTemplate](../../module/sharepoint-pnp/Add-PnPFileToProvisioningTemplate.md)** |Adds a file to a PnP Provisioning Template|All
**[Convert&#8209;PnPFolderToProvisioningTemplate](../../module/sharepoint-pnp/Convert-PnPFolderToProvisioningTemplate.md)** |Creates a pnp package file of an existing template xml, and includes all files in the current folder|All
**[Add&#8209;PnPListFoldersToProvisioningTemplate](../../module/sharepoint-pnp/Add-PnPListFoldersToProvisioningTemplate.md)** |Adds folders to a list in a PnP Provisioning Template|All
**[Apply&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/Apply-PnPProvisioningTemplate.md)** |Applies a provisioning template to a web|All
**[Convert&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/Convert-PnPProvisioningTemplate.md)** |Converts a provisioning template to an other schema version|All
**[Get&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/Get-PnPProvisioningTemplate.md)** |Generates a provisioning template from a web|All
**[Load&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/Load-PnPProvisioningTemplate.md)** |Loads a PnP file from the file systems|All
**[New&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/New-PnPProvisioningTemplate.md)** |Creates a new provisioning template object|All
**[Save&#8209;PnPProvisioningTemplate](../../module/sharepoint-pnp/Save-PnPProvisioningTemplate.md)** |Saves a PnP file to the file systems|All
**[New&#8209;PnPProvisioningTemplateFromFolder](../../module/sharepoint-pnp/New-PnPProvisioningTemplateFromFolder.md)** |Generates a provisioning template from a given folder, including only files that are present in that folder|All
**[Set&#8209;PnPProvisioningTemplateMetadata](../../module/sharepoint-pnp/Set-PnPProvisioningTemplateMetadata.md)** |Sets metadata of a provisioning template|All


### Publishing 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#8209;PnPAvailablePageLayouts](../../module/sharepoint-pnp/Set-PnPAvailablePageLayouts.md)** |Sets the available page layouts for the current site|All
**[Set&#8209;PnPDefaultPageLayout](../../module/sharepoint-pnp/Set-PnPDefaultPageLayout.md)** |Sets a specific page layout to be the default page layout for a publishing site|All
**[Add&#8209;PnPHtmlPublishingPageLayout](../../module/sharepoint-pnp/Add-PnPHtmlPublishingPageLayout.md)** |Adds a HTML based publishing page layout|All
**[Add&#8209;PnPMasterPage](../../module/sharepoint-pnp/Add-PnPMasterPage.md)** |Adds a Masterpage|All
**[Add&#8209;PnPPublishingImageRendition](../../module/sharepoint-pnp/Add-PnPPublishingImageRendition.md)** |Adds an Image Rendition if the Name of the Image Rendition does not already exist. This prevents creating two Image Renditions that share the same name.|All
**[Get&#8209;PnPPublishingImageRendition](../../module/sharepoint-pnp/Get-PnPPublishingImageRendition.md)** |Returns all image renditions or if Identity is specified a specific one|All
**[Remove&#8209;PnPPublishingImageRendition](../../module/sharepoint-pnp/Remove-PnPPublishingImageRendition.md)** |Removes an existing image rendition|All
**[Add&#8209;PnPPublishingPage](../../module/sharepoint-pnp/Add-PnPPublishingPage.md)** |Adds a publishing page|All
**[Add&#8209;PnPPublishingPageLayout](../../module/sharepoint-pnp/Add-PnPPublishingPageLayout.md)** |Adds a publishing page layout|All
**[Add&#8209;PnPWikiPage](../../module/sharepoint-pnp/Add-PnPWikiPage.md)** |Adds a wiki page|All
**[Remove&#8209;PnPWikiPage](../../module/sharepoint-pnp/Remove-PnPWikiPage.md)** |Removes a wiki page|All
**[Get&#8209;PnPWikiPageContent](../../module/sharepoint-pnp/Get-PnPWikiPageContent.md)** |Gets the contents/source of a wiki page|All
**[Set&#8209;PnPWikiPageContent](../../module/sharepoint-pnp/Set-PnPWikiPageContent.md)** |Sets the contents of a wikipage|All


### Records Management 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#8209;PnPInPlaceRecordsManagement](../../module/sharepoint-pnp/Set-PnPInPlaceRecordsManagement.md)** |Activates or deactivates in place records management|SharePoint Online
**[Clear&#8209;PnPListItemAsRecord](../../module/sharepoint-pnp/Clear-PnPListItemAsRecord.md)** |Undeclares a list item as a record|SharePoint Online
**[Set&#8209;PnPListItemAsRecord](../../module/sharepoint-pnp/Set-PnPListItemAsRecord.md)** |Declares a list item as a record|SharePoint Online
**[Test&#8209;PnPListItemIsRecord](TestPnPListItemIsRecord.md)** |Checks if a list item is a record|SharePoint Online


### Search 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPSearchConfiguration](../../module/sharepoint-pnp/Get-PnPSearchConfiguration.md)** |Returns the search configuration|All
**[Set&#8209;PnPSearchConfiguration](../../module/sharepoint-pnp/Set-PnPSearchConfiguration.md)** |Sets the search configuration|All
**[Submit&#8209;PnPSearchQuery](../../module/sharepoint-pnp/Submit-PnPSearchQuery.md)** |Executes an arbitrary search query against the SharePoint search index|All
**[Get&#8209;PnPSiteSearchQueryResults](../../module/sharepoint-pnp/Get-PnPSiteSearchQueryResults.md)** |Executes a search query to retrieve indexed site collections|All


### SharePoint Recycle Bin 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Clear&#8209;PnpRecycleBinItem](../../module/sharepoint-pnp/Clear-PnpRecycleBinItem.md)** |Permanently deletes all or a specific recycle bin item|All
**[Move&#8209;PnpRecycleBinItem](../../module/sharepoint-pnp/Move-PnpRecycleBinItem.md)** |Moves all items or a specific item in the first stage recycle bin of the current site collection to the second stage recycle bin|SharePoint Online
**[Restore&#8209;PnpRecycleBinItem](../../module/sharepoint-pnp/Restore-PnpRecycleBinItem.md)** |Restores the provided recycle bin item to its original location|All
**[Get&#8209;PnPRecycleBinItem](../../module/sharepoint-pnp/Get-PnPRecycleBinItem.md)** |Returns the items in the recycle bin from the context|All
**[Get&#8209;PnPTenantRecycleBinItem](../../module/sharepoint-pnp/Get-PnPTenantRecycleBinItem.md)** |Returns the items in the tenant scoped recycle bin|SharePoint Online


### SharePoint WebHooks 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPWebhookSubscription](../../module/sharepoint-pnp/Add-PnPWebhookSubscription.md)** |Adds a new Webhook subscription|SharePoint Online
**[Remove&#8209;PnPWebhookSubscription](../../module/sharepoint-pnp/Remove-PnPWebhookSubscription.md)** |Removes a Webhook subscription from the resource|SharePoint Online
**[Set&#8209;PnPWebhookSubscription](../../module/sharepoint-pnp/Set-PnPWebhookSubscription.md)** |Removes a Webhook subscription from the resource|SharePoint Online
**[Get&#8209;PnPWebhookSubscriptions](../../module/sharepoint-pnp/Get-PnPWebhookSubscriptions.md)** |Gets all the Webhook subscriptions of the resource|SharePoint Online


### Sites 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#8209;PnPAppSideLoading](../../module/sharepoint-pnp/Set-PnPAppSideLoading.md)** |Enables the App SideLoading Feature on a site|All
**[Get&#8209;PnPAuditing](../../module/sharepoint-pnp/Get-PnPAuditing.md)** |Get the Auditing setting of a site|All
**[Set&#8209;PnPAuditing](../../module/sharepoint-pnp/Set-PnPAuditing.md)** |Set Auditing setting for a site|All
**[Get&#8209;PnPSite](../../module/sharepoint-pnp/Get-PnPSite.md)** |Returns the current site collection from the context.|All
**[Add&#8209;PnPSiteCollectionAdmin](../../module/sharepoint-pnp/Add-PnPSiteCollectionAdmin.md)** |Adds one or more users as site collection administrators to the site collection in the current context|All
**[Get&#8209;PnPSiteCollectionAdmin](../../module/sharepoint-pnp/Get-PnPSiteCollectionAdmin.md)** |Returns the current site collection administrators of the site colleciton in the current context|All
**[Remove&#8209;PnPSiteCollectionAdmin](../../module/sharepoint-pnp/Remove-PnPSiteCollectionAdmin.md)** |Removes one or more users as site collection administrators from the site collection in the current context|All
**[Install&#8209;PnPSolution](../../module/sharepoint-pnp/Install-PnPSolution.md)** |Installs a sandboxed solution to a site collection. WARNING! This method can delete your composed look gallery due to the method used to activate the solution. We recommend you to only to use this cmdlet if you are okay with that.|All
**[Uninstall&#8209;PnPSolution](../../module/sharepoint-pnp/Uninstall-PnPSolution.md)** |Uninstalls a sandboxed solution from a site collection|All


### Taxonomy 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPSiteCollectionTermStore](../../module/sharepoint-pnp/Get-PnPSiteCollectionTermStore.md)** |Returns the site collection term store|All
**[Export&#8209;PnPTaxonomy](../../module/sharepoint-pnp/Export-PnPTaxonomy.md)** |Exports a taxonomy to either the output or to a file.|All
**[Import&#8209;PnPTaxonomy](../../module/sharepoint-pnp/Import-PnPTaxonomy.md)** |Imports a taxonomy from either a string array or a file|All
**[Set&#8209;PnPTaxonomyFieldValue](../../module/sharepoint-pnp/Set-PnPTaxonomyFieldValue.md)** |Sets a taxonomy term value in a listitem field|All
**[Get&#8209;PnPTaxonomyItem](../../module/sharepoint-pnp/Get-PnPTaxonomyItem.md)** |Returns a taxonomy item|All
**[Remove&#8209;PnPTaxonomyItem](../../module/sharepoint-pnp/Remove-PnPTaxonomyItem.md)** |Removes a taxonomy item|All
**[Get&#8209;PnPTaxonomySession](../../module/sharepoint-pnp/Get-PnPTaxonomySession.md)** |Returns a taxonomy session|All
**[Get&#8209;PnPTerm](../../module/sharepoint-pnp/Get-PnPTerm.md)** |Returns a taxonomy term|All
**[New&#8209;PnPTerm](../../module/sharepoint-pnp/New-PnPTerm.md)** |Creates a taxonomy term|All
**[Get&#8209;PnPTermGroup](../../module/sharepoint-pnp/Get-PnPTermGroup.md)** |Returns a taxonomy term group|All
**[New&#8209;PnPTermGroup](../../module/sharepoint-pnp/New-PnPTermGroup.md)** |Creates a taxonomy term group|All
**[Remove&#8209;PnPTermGroup](../../module/sharepoint-pnp/Remove-PnPTermGroup.md)** |Removes a taxonomy term group and all its containing termsets|All
**[Import&#8209;PnPTermGroupFromXml](../../module/sharepoint-pnp/Import-PnPTermGroupFromXml.md)** |Imports a taxonomy TermGroup from either the input or from an XML file.|All
**[Export&#8209;PnPTermGroupToXml](../../module/sharepoint-pnp/Export-PnPTermGroupToXml.md)** |Exports a taxonomy TermGroup to either the output or to an XML file.|All
**[Get&#8209;PnPTermSet](../../module/sharepoint-pnp/Get-PnPTermSet.md)** |Returns a taxonomy term set|All
**[Import&#8209;PnPTermSet](../../module/sharepoint-pnp/Import-PnPTermSet.md)** |Imports a taxonomy term set from a file in the standard format.|All
**[New&#8209;PnPTermSet](../../module/sharepoint-pnp/New-PnPTermSet.md)** |Creates a taxonomy term set|All


### Tenant Administration 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPAccessToken](../../module/sharepoint-pnp/Get-PnPAccessToken.md)** |Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API|All
**[Clear&#8209;PnPTenantRecycleBinItem](../../module/sharepoint-pnp/Clear-PnPTenantRecycleBinItem.md)** |Permanently deletes a site collection from the tenant scoped recycle bin|All
**[Restore&#8209;PnPTenantRecycleBinItem](../../module/sharepoint-pnp/Restore-PnPTenantRecycleBinItem.md)** |Restores a site collection from the tenant scoped recycle bin|SharePoint Online
**[Get&#8209;PnPTenantSite](../../module/sharepoint-pnp/Get-PnPTenantSite.md)** |Uses the tenant API to retrieve site information.|SharePoint Online
**[New&#8209;PnPTenantSite](../../module/sharepoint-pnp/New-PnPTenantSite.md)** |Creates a new site collection for the current tenant|All
**[Remove&#8209;PnPTenantSite](../../module/sharepoint-pnp/Remove-PnPTenantSite.md)** |Removes a site collection from the current tenant|SharePoint Online
**[Set&#8209;PnPTenantSite](../../module/sharepoint-pnp/Set-PnPTenantSite.md)** |Uses the tenant API to set site information.|SharePoint Online
**[Get&#8209;PnPTimeZoneId](../../module/sharepoint-pnp/Get-PnPTimeZoneId.md)** |Returns a time zone ID|All
**[Get&#8209;PnPWebTemplates](../../module/sharepoint-pnp/Get-PnPWebTemplates.md)** |Returns the available web templates.|SharePoint Online


### User and group management 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPGroup](../../module/sharepoint-pnp/Get-PnPGroup.md)** |Returns a specific group or all groups.|All
**[New&#8209;PnPGroup](../../module/sharepoint-pnp/New-PnPGroup.md)** |Adds group to the Site Groups List and returns a group object|All
**[Remove&#8209;PnPGroup](../../module/sharepoint-pnp/Remove-PnPGroup.md)** |Removes a group from a web.|All
**[Set&#8209;PnPGroup](../../module/sharepoint-pnp/Set-PnPGroup.md)** |Updates a group|All
**[Get&#8209;PnPGroupPermissions](../../module/sharepoint-pnp/Get-PnPGroupPermissions.md)** |Returns the permissions for a specific SharePoint group|All
**[Set&#8209;PnPGroupPermissions](../../module/sharepoint-pnp/Set-PnPGroupPermissions.md)** |Adds and/or removes permissions of a specific SharePoint group|All
**[Get&#8209;PnPUser](../../module/sharepoint-pnp/Get-PnPUser.md)** |Returns site users of current web|All
**[New&#8209;PnPUser](../../module/sharepoint-pnp/New-PnPUser.md)** |Adds a user to the built-in Site User Info List and returns a user object|All
**[Remove&#8209;PnPUser](../../module/sharepoint-pnp/Remove-PnPUser.md)** |Removes a specific user from the site collection User Information List|All
**[Remove&#8209;PnPUserFromGroup](../../module/sharepoint-pnp/Remove-PnPUserFromGroup.md)** |Removes a user from a group|All
**[Add&#8209;PnPUserToGroup](../../module/sharepoint-pnp/Add-PnPUserToGroup.md)** |Adds a user to a group|All


### User Profiles 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[New&#8209;PnPPersonalSite](../../module/sharepoint-pnp/New-PnPPersonalSite.md)** |Office365 only: Creates a personal / OneDrive For Business site|SharePoint Online
**[Get&#8209;PnPUserProfileProperty](../../module/sharepoint-pnp/Get-PnPUserProfileProperty.md)** |You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet.  |All
**[Set&#8209;PnPUserProfileProperty](../../module/sharepoint-pnp/Set-PnPUserProfileProperty.md)** |Office365 only: Uses the tenant API to retrieve site information.  You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this command.  |SharePoint Online


### Utilities 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Send&#8209;PnPMail](../../module/sharepoint-pnp/Send-PnPMail.md)** |Sends an email using the Office 365 SMTP Service or SharePoint, depending on the parameters specified. See detailed help for more information.|All


### Web Parts 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Get&#8209;PnPWebPart](../../module/sharepoint-pnp/Get-PnPWebPart.md)** |Returns a webpart definition object|All
**[Remove&#8209;PnPWebPart](../../module/sharepoint-pnp/Remove-PnPWebPart.md)** |Removes a webpart from a page|All
**[Get&#8209;PnPWebPartProperty](../../module/sharepoint-pnp/Get-PnPWebPartProperty.md)** |Returns a web part property|All
**[Set&#8209;PnPWebPartProperty](../../module/sharepoint-pnp/Set-PnPWebPartProperty.md)** |Sets a web part property|All
**[Add&#8209;PnPWebPartToWebPartPage](../../module/sharepoint-pnp/Add-PnPWebPartToWebPartPage.md)** |Adds a webpart to a web part page in a specified zone|All
**[Add&#8209;PnPWebPartToWikiPage](../../module/sharepoint-pnp/Add-PnPWebPartToWikiPage.md)** |Adds a webpart to a wiki page in a specified table row and column|All
**[Get&#8209;PnPWebPartXml](../../module/sharepoint-pnp/Get-PnPWebPartXml.md)** |Returns the webpart XML of a webpart registered on a site|All


### Webs 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Set&#8209;PnPIndexedProperties](../../module/sharepoint-pnp/Set-PnPIndexedProperties.md)** |Marks values of the propertybag to be indexed by search. Notice that this will overwrite the existing flags, i.e. only the properties you define with the cmdlet will be indexed.|All
**[Add&#8209;PnPIndexedProperty](../../module/sharepoint-pnp/Add-PnPIndexedProperty.md)** |Marks the value of the propertybag key specified to be indexed by search.|All
**[Remove&#8209;PnPIndexedProperty](../../module/sharepoint-pnp/Remove-PnPIndexedProperty.md)** |Removes a key from propertybag to be indexed by search. The key and it's value remain in the propertybag, however it will not be indexed anymore.|All
**[Get&#8209;PnPIndexedPropertyKeys](../../module/sharepoint-pnp/Get-PnPIndexedPropertyKeys.md)** |Returns the keys of the property bag values that have been marked for indexing by search|All
**[Get&#8209;PnPPropertyBag](../../module/sharepoint-pnp/Get-PnPPropertyBag.md)** |Returns the property bag values.|All
**[Remove&#8209;PnPPropertyBagValue](../../module/sharepoint-pnp/Remove-PnPPropertyBagValue.md)** |Removes a value from the property bag|All
**[Set&#8209;PnPPropertyBagValue](../../module/sharepoint-pnp/Set-PnPPropertyBagValue.md)** |Sets a property bag value|All
**[Request&#8209;PnPReIndexWeb](../../module/sharepoint-pnp/Request-PnPReIndexWeb.md)** |Marks the web for full indexing during the next incremental crawl|All
**[Get&#8209;PnPRequestAccessEmails](../../module/sharepoint-pnp/Get-PnPRequestAccessEmails.md)** |Returns the request access e-mail addresses|SharePoint Online
**[Set&#8209;PnPRequestAccessEmails](../../module/sharepoint-pnp/Set-PnPRequestAccessEmails.md)** |Sets Request Access Emails on a web|SharePoint Online
**[Get&#8209;PnPSubWebs](../../module/sharepoint-pnp/Get-PnPSubWebs.md)** |Returns the subwebs of the current web|All
**[Get&#8209;PnPWeb](../../module/sharepoint-pnp/Get-PnPWeb.md)** |Returns the current web object|All
**[New&#8209;PnPWeb](../../module/sharepoint-pnp/New-PnPWeb.md)** |Creates a new subweb under the current web|All
**[Remove&#8209;PnPWeb](../../module/sharepoint-pnp/Remove-PnPWeb.md)** |Removes a subweb in the current web|All
**[Set&#8209;PnPWeb](../../module/sharepoint-pnp/Set-PnPWeb.md)** |Sets properties on a web|All
**[Invoke&#8209;PnPWebAction](../../module/sharepoint-pnp/Invoke-PnPWebAction.md)** |Executes operations on web, lists and list items.|All
**[Set&#8209;PnPWebPermission](../../module/sharepoint-pnp/Set-PnPWebPermission.md)** |Sets web permissions|All


### Workflows 
Cmdlet|Description|Platform
:-----|:----------|:-------
**[Add&#8209;PnPWorkflowDefinition](../../module/sharepoint-pnp/Add-PnPWorkflowDefinition.md)** |Adds a workflow definition|All
**[Get&#8209;PnPWorkflowDefinition](../../module/sharepoint-pnp/Get-PnPWorkflowDefinition.md)** |Returns a workflow definition|All
**[Remove&#8209;PnPWorkflowDefinition](../../module/sharepoint-pnp/Remove-PnPWorkflowDefinition.md)** |Removes a workflow definition|All
**[Resume&#8209;PnPWorkflowInstance](ResumePnPWorkflowInstance.md)** |Resumes a previously stopped workflow instance|All
**[Stop&#8209;PnPWorkflowInstance](StopPnPWorkflowInstance.md)** |Stops a workflow instance|All
**[Add&#8209;PnPWorkflowSubscription](../../module/sharepoint-pnp/Add-PnPWorkflowSubscription.md)** |Adds a workflow subscription to a list|All
**[Get&#8209;PnPWorkflowSubscription](../../module/sharepoint-pnp/Get-PnPWorkflowSubscription.md)** |Returns a workflow subscriptions from a list|All
**[Remove&#8209;PnPWorkflowSubscription](../../module/sharepoint-pnp/Remove-PnPWorkflowSubscription.md)** |Removes a workflow subscription|All


## Additional resources
<a name="bk_addresources"> </a>

-  [SharePoint PnP PowerShell on GitHub](https://github.com/SharePoint/PnP-PowerShell)
