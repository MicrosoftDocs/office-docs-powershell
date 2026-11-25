---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
title: Remove-AIGeneratedKnowledge
author: ShuhanDong0903
ms.author: shuhandong
ms.date: 04/21/2026
manager: yujin1
online version:
schema: 2.0.0
---

# Remove-AIGeneratedKnowledge

## SYNOPSIS
The `Remove-AIGeneratedKnowledge` cmdlet is available only to Teams administrators and is designed to delete the AI-generated meeting knowledge for specific metings/calls.

## SYNTAX
```
Remove-AIGeneratedKnowledge [-ThreadId <String>] [-CallId <String>]
```

## DESCRIPTION
This cmdlet deletes the AI-generated meeting knowledge for specific metings/calls.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-AIGeneratedKnowledge -ThreadId "19:meeting_xxx@thread.v2"
```

## PARAMETERS

### -ThreadId
The meeting thread ID that contains the AI-generated knowledge you want to delete. A thread can contain multiple calls. This parameter is required.

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
The call ID that contains the AI-generated knowledge you want to delete. This parameter is optional.

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
