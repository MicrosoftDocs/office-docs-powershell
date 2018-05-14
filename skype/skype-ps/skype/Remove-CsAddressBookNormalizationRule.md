---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsAddressBookNormalizationRule
schema: 2.0.0
---

# Remove-CsAddressBookNormalizationRule

## SYNOPSIS
Removes an Address Book normalization rule.
Address Book normalization rules are used to convert phone numbers to a format readily understood by Skype for Business Server.

## SYNTAX

```
Remove-CsAddressBookNormalizationRule [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Normalization rules define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
(Note that an understanding of regular expressions is helpful in order to understand what normalization rules do and how they do it.) The Address Book normalization rules handle these conversions and translations for the Address Book server.

Although Address Book normalization rules are very similar to voice normalization rules, the two are not interchangeable: you cannot add voice normalization rules to an Address Book collection, nor can you add Address Book normalization rules to a dial plan.
That means, in some cases, you might need to create identical rules: one for assignment to Address Book server, the other for assignment to dial plans.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsAddressBookNormalizationRule -Identity "Global/Generic_All"
```

The command shown in Example 1 removes the Generic_All normalization rule from the global collection of Address Book normalization rules.


### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookNormalizationRule -Identity "site:Redmond" | Remove-CsAddressBookNormalizationRule
```

In Example 2, all the normalization rules are removed from the collection of Address Book normalization rules assigned to the Redmond site.
To do this, the `Get-CsAddressBookNormalizationRule` cmdlet is first used to retrieve all the rules assigned to the Redmond site.
Those rules are then piped to and deleted by, the `Remove-CsAddressBookNormalizationRule` cmdlet.
When the command finishes running the normalization rules collection for the Redmond site will still exist, but the collection will no longer contain any rules.


### -------------------------- Example 3 --------------------------
```
Get-CsAddressBookNormalizationRule | Where-Object {$_.Pattern -eq "E164"} | Remove-CsAddressBookNormalizationRule
```

Example 3 removes all Address Book normalization rules where the Pattern property is equal to E164.
To carry out this task, the command first uses `Get-CsAddressBookNormalizationRule` to return a collection of all the available normalization rules.
That collection is then piped to the `Where-Object` cmdlet, which picks out only those rules where the Pattern property is equal to E164.
Any rules that meet that criterion are then piped to the `Remove-CsAddressBookNormalizationRule` cmdlet and are deleted.


## PARAMETERS

### -Identity
Unique identifier for the rule being removed.
The Identity specified must include the scope followed by a slash followed by the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.

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
The `Remove-CsAddressBookNormalizationRule` cmdlet accepts pipelined input of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsAddressBookNormalizationRule` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookNormalizationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookNormalizationRule](Get-CsAddressBookNormalizationRule.md)

[New-CsAddressBookNormalizationRule](New-CsAddressBookNormalizationRule.md)

[Set-CsAddressBookNormalizationRule](Set-CsAddressBookNormalizationRule.md)
