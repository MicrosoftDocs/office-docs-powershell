---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsShiftsConnectionInstance
author: gucsun
ma.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# New-CsTeamsShiftsConnectionInstance

## SYNOPSIS

This cmdlet creates a Shifts connection instance.

## SYNTAX

```
New-CsTeamsShiftsConnectionInstance -ConnectorId <string> -ConnectorSpecificSettingAdminApiUrl <string> -ConnectorSpecificSettingCookieAuthUrl <string> -ConnectorSpecificSettingEssApiUrl <string> -ConnectorSpecificSettingFederatedAuthUrl <string> -ConnectorSpecificSettingLoginPwd <string> -ConnectorSpecificSettingLoginUserName <string> -ConnectorSpecificSettingRetailWebApiUrl <string> -ConnectorSpecificSettingSiteManagerUrl <string> -Name <string> -DesignatedActorId <string> -EnabledConnectorScenario <string[]> -EnabledWfiScenario <string[]> -SyncFrequencyInMin <Integer> [-ConnectorAdminEmail <String[]>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a Shifts connection instance. It allows the admin to set up the environment for further connection settings.

## EXAMPLES

### Example 1
```powershell
New-CsTeamsShiftsConnectionInstance -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E9CD74" -ConnectorSpecificSettingAdminApiUrl "https://www.contoso.com/retail/data/wfmadmin/api/v1-beta2" -ConnectorSpecificSettingCookieAuthUrl "https://www.contoso.com/retail/data/login" -ConnectorSpecificSettingEssApiUrl "https://www.contoso.com/retail/data/wfmess/api/v1-beta1" -ConnectorSpecificSettingFederatedAuthUrl "https://www.contoso.com/retail/data/login" -ConnectorSpecificSettingLoginPwd "MyPassword" -ConnectorSpecificSettingLoginUserName "MyUserName" -ConnectorSpecificSettingRetailWebApiUrl "https://www.contoso.com/retail/data/retailwebapi/api/v1" -ConnectorSpecificSettingSiteManagerUrl "https://www.contoso.com/retail/data/wfmsm/api/v1-beta2" -DesignatedActorId "123451fa-1b17-43cc-a417-34c156b99779" -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest" -EnabledWfiScenario "swapRequest", "openShiftRequest", "timeOffRequest" -Name "MyInstance" -SyncFrequencyInMin 10  -ConnectorAdminEmail "test@abc.com", "test2@abc.com"
```
```output
{
    "id": "WCI-648a8c8f-0ca3-460b-b71c-0d038d6d6e09",
    "tenantId": "12345b34-ccb0-47e1-bdb7-e49db9c7c14a",
    "name": "MyInstance",
    "connector": {
        "id": "6A51B888-FF44-4FEA-82E1-839401E9CD74",
        "name": "Contoso V1"
    },
    "connectorSpecificSettings": {
        "adminApiUrl": "https://www.contoso.com/retail/data/wfmadmin/api/v1-beta2",
        "siteManagerUrl": "https://www.contoso.com/retail/data/wfmsm/api/v1-beta2",
        "essApiUrl": "https://www.contoso.com/retail/data/wfmess/api/v1-beta1",
        "retailWebApiUrl": "https://www.contoso.com/retail/data/retailwebapi/api/v1",
        "cookieAuthUrl": "https://www.contoso.com/retail/data/login",
        "federatedAuthUrl": "https://www.contoso.com/retail/data/login"
    },
    "enabledConnectorScenarios": [
        "Shift",
        "SwapRequest",
        "UserShiftPreferences",
        "OpenShift",
        "OpenShiftRequest",
        "TimeOff",
        "TimeOffRequest",
        "TimeCard"
    ],
    "workforceIntegrationId": "WFI_fe5e773e-784d-4a19-be2b-808dde071d88",
    "enabledWfiScenarios": [
        "SwapRequest",
        "OpenShiftRequest",
        "TimeOffRequest",
        "TimeCard"
    ],
    "syncFrequencyInMin": 10,
    "designatedActorId": "12345a2d-422c-4d4b-a2db-4cea80f98255",
    "connectorAdminEmails": [
        "test@abc.com",
        "test2@abc.com"
    ],
    "etag": "\"28007861-0000-0400-0000-60d3579b0000\""
}
```

Returns the object of created connector instance.

In case of error, we can capture the error response as following:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

## PARAMETERS

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

### -ConnectorId

The ID of the Shifts Connector.

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

The connector instance's name.

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

The connector enabled scenarios that are synced from the Workforce management (WFM) system to Shifts in Microsoft Teams. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios.

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

### -EnabledWfiScenario

The WFI enabled scenarios that are synced from Shifts in MS Teams to WFM system. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios.

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

The admin API URL.

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

The essential API URL.

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

### -ConnectorAdminEmail

The list of connector admin email addresses that receive result notifications.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)

[Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md)
