---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-team
schema: 2.0.0
title: New-Team
---

# New-Team

## SYNOPSIS
This cmdlet lets you provision a new Team for use in Microsoft Teams and will create an O365 Unified Group to back the team.
## SYNTAX

### CreateTeam (Default)
```
New-Team -DisplayName <String> [-Description <String>] [-MailNickName <String>] [-Classification <String>]
 [-Visibility <String>] [-Template <String>] [-Owner <String>] [-AllowGiphy <Boolean>]
 [-GiphyContentRating <String>] [-AllowStickersAndMemes <Boolean>] [-AllowCustomMemes <Boolean>]
 [-AllowGuestCreateUpdateChannels <Boolean>] [-AllowGuestDeleteChannels <Boolean>]
 [-AllowCreateUpdateChannels <Boolean>] [-AllowDeleteChannels <Boolean>] [-AllowAddRemoveApps <Boolean>]
 [-AllowCreateUpdateRemoveTabs <Boolean>] [-AllowCreateUpdateRemoveConnectors <Boolean>]
 [-AllowUserEditMessages <Boolean>] [-AllowUserDeleteMessages <Boolean>] [-AllowOwnerDeleteMessages <Boolean>]
 [-AllowTeamMentions <Boolean>] [-AllowChannelMentions <Boolean>] [-ShowInTeamsSearchAndSuggestions <Boolean>]
 [-RetainCreatedGroup <SwitchParameter>] [-AllowCreatePrivateChannels <Boolean>] [<CommonParameters>]
```

### MigrateGroup
```
New-Team -GroupId <String> [-Owner <String>] [-AllowGiphy <Boolean>] [-GiphyContentRating <String>]
 [-AllowStickersAndMemes <Boolean>] [-AllowCustomMemes <Boolean>] [-AllowGuestCreateUpdateChannels <Boolean>]
 [-AllowGuestDeleteChannels <Boolean>] [-AllowCreateUpdateChannels <Boolean>] [-AllowDeleteChannels <Boolean>]
 [-AllowAddRemoveApps <Boolean>] [-AllowCreateUpdateRemoveTabs <Boolean>]
 [-AllowCreateUpdateRemoveConnectors <Boolean>] [-AllowUserEditMessages <Boolean>]
 [-AllowUserDeleteMessages <Boolean>] [-AllowOwnerDeleteMessages <Boolean>] [-AllowTeamMentions <Boolean>]
 [-AllowChannelMentions <Boolean>][-ShowInTeamsSearchAndSuggestions <Boolean>] [-RetainCreatedGroup <SwitchParameter>] [<CommonParameters>]
```

## DESCRIPTION
Creates a new team with user specified settings, and returns a Group object with a GroupID property.

Groups created through teams cmdlets, APIs, or clients will not show up in Outlook by default.

If you want these groups to appear in Outlook clients, you can use the [Set-UnifiedGroup](https://learn.microsoft.com/powershell/module/exchangepowershell/set-unifiedgroup) cmdlet in the Exchange Powershell Module to disable the switch parameter `HiddenFromExchangeClientsEnabled` (-HiddenFromExchangeClientsEnabled:$false).

Note: The Teams application may need to be open by an Owner for up to two hours before changes are reflected.

## EXAMPLES

### Example 1
```
New-Team -DisplayName "Tech Reads"
```

This example creates a team with all parameters with their default values.

### Example 2
```
New-Team -DisplayName "Tech Reads" -Description "Team to post technical articles and blogs" -Visibility Public
```

This example creates a team with a specific description and public visibility.

### Example 3
```
$group = New-Team -MailNickname "TestTeam" -displayname "Test Teams" -Visibility "private"
Add-TeamUser -GroupId $group.GroupId -User "fred@example.com"
Add-TeamUser -GroupId $group.GroupId -User "john@example.com"
Add-TeamUser -GroupId $group.GroupId -User "wilma@example.com"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Q4 planning"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Exec status"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Contracts"
```

This example creates a team, adds three members to it, and creates three channels within it.

## PARAMETERS

### -AllowAddRemoveApps
Boolean value that determines whether or not members (not only owners) are allowed to add apps to the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowChannelMentions
Boolean value that determines whether or not channels in the team can be @ mentioned so that all users who follow the channel are notified.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreatePrivateChannels
Determines whether private channel creation is allowed for the team.

```yaml
Type: Boolean
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateUpdateChannels
Setting that determines whether or not members (and not just owners) are allowed to create channels.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateUpdateRemoveConnectors
Setting that determines whether or not members (and not only owners) can manage connectors in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateUpdateRemoveTabs
Setting that determines whether or not members (and not only owners) can manage tabs in channels.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCustomMemes
Setting that determines whether or not members can use the custom memes functionality in teams.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDeleteChannels
Setting that determines whether or not members (and not only owners) can delete channels in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGiphy
Setting that determines whether or not giphy can be used in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGuestCreateUpdateChannels
Setting that determines whether or not guests can create channels in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGuestDeleteChannels
Setting that determines whether or not guests can delete in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOwnerDeleteMessages
Setting that determines whether or not owners can delete messages that they or other members of the team have posted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStickersAndMemes
Setting that determines whether stickers and memes usage is allowed in the team.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTeamMentions
Setting that determines whether the entire team can be @ mentioned (which means that all users will be notified)

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserDeleteMessages
Setting that determines whether or not members can delete messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserEditMessages
Setting that determines whether or not users can edit messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Description
Team description. Characters Limit - 1024.

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DisplayName
Team display name. Characters Limit - 256.

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -GiphyContentRating
Setting that determines the level of sensitivity of giphy usage that is allowed in the team.  Accepted values are "Strict" or "Moderate"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Moderate
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupId
Specify a GroupId to convert to a Team.  If specified, you cannot provide the other values that are already specified by the existing group, namely: Visibility, Alias, Description, or DisplayName.
If, for example, you need to create a Team from an existing Microsoft 365 Group, use the _ExternalDirectoryObjectId_ property value returned by [Get-UnifiedGroup](https://learn.microsoft.com/powershell/module/exchangepowershell/get-unifiedgroup).

```yaml
Type: String
Parameter Sets: MigrateGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MailNickName
The MailNickName parameter specifies the alias for the associated Office 365 Group.
This value will be used for the mail enabled object and will be used as PrimarySmtpAddress for this Office 365 Group.
The value of the MailNickName parameter has to be unique across your tenant.
Note: If Microsoft 365 groups naming policies are enabled in your tenant, this parameter is required and must also comply with the naming policy.

For more details about the naming conventions see here: [New-UnifiedGroup](https://learn.microsoft.com/powershell/module/exchangepowershell/new-unifiedgroup#parameters), Parameter: -Alias.

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Owner
An admin who is allowed to create on behalf of another user should use this flag to specify the desired owner of the group.
This user will be added as both a member and an owner of the group.
If not specified, the user who creates the team will be added as both a member and an owner.
Please note: This parameter is mandatory, if connected using Certificate Based Authentication.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -RetainCreatedGroup
Switch Parameter allowing toggle of group cleanup if team creation fails. The default value of this parameter is $false to retain with current functionality where the unified group is deleted if the step of adding a team to the group fails. Set it to $true to retain the unified group created even if team creation fails to allow self-retry of team creation or self-cleanup of group as appropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowInTeamsSearchAndSuggestions
Setting that determines whether or not private teams should be searchable from Teams clients for users who do not belong to that team.  Set to $false to make those teams not discoverable from Teams clients.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
If you have an EDU license, you can use this parameter to specify which template you'd like to use for creating your group.
Do not use this parameter when converting an existing group.

Valid values are: "EDU_Class" or "EDU_PLC"

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Visibility
Set to Public to allow all users in your organization to join the group by default. Set to Private to require that an owner approve the join request.

```yaml
Type: String
Parameter Sets: CreateTeam
Aliases:

Required: False
Position: Named
Default value: Private
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### GroupId

## NOTES

## RELATED LINKS

[Remove-Team](https://learn.microsoft.com/powershell/module/microsoftteams/remove-team)

[Get-Team](https://learn.microsoft.com/powershell/module/microsoftteams/get-team)

[Set-Team](https://learn.microsoft.com/powershell/module/microsoftteams/set-team)
