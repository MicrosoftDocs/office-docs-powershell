---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: garciadaniel
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberusagechangeorder
schema: 2.0.0
title: New-CsPhoneNumberUsageChangeOrder
---

# New-CsPhoneNumberUsageChangeOrder

## SYNOPSIS
Creates an order to change the usage type of one or more telephone numbers.

## SYNTAX

```
New-CsPhoneNumberUsageChangeOrder -TelephoneNumber <String[]> -Usage <String> [<CommonParameters>]
```

## DESCRIPTION
The New-CsPhoneNumberUsageChangeOrder cmdlet creates a request to update the usage type of the specified telephone numbers.
For example, use `-Usage ServiceType` to request a change from User Type to Service Type.
The cmdlet returns the order identifier.

## EXAMPLES

### Example 1
```powershell
New-CsPhoneNumberUsageChangeOrder -TelephoneNumber "+12065550100" -Usage ServiceType
```
```output
aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
```

This example creates an order to change the usage of telephone number "+12065550100" to Service Type.
The returned string identifies the order.

### Example 2
```powershell
$telephoneNumbers = "+12065550100", "+12065550101"
New-CsPhoneNumberUsageChangeOrder -TelephoneNumber $telephoneNumbers -Usage ServiceType
```
```output
aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
```

This example creates one order to change the usage of both telephone numbers to Service Type.

## PARAMETERS

### -TelephoneNumber
Specifies the telephone numbers whose usage type to change.
Include the country code.
The leading `+` is optional, for example, "+12065550100" or "12065550100".
To update multiple numbers in one order, pass an array of strings.

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
Specifies the new usage type for the telephone numbers.
For example, specify `ServiceType` to request Service Type usage.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.String

The identifier of the phone number usage change order.

## NOTES
This cmdlet is available in Teams PowerShell module 8.0.0 or later.

## RELATED LINKS

[Get-CsPhoneNumberAssignment](./Get-CsPhoneNumberAssignment.md)
