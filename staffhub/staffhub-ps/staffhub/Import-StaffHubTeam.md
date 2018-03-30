---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Import-StaffHubTeam
online version: 
schema: 2.0.0
---

# Import-StaffHubTeam

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Imports a set of teams from a specified file

## SYNTAX

```
Import-StaffHubTeam [-Path] <String> [[-Encoding] <String>]
```

## DESCRIPTION
Imports a set of teams from a specified file<br>
Format of the File content - Name,TimeZone,ManagerEmail<br>
Eg: CmdletTestTeam,Asia/Calcutta,abc@contoso.com<br>
Failure in adding one team does not stop the other teams from getting added.<br>

## EXAMPLES

### Example 1
```
Import-StaffHubTeam -Path "C:\team.txt"
```

Imports a list of teams from the file in the specified path

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

