---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectionoperation
schema: 2.0.0
title: Get-CsTeamsShiftsConnectionOperation
---

# Get-CsTeamsShiftsConnectionOperation

## SYNOPSIS

This cmdlet gets the requested batch mapping operation.

## SYNTAX

### Get (Default)
```
Get-CsTeamsShiftsConnectionOperation -OperationId <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```
Get-CsTeamsShiftsConnectionOperation -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the details of a specific batch team mapping operation. The batch mapping operation can be submitted by running [New-CsTeamsShiftsConnectionBatchTeamMap](New-CsTeamsShiftsConnectionBatchTeamMap.md).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionOperation -OperationId c79131b7-9ecb-484b-a8df-2959c7c1e5f2
```

```output
CreatedDateTime      LastActionDateTime   Id                                     Status     TenantId                             Type                  WfmConnectorInstanceId
---------------      ------------------   -----------                            ------     --------                             ----                  ----------------------
12/6/2021 7:28:51 PM 12/6/2021 7:28:51 PM c79131b7-9ecb-484b-a8df-2959c7c1e5f2   NotStarted dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a TeamsMappingOperation WCI-2afeb8ec-a0f6-4580-8f1e-85fd4a113e01
```

Returns the details of batch mapping operation with ID `c79131b7-9ecb-484b-a8df-2959c7c1e5f2`.

## PARAMETERS

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
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -OperationId
The ID of the batch mapping operation.

```yaml
Type: String
Parameter Sets: Get
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnectionBatchTeamMap](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsshiftsconnectionbatchteammap)
