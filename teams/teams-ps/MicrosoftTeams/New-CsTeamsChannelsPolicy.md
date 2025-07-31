---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamschannelspolicy
schema: 2.0.0
title: New-CsTeamsChannelsPolicy
---

# New-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

## SYNTAX
```
New-CsTeamsChannelsPolicy [-Tenant <Guid>] [-AllowOrgWideTeamCreation <Boolean>]
 [-EnablePrivateTeamDiscovery <Boolean>] [-AllowPrivateChannelCreation <Boolean>]
 [-AllowUserToParticipateInExternalSharedChannel <Boolean>] [-AllowChannelSharingToExternalUser <Boolean>] [-AllowSharedChannelCreation <Boolean>] [-ThreadedChannelCreation <String>]
 [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

This cmdlet allows you to create new policies of this type, which can later be assigned to specific users.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsChannelsPolicy -Identity StudentPolicy -EnablePrivateTeamDiscovery $false
```

This example shows creating a new policy with name "StudentPolicy" where Private Team Discovery is disabled.

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

### -Description
Specifies the description of the policy.

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

### -Force
Bypasses all non-fatal errors.
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
Specify the name of the policy that you are creating.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamschannelspolicy)

[Remove-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamschannelspolicy)

[Grant-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamschannelspolicy)

[Get-CsTeamsChannelsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamschannelspolicy)
