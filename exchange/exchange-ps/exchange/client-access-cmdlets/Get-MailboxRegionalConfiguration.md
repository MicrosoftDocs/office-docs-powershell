---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxRegionalConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxRegionalConfiguration cmdlet to view the regional settings of a mailbox. You can view the date format, time format, time zone, and language of the mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxRegionalConfiguration [-Identity] <MailboxIdParameter> [-DomainController <Fqdn>]
 [-VerifyDefaultFolderNameLanguage] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-MailboxRegionalConfiguration -Identity "Marcelo Teixeira"
```

This example returns the regional settings for Marcelo Teixeira's mailbox.

### Example 2
```
Get-MailboxRegionalConfiguration -Identity "Ella Lack" -DomainController dc01.contoso.com
```

In on-premises Exchange, this example returns the regional settings for Ella Lack's mailbox by using the specified domain controller.

### Example 3
```
Get-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -VerifyDefaultFolderNameLanguage | Format-List
```

This example returns the regional settings for Alice Jakobsen's mailbox and also indicates whether the default folder names of the mailbox are localized in the locale that's specified for the mailbox. The important properties are Language and DefaultFolderNameMatchingUserLanguage.

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

### -VerifyDefaultFolderNameLanguage
The VerifyDefaultFolderNameLanguage switch verifies that the default folder names are localized in the language that's specified for the mailbox (the Language property value). You don't need to specify a value with this switch.

The results are displayed in the DefaultFolderNameMatchingUserLanguage property. To see this property, you need to pipeline the results of the command to the Format-List or Format-Table cmdlets. For example:

- Get-MailboxRegionalConfiguration -Identity \<MailboxIdentity\> -VerifyDefaultFolderNameLanguage | Format-List

Or

- Get-MailboxRegionalConfiguration -Identity \<MailboxIdentity\> -VerifyDefaultFolderNameLanguage | Format-Table Language,DefaultFolderNameMatchingUserLanguage

If you view the DefaultFolderNameMatchingUserLanguage property without using the VerifyDefaultFolderNameLanguage switch, the value is always $false, even if the default folder names are localized in the language that's specified for the mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/2a50a165-5830-4771-8968-a13ab057532a.aspx)
