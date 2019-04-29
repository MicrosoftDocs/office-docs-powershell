---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamMemberSettings
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Set-TeamMemberSettings

## SYNOPSIS
Note: This cmdlet is deprecated as of our 1.0 PowerShell release, and is not supported in our 1.0 release.  To set a Team's settings, run Set-Team.

Updates team member settings.

## SYNTAX

```
Set-TeamMemberSettings -GroupId <String> [-AllowCreateUpdateChannels <String>] [-AllowDeleteChannels <String>]
 [-AllowAddRemoveApps <String>] [-AllowCreateUpdateRemoveTabs <String>]
 [-AllowCreateUpdateRemoveConnectors <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamMemberSettings -GroupId 4ba546e6-e28d-4645-8cc1-d3575ef9d266 -AllowCreateUpdateChannels false
```

### --------------------------  Example 2  --------------------------
```
Set-TeamMemberSettings -GroupId 4ba546e6-e28d-4645-8cc1-d3575ef9d266 -AllowDeleteChannels true -AllowAddRemoveApps false
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

### -AllowCreateUpdateChannels
Setting to create and update channels

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

### -AllowDeleteChannels
Setting to Delete channels

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

### -AllowAddRemoveApps
Setting to add and remove apps to teams

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

### -AllowCreateUpdateRemoveTabs
Setting to create, update and remove tabs

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

### -AllowCreateUpdateRemoveConnectors
Setting to create, update and remove connectors

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

### GroupId

### AllowCreateUpdateChannels

### AllowDeleteChannels

### AllowAddRemoveApps

### AllowCreateUpdateRemoveTabs

### AllowCreateUpdateRemoveConnectors

## OUTPUTS

## NOTES

## RELATED LINKS

