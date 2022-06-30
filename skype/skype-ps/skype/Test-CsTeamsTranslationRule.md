---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/skype/test-csteamstranslationrule
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Test-CsTeamsTranslationRule

## SYNOPSIS
This cmdlet tests a phone number against the defined teams translation rules and returns information about the matching rules.

## SYNTAX

### Test (Default)
```powershell
Test-CsTeamsTranslationRule [-PhoneNumber <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet tests a phone number against the defined teams translation rules and return information about the matching rules. If not matching rules were found,
the cmdlet returns the message Number translation rule not found.

Returned results are sorted by TelephoneNumber in ascending order.

## EXAMPLES

### Example 1
```powershell
Test-CsTeamsTranslationRule -PhoneNumber 1234
```
```output
Identity        Pattern PhoneNumberTranslated Translation
--------        ------- --------------------- -----------
rule1           ^1234$  4321                  4321
```
This example displays information about the translation rule matching the phone number 1234.


## PARAMETERS

### -PhoneNumber
The phone number to test.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft Teams

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES
The cmdlet is available in Teams PowerShell module 4.5.0 or later.

## RELATED LINKS
[New-CsTeamsTranslationRule](New-CsTeamsTranslationRule.md)

[Get-CsTeamsTranslationRule](Get-CsTeamsTranslationRule.md)

[Set-CsTeamsTranslationRule](Set-CsTeamsTranslationRule.md)

[Remove-CsTeamsTranslationRule](Remove-CsTeamsTranslationRule.md)
