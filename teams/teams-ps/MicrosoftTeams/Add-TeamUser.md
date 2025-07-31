---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/add-teamuser
schema: 2.0.0
title: Add-TeamUser
---

# Add-TeamUser

## SYNOPSIS
The `Add-TeamUser` adds an owner or member to the team, and to the unified group which backs the team.

## SYNTAX
```
Add-TeamUser -GroupId <String> -User <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds an owner or member to the team, and to the unified group which backs the team.

> [!Note]
> The command will return immediately, but the Teams application will not reflect the update immediately. The change can take between 24 and 48 hours to appear within the Teams client.

## EXAMPLES

### Example 1
```
Add-TeamUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -User dmx@example.com
```

This example adds the user "dmx@example.com" to a group with the id "31f1ff6c-d48c-4f8a-b2e1-abca7fd399df".

## PARAMETERS

### -GroupId
GroupId of the team.

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
Member or Owner. If Owner is specified then the user is also added as a member to the Team backed by unified group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Member
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -User
UPN of a user of the organization (user principal name - e.g. johndoe@example.com).

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

### User

### Role

## OUTPUTS

## NOTES

## RELATED LINKS
