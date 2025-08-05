---
applicable: Microsoft Teams
author: lirunping-MSFT
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: runli
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Set-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
title: Set-CsTeamsMediaConnectivityPolicy
---

# Set-CsTeamsMediaConnectivityPolicy

## SYNOPSIS

This cmdlet Set Teams media connectivity policy value for current tenant.

## SYNTAX

```
Set-CsTeamsMediaConnectivityPolicy -Identity <String> -DirectConnection <Boolean> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet Set Teams media connectivity policy DirectConnection value for current tenant. The value can be "Enabled" or "Disabled"

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsMediaConnectivityPolicy -Identity Test -DirectConnection Disabled

Identity DirectConnection
-------- ----------------
Global   Enabled
Tag:Test Disabled
```

Set Teams media connectivity policy "DirectConnection" value to "Disabled" for identity "Test".

## PARAMETERS

### -DirectConnection
Policy value of the Teams media connectivity DirectConnection policy.

```yaml
Type: Boolean
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

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

[New-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsmediaconnectivitypolicy)

[Remove-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsmediaconnectivitypolicy)

[Get-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmediaconnectivitypolicy)

[Grant-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsmediaconnectivitypolicy)
