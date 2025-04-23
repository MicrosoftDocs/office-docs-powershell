---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/Set-SharedCallQueueHistoryTemplate
applicable: Microsoft Teams
title: Set-SharedCallQueueHistoryTemplate
schema: 2.0.0
manager: 
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-SharedCallQueueHistoryTemplate

## SYNTAX

```powershell
Set-SharedCallQueueHistoryTemplate -Instance <instance> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-SharedCallQueueHistory cmdlet to change a Shared Call Queue History template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$SharedCQHistory = Get-CsSharedCallQueueHistory -Id 66f0dc32-d344-4bb1-b524-027d4635515c
$SharedCQHisotry.AnsweredAndOutboundCalls = "AuthorizedUsersAndAgents"
Set-CsSharedCallQueueHistoryTemplate -Instance $SharedCQHistory
```

This example sets the AnsweredOutboundCalls value in the Shared Call History Template with the Id `66f0dc32-d344-4bb1-b524-027d4635515c`

## PARAMETERS

### -Instance
The instance of the shared call queue history template to change.

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

[New-CsSharedCallQueueHistoryTemplate](./New-CsSharedCallQueueHistoryTemplate.md)

[Get-CsSharedCallQueueHistoryTemplate](./Get-CsSharedCallQueueHistoryTemplate.md)

[Remove-CsSharedCallQueueHistoryTemplate](./Remove-CsSharedCallQueueHistoryTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)



