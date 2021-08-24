---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry
Module Name: MicrosoftTeams
title: Get-CsOnlineTelephoneNumberCountry
schema: 2.0.0
manager: mreddy
author: jiaych
ms.author: jiaych
ms.reviewer:
---

# Get-CsOnlineTelephoneNumberCountry

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberCountry` cmdlet to get the list of supported countries to search and acquire new telephone numbers.  The telephone numbers can then be used to set up calling features for users and services in your organization.

## SYNTAX

```
PS C:\> Get-CsOnlineTelephoneNumberCountry [<CommonParameters>]
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

## DESCRIPTION

Use the `Get-CsOnlineTelephoneNumberCountry` cmdlet to get the list of supported countries to search and acquire new telephone numbers.  The telephone numbers can then be used to set up calling features for users and services in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberCountry
```
This example returns the list of supported countries or regions for the cmdlet search and acquire of new telephone numbers.

## PARAMETERS

This cmdlet requires no additional parameters.

## INPUTS

This cmdlet requires no additional inputs.

## OUTPUTS

This cmdlet returns a list of supported countries or regions.

## RELATED LINKS
[Get-CsOnlineTelephoneNumberCountry](Get-CsOnlineTelephoneNumberCountry.md)
[Get-CsOnlineTelephoneNumberType](Get-CsOnlineTelephoneNumberType.md)

[New-CsOnlineTelephoneNumberOrder](New-CsOnlineTelephoneNumberOrder.md)
[Get-CsOnlineTelephoneNumberOrder](Get-CsOnlineTelephoneNumberOrder.md)
[Complete-CsOnlineTelephoneNumberOrder](Complete-CsOnlineTelephoneNumberOrder.md)
[Clear-CsOnlineTelephoneNumberOrder](Clear-CsOnlineTelephoneNumberOrder.md)