---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
title: Get-AIGeneratedKnowledgeContainer
author: ShuhanDong0903
ms.author: shuhandong
ms.date: 04/21/2026
manager: yujin1
online version:
schema: 2.0.0
---

# Get-AIGeneratedKnowledgeContainer

## SYNOPSIS
The `Get-AIGeneratedKnowledgeContainer` cmdlet is available only to Teams administrators and is designed to retrieve the SharePoint Embedded container URLs for AI-generated meeting knowledge in Microsoft Teams.

## SYNTAX
```
Get-AIGeneratedKnowledgeContainer [-ThreadId <String>] [-CallId <String>]
```

## DESCRIPTION
This cmdlet retrieves the SharePoint Embedded container urls for AI-generated meeting knowledge data.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-AIGeneratedKnowledgeContainer -ThreadId "19:meeting_xxx@thread.v2"
```

## PARAMETERS

### -ThreadId
The meeting thread ID that contains the AI-generated knowledge container you want to retrieve. A thread can contain multiple calls. This parameter is required.

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

### -CallId
The call ID that contains the AI-generated knowledge container you want to retrieve. This parameter is optional.

```yaml
Type: String
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

## OUTPUTS

## NOTES

## RELATED LINKS
