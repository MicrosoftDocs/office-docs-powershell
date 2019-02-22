---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Remove-TeamUser
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Remove-TeamUser

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Remove an owner or member from a team,
and from the unified group which backs the team. 

Note: the command will return immediately, but the Teams application will not reflect the update immediately. The Teams application may need to be open for up to an hour before changes are reflected.

Note: last owner cannot be removed from the team.


## SYNTAX

```
Remove-TeamUser -GroupId <String> -User <String> -Role <String>
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Remove-TeamUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -User dmx@example.com
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Role
Use this to demote a user from owner to member of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

