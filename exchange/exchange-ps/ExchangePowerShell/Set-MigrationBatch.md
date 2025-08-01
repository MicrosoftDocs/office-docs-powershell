---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-migrationbatch
schema: 2.0.0
title: Set-MigrationBatch
---

# Set-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MigrationBatch cmdlet to update a migration request for a batch of users. For more information, see [New-MigrationBatch](https://learn.microsoft.com/powershell/module/exchangepowershell/new-migrationbatch).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MigrationBatch [-Identity] <MigrationBatchIdParameter>
 [-AddUsers]
 [-AllowIncrementalSyncs <Boolean>]
 [-AllowUnknownColumnsInCsv <Boolean>]
 [-ApproveSkippedItems]
 [-AutoRetryCount <Int32>]
 [-BadItemLimit <Unlimited>]
 [-CSVData <Byte[]>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-NotificationEmails <MultiValuedProperty>]
 [-Partition <MailboxIdParameter>]
 [-ReportInterval <TimeSpan>]
 [-SkipMerging <MultiValuedProperty>]
 [-SkipMoving <MultiValuedProperty>]
 [-SkipReports <Boolean>]
 [-SourcePublicFolderDatabase <DatabaseIdParameter>]
 [-StartAfter <DateTime>]
 [-SyncNow]
 [-Update]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-MigrationBatch cmdlet configures your existing migration batches to migrate mailboxes and mailbox data in one of the following scenarios:

- Local move
- Cross-forest move
- Remote move
- Cutover Exchange migration
- Staged Exchange migration
- IMAP migration
- Google Workspace (formerly G Suite) migration

Some settings can be applied both to the batch as well as to individual users within the batch. It is important to note that when a setting is applied to a user it will override any corresponding setting on the batch.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MigrationBatch -Identity MigrationBatch01 -ApproveSkippedItems
```

This example updates MigrationBatch01 by approving all of the skipped items for all of the users in the batch that were detected previously.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the migration batch that you want to modify. You can use any value that uniquely identifies the migration batch. For example:

- Name (the Identity property value)
- GUID (the BatchGuid property value)

```yaml
Type: MigrationBatchIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddUsers

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AddUsers Description }}

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

### -AllowIncrementalSyncs

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The AllowIncrementalSyncs parameter specifies whether to enable or disable incremental synchronization. Valid values are:

- $true: Incremental synchronization is enabled. Any new messages that are sent to the source mailbox are copied to the corresponding target mailbox once every 24 hours.
- $false: Incremental synchronization is disabled. The migration batch will go into the Stopped state after the initial synchronization is complete. To complete a migration batch for local moves, cross-forest moves, or remote move migrations, you need to enable incremental synchronization.

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

### -AllowUnknownColumnsInCsv

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowUnknownColumnsInCsv parameter specifies whether to allow extra columns in the CSV file that aren't used by migration. Valid values are:

- $true: The migration ignores (silently skips) unknown columns in the CSV file (including optional columns with misspelled column headers). All unknown columns are treated like extra columns that aren't used by migration.
- $false: The migration fails if there are any unknown columns in the CSV file. This setting protects against spelling errors in column headers. This is the default value.

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

### -ApproveSkippedItems

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ApproveSkippedItems switch marks all of the skipped items that were discovered prior to the current time as approved. You don't need to specify a value with this switch.

If the data loss that was detected during this migration is significant, the migration will not be able to complete without approving skipped items. Items may have been skipped because they are corrupted in the source mailbox and can't be copied to the target mailbox, they are larger than the max allowable message size configured for the tenant, or they were detected as missing from the target mailbox when the migration is ready to complete.

For more information about maximum message size values, see the following topic [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits).

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

### -AutoRetryCount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The AutoRetryCount parameter specifies the number of attempts to restart the migration batch to migrate mailboxes that encountered errors.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the migration request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the migration request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the migration request again.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The CompleteAfter parameter specifies a delay before the batch is completed. Data migration for the batch will start, but completion won't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a value, use either of the following options:

- Specify the date/time value in UTC: For example, `"7/30/2020 9:00PM Z"`.
- Specify the date/time value in your local time zone. For example, `"7/30/2020 9:00PM -700"`. The value will be converted to UTC if you don't use the TimeZone parameter.

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -CSVData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The CSVData parameter specifies the CSV file that contains information about the user mailboxes to be moved or migrated. The required attributes in the header row of the CSV file vary depending on the type of migration.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

**Note**: This parameter doesn't validate the availability of the mailboxes based on RBAC scope. All mailboxes that are specified in the CSV file will be migrated, even if they are outside of the RBAC scope (for example, an OU) that gives the admin permissions to migrate mailboxes.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the migration request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveOptions

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The MoveOptions parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

Don't use this parameter with the SkipMoving parameter.

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

### -NotificationEmails

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The NotificationEmails parameter specifies one or more email addresses that migration status reports are sent to.

If you don't use this parameter, the status report isn't sent.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -SkipMerging

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SkipMerging parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

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

### -SkipMoving

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter has been replaced by the MoveOptions parameter.

The SkipMoving parameter specifies the stages of the migration that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

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

### -SkipReports

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SkipReports switch specifies that you want to skip automatic reporting for the migration. You don't need to specify a value with this switch.

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

### -SourcePublicFolderDatabase

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The SourcePublicFolderDatabase parameter specifies the source public folder database that's used in a public folder migration. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StartAfter parameter specifies a delay before the data migration for the users within the batch is started. The migration will be prepared, but the actual data migration for users within the batch won't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a value, use either of the following options:

- Specify the date/time value in UTC: For example, `"7/30/2020 9:00PM Z"`.
- Specify the date/time value in your local time zone. For example, `"7/30/2020 9:00PM -700"`. The value will be converted to UTC if you don't use the TimeZone parameter.

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

### -SyncNow

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SyncNow switch starts an immediate sync for users that have already reached Synced status, but doesn't resume any Failed users. You don't need to specify a value with this switch.

You can use this switch to speed up onboarding moves by using the switch just before the completion of the move. For IMAP migrations, you can use this switch after MX record switchover.

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

### -Update

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Update switch sets the Update flag on the migration batch. You don't need to specify a value with this switch.

The Update flag triggers the Migration Service to reapply all of the settings from the endpoint, batch, and user to the migration process.

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

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
