---
title: "Remove-Mailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0477708c-768c-4040-bad2-8f980606fcf4

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-Mailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-Mailbox** cmdlet to delete mailboxes and the associated user accounts.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-Mailbox -Identity <MailboxIdParameter> [-KeepWindowsLiveID <SwitchParameter>] [-Permanent <$true | $false>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the mailbox and the user account for the user named John Rodman. The mailbox remains in the mailbox database for the deleted mailbox retention period that's configured for the database.
  
```
Remove-Mailbox -Identity "John Rodman"
```

### Example 2

This example removes the mailbox and the user account for the user named John Rodman. The mailbox is immediately and permanently removed from the mailbox database.
  
```
Remove-Mailbox -Identity "John Rodman" -Permanent $true
```

### Example 3

This example removes John Rodman's mailbox from the mailbox database after the mailbox has been disconnected from the user account. The example uses the **Get-Mailbox** cmdlet to retrieve the mailbox GUID value of the disconnected mailbox, which is required by the _StoreMailboxIdentity_ parameter.
  
```
$Temp = Get-Mailbox | Where {$_.DisplayName -eq 'John Rodman'}; Remove-Mailbox -Database Server01\Database01 -StoreMailboxIdentity $Temp.MailboxGuid
```

## Detailed Description
<a name="DetailedDescription"> </a>

Use the _Identity_ parameter alone to disconnect the mailbox from the user and remove the user account. The mailbox still exists, and is retained until the deleted mailbox retention period expires. The deleted mailbox retention period is controlled by the **MailboxRetention** property on the mailbox database or on the mailbox itself if the **UseDatabaseRetentionDefaults** property is `False`.
  
Use the _Identity_ and _Permanent_ parameters to disconnect the mailbox from the user, remove the user account, and immediately remove the mailbox from the mailbox database. The mailbox doesn't remain in the mailbox database as a disconnected mailbox.
  
Use the **Disable-Mailbox** cmdlet to disconnect the mailbox from the user account, but keep the user account. The mailbox is retained until the deleted mailbox retention period for the database or the mailbox expires, and then the mailbox is permanently deleted (purged). Or, you can immediately the disconnected mailbox by using the _Database_ and _StoreMailboxIdentity_ parameters on the **Remove-Mailbox** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Database_ parameter specifies the Exchange database that contains the mailbox that you want to remove. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  When you use this parameter with the _StoreMailboxIdentity_ parameter to identify and remove the mailbox, the mailbox is immediately and permanently deleted from the database, so you can't reconnect or restore the mailbox. You can't use either of these parameters with the _Identity_ parameter. <br/>  If you've disconnected a mailbox from its associated user and want to remove the mailbox object from the Exchange store, use the _Database_ and _StoreMailboxIdentity_ parameters. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter identifies the mailbox that you want to remove. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can't use this parameter with the _Database_ parameter. <br/> |
| _StoreMailboxIdentity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _StoreMailboxIdentity_ parameter specifies the mailbox that you want to remove. When you use this parameter, you identify the mailbox by its GUID value. You can find the GUID value by using the **Get-Mailbox** or **Get-MailboxStatistics** cmdlets. <br/> When you use this parameter with the _Database_ parameter to identify and remove the mailbox, the mailbox is immediately and permanently deleted from the database, so you can't reconnect or restore the mailbox. You can't either of these parameters with the _Identity_ parameter. <br/> If you've disconnected a mailbox from its associated user and want to remove the mailbox object from the Exchange store, use the _Database_ and _StoreMailboxIdentity_ parameters. <br/> |
| _Arbitration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Arbitration_ parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval. <br/> |
| _AuditLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AuxAuditLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _IgnoreLegalHold_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IgnoreLegalHold_ switch specifies whether to ignore the legal hold status of the user. When you disable or remove the user, the user's cloud-based mailbox that's on legal hold is also disabled or removed. You don't need to specify a value with this switch. <br/> > [!CAUTION]> After you disable or remove a mailbox, you can't include it in a discovery search. When you disable a mailbox, the mailbox is disconnected from the user account. Disconnected mailboxes and removed mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. However, you can also remove a mailbox and purge it immediately from the mailbox database. Check with your organization's legal or Human Resources department before you disable or remove a mailbox that's on legal hold.           |
| _KeepWindowsLiveID_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Permanent_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Permanent_ parameter specifies whether to permanently delete the mailbox from the mailbox database. Valid values are: <br/>  `$true`: The mailbox is immediately and permanently deleted (purged). You can't reconnect or restore the mailbox.  <br/>  `$false`: The mailbox disabled and retained until the deleted mailbox retention period expires. You can reconnect or restore the mailbox until the deleted mailbox retention period expires. This is the default value.  <br/> |
| _PermanentlyDelete_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _PermanentlyDelete_ switch specifies whether to immediately and permanently delete (purge) the mailbox, which prevents you from recovering or restoring the mailbox. You don't need to specify a value with this switch. <br/> **Notes**:  <br/>  This switch works only on mailboxes that have already been deleted, but are still recoverable (known as soft-deleted mailboxes). <br/>  This switch doesn't work on soft-deleted mailboxes that are on In-Place Hold or Litigation Hold (known as inactive mailboxes). <br/>  Use the **Get-Mailbox** cmdlet to identify the soft-deleted mailbox, and then pipe the results to the **Remove-Mailbox** cmdlet with this switch. For example, `Get-Mailbox -Identity Laura -SoftDeleted | Remove-Mailbox -PermanentlyDelete`.  <br/> |
| _PublicFolder_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublicFolder_switch specifies that the mailbox to remove is a public folder mailbox. You don't need to specify a value with this switch. You need to use this switch to remove public folder mailboxes.  <br/> Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders.  <br/> |
| _RemoveArbitrationMailboxWithOABsAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RemoveArbitrationMailboxWithOABsAllowed_ switch specifies whether to bypass the checks for offline address books (OABs) within the specified arbitration mailbox that is being removed. When you use this switch, the arbitration mailbox is removed even if OABs are present in the mailbox. You don't need to specify a value with this switch. <br/> |
| _RemoveLastArbitrationMailboxAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RemoveLastArbitrationMailboxAllowed_ switch specifies whether to remove the specified mailbox, even if it's the last arbitration mailbox in the organization. If you remove the last arbitration mailbox in the organization, you can't have user-created distribution groups or moderated recipients. You don't need to specify a value with this switch. <br/> |
| _SupervisoryReviewPolicy_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |PARAMVALUE: SwitchParameter  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

