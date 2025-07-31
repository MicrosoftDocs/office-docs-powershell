---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/teams/test-csteamsshiftsconnectionvalidate
schema: 2.0.0
title: Test-CsTeamsShiftsConnectionValidate
---

# Test-CsTeamsShiftsConnectionValidate

## SYNOPSIS

This cmdlet validates workforce management (WFM) connection settings.

## SYNTAX

```
Test-CsTeamsShiftsConnectionValidate -ConnectorId <string> -ConnectorSpecificSettings <IConnectorInstanceRequestConnectorSpecificSettings> -Name <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet validates Workforce management (WFM) connection settings. It validates that the provided WFM account/password and required endpoints are set correctly.

## EXAMPLES

### Example 1
```powershell
PS C:\> $InstanceName = "test instance name"
PS C:\> $WfmUserName = "WfmUserName"
PS C:\> $plainPwd = "plainPwd"
PS C:\> Test-CsTeamsShiftsConnectionValidate -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E00000" -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificBlueYonderSettingsRequest -Property @{ AdminApiUrl = "https://contoso.com/retail/data/wfmadmin/api/v1-beta3"; SiteManagerUrl = "https://contoso.com/retail/data/wfmsm/api/v1-beta4"; EssApiUrl = "https://contoso.com/retail/data/wfmess/api/v1-beta2"; RetailWebApiUrl = "https://contoso.com/retail/data/retailwebapi/api/v1"; CookieAuthUrl = "https://contoso.com/retail/data/login"; FederatedAuthUrl = "https://contoso.com/retail/data/login"; LoginUserName = "PlaceholderForUsername"; LoginPwd = "PlaceholderForPassword" }) -Name $InstanceName
```

Returns the list of conflicts if there are any. Empty result means there's no conflict.

### Example 2
```powershell
PS C:\> $InstanceName = "test instance name"
PS C:\> $WfmUserName = "WfmUserName"
PS C:\> $plainPwd = "plainPwd"
PS C:\> Test-CsTeamsShiftsConnectionValidate -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E00000" -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificUkgDimensionsSettingsRequest -Property @{ apiUrl = "https://contoso.com/api"; ssoUrl = "https://contoso.com/sso"; appKey = "myAppKey"; clientId = "myClientId"; clientSecret = "PlaceholderForClientSecret"; LoginUserName = "PlaceholderForUsername"; LoginPwd = "PlaceholderForPassword" }) -Name $InstanceName
```

Returns the list of conflicts if there are any. Empty result means there's no conflict.

## PARAMETERS

### -ConnectorId

> Applicable: Microsoft Teams

The ID of the shifts connector.

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

### -ConnectorSpecificSettings
The connector specific settings.

```yaml
Type: IConnectorInstanceRequestConnectorSpecificSettings
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Microsoft Teams

The connector's instance name.

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

[New-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectioninstance)

[Set-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnectioninstance)
