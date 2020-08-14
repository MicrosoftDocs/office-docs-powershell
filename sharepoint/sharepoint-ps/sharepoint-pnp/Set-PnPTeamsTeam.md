---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpteamsteam
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTeamsTeam
---

# Set-PnPTeamsTeam

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Updates an existing Team.

## SYNTAX 

```powershell
Set-PnPTeamsTeam -Identity <TeamsTeamPipeBind>
                 [-DisplayName <String>]
                 [-Description <String>]
                 [-Visibility <TeamVisibility>]
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

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTeamsChannel -Team "MyTeam" -DisplayName "My Team"
```

Updates the team called 'MyTeam' to have the display name set to 'My Team'

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
Changes the description of the specified team.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName
Changes the display name of the specified team.

```yaml
Type: String
Parameter Sets: (All)

Required: False
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

### -Identity
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
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
Changes the visibility of the specified team.

```yaml
Type: TeamVisibility
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)