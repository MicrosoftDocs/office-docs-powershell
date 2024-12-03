---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsShiftsConnection
author: shane-malone
ms.author: shanemalone
manager: valk
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnection
schema: 2.0.0
---

# Set-CsTeamsShiftsConnection

## SYNOPSIS
This cmdlet sets an existing workforce management (WFM) connection.

## SYNTAX

### Set (Default)
```powershell
Set-CsTeamsShiftsConnection -ConnectionId <string> -Body <IUpdateWfmConnectionRequest> [-Authorization <string>] [-IfMatch <string>]
 [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>]
[-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetExpanded
```powershell
Set-CsTeamsShiftsConnection -ConnectionId <string> [-Authorization <string>] [-IfMatch <string>] [-ConnectorId <string>]
 [-ConnectorSpecificSettings <IUpdateWfmConnectionRequestConnectorSpecificSettings>] [-Etag <string>] [-Name <string>]
 [-State <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>]
[-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetViaIdentityExpanded
```powershell
Set-CsTeamsShiftsConnection -InputObject <IConfigApiBasedCmdletsIdentity> [-Authorization <string>] [-IfMatch <string>] [-ConnectorId <string>]
 [-ConnectorSpecificSettings <IUpdateWfmConnectionRequestConnectorSpecificSettings>] [-Etag <string>] [-Name <string>] [-State <string>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SetViaIdentity
```powershell
Set-CsTeamsShiftsConnection -InputObject <IConfigApiBasedCmdletsIdentity> -Body <IUpdateWfmConnectionRequest> [-Authorization <string>]
[-IfMatch <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>]
 [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates a Shifts WFM connection. It allows the admin to make changes to the settings such as the name and WFM URLs. Note that the update allows for, but does not require, the -ConnectorSpecificSettings.LoginPwd and ConnectorSpecificSettings.LoginUserName to be included.
This cmdlet can update every input field except -ConnectorId and -ConnectionId.

## EXAMPLES

### Example 1

```powershell
PS C:\> $connection = Get-CsTeamsShiftsConnection -ConnectionId 4dae9db0-0841-412c-8d6b-f5684bfebdd7
PS C:\> $result =  Set-CsTeamsShiftsConnection `
   -connectionId $connection.Id `
   -IfMatch $connection.Etag `
   -connectorId "6A51B888-FF44-4FEA-82E1-839401E00000" `
   -name "Cmdlet test connection - updated" `
   -connectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificBlueYonderSettingsRequest `
        -Property @{
            adminApiUrl = "https://contoso.com/retail/data/wfmadmin/api/v1-beta2"
            siteManagerUrl = "https://contoso.com/retail/data/wfmsm/api/v1-beta2"
            essApiUrl = "https://contoso.com/retail/data/wfmess/api/v1-beta1"
            retailWebApiUrl = "https://contoso.com/retail/data/retailwebapi/api/v1"
            cookieAuthUrl = "https://contoso.com/retail/data/login"
            federatedAuthUrl = "https://contoso.com/retail/data/login"
            LoginUserName = "PlaceholderForUsername"
            LoginPwd = "PlaceholderForPassword"
    }) `
    -state "Active"

PS C:\> $result | Format-List
```

```output

ConnectorId                              : 6A51B888-FF44-4FEA-82E1-839401E00000
ConnectorSpecificSettingAdminApiUrl      : https://www.contoso.com/retail/data/wfmadmin/api/v1-beta2
ConnectorSpecificSettingApiUrl           :
ConnectorSpecificSettingAppKey           :
ConnectorSpecificSettingClientId         :
ConnectorSpecificSettingCookieAuthUrl    : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingEssApiUrl        : https://www.contoso.com/retail/data/wfmess/api/v1-beta2
ConnectorSpecificSettingFederatedAuthUrl : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingRetailWebApiUrl  : https://www.contoso.com/retail/data/retailwebapi/api/v1
ConnectorSpecificSettingSiteManagerUrl   : https://www.contoso.com/retail/data/wfmsm/api/v1-beta2
ConnectorSpecificSettingSsoUrl           :
CreatedDateTime                          : 24/03/2023 04:58:23
Etag                                     : "5b00dd1b-0000-0400-0000-641d2df00000"
Id                                       : 4dae9db0-0841-412c-8d6b-f5684bfebdd7
LastModifiedDateTime                     : 24/03/2023 04:58:23
Name                                     : Cmdlet test connection - updated
State                                    : Active
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876

```

Updates the instance with the specified -ConnectionId. Returns the object of the updated connection.

In case of an error, you can capture the error response as follows:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

### Example 2

```powershell
PS C:\> $connection = Get-CsTeamsShiftsConnection -ConnectionId 79964000-286a-4216-ac60-c795a426d61a
PS C:\> $result =  Set-CsTeamsShiftsConnection `
   -connectionId $connection.Id `
   -IfMatch $connection.Etag `
   -connectorId "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0" `
   -name "Cmdlet test connection - updated" `
   -connectorSpecificSettings (New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificUkgDimensionsSettingsRequest `
        -Property @{
            apiUrl = "https://www.contoso.com/api"
            ssoUrl = "https://www.contoso.com/sso"
            appKey = "PlaceholderForAppKey"
            clientId = "Es5Q2fB4PXweCyto6Ms6J2kRB7uwAc3W"
            clientSecret = "PlaceholderForClientSecret"
            LoginUserName = "PlaceholderForUsername"
            LoginPwd = "PlaceholderForPassword"
    }) `
    -state "Active"
PS C:\> $result | Format-List
```

```output

ConnectorId                              : 95BF2848-2DDA-4425-B0EE-D62AEED4C0A0
ConnectorSpecificSettingAdminApiUrl      :
ConnectorSpecificSettingApiUrl           : https://www.contoso.com/api
ConnectorSpecificSettingAppKey           :
ConnectorSpecificSettingClientId         : Es5Q2fB4PXweCyto6Ms6J2kRB7uwAc3W
ConnectorSpecificSettingCookieAuthUrl    :
ConnectorSpecificSettingEssApiUrl        :
ConnectorSpecificSettingFederatedAuthUrl :
ConnectorSpecificSettingRetailWebApiUrl  :
ConnectorSpecificSettingSiteManagerUrl   :
ConnectorSpecificSettingSsoUrl           : https://www.contoso.com/sso
CreatedDateTime                          : 06/04/2023 11:05:39
Etag                                     : "3100fd6e-0000-0400-0000-642ea7840000"
Id                                       : a2d1b091-5140-4dd2-987a-98a8b5338744
LastModifiedDateTime                     : 06/04/2023 11:05:39
Name                                     : Cmdlet test connection - updated
State                                    : Active
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876

```

Updates the instance with the specified -ConnectionId. Returns the object of the updated connection.

In case of an error, you can capture the error response as follows:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

## PARAMETERS

### -Body
The request body.

```yaml
Type: IUpdateWfmConnectionRequest
Parameter Sets: Set, SetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break
Wait for .NET debugger to attach.

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
The WFM connection ID for the instance. This can be retrieved by running [Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection).

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
The connection name.

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

### -ConnectorSpecificSettings
The connector-specific settings.

```yaml
Type: IUpdateWfmConnectionRequestConnectorSpecificSettings
Parameter Sets: SetExpanded, SetViaIdentityExpanded
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
The state of the connection. Valid values are "Active" and "Disabled". A third value, "ErrorDisabled", signifies an error in the connection.

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

### -Authorization
Used to provide the necessary credentials for authenticating and authorizing the connection to the workforce management (WFM) system. This parameter ensures that the connection has the appropriate permissions to access and manage the data within the WFM system.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorId
Used to specify the unique identifier of the connector being used for the connection.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IUpdateWfmConnectionRequest

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IWfmConnectionResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection)

[New-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnection)

[Update-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/update-csteamsshiftsconnection)

[Test-CsTeamsShiftsConnectionValidate](https://learn.microsoft.com/powershell/module/teams/test-csteamsshiftsconnectionvalidate)
