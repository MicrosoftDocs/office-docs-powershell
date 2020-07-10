---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-contentfilterconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-ContentFilterConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-ContentFilterConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ContentFilterConfig cmdlet to modify the content filter configuration on a Mailbox server or an Edge Transport server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ContentFilterConfig [-BypassedRecipients <MultiValuedProperty>]
 [-BypassedSenderDomains <MultiValuedProperty>] [-BypassedSenders <MultiValuedProperty>] [-Confirm]
 [-DomainController <Fqdn>] [-Enabled <Boolean>] [-ExternalMailEnabled <Boolean>]
 [-InternalMailEnabled <Boolean>] [-OutlookEmailPostmarkValidationEnabled <Boolean>]
 [-QuarantineMailbox <SmtpAddress>] [-RejectionResponse <AsciiString>] [-SCLDeleteEnabled <Boolean>]
 [-SCLDeleteThreshold <Int32>] [-SCLQuarantineEnabled <Boolean>] [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <Boolean>] [-SCLRejectThreshold <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ContentFilterConfig -BypassedSenderDomains woodgrovebank.com
```

This example specifies the sender domain woodgrovebank.com as a bypassed domain. Messages received from that domain bypass the Content Filter agent.

### Example 2
```powershell
Set-ContentFilterConfig -SCLQuarantineEnabled $true -SCLRejectEnabled $true -SCLDeleteEnabled $true -SCLQuarantineThreshold 5 -SCLRejectThreshold 6 -SCLDeleteThreshold 8 -QuarantineMailbox SpamQuarantineMailbox@contoso.com -RejectionResponse "Message rejected due to content restrictions" -BypassedRecipients user1@contoso.com,user2@contoso.com
```

This example makes the following modifications to the Content Filter agent configuration:

It enables and configures the SCL threshold functionalities that quarantine, reject and delete messages to 5, 6 and 8 respectively.

It specifies SpamQuarantineMailbox@contoso.com as the spam quarantine mailbox.

It defines two users for whom the Content Filter won't process messages.

## PARAMETERS

### -BypassedRecipients
The BypassedRecipients parameter specifies the SMTP address values of recipients in your organization. The Content Filter agent doesn't process any content filtering for messages bound to the addresses listed on this parameter. To enter multiple SMTP addresses, separate the addresses by using a comma, for example: recipient1@contoso.com,recipient2@contoso.com. The maximum number of recipients you can input is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassedSenderDomains
The BypassedSenderDomains parameter specifies domain name values of sending domains. The Content Filter agent doesn't process any content filtering for messages received from the domains listed on this parameter. To enter multiple domains, separate the addresses by using a comma, for example: contoso.com, example.com. A wildcard character (\*) can be used to specify all subdomains, for example: \*.contoso.com. The maximum number of domains you can input is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassedSenders
The BypassedSenders parameter specifies the SMTP address values of senders. The Content Filter agent doesn't process any content filtering for messages received from the addresses listed on this parameter. To enter multiple SMTP addresses, separate the addresses by using a comma, for example: sender1@contoso.com, sender2@example.com. The maximum number of SMTP addresses you can input is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter enables or disables the Content Filter agent on the computer on which you're running the command. Valid input for the Enabled parameter is $true or $false. The default setting is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailEnabled
The ExternalMailEnabled parameter specifies whether all messages from unauthenticated connections from sources external to your Exchange organization are passed through the Content Filter agent for processing. Valid input for the ExternalMailEnabled parameter is $true or $false. The default setting is $true. When the ExternalMailEnabled parameter is set to $true, all messages from unauthenticated connections are passed through the Content Filter agent for processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMailEnabled
The InternalMailEnabled parameter specifies whether all messages from authenticated connections and from authoritative domains in your enterprise are passed through the Content Filter agent for processing. Valid input for the InternalMailEnabled parameter is $true or $false. The default setting is $false. When the InternalMailEnabled parameter is set to $true, all messages from authenticated connections and from authoritative domains in your enterprise are passed through the Content Filter agent for processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookEmailPostmarkValidationEnabled
The OutlookEmailPostmarkValidationEnabled parameter specifies whether the Content Filter agent sends a computational puzzle to the sender's  system for processing. Valid input for the OutlookEmailPostmarkValidationEnabled parameter is $true or $false. When the OutlookEmailPostmarkValidationEnabled parameter is set to $true, the Content Filter agent sends a computational puzzle to the sender's  system for processing. The results of the puzzle validation are factored into the overall spam confidence level (SCL). This functionality is exposed to the Microsoft Outlook user as Outlook E-mail Postmark validation. The default setting is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineMailbox
The QuarantineMailbox parameter specifies an SMTP address to be used as a spam quarantine mailbox. A spam quarantine mailbox is required when you set the SCLQuarantineEnabled parameter to $true. All messages that exceed the value set in the SCLQuarantineThreshold parameter are sent to the SMTP address that you set in this parameter.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectionResponse
The RejectionResponse parameter specifies the message body that you want delivered in the non-delivery report (NDR) to senders whose messages meet or exceed the SCLRejectThreshold value. The RejectionResponse parameter is required if you set the SCLRejectEnabled parameter to $true. The RejectionResponse parameter takes a string. Don't exceed 240 characters in the argument. When you pass an argument, you must enclose the RejectionResponse parameter in quotation marks (") if the phrase contains spaces, for example: "Message rejected". The default setting is Message rejected due to content restrictions.

```yaml
Type: AsciiString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteEnabled
The SCLDeleteEnabled parameter specifies whether all messages that exceed the value set in the SCLDeleteThreshold parameter are deleted. Valid input for the SCLDeleteEnabled parameter is $true or $false. The default setting is $false. When the SCLDeleteEnabled parameter is set to $true, all messages that exceed the value set in the SCLDeleteThreshold parameter are deleted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteThreshold
The SCLDeleteThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must exceed for the Content Filter agent to delete the message and not send an NDR. To enable this functionality, you must set the SCLDeleteEnabled parameter to $true. The default setting is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineEnabled
The SCLQuarantineEnabled parameter specifies whether all messages that exceed the value set in the SCLQuarantineThreshold parameter are sent to the spam quarantine mailbox specified in the QuarantineMailbox parameter. Valid input for the SCLQuarantineEnabled parameter is $true or $false. The default setting is $false. When the SCLQuarantineEnabled parameter is set to $true, all messages that exceed the value set in the SCLQuarantineThreshold parameter are sent to the spam quarantine mailbox specified in the QuarantineMailbox parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineThreshold
The SCLQuarantineThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must exceed for the Content Filter agent to quarantine the message. To enable quarantine functionality, you must set the SCLQuarantineEnabled parameter to $true, and provide a valid SMTP address in the QuarantineMailbox parameter. The default setting is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectEnabled
The SCLRejectEnabled parameter specifies whether all messages that exceed the value set in the SCLRejectThreshold parameter are rejected, and an NDR is sent to the sender. Valid input for the SCLRejectEnabled parameter is $true or $false. The default setting is $false. When SCLRejectEnabled parameter is set to $true, all messages that exceed the value set in the SCLRejectThreshold parameter are rejected, and an NDR is sent to the sender.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectThreshold
The SCLRejectThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must exceed for the Content Filter agent to reject the message and send an NDR to the sender. To enable the delete functionality, you must set the SCLDeleteEnabled parameter to $true. Also, you can revise the default NDR message by editing the RejectionResponse parameter. The default setting is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
