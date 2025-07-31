---
author: leonardospina
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: valk
Module Name: MicrosoftTeams
ms.author: lespina
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectioninstance
schema: 2.0.0
title: New-CsTeamsShiftsConnectionInstance
---

# New-CsTeamsShiftsConnectionInstance

## SYNOPSIS
This cmdlet creates a Shifts connection instance.

## SYNTAX

### New (Default)
```
New-CsTeamsShiftsConnectionInstance -Body <IConnectorInstanceRequest> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### NewExpanded
```
New-CsTeamsShiftsConnectionInstance [-ConnectionId <string>] [-ConnectorAdminEmail <string[]>] [-DesignatedActorId <string>] [-Name <string>] [-State <string>] [-SyncFrequencyInMin <int>] [-SyncScenarioOfferShiftRequest <string>][-SyncScenarioOpenShift <string>] [-SyncScenarioOpenShiftRequest <string>] [-SyncScenarioShift <string>] [-SyncScenarioSwapRequest <string>] [-SyncScenarioTimeCard <string>] [-SyncScenarioTimeOff <string>][-SyncScenarioTimeOffRequest <string>] [-SyncScenarioUserShiftPreference <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a Shifts connection instance. It allows the admin to set up the environment for further connection settings.

## EXAMPLES

### Example 1

```powershell
PS C:\> $result = New-CsTeamsShiftsConnectionInstance `
-connectionId  "79964000-286a-4216-ac60-c795a426d61a" `
-name "Cmdlet test instance" `
-connectorAdminEmail @("admin@contoso.com", "superadmin@contoso.com") `
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
  "connectionId": "79964000-286a-4216-ac60-c795a426d61a",
  "connectorAdminEmails": [ "admin@contoso.com", "superadmin@contoso.com" ],
  "connectorId": "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0",
  "designatedActorId": "ec1a4edb-1a5f-4b2d-b2a4-37aab6ebd231",
  "name": "Cmdlet test instance",
  "syncFrequencyInMin": 10,
  "workforceIntegrationId": "WFI_6b225907-b476-4d40-9773-08b86db7b11b",
  "etag": "\"4f005d22-0000-0400-0000-642ff64a0000\"",
  "createdDateTime": "2023-04-07T10:54:01.8170000Z",
  "lastModifiedDateTime": "2023-04-07T10:54:01.8170000Z",
  "state": "Active"
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

### -ConnectionId
Gets or sets the WFM connection ID for the new instance. This can be retrieved by running [Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection).

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

### -DesignatedActorId
Gets or sets the designated actor ID that App acts as for Shifts Graph Api calls.

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
Parameter Sets: NewExpanded
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
Parameter Sets: NewExpanded
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
Parameter Sets: NewExpanded
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
Parameter Sets: NewExpanded
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
Parameter Sets: NewExpanded
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
Parameter Sets: NewExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioSwapRequest
The sync state for the swap shift request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

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

### -SyncScenarioTimeCard
The sync state for the time card scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

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

### -SyncScenarioTimeOff
The sync state for the time off scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

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

### -SyncScenarioTimeOffRequest
The sync state for the time off request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

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

### -SyncScenarioUserShiftPreference
The sync state for the user shift preferences scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

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

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance)

[Set-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnectioninstance)

[Remove-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnectioninstance)

[Get-CsTeamsShiftsConnectionConnector](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionconnector)

[Test-CsTeamsShiftsConnectionValidate](https://learn.microsoft.com/powershell/module/teams/test-csteamsshiftsconnectionvalidate)
