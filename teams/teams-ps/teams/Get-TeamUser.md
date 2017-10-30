---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-TeamUser
online version: 
schema: 2.0.0
---

# Get-TeamUser

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Returns users of a team.

## SYNTAX

```
Get-TeamUser -GroupId <String> [-Role <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Get-TeamUser -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -Role Owner
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

### -Role
Filter the results to only users with the given role: Owner, Member, or Guest.

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

