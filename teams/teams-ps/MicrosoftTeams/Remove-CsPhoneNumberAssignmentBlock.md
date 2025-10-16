---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignmentblock
schema: 2.0.0
title: Remove-CsPhoneNumberAssignmentBlock
---


# Remove-CsPhoneNumberAssignmentBlock

## SYNOPSIS
This cmdlet allows the admin to remove an assignment block on a telephone number.

## SYNTAX
```
Remove-CsPhoneNumberAssignmentBlock -TelephoneNumber <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows telephone number administrators to remove an existing assignment block on a telephone number.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsPhoneNumberAssignmentBlock -TelephoneNumber +123456789
```

The above example shows how to remove the assignment block on a +123456789 number.

## PARAMETERS

### -TelephoneNumber
Indicates the phone number for the assignment block be removed from.

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


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS
