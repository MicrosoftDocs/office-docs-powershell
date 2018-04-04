---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Import-StaffHubShift
online version: 
schema: 2.0.0
---

# Import-StaffHubShift

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Imports a list of shifts and adds them to members in the specified teams

## SYNTAX

```
Import-StaffHubShift [-Path] <String> [[-Encoding] <String>]
```

## DESCRIPTION
Imports a list of shifts and adds them to members in the specified teams<br>
Format of the file content - Title,Notes,StartDateTime,EndDateTime,ShiftType,MemberId,TeamId<br>
Eg: Title,Notes,2018-11-28T00:00:00Z,2018-11-28T02:00:00Z,Working,MBER_1234,TEAM_1234<br>
Failure in adding one shift does not stop the other shifts from getting added.<br>

## EXAMPLES

### Example 1
```
Import-StaffHubShift -Path "C:\shift.txt"
```

Imports the list of shifts from the file in the specified path

## PARAMETERS

### -Encoding
Encoding type of the file
https://msdn.microsoft.com/en-us/library/system.text.encoding(v=vs.110).aspx - Encoding parameter value list

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Location of the file

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

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

