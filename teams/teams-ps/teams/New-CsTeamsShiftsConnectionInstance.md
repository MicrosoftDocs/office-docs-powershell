---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsShiftsConnectionInstance
author: leonardospina
ms.author: lespina
manager: valk
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# New-CsTeamsShiftsConnectionInstance

## SYNOPSIS
This cmdlet creates a Shifts connection instance.

## SYNTAX

### New (Default)
```
New-CsTeamsShiftsConnectionInstance -Body <IConnectorInstanceRequest> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### NewExpanded
```
New-CsTeamsShiftsConnectionInstance -ConnectorId <String>
 -ConnectorSpecificSettings <IConnectorInstanceRequestConnectorSpecificSettings> -DesignatedActorId <String>
 -EnabledConnectorScenario <String[]> -EnabledWfiScenario <String[]> -Name <String> -SyncFrequencyInMin <Int32>
 [-ConnectorAdminEmail <String[]>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a Shifts connection instance. It allows the admin to set up the environment for further connection settings.

## EXAMPLES


### Example WFM 1 Connection

```powershell
   PS C:\> $result = New-CsTeamsShiftsConnectionInstance -ConnectorId "6A51B888-FF44-4FEA-82E1-839401E00000" -ConnectorAdminEmail "admin@contoso.com", "superadmin@contoso.com" -DesignatedActorId "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8" -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" -EnabledWfiScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" -Name "My Connector Instance" -SyncFrequencyInMin 10 -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificBlueYonderSettingsRequest -Property @{ AdminApiUrl = "https://contoso.com/retail/data/wfmadmin/api/v1-beta3"; SiteManagerUrl = "https://contoso.com/retail/data/wfmsm/api/v1-beta4"; EssApiUrl = "https://contoso.com/retail/data/wfmess/api/v1-beta2"; RetailWebApiUrl = "https://contoso.com/retail/data/retailwebapi/api/v1"; CookieAuthUrl = "https://contoso.com/retail/data/login"; FederatedAuthUrl = "https://contoso.com/retail/data/login"; LoginUserName = "PlaceholderForUsername"; LoginPwd = "PlaceholderForPassword" })

   PS C:\> $result.ToJsonString()
```
```output
{
    "id": "WCI-45500ca4-b392-4f0c-8703-3618fc6ddc9f",
    "tenantId": "113B4CBF-77D6-4456-AC4B-6A17EBD07EF8",
    "name": "My Connector Instance",
    "connector": {
        "id": "6A51B888-FF44-4FEA-82E1-839401E00000",
        "name": "WFM 1"
    },
    "connectorSpecificSettings": {
        "adminApiUrl ": "https://contoso.com/retail/data/wfmadmin/api/v1-beta2",
        "siteManagerUrl": "https://contoso.com/retail/data/wfmsm/api/v1-beta2",
        "essApiUrl": "https://contoso.com/retail/data/wfmess/api/v1-beta1",
        "retailWebApiUrl": "https://contoso.com/retail/data/retailwebapi/api/v1",
        "cookieAuthUrl": "https://contoso.com/retail/data/login",
        "federatedAuthUrl": "https://contoso.com/retail/data/login"
    },
    "enabledConnectorScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" ],
    "workforceIntegrationId": "WFI_8dbddbb0-6cba-4861-a541-192320cc0e88",
    "enabledWfiScenarios": [ "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" ],
    "syncFrequencyInMin": 10,
    "designatedActorId": "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8",
    "etag": "\"0a005fd6-0000-0d00-0000-60a76dbf0000\"",
    "connectorAdminEmails": [ "admin@contoso.com", "superadmin@contoso.com" ]
}
```


Returns the object of created connector instance.

In case of an error, we can capture the error response as follows:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

### Example WFM 2 Connection

```powershell
PS C:\> $result = New-CsTeamsShiftsConnectionInstance -ConnectorId "95BF2848-2DDA-4425-B0EE-D62AEED00000" -ConnectorAdminEmail "admin@contoso.com", "superadmin@contoso.com" -DesignatedActorId "C5A60335-9FBD-4E4E-B3AE-1F2E7E5E92E8" -EnabledConnectorScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" -EnabledWfiScenario "shift", "swapRequest", "openShift", "openShiftRequest", "timeOff", "timeOffRequest", "timeCard" -Name "My Connector Instance" -SyncFrequencyInMin 10 -ConnectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificUkgDimensionsSettingsRequest -Property @{ apiUrl = "https://contoso.com/api"; ssoUrl = "https://contoso.com/sso"; appKey = "myAppKey"; clientId = "myClientId"; clientSecret = "PlaceholderForClientSecret"; LoginUserName = "PlaceholderForUsername"; LoginPwd = "PlaceholderForPassword" })

PS C:\> $result.ToJsonString()
```
```output
{
    "id": "WCI-45500ca4-b392-4f0c-8703-3618fc6ddc9f",
    "tenantId": "113B4CBF-77D6-4456-AC4B-6A17EBD07EF8",
    "name": "My Connector Instance",
    "connector": {
        "id": "95BF2848-2DDA-4425-B0EE-D62AEED00000",
        "name": "WFM 2"
    },
    "connectorSpecificSettings": {
        apiUrl = "https://contoso.com/api"
        ssoUrl = "https://contoso.com/sso"
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


Returns the object of created connector instance.

In case of an error, we can capture the error response as follows:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

## PARAMETERS

### -Body
The request body 

```yaml
Type: IConnectorInstanceRequest
Parameter Sets: New
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break
Wait for .NET debugger to attach

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorAdminEmail
Gets or sets the list of connector admin email addresses.

```yaml
Type: String[]
Parameter Sets: NewExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorId
The connector id

```yaml
Type: String
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSpecificSettings
The connector specific settings

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

### -DesignatedActorId
Gets or sets the designated actor id that App acts as for Shifts Graph Api calls.

```yaml
Type: String
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledConnectorScenario
The connector enabled scenarios that are synced from WFM system to Shifts in MS Teams.

```yaml
Type: String[]
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledWfiScenario
The WFI enabled scenarios that are synced from Shifts in MS Teams to WFM system.

```yaml
Type: String[]
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend
SendAsync Pipeline Steps to be appended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend
SendAsync Pipeline Steps to be prepended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The connector instance name.

```yaml
Type: String
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
The URI for the proxy server to use
```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyCredential
Credentials for a proxy server to use for the remote call

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials
Use the default credentials for the proxy

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncFrequencyInMin
The sync frequency in minutes.

```yaml
Type: Int32
Parameter Sets: NewExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceRequest

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)

[Get-CsTeamsShiftsConnectionConnector](Get-CsTeamsShiftsConnectionConnector.md)

[Test-CsTeamsShiftsConnectionValidate](Test-CsTeamsShiftsConnectionValidate.md)
