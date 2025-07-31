---
author: serdarsoysal
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: valk
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnection
schema: 2.0.0
title: New-CsTeamsShiftsConnection
---

# New-CsTeamsShiftsConnection

## SYNOPSIS
This cmdlet creates a new workforce management (WFM) connection.

## SYNTAX

### New (Default)
```powershell
New-CsTeamsShiftsConnection -Body <IWfmConnectionRequest> [-Authorization <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### NewExpanded
```powershell
New-CsTeamsShiftsConnection -ConnectorId <string> -ConnectorSpecificSettings <IWfmConnectionRequestConnectorSpecificSettings> -Name <string> -State <string> [-Authorization <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a Shifts WFM connection. It allows the admin to set up the environment for creating connection instances.

## EXAMPLES

### Example 1

```powershell
PS C:\> $result =  New-CsTeamsShiftsConnection `
   -connectorId "6A51B888-FF44-4FEA-82E1-839401E00000" `
   -name "Cmdlet test connection" `
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
{
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
Name                                     : Cmdlet test connection
State                                    : Active
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876
}
```

Returns the object of the created connection.

In case of an error, we can capture the error response as follows:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

### Example 2

```powershell
PS C:\> $result = New-CsTeamsShiftsConnection `
   -connectorId "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0" `
   -name "Cmdlet test connection" `
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
Name                                     : Cmdlet test connection
State                                    : Active
TenantId                                 : 3FDCAAF2-863A-4520-97BA-DFA211595876
```

## PARAMETERS

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

### -Body

The request body.

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

### -ConnectorId
The WFM connector ID.

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
The connection name.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ConnectorSpecificSettingsRequest
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
The connection name.

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

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IWfmConnectionRequest

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IWfmConnectionResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection)

[Set-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnection)

[Update-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/update-csteamsshiftsconnection)

[Get-CsTeamsShiftsConnectionConnector](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionconnector)

[Test-CsTeamsShiftsConnectionValidate](https://learn.microsoft.com/powershell/module/teams/test-csteamsshiftsconnectionvalidate)
