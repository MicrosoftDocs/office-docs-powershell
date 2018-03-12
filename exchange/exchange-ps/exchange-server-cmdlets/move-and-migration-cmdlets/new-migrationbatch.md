---
title: "New-MigrationBatch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4f797f11-e4ef-48f9-83ab-dda8a3f61e2b
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MigrationBatch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MigrationBatch** cmdlet to submit a new migration request for a batch of users. You use this cmdlet to:
  
- Move mailboxes to different databases in on-premises Exchange organizations.
    
- Migrate on-premises mailboxes to Exchange Online (also called onboarding), or migrate Exchange Online mailboxes back to on-premises Exchange (also called offboarding) in Exchange hybrid environments.
    
- Migrate mailbox data from on-premises IMAP servers to Exchange Online mailboxes (also called IMAP migration).
    
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MigrationBatch [-ArchiveOnly <SwitchParameter>] [-BadItemLimit <Unlimited>] [-CSVData <Byte[]>] [-DisallowExistingUsers <SwitchParameter>] [-ExcludeFolders <MultiValuedProperty>] [-LargeItemLimit <Unlimited>] [-MoveOptions <MultiValuedProperty>] [-PrimaryOnly <SwitchParameter>] [-SkipMerging <MultiValuedProperty>] [-SkipMoving <MultiValuedProperty>] [-SourceEndpoint <MigrationEndpointIdParameter>] [-TargetArchiveDatabases <MultiValuedProperty>] [-TargetDatabases <MultiValuedProperty>] [-TargetDeliveryDomain <String>] [-WorkflowControlFlags <None | InjectAndForget | SkipSwitchover>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a migration batch for a local move, where the mailboxes in the specified CSV file are moved to a different mailbox database. This CSV file contains a single column with the email address for the mailboxes that will be moved. The header for this column must be named **EmailAddress**. The migration batch in this example must be started manually by using the **Start-MigrationBatch** cmdlet or the Exchange admin center. Alternatively, you can use the _AutoStart_ parameter to start the migration batch automatically.
  
```
New-MigrationBatch -Local -Name LocalMove1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\LocalMove1.csv")) -TargetDatabases MBXDB2; Start-MigrationBatch -Identity LocalMove1
```

### Example 2

This example creates a migration batch for a cross-forest enterprise move, where the mailboxes for the mail users specified in the CSV file are moved to a different forest. A new migration endpoint is created, which identifies the domain where the mailboxes are currently located. The endpoint is used to create the migration batch. Then the migration batch is started with the **Start-MigrationBatch** cmdlet. Note that cross-forest moves are initiated from the target forest, which is the forest that you want to move the mailboxes to.
  
```
$Credentials = Get-Credential; $MigrationEndpointSource = New-MigrationEndpoint -ExchangeRemoteMove -Name Forest1Endpoint -Autodiscover -EmailAddress administrator@forest1.contoso.com -Credentials $Credentials; $CrossForestBatch = New-MigrationBatch -Name CrossForestBatch1 -SourceEndpoint $MigrationEndpointSource.Identity -TargetDeliveryDomain forest2.contoso.com -TargetDatabases MBXDB1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\CrossForestBatch1.csv")); Start-MigrationBatch -Identity $CrossForestBatch.Identity
```

### Example 3

This example creates a migration batch for an onboarding remote move migration from an on-premises Exchange organization to Exchange Online. The syntax is similar to that of a cross-forest move, but it's initiated from the Exchange Online organization. A new migration endpoint is created, which points to the on-premises organization as the source location of the mailboxes that will be migrated. This endpoint is used to create the migration batch. Then the migration batch is started with the **Start-MigrationBatch** cmdlet.
  
```
$Credentials = Get-Credential; $MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials; $OnboardingBatch = New-MigrationBatch -Name RemoteOnBoarding1 -SourceEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain cloud.contoso.com -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOnBoarding1.csv")); Start-MigrationBatch -Identity $OnboardingBatch.Identity
```

### Example 4

This example creates a migration batch for an offboarding remote move migration from Exchange Online to an on-premises Exchange organization. Like an onboarding remote move, it's initiated from the Exchange Online organization. First a Migration Endpoint is created that contains information about how to connect to the on-premises organization. The endpoint is used as the TargetEndpoint when creating the migration batch, which is then started with the **Start-MigrationBatch** cmdlet. The _TargetDatabases_ parameter specifies multiple on-premises databases that the migration service can select as the target database to move the mailbox to.
  
```
$Credentials = Get-Credential; $MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials; $OffboardingBatch = New-MigrationBatch -Name RemoteOffBoarding1 -TargetEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain onprem.contoso.com -TargetDatabases @(MBXDB01,MBXDB02,MBXDB03) -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOffBoarding1.csv")); Start-MigrationBatch -Identity $OffboardingBatch.Identity
```

### Example 5

This example creates a migration batch for the cutover Exchange migration CutoverBatch that's automatically started. The example obtains the connection settings to the on-premises Exchange server, and then uses those connection settings to create a migration endpoint. The endpoint is then used to create the migration batch. This example also includes the optional _TimeZone_ parameter.
  
```
$credentials = Get-Credential; $SourceEndpoint = New-MigrationEndpoint -ExchangeOutlookAnywhere -Autodiscover -Name SourceEndpoint -EmailAddress administrator@contoso.com -Credentials $credentials; New-MigrationBatch -Name CutoverBatch -SourceEndpoint $SourceEndpoint.Identity -TimeZone "Pacific Standard Time" -AutoStart
```

### Example 6

This example creates and starts a migration batch for a staged Exchange migration. The example uses the **New-MigrationEndpoint** cmdlet to create a migration endpoint for the on-premises Exchange server, and then uses that endpoint to create the migration batch. The migration batch is started with the **Start-MigrationBatch** cmdlet.
  
```
$Credentials = Get-Credential; $MigrationEndpoint = New-MigrationEndpoint -ExchangeOutlookAnywhere -Name ContosoEndpoint -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials; $StagedBatch1 = New-MigrationBatch -Name StagedBatch1 -SourceEndpoint $MigrationEndpoint.Identity -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\StagedBatch1.csv")); Start-MigrationBatch -Identity $StagedBatch1.Identity
```

### Example 7

This example creates a migration endpoint for the connection settings to the IMAP server. Then an IMAP migration batch is created that uses the CSV migration file IMAPmigration_1.csv and excludes the contents of the Deleted Items and Junk Email folders. This migration batch is pending until it's started with the **Start-MigrationBatch** cmdlet.
  
```
New-MigrationEndpoint -IMAP -Name IMAPEndpoint1 -RemoteServer imap.contoso.com -Port 993; New-MigrationBatch -Name IMAPbatch1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\IMAPmigration_1.csv")) -SourceEndpoint IMAPEndpoint1 -ExcludeFolders "Deleted Items","Junk Email"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Use the **New-MigrationBatch** cmdlet to create a migration batch to migrate mailboxes and mailbox data in one of the following migration scenarios.
  
 **Moves in on-premises Exchange organizations**
  
- **Local move**: A local move is where you move mailboxes from one mailbox database to another. A local move occurs within a single forest. For more information, see Example 1.
    
- **Cross-forest enterprise move**: In a cross-forest enterprise move, mailboxes are moved to a different forest. Cross-forest moves are initiated either from the target forest, which is the forest that you want to move the mailboxes to, or from the source forest, which is the forest that currently hosts the mailboxes. For more information, see Example 2.
    
 **Onboarding and offboarding in Exchange Online**
  
- **Onboarding remote move migration**: In a hybrid deployment, you can move mailboxes from an on-premises Exchange organization to Exchange Online. This is also known as an onboarding remote move migration because you on-board mailboxes to Exchange Online. For more information, see Example 3.
    
- **Offboarding remote move migration**: You can also perform an offboarding remote move migration, where you migrate Exchange Online mailboxes to your on-premises Exchange organization. For more information, see Example 4.
    
    > [!NOTE]
    > Both onboarding and offboarding remote move migrations are initiated from your Exchange Online organization. 
  
- **Cutover Exchange migration**: This is another type of onboarding migration and is used to migrate all mailboxes in an on-premises Exchange organization to Exchange Online. You can migrate a maximum of 1,000 Exchange Server 2003, Exchange Server 2007, or Exchange Server 2010 mailboxes using a cutover migration. Mailboxes will be automatically provisioned in Exchange Online when you perform a cutover Exchange migration. For more information, see Example 5.
    
- **Staged Exchange migration**: You can also migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online. This is another type of onboarding migration. Migrating mailboxes from Exchange 2010 or later versions of Exchange isn't supported using a staged migration. Prior to running a staged migration, you have to use directory synchronization or some other method to provision mail users in your Exchange Online organization. For more information, see Example 6.
    
- **IMAP migration**: This onboarding migration type migrates mailbox data from an IMAP server (including Exchange) to Exchange Online. For an IMAP migration, you must first provision mailboxes in Exchange Online before you can migrate mailbox data. For more information, see Example 7.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Local_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Local_ switch specifies a local move (mailboxes are moved to a different mailbox database in the same Active Directoryforest). You don't need to specify a value with this switch. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies an unique name for the migration batch. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _PublicFolderToUnifiedGroup_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublicFolderToUnifiedGroup_switch specifies a migration from public folders to Office 365 groups. You don't need to specify a value with this switch.  <br/> |
| _SourcePublicFolderDatabase_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _SourcePublicFolderDatabase_ parameter specifies the name of the source public folder database that's used in a public folder migration. <br/> |
| _UserIds_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _UserIds_ parameter specifies the users that you want to copy from an existing migration batch (for example, if a previous migration was partially successful). You identify a user by email address or by their **Guid** property value from the **Get-MigrationUser** cmdlet. You can specify multiple users separated by commas. <br/> The users that you specify for this parameter must be defined in an existing migration batch.  <br/> To disable the migration of the users in the original migration batch, use the _DisableOnCopy_ switch with this parameter. <br/> |
| _Users_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Users_ parameter specifies the users that you want to copy from an existing migration batch (for example, if a previous migration was partially successful). You identify the users by using the **Get-MigrationUser** cmdlet. For example: <br/>  `$Failed = Get-MigrationUser -Status Failed` <br/>  `New-MigrationBatch -Name "Retry Failed Users" -Users $Failed` <br/> The users that you specify for this parameter must be defined in an existing migration batch.  <br/> To disable the migration of the users in the original migration batch, use the _DisableOnCopy_ switch with this parameter. <br/> |
| _AllowIncrementalSyncs_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowIncrementalSyncs_ parameter specifies whether to enable or disable incremental synchronization. Valid values are: <br/>  `$true`: Incremental synchronization is enabled. Any new messages that are sent to the source mailbox are copied to the corresponding target mailbox once every 24 hours. This is the default value.  <br/>  `$false`: Incremental synchronization is disabled. The migration batch will go into the **Stopped** state after the initial synchronization is complete. To complete a migration batch for local moves, cross-forest moves, or remote move migrations, you need to enable incremental synchronization by using the **Set-MigrationBatch** cmdlet. <br/> |
| _AllowUnknownColumnsInCsv_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowUnknownColumnsInCsv_ parameter specifies whether to allow extra columns in the CSV file that aren't used by migration. Valid values are: <br/>  `$true`: The migration ignores (silently skips) unknown columns in the CSV file (including optional columnswithmisspelledcolumn headers). All unknown columns are treated like extra columns that aren't used by migration.  <br/>  `$false`: The migration fails if there are any unknown columns in the CSV file.This setting protects against spelling errors in column headers. This is the default value.  <br/> |
| _ArchiveOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ArchiveOnly_switchspecifies that only archive mailboxes are migrated for the users in the migration batch (primary mailboxes aren't migrated). You don't need to specify a value with this switch.  <br/> You can only use this switch for local moves and remote move migrations.  <br/> You can use the _TargetArchiveDatabases_ parameter to specify the database to migrate the archive mailboxes to. You can also specify the target archive database in the CSV file. If you don't specify the target archive database, the cmdlet uses the automatic mailbox distribution logic to select the database. <br/> |
| _AutoComplete_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AutoComplete_switch forces the finalization of the individual mailboxes as soon as the mailbox has completed initial synchronization. You don't need to specify a value with this switch.  <br/> You can only use this switch for local moves and remote move migrations.  <br/> If you don't use this switch, you need to run the **Complete-MigrationBatch** cmdlet to finalize a migration batch. <br/> |
| _AutoRetryCount_ <br/> |Optional  <br/> |System.Int32  <br/> |The _AutoRetryCount_ parameter specifies the number of attempts to restart the migration batch to migrate mailboxes that encountered errors. <br/> |
| _AutoStart_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AutoStart_switch immediately starts the processing of the new migration batch. You don't need to specify a value with this switch.  <br/> If you don't use this switch, you need to manually start the migration batch by using the **Start-MigrationBatch** cmdlet. <br/> |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the migration request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the migration request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the migration request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the migration request again. <br/> |
| _CompleteAfter_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CSVData_ <br/> |Optional  <br/> |System.Byte[]  <br/> |The _CSVData_ parameter specifies the CSV file that contains information about the user mailboxes to be moved or migrated. The required attributes in the header row of the CSV file vary depending on the type of migration. For more information, see[CSV Files for Mailbox Migration](https://technet.microsoft.com/library/e67b3455-3946-4335-b80c-97823c76ac54.aspx).  <br/> Use the following format for the value of this parameter:  `([System.IO.File]::ReadAllBytes(<path of the CSV migration file>))`. For example:  `-CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\MigrationBatch_1.csv"))` <br/> |
| _DisableOnCopy_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DisableOnCopy_switch disables the original migration job item for a user if you're copying users from an existing batch to a new batch by using the _UserIds_ or _Users_ parameters.. You don't need to specify a value with this switch. <br/> |
| _DisallowExistingUsers_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DisallowExistingUsers_switch prevents the migration of mailboxes that are currently defined in a different migration batch. You don't need to specify a value with this switch.  <br/> A validation warning is displayed for any pre-existing mailbox in the target destination.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExcludeFolders_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in the cloud-based service.  <br/> For an IMAP migration, the _ExcludeFolders_ parameter specifies mailbox folders that you don't want to migrate from the on-premises messaging system to the cloud-based mailboxes. Use folder names relative to the IMAP root on the on-premises mail server. Specify the value as a string array and separate multiple folder names with commas. <br/> |
| _LargeItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LargeItemLimit_ parameter specifies the maximum number of large items that are allowed before the migration request fails. Alarge item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used. <br/>  For more information about maximum message size values, see the following topics: <br/>  Exchange 2016:[Message size limits in Exchange 2016](https://technet.microsoft.com/library/bb124345.aspx) <br/>  Exchange Online:[Exchange Online Limits](https://go.microsoft.com/fwlink/p/?LinkId=524926) <br/>  Valid input for this parameter is an integer or the value `unlimited`. The default value is 0, which means the migration request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed.  <br/> |
| _Locale_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Locale_ parameter specifies the language for the migration batch. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _MoveOptions_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _MoveOptions_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> Don't use this parameter with the _SkipMoving_ parameter. <br/> |
| _NotificationEmails_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _NotificationEmails_ parameter specifies one or more email addresses that migration status reports are sent to. Specify the value as a string array, and separate multiple email addresses with commas. <br/> If you don't use this parameter, the status report isn't sent.  <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PrimaryOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PrimaryOnly_ switch specifies that only primary mailboxes are migrated for the users in the migration batch that also have archive mailboxes (archive mailboxes aren't migrated). You don't need to specify a value with this switch. <br/> You can only use this switch for local moves and remote move migrations.  <br/> **Note**: If the users don't have archive mailboxes, don't use this switch.  <br/> |
| _ReportInterval_ <br/> |Optional  <br/> |System.TimeSpan  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SkipMerging_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SkipMerging_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _SkipMoving_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter has been replaced by the _MoveOptions_ parameter. <br/> The _SkipMoving_ parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _SkipReports_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipReports_ switch specifies that you want to skip automatic reporting for the migration. You don't need to specify a value with this switch. <br/> |
| _SkipSteps_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.SkippableMigrationSteps[]  <br/> | The _SkipSteps_ parameter specifies the steps in the staged Exchange migration that you want to skip. Valid values are: <br/>  `None` (This is the default value) <br/>  `SettingTargetAddress`: Don't set the target email address on the source mailbox. This setting prevents mail from being forwarded from the original mailbox to the new migrated mailbox.  <br/>  This parameter is only enforced for staged Exchange migrations. <br/> |
| _SourceEndpoint_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> | The _SourceEndpoint_ parameter specifies the migration endpoint to use for the source of the migration batch. You create the migration endpoint by using the **New-MigrationEndpoint** cmdlet. You can use any value that uniquely identifies the migration endpoint. For example: <br/>  Name (the **Identity** property value) <br/>  GUID <br/>  This parameter defines the settings that are used to connect to the server where the source mailboxes are located. <br/> |
| _StartAfter_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _TargetArchiveDatabases_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _TargetArchiveDatabases_ parameter specifies the database where the archive mailboxes specified in the migration batch will be migrated to. <br/> You can also specify multiple databases for the value of this parameter. The migration service selects one database as the target database to move the archive mailbox to. For example:  `-TargetArchiveDatabases @(MBXDB01,MBXDB02,MBXDB03)` <br/> You can only use this parameter for local moves and remote move migrations.  <br/> |
| _TargetDatabases_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _TargetDatabases_ parameter specifies the identity of the database that you're moving mailboxes to. You can use the following values: <br/>  Database GUID <br/>  Database name <br/>  If you don't specify the _TargetDatabases_ parameter for a local move, the cmdlet uses the automatic mailbox distribution logic to select the database. <br/>  You can also specify multiple databases for the value of this parameter. The migration service will select one as the target database to move the mailbox to. For example: `-TargetDatabases @(MBXDB01,MBXDB02,MBXDB03)` <br/>  You can only use this parameter for local moves and remote move migrations. <br/> |
| _TargetDeliveryDomain_ <br/> |Optional  <br/> |System.String  <br/> |The _TargetDeliveryDomain_ parameter specifies the FQDN of the external email address created in the source forest for the mail-enabled user when the migration batch is complete. <br/>  This parameter is required for remote move onboarding and remote offboarding migration batches <br/> |
| _TargetEndpoint_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> | The _TargetEndpoint_ parameter specifies the migration endpoint to use for the destination of the migration batch. You create the migration endpoint by using the **New-MigrationEndpoint** cmdlet. You can use any value that uniquely identifies the migration endpoint. For example: <br/>  Name (the **Identity** property value) <br/>  GUID <br/>  This parameter defines the settings that are used to connect to the destination server where the mailboxes will be moved. <br/> |
| _TimeZone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.ExTimeZoneValue  <br/> |The _TimeZone_ parameter specifies the time zone of the administrator who submits the migration batch. <br/> A valid value for this parameter is a supported time zone key name (for example,  `"Pacific Standard Time"`).  <br/> To see the available values, run the following command:  `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display` <br/> If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WorkflowControlFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationWorkflowControlFlags  <br/> | The _WorkflowControlFlags_parameter specifies advanced controls for the steps that are performed in the migration. Valid values are:  <br/>  `None` (This is the default value) <br/>  `InjectAndForget` <br/>  `SkipSwitchover` <br/>  Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _WorkflowTemplate_ <br/> |Optional  <br/> |System.String  <br/> |The _WorkflowControlFlags_parameter specifies advanced controls for the steps that are performed in the migration. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.  <br/> |
| _WorkloadType_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestWorkloadType  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

