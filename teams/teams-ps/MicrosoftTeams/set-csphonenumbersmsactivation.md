---
applicable: Microsoft Teams
author: LankhanhDang-msft
external help file:
locale: en-US
Module Name: MicrosoftTeams
ms.author: lankhanhdang
ms.topic: article
ms.date: 01/26/2026
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumbersmsactivation
schema: 2.0.0
title: Set-CsPhoneNumberSmsActivation
---

# Set-CsPhoneNumberSmsActivation

## SYNOPSIS
This cmdlet allows the admin to activate SMS capabilities for a telephone number.

## SYNTAX

```
Set-CsPhoneNumberSmsActivation -TelephoneNumber <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet enables SMS capabilities for a telephone number. The output of the cmdlet is the OrderId of the asynchronous SMS Activation operation.

To deactivate SMS capabilities for a number, use the Remove-CsPhoneNumberSmsActivation (Remove-CsPhoneNumberSmsActivation.md) cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsPhoneNumberSmsActivation -TelephoneNumber +123456789
```

The above example shows how to enable SMS for a +123456789 number.

## PARAMETERS

### -TelephoneNumber
Indicates the phone number for SMS to be enabled on.

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

### System.Object

## NOTES

## RELATED LINKS

[Remove-CsPhoneNumberSmsActivation](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumbersmsactivation)
