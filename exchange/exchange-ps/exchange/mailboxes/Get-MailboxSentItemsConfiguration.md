---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010
title: Get-MailboxSentItemsConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Get-MailboxSentItemsConfiguration

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-MailboxSentItemsConfiguration cmdlet to view the Sent Items settings on mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxSentItemsConfiguration [-DomainController <Fqdn>] [-Identity <MailboxIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
By default, when you use Send As or Send On Behalf Of to send a message from another mailbox, the message is saved in your Sent Items folder (not in the Sent Items folder of the source mailbox). In Microsoft Exchange Server 2010 Service Pack 3 (SP3), you can save copies messages in the Sent Items folder of the sender and the source mailbox. For example, consider a shared mailbox that receives customer feedback and is monitored by multiple users. When someone responds to a message in the shared mailbox, you can save the message in the Sent Items folder of the shared mailbox and the sender's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxSentItemsConfiguration -Identity "Customer Support Feedback"
```

This example returns the Sent Items configuration for the shared mailbox named "Customer Support Feedback".

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox whose Sent Items configuration you want to view. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Server 2010
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/40da2911-2503-4655-a92b-78deec069cb0.aspx)
