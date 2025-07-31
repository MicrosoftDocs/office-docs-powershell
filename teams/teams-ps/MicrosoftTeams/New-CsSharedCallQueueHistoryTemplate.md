---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/New-CsSharedCallQueueHistoryTemplate
schema: 2.0.0
title: New-CsSharedCallQueueHistoryTemplate
---

# New-CsSharedCallQueueHistoryTemplate

## SYNOPSIS
Use the New-CsSharedCallQueueHistory cmdlet to create a Shared Call Queue History template.

## SYNTAX

```
New-CsSharedCallQueueHistoryTemplate -Name <String> -Description <String>
 [-IncomingMissedCalls <Object>] [-AnsweredAndOutboundCalls <Object>] [<CommonParameters>]
```

## DESCRIPTION
Use the New-CsSharedCallQueueHistory cmdlet to create a Shared Call Queue History template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
New-CsSharedCallQueueHistoryTemplate -Name "Customer Service" -Description "Missed:All Answered:Auth" -IncomingMissedCall XXXXXX -AnsweredAndOutboundCalls XXXXX
```

This example creates a new Shared CallQueue History template where incoming missed calls are shown to authorized users and agents and, answered and outbound calls are shown to authorized users only.

## PARAMETERS

### -AnsweredAndOutboundCalls
A description for the shared call queue history template.

PARAMVALUE: Off | AuthorizedUsersOnly | AuthorizedUsersAndAgents

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Off
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description for the shared call queue history template.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingMissedCalls
A description for the shared call queue history template.

PARAMVALUE: Off | AuthorizedUsersOnly | AuthorizedUsersAndAgents

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Off
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of the shared call queue history template.

```yaml
Type: System.String
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[Get-CsSharedCallQueueHistoryTemplate](./Get-CsSharedCallQueueHistoryTemplate.md)

[Set-CsSharedCallQueueHistoryTemplate](./Set-CsSharedCallQueueHistoryTemplate.md)

[Remove-CsSharedCallQueueHistoryTemplate](./Remove-CsSharedCallQueueHistoryTemplate.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)



