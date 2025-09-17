---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/update-csphonenumbertag
schema: 2.0.0
title: Update-CsPhoneNumberTag
---

# Update-CsPhoneNumberTag

## SYNOPSIS
This cmdlet allows admin to update existing telephone number tags.

## SYNTAX

```
Update-CsPhoneNumberTag -NewTag <String> -Tag <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet can be used to update existing tags for telephone numbers. Tags can be up to 50 characters long, including spaces, and can contain multiple words. They are not case-sensitive. An admin can get a list of all existing tags using [Get-CsPhoneNumberTag](https://learn.microsoft.com/powershell/module/microsoftteams/get-csphonenumbertag).

## EXAMPLES

### Example 1
```powershell
PS C:\> Update-CsPhoneNumberTag -Tag "Redmond" -NewTag "Redmond HQ"
```

This example shows how to update an existing tag "Redmond" to "Redmond HQ"

## PARAMETERS

### -NewTag
This is the new tag. A tag can be maximum 50 characters long.

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
This is the old tag which the admin wants to update.

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
