---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Add-StaffHubTeam
online version: 
schema: 2.0.0
---

# Add-StaffHubTeam

## SYNOPSIS
Creates a team.

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Add-StaffHubTeam [-Name] <String> [-TimeZone] <String> [[-ManagerEmail] <String>]
```

## DESCRIPTION
Creates a team.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Add-StaffHubTeam -Name "TeamFromCmdletTest" -TimeZone "Asia/Calcutta" -ManagerEmail "abc@contoso.com"
```

Creates a team with abc@contoso.com as manager.

### -------------------------- Example 2 --------------------------
```
Add-StaffHubTeam -Name "TeamFromCmdletTest" -TimeZone "Asia/Calcutta"
```

Creates a team with the logged in user as manager.

## PARAMETERS

### -ManagerEmail
Organizational email of the member who should be the manager of the team. If not specified, the logged in user is assigned as the manager.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of the team to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone
TimeZone of the team. Format - tz database.
Reference: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

This cmdlet is currently in Beta.

## RELATED LINKS

[MicrosoftStaffHub Module in Gallery](https://www.powershellgallery.com/packages/MicrosoftStaffHub/1.0.0-alpha)
