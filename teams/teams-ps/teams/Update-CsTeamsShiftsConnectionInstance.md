---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: MicrosoftTeams
title: Update-CsTeamsShiftsConnectionInstance
author: nunocorreia-ms
ms.author: nunocorreia
manager:
online version: https://docs.microsoft.com/powershell/module/teams/update-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# Update-CsTeamsShiftsConnectionInstance

## SYNOPSIS
This cmdlet updates Shifts connection instance fields.

## SYNTAX

### Update (Default)
```
Update-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <string> -IfMatch <string> -Body <IUpdateConnectorInstanceFieldsRequest> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UpdateExpanded
```
Update-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <string> -IfMatch <string> [-ConnectionId <string>] [-ConnectorAdminEmail <string[]>] [-DesignatedActorId <string>] [-Etag <string>] [-Name <string>] [-State <string>] [-SyncFrequencyInMin <int>] [-SyncScenarioOfferShiftRequest <string>] [-SyncScenarioOpenShift <string>] [-SyncScenarioOpenShiftRequest <string>] [-SyncScenarioShift <string>] [-SyncScenarioSwapRequest <string>] [-SyncScenarioTimeCard <string>] [-SyncScenarioTimeOff <string>] [-SyncScenarioTimeOffRequest <string>] [-SyncScenarioUserShiftPreference <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UpdateViaIdentityExpanded
```
Update-CsTeamsShiftsConnectionInstance -InputObject <IConfigApiBasedCmdletsIdentity> -IfMatch <string> [-ConnectionId <string>] [-ConnectorAdminEmail <string[]>] [-DesignatedActorId <string>] [-Etag <string>] [-Name <string>] [-State <string>] [-SyncFrequencyInMin <int>] [-SyncScenarioOfferShiftRequest <string>] [-SyncScenarioOpenShift <string>] [-SyncScenarioOpenShiftRequest <string>] [-SyncScenarioShift <string>] [-SyncScenarioSwapRequest <string>] [-SyncScenarioTimeCard <string>] [-SyncScenarioTimeOff <string>] [-SyncScenarioTimeOffRequest <string>] [-SyncScenarioUserShiftPreference <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UpdateViaIdentity
```
Update-CsTeamsShiftsConnectionInstance -InputObject <IConfigApiBasedCmdletsIdentity> -IfMatch <string> -Body <IUpdateConnectorInstanceFieldsRequest> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates a Shifts connection instance. Similar to the Set-CsTeamsShiftsConnectionInstance cmdlet, it allows the admin to make changes to the settings in the instance such as name, enabled scenarios, and sync frequency. The complete list of fields is not required allowing the user to update single fields of the instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> $connectionInstance = Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId WCI-eba2865f-6cac-46f9-8733-e0631a4536e1
PS C:\> $result = Update-CsTeamsShiftsConnectionInstance `
    -connectorInstanceId "WCI-eba2865f-6cac-46f9-8733-e0631a4536e1"
    -IfMatch $connectionInstance.Etag `
    -connectionId  "79964000-286a-4216-ac60-c795a426d61a" `
    -name "Cmdlet test instance - updated" `
    -syncFrequencyInMin "30" `

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
  "syncFrequencyInMin": 30,
  "workforceIntegrationId": "WFI_6b225907-b476-4d40-9773-08b86db7b11b",
  "etag": "\"4f005d22-0000-0400-0000-642ff64a0000\"",
  "createdDateTime": "2023-04-07T10:54:01.8170000Z",
  "lastModifiedDateTime": "2023-04-07T10:54:01.8170000Z",
  "state" : "Active"
}

```

Updates the instance with the specified -ConnectorInstanceId with the given name and sync frequency. Returns the object of the updated connector instance.

## PARAMETERS

### -Body
The request body.

```yaml
Type: IUpdateConnectorInstanceFieldsRequest
Parameter Sets: Update, UpdateViaIdentity
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break
Wait for the .NET debugger to attach.

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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorInstanceId
The connector instance ID.

```yaml
Type: String
Parameter Sets: Update, UpdateExpanded
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignatedActorId
The designated actor ID that App acts as for Shifts Graph API calls.

```yaml
Type: String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncScenarioOfferShiftRequest
The sync state for the offer shift request scenario. Valid values are "Disabled", "FromWfmToShifts", and "TwoWay".

```yaml
Type: String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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

### -IfMatch
The value of the ETag field as returned by the cmdlets.

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
Identity Parameter

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: UpdateViaIdentityExpanded, UpdateViaIdentity
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:
Required: False
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
Parameter Sets: UpdateViaIdentityExpanded, UpdateViaIdentity
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:
Required: False
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

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IUpdateConnectorInstanceFieldsRequest

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConnectorInstanceResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)

[Test-CsTeamsShiftsConnectionValidate](Test-CsTeamsShiftsConnectionValidate.md)
