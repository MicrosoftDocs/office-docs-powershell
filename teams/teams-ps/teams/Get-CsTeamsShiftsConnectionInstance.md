---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionInstance
author: leonardospina
ms.author: lespina
manager: valk
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionInstance

## SYNOPSIS
This cmdlet returns the list of existing connection instances. It can also return the configuration details for a given connection instance.

## SYNTAX

### Get (Default)
```
Get-CsTeamsShiftsConnectionInstance [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### Get1
```
Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <String> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```
Get-CsTeamsShiftsConnectionInstance -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing connections. It can also return the configuration details for a given connection instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionInstance | Format-List
```
```output

ConnectorAdminEmail                      : {admin@contoso.com}
ConnectorId                              : 6A51B888-FF44-4FEA-82E1-839401E00000
ConnectorName                            : WFM 1
ConnectorSpecificSettingAdminApiUrl      : https://www.contoso.com/retail/data/wfmadmin/api/v1-beta3
ConnectorSpecificSettingApiUrl           :
ConnectorSpecificSettingClientId         :
ConnectorSpecificSettingCookieAuthUrl    : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingEssApiUrl        : https://www.contoso.com/retail/data/wfmess/api/v1-beta2
ConnectorSpecificSettingFederatedAuthUrl : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingRetailWebApiUrl  : https://www.contoso.com/retail/data/retailwebapi/api/v1
ConnectorSpecificSettingSiteManagerUrl   : https://www.contoso.com/retail/data/wfmsm/api/v1-beta4
ConnectorSpecificSettingSsoUrl           :
DesignatedActorId                        : 538C1F8F-320E-4C46-8109-1F08918B13ED
EnabledConnectorScenario                 : {Shift, SwapRequest, UserShiftPreferences, OpenShift...}
EnabledWfiScenario                       : {SwapRequest, OpenShiftRequest, TimeCard, TimeOffRequest}
Etag                                     : "05004cd2-0000-0400-0000-62fbc3e10000"
Id                                       : WCI-74710858-44EC-4BC1-B43C-B71479A232D6
Name                                     : My connector instance 1
SyncFrequencyInMin                       : 3
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876
WorkforceIntegrationId                   : WFI_0D3DCF76-F826-4416-99AC-056F83A4C9F7

ConnectorAdminEmail                      : {admin@contoso.com}
ConnectorId                              : 95BF2848-2DDA-4425-B0EE-D62AEED00000
ConnectorName                            : WFM 2
ConnectorSpecificSettingAdminApiUrl      :
ConnectorSpecificSettingApiUrl           : https://www.contoso.com/api
ConnectorSpecificSettingClientId         : 86q446dXbJz6UdZeOr1FrP8chDHDZ66nu
ConnectorSpecificSettingCookieAuthUrl    :
ConnectorSpecificSettingEssApiUrl        :
ConnectorSpecificSettingFederatedAuthUrl :
ConnectorSpecificSettingRetailWebApiUrl  :
ConnectorSpecificSettingSiteManagerUrl   :
ConnectorSpecificSettingSsoUrl           : https://www.contoso.com/sso
DesignatedActorId                        : 538C1F8F-320E-4C46-8109-1F08918B13ED
EnabledConnectorScenario                 : {Shift, SwapRequest, UserShiftPreferences, OpenShift...}
EnabledWfiScenario                       : {SwapRequest, UserShiftPreferences, OpenShiftRequest, TimeCard...}
Etag                                     : "dd011bc0-0000-0400-0000-62f4dc450000"
Id                                       : WCI-78F5116E-9098-45F5-B595-1153DF9D6F70
Name                                     : My connector instance 2
SyncFrequencyInMin                       : 30
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876
WorkforceIntegrationId                   : WFI_6E403D85-CCBA-4506-B62A-35A1D7B49E25
```


Returns the list of connection instances.

### Example 2
```powershell
PS C:\_\> $ci = Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId WCI-78F5116E-9098-45F5-B595-1153DF9D6F70
PS C:\_\> $ci.ToJsonString()
```
```output
{
  "connector": {
    "id": "95BF2848-2DDA-4425-B0EE-D62AEED00000",
    "name": "WFM 2"
  },
  "connectorSpecificSettings": {
    "apiUrl": "https://www.contoso.com/api",
    "ssoUrl": "https://www.contoso.com/sso",
    "clientId": "86q446dXbJz6UdZeOr1FrP8chDHDZ66nu"
  },
  "id": "WCI-78F5116E-9098-45F5-B595-1153DF9D6F70",
  "tenantId": "3FDCAAF2-863A-4520-97BA-DFA211595876",
  "name": "My connector instance 2",
  "enabledConnectorScenarios": [ "Shift", "SwapRequest", "UserShiftPreferences", "OpenShift", "OpenShiftRequest", "TimeCard", "TimeOff", "TimeOffRequest" ],
  "workforceIntegrationId": "WFI_6E403D85-CCBA-4506-B62A-35A1D7B49E25",
  "enabledWfiScenarios": [ "SwapRequest", "UserShiftPreferences", "OpenShiftRequest", "TimeCard", "TimeOffRequest" ],
  "syncFrequencyInMin": 30,
  "designatedActorId": "538C1F8F-320E-4C46-8109-1F08918B13ED",
  "connectorAdminEmails": [ "admin@contoso.com" ],
  "etag": "\"dd011bc0-0000-0400-0000-62f4dc450000\""
}
```
Returns the connection instance with the specified -ConnectorInstanceId.


## PARAMETERS

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

### -ConnectorInstanceId
The connector instance id

```yaml
Type: String
Parameter Sets: Get1
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

### -InputObject
Identity Parameter

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)
