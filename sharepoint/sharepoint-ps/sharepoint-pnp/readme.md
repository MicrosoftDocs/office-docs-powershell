# Cmdlet Documentation #
Below you can find a list of all the available cmdlets. Many commands provide built-in help and examples. Retrieve the detailed help with 

```powershell
Get-Help Connect-PnPOnline -Detailed
```

## Apps
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPApp](Add-PnPApp.md)** |Add/uploads an available app to the app catalog|SharePoint Online
**[Get&#8209;PnPApp](Get-PnPApp.md)** |Returns the available apps from the app catalog|SharePoint Online
**[Install&#8209;PnPApp](Install-PnPApp.md)** |Installs an available app from the app catalog|SharePoint Online
**[Publish&#8209;PnPApp](Publish-PnPApp.md)** |Publishes/Deploys/Trusts an available app in the app catalog|SharePoint Online
**[Remove&#8209;PnPApp](Remove-PnPApp.md)** |Removes an app from the app catalog|SharePoint Online
**[Uninstall&#8209;PnPApp](Uninstall-PnPApp.md)** |Uninstalls an available add-in from the site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Unpublish&#8209;PnPApp](Unpublish-PnPApp.md)** |Unpublishes/retracts an available add-in from the app catalog|SharePoint Online
**[Update&#8209;PnPApp](Update-PnPApp.md)** |Updates an available app from the app catalog|SharePoint Online
**[Get&#8209;PnPAppInstance](Get-PnPAppInstance.md)** |Returns a SharePoint AddIn Instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Uninstall&#8209;PnPAppInstance](Uninstall-PnPAppInstance.md)** |Removes an app from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Import&#8209;PnPAppPackage](Import-PnPAppPackage.md)** |Adds a SharePoint Addin to a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Base Cmdlets
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPAppAuthAccessToken](Get-PnPAppAuthAccessToken.md)** |Returns the access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPAuthenticationRealm](Get-PnPAuthenticationRealm.md)** |Returns the authentication realm|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPAzureADManifestKeyCredentials](Get-PnPAzureADManifestKeyCredentials.md)** |Return the JSON Manifest snippet for Azure Apps|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPAzureCertificate](Get-PnPAzureCertificate.md)** |Get PEM values and manifest settings for an existing certificate (.pfx) for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPAzureCertificate](New-PnPAzureCertificate.md)** |Generate a new 2048bit self-signed certificate and manifest settings for use when using CSOM via an app-only ADAL application.  See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.  KeyCredentials contains the ADAL app manifest sections.  Certificate contains the PEM encoded certificate.  PrivateKey contains the PEM encoded private key of the certificate.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPConnection](Get-PnPConnection.md)** |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPContext](Get-PnPContext.md)** |Returns the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPContext](Set-PnPContext.md)** |Set the ClientContext|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPHealthScore](Get-PnPHealthScore.md)** |Retrieves the healthscore|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Connect&#8209;PnPOnline](Connect-PnPOnline.md)** |Connect to a SharePoint site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Disconnect&#8209;PnPOnline](Disconnect-PnPOnline.md)** |Disconnects the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPProperty](Get-PnPProperty.md)** |Returns a previously not loaded property of a ClientObject|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Invoke&#8209;PnPQuery](Invoke-PnPQuery.md)** |Executes the currently queued actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPStoredCredential](Add-PnPStoredCredential.md)** |Adds a credential to the Windows Credential Manager|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPStoredCredential](Get-PnPStoredCredential.md)** |Get a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPStoredCredential](Remove-PnPStoredCredential.md)** |Removes a credential|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPTraceLog](Set-PnPTraceLog.md)** |Turn log tracing on or off|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Branding
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPCustomAction](Add-PnPCustomAction.md)** |Adds a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPCustomAction](Get-PnPCustomAction.md)** |Return user custom actions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPCustomAction](Remove-PnPCustomAction.md)** |Removes a custom action|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPHomePage](Get-PnPHomePage.md)** |Return the homepage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPHomePage](Set-PnPHomePage.md)** |Sets the home page of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPJavaScriptBlock](Add-PnPJavaScriptBlock.md)** |Adds a link to a JavaScript snippet/block to a web or site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPJavaScriptLink](Add-PnPJavaScriptLink.md)** |Adds a link to a JavaScript file to a web or sitecollection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPJavaScriptLink](Get-PnPJavaScriptLink.md)** |Returns all or a specific custom action(s) with location type ScriptLink|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPJavaScriptLink](Remove-PnPJavaScriptLink.md)** |Removes a JavaScript link or block from a web or sitecollection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPMasterPage](Get-PnPMasterPage.md)** |Returns the URLs of the default Master Page and the custom Master Page.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPMasterPage](Set-PnPMasterPage.md)** |Set the masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPMinimalDownloadStrategy](Set-PnPMinimalDownloadStrategy.md)** |Activates or deactivates the minimal downloading strategy.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPNavigationNode](Add-PnPNavigationNode.md)** |Adds an item to a navigation element|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPNavigationNode](Get-PnPNavigationNode.md)** |Returns all or a specific navigation node|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPNavigationNode](Remove-PnPNavigationNode.md)** |Removes a menu item from either the quicklaunch or top navigation|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Disable&#8209;PnPResponsiveUI](Disable-PnPResponsiveUI.md)** |Deactive the PnP Response UI add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Enable&#8209;PnPResponsiveUI](Enable-PnPResponsiveUI.md)** |Activates the PnP Response UI Add-on|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTheme](Get-PnPTheme.md)** |Returns the current theme/composed look of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPTheme](Set-PnPTheme.md)** |Sets the theme of the current web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPWebTheme](Set-PnPWebTheme.md)** |Sets the theme of the current web.|SharePoint Online
## Client-Side Pages
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPAvailableClientSideComponents](Get-PnPAvailableClientSideComponents.md)** |Gets the available client side components on a particular page|SharePoint Online
**[Move&#8209;PnPClientSideComponent](Move-PnPClientSideComponent.md)** |Moves a Client-Side Component to a different section/column|SharePoint Online
**[Add&#8209;PnPClientSidePage](Add-PnPClientSidePage.md)** |Adds a Client-Side Page|SharePoint Online
**[Get&#8209;PnPClientSidePage](Get-PnPClientSidePage.md)** |Gets a Client-Side Page|SharePoint Online
**[Remove&#8209;PnPClientSidePage](Remove-PnPClientSidePage.md)** |Removes a Client-Side Page|SharePoint Online
**[Set&#8209;PnPClientSidePage](Set-PnPClientSidePage.md)** |Sets parameters of a Client-Side Page|SharePoint Online
**[Add&#8209;PnPClientSidePageSection](Add-PnPClientSidePageSection.md)** |Adds a new section to a Client-Side page|SharePoint Online
**[Add&#8209;PnPClientSideText](Add-PnPClientSideText.md)** |Adds a text element to a client-side page.|SharePoint Online
**[Add&#8209;PnPClientSideWebPart](Add-PnPClientSideWebPart.md)** |Adds a Client-Side Web Part to a client-side page|SharePoint Online
## Content Types
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPContentType](Add-PnPContentType.md)** |Adds a new content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPContentType](Get-PnPContentType.md)** |Retrieves a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPContentType](Remove-PnPContentType.md)** |Removes a content type from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPContentTypeFromList](Remove-PnPContentTypeFromList.md)** |Removes a content type from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPContentTypePublishingHubUrl](Get-PnPContentTypePublishingHubUrl.md)** |Returns the url to Content Type Publishing Hub|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPContentTypeToList](Add-PnPContentTypeToList.md)** |Adds a new content type to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPDefaultContentTypeToList](Set-PnPDefaultContentTypeToList.md)** |Sets the default content type for a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPFieldFromContentType](Remove-PnPFieldFromContentType.md)** |Removes a site column from a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPFieldToContentType](Add-PnPFieldToContentType.md)** |Adds an existing site column to a content type|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Diagnostic utilites
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Measure&#8209;PnPList](Measure-PnPList.md)** |Returns statistics on the list object|SharePoint Online, SharePoint 2016
**[Measure&#8209;PnPResponseTime](Measure-PnPResponseTime.md)** |Gets statistics on response time for the specified endpoint by sending probe requests|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Measure&#8209;PnPWeb](Measure-PnPWeb.md)** |Returns statistics on the web object|SharePoint Online, SharePoint 2016
## Document Sets
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Remove&#8209;PnPContentTypeFromDocumentSet](Remove-PnPContentTypeFromDocumentSet.md)** |Removes a content type from a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPContentTypeToDocumentSet](Add-PnPContentTypeToDocumentSet.md)** |Adds a content type to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPDocumentSet](Add-PnPDocumentSet.md)** |Creates a new document set in a library.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPDocumentSetField](Set-PnPDocumentSetField.md)** |Sets a site column from the available content types to a document set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPDocumentSetTemplate](Get-PnPDocumentSetTemplate.md)** |Retrieves a document set template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Event Receivers
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPEventReceiver](Add-PnPEventReceiver.md)** |Adds a new remote event receiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPEventReceiver](Get-PnPEventReceiver.md)** |Return registered eventreceivers|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPEventReceiver](Remove-PnPEventReceiver.md)** |Remove an eventreceiver|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Features
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[New&#8209;PnPExtensibilityHandlerObject](New-PnPExtensibilityHandlerObject.md)** |Creates an ExtensibilityHandler Object, to be used by the Get-SPOProvisioningTemplate cmdlet|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Disable&#8209;PnPFeature](Disable-PnPFeature.md)** |Disables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Enable&#8209;PnPFeature](Enable-PnPFeature.md)** |Enables a feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPFeature](Get-PnPFeature.md)** |Returns all activated or a specific activated feature|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Fields
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPField](Add-PnPField.md)** |Add a field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPField](Get-PnPField.md)** |Returns a field from a list or site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPField](Remove-PnPField.md)** |Removes a field from a list or a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPField](Set-PnPField.md)** |Changes one or more properties of a field in a specific list or for the whole web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPFieldFromXml](Add-PnPFieldFromXml.md)** |Adds a field to a list or as a site column based upon a CAML/XML field definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPTaxonomyField](Add-PnPTaxonomyField.md)** |Add a taxonomy field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPView](Set-PnPView.md)** |Change view properties|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Files and Folders
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPFile](Add-PnPFile.md)** |Uploads a file to Web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Copy&#8209;PnPFile](Copy-PnPFile.md)** |Copies a file or folder to a different location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Find&#8209;PnPFile](Find-PnPFile.md)** |Finds a file in the virtual file system of the web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPFile](Get-PnPFile.md)** |Downloads a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Move&#8209;PnPFile](Move-PnPFile.md)** |Moves a file to a different location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPFile](Remove-PnPFile.md)** |Removes a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Rename&#8209;PnPFile](Rename-PnPFile.md)** |Renames a file in its current location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPFileCheckedIn](Set-PnPFileCheckedIn.md)** |Checks in a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPFileCheckedOut](Set-PnPFileCheckedOut.md)** |Checks out a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPFolder](Add-PnPFolder.md)** |Creates a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPFolder](Get-PnPFolder.md)** |Return a folder object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Move&#8209;PnPFolder](Move-PnPFolder.md)** |Move a folder to another location in the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPFolder](Remove-PnPFolder.md)** |Deletes a folder within a parent folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Rename&#8209;PnPFolder](Rename-PnPFolder.md)** |Renames a folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Resolve&#8209;PnPFolder](Resolve-PnPFolder.md)** |Returns a folder from a given site relative path, and will create it if it does not exist.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPFolderItem](Get-PnPFolderItem.md)** |List content in folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Copy&#8209;PnPItemProxy](Copy-PnPItemProxy.md)** |Proxy cmdlet for using Copy-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Move&#8209;PnPItemProxy](Move-PnPItemProxy.md)** |Proxy cmdlet for using Move-Item between SharePoint provider and FileSystem provider|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Information Management
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPSiteClosure](Get-PnPSiteClosure.md)** |Get the site closure status of the site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPSiteClosure](Set-PnPSiteClosure.md)** |Opens or closes a site which has a site policy applied|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPSitePolicy](Set-PnPSitePolicy.md)** |Sets a site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPSitePolicy](Get-PnPSitePolicy.md)** |Retrieves all or a specific site policy|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Lists
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPDefaultColumnValues](Get-PnPDefaultColumnValues.md)** |Gets the default column values for all folders in document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPDefaultColumnValues](Set-PnPDefaultColumnValues.md)** |Sets default column values for a document library|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPList](Get-PnPList.md)** |Returns a List object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPList](New-PnPList.md)** |Creates a new list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPList](Remove-PnPList.md)** |Deletes a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPList](Set-PnPList.md)** |Updates list settings|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPListItem](Add-PnPListItem.md)** |Adds an item to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPListItem](Get-PnPListItem.md)** |Retrieves list items|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPListItem](Remove-PnPListItem.md)** |Deletes an item from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPListItem](Set-PnPListItem.md)** |Updates a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPListItemPermission](Set-PnPListItemPermission.md)** |Sets list item permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Move&#8209;PnPListItemToRecycleBin](Move-PnPListItemToRecycleBin.md)** |Moves an item from a list to the Recycle Bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPListPermission](Set-PnPListPermission.md)** |Sets list permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPProvisioningTemplateFromGallery](Get-PnPProvisioningTemplateFromGallery.md)** |Retrieves or searches provisioning templates from the PnP Template Gallery|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Request&#8209;PnPReIndexList](Request-PnPReIndexList.md)** |Marks the list for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPView](Add-PnPView.md)** |Adds a view to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPView](Get-PnPView.md)** |Returns one or all views from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPView](Remove-PnPView.md)** |Deletes a view from a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Microsoft Graph
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Connect&#8209;PnPMicrosoftGraph](Connect-PnPMicrosoftGraph.md)** |Connect to the Microsoft Graph|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPSiteClassification](Add-PnPSiteClassification.md)** |Adds one ore more site classification values to the list of possible values. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Disable&#8209;PnPSiteClassification](Disable-PnPSiteClassification.md)** |Disables Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Enable&#8209;PnPSiteClassification](Enable-PnPSiteClassification.md)** |Enables Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Get&#8209;PnPSiteClassification](Get-PnPSiteClassification.md)** |Returns the defined Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Remove&#8209;PnPSiteClassification](Remove-PnPSiteClassification.md)** |Removes one or more existing site classification values from the list of available values. Requires a connection to the Microsoft Graph|SharePoint Online
**[Update&#8209;PnPSiteClassification](Update-PnPSiteClassification.md)** |Updates Site Classifications for the tenant. Requires a connection to the Microsoft Graph.|SharePoint Online
**[Get&#8209;PnPUnifiedGroup](Get-PnPUnifiedGroup.md)** |Gets one Office 365 Group (aka Unified Group) or a list of Office 365 Groups|SharePoint Online
**[New&#8209;PnPUnifiedGroup](New-PnPUnifiedGroup.md)** |Creates a new Office 365 Group (aka Unified Group)|SharePoint Online
**[Remove&#8209;PnPUnifiedGroup](Remove-PnPUnifiedGroup.md)** |Removes one Office 365 Group (aka Unified Group) or a list of Office 365 Groups|SharePoint Online
**[Set&#8209;PnPUnifiedGroup](Set-PnPUnifiedGroup.md)** |Sets Office 365 Group (aka Unified Group) properties|SharePoint Online
**[Get&#8209;PnPUnifiedGroupMembers](Get-PnPUnifiedGroupMembers.md)** |Gets members of a paricular Office 365 Group (aka Unified Group)|SharePoint Online
**[Get&#8209;PnPUnifiedGroupOwners](Get-PnPUnifiedGroupOwners.md)** |Gets owners of a paricular Office 365 Group (aka Unified Group)|SharePoint Online
## Provisioning
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPDataRowsToProvisioningTemplate](Add-PnPDataRowsToProvisioningTemplate.md)** |Adds datarows to a list inside a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPFileFromProvisioningTemplate](Remove-PnPFileFromProvisioningTemplate.md)** |Removes a file from a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPFileToProvisioningTemplate](Add-PnPFileToProvisioningTemplate.md)** |Adds a file to a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Convert&#8209;PnPFolderToProvisioningTemplate](Convert-PnPFolderToProvisioningTemplate.md)** |Creates a pnp package file of an existing template xml, and includes all files in the current folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPListFoldersToProvisioningTemplate](Add-PnPListFoldersToProvisioningTemplate.md)** |Adds folders to a list in a PnP Provisioning Template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Apply&#8209;PnPProvisioningTemplate](Apply-PnPProvisioningTemplate.md)** |Applies a provisioning template to a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Convert&#8209;PnPProvisioningTemplate](Convert-PnPProvisioningTemplate.md)** |Converts a provisioning template to an other schema version|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPProvisioningTemplate](Get-PnPProvisioningTemplate.md)** |Generates a provisioning template from a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPProvisioningTemplate](New-PnPProvisioningTemplate.md)** |Creates a new provisioning template object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Read&#8209;PnPProvisioningTemplate](Read-PnPProvisioningTemplate.md)** |Loads/Reads a PnP file from the file system|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Save&#8209;PnPProvisioningTemplate](Save-PnPProvisioningTemplate.md)** |Saves a PnP file to the file systems|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPProvisioningTemplateFromFolder](New-PnPProvisioningTemplateFromFolder.md)** |Generates a provisioning template from a given folder, including only files that are present in that folder|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPProvisioningTemplateMetadata](Set-PnPProvisioningTemplateMetadata.md)** |Sets metadata of a provisioning template|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Publishing
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Set&#8209;PnPAvailablePageLayouts](Set-PnPAvailablePageLayouts.md)** |Sets the available page layouts for the current site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPDefaultPageLayout](Set-PnPDefaultPageLayout.md)** |Sets a specific page layout to be the default page layout for a publishing site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPHtmlPublishingPageLayout](Add-PnPHtmlPublishingPageLayout.md)** |Adds a HTML based publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPMasterPage](Add-PnPMasterPage.md)** |Adds a Masterpage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPPublishingImageRendition](Add-PnPPublishingImageRendition.md)** |Adds an Image Rendition if the Name of the Image Rendition does not already exist. This prevents creating two Image Renditions that share the same name.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPPublishingImageRendition](Get-PnPPublishingImageRendition.md)** |Returns all image renditions or if Identity is specified a specific one|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPPublishingImageRendition](Remove-PnPPublishingImageRendition.md)** |Removes an existing image rendition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPPublishingPage](Add-PnPPublishingPage.md)** |Adds a publishing page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPPublishingPageLayout](Add-PnPPublishingPageLayout.md)** |Adds a publishing page layout|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPWikiPage](Add-PnPWikiPage.md)** |Adds a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPWikiPage](Remove-PnPWikiPage.md)** |Removes a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWikiPageContent](Get-PnPWikiPageContent.md)** |Gets the contents/source of a wiki page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPWikiPageContent](Set-PnPWikiPageContent.md)** |Sets the contents of a wikipage|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Records Management
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Set&#8209;PnPInPlaceRecordsManagement](Set-PnPInPlaceRecordsManagement.md)** |Activates or deactivates in the place records management feature.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Disable&#8209;PnPInPlaceRecordsManagementForSite](Disable-PnPInPlaceRecordsManagementForSite.md)** |Disables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Enable&#8209;PnPInPlaceRecordsManagementForSite](Enable-PnPInPlaceRecordsManagementForSite.md)** |Enables in place records management for a site.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Clear&#8209;PnPListItemAsRecord](Clear-PnPListItemAsRecord.md)** |Undeclares a list item as a record|SharePoint Online
**[Set&#8209;PnPListItemAsRecord](Set-PnPListItemAsRecord.md)** |Declares a list item as a record|SharePoint Online
**[Test&#8209;PnPListItemIsRecord](Test-PnPListItemIsRecord.md)** |Checks if a list item is a record|SharePoint Online
## Search
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPSearchConfiguration](Get-PnPSearchConfiguration.md)** |Returns the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPSearchConfiguration](Set-PnPSearchConfiguration.md)** |Sets the search configuration|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Submit&#8209;PnPSearchQuery](Submit-PnPSearchQuery.md)** |Executes an arbitrary search query against the SharePoint search index|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPSiteSearchQueryResults](Get-PnPSiteSearchQueryResults.md)** |Executes a search query to retrieve indexed site collections|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## SharePoint Recycle Bin
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Clear&#8209;PnPRecycleBinItem](Clear-PnPRecycleBinItem.md)** |Permanently deletes all or a specific recycle bin item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPRecycleBinItem](Get-PnPRecycleBinItem.md)** |Returns the items in the recycle bin from the context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Move&#8209;PnPRecycleBinItem](Move-PnPRecycleBinItem.md)** |Moves all items or a specific item in the first stage recycle bin of the current site collection to the second stage recycle bin|SharePoint Online
**[Restore&#8209;PnPRecycleBinItem](Restore-PnPRecycleBinItem.md)** |Restores the provided recycle bin item to its original location|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTenantRecycleBinItem](Get-PnPTenantRecycleBinItem.md)** |Returns the items in the tenant scoped recycle bin|SharePoint Online
## SharePoint WebHooks
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPWebhookSubscription](Add-PnPWebhookSubscription.md)** |Adds a new Webhook subscription|SharePoint Online
**[Remove&#8209;PnPWebhookSubscription](Remove-PnPWebhookSubscription.md)** |Removes a Webhook subscription from the resource|SharePoint Online
**[Set&#8209;PnPWebhookSubscription](Set-PnPWebhookSubscription.md)** |Updates a Webhook subscription|SharePoint Online
**[Get&#8209;PnPWebhookSubscriptions](Get-PnPWebhookSubscriptions.md)** |Gets all the Webhook subscriptions of the resource|SharePoint Online
## Sites
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Set&#8209;PnPAppSideLoading](Set-PnPAppSideLoading.md)** |Enables the App SideLoading Feature on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPAuditing](Get-PnPAuditing.md)** |Get the Auditing setting of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPAuditing](Set-PnPAuditing.md)** |Set Auditing setting for a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Test&#8209;PnPOffice365GroupAliasIsUsed](Test-PnPOffice365GroupAliasIsUsed.md)** |Tests if a given alias is already used used|SharePoint Online
**[Add&#8209;PnPRoleDefinition](Add-PnPRoleDefinition.md)** |Adds a Role Defintion (Permission Level) to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPRoleDefinition](Get-PnPRoleDefinition.md)** |Retrieves a Role Definitions of a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPRoleDefinition](Remove-PnPRoleDefinition.md)** |Remove a Role Definition from a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPSite](Get-PnPSite.md)** |Returns the current site collection from the context.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPSite](Set-PnPSite.md)** |Sets Site Collection properties.|SharePoint Online
**[Add&#8209;PnPSiteCollectionAdmin](Add-PnPSiteCollectionAdmin.md)** |Adds one or more users as site collection administrators to the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPSiteCollectionAdmin](Get-PnPSiteCollectionAdmin.md)** |Returns the current site collection administrators of the site colleciton in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPSiteCollectionAdmin](Remove-PnPSiteCollectionAdmin.md)** |Removes one or more users as site collection administrators from the site collection in the current context|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Install&#8209;PnPSolution](Install-PnPSolution.md)** |Installs a sandboxed solution to a site collection. WARNING! This method can delete your composed look gallery due to the method used to activate the solution. We recommend you to only to use this cmdlet if you are okay with that.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Uninstall&#8209;PnPSolution](Uninstall-PnPSolution.md)** |Uninstalls a sandboxed solution from a site collection|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Taxonomy
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPSiteCollectionTermStore](Get-PnPSiteCollectionTermStore.md)** |Returns the site collection term store|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Export&#8209;PnPTaxonomy](Export-PnPTaxonomy.md)** |Exports a taxonomy to either the output or to a file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Import&#8209;PnPTaxonomy](Import-PnPTaxonomy.md)** |Imports a taxonomy from either a string array or a file|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPTaxonomyFieldValue](Set-PnPTaxonomyFieldValue.md)** |Sets a taxonomy term value in a listitem field|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTaxonomyItem](Get-PnPTaxonomyItem.md)** |Returns a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPTaxonomyItem](Remove-PnPTaxonomyItem.md)** |Removes a taxonomy item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTaxonomySession](Get-PnPTaxonomySession.md)** |Returns a taxonomy session|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTerm](Get-PnPTerm.md)** |Returns a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPTerm](New-PnPTerm.md)** |Creates a taxonomy term|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTermGroup](Get-PnPTermGroup.md)** |Returns a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPTermGroup](New-PnPTermGroup.md)** |Creates a taxonomy term group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPTermGroup](Remove-PnPTermGroup.md)** |Removes a taxonomy term group and all its containing termsets|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Import&#8209;PnPTermGroupFromXml](Import-PnPTermGroupFromXml.md)** |Imports a taxonomy TermGroup from either the input or from an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Export&#8209;PnPTermGroupToXml](Export-PnPTermGroupToXml.md)** |Exports a taxonomy TermGroup to either the output or to an XML file.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPTermSet](Get-PnPTermSet.md)** |Returns a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Import&#8209;PnPTermSet](Import-PnPTermSet.md)** |Imports a taxonomy term set from a file in the standard format.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPTermSet](New-PnPTermSet.md)** |Creates a taxonomy term set|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Tenant Administration
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPAccessToken](Get-PnPAccessToken.md)** |Returns the current OAuth Access token|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Connect&#8209;PnPHubSite](Connect-PnPHubSite.md)** |Connects a site to a hubsite.|SharePoint Online
**[Disconnect&#8209;PnPHubSite](Disconnect-PnPHubSite.md)** |Disconnects a site from a hubsite.|SharePoint Online
**[Get&#8209;PnPHubSite](Get-PnPHubSite.md)** |Retrieve all or a specific hubsite.|SharePoint Online
**[Register&#8209;PnPHubSite](Register-PnPHubSite.md)** |Registers a site as a hubsite|SharePoint Online
**[Set&#8209;PnPHubSite](Set-PnPHubSite.md)** |Sets hubsite properties|SharePoint Online
**[Unregister&#8209;PnPHubSite](Unregister-PnPHubSite.md)** |Unregisters a site as a hubsite|SharePoint Online
**[Grant&#8209;PnPHubSiteRights](Grant-PnPHubSiteRights.md)** |Retrieve all or a specific hubsite.|SharePoint Online
**[Add&#8209;PnPOffice365GroupToSite](Add-PnPOffice365GroupToSite.md)** |Groupifies a classic team site by creating an Office 365 group for it and connecting the site with the newly created group|SharePoint Online
**[New&#8209;PnPSite](New-PnPSite.md)** |BETA: This cmdlet is using early release APIs. Notice that functionality and parameters can change. Creates a new site collection|SharePoint Online
**[Add&#8209;PnPSiteCollectionAppCatalog](Add-PnPSiteCollectionAppCatalog.md)** |Adds a Site Collection scoped App Catalog to a site|SharePoint Online
**[Remove&#8209;PnPSiteCollectionAppCatalog](Remove-PnPSiteCollectionAppCatalog.md)** |Removes a Site Collection scoped App Catalog from a site|SharePoint Online
**[Add&#8209;PnPSiteDesign](Add-PnPSiteDesign.md)** |Creates a new Site Design on the current tenant.|SharePoint Online
**[Get&#8209;PnPSiteDesign](Get-PnPSiteDesign.md)** |Retrieve Site Designs that have been registered on the current tenant.|SharePoint Online
**[Invoke&#8209;PnPSiteDesign](Invoke-PnPSiteDesign.md)** |Apply a Site Design to an existing site. * Requires Tenant Administration Rights *|SharePoint Online
**[Remove&#8209;PnPSiteDesign](Remove-PnPSiteDesign.md)** |Removes a Site Design|SharePoint Online
**[Set&#8209;PnPSiteDesign](Set-PnPSiteDesign.md)** |Updates a Site Design on the current tenant.|SharePoint Online
**[Get&#8209;PnPSiteDesignRights](Get-PnPSiteDesignRights.md)** |Returns the principals with design rights on a specific Site Design|SharePoint Online
**[Grant&#8209;PnPSiteDesignRights](Grant-PnPSiteDesignRights.md)** |Grants the specified principals rights to use the site design.|SharePoint Online
**[Revoke&#8209;PnPSiteDesignRights](Revoke-PnPSiteDesignRights.md)** |Revokes the specified principals rights to use the site design.|SharePoint Online
**[Add&#8209;PnPSiteScript](Add-PnPSiteScript.md)** |Creates a new Site Script on the current tenant.|SharePoint Online
**[Get&#8209;PnPSiteScript](Get-PnPSiteScript.md)** |Retrieve Site Scripts that have been registered on the current tenant.|SharePoint Online
**[Remove&#8209;PnPSiteScript](Remove-PnPSiteScript.md)** |Removes a Site Script|SharePoint Online
**[Set&#8209;PnPSiteScript](Set-PnPSiteScript.md)** |Updates an existing Site Script on the current tenant.|SharePoint Online
**[Get&#8209;PnPStorageEntity](Get-PnPStorageEntity.md)** |Retrieve Storage Entities / Farm Properties.|SharePoint Online
**[Remove&#8209;PnPStorageEntity](Remove-PnPStorageEntity.md)** |Remove Storage Entities / Farm Properties.|SharePoint Online
**[Set&#8209;PnPStorageEntity](Set-PnPStorageEntity.md)** |Set Storage Entities / Farm Properties.|SharePoint Online
**[Get&#8209;PnPTenant](Get-PnPTenant.md)** |Returns organization-level site collection properties|SharePoint Online
**[Set&#8209;PnPTenant](Set-PnPTenant.md)** |Returns organization-level site collection properties|SharePoint Online
**[Get&#8209;PnPTenantAppCatalogUrl](Get-PnPTenantAppCatalogUrl.md)** |Retrieves the url of the tenant scoped app catalog.|SharePoint Online
**[Get&#8209;PnPTenantCdnEnabled](Get-PnPTenantCdnEnabled.md)** |Retrieves if the Office 365 Content Delivery Network has been enabled.|SharePoint Online
**[Set&#8209;PnPTenantCdnEnabled](Set-PnPTenantCdnEnabled.md)** |Enables or disabled the public or private Office 365 Content Delivery Network (CDN).|SharePoint Online
**[Add&#8209;PnPTenantCdnOrigin](Add-PnPTenantCdnOrigin.md)** |Adds a new origin to the public or private content delivery network (CDN).|SharePoint Online
**[Get&#8209;PnPTenantCdnOrigin](Get-PnPTenantCdnOrigin.md)** |Returns the current registered origins from the public or private content delivery network (CDN).|SharePoint Online
**[Remove&#8209;PnPTenantCdnOrigin](Remove-PnPTenantCdnOrigin.md)** |Removes an origin from the Public or Private content delivery network (CDN).|SharePoint Online
**[Get&#8209;PnPTenantCdnPolicies](Get-PnPTenantCdnPolicies.md)** |Returns the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
**[Set&#8209;PnPTenantCdnPolicy](Set-PnPTenantCdnPolicy.md)** |Sets the CDN Policies for the specified CDN (Public | Private).|SharePoint Online
**[Clear&#8209;PnPTenantRecycleBinItem](Clear-PnPTenantRecycleBinItem.md)** |Permanently deletes a site collection from the tenant scoped recycle bin|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Restore&#8209;PnPTenantRecycleBinItem](Restore-PnPTenantRecycleBinItem.md)** |Restores a site collection from the tenant scoped recycle bin|SharePoint Online
**[Get&#8209;PnPTenantSite](Get-PnPTenantSite.md)** |Retrieve site information.|SharePoint Online
**[New&#8209;PnPTenantSite](New-PnPTenantSite.md)** |Creates a new site collection for the current tenant|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPTenantSite](Remove-PnPTenantSite.md)** |Removes a site collection|SharePoint Online
**[Set&#8209;PnPTenantSite](Set-PnPTenantSite.md)** |Set site information.|SharePoint Online
**[Add&#8209;PnPTenantTheme](Add-PnPTenantTheme.md)** |Adds or updates a theme to the tenant.|SharePoint Online
**[Get&#8209;PnPTenantTheme](Get-PnPTenantTheme.md)** |Returns all or a specific theme|SharePoint Online
**[Remove&#8209;PnPTenantTheme](Remove-PnPTenantTheme.md)** |Removes a theme|SharePoint Online
**[Get&#8209;PnPTimeZoneId](Get-PnPTimeZoneId.md)** |Returns a time zone ID|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWebTemplates](Get-PnPWebTemplates.md)** |Returns the available web templates.|SharePoint Online
## User and group management
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPGroup](Get-PnPGroup.md)** |Returns a specific group or all groups.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPGroup](New-PnPGroup.md)** |Adds group to the Site Groups List and returns a group object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPGroup](Remove-PnPGroup.md)** |Removes a group from a web.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPGroup](Set-PnPGroup.md)** |Updates a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPGroupMembers](Get-PnPGroupMembers.md)** |Retrieves all members of a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPGroupPermissions](Get-PnPGroupPermissions.md)** |Returns the permissions for a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPGroupPermissions](Set-PnPGroupPermissions.md)** |Adds and/or removes permissions of a specific SharePoint group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPUser](Get-PnPUser.md)** |Returns site users of current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPUser](New-PnPUser.md)** |Adds a user to the built-in Site User Info List and returns a user object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPUser](Remove-PnPUser.md)** |Removes a specific user from the site collection User Information List|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPUserFromGroup](Remove-PnPUserFromGroup.md)** |Removes a user from a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPUserToGroup](Add-PnPUserToGroup.md)** |Adds a user to a group|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## User Profiles
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[New&#8209;PnPPersonalSite](New-PnPPersonalSite.md)** |Office365 only: Creates a personal / OneDrive For Business site|SharePoint Online
**[Get&#8209;PnPUserProfileProperty](Get-PnPUserProfileProperty.md)** |You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet.  |SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPUserProfileProperty](Set-PnPUserProfileProperty.md)** |Office365 only: Uses the tenant API to retrieve site information.  You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this command.  |SharePoint Online
## Utilities
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Send&#8209;PnPMail](Send-PnPMail.md)** |Sends an email using the Office 365 SMTP Service or SharePoint, depending on the parameters specified. See detailed help for more information.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Web Parts
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Get&#8209;PnPClientSideComponent](Get-PnPClientSideComponent.md)** |Retrieve one or more Client-Side components from a page|SharePoint Online
**[Remove&#8209;PnPClientSideComponent](Remove-PnPClientSideComponent.md)** |Removes a Client-Side component from a page|SharePoint Online
**[Set&#8209;PnPClientSideText](Set-PnPClientSideText.md)** |Set Client-Side Text Component properties|SharePoint Online
**[Set&#8209;PnPClientSideWebPart](Set-PnPClientSideWebPart.md)** |Set Client-Side Web Part properties|SharePoint Online
**[Get&#8209;PnPWebPart](Get-PnPWebPart.md)** |Returns a webpart definition object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPWebPart](Remove-PnPWebPart.md)** |Removes a webpart from a page|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWebPartProperty](Get-PnPWebPartProperty.md)** |Returns a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPWebPartProperty](Set-PnPWebPartProperty.md)** |Sets a web part property|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPWebPartToWebPartPage](Add-PnPWebPartToWebPartPage.md)** |Adds a webpart to a web part page in a specified zone|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPWebPartToWikiPage](Add-PnPWebPartToWikiPage.md)** |Adds a webpart to a wiki page in a specified table row and column|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWebPartXml](Get-PnPWebPartXml.md)** |Returns the webpart XML of a webpart registered on a site|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Webs
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Set&#8209;PnPIndexedProperties](Set-PnPIndexedProperties.md)** |Marks values of the propertybag to be indexed by search. Notice that this will overwrite the existing flags, i.e. only the properties you define with the cmdlet will be indexed.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPIndexedProperty](Add-PnPIndexedProperty.md)** |Marks the value of the propertybag key specified to be indexed by search.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPIndexedProperty](Remove-PnPIndexedProperty.md)** |Removes a key from propertybag to be indexed by search. The key and it's value remain in the propertybag, however it will not be indexed anymore.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPIndexedPropertyKeys](Get-PnPIndexedPropertyKeys.md)** |Returns the keys of the property bag values that have been marked for indexing by search|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPPropertyBag](Get-PnPPropertyBag.md)** |Returns the property bag values.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPPropertyBagValue](Remove-PnPPropertyBagValue.md)** |Removes a value from the property bag|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPPropertyBagValue](Set-PnPPropertyBagValue.md)** |Sets a property bag value|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Request&#8209;PnPReIndexWeb](Request-PnPReIndexWeb.md)** |Marks the web for full indexing during the next incremental crawl|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPRequestAccessEmails](Get-PnPRequestAccessEmails.md)** |Returns the request access e-mail addresses|SharePoint Online
**[Set&#8209;PnPRequestAccessEmails](Set-PnPRequestAccessEmails.md)** |Sets Request Access Emails on a web|SharePoint Online
**[Get&#8209;PnPSubWebs](Get-PnPSubWebs.md)** |Returns the subwebs of the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWeb](Get-PnPWeb.md)** |Returns the current web object|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[New&#8209;PnPWeb](New-PnPWeb.md)** |Creates a new subweb under the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPWeb](Remove-PnPWeb.md)** |Removes a subweb in the current web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPWeb](Set-PnPWeb.md)** |Sets properties on a web|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Invoke&#8209;PnPWebAction](Invoke-PnPWebAction.md)** |Executes operations on web, lists and list items.|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Set&#8209;PnPWebPermission](Set-PnPWebPermission.md)** |Set permissions|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
## Workflows
Cmdlet|Description|Platforms
:-----|:----------|:--------
**[Add&#8209;PnPWorkflowDefinition](Add-PnPWorkflowDefinition.md)** |Adds a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWorkflowDefinition](Get-PnPWorkflowDefinition.md)** |Returns a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPWorkflowDefinition](Remove-PnPWorkflowDefinition.md)** |Removes a workflow definition|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWorkflowInstance](Get-PnPWorkflowInstance.md)** |Get workflow instances|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Resume&#8209;PnPWorkflowInstance](Resume-PnPWorkflowInstance.md)** |Resume a workflow|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Start&#8209;PnPWorkflowInstance](Start-PnPWorkflowInstance.md)** |Starts a workflow instance on a list item|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Stop&#8209;PnPWorkflowInstance](Stop-PnPWorkflowInstance.md)** |Stops a workflow instance|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Add&#8209;PnPWorkflowSubscription](Add-PnPWorkflowSubscription.md)** |Adds a workflow subscription to a list|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Get&#8209;PnPWorkflowSubscription](Get-PnPWorkflowSubscription.md)** |Return a workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
**[Remove&#8209;PnPWorkflowSubscription](Remove-PnPWorkflowSubscription.md)** |Remove workflow subscription|SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
