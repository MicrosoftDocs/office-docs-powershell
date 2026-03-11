---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignmentblock
schema: 2.0.0
title: Set-CsPhoneNumberAssignmentBlock
---

# Set-CsPhoneNumberAssignmentBlock

## SYNOPSIS
This cmdlet allows the admin to create and assign a temporary block on telephone number assignment to selected telephone number.

## SYNTAX

```
Set-CsPhoneNumberAssignmentBlock -TelephoneNumber <String> [-AssignmentBlockedForever] [-AssignmentBlockedDays <Integer>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows the teams phone administrators to create and assign a temporary block on telephone number assignment to selected telephone number. There are two ways to create the assignment block:
1. Assignment is blocked until cleared. This can be set by -AssignmentBlockedForever parameter. Once set, the telephone number will remain unassignable until the block is cleared by an admin.
2. Assignment is blocked for a set number of days. This can be achieved by setting -AssignmentBlockedDays parameter (this value must be a valid integer between 1 and 365 days). Once set, the telephone number will remain unassignable until the time runs out or the block is cleared by an admin. 

 The admin **cannot** set both -AssignmentBlockedForever and -AssignmentBlockedDays for the same number. If there is an existing assignment block on the number, the admin must remove the existing block using [Remove-CsPhoneNumberAssignmentBlock](./remove-csphonenumberassignmentblock.md) before proceeding with setting the new assignment block.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsPhoneNumberAssignmentBlock -TelephoneNumber +123456789 -AssignmentBlockedForever
```

The above example shows how to set an indefinite assignment block to a +123456789 number.

### Example 2
```powershell
PS C:\> Set-CsPhoneNumberAssignmentBlock -TelephoneNumber +123456789 -AssignmentBlockedDays 30
```

The above example shows how to set an assignment block to a +123456789 number for 30 days.

## PARAMETERS

### -TelephoneNumber
Indicates the phone number for the assignment block to be assigned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedForever
Sets an indefinite block on assignment for the telephone number.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedDays
Sets a duration based assignment block on the telephone number.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES
This cmdlet is available in Teams PowerShell module 7.5.0 or later.

## RELATED LINKS
