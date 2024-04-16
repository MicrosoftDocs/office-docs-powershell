---
external help file:
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-CsTeamsMediaConnectivityPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
author: lirunping_MSFT
ms.author: runli
---

# Get-CsTeamsMediaConnectivityPolicy

## SYNOPSIS

This cmdlet retrieves all Teams media connectivity policies for current tenant.

## SYNTAX

```
Get-CsTeamsMediaConnectivityPolicy
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

## RELATED LINKS

[New-CsTeamsMediaConnectivityPolicy](New-CsTeamsMediaConnectivityPolicy.md)

[Remove-CsTeamsMediaConnectivityPolicy](Remove-CsTeamsMediaConnectivityPolicy.yml)

[Set-CsTeamsMediaConnectivityPolicy](Set-CsTeamsMediaConnectivityPolicy.yml)

[Grant-CsTeamsMediaConnectivityPolicy](Grant-CsTeamsMediaConnectivityPolicy.yml)
