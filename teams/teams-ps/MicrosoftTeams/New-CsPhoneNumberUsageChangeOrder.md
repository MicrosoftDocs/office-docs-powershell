---
applicable: Microsoft Teams
author: garciadaniel
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: garciadaniel
ms.reviewer: garciadaniel
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberusagechangeorder
schema: 2.0.0
title: New-CsPhoneNumberUsageChangeOrder
---

# New-CsPhoneNumberUsageChangeOrder

## SYNOPSIS
This cmdlet creates a request to to update TN Usage (e.g. from User Type to Service Type).

## SYNTAX

```
New-CsPhoneNumberUsageChangeOrder -TelephoneNumber <String[]> -Usage <String>
```

## DESCRIPTION
This cmdlet creates a order to update the usage of the given phone numbers (e.g. from User Type to Service Type).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsPhoneNumberUsageChangeOrder -TelephoneNumber "+123456789" -Usage ServiceType
```
```
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, the telephone number "+123456789" would change to Service Type usage.

### Example 2
```powershell
[string[]]$tns="+14255551234","+14255551233"
PS C:\> New-CsPhoneNumberUsageChangeOrder -TelephoneNumber $tns -Usage ServiceType
```
```
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, the usage of the given list of telephone numbers is being updated to Service Type.

## PARAMETERS

### -TelephoneNumber
Specifies the telephone number(s) to remove. The format can be with or without the prefixed +, but needs to include country code etc.

```yaml
Type: System.String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Usage
Specifies the new usage type for the given telephone numbers.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

The order id from the request.

### None

## NOTES
This cmdlet is available in Teams PowerShell module 7.5.0 or later.

## RELATED LINKS
