---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: https://docs.microsoft.com/powershell/module/staffhub/add-staffhubshift
applicable: Microsoft StaffHub
title: Add-StaffHubShift
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Add-StaffHubShift

## SYNOPSIS
Adds a shift to the specified member in a team.

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Add-StaffHubShift [-Title] <String> [[-Notes] <String>] [-StartDateTime] <DateTime> [-EndDateTime] <DateTime>
 [-ShiftType] <String> [-MemberId] <String> [-TeamId] <String>
```

## DESCRIPTION
Adds a shift to the specified member in a team.

## EXAMPLES

### Example 1
```powershell
$startTime = Get-Date -Date "2018-01-01T00:10:00"
$endTime = Get-Date -Date "2018-01-01T04:10:00"
Add-StaffHubShift -Title "Title" -StartDateTime $startTime -EndDateTime $endTime -ShiftType Working -MemberId "MBER_1234" -TeamId "TEAM_1234"
```

Creates a shift for member MBER_1234 under the team TEAM_1234.

## PARAMETERS

### -EndDateTime
End time of the shift.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberId
Member to which the shift is to be added.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
Additional notes for the shift.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShiftType
ShiftType - Working/Absence.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Accepted values: Working, Absence
Required: True
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDateTime
Start time of the shift.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: True
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
ID of the team to which the shift is to be added.

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

### -Title
Title of the shift.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: False
Position: 2
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
