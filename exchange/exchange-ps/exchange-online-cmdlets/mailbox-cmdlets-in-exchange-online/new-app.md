---
title: "New-App"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: f05951d8-1e49-42b6-a341-66eb67b2870f

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-App

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-App** cmdlet to install apps for Outlook.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-App [-FileData <Byte[]>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example installs the Finance Test app manifest file that has been copied to the local hard disk.
  
```
New-App -FileData ([Byte[]](Get-Content -Encoding Byte -Path "C:\Apps\FinanceTestApp.xml" -ReadCount 0))
```

For more information, see [Install and Remove Apps for Outlook for Your Organization](http://technet.microsoft.com/library/112f3ef7-9943-4a1e-8a42-e08e8e9f67f4.aspx).
  
### Example 2

This example installs the Contoso CRM app manifest.xml from a URL on the Contoso corporate network. The Exchange server must be able to reach the target URL. This app is installed as an organization app,is made available to a specific list of users, and is enabled for those users by default.
  
```
New-App -OrganizationApp -Url https://Server01.Contoso.com/apps/ContosoCRMApp/manifest.xml -ProvidedTo SpecificUsers -UserList "user1,user2,user3,user4,user5" -DefaultStateForUser Enabled
```

For more information, see [Install and Remove Apps for Outlook for Your Organization](http://technet.microsoft.com/library/112f3ef7-9943-4a1e-8a42-e08e8e9f67f4.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

If the app is enabled for the entire organization, users can activate the new app when viewing mail or calendar items within Microsoft Outlook or Outlook on the web. If an installed app isn't enabled, users can enable the app from Outlook on the web Options. Similarly, administrators can enable installed apps from the Exchange admin center or by using the **Enable-App** or **Set-App** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AllowReadWriteMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _AllowReadWriteMailbox_ switch specifies whether the app allows read/write mailbox permission. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultStateForUser_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Extension.DefaultStateForUser  <br/> | The _DefaultStateForUser_ parameter specifies the default initial state of an organization app. Valid values are: <br/>  `Enabled`: The organization app is enabled by default.  <br/>  `Disabled`: The organization app is disabled by default. This is the default value.  <br/>  `AlwaysEnabled`: The organization app is enabled, and users can't disable it.  <br/>  You need to use the _OrganizationApp_ switch when you use this parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DownloadOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DownloadOnly_ switch specifies whether to get the app manifest file and prompt the user for confirmation before committing to actual installation. You don't need to specify a value with this switch. <br/> When you use this switch, the cmdlet only downloads the app manifest file and displays the app properties without installing the app.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether the app is available to users in the organization. Valid values are: <br/>  `$true`: The app is available to the specified users. This is the default value.  <br/>  `$false`: The app is hidden from all users in the organization.  <br/> > [!CAUTION]>  This setting overrides the _ProvidedTo_,  _UserList_, and  _DefaultStateForUser_ settings. This setting doesn't prevent users from installing their own instance of the app if they have install permissions.          |
| _Etoken_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _FileData_ <br/> |Optional  <br/> |System.Byte[]  <br/> |The  _FileData_ parameter specifies the location of the app manifest file. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the _MarketplaceServicesUrl_,  _Url_, or  _FileData_ parameter. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _FileStream_ <br/> |Optional  <br/> |System.IO.Stream  <br/> |The  _FileStream_ parameter is used only by the Exchange admin center to support the app file uploader. Don't use this parameter to specify the app manifest file. You can specify the app manifest file by using the _MarketplaceServicesUrl_,  _Url_, or  _FileData_ parameter. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox where you want to install the app. You can use any value that uniquely identifies the mailbox. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _MarketplaceAssetID_ <br/> |Optional  <br/> |System.String  <br/> |The  _MarketplaceAssetID_ parameter specifies the Office Store identifier for the app. You need to use this parameter if you use the _MarketplaceServicesUrl_ parameter. <br/> |
| _MarketplaceCorrelationID_ <br/> |Optional  <br/> |System.String  <br/> |The  _MarketplaceCorrelationID_parameter specifies the Office Store correlation identifier for the app.  <br/> |
| _MarketplaceQueryMarket_ <br/> |Optional  <br/> |System.String  <br/> |The  _MarketplaceQueryMarket_ parameter specifies the locale that an app is filed under at the office marketplace. For example, an app for the United States market in English uses the value `en-US`. The default value is `en-US`.  <br/> |
| _MarketplaceServicesUrl_ <br/> |Optional  <br/> |System.String  <br/> |The  _MarketplaceServicesUrl_ parameter specifies the full services URL for the app. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the _MarketplaceServicesUrl_,  _Url_, or  _FileData_ parameter. <br/> |
| _MarketplaceUserProfileType_ <br/> |Optional  <br/> |System.String  <br/> |The  _MarketplaceUserProfileType_ parameter specifies the user profile type for the Office Store. <br/> |
| _OrganizationApp_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _OrganizationApp_switch specifies that the scope of the app is organizational (not bound to a specific user). You don't need to specify a value with this switch.  <br/> |
| _PrivateCatalog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PrivateCatalog_ switch specifies whether the app is located in a private catalog. You don't need to specify a value with this switch. <br/> |
| _ProvidedTo_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ApplicationLogic.Extension.ClientExtensionProvidedTo  <br/> | The _ProvidedTo_ parameter specifies the availability of the app in your organization. Valid values are: <br/>  `Everyone`: This is the default value. This app is provided to every user in the organization. Every user sees this app listed in the **installed apps** list in Outlook on the web Options. When an app in the installed apps list is enabled, users can use the features of this app in their email. All users are blocked from installing their own instances of this app, including but not limited to users with install apps permissions. <br/>  `SpecificUsers`: This app is provided to only the users specified by the  _UserList_ parameter. All other users don't see this organizational app in their management view, nor will it activate in their mail or calendar items. The specified users are also blocked from installing their own instance of this app. Unlisted users aren't blocked from installing their own instance of this app. <br/>  You use this parameter with the _OrganizationApp_ switch. <br/> |
| _Url_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _Url_ parameter specifies the full URL location of the app manifest file that you want to install. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the _MarketplaceServicesUrl_,  _Url_, or  _FileData_ parameter. <br/> |
| _UserList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UserList_ parameter specifies who can usean organizational app. Valid values are mailboxes or mail users in your organization. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/>  You use this parameter with the _OrganizationApp_ switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

