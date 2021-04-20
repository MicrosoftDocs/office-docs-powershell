---
Module Name: PnP.PowerShell
title: New-PnPTeamsTeam
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/New-PnPTeamsTeam.html
---
 
# New-PnPTeamsTeam

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/New-PnPTeamsTeam.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Creates a new Team in Microsoft Teams. The cmdlet will create a Microsoft 365 group and then add a team to the group.

## SYNTAX

### For an existing group
```powershell
New-PnPTeamsTeam -GroupId <String> [-Owner <String>] [-AllowAddRemoveApps <Boolean>]
 [-AllowChannelMentions <Boolean>] [-AllowCreateUpdateChannels <Boolean>]
 [-AllowCreateUpdateRemoveConnectors <Boolean>] [-AllowCreateUpdateRemoveTabs <Boolean>]
 [-AllowCustomMemes <Boolean>] [-AllowDeleteChannels <Boolean>] [-AllowGiphy <Boolean>]
 [-AllowGuestCreateUpdateChannels <Boolean>] [-AllowGuestDeleteChannels <Boolean>]
 [-AllowOwnerDeleteMessages <Boolean>] [-AllowStickersAndMemes <Boolean>] [-AllowTeamMentions <Boolean>]
 [-AllowUserDeleteMessages <Boolean>] [-AllowUserEditMessages <Boolean>]
 [-GiphyContentRating <TeamGiphyContentRating>] [-ShowInTeamsSearchAndSuggestions <Boolean>]
 [-Classification <String>]  [<CommonParameters>]
```

### For a new group
```powershell
New-PnPTeamsTeam -DisplayName <String> [-MailNickName <String>] [-Description <String>] [-Owner <String>]
 [-AllowAddRemoveApps <Boolean>] [-AllowChannelMentions <Boolean>] [-AllowCreateUpdateChannels <Boolean>]
 [-AllowCreateUpdateRemoveConnectors <Boolean>] [-AllowCreateUpdateRemoveTabs <Boolean>]
 [-AllowCustomMemes <Boolean>] [-AllowDeleteChannels <Boolean>] [-AllowGiphy <Boolean>]
 [-AllowGuestCreateUpdateChannels <Boolean>] [-AllowGuestDeleteChannels <Boolean>]
 [-AllowOwnerDeleteMessages <Boolean>] [-AllowStickersAndMemes <Boolean>] [-AllowTeamMentions <Boolean>]
 [-AllowUserDeleteMessages <Boolean>] [-AllowUserEditMessages <Boolean>]
 [-GiphyContentRating <TeamGiphyContentRating>] [-Visibility <TeamVisibility>]
 [-ShowInTeamsSearchAndSuggestions <Boolean>] [-Classification <String>] 
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
New-PnPTeamsTeam -DisplayName "myPnPDemo1" -Visibility Private -AllowCreateUpdateRemoveTabs $false -AllowUserDeleteMessages $false
```

This will create a newTeam called "myPnPDemo1" and sets the privacy to Private, as we well as preventing users from deleting their messages or update/remove tabs. The user creating the Team will be added as Owner.

### EXAMPLE 2
```powershell
New-PnPTeamsTeam -GroupId $groupId
```

This will create a new Team from a Microsoft 365 Group using the Group ID

## PARAMETERS

### -AllowAddRemoveApps
Boolean value that determines whether or not members (not only owners) are allowed to add apps to the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowChannelMentions
Boolean value that determines whether or not channels in the team can be @ mentioned so that all users who follow the channel are notified.

```yaml
Type: Boolean
Parameter Sets: (All)

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateUpdateRemoveConnectors
Setting that determines whether or not members (and not only owners) can manage connectors in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCreateUpdateRemoveTabs
Setting that determines whether or not members (and not only owners) can manage tabs in channels.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCustomMemes
Setting that determines whether or not members can use the custom memes functionality in teams.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDeleteChannels
Setting that determines whether or not members (and not only owners) can delete channels in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGiphy
Setting that determines whether or not giphy can be used in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGuestCreateUpdateChannels
Setting that determines whether or not guests can create channels in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGuestDeleteChannels
Setting that determines whether or not guests can delete channels in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOwnerDeleteMessages
Setting that determines whether or not owners can delete messages that they or other members of the team have posted.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStickersAndMemes
Setting that determines whether stickers and memes usage is allowed in the team.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTeamMentions
Setting that determines whether the entire team can be @ mentioned (which means that all users will be notified)

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserDeleteMessages
Setting that determines whether or not members can delete messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserEditMessages
Setting that determines whether or not users can edit messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Team description. Characters Limit - 1024.

```yaml
Type: String
Parameter Sets: For a new group

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Team display name. Characters Limit - 256.

```yaml
Type: String
Parameter Sets: For a new group

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GiphyContentRating
Setting that determines the level of sensitivity of giphy usage that is allowed in the team. Accepted values are "Strict" or "Moderate"

```yaml
Type: TeamGiphyContentRating
Parameter Sets: (All)
Accepted values: moderate, strict

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupId
Specify a GroupId to convert to a Team. If specified, you cannot provide the other values that are already specified by the existing group, namely: Visibility, Alias, Description, or DisplayName.

```yaml
Type: String
Parameter Sets: For an existing group

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailNickName
The MailNickName parameter specifies the alias for the associated Microsoft 365 Group. This value will be used for the mail enabled object and will be used as PrimarySmtpAddress for this Microsoft 365 Group.The value of the MailNickName parameter has to be unique across your tenant.

```yaml
Type: String
Parameter Sets: For a new group

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
An admin who is allowed to create on behalf of another user should use this flag to specify the desired owner of the group.This user will be added as both a member and an owner of the group. If not specified, the user who creates the team will be added as both a member and an owner.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowInTeamsSearchAndSuggestions
Setting that determines whether or not private teams should be searchable from Teams clients for users who do not belong to that team. Set to $false to make those teams not discoverable from Teams clients.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Visibility
Set to Public to allow all users in your organization to join the group by default. Set to Private to require that an owner approve the join request.

```yaml
Type: TeamVisibility
Parameter Sets: For a new group
Accepted values: Private, Public

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

