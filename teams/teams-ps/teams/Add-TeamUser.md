---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Add-TeamUser

## SYNOPSIS
Adds an owner or member to the team,  and to the unified group which backs the team.

Note: the command will return immediately, but the Teams application will not reflect the update immediately. 
The Teams application may need to be open for up to an hour before changes are reflected.

To turn an existing Member into an Owner,  first Add-TeamUser -Role Owner -User to add them to the owners list, then Remove-TeamUser -User foo to remove them from the members list.

## SYNTAX

```
Add-TeamUser -GroupId <String> -User <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Add-TeamUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -User dmx@example.com
```

Add user dmx@example.com to group.

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
Member or Owner

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### GroupId, User, Role

## OUTPUTS

## NOTES

## RELATED LINKS
