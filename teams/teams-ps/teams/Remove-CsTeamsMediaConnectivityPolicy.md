---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Remove-CsTeamsMediaConnectivityPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Remove-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
author: lirunping-MSFT
ms.author: runli
---

# Remove-CsTeamsMediaConnectivityPolicy

## SYNOPSIS

This cmdlet deletes a Teams media connectivity policy.

## SYNTAX

```
Remove-CsTeamsMediaConnectivityPolicy  -Identity <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet deletes a Teams media connectivity policy with the specified identity string.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsMediaConnectivityPolicy -Identity "Test"
```

Deletes a Teams media connectivity policy with the identify of "Test".

## PARAMETERS

### -Identity
Identity of the Teams media connectivity policy.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmediaconnectivitypolicy)

[Get-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmediaconnectivitypolicy)

[Set-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmediaconnectivitypolicy)
