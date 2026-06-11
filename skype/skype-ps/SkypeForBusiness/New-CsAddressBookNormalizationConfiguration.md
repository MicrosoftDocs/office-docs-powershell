---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csaddressbooknormalizationconfiguration
schema: 2.0.0
title: New-CsAddressBookNormalizationConfiguration
---

# New-CsAddressBookNormalizationConfiguration

## SYNOPSIS
Creates a new collection of Address Book normalization configuration settings.
Address Book normalization settings are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

```
New-CsAddressBookNormalizationConfiguration [-Identity] <XdsIdentity>
 [-AddressBookNormalizationRules <PSListModifier>] [-Confirm] [-Force] [-InMemory] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) In Skype for Business Server, the Address Book normalization configuration settings represent collections of normalization rules that carry out these conversions and translations for Address Book servers.
(These settings can be defined at the global scope or at the site scope.) The New-CsAddressBookNormalizationConfiguration cmdlet provides a way create new collections scoped to a specified site.

In general, you will typically find it easier to add rules to a new collection by using the New-CsAddressBookNormalizationRule cmdlet; that cmdlet enables you to add a rule by using one simple command.
However, you cannot add a rule to a collection until you have first used the New-CsAddressBookNormalizationConfiguration cmdlet to create that collection.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means that, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.

## EXAMPLES

### Example 1
```

New-CsAddressBookNormalizationConfiguration -Identity "site:Redmond"
```

The command shown in Exercise 1 creates a new set of Address Book normalization configuration settings assigned to the Redmond site.
Note that this collection will not contain any Address Book normalization rules.
Those rules are most-easily created using the New-CsAddressBookNormalizationRule cmdlet after the new settings collection is in place.


## PARAMETERS

### -AddressBookNormalizationRules

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

One or more normalization rules to be assigned to the collection.
Although these rules can be created directly using the New-CsAddressBookNormalizationConfiguration cmdlet, it is recommended that you create the normalization rules using the New-CsAddressBookNormalizationRule cmdlet instead.
That cmdlet creates the rule and assigns it to the specified collection using a single command, and using much simpler syntax.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the new collection of Address Book normalization rules.
Because new rule collections can only be created at the site scope, the Identity will always be similar to this: `-Identity "site:Redmond"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None
The New-CsAddressBookNormalizationConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings
The New-CsAddressBookNormalizationConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings object cmdlet.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationConfiguration](Get-CsAddressBookNormalizationConfiguration.md)

[Remove-CsAddressBookNormalizationConfiguration](Remove-CsAddressBookNormalizationConfiguration.md)

[Set-CsAddressBookNormalizationConfiguration](Set-CsAddressBookNormalizationConfiguration.md)

[Import-CsCompanyPhoneNormalizationRules](Import-CsCompanyPhoneNormalizationRules.md)
