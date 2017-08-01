---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAddressBookNormalizationConfiguration

## SYNOPSIS
Returns the Address Book normalization configuration settings currently in use in the organization.
Address Book normalization settings are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

### Filter
```
Get-CsAddressBookNormalizationConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsAddressBookNormalizationConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to the standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understood what normalization rules do and how they work.) In Skype for Business Server, the Address Book normalization configuration settings represent collections of normalization created for use by the Address Book server.
(These collections can be defined at the global scope or at the site scope.) The Get-CsAddressBookNormalizationConfiguration cmdlet provides a way to return information about the Address Book normalization rules currently in use in your organization.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means that, in some cases, you might need to create identical rules: one for assignment to Address Book servers, the other for assignment to dial plans.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAddressBookNormalizationConfiguration
```

The command shown in Example 1 returns a collection of all the Address Book normalization configuration settings currently in use in the organization.
This is done by calling the Get-CsAddressBookNormalizationConfiguration cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookNormalizationConfiguration -Identity "site:Redmond"
```

In Example 2, information is returned for a single collection of normalization rules: the collection with the Identity site:Redmond:



### -------------------------- Example 3 --------------------------
```
Get-CsAddressBookNormalizationConfiguration -Filter "site:*"
```

Example 3 returns information about all the normalization configuration settings applied to the site scope.
To do this, the command uses the Filter parameter and the parameter value "site:*".
That syntax limits the returned data to all the collections that have an Identity that begins with the string value "site:".


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection (or multiple collections) of Address Book normalization configuration settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax: -Filter "site:*"

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
Unique identifier for the collection of Address Book normalization configuration settings to be returned.
To refer to the global settings, use this syntax: -Identity global

To refer to a collection configured at the site scope, use syntax similar to this: -Identity "site:Redmond"

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, use the Filter parameter instead.

If this parameter is not specified, then the Get-CsAddressBookNormalizationConfiguration cmdlet returns a collection of all the Address Book normalization configuration settings in use in the organization.

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
Retrieves the Address Book normalization configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationSettings


## NOTES


## RELATED LINKS

[New-CsAddressBookNormalizationConfiguration]()

[Remove-CsAddressBookNormalizationConfiguration]()

[Set-CsAddressBookNormalizationConfiguration]()

[Import-CsCompanyPhoneNormalizationRules]()