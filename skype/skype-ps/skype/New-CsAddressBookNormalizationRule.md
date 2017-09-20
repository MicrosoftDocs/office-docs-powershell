---
external help file: 
applicable: Skype for Business Server 2015
title: New-CsAddressBookNormalizationRule
schema: 2.0.0
---

# New-CsAddressBookNormalizationRule

## SYNOPSIS
Creates a new Address Book normalization rule.
Address Book normalization rules are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

### Identity
```
New-CsAddressBookNormalizationRule [-Identity] <XdsIdentity> [-Confirm] [-Description <String>] [-Force]
 [-InMemory] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsAddressBookNormalizationRule -Name <String> -Parent <String> [-Confirm] [-Description <String>] [-Force]
 [-InMemory] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) The Address Book normalization rules handle these conversions and translations for Address Book servers.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means that, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsAddressBookNormalizationRule -Parent "site:Redmond" -Name RedmondFourDigit -Description "Dialing with internal four-digit extension" -Pattern '^(\d{4})$' -Translation '+1425555$1'
```

The command shown in Example 1 creates a new Address book normalization rule named RedmondFourDigit; this rule will be included in the normalization rule collection assigned to the Redmond site.
This new rule is designed to translate numbers that were dialed internally using just a 4-digit extension.
In this example, the Pattern property is used to identify 4-digit numbers and the Translation property is used prepend the value +1425555 to each of these 4-digit numbers.
For example, if the extension 1234 was dialed then this rule would translate the dialed number to +14255551234.

Note the single quotes around the Pattern and Translation values.
Single quotes are required for these values; double quotes (or no quotes) will cause the command to fail.


## PARAMETERS

### -Identity
Unique identifier for the rule.
The Identity specified must include the scope followed by a slash followed by the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.

Note that the Identity is composed of the Parent (scope) and the Name.
If you use the Identity parameter then you cannot use the Name or the Parent parameters.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name to be given to the new rule.
This parameter is required if a value has been specified for the Parent parameter.
If no value has been specified for the Parent parameter, the Name defaults to the name used in the Identity parameter.
For example, if a rule is created with the Identity site:Redmond/RedmondRule, the Name will default to RedmondRule.
The Name parameter and the Identity parameter cannot be used in the same command.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
The scope at which the new normalization rule will be created.
Address book normalization rules can be created at the global scope, the site scope, or the service scope (for the Address Book service only).
Note that a collection of Address Book normalization configuration settings must already be assigned to the specified scope before you can add a rule to that scope.
For example, you cannot add a rule to the Redmond site unless you have already creation Address Book normalization configuration settings for that site.

The Parent parameter is required unless the Identity parameter is specified.
You cannot include the Identity parameter and the Parent parameter in the same command.
If you include the Parent parameter, the Name parameter is also required.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text that accompanies a normalization rule.
For example, the Description might explain how the rule converts phone numbers.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that the phone number must match in order for this rule to be applied.

The default value is ^(\d{11})$.
This expression represents any set of numbers up to 11 digits.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The order in which rules are applied; this is required because a given phone number might match more than one rule.
The Priority parameter sets the order in which the rules are tested against the number.
If a phone number matches multiple rules, the rule with the highest priority will be selected to do the conversion.

Note that, when you set a priority, any existing rules will renumber themselves accordingly.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
The regular expression pattern that will be applied to the number to convert it to E.164 format.

The default value is +$.
This prefixes the number with a plus sign (+).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsAddressBookNormalizationRule cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsAddressBookNormalizationRule cmdlet creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationRule]()

[Remove-CsAddressBookNormalizationRule]()

[Set-CsAddressBookNormalizationRule]()
