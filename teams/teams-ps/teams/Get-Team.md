---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-Team
online version: 
schema: 2.0.0
---

# Get-Team

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Gets all the teams that the user belongs to.

## SYNTAX

```
Get-Team [-User <String>]
```

## DESCRIPTION
Gets all the teams the user is part of.
The user must be you - you can only get information on yourself.

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
PS> Get-Team -User dmx1@example.com
```

## PARAMETERS

### -User
User's UPN (user principal name - e.g.
johndoe@example.com)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

### UPN, UserID

## OUTPUTS

### Team

## NOTES

## RELATED LINKS

[New-Team](New-Team.md)

[Set-Team](Set-Team.md)