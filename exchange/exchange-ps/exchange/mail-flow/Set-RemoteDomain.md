---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-RemoteDomain
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-RemoteDomain

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-RemoteDomain cmdlet to configure a managed connection for a remote domain.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-RemoteDomain [-Identity] <RemoteDomainIdParameter>
 [-AllowedOOFType <External | InternalLegacy | ExternalLegacy | None>]
 [-AutoForwardEnabled <$true | $false>]
 [-AutoReplyEnabled <$true | $false>]
 [-ByteEncoderTypeFor7BitCharsets <Use7Bit | UseQP | UseBase64 | UseQPHtmlDetectTextPlain | UseBase64HtmlDetectTextPlain | UseQPHtml7BitTextPlain | UseBase64Html7BitTextPlain | Undefined>]
 [-CharacterSet <String>]
 [-Confirm]
 [-ContentType <MimeHtmlText | MimeText | MimeHtml>]
 [-DeliveryReportEnabled <$true | $false>]
 [-DisplaySenderName <$true | $false>]
 [-DomainController <Fqdn>]
 [-IsCoexistenceDomain <$true | $false>]
 [-IsInternal <$true | $false>]
 [-LineWrapSize <Unlimited>]
 [-MeetingForwardNotificationEnabled <$true | $false>]
 [-MessageCountThreshold <Int32>]
 [-Name <String>]
 [-NDRDiagnosticInfoEnabled <$true | $false>]
 [-NDREnabled <$true | $false>]
 [-NonMimeCharacterSet <String>]
 [-PreferredInternetCodePageForShiftJis <Undefined | Iso2022Jp | Esc2022Jp | Sio2022Jp>]
 [-RequiredCharsetCoverage <Int32>]
 [-TargetDeliveryDomain <$true | $false>]
 [-TNEFEnabled <$true | $false>]
 [-TrustedMailInboundEnabled <$true | $false>]
 [-TrustedMailOutboundEnabled <$true | $false>]
 [-UseSimpleDisplayName <$true | $false>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When you set a remote domain, you can control mail flow with more precision, specify message formatting and policy and specify acceptable character sets for messages sent to or received from the remote domain.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-RemoteDomain Contoso -AllowedOOFType None -DeliveryReportEnabled $false -TNEFEnabled $true
```

This example performs the following actions:

- It disables out-of-office notifications to the remote domain.

- It suppresses read receipts sent from clients in your organization to the remote domain.

- It enables TNEF message data on messages sent to the remote domain.

### -------------------------- Example 2 --------------------------
```
Get-RemoteDomain | Where {$_.AutoReplyEnabled -eq $false} | Set-RemoteDomain -AutoForwardEnabled $false -NDREnabled $false
```

This example queries Active Directory for all remote domains for which auto replies are disabled. Using the pipelining feature, it also disables auto forwards and NDRs to those domains.

## PARAMETERS

### -Identity
The Identity parameter specifies the remote domain that you want to modify. You can use any value that uniquely identifies the remote domain. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: RemoteDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowedOOFType
The AllowedOOFType parameter specifies the type of automatic replies or out-of-office (also known as OOF) notifications than can be sent to recipients in the remote domain. Valid values are:

- External: Only automatic replies that are designated as external are sent to recipients in the remote domain. This is the default value.

- ExternalLegacy: Only external automatic replies or automatic replies that aren't designated as internal or external are sent to recipients in the remote domain.

- InternalLegacy: Only internal automatic replies or automatic replies that aren't designated as internal or external are sent to recipients in the remote domain. 

- None: No automatic replies are sent to recipients in the remote domain.

```yaml
Type: External | InternalLegacy | ExternalLegacy | None
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoForwardEnabled
The AutoForwardEnabled parameter specifies whether to allow messages that are auto-forwarded by client email programs in your organization. Valid values are:

- $true: Auto-forwarded messages are delivered to recipients in the remote domain. This is the default value for new remote domains that you create and the built-in remote domain named Default in Exchange Online.

- $false: Auto-forwarded messages aren't delivered to recipients in the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoReplyEnabled
The AutoReplyEnabled parameter specifies whether to allow messages that are automatic replies from client email programs in your organization (for example, automatic reply messages that are generated by rules in Outlook). Valid values are:

- $true: Automatic replies are delivered to recipients in the remote domain. This is the default value for new remote domains that you create and the built-in remote domain named Default in Exchange Online.

- $false: Automatic replies aren't delivered to recipients in the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ByteEncoderTypeFor7BitCharsets
The ByteEncoderTypeFor7BitCharsets parameter specifies the 7-bit transfer encoding method for MIME format for messages sent to this remote domain. Valid values are:

- Use7Bit: Always use default 7-bit transfer encoding for HTML and plain text.

- UseQP: Always use QP (quoted-printable) encoding for HTML and for plain text.

- UseBase64: Always use Base64 encoding for HTML and for plain text.

- UseQPHtmlDetectTextPlain: Use QP encoding for HTML and for plain text unless line wrapping is enabled in plain text. If line wrapping is enabled, use 7-bit encoding for plain text.

- UseBase64HtmlDetectTextPlain: Use Base64 encoding for HTML and for plain text, unless line wrapping is enabled in plain text. If line wrapping is enabled in plain text, use Base64 encoding for HTML, and use 7-bit encoding for plain text.

- UseQPHtml7BitTextPlain: Always use QP encoding for HTML. Always use 7-bit encoding for plain text.

- UseBase64Html7BitTextPlain: Always use Base64 encoding for HTML. Always use 7-bit encoding for plain text.

- Undefined: Always use QP encoding for HTML and plain text. This is the default value.

```yaml
Type: Use7Bit | UseQP | UseBase64 | UseQPHtmlDetectTextPlain | UseBase64HtmlDetectTextPlain | UseQPHtml7BitTextPlain | UseBase64Html7BitTextPlain | Undefined
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CharacterSet
The CharacterSet parameter specifies a character set for MIME messages without defined character sets that are sent from your organization to recipients in the remote domain. Valid values are:

big5, din_66003, euc-jp, euc-kr, gb18030, gb2312, hz-gb-2312, iso-2022-jp, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, koi8-r, koi8-u, ks_c_5601-1987, ns_4551-1, sen_850200_b, shift_jis, utf-7, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-874, or the value $null.

The default value for the built-in remote domain named Default is iso-8859-1. The default value for new remote domains that you create is blank ($null).

This setting doesn't overwrite character sets that are already specified in outbound MIME messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentType
The ContentType parameter specifies the outbound message content type and formatting. Valid values are:

- MimeHtmlText: Converts messages to MIME messages that use HTML formatting, unless the original message is a text message. If the original message is a text message, the outbound message is a MIME message that uses text formatting. This is the default value.

- MimeText: Converts all messages to MIME messages that use text formatting.

- MimeHtml: Converts all messages to MIME messages that use HTML formatting.

```yaml
Type: MimeHtmlText | MimeText | MimeHtml
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliveryReportEnabled
The DeliveryReportEnabled parameter specifies whether to allow delivery reports from client software in your organization to recipients in the remote domain. Valid values are:

- $true: Delivery reports are delivered to recipients in the remote domain. This is the default value.

- $false: Delivery reports aren't delivered to recipients in the remote domain.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplaySenderName
Note: You should only modify this parameter under the direction of Microsoft Customer Service and Support.

The DisplaySenderName parameter specifies whether to show the sender's Display Name in the From email address for messages sent to recipients in the remote domain. Valid values are:

- $true: Sender names are displayed in messages sent to reicpients in the remote domain. This is the default value.

- $false. Sender names aren't displayed in messages sent to reicpients in the remote domain. 

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -IsCoexistenceDomain
This parameter is available or functional only in Exchange Server 2010.

The IsCoexistenceDomain parameter specifies whether this remote domain is used to represent your Exchange Online organization. Valid values are:

- $true: The remote domain represents your Exchange Online organization.

- $false: The remote domain doesn't represent your Exchange Online organization. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsInternal
The IsInternal parameter specifies whether the recipients in the remote domain are considered to be internal recipients. Valid values are:

- $true: All transport components (for example, transport rules or antispam agents) treat recipients in the remote domain as internal recipients. Typically, you use this value in cross-forest deployments.

- $false: Recipients in the remote domain are treated as external recipients. This is the default value. 

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineWrapSize
The LineWrapSize parameter specifies the line-wrap size for messages to recipients in the remote domain. Valid values are an integer from 0 through 132 or the value to unlimited. The default value is unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingForwardNotificationEnabled
The MeetingForwardNotificationEnabled parameter specifies whether to enable meeting forward notifications for recipients in the remote domain. Valid values are:

- $true: Meeting requests forwarded to recipients in the remote domain generate a meeting forward notification to the meeting organizer. This is the default value.

- $false: Meeting requests forwarded to recipients in the remote domain don't generate a meeting forward notification to the meeting organizer.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCountThreshold
This parameter is available only in on-premises Exchange.

The MessageCountThreshold parameter specifies the acceptable message count for the remote domain. If the message count exceeds this value, an event is generated that's visible using the Get-ServerHealth and Get-HealthReport cmdlets.

Valid input for this parameter is an integer. The default value is Int32 (2147483647), which indicates there is no message count threshold defined, and that the message count to the remote domain is unmonitored.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the remote domain object. The maximum length is 64 characters. If the value contains spaces, enclose the value in quoatation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NDRDiagnosticInfoEnabled
This parameter is available only in on-premises Exchange.

The NDRDiagnosticInfoEnabled parameter specifies whether diagnostic information is included in non-delivery reports (also known NDRs or bounce messages) that are sent to recipients the remote domain. Valid values are:

- $true: The diagnostic information of an NDR includes details that help administrators troubleshoot delivery problems. This detailed information includes internal server names. This is the default value.

- $false: The diagnostic information section in the NDR body as well as internal server headers from the attached original message headers are removed from the NDR.
 
This parameter is meaningful only when the value of the NDREnabled parameter is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NDREnabled
This parameter is available only in on-premises Exchange.

The NDREnabled parameter specifies whether to allow non-delivery reports (also known NDRs or bounce messages) from your organization to recipients in the remote domain. Valid values are:

- $true: NDRs from your organization are sent to recipients in the remote domain. This is the default value.

- $false: NDRs from your organization aren't sent to recipients in the remote domain.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonMimeCharacterSet
The NonMimeCharacterSet parameter specifies a character set for plain text messages without defined character sets that are sent from your organization to recipients in the remote domain. Valid values are:

big5, din_66003, euc-jp, euc-kr, gb18030, gb2312, hz-gb-2312, iso-2022-jp, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, koi8-r, koi8-u, ks_c_5601-1987, ns_4551-1, sen_850200_b, shift_jis, utf-7, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-874, or the value $null.

The default value for the built-in remote domain named Default is iso-8859-1. The default value for new remote domains that you create is blank ($null).

This setting doesn't overwrite character sets that are already specified in outbound plain text messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredInternetCodePageForShiftJis
The PreferredInternetCodePageForShiftJis parameter specifies the specific code page to use for Shift JIS character encoding in messages that are sent to recipients in the remote domain. Valid values are:

- 50220: Use ISO-2022-JP codepage.

- 50221: Use ESC-2022-JP codepage.

- 50222: Use SIO-2022-JP codepage.
- 
- Undefined: No codepage is defined. This is the default value.

```yaml
Type: Undefined | Iso2022Jp | Esc2022Jp | Sio2022Jp
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredCharsetCoverage
The RequiredCharsetCoverage parameter specifies a percentage threshold for characters in a message that must match to apply your organization's preferred character set before switching to automatic character set detection.

For example, if you set this parameter to 60, the preferred character sets will still be used during content conversion for messages that contain characters from non-preferred character sets as long as the percentage of those characters is 40 percent or less. If the percentage of characters in a message doesn't belong to preferred character sets, Exchange analyzes the UNICODE characters and automatically determines the best matching character set to use.

If recipients in the remote domain use characters that span character sets, you might want to specify a lower percentage to ensure that your organization's preferred character set is used during content conversion.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDeliveryDomain
The TargetDeliveryDomain parameter specifies whether the remote domain is used in cross-forest deployments to generate target email addresses for new mail users that represent users in the other organization (for example, all mailboxes hosted on Exchange Online are represented as mail users in your on-premises organization). Valid values are:

- $true: The remote domain is used used for the target email address of mail users that represent the users in the other forest.

- $false: The remote domain isn't used used for the target email address of mail users that represent the users in the other forest. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TNEFEnabled
The TNEFEnabled parameter specifies whether Transport Neutral Encapsulation Format (TNEF) message encoding is used on messages sent to the remote domain. Valid values are-:

- $true: TNEF encoding is used on all messages sent to the remote domain.

- $false: TNEF encoding isn't used on any messages sent to the remote domain.

- $null (blank): TNEF encoding isn't specified for the remote domain. This is the default value. TNEF encoding for recipients in the remote domain is controlled by the value of the UseMapiRichTextFormat parameter for any mail user or mail contact objects, the sender's per-recipient settings in Outlook, or the sender's default internet message settings in Outlook

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedMailInboundEnabled
The TrustedMailInboundEnabled parameter specifies whether messages from senders in the remote domain are treated as trusted messages. Valid values are:

- $true: Inbound messages from senders in the romte domain are considered safe and will bypass content filtering and recipient filtering.

- $false: Inbound messages from senders in the remote domain won't bypass content filtering and recipient filtering. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedMailOutboundEnabled
The TrustedMailInboundEnabled parameter specifies whether messages sent to recipients in the remote domain are treated as trusted messages. Valid values are:

- $true: Outbound messages to recipients in the romte domain are considered safe and will bypass content filtering and recipient filtering. We recommend that you use this value in cross-forest deployments.

- $false: Outbound messages to recipients in the remote domain won't bypass content filtering and recipient filtering. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseSimpleDisplayName
The UseSimpleDisplayName parameter specifies whether the sender's simple display name is used for the From email address in messages sent to recipients in the remote domain. Valid values are:

- $true: Simple display names are used in messages sent to recipients in the remote domain. If the sender doesn't have a simple display name configured, the From email address is "EmailAddress \<EmailAddress\>".

- $false: Simple display names aren't used in messages sent to recipients in the remote domain. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/4738bf25-39b8-4433-bd64-1d60252c2832.aspx)
