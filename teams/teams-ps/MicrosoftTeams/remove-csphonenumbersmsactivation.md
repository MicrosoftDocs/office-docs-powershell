---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title: Remove-CsPhoneNumberSmsActivation
description: SMS disablement on Teams phone numbers
author: LankhanhDang-msft
ms.author: lankhanhdang
ms.service: teams-powershell
ms.topic: article
ms.date:     01/26/2026
---

# Remove-CsPhoneNumberSmsActivation

## SYNOPSIS
This cmdlet allows the admin to deactivate SMS capabilties for a telephone number.

## SYNTAX

```
Remove-CsPhoneNumberSmsActivation -TelephoneNumber <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deactivates SMS capabilities for a telephone number. The output of the cmdlet is the OrderId of the asynchronous SMS Deactivation operation.

To activate SMS capabilties for a number, use the Set-CsPhoneNumberSmsActivation (Set-CsPhoneNumberSmsActivation.md) cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsPhoneNumberSmsActivation -TelephoneNumber +123456789
```

The above example shows how to deactivate SMS for a +123456789 number.

## PARAMETERS

### -TelephoneNumber
Indicates the phone number for SMS to be unenabled on.

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

[Set-CsPhoneNumberSmsActivation]()


