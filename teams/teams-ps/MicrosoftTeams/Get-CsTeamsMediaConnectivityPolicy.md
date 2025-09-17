---
applicable: Microsoft Teams
author: lirunping-MSFT
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: runli
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
title: Get-CsTeamsMediaConnectivityPolicy
---

# Get-CsTeamsMediaConnectivityPolicy

## SYNOPSIS

This cmdlet retrieves all Teams media connectivity policies for the current tenant.

## SYNTAX

### Identity (Default)

```powershell
Get-CsTeamsMediaConnectivityPolicy [-Identity <String>] [<CommonParameters>]
```

### Filter

```powershell
Get-CsTeamsMediaConnectivityPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet retrieves all Teams media connectivity policies for the current tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMediaConnectivityPolicy

Identity DirectConnection
-------- ----------------
Tag:Test Enabled
```

This example retrieves the Teams media connectivity policies and shows the result as identity tag and "DirectConnection" value.

## PARAMETERS

### -Filter

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the Teams Media Connectivity Policy.

```yaml
Type: String
Parameter Sets: Identity
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

[New-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsmediaconnectivitypolicy)

[Remove-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsmediaconnectivitypolicy)

[Set-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmediaconnectivitypolicy)

[Grant-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsmediaconnectivitypolicy)
