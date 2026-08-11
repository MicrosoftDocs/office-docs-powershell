---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy
schema: 2.0.0
title: Set-CsTeamsChannelsPolicy
---

# Set-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams and Channels experience within the Teams application.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>] [-EnablePrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>] [-AllowUserToParticipateInExternalSharedChannel <Boolean>] [-AllowChannelSharingToExternalUser <Boolean>] [-AllowSharedChannelCreation <Boolean>] [-ThreadedChannelCreation <String>]  [-AllowCreateChannel <String>] [-AllowCreateClassicChannel <String>] [-AllowCreatePrivateChannel <String>] [-AllowCreateSharedChannel <String>][-AllowGuestsFromOutsideTeam <String>] [-AllowGuestsFromOutsideTeamInPrivateChannel <String>] [-AllowSharingPrivateChannelWithTeamInOrg <String>] [-AllowSharingWithTeamInOrg <String>] [-AllowUsersFromOutsideTeam <String>] [-AllowUsersFromOutsideTeamInPrivateChannel <String>] [-CreateSharedChannelsByDefault <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>] [-EnablePrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>] [-AllowUserToParticipateInExternalSharedChannel <Boolean>] [-AllowChannelSharingToExternalUser <Boolean>] [-AllowSharedChannelCreation <Boolean>] [-ThreadedChannelCreation <String>]  [-AllowCreateChannel <String>] [-AllowCreateClassicChannel <String>] [-AllowCreatePrivateChannel <String>] [-AllowCreateSharedChannel <String>][-AllowGuestsFromOutsideTeam <String>] [-AllowGuestsFromOutsideTeamInPrivateChannel <String>] [-AllowSharingPrivateChannelWithTeamInOrg <String>] [-AllowSharingWithTeamInOrg <String>] [-AllowUsersFromOutsideTeam <String>] [-AllowUsersFromOutsideTeamInPrivateChannel <String>] [-CreateSharedChannelsByDefault <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

This cmdlet allows you to update existing policies of this type.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsChannelsPolicy -Identity StudentPolicy -EnablePrivateTeamDiscovery $true
```

This example shows updating an existing policy with name "StudentPolicy" and enabling Private Team Discovery.

## PARAMETERS

### -AllowChannelSharingToExternalUser
Owners of a shared channel can invite external users to join the channel if Microsoft Entra external sharing policies are configured. If the channel has been shared with an external member or team, they will continue to have access to the channel even if this parameter is set to FALSE. For more information, see [Manage channel policies in Microsoft Teams](https://learn.microsoft.com/microsoftteams/teams-policies).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOrgWideTeamCreation
Determines whether a user is allowed to create an org-wide team. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPrivateChannelCreation
Determines whether a user is allowed to create a private channel. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSharedChannelCreation
Team owners can create shared channels for people within and outside the organization. Only people added to the shared channel can read and write messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserToParticipateInExternalSharedChannel
Users and teams can be invited to external shared channels if Microsoft Entra external sharing policies are configured. If a team in your organization is part of an external shared channel, new team members will have access to the channel even if this parameter is set to FALSE. For more information, see [Manage channel policies in Microsoft Teams](https://learn.microsoft.com/microsoftteams/teams-policies).

```yaml
Type: Boolean
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

### -EnablePrivateTeamDiscovery
Determines whether a user is allowed to discover private teams in suggestions and search results. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateChannel
This setting enables/disables Next Generation Channel creation and editing.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowCreateClassicChannel
This setting enables/disables Classic Channel creation and editing.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowCreatePrivateChannel
This setting enables/disables Next Generation Private Channel creation and editing.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowCreateSharedChannel
This setting enables/disables Next Generation Shared Channel creation and editing.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowGuestsFromOutsideTeam
This setting enables/disables whether guests from outside the team are allowed in Next Generation Channels.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowGuestsFromOutsideTeamInPrivateChannel
This setting enables/disables whether guests from outside the team are allowed in Next Generation Private Channels.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowSharingPrivateChannelWithTeamInOrg
This setting enables/disables sharing Next Generation Private Channels with Teams in the same organization.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowSharingWithTeamInOrg
This setting enables/disables sharing Next Generation Channels with Teams in the same organization.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowUsersFromOutsideTeam
This setting enables/disables whether users from outside the team are allowed in Next Generation Channels.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -AllowUsersFromOutsideTeamInPrivateChannel
This setting enables/disables whether users from outside the team are allowed in Next Generation Private Channels.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -CreateSharedChannelsByDefault
This setting sets whether users are able to create Next Generation Shared Channels by default.

Possible values are:

- **Enabled**: Users are allowed.
- **Disabled**: Users are not allowed.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

### -Force
Bypass all non-fatal errors.

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

### -Identity
Use this parameter to specify the name of the policy being updated.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Use this parameter to pass the policy object output of Get-CsTeamsChannelsPolicy to update that policy.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThreadedChannelCreation
> [!NOTE]
> This parameter is reserved for internal Microsoft use.

This setting enables/disables Threaded Channel creation and editing.

Possible Values:
- Enabled: Users are allowed to create and edit Threaded Channels.
- Disabled: Users are not allowed to create and edit Threaded Channels.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamschannelspolicy)

[Remove-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamschannelspolicy)

[Grant-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamschannelspolicy)

[Get-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamschannelspolicy)
