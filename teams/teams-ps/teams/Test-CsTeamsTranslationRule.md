---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/test-csteamstranslationrule
applicable: Microsoft Teams
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
schema: 2.0.0
---

# Test-CsTeamsTranslationRule

## SYNOPSIS
This cmdlet tests a phone number against the configured number manipulation rules and returns information about the matching rule.

## SYNTAX

### Test (Default)
```powershell
Test-CsTeamsTranslationRule [-PhoneNumber <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet tests a phone number against the configured number manipulation rules and returns information about the matching rule.

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
This example displays information about the manipulation rule matching the phone number 1234.

## PARAMETERS

### -PhoneNumber
The phone number to test.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

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
The cmdlet is available in Teams PowerShell Module 4.5.0 or later.

The matching logic used in the cmdlet is the same as when the manipulation rule has been associated with an SBC and a call is being routed.

If a match is found in two or more manipulation rules, the first one is returned.

There is a short delay before newly created manipulation rules are added to the evaluation.

## RELATED LINKS
[New-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/new-csteamstranslationrule)

[Get-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/get-csteamstranslationrule)

[Set-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/set-csteamstranslationrule)

[Remove-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/remove-csteamstranslationrule)
