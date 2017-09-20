---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsAddressBookNormalizationConfiguration
schema: 2.0.0
---

# Remove-CsAddressBookNormalizationConfiguration

## SYNOPSIS
Deletes one or more collections of Address Book normalization configuration settings.
Address Book normalization settings are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

```
Remove-CsAddressBookNormalizationConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) In Skype for Business Server, the Address Book normalization configuration settings represent collections of normalization rules that carry out these conversions and translations for Address Book servers.
(These settings can be defined at the global scope or at the site scope.) The `Remove-CsAddressBookNormalizationConfiguration` cmdlet provides a way delete normalization rule configuration settings that have been configured at the site scope.
This cmdlet can also be run against the global collection of settings.
In that case, however, the global settings will not be removed; that's because the global collection cannot be deleted.
However, all the properties in the global collection will be reset to their default values.
That means that any custom rules you have created for the global collection will be deleted.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsAddressBookNormalizationConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the Address Book normalization configuration settings currently applied to the Redmond site.
After this collection has been deleted, Address Book servers in the Redmond site will use the global configuration settings to handle phone number normalization.


### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookNormalizationConfiguration -Filter "site:*" | Remove-CsAddressBookNormalizationConfiguration
```

In Example 2, all the Address Book normalization configuration settings applied to the site scope are deleted.
To do this, the command first uses the `Get-CsAddressBookNormalizationConfiguration` cmdlet and the Filter parameter to return a collection of all the configuration settings applied to the site scope.
This collection is then piped to the `Remove-CsAddressBookNormalizationConfiguration` cmdlet, which removes each item in the collection.
When this command completes, the deployment will be limited to the global collection of Address Book normalization settings.


## PARAMETERS

### -Identity
Unique identifier for the collection of Address Book configuration settings to be removed.
For example: `-Identity "site:Redmond"`

Note that you cannot use wildcards when specifying the collection to be removed.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
The `Remove-CsAddressBookNormalizationConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsAddressBookNormalizationConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationConfiguration]()

[New-CsAddressBookNormalizationConfiguration]()

[Set-CsAddressBookNormalizationConfiguration]()

[Import-CsCompanyPhoneNormalizationRules]()
