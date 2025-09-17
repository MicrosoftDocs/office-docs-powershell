---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-reportexecutioninstance
schema: 2.0.0
title: Get-ReportExecutionInstance
---

# Get-ReportExecutionInstance

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ReportExecutionInstance cmdlet to review the report execution instance in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ReportExecutionInstance [-Identity <InstanceIdParameter>]
 [-ScheduleId <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ReportExecutionInstance | Format-Table -Auto Identity,ScheduleId,ReportStartDate,ReportEndDate
```

This example returns a summary list of all report execution instances.

### Example 2
```powershell
Get-ReportExecutionInstance -Identity 277df7c3-5b73-4409-6264-08d4a8052836
```

This example returns detailed information for the specified report execution instance.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the report execution instance that you want to view. The identity of the instance is a unique GUID value.

```yaml
Type: InstanceIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ScheduleId

> Applicable: Exchange Online, Exchange Online Protection

The ScheduleId parameter filters the results by the specified ScheduleId property value, which is a GUID. Multiple report execution instances can have the same ScheduleId value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
