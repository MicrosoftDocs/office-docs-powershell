---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: New-Team
online version: 
schema: 2.0.0
---

# New-Team

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Creates a new team.
The new team will be backed by a new unified group.

## SYNTAX

```
New-Team -DisplayName <String> [-Description <String>] [-Alias <String>] [-Classification <String>]
 [-AccessType <String>] [-AddCreatorAsMember <Boolean>]
```

## DESCRIPTION
Creates a new team with user specified settings, and returns a Group object with a GroupID property.

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
New-Team -DisplayName "Tech Reads"
```

### --------------------------  Example 2  --------------------------
```
New-Team -DisplayName "Tech Reads" -Description "Team to post technical articles and blogs" -AccessType Public
```
### --------------------------  Example 3  --------------------------
```
Connect-MicrosoftTeams -AccountId myaccount@example.com
$group = New-Team -alias “TestTeam” -displayname “Test Teams” -AccessType “private”
Add-TeamUser -GroupId $group.GroupId -User "fred@example.com"
Add-TeamUser -GroupId $group.GroupId -User "john@example.com"
Add-TeamUser -GroupId $group.GroupId -User "wilma@example.com"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Q4 planning"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Exec status"
New-TeamChannel -GroupId $group.GroupId -DisplayName "Contracts"
Set-TeamFunSettings -GroupId $group.GroupId -AllowCustomMemes true
```

## PARAMETERS

### -AccessType
Team access type.
Valid values are "Private" and "Public".
Default is "Private".
(This parameter has the same meaning as -AccessType in New-UnifiedGroup.)

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

### -AddCreatorAsMember
This setting lets you decide if you will be added as a member of the team. 
The default is true.

```yaml
Type: Boolean
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
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Classification
Team classification

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

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

### GroupId

## NOTES

## RELATED LINKS

