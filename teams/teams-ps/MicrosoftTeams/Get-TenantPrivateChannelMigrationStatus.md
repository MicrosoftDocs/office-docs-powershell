---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.date: 04/22/2026
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-tenantprivatechannelmigrationstatus
schema: 2.0.0
title: Get-TenantPrivateChannelMigrationStatus
---

# Get-TenantPrivateChannelMigrationStatus

## SYNOPSIS

You use the `Get-TenantPrivateChannelMigrationStatus` cmdlet to check the status of private channel migration for your tenant.

## SYNTAX

```powershell
Get-TenantPrivateChannelMigrationStatus [<CommonParameters>]
```

## DESCRIPTION

The `Get-TenantPrivateChannelMigrationStatus` cmdlet allows tenant administrators to track the status of the private channel migration for their Microsoft Teams organization. More details about the migration can be found [here](https://techcommunity.microsoft.com/blog/microsoftteamsblog/new-enhancements-in-private-channels-in-microsoft-teams-unlock-their-full-potent/4438767#)

**Note:** This cmdlet requires tenant administrator permissions to execute.

## EXAMPLES

### Example 1

```powershell
PS> Get-TenantPrivateChannelMigrationStatus

TenantId                     : 12345678-1234-1234-1234-123456789abc
MigrationStatus              : Completed
MigrationStartTimeStamp      : 2025-10-09T10:15:00.456Z
MigrationCompletionTimeStamp : 2025-10-09T12:45:00.789Z
Details                      : {"totalChannels":10,"migratedChannels":10,"failedChannels":0,"ownerlessChannels":0,"remainingChannels":0}
```

This example gets the migration status for a tenant where all channels have been migrated.

### Example 2

```powershell
PS> Get-TenantPrivateChannelMigrationStatus

TenantId                     : 94d200e4-2df1-45b9-bc3e-53cfa7cf4997
MigrationStatus              : RequiresAdminAttention
MigrationStartTimeStamp      : 2026-02-10T06:48:20.000Z
MigrationCompletionTimeStamp :
Details                      : {"totalChannels":10,"migratedChannels":6,"failedChannels":1,"ownerlessChannels":2,"remainingChannels":1,"ownerlessChannelsDetails":[{"channelThreadId":"19:70c903e82053408790c3941f614a4d36@thread.tacv2","teamId":"12025f7b-4e7d-4d4c-b597-10f52de1c198"},{"channelThreadId":"19:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6@thread.tacv2","teamId":"b94ac03c-ba25-4e79-89ab-d23f707863f7"}]}
```

### Example 3

```powershell
PS> $result = Get-TenantPrivateChannelMigrationStatus
PS> $details = $result.Details | ConvertFrom-Json
PS> Write-Host "Total: $($details.totalChannels), Migrated: $($details.migratedChannels), Failed: $($details.failedChannels), Ownerless: $($details.ownerlessChannels)"
PS> if ($details.ownerlessChannelsDetails) { $details.ownerlessChannelsDetails | Format-Table channelThreadId, teamId }
```

This example parses the Details JSON and lists ownerless channels in a table.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

This cmdlet does not accept pipeline input.

## OUTPUTS

### System.Object

Returns a `PrivateChannelMigrationStatusResponse` object with the following properties:

| Property | Type | Description |
|---|---|---|
| `TenantId` | String | The Microsoft Entra tenant identifier. |
| `MigrationStatus` | String | Overall migration status for the tenant. Possible values: `NotStarted`, `InProgress`, `Completed`, `RequiresAdminAttention`. |
| `MigrationStartTimeStamp` | DateTime | When migration started for this tenant. Empty if migration has not started. |
| `MigrationCompletionTimeStamp` | DateTime | When migration completed. Only populated when all channels are done. |
| `Details` | String | JSON string containing channel counts and per-channel detail arrays. |

### Migration status values

| Value | Description |
|---|---|
| `NotStarted` | No private channels have been processed for this tenant. |
| `InProgress` | Migration is underway. |
| `Completed` | All private channels have been successfully migrated. |
| `RequiresAdminAttention` | One or more channels were skipped because they have no owners. If these channels are still in use, a tenant admin or Teams service admin can add an owner to unblock migration. Failed channels do not require admin action and are retried automatically. |

### Details JSON fields

| Field | Type | Description |
|---|---|---|
| `totalChannels` | Integer | Total number of private channels for this tenant. |
| `migratedChannels` | Integer | Number of channels migrated successfully. |
| `failedChannels` | Integer | Number of channels where migration failed. No admin action is needed. |
| `ownerlessChannels` | Integer | Number of channels skipped because they have no owners. |
| `remainingChannels` | Integer | Number of channels still in progress or not yet started. |
| `ownerlessChannelsDetails` | Array | Per-channel details for ownerless channels. Each entry contains `channelThreadId` and `teamId`. |

### Channel detail object

| Field | Type | Description |
|---|---|---|
| `channelThreadId` | String | The unique identifier of the private channel. |
| `teamId` | String | The unique identifier (GroupId) of the parent team. This is the same value used by the `-GroupId` parameter in [Get-Team](https://learn.microsoft.com/powershell/module/microsoftteams/get-team), [Get-TeamChannel](https://learn.microsoft.com/powershell/module/microsoftteams/get-teamchannel), and [Microsoft Graph team resource](https://learn.microsoft.com/graph/api/resources/team). |

## NOTES

- This cmdlet requires tenant administrator permissions.
- Private channels remain functional throughout the migration process.
- The `Details` property is returned as a JSON string. Use `ConvertFrom-Json` to parse it.
- When no ownerless channels exist, the `ownerlessChannelsDetails` array may be empty or omitted from the JSON.
- Ownerless channels were skipped because they have no owners. If these channels are still in use, a tenant admin or Teams service admin can add an owner using [Add-TeamUser](https://learn.microsoft.com/powershell/module/microsoftteams/add-teamuser) and [Add-TeamChannelUser](https://learn.microsoft.com/powershell/module/microsoftteams/add-teamchanneluser).

## RELATED LINKS

[New enhancements in Private Channels in Microsoft Teams unlock their full potential](https://techcommunity.microsoft.com/blog/microsoftteamsblog/new-enhancements-in-private-channels-in-microsoft-teams-unlock-their-full-potent/4438767)

[Microsoft Teams PowerShell Overview](https://learn.microsoft.com/powershell/teams/)

[Get-Team](https://learn.microsoft.com/powershell/module/microsoftteams/get-team)

[Get-TeamChannel](https://learn.microsoft.com/powershell/module/microsoftteams/get-teamchannel)

[Add-TeamUser](https://learn.microsoft.com/powershell/module/microsoftteams/add-teamuser)

[Add-TeamChannelUser](https://learn.microsoft.com/powershell/module/microsoftteams/add-teamchanneluser)
