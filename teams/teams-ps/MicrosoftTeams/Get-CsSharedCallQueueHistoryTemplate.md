---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: vijurtse
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsSharedCallQueueHistoryTemplate
schema: 2.0.0
title: Get-CsSharedCallQueueHistoryTemplate
---

# Get-CsSharedCallQueueHistoryTemplate.

> [!IMPORTANT]
>This PowerShell cmdlet is being deprecated, please use the new version  ... instead

## SYNOPSIS
Use the Get-CsSharedCallQueueHistory cmdlet to list the Shared Call Queue History templates.

## SYNTAX

```
Get-CsSharedCallQueueHistoryTemplate [-Id <string>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsSharedCallQueueHistory cmdlet to list the Shared Call Queue History templates.

## EXAMPLES

### Example 1
```
Get-CsSharedCallQueueHistoryTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842c
```

This example retrieves the Shared Call Queue History Template with the Id `3a4b3d9b-91d8-4fbf-bcff-6907f325842c`

### Example 2
```
Get-CsSharedCallQueueHistoryTemplate
```

This example retrieves all the Shared Call Queue History Templates

## PARAMETERS

### -Id

The Id of  the shared call queue history template.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: false
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

[Set-CsSharedCallQueueHistoryTemplate](./Set-CsSharedCallQueueHistoryTemplate.md)

[Remove-CsSharedCallQueueHistoryTemplate](./Remove-CsSharedCallQueueHistoryTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)
