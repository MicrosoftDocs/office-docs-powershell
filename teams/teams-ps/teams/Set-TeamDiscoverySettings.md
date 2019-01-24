---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamDiscoverySettings
online version:
schema: 2.0.0
---

# Set-TeamDiscoverySettings

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Update a team's discovery settings.

## SYNTAX

```
Set-TeamDiscoverySettings -GroupId <String> [-ShowInTeamsSearchAndSuggestions <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamDiscoverySettings -GroupId 0ebb500c-f5f3-44dd-b155-cc8c4f383e2d -ShowInTeamsSearchAndSuggestions true
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

### -ShowInTeamsSearchAndSuggestions
Setting to enable discovery in Teams search and suggestions. Non-private teams must be discoverable.

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

### GroupId, ShowInTeamsSearchAndSuggestions

## OUTPUTS

## NOTES

## RELATED LINKS

