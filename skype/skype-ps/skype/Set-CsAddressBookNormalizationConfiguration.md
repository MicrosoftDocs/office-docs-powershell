---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsAddressBookNormalizationConfiguration
schema: 2.0.0
---

# Set-CsAddressBookNormalizationConfiguration

## SYNOPSIS
Modifies one or more collections of Address Book normalization configuration settings.
Address Book normalization settings are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

### Identity
```
Set-CsAddressBookNormalizationConfiguration [[-Identity] <XdsIdentity>]
 [-AddressBookNormalizationRules <PSListModifier>] [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsAddressBookNormalizationConfiguration [-AddressBookNormalizationRules <PSListModifier>] [-Confirm]
 [-Force] [-Instance <PSObject>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) In Skype for Business Server, the Address Book normalization configuration settings represent collections of normalization rules designed to carry out these conversions and translations for Address Book server.
(These collections can be defined at the global scope or at the site scope.) The `Set-CsAddressBookNormalizationConfiguration` cmdlet provides a way add or remove a normalization rule from any of these collections.

In general, you will probably find it easier to add or remove rules by using the CsAddressBookNormalizationRule cmdlets; these cmdlets enable you to add or remove rules using one command rather than two.
However, as Example 2 shows, the `Set-CsAddressBookNormalizationConfiguration` cmdlet does enable you to copy rules from one collection to another.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means that, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsAddressBookNormalizationRule -Identity "global/LongDistanceRule"
```

The commands shown in Example 1 remove the Address Book normalization rule LongDistanceRule from the global collection of Address Book normalization configuration settings.
In order to carry out this task, the first command in the example uses the `Get-CsAddressBookNormalizationRule` cmdlet to create an object reference to the normalization rule with the Identity global/LongDistanceRule.
The resulting object reference is stored in a variable named $x.

The second command in the example then uses the `Set-CsAddressBookNormalizationConfiguration` cmdlet to remove the rule global/LongDistanceRule from the global collection.
This is done by including the AddressBookNormalizationRules parameter and the syntax @{Remove=$x}.

`$x = Get-CsAddressBookNormalizationRule -Identity "global/LongDistanceRule"`

`Set-CsAddressBookNormalizationConfiguration -Identity "global" -AddressBookNormalizationRules @{Remove=$x}`

Alternatively, you could remove the rule by using the `Remove-CsAddressBookNormalizationRule` cmdlet


### -------------------------- Example 2 --------------------------
```
$x = Get-CsAddressBookNormalizationRule -Identity "global/LongDistanceRule"

Set-CsAddressBookNormalizationConfiguration -Identity "site:Redmond" -AddressBookNormalizationRules @{Add=$x}
```

The commands shown in Example 2 demonstrate how you can use the `Set-CsAddressBookNormalizationConfiguration` cmdlet to copy an Address Book normalization rule from one collection to another.
To do this, the first command in the example uses the `Get-CsAddressBookNormalizationRule` cmdlet to create an object reference to the normalization rule with the Identity global/LongDistanceRule.
The resulting object reference is stored in a variable named $x.

The second command in the example then uses the `Set-CsAddressBookNormalizationConfiguration` cmdlet to add this same rule to the configuration settings applied to the Redmond site.
This is done by first connecting to the configuration settings for the Redmond site, then using the AddressBookNormalizationRules parameter and the syntax `@{Add=$x}`.
When this command finishes running, both the global collection and the Redmond site collection will have a normalization rule named LongDistanceRule.


### -------------------------- Example 3 --------------------------
```
Set-CsAddressBookNormalizationConfiguration -Identity "site:Redmond" -AddressBookNormalizationRules $Null
```

In Example 3, all the Address Book normalization rules assigned to the Redmond site are deleted; this is done by setting the AddressBookNormalizationRules parameter to a null value ($Null).
Note that the Redmond site collection will still exist.
However, no normalization rules will be assigned to that collection.


## PARAMETERS

### -AddressBookNormalizationRules
A set of normalization rules that have been applied to this collection of Address Book normalization configuration settings.

While this set of rules can be modified directly using this cmdlet, it is recommended that you create normalization rules with the `New-CsAddressBookNormalizationRule` cmdlet; this cmdlet creates the rule and assigns it to the specified collection.
You can then modify those rules by using the `Set-CsAddressBookNormalizationRule` cmdlet, or delete a rule from a collection by using the `Remove-CsAddressBookNormalizationRule` cmdlet.
In general, this is easier and less error-prone than trying to modify a rules collection by using the `Set-CsAddressBookNormalizationConfiguration` cmdlet and the AddressBookNormalizationRules parameter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the collection of Address Book normalization configuration settings to be modified.
To refer to the global settings, use this syntax: `-Identity "global"`

To refer to a collection configured at the site scope, use syntax similar to this: `-Identity "site:Redmond"`

Note that you cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsAddressBookNormalizationConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings object.

## OUTPUTS

###  
None.
Instead, the `Set-CsAddressBookNormalizationConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationConfiguration](Get-CsAddressBookNormalizationConfiguration.md)

[New-CsAddressBookNormalizationConfiguration](New-CsAddressBookNormalizationConfiguration.md)

[Remove-CsAddressBookNormalizationConfiguration](Remove-CsAddressBookNormalizationConfiguration.md)

[Import-CsCompanyPhoneNormalizationRules](Import-CsCompanyPhoneNormalizationRules.md)

