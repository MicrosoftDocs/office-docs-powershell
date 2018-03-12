---
title: "Set-PublicFolder"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 657a8e15-2587-41b5-986c-2289b2772c89
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-PublicFolder

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-PublicFolder** cmdlet to set the attributes of public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-PublicFolder -Identity <PublicFolderIdParameter> [-AgeLimit <EnhancedTimeSpan>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-EformsLocaleId <CultureInfo>] [-Force <SwitchParameter>] [-IssueWarningQuota <Unlimited>] [-MailEnabled <$true | $false>] [-MailRecipientGuid <Guid>] [-MaxItemSize <Unlimited>] [-Name <String>] [-OverrideContentMailbox <MailboxIdParameter>] [-Path <PublicFolderIdParameter>] [-PerUserReadStateEnabled <$true | $false>] [-ProhibitPostQuota <Unlimited>] [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the content location of the public folder hierarchy mailbox to North_America.
  
```
Set-PublicFolder "\Customer Service Requests" -OverrideContentMailbox North_America
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The _Identity_ parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format \ _TopLevelPublicFolder\PublicFolder_.  <br/> |
| _AgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _AgeLimit_ parameter specifies the overall age limit on the folder. Replicas of this public folder are automatically deleted when the age limit is exceeded. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EformsLocaleId_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The _EformsLocaleId_ parameter specifies the locale-specific version of the e-forms library. The valid input for the _EformsLocaleId_ parameter is the string names listed in the **Culture Name** column in the Microsoft .NET Class Library class reference available at[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _IssueWarningQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _IssueWarningQuota_ parameter specifies the public folder size that triggers a warning to public folder owners stating that the folder is almost full. <br/>  The default value is `unlimited`, which is 2 terabytes.  <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The valid input range for this parameter is from `1` through `2TB`.  <br/> |
| _MailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MailEnabled_ parameter specifies that the public folder is mail-enabled. To do this, you use the value `$true`.  <br/> You use this parameter to correct a mail-enabled public folder that lost its mail-enabled status. If you attempt to use this parameter to mail-enable a public folder that was never mail-enabled, the command will fail.  <br/> |
| _MailRecipientGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |The _MailRecipientGuid_ parameter specifies the **MailRecipientGuid** value of the public folder. You use this parameter to correct a mail-enabled public folder that lost its **MailRecipientGuid** value. <br/> The value that you specify for this parameter must match the **MailRecipientGuid** value of an existing mail-enabled public folder. Otherwise, the command will fail. <br/> |
| _MaxItemSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxItemSize_ parameter specifies the maximum size for posted items. Items larger than the value of the _MaxItemSize_ parameter are rejected. The default value is `unlimited`, which is 2 gigabytes. When you enter a value, qualify the value with one of the following units:  <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The valid input range for this parameter is from `1` through `2GB`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name for the public folder. <br/> |
| _OverrideContentMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _OverrideContentMailbox_ parameter specifies the identity of the public folder mailbox that you want to move this public folder's content to. <br/> |
| _Path_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The _Path_ parameter specifies the path of the public folder, for example, \ _TopLevelPublicFolder\PublicFolder_.  <br/> |
| _PerUserReadStateEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _PerUserReadStateEnabled_ parameter specifies whether to maintain read and unread data on a per-user basis. <br/> |
| _ProhibitPostQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _ProhibitPostQuota_ parameter specifies the size of a public folder at which users are notified that the public folder is full. Users can't post to a folder whose size is larger than the _ProhibitPostQuota_ parameter value. The default value is `unlimited`, which is 2 terabytes.  <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The valid input range for this parameter is from `1` through `2TB`.  <br/> |
| _RetainDeletedItemsFor_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _RetainDeletedItemsFor_ parameter specifies the retention time for deleted items. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

