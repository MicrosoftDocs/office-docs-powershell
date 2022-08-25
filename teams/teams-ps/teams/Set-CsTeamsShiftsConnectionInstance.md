---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsShiftsConnectionInstance
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/set-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# Set-CsTeamsShiftsConnectionInstance

## SYNOPSIS

This cmdlet updates a Shifts connection instance.

## SYNTAX

```
Set-CsTeamsShiftsConnectionInstance  -ConnectorId <string> -ConnectorInstanceId <string> -ConnectorSpecificSettings <Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorSpecificUkgDimensionsSettingsRequest> -Name <string> -DesignatedActorId <string> -EnabledConnectorScenario <string[]> -EnabledWfiScenario <string[]> -SyncFrequencyInMin <Integer> -IfMatch <string> [-ConnectorAdminEmail <String[]>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet updates a Shifts connection instance. It allows the admin to make changes to the settings in the instance such as name, enabled scenarios, and sync frequency. Note that the update allows for, but does not require, the -ConnectorSpecificSettings.LoginPwd and ConnectorSpecificSettings.LoginUserNameusername to be included.
This cmdlet can update every input fields except -ConnectorId and -ConnectorInstanceId

## EXAMPLES

### Example 1
```powershell
PS C:\> $result = Set-CsTeamsShiftsConnectionInstance  
    -ConnectorInstanceId "WCI-C6B1949E-FBA3-4374-B6F8-8BD2D4A255F3" `
    -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E9CD74" `
    -ConnectorAdminEmail "admin@contoso.com", "superadmin@contoso.com" `
    -DesignatedActorId "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8" `
    -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" `
    -EnabledWfiScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" `
    -Name "My Connector Instance" `
    -SyncFrequencyInMin 10 `
    -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificBlueYonderSettingsRequest `
    -Property @{
        AdminApiUrl = "https://contoso.com/retail/data/wfmadmin/api/v1-beta3"
        SiteManagerUrl = "https://contoso.com/retail/data/wfmsm/api/v1-beta4"
        EssApiUrl = "https://contoso.com/retail/data/wfmess/api/v1-beta2"
        RetailWebApiUrl = "https://contoso.com/retail/data/retailwebapi/api/v1"
        CookieAuthUrl = "https://contoso.com/retail/data/login"
        FederatedAuthUrl = "https://contoso.com/retail/data/login"
        LoginUserName = "PlaceholderForUsername"
        LoginPwd = "PlaceholderForPassword"
    })`
    -IfMatch $Etag

PS C:\> $result.ToJsonString()
```
```output

{
    "id": "WCI-C6B1949E-FBA3-4374-B6F8-8BD2D4A255F3",
    "tenantId": "113B4CBF-77D6-4456-AC4B-6A17EBD07EF8",
    "name": "My Connector Instance",
    "connector": {
        "id": "6A51B888-FF44-4FEA-82E1-839401E9CD74",
        "name": "Blue Yonder"
    },
    "connectorSpecificSettings": {
        "adminApiUrl ": "https://contoso.com/retail/data/wfmadmin/api/v1-beta2",
        "siteManagerUrl": "https://contoso.com/retail/data/wfmsm/api/v1-beta2",
        "essApiUrl": "https://contoso.com/retail/data/wfmess/api/v1-beta1",
        "retailWebApiUrl": "https://contoso.com/retail/data/retailwebapi/api/v1",
        "cookieAuthUrl": "https://contoso.com/retail/data/login",
        "federatedAuthUrl": "https://contoso.com/retail/data/login"
    },
    "enabledConnectorScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard"  ],
    "workforceIntegrationId": "WFI_8dbddbb0-6cba-4861-a541-192320cc0e88",
    "enabledWfiScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard"   ],
    "syncFrequencyInMin": 10,
    "designatedActorId": "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8",
    "etag": "\"0a005fd6-0000-0d00-0000-60a76dbf0000\""
    "connectorAdminEmails": [ "admin@contoso.com", "superadmin@contoso.com" ]
}

```
```powershell
PS C:\> $result = Set-CsTeamsShiftsConnectionInstance `
    -ConnectorInstanceId "WCI-C6B1949E-FBA3-4374-B6F8-8BD2D4A255F3" `
    -ConnectorId "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0" `
    -ConnectorAdminEmail "admin@contoso.com", "superadmin@contoso.com" `
    -DesignatedActorId "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8" `
    -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" `
    -EnabledWfiScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" `
    -Name "My Connector Instance" `
    -SyncFrequencyInMin 10 `
    -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificUkgDimensionsSettingsRequest `
    -Property @{
        apiUrl = "https://contoso.com/api"
        appKey = "myAppKey"
        clientId = "myClientId"
        clientSecret = "PlaceholderForClientSecret"
        LoginUserName = "PlaceholderForUsername"
        LoginPwd = "PlaceholderForPassword"
    }) `
    -IfMatch $Etag

PS C:\> $result.ToJsonString()
```
```output

{
    "id": "WCI-C6B1949E-FBA3-4374-B6F8-8BD2D4A255F3",
    "tenantId": "113B4CBF-77D6-4456-AC4B-6A17EBD07EF8",
    "name": "My Connector Instance",
    "connector": {
        "id": "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0",
        "name": "UKG Dimensions"
    },
    "connectorSpecificSettings": {
        apiUrl = "https://contoso.com/api"
        appKey = "myAppKey"
        clientId = "myClientId"
    },
    "enabledConnectorScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard"  ],
    "workforceIntegrationId": "WFI_8dbddbb0-6cba-4861-a541-192320cc0e88",
    "enabledWfiScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard"   ],
    "syncFrequencyInMin": 10,
    "designatedActorId": "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8",
    "etag": "\"0a005fd6-0000-0d00-0000-60a76dbf0000\""
    "connectorAdminEmails": [ "admin@contoso.com", "superadmin@contoso.com" ]
}
```


Updates the instance with the specified -ConnectorInstanceId. Returns the object of updated connector instance.

In case of error, we can capture the error response as following:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance that you want to update.

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

The Etag of connection instance. Note: this will be changed after each update of the connection instance. You can get it from instance details using [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md).

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

The connector enabled scenarios that are synced from the Workforce Management (WFM) system to Shifts in Microsoft Teams. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios.

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

The WFI enabled scenarios that are synced from Shifts in Microsoft Teams to the WFM system. You can use [Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md) to get supported scenarios.

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

### -ConnectorSpecificSetting.LoginUserName

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

### -ConnectorSpecificSetting.LoginPwd

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

### -ConnectorSpecificSettings.AdminApiUrl

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

### -ConnectorSpecificSettings.CookieAuthUrl

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

### -ConnectorSpecificSettings.EssApiUrl

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

### -ConnectorSpecificSettings.FederatedAuthUrl

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

### -ConnectorSpecificSettings.RetailWebApiUrl

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

### -ConnectorSpecificSettings.SiteManagerUrl

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

### -ConnectorSpecificSettings.ApiUrl

The api URL.

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

### -ConnectorSpecificSettings.SsoUrl

The SSO URL.

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

### -ConnectorSpecificSettings.AppKey

The AppKey.

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

### -ConnectorSpecificSettings.ClientId

The ClientId.

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

### -ConnectorSpecificSettings.ClientSecret

The client secret.

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

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)
