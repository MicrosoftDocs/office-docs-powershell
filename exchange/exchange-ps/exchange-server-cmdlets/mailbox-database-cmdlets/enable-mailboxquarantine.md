---
title: "Enable-MailboxQuarantine"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 68bb689f-10e4-4fd0-9db4-6f00a55278d2
description: "This cmdlet is available only in on-premises Exchange."
---

# Enable-MailboxQuarantine

This cmdlet is available only in on-premises Exchange. 
  
Use the **Enable-MailboxQuarantine** cmdlet to quarantine mailboxes that affect the availability of the mailbox database.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-MailboxQuarantine -Identity <GeneralMailboxOrMailUserIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example quarantines the mailbox for the user Brian Johnson.
  
```
Enable-MailboxQuarantine "Brian Johnson"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the database that contains the mailboxes you want to quarantine. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You identify the mailbox by using the _StoreMailboxIdentity_ parameter. <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to quarantine. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can't use this parameter with the _Database_ parameter. <br/> |
| _StoreMailboxIdentity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |The _StoreMailboxIdentity_ parameter specifies the mailbox that you want to quarantine when you use the _Database_ parameter. <br/> You identify the mailbox by its GUID value. You can find the GUID value by using the **Get-Mailbox** or **Get-MailboxStatistics** cmdlets. <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _AllowMigration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AllowMigration_ switch allows a quarantined mailbox to be moved to another mailbox database or to the cloud. You don't have to specify a value with this switch. <br/> Moving a mailbox is one method of correcting data corruption that's required before releasing the mailbox from quarantine.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Duration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _Duration_ parameter specifies how long the mailbox should remain quarantined. The default value is 24 hours. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _QuarantineReason_ <br/> |Optional  <br/> |System.String  <br/> |The _QuarantineReason_ parameter specifies why you quarantined the mailbox. The maximum length is 255 characters. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

