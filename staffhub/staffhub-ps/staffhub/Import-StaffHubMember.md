---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Import-StaffHubMember
online version: 
schema: 2.0.0
---

# Import-StaffHubMember

## SYNOPSIS
Import a list of members and adds them to teams.

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Import-StaffHubMember [-Path] <String> [[-Encoding] <String>]
```

## DESCRIPTION

Import a list of members and add them to teams.
Format of the file context - TeamId,FirstName,LastName,Email,PhoneNumber,IsManager. Either Email or PhoneNumber is required.
Eg: TEAM_1234,Staff,five,abc@contoso.com,True
Failure in adding one member does not stop the other members from getting added.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Import-StaffHubMember -Path "C:\member.txt"
```

Imports the list of members from the file in the specified path.

## PARAMETERS

### -Encoding
Encoding type of the file.
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
Location of the file.

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

This cmdlet is currently in Beta.

## RELATED LINKS

[Online Version](https://www.powershellgallery.com/packages/MicrosoftStaffHub/1.0.0-alpha)
