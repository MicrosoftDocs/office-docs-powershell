---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Get-SendAddress
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-SendAddress

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SendAddress cmdlet to view the email addresses on a user's mailbox that can be configured as the default From address. This cmdlet is primarily used by the Outlook on the web \> Options \> Connected Accounts user interface. Typically, you don't need to run this cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-SendAddress [-AddressId <String>] [-Mailbox <MailboxIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-SendAddress [[-Identity] <SendAddressIdParameter>] [-Mailbox <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Configuring a default From address only makes sense if the user has POP, IMAP, or Hotmail subscriptions configured on the mailbox. If you don't specify a value for the default From address, the default behavior is:

- The primary email address on the user's mailbox is used for all new messages.

- The To address of the incoming message is used as the From address for all replies or forwarded messages.

The only email addresses that can be configured as the default From address are:

- The user's primary email address.

- The email addresses of a user's POP, IMAP, or Hotmail subscription.

You set the user's default From address in the SendAddressDefault parameter on the Set-MailboxMessageConfiguration cmdlet. Users can override the default From address when they create an email message in Outlook on the web.

The Get-SendAddress and Set-MailboxMessageConfiguration cmdlets represent the email addresses of POP, IMAP, or Hotmail subscriptions as a GUID. It's easier to configure a user's default From address in Outlook on the web \> Options \> Account \> Connected Accounts.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SendAddress -Mailbox "Diane Prescott"
```

This example lists all the email addresses of the user Diane Prescott that can be used as the default From address.

## PARAMETERS

### -AddressId
The AddressId parameter specifies the email address. The value of AddressId is in the following formats:

- The user's primary email address is displayed as an email address, for example, bob@contoso.com.

- The email address of a POP, IMAP, or Hotmail subscription is displayed as a GUID.

- No default From address is set. This is represented by the value $null.

You can find the values of the AddressId parameter on a user's mailbox by running the command `Get-SendAddress -Mailbox <mailbox>`.

If you use the AddressId parameter, you must also use the Mailbox parameter. If you use the AddressId parameter, you can't use the Identity parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox and the email address. The value of the Identity parameter is in the format `<mailbox>\<address>`. The `<mailbox>` part is any value that uniquely identifies the mailbox. The `<address>` part is in one following formats:

- The user's primary email address is displayed as an email address, for example, bob@contoso.com.

- The email address of a POP, IMAP, or Hotmail subscription is displayed as a GUID.

- No default From address is set. This is represented by a blank value.

You can find the values of the Identity parameter on a user's mailbox by running the command `Get-SendAddress -Mailbox <mailbox>`.

If you use the Identity parameter, you can't use the AddressId parameter.

```yaml
Type: SendAddressIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/b2c57a7e-bd6d-461d-8a9d-5384a715344b.aspx)
