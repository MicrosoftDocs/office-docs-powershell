---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/set-csphonenumbertag
applicable: Microsoft Teams
title: Set-CsPhoneNumberTag
author: pavellatif
ms.author: pavellatif
ms.reviewer: pavellatif
manager: roykuntz
schema: 2.0.0
---

# Set-CsPhoneNumberTag

## SYNOPSIS
This cmdlet allows the admin to create and assign a tag to a phone number.

## SYNTAX

```
Set-CsPhoneNumberTag -PhoneNumber <String> -Tag <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows telephone number administrators to create and assign tags to phone numbers. Tags can be up to 50 characters long, including spaces, and can contain multiple words. They are not case-sensitive. Each phone number can have up to 50 tags assigned. To improve readability, it is recommended to avoid assigning too many tags to a single phone number. If the desired tag already exist, the telephone number will get assigned the existing tag. If the tag is not already available, a new tag will be created. [Get-CsPhoneNumberTag](https://learn.microsoft.com/powershell/module/teams/get-csphonenumbertag) can be used to check a list of already existing tags. The tags can be used as a filter for [Get-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/get-csphonenumberassignment) to filter on certain list.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsPhoneNumberTag -PhoneNumber +123456789 -Tag "HR"
```
Above example shows how to set a "HR" tag to +123456789 number. 

## PARAMETERS

### -PhoneNumber
Indicates the phone number for the the tag to be assigned

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

### -Tag
Indicates the tag to be assigned or created.

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
