---
applicable: Microsoft Teams
author: minwoolee-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/New-CsAgent
schema: 2.0.0
title: New-CsAgent
---

# New-CsAgent

## SYNOPSIS
Use the New-CsAgent cmdlet to create an AI Agent that can be associated with a Teams Phone Resource Account.

## SYNTAX

```
New-CsAgent -Name <String> -AIAgentId <String> -AIAgentType <String> [-AIAgentTargetTagTemplateId <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the New-CsAgent cmdlet to create an AI Agent in the tenant. The AI Agent represents an external conversational provider (such as Microsoft Copilot Studio) that can answer calls on behalf of a Teams Phone Resource Account. After the agent is created, associate it with a Resource Account by using `New-CsOnlineApplicationInstanceAssociation`; the agent is not reachable until the association is made.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the AI Agent private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
New-CsAgent -Name "SmartAgent" -AIAgentId "9e6a9737-edbe-4452-9ec8-702944ef6a07" -AIAgentType "MicrosoftCopilotStudio"
```

This example creates a new AI Agent that is associated with Microsoft Copilot Studio.

## PARAMETERS

### -Name

The name of the AI Agent.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AIAgentId

The ID of the agent as issued by the AI provider (for example, the Microsoft Copilot Studio agent ID).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AIAgentType

The type of AI Agent provider. Currently supported value: MicrosoftCopilotStudio.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AIAgentTargetTagTemplateId

Tag Template Id of this AI Agent. If given, this command will validate if the given tag template id exists or not. If the given Id of the tag template does not exist, this command will fail.

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

[Get-CsAgent](./Get-CsAgent.md)

[Set-CsAgent](./Set-CsAgent.md)

[Remove-CsAgent](./Remove-CsAgent.md)

[New-CsTagsTemplate](./New-CsTagsTemplate.md)

[New-CsOnlineApplicationInstanceAssociation](./New-CsOnlineApplicationInstanceAssociation.md)
