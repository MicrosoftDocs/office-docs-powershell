---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/add-teamchanneluser
schema: 2.0.0
---

# Add-TeamChannelUser

## SYNOPSIS
Adds an owner or member to the private channel.

Note: the command will return immediately, but the Teams application will not reflect the update immediately, please refresh the members page to see the update.

To turn an existing Member into an Owner,  first Add-TeamChannelUser -User foo to add them to the members list, then Add-TeamChannelUser -User foo -Role Owner to add them to owner list.

## SYNTAX

```
Add-TeamChannelUser -GroupId <String> -DisplayName <String> -User <String> [-Role <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Note: This cmdlet is part of the Public Preview version of Teams PowerShell Module, for more information see [Install Teams PowerShell public preview](https://docs.microsoft.com/microsoftteams/teams-powershell-install#install-teams-powershell-public-preview) and also see [Microsoft Teams PowerShell Release Notes](https://docs.microsoft.com/microsoftteams/teams-powershell-release-notes).

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

## PARAMETERS

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### GroupId, DisplayName, User, Role
## OUTPUTS

## NOTES

## RELATED LINKS
