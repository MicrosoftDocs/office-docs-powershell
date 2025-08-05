---
author: leonardospina
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: valk
Module Name: MicrosoftTeams
ms.author: lespina
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectioninstance
schema: 2.0.0
title: Get-CsTeamsShiftsConnectionInstance
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

ConnectionId                    : a2d1b091-5140-4dd2-987a-98a8b5338744
ConnectorAdminEmail             : {testAdmin@contoso.com}
ConnectorId                     : 95BF2848-2DDA-4425-B0EE-D62AEED4C0A0
CreatedDateTime                 : 07/04/2023 10:53:59
DesignatedActorId               : ec1a4edb-1a5f-4b2d-b2a4-37aaf3acd231
Etag                            : "4f00c221-0000-0400-0000-642ff6480000"
Id                              : WCI-b58d7a98-ab2c-473f-99a5-e0627d54c062
LastModifiedDateTime            : 07/04/2023 10:53:59
Name                            : My connection instance 1
State                           : Active
SyncFrequencyInMin              : 10
SyncScenarioOfferShiftRequest   : FromWfmToShifts
SyncScenarioOpenShift           : FromWfmToShifts
SyncScenarioOpenShiftRequest    : FromWfmToShifts
SyncScenarioShift               : FromWfmToShifts
SyncScenarioSwapRequest         : FromWfmToShifts
SyncScenarioTimeCard            : FromWfmToShifts
SyncScenarioTimeOff             : FromWfmToShifts
SyncScenarioTimeOffRequest      : FromWfmToShifts
SyncScenarioUserShiftPreference : FromWfmToShifts
TenantId                        : dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a
WorkforceIntegrationId          : WFI_2ab21992-b9b1-464a-b9cd-e0de1fac95b1

ConnectionId                    : a2d1b091-5140-4dd2-987a-98a8b5338744
ConnectorAdminEmail             : {}
ConnectorId                     : 95BF2848-2DDA-4425-B0EE-D62AEED4C0A0
CreatedDateTime                 : 07/04/2023 10:54:01
DesignatedActorId               : ec1a4edb-1a5f-4b2d-b2a4-37aab6ebd231
Etag                            : "4f005d22-0000-0400-0000-642ff64a0000"
Id                              : WCI-eba2865f-6cac-46f9-8733-e0631a4536e1
LastModifiedDateTime            : 07/04/2023 10:54:01
Name                            : My connection instance 2
State                           : Active
SyncFrequencyInMin              : 30
SyncScenarioOfferShiftRequest   : FromWfmToShifts
SyncScenarioOpenShift           : FromWfmToShifts
SyncScenarioOpenShiftRequest    : FromWfmToShifts
SyncScenarioShift               : FromWfmToShifts
SyncScenarioSwapRequest         : Disabled
SyncScenarioTimeCard            : Disabled
SyncScenarioTimeOff             : FromWfmToShifts
SyncScenarioTimeOffRequest      : FromWfmToShifts
SyncScenarioUserShiftPreference : Disabled
TenantId                        : dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a
WorkforceIntegrationId          : WFI_6b225907-b476-4d40-9773-08b86db7b11b
```

Returns the list of connection instances.

### Example 2
```powershell
PS C:\> $ci = Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId WCI-78F5116E-9098-45F5-B595-1153DF9D6F70
PS C:\> $ci.ToJsonString()
```
```output
{
  "syncScenarios": {
    "offerShiftRequest": "FromWfmToShifts",
    "openShift": "FromWfmToShifts",
    "openShiftRequest": "FromWfmToShifts",
    "shift": "FromWfmToShifts",
    "swapRequest": "Disabled",
    "timeCard": "Disabled",
    "timeOff": "FromWfmToShifts",
    "timeOffRequest": "FromWfmToShifts",
    "userShiftPreferences": "Disabled"
  },
  "id": "WCI-78F5116E-9098-45F5-B595-1153DF9D6F70",
  "tenantId": "dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a",
  "connectionId": "a2d1b091-5140-4dd2-987a-98a8b5338744",
  "connectorAdminEmails": [ ],
  "connectorId": "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0",
  "designatedActorId": "ec1a4edb-1a5f-4b2d-b2a4-37aab6ebd231",
  "name": "My connection instance 2",
  "syncFrequencyInMin": 30,
  "workforceIntegrationId": "WFI_6b225907-b476-4d40-9773-08b86db7b11b",
  "etag": "\"4f005d22-0000-0400-0000-642ff64a0000\"",
  "createdDateTime": "2023-04-07T10:54:01.8170000Z",
  "lastModifiedDateTime": "2023-04-07T10:54:01.8170000Z",
  "state": "Active"
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

[New-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsshiftsconnectioninstance)

[Set-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsshiftsconnectioninstance)

[Remove-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsshiftsconnectioninstance)
