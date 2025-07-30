---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/add-teamchanneluser
schema: 2.0.0
title: Add-TeamChannelUser
---

# Add-TeamChannelUser

## SYNOPSIS
Adds an owner or member to the private channel.

## SYNTAX

```
Add-TeamChannelUser -GroupId <String> -DisplayName <String> -User <String> [-Role <String>] [-TenantId <String>] [<CommonParameters>]
```

## DESCRIPTION

The command will return immediately, but the Teams application will not reflect the update immediately. To see the update you should refresh the members page.

Note: Technical limitations of private channels apply. To add a user as a member to a channel, they need to first be a member of the team. To make a user an owner of a channel, they need to first be a member of the channel.

Note: This cmdlet is part of the Public Preview version of Teams PowerShell Module, for more information see [Install Teams PowerShell public preview](https://learn.microsoft.com/microsoftteams/teams-powershell-install#install-teams-powershell-public-preview) and also see [Microsoft Teams PowerShell Release Notes](https://learn.microsoft.com/microsoftteams/teams-powershell-release-notes).

## EXAMPLES

### Example 1
```
Add-TeamChannelUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -DisplayName "Engineering" -User dmx@example.com
```

Add user dmx@example.com to private channel with name "Engineering" under the given group.

### Example 2
```
Add-TeamChannelUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -DisplayName "Engineering" -User dmx@example.com -Role Owner
```

Promote user dmx@example.com to an owner of private channel with name "Engineering" under the given group.

### Example 3
```
Add-TeamChannelUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -DisplayName "Engineering" -User 0e4249a7-6cfd-8c93-a510-91cda44c8c73 -TenantId dcd143cb-c4ae-4364-9faf-e1c3242bf4ff
```

Adds external user 0e4249a7-6cfd-8c93-a510-91cda44c8c73 to a shared channel.

## PARAMETERS

### -DisplayName
Display name of the private channel

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

### -GroupId
GroupId of the parent team

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

### -Role
Owner

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

### -TenantId
TenantId of the external user

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

### -User
User's UPN (user principal name - e.g.
johndoe@example.com)

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### GroupId

### DisplayName

### User

### Role

### TenantId

## OUTPUTS

## NOTES

## RELATED LINKS
