---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/remove-csphonenumbertag
applicable: Microsoft Teams
title: Remove-CsPhoneNumberTag
author: pavellatif
ms.author: pavellatif
ms.reviewer: pavellatif
manager: roykuntz
schema: 2.0.0
---

# Remove-CsPhoneNumberTag

## SYNOPSIS
This cmdlet allows admin to remove a tag from phone number.

## SYNTAX

```
Remove-CsPhoneNumberTag -Tag <String> [-PhoneNumber <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows telephone number administrators to remove existing tags from any telephone numbers. This method does not delete the tag from the system if the tag is assigned to other telephone numbers. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsPhoneNumberTag -PhoneNumber +123456789 -Tag "HR"
```

This example shows how to remove the tag "HR" from telephone number +123456789.

## PARAMETERS

### -PhoneNumber
Indicates the phone number for the the tag to be removed from

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tag
Indicates the tag to be removed.

```yaml
Type: String
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

### System.Boolean

## NOTES

## RELATED LINKS
