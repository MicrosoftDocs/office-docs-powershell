---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cscallqueue
applicable: Microsoft Teams
title: Get-CsCallQueue
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsCallQueue

## SYNOPSIS
The Get-CsCallQueue cmdlet returns the identified Call Queues.

## SYNTAX

```
Get-CsCallQueue [-Identity <Guid>] [-Tenant <Guid>] [-First <Int32>] [-Skip <Int32>] [-ExcludeContent <Switch>] [-Sort <String>] [-Descending <Switch>] [-NameFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsCallQueue cmdlet lets you retrieve information about the Call Queues in your organization. Call Queue output contains statistical data on the number of active calls that are in the queue.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCallQueue
```

This example gets all Call Queues in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsCallQueue -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example gets the Call Queue with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Call Queue exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Identity
PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -First
The First parameter gets the first N Call Queues. The default behavior is to return the first 100 number of queues. It is intended to be used for pagination purposes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 100
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
The Skip parameter skips the first N Call Queues. It is intended to be used for pagination purposes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeContent
The ExcludeContent parameter only displays the Name and Id of the Call Queues

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sort
The Sort parameter specifies the property used to sort.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: Name
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descending
The Descending parameter sorts Call Queues in descending order

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameFilter
The NameFilter parameter returns Call Queues where name contains specified string

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a Call Queue.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS
