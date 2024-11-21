---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-CsTeamsMediaConnectivityPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
author: lirunping-MSFT
ms.author: runli
---

# Get-CsTeamsMediaConnectivityPolicy

## SYNOPSIS

This cmdlet retrieves all Teams media connectivity policies for current tenant.

## SYNTAX

```
Get-CsTeamsMediaConnectivityPolicy [<CommonParameters>]
```

## DESCRIPTION

This cmdlet retrieves all Teams media connectivity policies for current tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMediaConnectivityPolicy

Identity DirectConnection
-------- ----------------
Tag:Test Enabled
```

retrieves Teams media connectivity policies, show the result as identity tag and "DirectConnection" value.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmediaconnectivitypolicy)

[Remove-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmediaconnectivitypolicy)

[Set-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmediaconnectivitypolicy)

[Grant-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmediaconnectivitypolicy)
