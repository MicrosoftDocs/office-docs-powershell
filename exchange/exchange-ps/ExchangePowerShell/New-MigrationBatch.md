---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-migrationbatch
schema: 2.0.0
title: New-MigrationBatch
---

# New-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-MigrationBatch cmdlet to submit a new migration request for a batch of users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Abch
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> [-AllowIncrementalSyncs <System.Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <System.Int32>]
 [-AutoStart]
 [-CompleteAfter <System.DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-ReportInterval <System.TimeSpan>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <System.DateTime>]
 [-TargetDatabases <MultiValuedProperty>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### Analysis
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> [-Analyze]
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <System.DateTime>]
 [-Confirm]
 [-ExcludeFolders <MultiValuedProperty>]
 [-IncludeFolders <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <System.TimeSpan>]
 [-SkipDetails]
 [-SkipReports]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <System.DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### FolderMove
```
New-MigrationBatch -Name <String> -CSVData <Byte[]>
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <System.DateTime>]
 [-Confirm]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <System.TimeSpan>]
 [-SkipReports]
 [-StartAfter <System.DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### GoogleResourceOnboarding
```
New-MigrationBatch -Name <String> -CSVData <Byte[]>
 [-AdoptPreexisting]
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <DateTim>]
 [-Confirm]
 [-GoogleResource]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-RemoveOnCopy]
 [-ReportInterval <Timespan>]
 [-SkipDelegates]
 [-SkipMerging <MultiValuedProperty>]
 [-SkipProvisioning]
 [-SkipReports]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### Local
```
New-MigrationBatch [-Local] -Name <String> -CSVData <Byte[]> [-DisallowExistingUsers] [-WorkloadType <RequestWorkloadType>] [-WorkflowControlFlags <MigrationWorkflowControlFlags>]
 [-AdoptPreexisting]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-ArchiveOnly]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-MoveOptions <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-PrimaryOnly]
 [-RemoveOnCopy]
 [-ReportInterval <Timespan>]
 [-SkipMoving <MultiValuedProperty>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TargetArchiveDatabases <MultiValuedProperty>]
 [-TargetDatabases <MultiValuedProperty>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### LocalPublicFolder
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> -SourcePublicFolderDatabase <DatabaseIdParameter>
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-LargeItemLimit <Unlimited>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipMerging <MultiValuedProperty>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### ManagedGmailTeams
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> [-ManagedGmailTeams]
 [-AdoptPreexisting]
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-RemoveOnCopy]
 [-ReportInterval <Timespan>]
 [-SkipCalendar]
 [-SkipContacts]
 [-SkipReports]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### Offboarding
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> [-DisallowExistingUsers]
 [-AdoptPreexisting]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-ArchiveDomain <String>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-MoveOptions <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-PrimaryOnly]
 [-RemoveOnCopy]
 [-ReportInterval <Timespan>]
 [-SkipMerging <MultiValuedProperty>]
 [-SkipMoving <MultiValuedProperty>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TargetArchiveDatabases <MultiValuedProperty>]
 [-TargetDatabases <MultiValuedProperty>]
 [-TargetDeliveryDomain <String>]
 [-TargetEndpoint <MigrationEndpointIdParameter>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### Onboarding
```
New-MigrationBatch -Name <String> [-CSVData <Byte[]>] [-DisallowExistingUsers] [-WorkflowControlFlags <MigrationWorkflowControlFlags>]
 [-AdoptPreexisting]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-ArchiveDomain <String>]
 [-AutoComplete]
 [-AutoProvisioning]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-AvoidMergeOverlap]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DataFusion]
 [-DomainController <Fqdn>]
 [-ExcludeDumpsters]
 [-ExcludeFolders <MultiValuedProperty>]
 [-ForwardingDisposition <GmailForwardingDisposition>]
 [-IncludeFolders <MultiValuedProperty>]
 [-IncludeOtherContacts]
 [-Locale <CultureInfo>]
 [-MigrateTasks]
 [-MoveOptions <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-PrimaryOnly]
 [-RemoveOnCopy]
 [-RenamePrimaryCalendar]
 [-ReportInterval <Timespan>]
 [-Restore]
 [-SimplifiedSwitchOver]
 [-SkipCalendar]
 [-SkipContacts]
 [-SkipDelegates]
 [-SkipMail]
 [-SkipMerging <MultiValuedProperty>]
 [-SkipMoving <MultiValuedProperty>]
 [-SkipProvisioning]
 [-SkipReports]
 [-SkipRules]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-SourcePFPrimaryMailboxGuid <Guid>]
 [-StartAfter <DateTime>]
 [-TargetArchiveDatabases <MultiValuedProperty>]
 [-TargetDatabases <MultiValuedProperty>]
 [-TargetDeliveryDomain <String>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [-XMLData <Byte[]>]
 [<CommonParameters>]
```

### PointInTimeRecovery
```
New-MigrationBatch -Name <String> -CSVData <Byte[]>
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### PointInTimeRecoveryProvisionOnly
```
New-MigrationBatch -Name <String> -CSVData <Byte[]>
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### Preexisting
```
New-MigrationBatch -Name <String> [-Users] <MultiValuedProperty>
 [-AllowIncrementalSyncs <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DisableOnCopy]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### PreexistingUserIds
```
New-MigrationBatch -Name <String> [-UserIds] <MultiValuedProperty>
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DisableOnCopy]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### PreexistingUsers
```
New-MigrationBatch [-Users] MultiValuedProperty> -Name <String>
 [-AllowUnknownColumnsInCSV <Boolean>]
 [-AutoComplete]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DisableOnCopy]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublicFolderToUnifiedGroup
```
New-MigrationBatch -Name <String> -CSVData <Byte[]> [-PublicFolderToUnifiedGroup]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-LargeItemLimit <Unlimited>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

### WorkflowTemplate
```
New-MigrationBatch -Name <String> [-WorkflowTemplate <String>]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-AutoComplete]
 [-AutoRetryCount <Int32>]
 [-AutoStart]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Locale <CultureInfo>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <Timespan>]
 [-SkipReports]
 [-SkipSteps <SkippableMigrationSteps[]>]
 [-StartAfter <DateTime>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the New-MigrationBatch cmdlet to create a migration batch to migrate mailboxes and mailbox data in one of the following migration scenarios.

Moves in on-premises Exchange organizations

- Local move: A local move is where you move mailboxes from one mailbox database to another. A local move occurs within a single forest. For more information, see Example 1.
- Cross-forest enterprise move: In a cross-forest enterprise move, mailboxes are moved to a different forest. Cross-forest moves are initiated either from the target forest, which is the forest that you want to move the mailboxes to, or from the source forest, which is the forest that currently hosts the mailboxes. For more information, see Example 2.

Onboarding and offboarding in Exchange Online

- Onboarding remote move migration: In a hybrid deployment, you can move mailboxes from an on-premises Exchange organization to Exchange Online. This is also known as an onboarding remote move migration because you on-board mailboxes to Exchange Online. For more information, see Example 3.
- Offboarding remote move migration: You can also perform an offboarding remote move migration, where you migrate Exchange Online mailboxes to your on-premises Exchange organization. For more information, see Example 4.

  Both onboarding and offboarding remote move migrations are initiated from your Exchange Online organization.

- Cutover Exchange migration: This is another type of onboarding migration and is used to migrate all mailboxes in an on-premises Exchange organization to Exchange Online. You can migrate a maximum of 1,000 Exchange Server 2003, Exchange Server 2007, or Exchange Server 2010 mailboxes using a cutover migration. Mailboxes are automatically provisioned in Exchange Online when you perform a cutover Exchange migration. For more information, see Example 5.
- Staged Exchange migration: You can also migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online. This is another type of onboarding migration. Migrating mailboxes from Exchange 2010 or later versions of Exchange isn't supported using a staged migration. Prior to running a staged migration, you have to use directory synchronization or some other method to provision mail users in your Exchange Online organization. For more information, see Example 6.
- IMAP migration: This onboarding migration type migrates mailbox data from an IMAP server (including Exchange) to Exchange Online. For an IMAP migration, you must first provision mailboxes in Exchange Online before you can migrate mailbox data. For more information, see Example 7.
- Google Workspace (formerly G Suite) migration: This onboarding migration type migrates mailbox data from a Google Workspace organization to Exchange Online. For a Google Workspace migration, you must first provision mail users (or mailboxes) in Exchange Online before you can migrate mailbox data. For more information, see Example 10.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MigrationBatch -Local -Name LocalMove1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\LocalMove1.csv")) -TargetDatabases MBXDB2

Start-MigrationBatch -Identity LocalMove1
```

This example creates a migration batch for a local move, where the mailboxes in the specified CSV file are moved to a different mailbox database. This CSV file contains a single column with the email address for the mailboxes to be moved. The header for this column must be named EmailAddress. The migration batch in this example must be started manually by using the Start-MigrationBatch cmdlet or the Exchange admin center. Alternatively, you can use the AutoStart parameter to start the migration batch automatically.

### Example 2
```powershell
$Credentials = Get-Credential

$MigrationEndpointSource = New-MigrationEndpoint -ExchangeRemoteMove -Name Forest1Endpoint -Autodiscover -EmailAddress administrator@forest1.contoso.com -Credentials $Credentials

$CrossForestBatch = New-MigrationBatch -Name CrossForestBatch1 -SourceEndpoint $MigrationEndpointSource.Identity -TargetDeliveryDomain forest2.contoso.com -TargetDatabases MBXDB1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\CrossForestBatch1.csv"))

Start-MigrationBatch -Identity $CrossForestBatch.Identity
```

This example creates a migration batch for a cross-forest enterprise move, where the mailboxes for the mail users specified in the CSV file are moved to a different forest. A new migration endpoint is created, which identifies the domain where the mailboxes are currently located. The endpoint is used to create the migration batch. Then the migration batch is started with the Start-MigrationBatch cmdlet. Cross-forest moves are initiated from the target forest, which is the forest that you want to move the mailboxes to.

### Example 3
```powershell
$Credentials = Get-Credential

$MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials

$OnboardingBatch = New-MigrationBatch -Name RemoteOnBoarding1 -SourceEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain contoso.mail.onmicrosoft.com -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOnBoarding1.csv"))

Start-MigrationBatch -Identity $OnboardingBatch.Identity.Name
```

This example creates a migration batch for an onboarding remote move migration from an on-premises Exchange organization to Exchange Online. The syntax is similar to that of a cross-forest move, but it's initiated from the Exchange Online organization. A new migration endpoint is created, which points to the on-premises organization as the source location of the mailboxes to be migrated. This endpoint is used to create the migration batch. Then the migration batch is started with the Start-MigrationBatch cmdlet.

### Example 4
```powershell
$Credentials = Get-Credential

$MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials

$OffboardingBatch = New-MigrationBatch -Name RemoteOffBoarding1 -TargetEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain onprem.contoso.com -TargetDatabases @(MBXDB01,MBXDB02,MBXDB03) -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOffBoarding1.csv"))

Start-MigrationBatch -Identity $OffboardingBatch.Identity
```

This example creates a migration batch for an offboarding remote move migration from Exchange Online to an on-premises Exchange organization. Like an onboarding remote move, it's initiated from the Exchange Online organization. First a Migration Endpoint is created that contains information about how to connect to the on-premises organization. The endpoint is used as the TargetEndpoint when creating the migration batch, which is then started with the Start-MigrationBatch cmdlet. The TargetDatabases parameter specifies multiple on-premises databases that the migration service can select as the target database to move the mailbox to.

### Example 5
```powershell
$credentials = Get-Credential

$SourceEndpoint = New-MigrationEndpoint -ExchangeOutlookAnywhere -Autodiscover -Name SourceEndpoint -EmailAddress administrator@contoso.com -Credentials $credentials

New-MigrationBatch -Name CutoverBatch -SourceEndpoint $SourceEndpoint.Identity -TimeZone "Pacific Standard Time" -AutoStart
```

This example creates a migration batch for the cutover Exchange migration CutoverBatch that's automatically started. The example obtains the connection settings to the on-premises Exchange server, and then uses those connection settings to create a migration endpoint. The endpoint is then used to create the migration batch. This example also includes the optional TimeZone parameter.

### Example 6
```powershell
$Credentials = Get-Credential

$MigrationEndpoint = New-MigrationEndpoint -ExchangeOutlookAnywhere -Name ContosoEndpoint -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials

$StagedBatch1 = New-MigrationBatch -Name StagedBatch1 -SourceEndpoint $MigrationEndpoint.Identity -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\StagedBatch1.csv"))

Start-MigrationBatch -Identity $StagedBatch1.Identity
```

This example creates and starts a migration batch for a staged Exchange migration. The example uses the New-MigrationEndpoint cmdlet to create a migration endpoint for the on-premises Exchange server, and then uses that endpoint to create the migration batch. The migration batch is started with the Start-MigrationBatch cmdlet.

### Example 7
```powershell
New-MigrationEndpoint -IMAP -Name IMAPEndpoint1 -RemoteServer imap.contoso.com -Port 993

New-MigrationBatch -Name IMAPbatch1 -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\IMAPmigration_1.csv")) -SourceEndpoint IMAPEndpoint1 -ExcludeFolders "Deleted Items","Junk Email"
```

This example creates a migration endpoint for the connection settings to the IMAP server. Then an IMAP migration batch is created that uses the CSV migration file IMAPmigration\_1.csv and excludes the contents of the Deleted Items and Junk Email folders. This migration batch is pending until it's started with the Start-MigrationBatch cmdlet.

### Example 8
```powershell
$Credentials = Get-Credential

$MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials

$OnboardingBatch = New-MigrationBatch -Name RemoteOnBoarding1 -SourceEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain contoso.mail.onmicrosoft.com -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOnBoarding1.csv")) -CompleteAfter "09/01/2018 7:00 PM"

Start-MigrationBatch -Identity $OnboardingBatch.Identity
```

This example is the same as Example 3, but the CompleteAfter parameter is also used. Data migration for the batch starts but doesn't complete until 09/01/2018 7:00 PM (UTC). This method allows you to start a migration and then leave it to complete after business hours if your time zone is Coordinated Universal Time.

### Example 9
```powershell
$Credentials = Get-Credential

$MigrationEndpointOnPrem = New-MigrationEndpoint -ExchangeRemoteMove -Name OnpremEndpoint -Autodiscover -EmailAddress administrator@onprem.contoso.com -Credentials $Credentials

$OnboardingBatch = New-MigrationBatch -Name RemoteOnBoarding1 -SourceEndpoint $MigrationEndpointOnprem.Identity -TargetDeliveryDomain contoso.mail.onmicrosoft.com -CSVData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\RemoteOnBoarding1.csv")) -CompleteAfter "09/01/2018 7:00 PM" -TimeZone "Pacific Standard Time"

Start-MigrationBatch -Identity $OnboardingBatch.Identity
```

This example is the same as Example 8, but the TimeZone parameter is also used. Data migration for the batch starts but doesn't complete until 09/01/2018 7:00 PM (PST). This method allows you to start a migration and then leave it to complete after business hours if your time zone is Pacific Standard Time.

### Example 10
```powershell
$MigrationEndpointGmail = New-MigrationEndpoint -Gmail -ServiceAccountKeyFileData $([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\gmailonboarding.json")) -EmailAddress admin@contoso.com -Name GmailEndpoint

$OnboardingBatch = New-MigrationBatch -SourceEndpoint $MigrationEndpointGmail.Identity -Name GmailBatch1 -CSVData $([System.IO.File]::ReadAll
Bytes("C:\Users\Administrator\Desktop\gmail.csv")) -TargetDeliveryDomain "o365.contoso.com" -ContentFilter "Received -ge '2019/4/30'" -Inc
ludeFolders "Payment"

Start-MigrationBatch -Identity $OnboardingBatch.Identity
```

A Google Workspace migration batch is created that uses the CSV migration file gmail.csv and includes the contents of the Payment label and only migrate the mails which were received after the time '2019/4/30 00:00' (local system time). This migration batch is pending until it's started with the Start-MigrationBatch cmdlet.

## PARAMETERS

### -UserIds

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UserIds parameter specifies the users that you want to copy from an existing migration batch (for example, if a previous migration was partially successful). You identify a user by email address or by their Guid property value from the Get-MigrationUser cmdlet. You can specify multiple users separated by commas.

The users that you specify for this parameter must be defined in an existing migration batch.

To disable the migration of the users in the original migration batch, use the DisableOnCopy switch with this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: PreexistingUserIds
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Users

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Users parameter specifies the users that you want to copy from an existing migration batch (for example, if a previous migration was partially successful). You identify the users by using the Get-MigrationUser cmdlet. For example:

$Failed = Get-MigrationUser -Status Failed

New-MigrationBatch -Name "Retry Failed Users" -Users $Failed

The users that you specify for this parameter must be defined in an existing migration batch.

To disable the migration of the users in the original migration batch, use the DisableOnCopy switch with this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Preexisting, PreexistingUsers
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Analyze

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill Analyze Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Analysis
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedGmailTeams

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill ManagedGmailTeams Description }}

```yaml
Type: SwitchParameter
Parameter Sets: ManagedGmailTeams
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies an unique name for the migration batch on each system (Exchange On-premises or Exchange Online). The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CSVData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The CSVData parameter specifies the CSV file that contains information about the user mailboxes to be moved or migrated. The required attributes in the header row of the CSV file vary depending on the type of migration. For more information, see [CSV files for mailbox migration](https://learn.microsoft.com/exchange/csv-files-for-mailbox-migration-exchange-2013-help).

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

**Note**: This parameter doesn't validate the availability of the mailboxes based on RBAC scope. All mailboxes specified in the CSV file will be migrated, even if they are outside of the RBAC scope (for example, an OU) that gives the admin permissions to migrate mailboxes.

```yaml
Type: Byte[]
Parameter Sets: Abch, Analysis, FolderMove, Local, LocalPublicFolder, Offboarding, XO1, PublicFolderToUnifiedGroup, GoogleResourceOnboarding, PointInTimeRecoveryProvisionOnly, PointInTimeRecovery, Onboarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Local

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

able only in on-premises Exchange.

The Local switch specifies a local move (mailboxes are moved to a different mailbox database in the same Active Directory forest). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Local
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePublicFolderDatabase

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

able only in on-premises Exchange.

The SourcePublicFolderDatabase parameter specifies the source public folder database that's used in a public folder migration. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: LocalPublicFolder
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdoptPreexisting

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill AdoptPreexisting Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, Local, Offboarding, GoogleResourceOnboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIncrementalSyncs

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

able only in on-premises Exchange.

The AllowIncrementalSyncs parameter specifies whether to enable or disable incremental synchronization. Valid values are:

- $true: Incremental synchronization is enabled. Any new messages that are sent to the source mailbox are copied to the corresponding target mailbox once every 24 hours. This value is the default.
- $false: Incremental synchronization is disabled. The migration batch goes into the Stopped state after the initial synchronization is complete. To complete a migration batch for local moves, cross-forest moves, or remote move migrations, you need to enable incremental synchronization by using the Set-MigrationBatch cmdlet.

```yaml
Type: Boolean
Parameter Sets: PreexistingUserIds, Preexisting, Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, Abch, WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnknownColumnsInCsv

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowUnknownColumnsInCsv parameter specifies whether to allow extra columns in the CSV file that aren't used by migration. Valid values are:

- $true: The migration ignores (silently skips) unknown columns in the CSV file (including optional columns with misspelled column headers). All unknown columns are treated like extra columns that aren't used by migration.
- $false: The migration fails if there are any unknown columns in the CSV file.This setting protects against spelling errors in column headers. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill ArchiveDomain Description }}

```yaml
Type: String
Parameter Sets: Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ArchiveOnly switch specifies that only archive mailboxes are migrated for the users in the migration batch (primary mailboxes aren't migrated). You don't need to specify a value with this switch.

You can only use this switch for local moves and remote move migrations.

You can use the TargetArchiveDatabases parameter to specify the database to migrate the archive mailboxes to. You can also specify the target archive database in the CSV file. If you don't specify the target archive database, the cmdlet uses the automatic mailbox distribution logic to select the database.

```yaml
Type: SwitchParameter
Parameter Sets: Local
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoComplete

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AutoComplete switch forces the finalization of the individual mailboxes as soon as the mailbox has completed initial synchronization. You don't need to specify a value with this switch.

You can only use this switch for local moves and remote move migrations.

If you don't use this switch, you need to run the Complete-MigrationBatch cmdlet to finalize a migration batch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoProvisioning

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill AutoProvisioning Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoRetryCount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

able only in on-premises Exchange.

The AutoRetryCount parameter specifies the number of attempts to restart the migration batch to migrate mailboxes that encountered errors.

```yaml
Type: Int32
Parameter Sets: PreexistingUserIds, Preexisting, Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, Abch, WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoStart

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AutoStart switch immediately starts the processing of the new migration batch. You don't need to specify a value with this switch.

If you don't use this switch, you need to manually start the migration batch by using the Start-MigrationBatch cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AvoidMergeOverlap

> Applicable: Exchange Online

able only in the cloud-based service.

{{ Fill AvoidMergeOverlap Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the migration request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the migration request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the migration request again.

**Note**: This parameter is deprecated in the cloud-based service. 

```yaml
Type: Unlimited
Parameter Sets: Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, FolderMove
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The CompleteAfter parameter specifies a delay before the batch is completed. Data migration for the batch starts, but completion doesn't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a value, use either of the following options:

- Specify the date/time value in UTC: For example, `"7/30/2020 9:00PM Z"`.
- Specify the date/time value in your local time zone: For example, `"7/30/2020 9:00PM -700"`. The value is converted to UTC if you don't use the TimeZone parameter.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilter

> Applicable: Exchange Online

This parameter is available only in the cloud-based service for IMAP migration and Google Workspace migration.

The ContentFilter parameter uses OPATH filter syntax to filter the messages by Received time. Only content that matches the ContentFilter parameter is moved to Exchange online. For example:

- `"Received -gt '8/23/2020'"`
- `"Received -le '2019/01/01'"`
- `"Received -gt '8/23/2015' -and Received -lt '8/23/2020'"`

You can specify the language by using the ContentFilterLanguage parameter.

```yaml
Type: String
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilterLanguage

> Applicable: Exchange Online

This parameter is available only in the cloud-based service for IMAP migration and Google Workspace migration.

The ContentFilterLanguage parameter specifies the language being used in the ContentFilter parameter for string searches.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataFusion

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DataFusion Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableOnCopy

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DisableOnCopy switch disables the original migration job item for a user if you're copying users from an existing batch to a new batch by using the UserIds or Users parameters. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: PreexistingUserIds, Preexisting, PreexistingUsers
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisallowExistingUsers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DisallowExistingUsers switch prevents the migration of mailboxes that are currently defined in a different migration batch. You don't need to specify a value with this switch.

A validation warning is displayed for any pre-existing mailbox in the target destination.

```yaml
Type: SwitchParameter
Parameter Sets: Local, Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: PreexistingUserIds, Preexisting, Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, Abch, WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDumpsters

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ExcludeDumpsters switch specifies whether to migrate public folder mailboxes without including the contents of the Recoverable Items folder (formerly known as the dumpster). You don't need to specify a value with this switch.

You use this switch only in public folder migrations from Exchange 2013 or later to Exchange Online.

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFolders

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

For an IMAP migration or Google Workspace migration, the ExcludeFolders parameter specifies mailbox folders that you don't want to migrate from the source email system to the cloud-based mailboxes. Specify the value as a string array and separate multiple folder names with commas.

For IMAP migration, use folder names relative to the IMAP root on the source mail server. For Google Workspace migration, use label names on the source mail server.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, `MyProjects` or `MyProjects/FY2010`.

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Root
- Inbox
- SentItems
- Outbox
- DeletedItems
- Calendar
- Contacts
- Drafts
- Journal
- Tasks
- Notes
- AllItems
- JunkEmail
- Archive

If the user creates a personal folder with the same name as a well-known folder and the `#` symbol surrounding it, you can use a backslash (`\`) as an escape character to specify that folder. For example, if a user creates a folder named `#Notes#` and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

```yaml
Type: MultiValuedProperty
Parameter Sets: Onboarding, Analysis
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingDisposition

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ForwardingDisposition Description }}

```yaml
Type: GmailForwardingDisposition
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GoogleResource

> Applicable: Exchange Online

{{ Fill GoogleResource Description }}

```yaml
Type: SwitchParameter
Parameter Sets: GoogleResourceOnboarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFolders

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

For an IMAP migration or Google Workspace migration, the IncludeFolders parameter specifies mailbox folders that you want to migrate from the on-premises email system to the cloud-based mailboxes. Specify the value as a string array and separate multiple folder names with commas.

For IMAP migration, use folder names relative to the IMAP root on the source mail server. For Google Workspace migration, use label names on the source mail server.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, `MyProjects` or `MyProjects/FY2010`.

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Root
- Inbox
- SentItems
- Outbox
- DeletedItems
- Calendar
- Contacts
- Drafts
- Journal
- Tasks
- Notes
- AllItems
- JunkEmail
- Archive

If the user creates a personal folder with the same name as a well-known folder and the `#` symbol surrounding it, you can use a backslash (`\`) as an escape character to specify that folder. For example, if a user creates a folder named `#Notes#` and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

```yaml
Type: MultiValuedProperty
Parameter Sets: Onboarding, Analysis
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeOtherContacts

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IncludeOtherContacts Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the migration request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed.

**Note**: This parameter is deprecated in the cloud-based service.

```yaml
Type: Unlimited
Parameter Sets: Onboarding, Offboarding, LocalPublicFolder, PublicFolderToUnifiedGroup, FolderMove
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Locale parameter specifies the language for the migration batch.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: PreexistingUserIds, Preexisting, Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, Abch, WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateTasks

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MigrateTasks Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveOptions

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MoveOptions parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

Don't use this parameter with the SkipMoving parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Onboarding, Local, Offboarding, FolderMove
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationEmails

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The NotificationEmails parameter specifies one or more email addresses that migration status reports are sent to. Specify the value as a string array, and separate multiple email addresses with commas.

If you don't use this parameter, the status report isn't sent.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: PreexistingUserIds, Onboarding, Local, Offboarding, PublicFolderToUnifiedGroup, WorkflowTemplate, PreexistingUsers, GoogleResourceOnboarding, FolderMove, Analysis, PointInTimeRecoveryProvisionOnly, PointInTimeRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PrimaryOnly switch specifies that only primary mailboxes are migrated for the users in the migration batch that also have archive mailboxes (archive mailboxes aren't migrated). You don't need to specify a value with this switch.

You can only use this switch for local moves and remote move migrations.

**Note**: If the users don't have archive mailboxes, don't use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Local, Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderToUnifiedGroup

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The PublicFolderToUnifiedGroup switch specifies a migration from public folders to Microsoft 365 Groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolderToUnifiedGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOnCopy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill RemoveOnCopy Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, Local, Offboarding, GoogleResourceOnboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RenamePrimaryCalendar

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill RenamePrimaryCalendar Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ReportInterval parameter specifies how frequently emailed reports should be sent to the email addresses listed within NotificationEmails.

By default, emailed reports are sent every 24 hours for a batch. Setting this value to 0 indicates that reports should never be sent for this batch.

This parameter should only be used in the cloud-based service.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Restore

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill Restore Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimplifiedSwitchOver

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SimplifiedSwitchOver Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCalendar

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SkipCalendar switch specifies that you want to skip calendar migration during Google Workspace onboarding. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, ManagedGmailTeams
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipContacts

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SkipContacts switch specifies that you want to skip contact migration during Google Workspace onboarding. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, ManagedGmailTeams
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDelegates

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SkipDelegates Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, GoogleResourceOnboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDetails

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SkipDetails Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Analysis
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMail

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SkipMail switch specifies that you want to skip mail migration during Google Workspace onboarding. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SkipMerging parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: MultiValuedProperty
Parameter Sets: Onboarding, Offboarding, LocalPublicFolder, XO1, GoogleResourceOnboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMoving

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is replaced by the MoveOptions parameter.

The SkipMoving parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: MultiValuedProperty
Parameter Sets: Local, Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipProvisioning

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SkipProvisioning Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding, GoogleResourceOnboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipReports

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SkipReports switch specifies that you want to skip automatic reporting for the migration. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipRules

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SkipRules switch specifies that you want to skip rule migration during Google Workspace onboarding. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipSteps

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SkipSteps parameter specifies the steps in the staged Exchange migration that you want to skip. Valid values are:

- None (default value)
- SettingTargetAddress: Don't set the target email address on the source mailbox. This setting prevents mail from being forwarded from the original mailbox to the new migrated mailbox.

This parameter is only enforced for staged Exchange migrations.

```yaml
Type: SkippableMigrationSteps[]
Parameter Sets: PreexistingUserIds, Preexisting, Onboarding, Local, Offboarding, LocalPublicFolder, XO1, PublicFolderToUnifiedGroup, Abch, WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SourceEndpoint parameter specifies the migration endpoint to use for the source of the migration batch. You create the migration endpoint by using the New-MigrationEndpoint cmdlet. You can use any value that uniquely identifies the migration endpoint. For example:

- Name (the Identity property value)
- GUID

This parameter defines the settings that are used to connect to the server where the source mailboxes are located.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Onboarding, PublicFolderToUnifiedGroup, GoogleResourceOnboarding, Analysis
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePFPrimaryMailboxGuid

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SourcePFPrimaryMailboxGuid Description }}

```yaml
Type: Guid
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The StartAfter parameter specifies a delay before the data migration for the users within the batch is started. The migration is prepared, but the actual data migration for the user doesn't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a value, use either of the following options:

- Specify the date/time value in UTC: For example, `"7/30/2020 9:00PM Z"`.
- Specify the date/time value in your local time zone. For example, `"7/30/2020 9:00PM -700"`. The value is converted to UTC if you don't use the TimeZone parameter.

```yaml
Type: DateTime
Parameter Sets: Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetArchiveDatabases

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetArchiveDatabases parameter specifies the database where the archive mailboxes specified in the migration batch are migrated to. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

When you enter multiple values, the migration service selects one database as the target database to move the archive mailbox to.

You can only use this parameter for local moves and remote move migrations.

```yaml
Type: MultiValuedProperty
Parameter Sets: Local, Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabases

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetDatabases parameter specifies the identity of the database that you're moving mailboxes to. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

When you enter multiple values, the migration service selects one database as the target database to move the mailbox to.

You can only use this parameter for local moves and remote move migrations.

If you don't use this parameter for a local move, the cmdlet uses the automatic mailbox distribution logic to select the database.

```yaml
Type: MultiValuedProperty
Parameter Sets: Onboarding, Local, Offboarding, XO1, Abch
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDeliveryDomain

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetDeliveryDomain parameter specifies the FQDN of the external email address created in the source forest for the mail-enabled user when the migration batch is complete.

This parameter is required for remote move onboarding and remote offboarding migration batches

```yaml
Type: String
Parameter Sets: Onboarding, Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetEndpoint

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetEndpoint parameter specifies the migration endpoint to use for the destination of the migration batch. You create the migration endpoint by using the New-MigrationEndpoint cmdlet. You can use any value that uniquely identifies the migration endpoint. For example:

- Name (the Identity property value)
- GUID

This parameter defines the settings that are used to connect to the destination server where the mailboxes will be moved.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Offboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TimeZone parameter specifies the time zone of the administrator who submits the migration batch.

A valid value for this parameter is a supported time zone key name (for example, `"Pacific Standard Time"`).

To see the available values, run the following command: `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display`.

If the value contains spaces, enclose the value in quotation marks (").

In on-premises Exchange, the default value is the time zone setting of the Exchange server.

In Exchange Online, the default value is `UTC`.

```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkflowControlFlags

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The WorkflowControlFlags parameter specifies advanced controls for the steps that are performed in the migration. Valid values are:

- None (default value)
- InjectAndForget
- SkipSwitchover

Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: MigrationWorkflowControlFlags
Parameter Sets: Local, Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkflowTemplate

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The WorkflowTemplate parameter specifies advanced controls for the steps that are performed in the migration. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: String
Parameter Sets: WorkflowTemplate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
Parameter Sets: Local
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XMLData

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill XMLData Description }}

```yaml
Type: Byte[]
Parameter Sets: Onboarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
