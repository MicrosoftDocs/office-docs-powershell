---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: New-CsTeamsMediaConnectivityPolicy
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsMediaConnectivityPolicy
schema: 2.0.0
author: lirunping-MSFT
ms.author: runli
---

# New-CsTeamsMediaConnectivityPolicy

## SYNOPSIS
This cmdlet creates a Teams media connectivity policy.

## SYNTAX

```powershell
New-CsTeamsMediaConnectivityPolicy -Identity <String> -DirectConnection <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a Teams media connectivity policy. If you get an error that the policy already exists, it means that the policy already exists for your tenant. In this case, run Get-CsTeamsMediaConnectivityPolicy.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsMediaConnectivityPolicy -Identity Test

Identity DirectConnection
-------------------------
Tag:Test Enabled
```

Creates a new Teams media connectivity policy with the specified identity.
The newly created policy with value will be printed on success.

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

### -DirectConnection
This setting will enable Tenant Admins to control the Teams media connectivity behavior in Teams for both Meetings and 1:1 call. If this setting is set to "true”, direct media connection between the current user and a remote user is allowed which may improve the meeting quality and reduce the egress bandwidth usage for the customer. If this setting is set to 'Disabled', no direct media connection will be allowed for the current user.

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
[Remove-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmediaconnectivitypolicy)

[Get-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmediaconnectivitypolicy)

[Set-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmediaconnectivitypolicy)

[Grant-CsTeamsMediaConnectivityPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmediaconnectivitypolicy)
