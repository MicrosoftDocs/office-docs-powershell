---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/export-umcalldatarecord
schema: 2.0.0
title: Export-UMCallDataRecord
---

# Export-UMCallDataRecord

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-UMCallDataRecord cmdlet to export Unified Messaging (UM) call data records for UM dial plans and UM IP gateways for a date that you've specified.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-UMCallDataRecord -ClientStream <Stream> -Date <ExDateTime>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-UMDialPlan <UMDialPlanIdParameter>]
 [-UMIPGateway <UMIPGatewayIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Export-UMCallDataRecord cmdlet exports Unified Messaging call data records for a specified date to a comma-separated value (CSV) file. You can filter call data records for specific UM dial plans or UM IP gateways. However, if you don't specify a UM IP gateway, all call data records are returned.

After this task is completed, a report is generated that contains Unified Messaging call data records.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Export-UMCallDataRecord -Date 02/01/12
```

This example returns all Unified Messaging call data records on February 1, 2018, and exports them to a CSV file.

### Example 2
```powershell
Export-UMCallDataRecord -Date 02/01/12 -UMDialPlan MyUMDialPlan
```

This example exports all Unified Messaging call data records for February 1, 2018, for the UM dial plan MyUMDialPlan.

## PARAMETERS

### -ClientStream

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ClientStream parameter specifies the .NET stream to use to output for the Unified Messaging call data records.

```yaml
Type: Stream
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Date

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Date parameter specifies the date of Unified Messaging call data records to retrieve. If there are no call records for the date specified, the report will be empty.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -UMDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMDialPlan parameter specifies the UM dial plan to export statistics for. If you don't specify a UM dial plan, statistics include all UM dial plans in the organization.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIPGateway

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMIPGateway parameter specifies the UM IP gateway to export statistics for. If you don't specify a gateway, statistics include all UM IP gateways in the selected UM dial plan, or if a UM dial plan isn't selected, statistics include all UM IP gateways in the organization.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
