---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionwfmteam
schema: 2.0.0
title: Get-CsTeamsShiftsConnectionWfmTeam
---

# Get-CsTeamsShiftsConnectionWfmTeam

## SYNOPSIS

This cmdlet supports retrieving the list of available Workforce management (WFM) teams in the connection instance.

## SYNTAX

### Get (Default)
```powershell
Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId <String> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### Get1
```powershell
Get-CsTeamsShiftsConnectionWfmTeam -ConnectionId <String> [-Authorization <String>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity1
```powershell
Get-CsTeamsShiftsConnectionWfmTeam -InputObject <IConfigApiBasedCmdletsIdentity> [-Authorization <String>]
 [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```powershell
Get-CsTeamsShiftsConnectionWfmTeam -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the WFM teams that are not currently mapped to a Microsoft Teams team, and thus can be mapped to a Microsoft Teams team in the connection instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b"
```
```output
Id      Name
--      ----
1000105 0002 - Bucktown
1000106 0003 - West Town
1000107 0005 - Old Town
1000108 0004 - River North
1000109 0001 - Wicker Park
1000111 2055
1000112 2056
1000114 1004
1000115 1003
1000116 1002
1000122 0010
1000124 0300
1000125 1000
1000126 4500
1000128 0006 - WFM Team 1
1000129 Test
```

Returns the WFM teams for the connection instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsConnectionWfmTeam -ConnectionId "a2d1b091-5140-4dd2-987a-98a8b5338744"
```
```output
Id      Name
--      ----
1000105 0002 - Bucktown
1000106 0003 - West Town
1000107 0005 - Old Town
1000108 0004 - River North
1000109 0001 - Wicker Park
1000111 2055
1000112 2056
1000114 1004
1000115 1003
1000116 1002
1000122 0010
1000124 0300
1000125 1000
1000126 4500
1000128 0006 - WFM Team 1
1000129 Test
```

Returns the WFM teams for the WFM connection with ID `a2d1b091-5140-4dd2-987a-98a8b5338744`.

## PARAMETERS

### -Authorization
Used to provide the necessary credentials for authenticating and authorizing the connection to the workforce management (WFM) system. This parameter ensures that the connection has the appropriate permissions to access and manage the data within the WFM system.

```yaml
Type: String
Parameter Sets: Get1, GetViaIdentity1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -ConnectionId

> Applicable: Microsoft Teams

The ID of the connection. You can retrieve it by running [Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection).

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

### -ConnectorInstanceId

> Applicable: Microsoft Teams

The ID of the connection instance. You can retrieve it by running [Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance).

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
Identity Parameter

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity1, GetViaIdentity
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection)

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance)

[Get-CsTeamsShiftsConnectionWfmUser](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionwfmuser)
