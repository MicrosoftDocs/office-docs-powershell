---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MailboxSpellingConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-MailboxSpellingConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxSpellingConfiguration cmdlet to retrieve the Outlook on the web spelling checker settings of a specified user. For example, users can set their dictionary language and configure the spelling checker to ignore mixed digits and words in all uppercase.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxSpellingConfiguration [-Identity] <MailboxIdParameter> [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-MailboxSpellingConfiguration cmdlet is primarily used to populate the spelling checker settings for end users in Outlook on the web. Administrators can also view users' settings by running this cmdlet. The following spelling checker settings are retrieved by the cmdlet for the specified mailbox:

- Identity: This setting specifies the mailbox identity.

- CheckBeforeSend: This setting specifies whether Outlook on the web checks the spelling of every message when the user clicks Send in the new message form.

- DictionaryLanguage: This setting specifies the dictionary language used when the spelling checker checks the spelling in messages.

- IgnoreMixedDigits: This setting specifies whether the spelling checker ignores words that contain numbers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxSpellingConfiguration -Identity Tony
```

This example retrieves the Outlook on the web options of user Tony.

### -------------------------- Example 2 --------------------------
```
Get-MailboxSpellingConfiguration -Identity Tony -DomainController DC1
```

This example returns the Outlook on the web spelling checker options for Tony's mailbox by specifying domain controller DC1 to get the information from Active Directory.

### -------------------------- Example 3 --------------------------
```
Get-MailboxSpellingConfiguration -Identity contoso\tony
```

This example returns the Outlook on the web spelling checker options for Tony's mailbox by specifying the identity of the mailbox in the format domain\\account.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

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

[Online Version](https://technet.microsoft.com/library/7695cde3-71d2-4523-8300-ada77cb8e7d4.aspx)
