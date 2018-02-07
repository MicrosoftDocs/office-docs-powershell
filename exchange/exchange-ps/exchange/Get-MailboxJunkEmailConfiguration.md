---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxJunkEmailConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MaillboxJunkEmailConfiguration cmdlet to view the junk e-mail rule configuration for a specific mailbox.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MaillboxJunkEmailConfiguration cmdlet to view the junk email rule configuration for specific mailboxes.

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MaillboxJunkEmailConfiguration cmdlet to view the junk email settings on mailboxes.

## SYNTAX

```
Get-MailboxJunkEmailConfiguration [-Identity] <MailboxIdParameter> [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-ReadFromDomainController] [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The junk e-mail rule helps Microsoft Outlook and Microsoft Office Outlook Web App users to automatically remove any spam that gets past anti-spam filters and reaches the users' mailboxes. This cmdlet allows users and administrators to view how the junk e-mail rule is configured for a specific mailbox.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox junk e-mail configuration" entry in the Transport Permissions topic.

!!! Exchange Server 2013

The junk email rule helps Microsoft Outlook and Outlook Web App users to automatically remove any spam that gets past anti-spam filters and reaches their mailboxes.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox junk email configuration" entry in the Mail flow permissions topic.

!!! Exchange Server 2016, Exchange Online

The junk email settings on the mailbox are:

- Enable or disable the junk email rule: The junk email rule (a hidden Inbox rule named Junk E-mail Rule) controls the delivery of messages to the Junk Email folder or the Inbox based on the SCL Junk Email Folder threshold (for the organization or the mailbox) and the safelist collection on the mailbox. Users can enable or disable the junk email rule in their own mailbox by using Outlook on the web.

- Configure the safelist collection: The safelist collection is the Safe Senders list, the Safe Recipients list, and the Blocked Senders list. Users can configure the safelist collection on their own mailbox by using Microsoft Outlook or Outlook on the web.

Administrators can enable or disable the junk email rule, and configure the safelist collection on a mailbox by using the Set-MailboxJunkEmailConfiguration cmdlet. For more information, see Configure Exchange antispam settings on mailboxes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxJunkEmailConfiguration -Identity "David Pelton"
```

This example displays the junk e-mail rule configuration for the user David Pelton.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxJunkEmailConfiguration "David Pelton"
```

This example displays the junk email rule configuration for the user named David Pelton.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxJunkEmailConfiguration "David Pelton"
```

This example displays the junk email rule configuration for the user named David Pelton.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxJunkEmailConfiguration "David Pelton"
```

This example displays the junk email rule configuration for the user named David Pelton.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxJunkEmailConfiguration -Identity * | Where {$_.Enabled -eq $true}
```

This example displays the junk e-mail rule configuration for all mailboxes in your organization that have the junk e-mail rule enabled.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxJunkEmailConfiguration -Identity * | Where {$_.Enabled -eq $true}
```

This example displays the junk email rule configuration for all mailboxes in your organization that have the junk email rule enabled.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxJunkEmailConfiguration -Identity * | Where {$_.Enabled -eq $false}
```

This example displays the junk email rule configuration for all mailboxes in your organization where the junk email rule disabled.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxJunkEmailConfiguration -Identity * | Where {$_.Enabled -eq $false}
```

This example displays the junk email rule configuration for all mailboxes in your organization where the junk email rule disabled.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

You can use the wildcard character (\*) to view the junk e-mail rule configuration for multiple mailboxes.



!!! Exchange Server 2013

The Identity parameter specifies the mailbox.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)

You can use the wildcard character (\*) to view the junk email rule configuration for multiple mailboxes.



!!! Exchange Server 2016, Exchange Online

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

You can use the wildcard character (\*) to identify multiple mailboxes.



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

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



!!! Exchange Server 2016, Exchange Online

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
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
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest and don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your servers that run Microsoft Exchange.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



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

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the maximum number of results to return. If you want to return all mailboxes that match the query, use unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
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

[Online Version](https://technet.microsoft.com/library/3d7e3a0a-bf1f-4a88-9807-03e4ea9987b5.aspx)

