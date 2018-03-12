---
title: "Set-OfflineAddressBook"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 1221dda7-1923-4fec-a756-7540e18ae9f9
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-OfflineAddressBook

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-OfflineAddressBook** cmdlet to modify offline address book (OAB) settings.
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-OfflineAddressBook -Identity <OfflineAddressBookIdParameter> [-AddressLists <AddressBookBaseIdParameter[]>] [-ApplyMandatoryProperties <SwitchParameter>] [-ConfiguredAttributes <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DiffRetentionPeriod <Unlimited>] [-DomainController <Fqdn>] [-FullOabDownloadPreventionThreshold <Int32>] [-GeneratingMailbox <MailboxIdParameter>] [-GlobalWebDistributionEnabled <$true | $false>] [-HttpHomeMdbLastProcessedBucket <Int32>] [-IsDefault <$true | $false>] [-MaxBinaryPropertySize <Int32>] [-MaxMultivaluedBinaryPropertySize <Int32>] [-MaxMultivaluedStringPropertySize <Int32>] [-MaxStringPropertySize <Int32>] [-Name <String>] [-Schedule <Schedule>] [-ShadowMailboxDistributionEnabled <$true | $false>] [-UpgradeFromE14 <SwitchParameter>] [-UseDefaultAttributes <SwitchParameter>] [-Versions <MultiValuedProperty>] [-VirtualDirectories <VirtualDirectoryIdParameter[]>] [-WhatIf [<SwitchParameter>]] [-ZipOabFilesBeforeUploading <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the OAB named Default Offline Address Book to be available for download requests from all OAB virtual directories in the organization.
  
```
Set-OfflineAddressBook -Identity "Default Offline Address Book" -VirtualDirectories $null -GlobalWebDistributionEnabled $true
```

### Example 2

This example changes the organization mailbox that's responsible for generating the OAB.
  
```
Set-OfflineAddressBook -Identity "\Default Offline Address Book" -GeneratingMailbox OABGen2
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OfflineAddressBookIdParameter  <br/> | The _Identity_ parameter specifies the OAB that you want to modify. You can use any value that uniquely identifies the OAB. For example: <br/>  Name or \Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AddressLists_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressBookBaseIdParameter[]  <br/> | The _AddressLists_ parameter specifies the address lists or global address lists that are included in the OAB. You can use any value that uniquely identifies the address list. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/>  You can find the identify values of address lists and global address lists by using the **Get-AddressList** and **Get-GlobalAddressList** cmdlets. <br/> |
| _ApplyMandatoryProperties_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ApplyMandatoryProperties_switch specifies whether to update the mandatory properties of a legacy OAB. You don't need to specify a value with this switch.  <br/> This switch was used in coexistence environments when an OAB was migrated from Exchange 2003.  <br/> |
| _ConfiguredAttributes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ConfiguredAttributes_ parameter specifies the recipient MAPI propertiesthat are available in the OAB. This parameter uses the syntax: `"<Name1>,<Type1>","<Name2>,<Type2>"...` where `<Name>` is the name of the MAPI property (for example, `MobileTelephoneNumber`), and  `<Type>` is the value `ANR` (ambiguous name resolution), `Value`, or  `Indicator`.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> To reset this parameter back to the default values, use the  _UseDefaultAttributes_ switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DiffRetentionPeriod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _DiffRetentionPeriod_ parameter specifies the number of days that the OAB difference files are stored on the server. Valid values are integers from 7 to 1825, or the value `unlimited`. The default value is 30.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FullOabDownloadPreventionThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _GeneratingMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _GeneratingMailbox_ parameter specifies the arbitration mailbox where the OAB is generated. Specifically, the arbitration mailbox must contain the `OrganizationCapabilityOABGen` value for the **PersistedCapability** property. An arbitration mailbox with this capability is also known as anorganization mailbox. You can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  The default value for this parameter is the organization mailbox named `SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}`.  <br/>  A single organization mailbox can generate multiple OABs (you can use the same value for this parameter in the settings of multiple OABs), but in Exchange 2013 CU5 or later, an OAB can only be generated by a single organization mailbox (this parameter doesn't accept multiple values). To have a read only copy of the OAB (also known as ashadow copy) available in other organization mailboxes, use the  _ShadowMailboxDistributionEnabled_ parameter. <br/> |
| _GlobalWebDistributionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _GlobalWebDistributionEnabled_ parameter specifies whether all OAB virtual directories in the organization can accept requests to download the OAB. These locations are advertised by the Autodiscover service. Valid values are: <br/>  `$true`: Any OAB virtual directory in the organization can accept requests to download the OAB. You can't use this setting with the  _VirtualDirectories_ parameter. <br/>  `$false`: Only the OAB virtual directories that are specified by the  _VirtualDirectories_ parameter accept requests to download the OAB. This is the default value. <br/>  In Exchange 2013 CU7 or later, we recommend that you use the value `$true` for this parameter. The Client Access services on any Mailbox server can proxy incoming OAB download requests to the correct location. <br/> |
| _HttpHomeMdbLastProcessedBucket_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IsDefault_ parameter specifies whether the OAB is used by all mailboxes and mailbox databases that don't have an OAB specified. Valid values are: <br/>  `$true`: The OAB is the default OAB.  <br/>  `$false`: The OAB is isn't the default OAB.  <br/> |
| _MaxBinaryPropertySize_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MaxBinaryPropertySize_ parameter specifies the maximum size in bytes for binary attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536. <br/> |
| _MaxMultivaluedBinaryPropertySize_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MaxMultivaluedBinaryPropertySize_ parameter specifies the maximum size in bytes for multivalued binary attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536 (64 kilobytes). <br/> |
| _MaxMultivaluedStringPropertySize_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MaxMultivaluedStringPropertySize_ parameter specifies the maximum size for multivalued string attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536 (64 kilobytes). <br/> |
| _MaxStringPropertySize_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MaxStringPropertySize_ parameter specifies the maximum size in bytes for string attributes before they're truncated. Valid values are integers from 0 to 999999999. The default value is 3400. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the OAB. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Schedule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Schedule  <br/> | This parameter is available only in on-premises Exchange. <br/> **Note**: In Exchange 2013 or later, this parameter is no longer responsible for the OAB generation schedule. For more information, see [Change the offline address book generation schedule in Exchange 2016](http://technet.microsoft.com/library/d2b4d527-311e-442d-9f1f-54fac8371b80.aspx).  <br/>  The _Schedule_ parameter specifies the interval for generating the OAB in Exchange 2010 or earlier. <br/>  You can use the following values for the start and end days: <br/>  Full name of the day <br/>  Abbreviated name of the day <br/>  Integer from 0 through 6, where 0 = Sunday <br/>  The start time and end time must be at least 15 minutes apart. Minutes will be rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval. <br/>  The following are examples: <br/>  "Sun.11:30 PM-Mon.1:30 AM" <br/>  6.22:00-6.22:15 (The assistant will run from Saturday at 10:00 PM until Saturday at 10:15 PM.) <br/>  "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (The assistant will run on Monday and Wednesday mornings from 4:30 until 5:30.) <br/>  "Sun.1:15 AM-Monday.23:00" <br/> **Note**: In Office 365, the read only value of this property is displayed in Coordinated Universal Time (UTC).  <br/> |
| _ShadowMailboxDistributionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _ShadowMailboxDistributionEnabled_ parameter specifies whether a read only copy of the OAB (also known as a shadow copy) is distributed to all other OAB generation mailboxes (also known as organization mailboxes). This allows additional Mailbox servers to be endpoints for requests to download the OAB, which can help prevent users from downloading the OAB across slow WAN links. Valid values are: <br/>  `$true`: The OAB is distributed to all other organization mailboxes.  <br/>  `$false`: The OAB is isn't distributed to other organization mailboxes. This is the default value.  <br/>  The value of this parameter is only meaningful if you have multiple organization mailboxes, and is only beneficial in Exchange organizations that have multiple Active Directory sites. <br/> |
| _UpgradeFromE14_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UseDefaultAttributes_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _UseDefaultAttributes_switch specifies whether to revert the recipient MAPI properties that are available in the OAB to the default list. You don't need to specify a value with this switch.  <br/> You can use this switch to undo changes that you've made to the default list by using the  _ConfiguredAttributes_ parameter. <br/> |
| _Versions_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Versions_ parameter specifies the OAB versions that are generated for client download. In Exchange 2013 or later, the default and only supported value is `Version4` ( `Version3` and `Version2` require public folder distribution). <br/> |
| _VirtualDirectories_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter[]  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _VirtualDirectories_ parameter specifies the OAB virtual directories that accept requests to download the OAB. These locations are advertised in the Autodiscover service. <br/>  You can use any value that uniquely identifies the virtual directory. For example: <br/>  Name or `<Server>\Name` <br/>  Distinguished name (DN) <br/>  GUID <br/>  The **Name** value uses the syntax " `<VirtualDirectoryName> (<WebsiteName>)`" from the properties of the virtual directory. You can specify the wildcard character (*) instead of the default website by using the syntax  `<VirtualDirectoryName>*`.  <br/>  The default value of this parameter is the Client Access services (frontend) and backend OAB virtual directories on the Mailbox server that holds the OAB generation mailbox (the _GeneratingMailbox_ parameter or `SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}`) when you created the OAB (for example,  `Mailbox01\OAB (Default Web Site),Mailbox01\OAB (Exchange Back End`).  <br/>  To use this parameter, the value of the _GlobalWebDistributionEnabled_ parameter must be `$false`.  <br/>  In Exchange 2013 CU7 or later, we recommend that you set this parameter to `$null`, and then set the  _GlobalWebDistributionEnabled_ parameter to `$true`, because the Client Access services on any Mailbox server can proxy incoming OAB download requests to the correct location.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _ZipOabFilesBeforeUploading_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ZipOabFilesBeforeUploading_specifies whether to use ZIP file compression on the OAB files before uploading them to the server. Valid values are:  <br/>  `$true`: ZIP the OAB files.  <br/>  `$false`: Don't ZIP the OAB files. This is the default value.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

