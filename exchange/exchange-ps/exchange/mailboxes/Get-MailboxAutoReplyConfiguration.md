---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MailboxAutoReplyConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-MailboxAutoReplyConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxAutoReplyConfiguration cmdlet to retrieve Automatic Replies settings for a specific mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxAutoReplyConfiguration [-Identity] <MailboxIdParameter> [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-ReadFromDomainController] [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
You can use the Get-MailboxAutoReplyConfiguration cmdlet to retrieve all the mailboxes enabled for Automatic Replies. When run, the cmdlet returns Automatic Replies settings for the specified mailbox that include the following:

- Mailbox identity value

- Whether Automatic Replies is enabled, scheduled, or disabled for the mailbox

- Start and end date, time during which Automatic Replies will be sent

- Whether external senders receive Automatic Replies (none, known senders, or all)

- Automatic Replies message to be sent to internal and external senders

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-Mailbox | Get-MailboxAutoReplyConfiguration
```

This example returns Automatic Replies settings for all mailboxes in the Exchange organization.

### -------------------------- Example 2 --------------------------
```
Get-MailboxAutoReplyConfiguration -Identity 'contoso.com/Users/Tony Smith'
```

This example retrieves Automatic Replies settings for Tony's mailbox at contoso.com.

### -------------------------- Example 3 --------------------------
```
Get-Mailbox | Get-MailboxAutoReplyConfiguration -ResultSize unlimited
```

This example retrieves all Automatic Replies settings for all mailboxes in the Exchange organization.

## PARAMETERS

### -Identity
The Identity parameter specifies a unique identifier associated with a mailbox. Accepted values for the mailbox are as follows:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

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
This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

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

### -ReadFromDomainController
The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your servers that run Microsoft Exchange.

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
The ResultSize parameter specifies the maximum number of settings to return. If you want to return all settings that match the command, use unlimited for the value of this parameter.

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

[Online Version](https://technet.microsoft.com/library/0963eab0-8bc8-4f06-b6f7-7dd88b1559f5.aspx)
