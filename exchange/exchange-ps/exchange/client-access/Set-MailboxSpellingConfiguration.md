---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-MailboxSpellingConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-MailboxSpellingConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxSpellingConfiguration cmdlet to modify Outlook on the web spelling checker options for a specified user. For example, you can set the dictionary language and configure the spelling checker to ignore mixed digits or words in all uppercase.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxSpellingConfiguration [-Identity] <MailboxIdParameter> [-CheckBeforeSend <$true | $false>]
 [-Confirm]
 [-DictionaryLanguage <Spanish | Arabic | Danish | Dutch | EnglishAustralia | EnglishCanada | EnglishUnitedKingdom | EnglishUnitedStates | Finnish | French | GermanPostReform | GermanPreReform | Hebrew | Italian | Korean | NorwegianBokmal | NorwegianNynorsk | PortuguesePortugal | PortugueseBrasil | Swedish | Catalan>]
 [-DomainController <Fqdn>] [-IgnoreMixedDigits <$true | $false>] [-IgnoreUppercase <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxSpellingConfiguration -Identity Peter -IgnoreUppercase $true
```

This example sets the spelling checker of user Peter to ignore words in all uppercase letters.

### -------------------------- Example 2 --------------------------
```
Set-MailboxSpellingConfiguration -Identity kai -IgnoreUppercase $true
```

This example sets the spelling checker to ignore words that contain only uppercase letters for messages sent from Kai's mailbox.

### -------------------------- Example 3 --------------------------
```
Set-MailboxSpellingConfiguration -IgnoreMixedDigits $true -Identity kai
```

This example sets the spelling checker to ignore words containing numbers for messages sent from Kai's mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CheckBeforeSend
The CheckBeforeSend parameter specifies whether Outlook on the web checks the spelling for every message when the user clicks Send in the new message form. Valid values are$true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DictionaryLanguage
The DictionaryLanguage parameter specifies the dictionary language to use when the spelling checker checks the spelling in messages. Valid values are:

- Arabic

- Catalan

- Danish

- Dutch

- EnglishAustralia

- EnglishCanada

- EnglishUnitedKingdom

- EnglishUnitedStates

- Finnish

- French

- GermanPreReform

- GermanPostReform

- Hebrew

- Italian

- Korean

- NorwegianBokMal

- NorwegianNyorsk

- PortuguesePortugal

- PortugueseBrasil

- Spanish

- Swedish

```yaml
Type: Spanish | Arabic | Danish | Dutch | EnglishAustralia | EnglishCanada | EnglishUnitedKingdom | EnglishUnitedStates | Finnish | French | GermanPostReform | GermanPreReform | Hebrew | Italian | Korean | NorwegianBokmal | NorwegianNynorsk | PortuguesePortugal | PortugueseBrasil | Swedish | Catalan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreMixedDigits
The IgnoreMixedDigits parameter specifies whether the spelling checker ignores words that contain numbers. Valid values are $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreUppercase
The IgnoreUppercase parameter specifies whether the spelling checker ignores words that contain only uppercase letters, for example, acronyms.

Valid values are $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/63447637-44f7-4857-9606-f9c71287ca49.aspx)
