---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: https://docs.microsoft.com/powershell/module/staffhub/import-staffhubteam
applicable: Microsoft StaffHub
title: Import-StaffHubTeam
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Import-StaffHubTeam

## SYNOPSIS
Imports a set of teams from a specified file

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Import-StaffHubTeam [-Path] <String> [[-Encoding] <String>]
```

## DESCRIPTION

Imports a set of teams from a specified file.
Format of the File content - Name,TimeZone,ManagerEmail
Eg: CmdletTestTeam,Asia/Calcutta,abc@contoso.com
Failure in adding one team does not stop the other teams from getting added.

## EXAMPLES

### Example 1
```powershell
Import-StaffHubTeam -Path "C:\team.txt"
```

Imports a list of teams from the file in the specified path.

## PARAMETERS

### -Encoding
Encoding type of the file
https://msdn.microsoft.com/en-us/library/system.text.encoding(v=vs.110).aspx - Encoding parameter value list

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

### -Path
Location of the file.

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
