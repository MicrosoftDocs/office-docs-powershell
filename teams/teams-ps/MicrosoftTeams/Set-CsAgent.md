---
applicable: Microsoft Teams
author: minwoolee-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: minwoolee-msft
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Set-CsAgent
schema: 2.0.0
title: Set-CsAgent
---

# Set-CsAgent

## SYNOPSIS
Use the Set-CsAgent cmdlet to change an AI Agent

## SYNTAX

```
Set-CsAgent -Instance <instance> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsAgent cmdlet to change an AI Agent.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the AI Agent private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
$AIAgent = Get-CsAgent -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842c
$AIAgent.Name = "NewName"
Set-CsAgent -Instance $AIAgent
```

This example sets a new name value of a AI Agent with the Id `3a4b3d9b-91d8-4fbf-bcff-6907f325842c`

## PARAMETERS

### -Instance

The instance of the AI Agent to change.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

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

### Microsoft.Rtc.Management.OAA.Models.AIAgentConfiguration

## NOTES

## RELATED LINKS

[New-CsAgent](./New-CsAgent.md)

[Get-CsAgent](./Get-CsAgent.md)

[Remove-CsAgent](./Remove-CsAgent.md)