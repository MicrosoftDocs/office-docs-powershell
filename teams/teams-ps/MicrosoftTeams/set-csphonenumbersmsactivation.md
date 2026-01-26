---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title:       # Add a title for the browser tab
description: # Add a meaningful description for search results
author:      JulienPerbalCastro # GitHub alias
ms.author:   julienp # Microsoft alias
ms.service:  # Add the ms.service or ms.prod value
# ms.prod:   # To use ms.prod, uncomment it and delete ms.service
ms.topic:    # Add the ms.topic value
ms.date:     01/26/2026
---

# Set-CsPhoneNumberSmsActivation

## SYNOPSIS
This cmdlet allows the admin to activate SMS capabilties for a telephone number.

## SYNTAX

```
Set-CsPhoneNumberSmsActivation -TelephoneNumber <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet enables SMS capabilities for a telephone number. The output of the cmdlet is the OrderId of the asynchronous SMS Activation operation.

To deactivate SMS capabilties for a number, use the Remove-CsPhoneNumberSmsActivation (Remove-CsPhoneNumberSmsActivation.md) cmdlet.

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

[Remove-CsPhoneNumberSmsActivation]()


