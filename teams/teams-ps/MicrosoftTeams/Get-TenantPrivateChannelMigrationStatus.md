---
document type: cmdlet
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
HelpUri: ''
Locale: en-US
Module Name: MicrosoftTeams
ms.date: 10/10/2025
PlatyPS schema version: 2024-05-01
title: Get-TenantPrivateChannelMigrationStatus
---

# Get-TenantPrivateChannelMigrationStatus

## SYNOPSIS

You use the `Get-TenantPrivateChannelMigrationStatus` cmdlet to check the status of private channel migration for your tenant.

## SYNTAX

```
Get-TenantPrivateChannelMigrationStatus [<CommonParameters>]
```

## DESCRIPTION
The `Get-TenantPrivateChannelMigrationStatus` cmdlet allows tenant administrators to track the status of the private channel migration for their Microsoft Teams organization. More details about the migration can be found [here](https://techcommunity.microsoft.com/blog/microsoftteamsblog/new-enhancements-in-private-channels-in-microsoft-teams-unlock-their-full-potent/4438767#)

**Note:** This cmdlet requires tenant administrator permissions to execute.

## EXAMPLES

### Example 1
```
Get-TenantPrivateChannelMigrationStatus
```
Example output:
```
TenantId                     : 12345678-1234-1234-1234-123456789abc
MigrationStatus              : Completed
MigrationStartTimeStamp      : 2025-10-09T10:15:00.456Z
MigrationCompletionTimeStamp : 2025-10-09T12:45:00.789Z
```

This example retrieves the private channel migration status for the current tenant.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
This cmdlet does not accept pipeline input.

## OUTPUTS

### System.Object

This cmdlet returns a `PrivateChannelMigrationStatusResponse` object with the following properties:

**TenantId**: The Azure AD tenant identifier for your organization.

**MigrationStatus**: The current migration status for private channels in your tenant.

**MigrationStartTimeStamp**: The timestamp when the migration started for this tenant.

**MigrationCompletionTimeStamp**: The timestamp when the migration completed for this tenant.

## NOTES
- This cmdlet requires tenant administrator permissions
- The cmdlet connects to the Teams and Channels service to retrieve migration status information
- Private channels remain functional throughout the migration process
- This enhancement helps make private channels more scalable, manageable, and compliant

Common migration status values include:
- **NotStarted**: Migration has not yet begun
- **InProgress**: Migration is currently running
- **Completed**: Migration has finished successfully

## RELATED LINKS
[New enhancements in Private Channels in Microsoft Teams unlock their full potential](https://techcommunity.microsoft.com/blog/microsoftteamsblog/new-enhancements-in-private-channels-in-microsoft-teams-unlock-their-full-potent/4438767)

[Microsoft Teams PowerShell Overview](https://learn.microsoft.com/powershell/teams/)

[Get-Team](https://learn.microsoft.com/powershell/module/microsoftteams/get-team)

[Get-TeamChannel](https://learn.microsoft.com/powershell/module/microsoftteams/get-teamchannel)