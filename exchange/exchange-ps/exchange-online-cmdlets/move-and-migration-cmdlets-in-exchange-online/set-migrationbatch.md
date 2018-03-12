---
title: "Set-MigrationBatch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 730ebc07-298f-46a1-b424-dc404ef21fdf
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MigrationBatch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MigrationBatch** cmdlet to update a migration request for a batch of users. For more information, see[New-MigrationBatch](new-migrationbatch.md).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MigrationBatch -Identity <MigrationBatchIdParameter> [-AllowIncrementalSyncs <$true | $false>] [-AllowUnknownColumnsInCsv <$true | $false>] [-AutoRetryCount <Int32>] [-BadItemLimit <Unlimited>] [-CompleteAfter <DateTime>] [-Confirm [<SwitchParameter>]] [-CSVData <Byte[]>] [-DomainController <Fqdn>] [-LargeItemLimit <Unlimited>] [-MoveOptions <MultiValuedProperty>] [-NotificationEmails <MultiValuedProperty>] [-Partition <MailboxIdParameter>] [-ReportInterval <TimeSpan>] [-SkipMerging <MultiValuedProperty>] [-SkipMoving <MultiValuedProperty>] [-SkipReports <$true | $false>] [-SourcePublicFolderDatabase <DatabaseIdParameter>] [-StartAfter <DateTime>] [-SyncNow <SwitchParameter>] [-Update <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example updates MigrationBatch01 with new  _AutoRetryCount_ and _AllowIncrementalSyncs_ parameter settings.
  
```
Set-MigrationBatch -Identity MigrationBatch01 -AutoRetryCount 5 -AllowIncrementalSyncs $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-MigrationBatch** cmdlet configures your existing migration batches to migrate mailboxes and mailbox data in one of the following scenarios:
  
- Local move
    
- Cross-forest move
    
- Remote move
    
- Cutover Exchange migration
    
- Staged Exchange migration
    
- IMAP migration
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Batch.MigrationBatchIdParameter  <br/> | The _Identity_ parameter specifies the migration batch that you want to modify. You can use any value that uniquely identifies the migration batch. For example: <br/>  Name (the **Identity** property value) <br/>  GUID (the **BatchGuid** property value) <br/> |
| _AllowIncrementalSyncs_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowIncrementalSyncs_ parameter specifies whether to enable or disable incremental synchronization. Valid values are: <br/>  `$true`: Incremental synchronization is enabled. Any new messages that are sent to the source mailbox are copied to the corresponding target mailbox once every 24 hours.  <br/>  `$false`: Incremental synchronization is disabled. The migration batch will go into the **Stopped** state after the initial synchronization is complete. To complete a migration batch for local moves, cross-forest moves, or remote move migrations, you need to enable incremental synchronization. <br/> |
| _AllowUnknownColumnsInCsv_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowUnknownColumnsInCsv_ parameter specifies whether to allow extra columns in the CSV file that aren't used by migration. Valid values are: <br/>  `$true`: The migration ignores (silently skips) unknown columns in the CSV file (including optional columns with misspelled column headers). All unknown columns are treated like extra columns that aren't used by migration.  <br/>  `$false`: The migration fails if there are any unknown columns in the CSV file. This setting protects against spelling errors in column headers. This is the default value.  <br/> |
| _AutoRetryCount_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _AutoRetryCount_ parameter specifies the number of attempts to restart the migration batch to migrate mailboxes that encountered errors. <br/> |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the migration request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the migration request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the migration request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the migration request again. <br/> |
| _CompleteAfter_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CSVData_ <br/> |Optional  <br/> |System.Byte[]  <br/> |The  _CSVData_ parameter specifies the CSV file that contains information about the user mailboxes to be moved or migrated. The required attributes in the header row of the CSV file vary depending on the type of migration. Use the following format for the value of this parameter: `([System.IO.File]::ReadAllBytes(<path of the CSV migration file>))`. For example:  `-CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\MigrationBatch_1.csv"))` <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _LargeItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LargeItemLimit_ parameter specifies the maximum number of large items that are allowed before the migration request fails. Alarge item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used. <br/>  For more information about maximum message size values, see the following topics: <br/>  Exchange 2016:[Message size limits in Exchange 2016](https://technet.microsoft.com/library/bb124345.aspx) <br/>  Exchange Online:[Exchange Online Limits](https://go.microsoft.com/fwlink/p/?LinkId=524926) <br/>  Valid input for this parameter is an integer or the value `unlimited`. The default value is 0, which means the migration request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed.  <br/> |
| _MoveOptions_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _MoveOptions_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> Don't use this parameter with the  _SkipMoving_ parameter. <br/> |
| _NotificationEmails_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NotificationEmails_ parameter specifies one or more email addresses that migration status reports are sent to. <br/> If you don't use this parameter, the status report isn't sent.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ReportInterval_ <br/> |Optional  <br/> |System.TimeSpan  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SkipMerging_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SkipMerging_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _SkipMoving_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter has been replaced by the  _MoveOptions_ parameter. <br/> The  _SkipMoving_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _SkipReports_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _SkipReports_ switch specifies that you want to skip automatic reporting for the migration. You don't need to specify a value with this switch. <br/> |
| _SourcePublicFolderDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _SourcePublicFolderDatabase_ parameter specifies the name of the source public folder database that's used in a public folder migration. <br/> |
| _StartAfter_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SyncNow_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SyncNow_switch starts an immediate sync for users that have already reached Synced status, but doesn't resume any Failed users. You don't need to specify a value with this switch.  <br/> You can use this switch to speed up onboarding moves by using the switch just before the completion of the move. For IMAP migrations, you can use this switch after MX record switchover.  <br/> |
| _Update_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Update_switch sets the Update flag on the migration batch. You don't need to specify a value with this switch.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

