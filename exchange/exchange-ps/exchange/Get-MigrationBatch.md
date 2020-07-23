---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-migrationbatch
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MigrationBatch
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationBatch cmdlet to retrieve status information about the current migration batch.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### BatchesFromEndpoint
```
Get-MigrationBatch [-Endpoint <MigrationEndpointIdParameter>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-Partition <MailboxIdParameter>]
 [-Status <Microsoft.Exchange.Data.Storage.Management.MigrationBatchStatus>]
 [<CommonParameters>]
```

### Identity
```
Get-MigrationBatch [[-Identity] <MigrationBatchIdParameter>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-Partition <MailboxIdParameter>]
 [-Status <Microsoft.Exchange.Data.Storage.Management.MigrationBatchStatus>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-MigrationBatch cmdlet displays status information about the current migration batch. This information includes the following information:

- Status of the migration batch

- Total number of mailboxes being migrated

- Number of successfully completed migrations

- Migration errors

- Date and time when the migration was started and completed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

**Note**: If you didn't run New-MigrationBatch together with the -TimeZone parameter, the default time zone for the migration batch is UTC, and consequently CompleteAfter and CompleteAfterUTC will display the same value (the same applies to StartAfter and StartAfterUTC). If you created the migration batch in the Admin Center, the time zone is defined based on your regional configuration.

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

### -Diagnostic
This parameter is available only in on-premises Exchange.

The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Parameter Sets: BatchesFromEndpoint
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Parameter Sets: (All)
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
Type: Microsoft.Exchange.Data.Storage.Management.MigrationBatchStatus
Parameter Sets: (All)
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

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
