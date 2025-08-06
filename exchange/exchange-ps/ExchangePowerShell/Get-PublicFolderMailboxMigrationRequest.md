---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-publicfoldermailboxmigrationrequest
schema: 2.0.0
title: Get-PublicFolderMailboxMigrationRequest
---

# Get-PublicFolderMailboxMigrationRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-PublicFolderMailboxMigrationRequest cmdlet to view the status of individual jobs in public folder migration batches that were created by using the New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Filtering
```
Get-PublicFolderMailboxMigrationRequest [-BatchName <String>]
 [-DomainController <Fqdn>]
 [-HighPriority <Boolean>]
 [-Name <String>]
 [-RequestQueue <DatabaseIdParameter>]
 [-ResultSize <Unlimited>]
 [-Status <RequestStatus>]
 [-Suspend <Boolean>]
 [<CommonParameters>]
```

### Identity
```
Get-PublicFolderMailboxMigrationRequest [[-Identity] <PublicFolderMailboxMigrationRequestIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-PublicFolderMailboxMigrationRequest cmdlet displays the following properties by default.

- Name: The name assigned by the system to a specific mailbox migration job.
- TargetMailbox: The mailbox being migrated.
- Status: The current status of the job.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMailboxMigrationRequest
```

This example returns information about all migration requests.

### Example 2
```powershell
Get-PublicFolderMailboxMigrationRequest -HighPriority $true
```

In on-premises Exchange, this example returns all migration requests that have a priority value of High, Higher, Highest or Emergency.

### Example 3
```powershell
Get-PublicFolderMailboxMigrationRequest | ?{$_.TargetMailbox -eq $null}
```

This example returns public folder mailbox migration requests that don't have a target mailbox.

### Example 4
```powershell
Get-PublicFolderMailboxMigrationRequest | group TargetMailbox |?{$_.Count -gt 1}
```

This example returns duplicate public folder migration requests (requests created for the same target mailbox). If the command returns no results, then there are no duplicate migration requests.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the public folder mailbox migration request that you want to view. The value uses the syntax: `\PublicFolderMailboxMigration<GUID>` (for example, `\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e`).

You can't use this parameter with the following parameters:

- BatchName
- HighPriority
- Name
- RequestQueue
- Suspend
- Status

```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BatchName parameter filters the results by the friendly BatchName value that was assigned when the batch job was created. The format of this value is: `MigrationService:<Batch name provided at batch creation>`.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
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

### -HighPriority

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.
- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.

```yaml
Type: Boolean
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the name of the public folder mailbox migration request. If the name was not specified at creation, the default value is `PublicFolderMailboxMigration<GUID>` (for example, `PublicFolderMailboxMigration2ffdef13-01b9-4586-af2b-d5a5482010a8`).

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Filtering
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

The Status parameter filters the results based on status. You can use the following values:

- AutoSuspended
- Completed
- CompletedWithWarning
- CompletionInProgress
- Failed
- InProgress
- Queued
- Retrying
- Suspended
- Synced

You can't use this parameter with the Identity parameter.

```yaml
Type: RequestStatus
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Suspend parameter specifies whether to return requests that have been suspended. Valid input for this parameter is $true or $false.

You can't use this parameter with the Identity parameter.

```yaml
Type: Boolean
Parameter Sets: Filtering
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

## OUTPUTS

## NOTES

## RELATED LINKS
