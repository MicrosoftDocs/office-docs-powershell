---
external help file: 
applicable: Skype for Business Server 2015
title: Set-CsAddressBookNormalizationRule
schema: 2.0.0
---

# Set-CsAddressBookNormalizationRule

## SYNOPSIS
Modifies an existing Address Book normalization rule.
Address Book normalization settings are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

### Identity
```
Set-CsAddressBookNormalizationRule [[-Identity] <XdsIdentity>] [-Confirm] [-Description <String>] [-Force]
 [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsAddressBookNormalizationRule [-Confirm] [-Description <String>] [-Force] [-Instance <PSObject>]
 [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) Address Book normalization rules carry out these conversions and translations for Address Book servers.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsAddressBookNormalizationRule -Identity "Global/RedmondAddresses" -Priority 1
```

The command shown in Example 1 changes the priority of the RedmondAddresses normalization rule found in the global collection of Address Book normalization rules.


### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookNormalizationRule | Where-Object {$_.Translation -eq '+1206556$1'} Set-CsAddressBookNormalizationRule -Translation '+1425556$1'
```

In Example 2, all the normalization rules that use the Translation +12065556$1 are updated to use the Translation +14255556$1; this might be required if an area code changes from 206 to 425.
To carry out this task, the `Get-CsAddressBookNormalizationRule` cmdlet is called in order to return a collection of all the available normalization rules.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those rules that have a Translation equal to +12065556$1.
Those rules are then piped to the `Set-CsAddressBookTranslationRule`, which changes the Translation for each of these rules to +14255556$1.


## PARAMETERS

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
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Identity
A unique identifier for the rule.
The Identity specified must include the scope followed by a slash followed by the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Pattern
A regular expression that the phone number must match in order for this rule to be applied.

The default value is ^(\d{11})$.
This represents any set of numbers up to 11 digits.

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
The Priority parameter sets the order in which the rules are tested against a number.
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsAddressBookNormalizationRule` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsAddressBookNormalizationRule` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationRule]()

[New-CsAddressBookNormalizationRule]()

[Remove-CsAddressBookNormalizationRule]()
