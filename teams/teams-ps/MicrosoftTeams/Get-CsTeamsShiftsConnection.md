---
author: serdarsoysal
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: valk
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection
schema: 2.0.0
title: Get-CsTeamsShiftsConnection
---

# Get-CsTeamsShiftsConnection

## SYNOPSIS
This cmdlet returns the list of existing workforce management (WFM) connections. It can also return the configuration details for a given WFM connection.

## SYNTAX

### Get (Default)
```powershell
Get-CsTeamsShiftsConnection [-Authorization <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### Get1
```powershell
Get-CsTeamsShiftsConnection -ConnectionId <string> [-Authorization <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```powershell
Get-CsTeamsShiftsConnection -InputObject <IConfigApiBasedCmdletsIdentity> [-Authorization <string>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing connections. It can also return the configuration details for a given connection.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnection | Format-List
```
```output
ConnectorId                              : 6A51B888-FF44-4FEA-82E1-839401E00000
ConnectorSpecificSettingAdminApiUrl      : https://www.contoso.com/retail/data/wfmadmin/api/v1-beta3
ConnectorSpecificSettingApiUrl           :
ConnectorSpecificSettingAppKey           :
ConnectorSpecificSettingClientId         :
ConnectorSpecificSettingCookieAuthUrl    : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingEssApiUrl        : https://www.contoso.com/retail/data/wfmess/api/v1-beta2
ConnectorSpecificSettingFederatedAuthUrl : https://www.contoso.com/retail/data/login
ConnectorSpecificSettingRetailWebApiUrl  : https://www.contoso.com/retail/data/retailwebapi/api/v1
ConnectorSpecificSettingSiteManagerUrl   : https://www.contoso.com/retail/data/wfmsm/api/v1-beta4
ConnectorSpecificSettingSsoUrl           :
CreatedDateTime                          : 24/03/2023 04:58:23
Etag                                     : "5b00dd1b-0000-0400-0000-641d2df00000"
Id                                       : 4dae9db0-0841-412c-8d6b-f5684bfebdd7
LastModifiedDateTime                     : 24/03/2023 04:58:23
Name                                     : My connection 1
State                                    : Active
TenantId                                 : dfd24b34-ccb0-47e1-bdb7-000000000000

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
Name                                     : My connection 2
State                                    : Active
TenantId                                 : dfd24b34-ccb0-47e1-bdb7-000000000000
```

Returns the list of connections.

### Example 2
```powershell
PS C:\> $connection = Get-CsTeamsShiftsConnection -ConnectionId a2d1b091-5140-4dd2-987a-98a8b5338744
PS C:\> $connection.ToJsonString()
```
```output
{
  "connectorSpecificSettings": {
    "apiUrl": "https://www.contoso.com/api",
    "ssoUrl": "https://www.contoso.com/sso",
    "clientId": "Es5Q2fB4PXweCyto6Ms6J2kRB7uwAc3W"
  },
  "id": "a2d1b091-5140-4dd2-987a-98a8b5338744",
  "tenantId": "dfd24b34-ccb0-47e1-bdb7-000000000000",
  "connectorId": "95BF2848-2DDA-4425-B0EE-D62AEED4C0A0",
  "name": "My connection 2",
  "etag": "\"3100fd6e-0000-0400-0000-642ea7840000\"",
  "createdDateTime": "2023-04-06T11:05:39.8790000Z",
  "lastModifiedDateTime": "2023-04-06T11:05:39.8790000Z",
  "state": "Active"
}
```
Returns the connection with the specified -ConnectionId.

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

### -ConnectionId
The connection ID.

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

### -InputObject
Identity Parameter.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IWfmConnectionResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorDetailsResponse

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnection)

[Set-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnection)

[Update-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/update-csteamsshiftsconnection)
