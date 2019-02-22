---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-Team
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-Team

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Gets all the teams that the user belongs to or all teams in an organization

## SYNTAX

```
Get-Team [-User <String>]
```

## DESCRIPTION
Gets all the teams in an organization, or all teams that you belong to. The user must be you - you can only get information on yourself or all teams in the organization.  Note: we are still backfilling existing teams to get returned by this command.

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
PS> Get-Team -User dmx1@example.com
```

## PARAMETERS

### -User
User's UPN (user principal name - e.g. johndoe@example.com).  This can only be your own UPN.  If not specified, this cmdlet will return all groups that have been Teams-enabled in an organization. 

Note: we are still backfilling existing teams to get returned by this command.

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
