---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-cscallqueue
applicable: Microsoft Teams
title: Remove-CsCallQueue
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsCallQueue

## SYNOPSIS
The Remove-CsCallQueue cmdlet deletes an existing Call Queue.

## SYNTAX

```
Remove-CsCallQueue -Identity <Guid> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsCallQueue cmdlet deletes an existing Call Queue specified by the Identity parameter. The removal will fail if there are any ApplicationInstances still associated with the Call Queue.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsCallQueue -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example removes the Call Queue with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Call Queue exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a Call Queue.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS
