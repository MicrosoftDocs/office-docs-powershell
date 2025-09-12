---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-cscallqueue
schema: 2.0.0
title: Remove-CsCallQueue
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

### Example 1
```
Remove-CsCallQueue -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example removes the Call Queue with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Call Queue exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Identity

> Applicable: Microsoft Teams

PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

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
