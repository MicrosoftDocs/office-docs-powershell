---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsShiftsConnectionInstance
author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/set-csteamsshiftsconnectioninstance
schema: 2.4.0
---

# Set-CsTeamsShiftsConnectionInstance

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet updates a Shifts connection instance.

## SYNTAX

```
Set-CsTeamsShiftsConnectionValidate -ConnectorId <string> -ConnectorSpecificSettingAdminApiUrl <string> -ConnectorSpecificSettingCookieAuthUrl <string> -ConnectorSpecificSettingEssApiUrl <string> -ConnectorSpecificSettingFederatedAuthUrl <string> -ConnectorSpecificSettingLoginPwd <string> -ConnectorSpecificSettingLoginUserName <string> -ConnectorSpecificSettingRetailWebApiUrl <string> -ConnectorSpecificSettingSiteManagerUrl <string> -Name <string> -DesignatedActorId <string> -EnabledConnectorScenario <string[]> -EnabledWfiScenario <string[]> -SyncFrequencyInMin <Integer> -IfMatch <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet updates a Shifts connection instance. It allows the admin to make changes to the settings in the instance such as name, enables scenarios and sync frequency.

## EXAMPLES

### Example 1
```powershell
Set-CsTeamsShiftsConnectionInstance -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E9CD74" -ConnectorInstanceId "WCI-45500ca4-b392-4f0c-8703-3618fc6ddc9f" -ConnectorSpecificSettingAdminApiUrl "https://nehstdevwfm02.replgroup.com/retail/data/wfmadmin/api/v1-beta2" -ConnectorSpecificSettingCookieAuthUrl "https://nehstdevwfm02.replgroup.com/retail/data/login" -ConnectorSpecificSettingEssApiUrl "https://nehstdevfas01.replgroup.com/retail/data/wfmess/api/v1-beta1" -ConnectorSpecificSettingFederatedAuthUrl "https://nehstdevfas01.replgroup.com/retail/data/login" -ConnectorSpecificSettingLoginPwd $plainPwd -ConnectorSpecificSettingLoginUserName $WfmUserName -ConnectorSpecificSettingRetailWebApiUrl "https://nehstdevwfm02.replgroup.com/retail/data/retailwebapi/api/v1" -ConnectorSpecificSettingSiteManagerUrl "https://nehstdevfas01.replgroup.com/retail/data/wfmsm/api/v1-beta2" -DesignatedActorId "0c1141fa-1b17-43cc-a417-34c156b99779" -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest" -EnabledWfiScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest" -Name "MyInstance-Updated" -SyncFrequencyInMin 10 -IfMatch '"0a005fd6-0000-0d00-0000-60a76dbf0000"'
```

Updates the instance with ID "WCI-45500ca4-b392-4f0c-8703-3618fc6ddc9f" with name "MyInstance-Updated". Returns the object of created connector instance.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignatedActorId

The ID of the connection instance creator. You can retrieve user ID from Azure portal or Graph Explorer.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IfMatch

The Etag of connection instance. Note: this will be changed after each update of the connection instance. You can get it from instance details using [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorId

The ID of the shifts connector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

The connector's instance name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledConnectorScenario

The connector enabled scenarios that are synced from WFM system to Shifts in MS Teams. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledWfiScenarios

The WFI enabled scenarios that are synced from Shifts in MS Teams to WFM system. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncFrequencyInMin

The sync frequency in minutes.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingLoginUserName

The login user name to WFM team.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingLoginPwd

The login password to WFM team.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingAdminApiUrl

The admin api URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingCookieAuthUrl

The cookie authorization URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingEssApiUrl

The essential api URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingFederatedAuthUrl

The federated authorization URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingRetailWebApiUrl

The retail web api URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettingSiteManagerUrl

The site manager URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)
