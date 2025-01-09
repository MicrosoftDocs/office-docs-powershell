---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionErrorReport
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionerrorreport
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionErrorReport

## SYNOPSIS

This cmdlet returns the list of all the team mapping error reports. It can also return the configuration details of one mapping error report with its ID provided or other filter parameters.

## SYNTAX

### Get (Default)
```powershell
Get-CsTeamsShiftsConnectionErrorReport [-Activeness <String>] [-After <String>] [-Before <String>]
 [-Code <String>] [-ConnectionId <String>] [-ConnectorInstanceId <String>] [-Operation <String>]
 [-Procedure <String>] [-TeamId <String>] [-Authorization <String>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### Get1
```powershell
Get-CsTeamsShiftsConnectionErrorReport -ErrorReportId <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```powershell
Get-CsTeamsShiftsConnectionErrorReport -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing team mapping error reports. It can also return the configuration details for mapping result with given ID or other filters.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport
```
```output
Code                  ConnectionId CreatedAt           Culture ErrorNotificationSent ErrorType                        Id                                   IntermediateIncident Message
----                  ------------ ---------           ------- --------------------- ---------                        --                                   -------------------- -------
WFMAuthError                       30/09/2022 14:14:08 en-US   False                 WFMAuthErrorMessageType          74091f69-29b7-4884-aab9-ee5d705f36e3 1042                 The workforce management system account credentials you've ...
WFMAuthError                       17/10/2022 19:42:15 en-US   False                 WFMAuthErrorMessageType          b0d04444-d80b-490a-a573-ae3bb7f871bc 40                   The workforce management system account credentials you've ...
WFMAuthError                       17/10/2022 20:27:31 en-US   False                 WFMAuthErrorMessageType          91ca35d9-1abc-4ded-bcda-dbf58a155930 94                   The workforce management system account credentials you've ...
GraphUserAuthError                 18/10/2022 04:46:57 en-US   False                 GraphUserAuthErrorMessageType    4d26df1c-7133-4477-9266-5d7ffb70aa88 0                    Authentication failed. Ensure that you've entered valid cre...
UserMappingError                   18/10/2022 04:47:15 en-US   False                 UserMappingErrorMessageType      6a90b796-9cda-4cc9-a74c-499de91073f9 0                    Mapping failed for some users: 3 succeeded, 0 failed AAD us...
BatchTeamMappingError              06/04/2023 15:24:22 en-US   False                 BatchTeamMappingErrorMessageType bf1bc3ea-1e40-483b-b6cc-669f22f24c48 1                    This designated actor profile doesn't have team ownership p...
```

Returns the list of all the error reports.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -ErrorReportId 74091f69-29b7-4884-aab9-ee5d705f36e3 | Format-List
```
```output
Code                       : WFMAuthError
ConnectionId               :
CreatedAt                  : 30/09/2022 14:14:08
Culture                    : en-US
ErrorNotificationSent      : False
ErrorType                  : WFMAuthErrorMessageType
Id                         : 74091f69-29b7-4884-aab9-ee5d705f36e3
IntermediateIncident       : 1042
Message                    : The workforce management system account credentials you've provided are invalid or this account doesn't have the required permissions.
Operation                  : SyncSwapShiftRequestCommand
Parameter                  :
Procedure                  : ExecuteAsync
ReferenceLink              :
ResolvedAt                 :
ResolvedNotificationSentOn :
RevisitIntervalInMinute    : 1440
RevisitedAt                :
ScheduleSequenceNumber     : 310673843
Severity                   : Critical
TeamId                     :
TenantId                   : dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a
TotalIncident              : 1042
Ttl                        : 2505600
WfmConnectorInstanceId     : WCI-6f8eb424-c347-46b4-a50b-118af8d3d546
```

Returns the error report with ID `18b3e490-e6ed-4c2e-9925-47e36609dff3`.

### Example 3
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -Code UserMappingError
```
```output
Code             ConnectionId CreatedAt           Culture ErrorNotificationSent ErrorType                   Id                                   IntermediateIncident Message
----             ------------ ---------           ------- --------------------- ---------                   --                                   -------------------- -------
UserMappingError              18/10/2022 04:47:15 en-US   False                 UserMappingErrorMessageType 6a90b796-9cda-4cc9-a74c-499de91073f9 0                    Mapping failed for some users: 3 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:47:28 en-US   False                 UserMappingErrorMessageType 005c4a9d-552e-4ea1-9d6a-c0316d272bc9 0                    Mapping failed for some users: 3 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:48:25 en-US   False                 UserMappingErrorMessageType 841e00b5-c4e5-4e24-89d2-703d79250516 0                    Mapping failed for some users: 4 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:54:05 en-US   False                 UserMappingErrorMessageType 0e10d036-c071-4db2-9cac-22e520f929d9 0                    Mapping failed for some users: 5 succeeded, 0 failed AAD user(s) and ...
```

Returns the error report with error code `UserMappingError`.

### Example 4
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -Operation UserMappingHandler
```
```output
Code             ConnectionId CreatedAt           Culture ErrorNotificationSent ErrorType                   Id                                   IntermediateIncident Message
----             ------------ ---------           ------- --------------------- ---------                   --                                   -------------------- -------
UserMappingError              18/10/2022 04:47:15 en-US   False                 UserMappingErrorMessageType 6a90b796-9cda-4cc9-a74c-499de91073f9 0                    Mapping failed for some users: 3 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:47:28 en-US   False                 UserMappingErrorMessageType 005c4a9d-552e-4ea1-9d6a-c0316d272bc9 0                    Mapping failed for some users: 3 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:48:25 en-US   False                 UserMappingErrorMessageType 841e00b5-c4e5-4e24-89d2-703d79250516 0                    Mapping failed for some users: 4 succeeded, 0 failed AAD user(s) and ...
UserMappingError              18/10/2022 04:54:05 en-US   False                 UserMappingErrorMessageType 0e10d036-c071-4db2-9cac-22e520f929d9 0                    Mapping failed for some users: 5 succeeded, 0 failed AAD user(s) and ...
```

Returns the error report with operation `UserMappingHandler`.

### Example 5
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -After 2022-12-12T19:11:39.073Z
```
```output
Code                  ConnectionId CreatedAt           Culture ErrorNotificationSent ErrorType                        Id                                   IntermediateIncident Message
----                  ------------ ---------           ------- --------------------- ---------                        --                                   -------------------- -------
UserMappingError                   26/01/2023 14:42:27 en-US   True                  UserMappingErrorMessageType      d7ab9ab4-b60c-44d3-8c12-d8ee64a67ce8 172                  Mapping failed for some users: 1 succeeded, 2 failed AAD us...
WFMAuthError                       26/01/2023 16:08:31 en-US   False                 WFMAuthErrorMessageType          7adc3e4e-124e-4613-855c-9ac1b338400a 1                    The workforce management system account credentials you've ...
```

Returns the error report created after `2022-12-12T19:11:39.073Z`.

## PARAMETERS

### -ErrorReportId

The ID of the error report.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Activeness

The flag indicating results should have which activeness.
Set this to `ActiveOnly` to get Error reports that are not resolved.
Set this to `InactiveOnly` to get Error reports that are resolved.
Set this to `Both` to get both active and inactive Error reports.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionId

The UUID of a WFM connection.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorInstanceId

The UUID of a connector instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId

The UUID of a team in Graph.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operation

The name of the action of the controller or the name of the command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Procedure

The name of the executing function or procedure.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Code

The enum value of error code, human readable string defined in codebase.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Before

The timestamp indicating results should be before which date and time.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -After

The timestamp indicating results should be after which date and time.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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
Parameter Sets: Get
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

[Disable-CsTeamsShiftsConnectionErrorReport](https://learn.microsoft.com/powershell/module/teams/disable-csteamsshiftsconnectionerrorreport)
