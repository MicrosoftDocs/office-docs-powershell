---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-team
title: Set-Team
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-Team

## SYNOPSIS
This cmdlet allows you to update properties of a team, including its displayname, description, and team-specific settings.

## SYNTAX

```
Set-Team -GroupId <String> [-DisplayName <String>] [-Description <String>] [-MailNickName <String>]
 [-Classification <String>] [-Visibility <String>] [-AllowGiphy <Boolean>] [-GiphyContentRating <String>]
 [-AllowStickersAndMemes <Boolean>] [-AllowCustomMemes <Boolean>] [-AllowGuestCreateUpdateChannels <Boolean>]
 [-AllowGuestDeleteChannels <Boolean>] [-AllowCreateUpdateChannels <Boolean>] [-AllowDeleteChannels <Boolean>]
 [-AllowAddRemoveApps <Boolean>] [-AllowCreateUpdateRemoveTabs <Boolean>]
 [-AllowCreateUpdateRemoveConnectors <Boolean>] [-AllowUserEditMessages <Boolean>]
 [-AllowUserDeleteMessages <Boolean>] [-AllowOwnerDeleteMessages <Boolean>] [-AllowTeamMentions <Boolean>]
 [-AllowChannelMentions <Boolean>] [-ShowInTeamsSearchAndSuggestions <Boolean>] [-AllowCreatePrivateChannels <Boolean>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows you to update properties of a team, including its displayname, description, and team-specific settings.  This cmdlet includes all settings that used to be set using the Set-TeamFunSettings, Set-TeamGuestSettings, etc. cmdlets

## EXAMPLES

### Example 1
```
Set-Team -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -DisplayName "Updated TeamName" -Visibility Public
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DisplayName
Team display name.
Team Name Characters Limit - 256.

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

### -Description
Team description.
Team Description Characters Limit - 1024.

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

### -MailNickName
The MailNickName parameter specifies the alias for the associated Office 365 Group.
This value will be used for the mail enabled object and will be used as PrimarySmtpAddress for this Office 365 Group.
The value of the MailNickName parameter has to be unique across your tenant.

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

### -Classification
This parameter is reserved for internal Microsoft use.

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

### -Visibility
Team visibility.
Valid values are "Private" and "Public"

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

### -AllowAddRemoveApps
Boolean value that determines whether or not members (not only owners) are allowed to add apps to the team.

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

### -AllowChannelMentions
Boolean value that determines whether or not channels in the team can be @ mentioned so that all users who follow the channel are notified.

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

### -AllowCreateUpdateChannels
Setting that determines whether or not members (and not just owners) are allowed to create channels.

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

### -AllowCreateUpdateRemoveConnectors
Setting that determines whether or not members (and not only owners) can manage connectors in the team.

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

### -AllowCreateUpdateRemoveTabs
Setting that determines whether or not members (and not only owners) can manage tabs in channels.

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

### -AllowCustomMemes
Setting that determines whether or not members can use the custom memes functionality in teams.

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

### -AllowDeleteChannels
Setting that determines whether or not members (and not only owners) can delete channels in the team.

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

### -AllowGiphy
Setting that determines whether or not giphy can be used in the team.

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

### -AllowGuestCreateUpdateChannels
Setting that determines whether or not guests can create channels in the team.

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

### -AllowGuestDeleteChannels
Setting that determines whether or not guests can delete in the team.

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

### -AllowOwnerDeleteMessages
Setting that determines whether or not owners can delete messages that they or other members of the team have posted.

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

### -AllowStickersAndMemes
Setting that determines whether stickers and memes usage is allowed in the team.

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

### -AllowTeamMentions
Setting that determines whether the entire team can be @ mentioned (which means that all users will be notified)

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

### -AllowUserDeleteMessages
Setting that determines whether or not members can delete messages that they have posted.

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

### -AllowUserEditMessages
Setting that determines whether or not users can edit messages that they have posted.

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

### -GiphyContentRating
Setting that determines the level of sensitivity of giphy usage that is allowed in the team.  Accepted values are "Strict" or "Moderate"

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

### -ShowInTeamsSearchAndSuggestions
The parameter has been deprecated.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-Team](https://learn.microsoft.com/powershell/module/teams/get-team)

[New-Team](https://learn.microsoft.com/powershell/module/teams/new-team)
