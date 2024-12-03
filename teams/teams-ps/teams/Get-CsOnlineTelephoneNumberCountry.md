---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry
Module Name: MicrosoftTeams
title: Get-CsOnlineTelephoneNumberCountry
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
---

# Get-CsOnlineTelephoneNumberCountry

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberCountry` cmdlet to get the list of supported countries or regions to search and acquire new telephone numbers.  The telephone numbers can then be used to set up calling features for users and services in your organization.

## SYNTAX

```
PS C:\> Get-CsOnlineTelephoneNumberCountry [<CommonParameters>]
```
## DESCRIPTION

Use the `Get-CsOnlineTelephoneNumberCountry` cmdlet to get the list of supported countries or regions to search and acquire new telephone numbers.  The telephone numbers can then be used to set up calling features for users and services in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberCountry
```

```output
Name                   Value
----                   -----
Antigua and Barbuda    AG
Argentina              AR
Australia              AU
Austria                AT
...
United Kingdom         GB
United States          US
Uruguay                UY
Venezuela              VE
Vietnam                VN
```

This example returns the list of supported countries or regions for the cmdlet search and acquire of new telephone numbers.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsOnlineTelephoneNumberCountry](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry)
[Get-CsOnlineTelephoneNumberType](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry)

[New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Complete-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Clear-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
