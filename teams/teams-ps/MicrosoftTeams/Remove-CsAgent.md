---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Remove-CsAgent
schema: 2.0.0
title: Remove-CsAgent
---

# Remove-CsAgent

## SYNOPSIS
Deletes an AI Agent.

## SYNTAX

```
Remove-CsAgent -Id <String> [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsAgent cmdlet to delete an AI Agent.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the AI Agent private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
Remove-CsAgent -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842c
```

This example deletes the AI Agent with the identity 3a4b3d9b-91d8-4fbf-bcff-6907f325842c. If no AI Agent exists with the identity 3a4b3d9b-91d8-4fbf-bcff-6907f325842c, then this command generates an error.

## PARAMETERS

### -Id

The Id parameter is the unique identifier assigned to the AI Agent.

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

[Set-CsAgent](./Set-CsAgent.md)

[Get-CsAgent](./Get-CsAgent.md)