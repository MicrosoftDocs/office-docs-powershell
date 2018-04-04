---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-MailMessage
schema: 2.0.0
---

# New-MailMessage

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailMessage cmdlet to create an email message for the specified user mailbox and place the email message in the Drafts folder of the user's mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-MailMessage [[-Body] <String>] -Mailbox <MailboxIdParameter> [-BodyFormat <PlainText | Html | Rtf>]
 [-Confirm] [-DomainController <Fqdn>] [-Subject <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
If the cmdlet is run without specifying the Subject or Body parameters, an empty email message is placed in the user's Drafts folder.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-MailMessage -Subject "Delivery Report" -Body "Click here to view this report" -Mailbox tony
```

In Exchange Server 2010, this example creates an e-mail message in the Drafts folder of Tony's mailbox, with the subject and body specified by the Subject and Body parameters. The message body is rendered in plain text because no format for the message body is specified.

### Example 2
```
New-MailMessage -Subject "Delivery Report" -Body "Click here to view this report"
```

This example creates an email message in the Drafts folder with the subject and body specified by the Subject and Body parameters. The message body is rendered in plain text because no format for the message body is specified.

### Example 3
```
New-MailMessage -Mailbox tony@contoso.com
```

In Exchange Server 2010, this example creates an empty e-mail message in the Drafts folder of Tony's mailbox because no subject or message body is specified.

### Example 4
```
New-MailMessage
```

This example creates an empty email message in the Drafts folder because no subject or message body is specified.

### Example 5
```
New-MailMessage -Subject "Delivery Information" -Body "Click here to see details" -Mailbox tony -BodyFormat Html
```

In Exchange Server 2010, this example creates an e-mail message in the Drafts folder of Tony's mailbox with the subject and body specified by the Subject and Body parameters. The message body is rendered in HTML format.

### Example 6
```
New-MailMessage -Subject "Delivery Information" -Body "Click here to see details" -BodyFormat Html
```

This example creates an email message in the Drafts folder with the subject and body specified by the Subject and Body parameters. The message body is rendered in HTML format.

## PARAMETERS

### -Mailbox
The Mailbox parameter specifies a unique identifier for the destination mailbox where the e-mail message is being created. You can use any of the following values for this parameter:

- Alias

- Display name

- Domain\\Account

- SMTP address

- Distinguished name (DN)

- Object GUID

- User principal name (UPN)

- LegacyExchangeDN

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Body
The Body parameter specifies the content of the body section of the new email message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BodyFormat
The BodyFormat parameter specifies the format of the message body. The values can be PlainText, Rtf (Rich Text Format), or Html. By default, if the BodyFormat parameter isn't specified when the Body parameter is used, the message body is rendered in plain text.

```yaml
Type: PlainText | Html | Rtf
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

### -Subject
The Subject parameter specifies the content of the subject field of the new email message.

```yaml
Type: String
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

[Online Version](https://technet.microsoft.com/library/3a3fbff6-a202-4d3e-b1df-dfd16ae95a44.aspx)
