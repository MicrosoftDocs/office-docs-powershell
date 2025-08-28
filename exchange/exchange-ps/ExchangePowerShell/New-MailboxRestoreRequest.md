---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-mailboxrestorerequest
schema: 2.0.0
title: New-MailboxRestoreRequest
---

# New-MailboxRestoreRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-MailboxRestoreRequest cmdlet to restore a soft-deleted or disconnected mailbox. This cmdlet starts the process of moving content from the soft-deleted mailbox, disabled mailbox, or any mailbox in a recovery database into a connected primary or archive mailbox.

The properties used to find disconnected mailboxes and restore a mailbox are different in Exchange Server and Exchange Online. For more information about Exchange Online, see [Restore an inactive mailbox](https://learn.microsoft.com/purview/restore-an-inactive-mailbox).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
New-MailboxRestoreRequest -SourceDatabase <DatabaseIdParameter> -SourceStoreMailbox <StoreMailboxIdParameter> -TargetMailbox <MailboxOrMailUserIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-MRSServer <Fqdn>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-SourceRootFolder <String>]
 [-SuspendComment <String>]
 [-Suspend]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### CrossTenantRestore
```
New-MailboxRestoreRequest -SourceEndpoint <MigrationEndpointIdParameter> -SourceExchangeGuid <Guid> -SourceTenant <SmtpDomain> -TargetMailbox <MailboxLocationIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-CrossTenantRestore]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-SuspendComment <String>]
 [-Suspend]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-TargetType <TargetTypeComponent>]
 [-WhatIf]
 [<CommonParameters>]
```

### MigrationLocalMailboxRestore
```
New-MailboxRestoreRequest -SourceDatabase <DatabaseIdParameter> -SourceStoreMailbox <StoreMailboxIdParameter>>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-TargetType <TargetTypeComponent>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### RemoteMailboxRestoreMailboxLocationId
```
New-MailboxRestoreRequest -SourceStoreMailbox <StoreMailboxIdParameter> -TargetMailbox <MailboxLocationIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-TargetType <TargetTypeComponent>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### RemoteMailboxRestoreMailboxId
```
New-MailboxRestoreRequest -SourceStoreMailbox <StoreMailboxIdParameter> -TargetMailbox <MailboxOrMailUserIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### SourceMailbox
```
New-MailboxRestoreRequest -RemoteDatabaseGuid <Guid> -RemoteHostName <Fqdn> -RemoteRestoreType <RemoteRestoreType> -RemoteCredential <PSCredential> -SourceMailbox <MailboxLocationIdParameter> -TargetMailbox <MailboxLocationIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceIsArchive]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetIsArchive]
 [-TargetRootFolder <String>]
 [-TargetType <TargetTypeComponent>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

## DESCRIPTION
When mailboxes are moved from one database to another, Exchange doesn't fully delete the mailbox from the source database immediately upon completion of the move. Instead, the mailbox in the source mailbox database is switched to a soft-deleted state, which allows mailbox data to be accessed during a mailbox restore operation by using the new MailboxRestoreRequest cmdlet set. The soft-deleted mailboxes are retained in the source database until either the deleted mailbox retention period expires or you use the Remove-StoreMailbox cmdlet to purge the mailbox.

To view soft-deleted mailboxes, run the Get-MailboxStatistics cmdlet against a database and look for results that have a DisconnectReason with a value of SoftDeleted. For more information, see Example 1 later in this article.

A mailbox is marked as Disabled a short time after the Disable-Mailbox or Remove-Mailbox command completes.

The mailbox isn't marked as Disabled until the Microsoft Exchange Information Store service determines that Active Directory is updated with the disabled mailbox's information. You can expedite the process by running the Update-StoreMailboxState cmdlet against that database.

Exchange retains disabled mailboxes in the mailbox database based on the deleted mailbox retention settings configured for that mailbox database. After the specified period of time, the mailbox is permanently deleted.

To view disabled mailboxes, run the Get-MailboxStatistics cmdlet against a database and look for results that have a DisconnectReason with a value of Disabled. For more information, see Examples 2 and 3 later in this article.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

**Note**: To restore the contents of a primary mailbox to an archive mailbox, use the TargetRootFolder parameter to specify the archive mailbox folders to migrate the content to. This content is visible after it's restored. If you don't use this parameter, the restored content is not visible because it's mapped to locations in the archive mailbox that aren't visible to users.

## EXAMPLES

### Example 1
```powershell
Get-MailboxStatistics -Database MBD01 | Where {$_.DisconnectReason -eq "SoftDeleted" -or $_.DisconnectReason -eq "Disabled"} | Format-List LegacyExchangeDN,DisplayName,MailboxGUID, DisconnectReason

New-MailboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox 1d20855f-fd54-4681-98e6-e249f7326ddd -TargetMailbox Ayla
```

In on-premises Exchange, this example uses the Get-MailboxStatistics cmdlet to return the DisplayName, LegacyExchangeDN, and MailboxGUID (valid source mailbox identity values) for all mailboxes in the mailbox database named MBD01 that have a disconnect reason of SoftDeleted or Disabled.

Using this information, the source mailbox with the MailboxGUID value 1d20855f-fd54-4681-98e6-e249f7326ddd is restored to the target mailbox that has the Alias value Ayla.

### Example 2
```powershell
New-MailboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox "Tony Smith" -TargetMailbox Tony@contoso.com -TargetIsArchive
```

In on-premises Exchange, this example restores the content of the source mailbox with the DisplayName of Tony Smith on mailbox database MBD01 to the archive mailbox for Tony@contoso.com.

### Example 3
```powershell
New-MailboxRestoreRequest -SourceMailbox 33948c06-c453-48be-bdb9-08eacd466f81 -TargetMailbox Tony@contoso.com -AllowLegacyDNMismatch
```

In Exchange Online, this example restores the content of the inactive, disconnected, or soft deleted source mailbox to the active mailbox for Tony@contoso.com:

- The SourceMailbox value is the MailboxGUID value of an inactive, disconnected, or soft deleted mailbox.
- The TargetMailbox value is the MailboxGUID or email address of the active target mailbox.
- AllowLegacyDNMismatch allows copying data from one mailbox to another in this scenario.

## PARAMETERS

### -CrossTenantRestore

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: CrossTenantRestore
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: PSCredential
Parameter Sets: SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDatabaseGuid

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteRestoreType

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RemoteRestoreType
Parameter Sets: SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies the identity of the database from which you're restoring the soft-deleted or disconnected mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: Default, MigrationLocalMailboxRestore
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: CrossTenantRestore
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceExchangeGuid

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: CrossTenantRestore
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMailbox

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SourceMailbox parameter specifies the soft-deleted mailbox that you want to restore. The best way to identify the soft-deleted mailbox is by its GUID value. You can find the GUID value by running the following command: Get-Mailbox -SoftDeletedMailbox.

```yaml
Type: SourceMailbox
Parameter Sets: SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceStoreMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

The SourceStoreMailbox parameter specifies the MailboxGUID of the source mailbox that you want to restore content from.

You can find the MailboxGUID by running the Get-MailboxStatistics cmdlet.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Default, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceTenant

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpDomain
Parameter Sets: CrossTenantRestore
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetMailbox parameter specifies the GUID of the target mailbox or mail user where you want to restore content to. The target mailbox or mail user needs to exist before you can run this command successfully.

You can find the GUID value for the mailbox or mail user by running the Get-Mailbox or Get-MailUser cmdlets.

In Exchange 2016 or later and Exchange Online, this parameter is the type MailboxLocationIdParameter.

In Exchange 2013 or earlier, this parameter is the type MailboxOrMailUserIdParameter.

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: Default, RemoteMailboxRestoreMailboxId, CrossTenantRestore, RemoteMailboxRestoreMailboxLocationId, SourceMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

In Exchange 2013 or later, you need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange 2010, you need to use this switch if you set the BadItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange Online, this switch has no dependency on the BadItemLimit or LargeItemLimit parameters, because those parameters aren't available.

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

### -AllowLegacyDNMismatch

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowLegacyDNMismatch switch specifies that the operation should continue if the LegacyExchangeDN of the source physical mailbox and the target mailbox don't match. You don't need to specify a value with this switch.

By default, this cmdlet checks to make sure that the LegacyExchangeDN on the source physical mailbox is present on the target user in the form of the LegacyExchangeDN or an X500 proxy address that corresponds to the LegacyExchangeDN. This check prevents you from accidentally restoring a source mailbox into the incorrect target mailbox.

**Note**: This parameter is being deprecated in the cloud-based service. To complete a mailbox restore request for mailboxes with a LegacyExchangeDN that doesn't match, you need to obtain the LegacyExchangeDN value for the source mailbox and add it to the target mailbox as an X500 proxy address. For detailed instructions, see [Restore an inactive mailbox](https://learn.microsoft.com/purview/restore-an-inactive-mailbox#restore-inactive-mailboxes).

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

### -AssociatedMessagesCopyOption

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AssociatedMessagesCopyOption parameter specifies whether associated messages are copied when the request is processed. Associated messages are special messages that contain hidden data with information about rules, views, and forms. Valid values are:

- DoNotCopy: The associated messages aren't copied.
- MapByMessageClass: Find the associated message by looking up the MessageClass attribute of the source message. If there's an associated message of this class in both source and target folders, it overwrites the associated message in the target. If there isn't an associated message in the target, it creates a copy in the target.
- Copy: Copy associated messages from the source to the target. If the same message type exists both in the source and the target location, these associated messages are duplicated. This value is the default.

Content filtering doesn't apply to associated messages.

```yaml
Type: FAICopyOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

In Exchange 2010, if you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is deprecated from the cloud-based service. Admins must review the [Data Consistency Score](https://learn.microsoft.com/exchange/mailbox-migration/track-prevent-data-loss-dcs) and any skipped items before the import completes.

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

### -BatchName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The BatchName parameter specifies a descriptive name for restoring a batch of mailboxes. You can use the name in the BatchName parameter as a string search when you use the Get-MailboxRestoreRequest cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The CompletedRequestAgeLimit parameter specifies how long the status of a completed restore request is set to Completed. If this parameter is set to a value of 0, the status is cleared immediately instead of being changed to Completed.

```yaml
Type: Unlimited
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -ConflictResolutionOption

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ConflictResolutionOption parameter specifies what to do if there are multiple matching messages in the target. Valid values are:

- ForceCopy
- KeepAll
- KeepLatestItem
- KeepSourceItem (This value is the default.)
- KeepTargetItem
- UpdateFromSource

```yaml
Type: ConflictResolutionOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: KeepSourceItem
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilter

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ContentFilter parameter uses OPATH filter syntax to filter the results by the specified properties and values. Only contents that match the ContentFilter parameter are restored. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable properties, see [Filterable properties for the ContentFilter parameter](https://learn.microsoft.com/exchange/filterable-properties-for-the-contentfilter-parameter).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilterLanguage

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ContentFilterLanguage parameter specifies the language being used in the ContentFilter parameter for string searches.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

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

### -ExcludeDumpster

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ExcludeDumpster switch specifies whether to exclude the Recoverable Items folder. You don't need to specify a value with this switch.

If you don't use this switch, the Recoverable Items folder is copied with the following subfolders:

- Deletions
- Versions
- Purges

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

### -ExcludeFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ExcludeFolders parameter specifies the list of folders to exclude during the restore request.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Inbox
- SentItems
- DeletedItems
- Calendar
- Contacts
- Drafts
- Journal
- Tasks
- Notes
- JunkEmail
- CommunicatorHistory
- Voicemail
- Fax
- Conflicts
- SyncIssues
- LocalFailures
- ServerFailures

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a backslash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IncludeFolders parameter specifies the list of folder to include during the restore request.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Inbox
- SentItems
- DeletedItems
- Calendar
- Contacts
- Drafts
- Journal
- Tasks
- Notes
- JunkEmail
- CommunicationHistory
- Voicemail
- Fax
- Conflicts
- SyncIssues
- LocalFailures
- ServerFailures

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a backslash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
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

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits).

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is deprecated from the cloud-based service. Admins must review the [Data Consistency Score](https://learn.microsoft.com/exchange/mailbox-migration/track-prevent-data-loss-dcs) and any skipped items before the restore completes.

```yaml
Type: Unlimited
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSServer

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MRSServer parameter specifies the FQDN of the Client Access server on which the instance of the Microsoft Exchange Mailbox Replication service (MRS) is running. This parameter is used for debugging purposes only. Use this parameter only if directed by support personnel.

```yaml
Type: Fqdn
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple restore requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an export request for a user's mailbox that has the alias Kweku and specify the value of this parameter as RestoreFailedMoves, the identity of this export request is Kweku\\RestoreFailedMoves.

If you didn't specify a name for the restore request when it was created, Exchange automatically generates the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lowest
- Lower
- Low
- Normal (This value is the default.)
- High
- Higher
- Highest
- Emergency

```yaml
Type: RequestPriority
Parameter Sets: Default, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.
- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SkipMerging parameter specifies folder-related items to skip when restoring the mailbox. Use one of the following values:

- FolderACLs
- FolderProperties
- FolderRules
- InitialConnectionValidation

Use this parameter only if a restore request fails because of folder rules, folder access control lists (ACLs), or initial connection validation.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceIsArchive

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SourceIsArchive switch specifies that the source mailbox is an archive mailbox. You don't need to specify a value with this switch.

You can use this switch only with the SourceMailbox parameter.

```yaml
Type: SwitchParameter
Parameter Sets: SourceMailboxMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceRootFolder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SourceRootFolder parameter specifies the root folder of the mailbox from which data is restored. If this parameter isn't specified, the command restores all folders.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Suspend switch specifies whether to suspend the request. You don't need to specify a value with this switch.

If you use this switch, the request is queued, but the request doesn't reach the status of InProgress until you resume the request with the relevant resume cmdlet.

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

### -SuspendComment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetIsArchive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetIsArchive switch specifies that the content is restored into the specified target mailbox's archive. You don't need to specify a value with this switch.

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

### -TargetRootFolder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetRootFolder parameter specifies the top-level folder in which to restore data. If you don't specify this parameter, the command restores folders to the top of the folder structure in the target mailbox or archive. Content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure.

**Note**: To restore the contents of a primary mailbox to an archive mailbox, use this parameter to specify the archive mailbox folders to migrate the content to. This content is visible after it's restored. If you don't use this parameter, the restored content is not visible because it's mapped to locations in the archive mailbox that aren't visible to users.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TargetType parameter specifies the type of mailbox that's the target for the restore operation. Valid values are:

- Archive
- MailboxLocation
- Primary (default value)

```yaml
Type: TargetTypeComponent
Parameter Sets: CrossTenantRestore, MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, SourceMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -WorkloadType

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
Parameter Sets: MigrationLocalMailboxRestore, RemoteMailboxRestoreMailboxLocationId, RemoteMailboxRestoreMailboxId, SourceMailbox
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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
