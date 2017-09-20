---
external help file: 
applicable: Skype for Business Server 2015
title: Get-CsAddressBookNormalizationRule
schema: 2.0.0
---

# Get-CsAddressBookNormalizationRule

## SYNOPSIS
Returns information about the Address Book normalization rules in use in the organization.
Address Book normalization rules are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

### Filter
```
Get-CsAddressBookNormalizationRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsAddressBookNormalizationRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) Address Book normalization rules carry out these conversions and translations for Address Book servers.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAddressBookNormalizationRule
```

The command shown in Example 1 returns information about all the Address Book normalization rules configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookNormalizationRule -Identity "Global/Generic_All"
```

In Example 2, information is returned for a single Address Book normalization rule: the rule Generic_All found in the global collection of Address Book normalization rules.

### -------------------------- Example 3 --------------------------
```
Get-CsAddressBookNormalizationRule -Identity "Global"
```

Example 3 returns all the normalization rules found in the global collection of Address Book normalization rules.
To return all the rules in a collection simply specify the collection scope.
For example, to find all the rules in the collection assigned to the Redmond site use this syntax: -Identity "site:Redmond".

### -------------------------- Example 4 --------------------------
```
Get-CsAddressBookNormalizationRule | Where-Object {$_.Priority -eq 1}
```

The command shown in Example 4 returns all the Address Book normalization rules that have a Priority of 1.
To do this, Get-CsAddressBookNormalizationRule is first called in order to return a collection of all the normalization rules configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Priority is equal to 1.


## PARAMETERS

### -Filter
Enables you to use wildcard characters to return a collection of normalization rules based on the rule Identity.
Note, however, that Filter works only on the scope portion of the Identity and not on the rule name.
For example, the filter value *lob* will return all rules at the global scope (scopes that contain the letters "lob").
However, that filter will not a return rule with the identity site:Redmond/lobby, where "lob" is only in the name portion of the Identity.

To return all the rules in a given collection (such as the Redmond site) you can use the Identity parameter instead of the Filter parameter:

`-Identity "site:Redmond"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the rule.
If a value is specified for this parameter, it must be in the format scope/name; for example, site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.
If neither the Identity nor the Filter parameters are included in a command, the Get-CsAddressBookNormalizationRule cmdlet will return all the Address book normalization rules configured for use in the organization.

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

### -LocalStore
Retrieves the Address book normalization rules from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated


## NOTES


## RELATED LINKS

[New-CsAddressBookNormalizationRule]()

[Remove-CsAddressBookNormalizationRule]()

[Set-CsAddressBookNormalizationRule]()