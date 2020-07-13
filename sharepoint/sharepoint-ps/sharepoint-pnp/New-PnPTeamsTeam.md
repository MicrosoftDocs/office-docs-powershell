---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/new-pnpteamsteam
applicable: SharePoint Online
schema: 2.0.0
title: New-PnPTeamsTeam
---

# New-PnPTeamsTeam

## SYNOPSIS
Creates a new Team in Microsoft Teams. The cmdlet will create a Microsoft 365 group and then add a team to the group.

## SYNTAX 

### For an existing group
```powershell
New-PnPTeamsTeam -GroupId <String>
                 [-Owner <String>]
                 [-AllowAddRemoveApps <Boolean>]
                 [-AllowChannelMentions <Boolean>]
                 [-AllowCreateUpdateChannels <Boolean>]
                 [-AllowCreateUpdateRemoveConnectors <Boolean>]
                 [-AllowCreateUpdateRemoveTabs <Boolean>]
                 [-AllowCustomMemes <Boolean>]
                 [-AllowDeleteChannels <Boolean>]
                 [-AllowGiphy <Boolean>]
                 [-AllowGuestCreateUpdateChannels <Boolean>]
                 [-AllowGuestDeleteChannels <Boolean>]
                 [-AllowOwnerDeleteMessages <Boolean>]
                 [-AllowStickersAndMemes <Boolean>]
                 [-AllowTeamMentions <Boolean>]
                 [-AllowUserDeleteMessages <Boolean>]
                 [-AllowUserEditMessages <Boolean>]
                 [-GiphyContentRating <TeamGiphyContentRating>]
                 [-ShowInTeamsSearchAndSuggestions <Boolean>]
                 [-Classification <String>]
                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

### For a new group
```powershell
New-PnPTeamsTeam -DisplayName <String>
                 [-MailNickName <String>]
                 [-Description <String>]
                 [-Visibility <TeamVisibility>]
                 [-Owner <String>]
                 [-AllowAddRemoveApps <Boolean>]
                 [-AllowChannelMentions <Boolean>]
                 [-AllowCreateUpdateChannels <Boolean>]
                 [-AllowCreateUpdateRemoveConnectors <Boolean>]
                 [-AllowCreateUpdateRemoveTabs <Boolean>]
                 [-AllowCustomMemes <Boolean>]
                 [-AllowDeleteChannels <Boolean>]
                 [-AllowGiphy <Boolean>]
                 [-AllowGuestCreateUpdateChannels <Boolean>]
                 [-AllowGuestDeleteChannels <Boolean>]
                 [-AllowOwnerDeleteMessages <Boolean>]
                 [-AllowStickersAndMemes <Boolean>]
                 [-AllowTeamMentions <Boolean>]
                 [-AllowUserDeleteMessages <Boolean>]
                 [-AllowUserEditMessages <Boolean>]
                 [-GiphyContentRating <TeamGiphyContentRating>]
                 [-ShowInTeamsSearchAndSuggestions <Boolean>]
                 [-Classification <String>]
                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTeamsTeam
```

Retrieves all the Microsoft Teams instances

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTeamsTeam -GroupId $groupId
```

Retrieves a specific Microsoft Teams instance

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPTeamsTeam -Visibility Public
```

Retrieves all Microsoft Teams instances which are public visible

## PARAMETERS

### -AllowAddRemoveApps
Boolean value that determines whether or not members (not only owners) are allowed to add apps to the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowChannelMentions
Boolean value that determines whether or not channels in the team can be @ mentioned so that all users who follow the channel are notified.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowCreateUpdateChannels
Setting that determines whether or not members (and not just owners) are allowed to create channels.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowCreateUpdateRemoveConnectors
Setting that determines whether or not members (and not only owners) can manage connectors in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowCreateUpdateRemoveTabs
Setting that determines whether or not members (and not only owners) can manage tabs in channels.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowCustomMemes
Setting that determines whether or not members can use the custom memes functionality in teams.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowDeleteChannels
Setting that determines whether or not members (and not only owners) can delete channels in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowGiphy
Setting that determines whether or not giphy can be used in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowGuestCreateUpdateChannels
Setting that determines whether or not guests can create channels in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowGuestDeleteChannels
Setting that determines whether or not guests can delete in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowOwnerDeleteMessages
Setting that determines whether or not owners can delete messages that they or other members of the team have posted.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowStickersAndMemes
Setting that determines whether stickers and memes usage is allowed in the team.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowTeamMentions
Setting that determines whether the entire team can be @ mentioned (which means that all users will be notified)

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowUserDeleteMessages
Setting that determines whether or not members can delete messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowUserEditMessages
Setting that determines whether or not users can edit messages that they have posted.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Classification


```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
Team description. Characters Limit - 1024.

```yaml
Type: String
Parameter Sets: For a new group

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName
Team display name. Characters Limit - 256.

```yaml
Type: String
Parameter Sets: For a new group

Required: True
Position: Named
Accept pipeline input: False
```

### -GiphyContentRating
Setting that determines the level of sensitivity of giphy usage that is allowed in the team. Accepted values are "Strict" or "Moderate"

```yaml
Type: TeamGiphyContentRating
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -GroupId
Specify a GroupId to convert to a Team. If specified, you cannot provide the other values that are already specified by the existing group, namely: Visibility, Alias, Description, or DisplayName.

```yaml
Type: String
Parameter Sets: For an existing group

Required: True
Position: Named
Accept pipeline input: False
```

### -MailNickName
The MailNickName parameter specifies the alias for the associated Microsoft 365 Group. This value will be used for the mail enabled object and will be used as PrimarySmtpAddress for this Microsoft 365 Group.The value of the MailNickName parameter has to be unique across your tenant.

```yaml
Type: String
Parameter Sets: For a new group

Required: False
Position: Named
Accept pipeline input: False
```

### -Owner
An admin who is allowed to create on behalf of another user should use this flag to specify the desired owner of the group.This user will be added as both a member and an owner of the group. If not specified, the user who creates the team will be added as both a member and an owner.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -ShowInTeamsSearchAndSuggestions
Setting that determines whether or not private teams should be searchable from Teams clients for users who do not belong to that team. Set to $false to make those teams not discoverable from Teams clients.

```yaml
Type: Boolean
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Visibility
Set to Public to allow all users in your organization to join the group by default. Set to Private to require that an owner approve the join request.

```yaml
Type: TeamVisibility
Parameter Sets: For a new group

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)