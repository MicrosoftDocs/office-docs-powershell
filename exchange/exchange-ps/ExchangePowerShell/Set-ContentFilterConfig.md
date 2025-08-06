---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-contentfilterconfig
schema: 2.0.0
title: Set-ContentFilterConfig
---

# Set-ContentFilterConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ContentFilterConfig cmdlet to modify the content filter configuration on a Mailbox server or an Edge Transport server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ContentFilterConfig [-BypassedRecipients <MultiValuedProperty>]
 [-BypassedSenderDomains <MultiValuedProperty>]
 [-BypassedSenders <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-ExternalMailEnabled <Boolean>]
 [-InternalMailEnabled <Boolean>]
 [-OutlookEmailPostmarkValidationEnabled <Boolean>]
 [-QuarantineMailbox <SmtpAddress>]
 [-RejectionResponse <AsciiString>]
 [-SCLDeleteEnabled <Boolean>]
 [-SCLDeleteThreshold <Int32>]
 [-SCLQuarantineEnabled <Boolean>]
 [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <Boolean>]
 [-SCLRejectThreshold <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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

It specifies `SpamQuarantineMailbox@contoso.com` as the spam quarantine mailbox.

It defines two users for whom the Content Filter doesn't process messages.

## PARAMETERS

### -BypassedRecipients

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BypassedRecipients parameter specifies the SMTP addresses of recipients who skip processing by the Content Filter agent.

You can specify multiple recipients separated by commas (for example, `"recipient1@contoso.com","recipient2@contoso.com"`). The maximum number of recipient entries is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassedSenderDomains

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BypassedSenderDomains parameter specifies the sender email address domains of senders who skip processing by the Content Filter agent.

You can specify multiple sender domains separated by commas (`"contoso.com","fabrikam.com"`). Use a wildcard character (\*) to specify a domain and all subdomains (for example: `*.contoso.com`). The maximum number of domain entries is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassedSenders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BypassedSenders parameter specifies the SMTP addresses of senders who skip processing by the Content Filter agent.

You can specify multiple senders separated by commas (for example, `"sender1@contoso.com","sender2@contoso.com"`). The maximum number of recipient entries is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Enabled parameter enables or disables the Content Filter agent on the computer on which you're running the command. Valid values are:

- $true: The Content Filter agent is enabled. This value is the default.
- $false: The Content Filter agent is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExternalMailEnabled parameter specifies whether all messages from unauthenticated connections from sources external to your Exchange organization are processed by the Content Filter agent. Valid values are:

- $true: Messages from unauthenticated connections are processed by the Content Filter agent. This value is the default.
- $false: Messages from unauthenticated connections aren't processed by the Content Filter agent.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMailEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The InternalMailEnabled parameter specifies whether all messages from authenticated connections and from authoritative domains in your enterprise are processed by the Content Filter agent. Valid values are:

- $true: Messages from authenticated connections are processed by the Content Filter agent.
- $false: Messages from authenticated connections aren't processed by the Content Filter agent. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookEmailPostmarkValidationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OutlookEmailPostmarkValidationEnabled parameter specifies whether Outlook Email Postmark validation is enabled.

- For outbound messages, the Content Filter agent applies a computational postmark header to help destination email systems distinguish legitimate email from spam.
- For inbound messages, the Content Filter agent looks for a computational postmark header in the message. The presence of a valid, solved computational postmark header indicates the client computer that generated the message solved the computational postmark, so the Content Filter agent is likely to lower the message's spam confidence level (SCL) rating.

Valid values are:

- $true: Outlook Email Postmark validation is enabled.
- $false: Outlook Email Postmark validation is disabled. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The QuarantineMailbox parameter specifies an SMTP address to be used as a spam quarantine mailbox. A spam quarantine mailbox is required when you set the SCLQuarantineEnabled parameter to $true. All messages that meet or exceed the value set in the SCLQuarantineThreshold parameter are sent to the SMTP address that you set in this parameter.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectionResponse

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RejectionResponse parameter specifies the message body that you want delivered in the non-delivery report (NDR) to senders whose messages meet or exceed the SCLRejectThreshold value. The RejectionResponse parameter is required if you set the SCLRejectEnabled parameter to $true. The RejectionResponse parameter takes a string. Don't exceed 240 characters in the argument. When you pass an argument, you must enclose the RejectionResponse parameter in quotation marks (") if the phrase contains spaces, for example: "Message rejected". The default setting is Message rejected due to content restrictions.

```yaml
Type: AsciiString
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLDeleteEnabled parameter specifies whether all messages that meet or exceed the value set in the SCLDeleteThreshold parameter are deleted. Valid values are:

- $true: Messages that meet or exceed the value set in the SCLDeleteThreshold parameter are deleted.
- $false: Messages aren't deleted. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteThreshold

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLDeleteThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must meet or exceed for the Content Filter agent to delete the message and not send an NDR. To enable this functionality, you must set the SCLDeleteEnabled parameter to $true. The default setting is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLQuarantineEnabled parameter specifies whether all messages that meet or exceed the value set in the SCLQuarantineThreshold parameter are sent to the spam quarantine mailbox specified in the QuarantineMailbox parameter. Valid values are:

- $true: Messages that meet or exceed the value set in the SCLQuarantineThreshold parameter are sent to the spam quarantine mailbox specified in the QuarantineMailbox parameter.
- $false: Messages aren't quarantined. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineThreshold

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLQuarantineThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must meet or exceed for the Content Filter agent to quarantine the message. To enable quarantine functionality, you must set the SCLQuarantineEnabled parameter to $true, and provide a valid SMTP address in the QuarantineMailbox parameter. The default setting is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLRejectEnabled parameter specifies whether all messages that meet or exceed the value set in the SCLRejectThreshold parameter are rejected in an NDR to the sender. Valid values are:

- $true: Messages that meet or exceed the value set in the SCLRejectThreshold parameter are rejected in an NDR is to the sender.
- $false: Messages aren't rejected. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectThreshold

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SCLRejectThreshold parameter specifies an integer value from 1 through 9. This value represents the SCL rating that a particular message must meet or exceed for the Content Filter agent to reject the message and send an NDR to the sender. To enable the delete functionality, you must set the SCLDeleteEnabled parameter to $true. Also, you can revise the default NDR message by editing the RejectionResponse parameter. The default setting is 7.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
