---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-Team
online version: 
schema: 2.0.0
---

# Set-Team

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Updates a team.

## SYNTAX

```
Set-Team -GroupId <String> [-DisplayName <String>] [-Description <String>] [-Alias <String>]
 [-Classification <String>] [-AccessType <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-Team -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -DisplayName "Updated TeamName" -AccessType Public
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

### -DisplayName
Team display name.
Team Name Characters Limit - 256.

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

### -Description
Team description.
Team Description Characters Limit - 1024.

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

### -Alias
Same as displayName without any spaces.
Team Alias Characters Limit - 64

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

### -Classification
Team classification.

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

### -AccessType
Team access type.
Valid values are "Private" and "Public"

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

[Get-Team](Get-Team.md)

[New-Team](New-Team.md)