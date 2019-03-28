---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Get-ReportExecutionInstance
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-ReportExecutionInstance

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ReportExecutionInstance cmdlet to review the report execution instance in Exchange Online.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ReportExecutionInstance [-Identity <InstanceIdParameter>] [-ScheduleId <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ReportExecutionInstance | Format-Table -Auto Identity,ScheduleId,ReportStartDate,ReportEndDate
```

This example returns a summary list of all report execution instances.

### -------------------------- Example 2 --------------------------
```
Get-ReportExecutionInstance -Identity 277df7c3-5b73-4409-6264-08d4a8052836
```

This example returns detailed information for the specified report execution instance.

## PARAMETERS

### -Identity
The Identity parameter specifies the report execution instance that you want to view. The identity of the instance is a unique GUID value.

```yaml
Type: InstanceIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ScheduleId
The ScheduleId parameter filters the results by the specified ScheduleId property value, which is a GUID. Note that multiple report execution instances can have the same ScheduleId value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/55a0227e-633a-4e4b-b68e-e05f60f84c83.aspx)
