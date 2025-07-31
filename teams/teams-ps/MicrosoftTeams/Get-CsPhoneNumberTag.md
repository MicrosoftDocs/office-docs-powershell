---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csphonenumbertag
schema: 2.0.0
title: Get-CsPhoneNumberTag
---

# Get-CsPhoneNumberTag

## SYNOPSIS
This cmdlet allows the admin to get a list of existing tags for telephone numbers.

## SYNTAX

```
Get-CsPhoneNumberTag [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will get a list of all existing tags that are assigned to phone numbers in the tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsPhoneNumberTag
```
```output
TagValue
HR
Redmond HQ
Executives
```

This example shows how to get a list of existing tags for telephone numbers

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ISkypeTelephoneNumberMgmtCmdletTenantTagRecord

## NOTES

## RELATED LINKS
