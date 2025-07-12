---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-migrationbatch
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MigrationBatch
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationBatch cmdlet to retrieve status information about the current migration batch.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MigrationBatch [[-Identity] <MigrationBatchIdParameter>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-Partition <MailboxIdParameter>]
 [-ResultSize <Unlimited>]
 [-Status <MigrationBatchStatus>]
 [<CommonParameters>]
```

### BatchesFromEndpoint
```
Get-MigrationBatch
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-Endpoint <MigrationEndpointIdParameter>]
 [-IncludeReport]
 [-Status <MigrationBatchStatus>]
 [<CommonParameters>]
```

### BatchesByEndpoint
```
Get-MigrationBatch
 [-DiagnosticInfo <String>]
 [-Endpoint <MigrationEndpointIdParameter>]
 [-IncludeReport]
 [-Partition <MailboxIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### BatchesByStatus
```
Get-MigrationBatch
 [-DiagnosticInfo <String>]
 [-IncludeReport]
 [-Partition <MailboxIdParameter>]
 [-ResultSize <Unlimited>]
 [-Status <MigrationBatchStatus>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-MigrationBatch cmdlet displays status information about the current migration batch. This information includes the following information:

- Status of the migration batch
- Total number of mailboxes being migrated
- Number of successfully completed migrations
- Migration errors
- Date and time when the migration was started and completed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

**Note**: In the cloud-based service, if you don't use the TimeZone parameter in the New-MigrationBatch command, the default time zone for the migration batch is UTC. The CompleteAfter and CompleteAfterUTC properties will contain the same value (as will the StartAfter and StartAfterUTC properties). When you create the migration batch in the Exchange admin center (EAC), the time zone that's used is based on your regional configuration.

## EXAMPLES

### Example 1
```powershell
Get-MigrationBatch -Identity LocalMove2
```

This example displays status information for the migration batch LocalMove2.

### Example 2
```powershell
Get-MigrationBatch -Endpoint exsrv1.contoso.com
```

This example displays information about all migration batches associated with the migration endpoint exsrv1.contoso.com.

## PARAMETERS

### -Identity
The Identity parameter identifies the name of the current migration batch. The value for this parameter is specified by the Name parameter of the New-MigrationBatch cmdlet.

If you use this parameter, you can't include the Endpoint parameter.

```yaml
Type: MigrationBatchIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Diagnostic
This parameter is available only in on-premises Exchange.

The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, BatchesFromEndpoint
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
This parameter is available only in on-premises Exchange.

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: Identity, BatchesFromEndpoint
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. Valid values are:

- attachmentid=String
- batch=String
- confirm
- duration=String
- endpoints
- endtime=DateTime
- maxsize=Int32
- organization=String
- partition=String
- reportid=String
- reports
- showtimeline
- showtimeslots=String
- starttime=DateTime
- status=String
- storage
- type=String
- user=String
- verbose

```yaml
Type: String
Parameter Sets: Identity, BatchesByEndpoint, BatchesByStatus
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Identity, BatchesFromEndpoint
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Endpoint
The Endpoint parameter returns a list of migration batches associated with the specified migration endpoint.

If you use this parameter, you can't include the Identity parameter.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: BatchesFromEndpoint, BatchesByEndpoint
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport
The IncludeReport switch returns additional information about the specified migration batch. You don't need to specify a value with this switch.

This information is displayed in the Report field.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: Identity, BatchesByEndpoint, BatchesByStatus
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is available only in the cloud-based service.

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: Identity, BatchesByEndpoint, BatchesByStatus
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter returns a list of migration batches that have the specified status state. Use one of the following values:

- Completed
- CompletedWithErrors
- Completing
- Corrupted
- Created
- Failed
- IncrementalSyncing
- Removing
- Starting
- Stopped
- Syncing
- Stopping
- Synced
- SyncedwithErrors
- Waiting

```yaml
Type: MMigrationBatchStatus
Parameter Sets: Identity, BatchesFromEndpoint, BatchesByStatus
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
