---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-migrationuser
schema: 2.0.0
title: Get-MigrationUser
---

# Get-MigrationUser

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationUser cmdlet to view information about move and migration users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### MailboxGuid
```
Get-MigrationUser -MailboxGuid <Guid>
 [-DomainController <Fqdn>]
 [-IncludeAssociatedUsers]
 [-ResultSize <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

### StatusAndBatchId
```
Get-MigrationUser [-BatchId <MigrationBatchIdParameter>] [-Status <MigrationUserStatus>] [-StatusSummary <MigrationUserStatusSummary>]
 [-DomainController <Fqdn>]
 [-IncludeAssociatedUsers]
 [-ResultSize <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

### Identity
```
Get-MigrationUser [[-Identity] <MigrationUserIdParameter>]
 [-DomainController <Fqdn>]
 [-IncludeAssociatedUsers]
 [-ResultSize <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

### EmailAddress
```
Get-MigrationUser -EmailAddress <SmtpAddress>
 [-DomainController <Fqdn>]
 [-IncludeAssociatedUsers]
 [-ResultSize <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MigrationUser -Identity TonySmith@contoso.com
```

This example retrieves status information about the recently migrated user, Tony Smith.

### Example 2
```powershell
Get-MigrationUser -MailboxGuid b6a6795c-a010-4f67-aaaa-da372d56fcb9 | Get-MigrationUserStatistics
```

This example retrieves more detailed information about any ongoing migration for the user with the specified mailbox GUID.

### Example 3
```powershell
Get-MigrationUser -EmailAddress TonySmith@contoso.com
```

This example retrieves status information about the recently migrated user, Tony Smith.

### Example 4
```powershell
Get-MigrationUser -EmailAddress TonySmith@contoso.com | Get-MigrationUserStatistics
```

This example retrieves more detailed information about any ongoing migration for the user with the specified email address.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the particular ongoing migration that you want to retrieve information about. The Identity parameter is usually represented as an email address.

```yaml
Type: MigrationUserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxGuid

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MailboxGuid parameter specifies the GUID of a mailbox for which you want to view the migration information.

```yaml
Type: Guid
Parameter Sets: MailboxGuid
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchId

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BatchId parameter specifies the name of the migration batch for which you want to return users.

```yaml
Type: MigrationBatchIdParameter
Parameter Sets: StatusAndBatchId
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

### -EmailAddress

> Applicable: Exchange Online

The EmailAddress parameter specifies the particular user that you want to retrieve information about. The EmailAddress parameter is represented as an email address. This parameter is available only in the cloud-based service.

```yaml
Type: EmailAddress
Parameter Sets: EmailAddress
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAssociatedUsers

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IncludeAssociatedUsers Description }}

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

### -ResultSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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

### -Status

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Status parameter returns information about migration users that have the specified status state. Use one of the following values:

- Completed
- CompletedWithWarnings
- Completing
- CompletionFailed
- CompletionSynced
- Corrupted
- Failed
- IncrementalFailed
- IncrementalStopped
- IncrementalSynced
- IncrementalSyncing
- Provisioning
- ProvisionUpdating
- Queued
- Removing
- Starting
- Stopped
- Stopping
- Synced
- Syncing
- Validating

```yaml
Type: MigrationUserStatus
Parameter Sets: StatusAndBatchId
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StatusSummary

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StatusSummary parameter returns abbreviated information about migration users that have the specified status value. Use one of the following values:

- Active
- Completed
- Failed
- Stopped
- Synced

```yaml
Type: MigrationUserStatusSummary
Parameter Sets: StatusAndBatchId
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
