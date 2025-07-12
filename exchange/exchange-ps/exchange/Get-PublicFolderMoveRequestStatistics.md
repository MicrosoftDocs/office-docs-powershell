---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfoldermoverequeststatistics
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-PublicFolderMoveRequestStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-PublicFolderMoveRequestStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PublicFolderMoveRequestStatistics cmdlet to view detailed information about public folder move requests.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-PublicFolderMoveRequestStatistics [-Identity] <PublicFolderMoveRequestIdParameter>
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-IncludeSkippedItems]
 [-ReportOnly]
 [<CommonParameters>]
```

### MigrationRequestQueue
```
Get-PublicFolderMoveRequestStatistics -RequestQueue <DatabaseIdParameter> [-RequestGuid <Guid>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-IncludeSkippedItems]
 [-ReportOnly]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMoveRequestStatistics -Identity \PublicFolderMove
```

This example returns the default statistics for the public folder move request \\PublicFolderMove.

### Example 2
```powershell
Get-PublicFolderMoveRequestStatistics -Identity \PublicFolderMove | Format-List
```

This example returns the detailed statistics for the move request \\PublicFolderMove by pipelining the results to the Format-List command.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the public folder move request. The default public folder move request identity is \\PublicFolderMove.

This parameter can't be used with the RequestQueue parameter.

```yaml
Type: PublicFolderMoveRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestQueue
This parameter is for debugging purposes only.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

{{ Fill DiagnosticInfo Description }}

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

### -DomainController
This parameter is functional only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting. You don't need to specify a value with this switch.

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

### -IncludeSkippedItems
This parameter is available only in the cloud-based service.

{{ Fill IncludeSkippedItems Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportOnly
The ReportOnly switch returns the results as an array of report entries (encoded strings). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestGuid
The RequestGuid parameter specifies the GUID of the public folder move request for which you want to view the request statistics.

This parameter can't be used with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationRequestQueue
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
