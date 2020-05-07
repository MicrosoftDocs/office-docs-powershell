---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/remove-teamuser
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Remove-TeamUser

## SYNOPSIS

Remove an owner or member from a team, and from the unified group which backs the team.

Note: the command will return immediately, but the Teams application will not reflect the update immediately.
The Teams application may need to be open for up to an hour before changes are reflected.

Note: last owner cannot be removed from the team.

## SYNTAX

```
Remove-TeamUser -GroupId <String> -User <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Remove-TeamUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -User dmx@example.com -Role Owner
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
Specify the role of the user you are removing from the team. Accepts "Owner" and "Member" as possible values.
If cmdlet is called with -Role parameter as "Member" then the specified user is removed from the Team completely even if they were the owner of the Team. If "Owner" is specified in the -Role parameter then the specified user is removed as an owner of the team but stays as a team member. 
Note: The last owner cannot be removed from the team.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
