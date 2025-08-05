---
author: leonardospina
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: valk
Module Name: MicrosoftTeams
ms.author: lespina
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsshiftsconnectioninstance
schema: 2.0.0
title: Set-CsTeamsShiftsConnectionInstance
---

# Set-CsTeamsShiftsConnectionInstance

## SYNOPSIS
This cmdlet updates a Shifts connection instance.

## SYNTAX

### Set (Default)
```powershell
Set-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <string> -IfMatch <string> -Body <IUpdateConnectorInstanceRequest>
[-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>]
[-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetExpanded
```powershell
Set-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <string> -IfMatch <string> [-ConnectionId <string>] [-ConnectorAdminEmail <string[]>]
[-DesignatedActorId <string>] [-Etag <string>] [-Name <string>] [-State <string>] [-SyncFrequencyInMin <int>] [-SyncScenarioOfferShiftRequest <string>]
[-SyncScenarioOpenShift <string>] [-SyncScenarioOpenShiftRequest <string>] [-SyncScenarioShift <string>] [-SyncScenarioSwapRequest <string>]
 [-SyncScenarioTimeCard <string>] [-SyncScenarioTimeOff <string>] [-SyncScenarioTimeOffRequest <string>] [-SyncScenarioUserShiftPreference <string>]
 [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetViaIdentityExpanded
```powershell
Set-CsTeamsShiftsConnectionInstance -InputObject <IConfigApiBasedCmdletsIdentity> -IfMatch <string> [-ConnectionId <string>] [-ConnectorAdminEmail <string[]>]
 [-DesignatedActorId <string>] [-Etag <string>] [-Name <string>] [-State <string>] [-SyncFrequencyInMin <int>] [-SyncScenarioOfferShiftRequest <string>]
[-SyncScenarioOpenShift <string>] [-SyncScenarioOpenShiftRequest <string>] [-SyncScenarioShift <string>] [-SyncScenarioSwapRequest <string>]
 [-SyncScenarioTimeCard <string>] [-SyncScenarioTimeOff <string>] [-SyncScenarioTimeOffRequest <string>] [-SyncScenarioUserShiftPreference <string>]
 [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetViaIdentity
```powershell
Set-CsTeamsShiftsConnectionInstance -InputObject <IConfigApiBasedCmdletsIdentity> -IfMatch <string> -Body <IUpdateConnectorInstanceRequest> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates a Shifts connection instance. It allows the admin to make changes to the settings in the instance such as name, enabled scenarios, and sync frequency.
This cmdlet can update every input field except -ConnectorId and -ConnectorInstanceId.

## EXAMPLES

### Example 1

```powershell
PS C:\> $connectionInstance = Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId WCI-eba2865f-6cac-46f9-8733-e0631a4536e1
PS C:\> $result = Set-CsTeamsShiftsConnectionInstance `
    -connectorInstanceId "WCI-eba2865f-6cac-46f9-8733-e0631a4536e1"
    -IfMatch $connectionInstance.Etag `
    -connectionId  "79964000-286a-4216-ac60-c795a426d61a" `
    -name "Cmdlet test instance - updated" `
    -connectorAdminEmail @() `
    -designatedActorId "93f85765-47db-412d-8f06-9844718762a1" `
    -State "Active" `
    -syncFrequencyInMin "10" `
    -SyncScenarioOfferShiftRequest "FromWfmToShifts" `
    -SyncScenarioOpenShift "FromWfmToShifts" `
    -SyncScenarioOpenShiftRequest "FromWfmToShifts" `
    -SyncScenarioShift "FromWfmToShifts" `
    -SyncScenarioSwapRequest "FromWfmToShifts" `
    -SyncScenarioTimeCard "FromWfmToShifts" `
    -SyncScenarioTimeOff "FromWfmToShifts" `
    -SyncScenarioTimeOffRequest "FromWfmToShifts" `
    -SyncScenarioUserShiftPreference "Disabled"

PS C:\> $result.ToJsonString()
```

```output

{
  "syncScenarios": {
    "offerShiftRequest": "FromWfmToShifts",
    "openShift": "FromWfmToShifts",
    "openShiftRequest": "FromWfmToShifts",
    "shift": "FromWfmToShifts",
    "swapRequest": "FromWfmToShifts",
    "timeCard": "FromWfmToShifts",
    "timeOff": "FromWfmToShifts",
    "timeOffRequest": "FromWfmToShifts",
    "userShiftPreferences": "Disabled"
  },
  "id": "WCI-eba2865f-6cac-46f9-8733-e0631a4536e1",
  "tenantId": "dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a",
  "connectionId": "a2d1b091-5140-4dd2-987a-98a8b5338744",
  "connectorAdminEmails": [ ],
  "connectorId": "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0",
  "designatedActorId": "ec1a4edb-1a5f-4b2d-b2a4-37aab6ebd231",
  "name": "Cmdlet test instance - updated",
  "syncFrequencyInMin": 10,
  "workforceIntegrationId": "WFI_6b225907-b476-4d40-9773-08b86db7b11b",
  "etag": "\"4f005d22-0000-0400-0000-642ff64a0000\"",
  "createdDateTime": "2023-04-07T10:54:01.8170000Z",
  "lastModifiedDateTime": "2023-04-07T10:54:01.8170000Z",
  "state": "Active"
}

```

Updates the instance with the specified -ConnectorInstanceId. Returns the object of the updated connector instance.

In case of error, we can capture the error response as following:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

## PARAMETERS

### -Body
The request body

```yaml
Type: IConnectorInstanceRequest
Parameter Sets: Set, SetViaIdentity
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

### -ConnectionId
Gets or sets the WFM connection ID for the new instance. This can be retrieved by running [Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnection).

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorAdminEmail
Gets or sets the list of connector admin email addresses.

```yaml
Type: String[]
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorInstanceId
The Id of the connector instance to be updated.

```yaml
Type: String
Parameter Sets: SetExpanded, Set
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignatedActorId
Gets or sets the designated actor ID that App acts as for Shifts Graph API calls.

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Etag
Used to manage concurrency control. It helps ensure that updates to a Shifts connection instance are only applied if the instance has not been modified since it was last retrieved. This is particularly useful in preventing conflicts when multiple administrators might be making changes simultaneously.

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend
SendAsync Pipeline Steps to be appended to the front of the pipeline.

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
SendAsync Pipeline Steps to be prepended to the front of the pipeline.

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

### -IfMatch
The value of the etag field as returned by the cmdlets.

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

### -InputObject
Identity Parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: SetViaIdentityExpanded, SetViaIdentity
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
The connector instance name.

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
The URI for the proxy server to use.

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
Credentials for a proxy server to use for the remote call.

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
Use the default credentials for the proxy.

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

### -State
The state of the connection instance. Valid values are "Active" and "Disabled". A third value, "ErrorDisabled", signifies an error in the connection instance.

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncFrequencyInMin
The sync frequency in minutes.

```yaml
Type: Int32
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioOfferShiftRequest
The sync state for the offer shift request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioOpenShift
The sync state for the open shift scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioOpenShiftRequest
The sync state for the open shift request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioShift
The sync state for the shift scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioSwapRequest
The sync state for the shift swap request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioTimeCard
The sync state for the time card scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioTimeOff
The sync state for the time off scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioTimeOffRequest
The sync state for the time off request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioUserShiftPreference
The sync state for the user shift preferences scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: SetExpanded, SetViaIdentityExpanded
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

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceRequest

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectioninstance)

[New-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsshiftsconnectioninstance)

[Update-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/update-csteamsshiftsconnectioninstance)

[Remove-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsshiftsconnectioninstance)

[Test-CsTeamsShiftsConnectionValidate](https://learn.microsoft.com/powershell/module/microsoftteams/test-csteamsshiftsconnectionvalidate)
