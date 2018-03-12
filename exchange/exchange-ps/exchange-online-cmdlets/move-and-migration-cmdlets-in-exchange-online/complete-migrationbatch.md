---
title: "Complete-MigrationBatch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 572077f0-5457-48ad-b78a-7bd945997300
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Complete-MigrationBatch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Complete-MigrationBatch** cmdlet to finalize a migration batch for a local move, cross-forest move, or remote move migration that has successfully finished initial synchronization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Complete-MigrationBatch [-Identity <MigrationBatchIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-NotificationEmails <MultiValuedProperty>] [-Partition <MailboxIdParameter>] [-SyncAndComplete <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example completes the migration batch LocalMove1 and sends a notification email message to the specified users.
  
```
Complete-MigrationBatch -Identity LocalMove1 -NotificationEmails admin@contoso.com,lucio@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

After a migration batch for a local or cross-forest move has successfully run and has a status state of Synced, use the **Complete-MigrationBatch** cmdlet to finalize the migration batch. Finalization is the last phase performed during a local or cross-forest move. When you finalize a migration batch, the cmdlet does the following for each mailbox in the migration batch:
  
- Runs a final incremental synchronization.
    
- Configures the user's Microsoft Outlook profile to point to the new target domain.
    
- Converts the source mailbox to a mail-enabled user in the source domain.
    
When the finalization process is complete, you can remove the batch by using the **Remove-MigrationBatch** cmdlet.
  
If a migration batch has a status of Completed with Errors, you can rerun the **Complete-MigrationBatch** cmdlet. The cmdlet will attempt to finalize the failed users.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Batch.MigrationBatchIdParameter  <br/> |The  _Identity_ parameter specifies the name of the migration batch that you want to complete. The value for this parameter is specified by the _Name_ parameter for the **New-MigrationBatch** cmdlet. Use the **Get-MigrationBatch** cmdlet to determine the value of this parameter for the migration batch. <br/> |
| _NotificationEmails_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NotificationEmails_ parameter specifies one or more email addresses that status reports are sent to after the migration batch is completed. You can specify multiple email addresses separated by commas. <br/> If you don't use this parameter, the final status report is sent to the administrator who runs the **Complete-MigrationBatch** cmdlet. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SyncAndComplete_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SyncAndComplete_ switch specifies whether to trigger a synchronization immediately followed by a completion of the migration batch if the synchronization was successful. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

