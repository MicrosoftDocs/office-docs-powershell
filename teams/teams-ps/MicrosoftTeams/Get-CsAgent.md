---
applicable: Microsoft Teams
author: minwoolee-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsAgent
schema: 2.0.0
title: Get-CsAgent
---

# Get-CsAgent

## SYNOPSIS
Use the Get-CsAgent cmdlet to list the AI Agent(s).

## SYNTAX

```
Get-CsAgent [-Id <string>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsAgent cmdlet to list the AI Agent(s) configured in the tenant. When the -Id parameter is omitted, all AI Agents in the tenant are returned.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the AI Agent private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
Get-CsAgent -Id 7d9997d0-1013-4d9c-83eb-caa6ec05f1b3
```

This example retrieves the AI Agent with the Id `7d9997d0-1013-4d9c-83eb-caa6ec05f1b3`.

### Example 2
```
Get-CsAgent
```

This example retrieves all the AI Agents.

## PARAMETERS

### -Id

The Id of the AI Agent. Optional.

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

### Microsoft.Rtc.Management.OAA.Models.AIAgentConfiguration

## NOTES

## RELATED LINKS

[New-CsAgent](./New-CsAgent.md)

[Set-CsAgent](./Set-CsAgent.md)

[Remove-CsAgent](./Remove-CsAgent.md)

[New-CsOnlineApplicationInstanceAssociation](./New-CsOnlineApplicationInstanceAssociation.md)
