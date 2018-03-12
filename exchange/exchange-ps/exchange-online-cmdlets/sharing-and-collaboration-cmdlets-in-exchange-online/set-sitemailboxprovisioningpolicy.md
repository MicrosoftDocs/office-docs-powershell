---
title: "Set-SiteMailboxProvisioningPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 2a53ae55-9f2c-4dbd-b476-19bacacad3bb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-SiteMailboxProvisioningPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-SiteMailboxProvisioningPolicy** cmdlet to modify an existing site mailbox provisioning policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SiteMailboxProvisioningPolicy -Identity <MailboxPolicyIdParameter> [-AliasPrefix <String>] [-Confirm [<SwitchParameter>]] [-DefaultAliasPrefixEnabled <$true | $false>] [-DomainController <Fqdn>] [-IsDefault <SwitchParameter>] [-IssueWarningQuota <ByteQuantifiedSize>] [-MaxReceiveSize <ByteQuantifiedSize>] [-Name <String>] [-ProhibitSendReceiveQuota <ByteQuantifiedSize>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the site mailbox provisioning policy named Default to allow the maximum size of email messages that can be received by the site mailbox to 25 MB.
  
```
Set-SiteMailboxProvisioningPolicy -Identity Default -MaxReceiveSize 25MB
```

### Example 2

This example changes the warning quota to 9.5 GB and the prohibit send and receive quota to 10 GB.
  
```
Set-SiteMailboxProvisioningPolicy -Identity Default -IssueWarningQuota 9GB -ProhibitSendReceiveQuota 10GB
```

### Example 3

This example changes the default provisioning policy named SM_DefaultPolicy and sets the  _AliasPrefix_ value to **Project**. When you create new site mailboxes, the prefix **Project-** is automatically added to the alias.
  
```
Set-SiteMailboxProvisioningPolicy -Identity SM_DefaultPolicy -AliasPrefix Project
```

## Detailed Description
<a name="DetailedDescription"> </a>

Site mailbox provisioning policies apply settings to new site mailboxes that you create. You can create multiple site mailbox provisioning policies, but only the default policy is followed when users create site mailboxes. The default site mailbox provisioning policy is named Default.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _Identity_ parameter specifies the identity of the site mailbox provisioning policy that you want to edit. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AliasPrefix_ <br/> |Optional  <br/> |System.String  <br/> | The _AliasPrefix_ parameter specifies the custom text prefix to add to the aliases of new site mailboxes. Valid values are: <br/>  A text string that's 8 characters or less. When you specify a text value, the value of the _DefaultAliasPrefixEnabled_ parameter ignored and aliases get the text prefix you specified. <br/>  The value `$null`. This is the default value. The results of this value depend on the  _DefaultAliasPrefixEnabled_ parameter value. When it's `$true`, aliases get the default prefix text. When it's  `$false`, aliases don't get any prefix text.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultAliasPrefixEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DefaultAliasPrefixEnabled_ parameter specifies whether new site mailboxes have the default prefix text added to the alias. Valid values are: <br/>  `$true`: Aliases get the default prefix text. This is the default value. In Office 365, the default prefix text is **SMO-** (for example, the alias value BugBash_2016 becomes SMO-BugBash_2016). In on-premises Exchange, the the default prefix text is **SM-** (for example, the alias value BugBash_2016 becomes SM-BugBash_2016). <br/>  `$false`: Aliases don't get the default prefix text.  <br/>  The value of this parameter is related to the value of the _AliasPrefix_ parameter. If you specify a text string for _AliasPrefix_, the  _DefaultAliasPrefixEnabled_ value is ignored. Specifying a text value for _AliasPrefix_ automatically sets the value to `$false`, but even if you set it to  `$true`, the default alias prefix text isn't used.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _IsDefault_ switch specifies that the site mailbox provisioning policy is the default policy. You don't need to specify a value with this switch. <br/> You can have multiple policies, but only the default policy is followed when users create site mailboxes.  <br/> |
| _IssueWarningQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IssueWarningQuota_ parameter specifies the warning threshold for the size of the mailbox. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message. <br/>  A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value `unlimited`. When you enter a number, you can qualify it with one of the following units:  <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The _IssueWarningQuota_ value must be less than or equal to the _ProhibitSendReceiveQuota_ value. <br/>  The default value is 49 GB. <br/> |
| _MaxReceiveSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _MaxReceiveSize_ parameter specifies the maximum size of a message that can be sent to the site mailbox. Messages larger than the maximum size are rejected. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  A valid value is a number up to 1.999999 gigabytes (2147482624 bytes) or the value `unlimited`. The default value is 36 MB.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Name_ parameter specifies the unique name of the site mailbox provisioning policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _ProhibitSendReceiveQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _ProhibitSendReceiveQuota_ parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send or receive new messages. Messages sent to the mailbox are returned to the sender with a descriptive error message. This value effectively determines the maximum size of the mailbox. <br/>  A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value `unlimited`. When you enter a number, you can qualify it with one of the following units:  <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value must be greater than or equal to the _ProhibitSendQuota_ or _IssueWarningQuota_ values. <br/>  The default value is 50 GB. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

