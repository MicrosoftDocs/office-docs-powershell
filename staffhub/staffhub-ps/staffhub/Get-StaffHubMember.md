---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Get-StaffHubMember
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-StaffHubMember

## SYNOPSIS
Get details for all team members or for a specified team member.

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Get-StaffHubMember [-TeamId] <String> [[-MemberId] <String>]
```

## DESCRIPTION
Get details of team members.

## EXAMPLES

### Example 1
```
Get-StaffHubMember -TeamId "TEAM_1234" -MemberId MBER_1234
```

Get the details of MBER_1234 in team TEAM_1234.

### Example 2
```
Get-StaffHubMember -TeamId "TEAM_1234"
```

Get the details of all the members in team TEAM_1234.

## PARAMETERS

### -MemberId
MemberId for the specified member in the team.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft StaffHub
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
TeamId for which all the members are to be fetched.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft StaffHub
Required: True
Position: 0
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
