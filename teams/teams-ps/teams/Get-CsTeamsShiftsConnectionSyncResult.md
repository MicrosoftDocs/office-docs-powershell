---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionSyncResult
author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionsyncresult
schema: 2.4.0
---

# Get-CsTeamsShiftsConnectionSyncResult

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet supports retrieving the list of user details in the mapped teams.

## SYNTAX

```
Get-CsTeamsShiftsConnectionSyncResult -ConnectorInstanceId <string> -TeamId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving the list of successful and failed users in the mapped teams.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionSyncResult -ConnectorInstanceId "WCI-d1addd70-2684-4723-b8f2-7fa2230648c9" -TeamId "70f49d29-7ee1-4259-8999-946953feb79e"
```

Returns the successful and failed users in the team mapping in the instance with ID WCI-d1addd70-2684-4723-b8f2-7fa2230648c9

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance. It can be retrieved by running [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

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

The Teams team ID. It can be retrieved by visiting [AzureAAD](https://portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/AllGroups)

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)
