---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionSyncResult
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionsyncresult
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionSyncResult

## SYNOPSIS

This cmdlet supports retrieving the list of user details in the mapped teams of last sync.

## SYNTAX

```
Get-CsTeamsShiftsConnectionSyncResult -ConnectorInstanceId <string> -TeamId <string> -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving the list of successful and failed users in the mapped teams of last sync.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionSyncResult -ConnectorInstanceId "WCI-d1addd70-2684-4723-b8f2-7fa2230648c9" -TeamId "12345d29-7ee1-4259-8999-946953feb79e"
```
```output
FailedAadUser FailedWfmUser                 SuccessfulUser
------------- -------------                 --------------
{LABRO}       {FRPET, WAROS, JOREE}        {user3@contoso.com, user2@contoso.comm, user@contoso.com}
```

Returns the successful and failed users in the team mapping of Teams `12345d29-7ee1-4259-8999-946953feb79e` in the instance with ID `WCI-d1addd70-2684-4723-b8f2-7fa2230648c9`.
`LABRO` in FailedAadUser column shows the list of users who failed to sync from Teams to Wfm.
`FRPET, WAROS, JOREE` in FailedWfmUser column shows the list of users who failed to sync from Wfm to Teams.
`user3@contoso.com, user2@contoso.comm, user@contoso.com` in SuccessfulUser column shows the list of users who synced in both Wfm and Teams.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance. It can be retrieved by running [Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId

The Teams team ID. It can be retrieved by visiting [AzureAAD](https://portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/AllGroups).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

The Identity parameter.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance)
