---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-RemoteDomain
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-RemoteDomain

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-RemoteDomain cmdlet to configure a managed connection for a remote domain.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-RemoteDomain [-Identity] <RemoteDomainIdParameter>
 [-AllowedOOFType <External | InternalLegacy | ExternalLegacy | None>] [-AutoForwardEnabled <$true | $false>]
 [-AutoReplyEnabled <$true | $false>]
 [-ByteEncoderTypeFor7BitCharsets <Use7Bit | UseQP | UseBase64 | UseQPHtmlDetectTextPlain | UseBase64HtmlDetectTextPlain | UseQPHtml7BitTextPlain | UseBase64Html7BitTextPlain | Undefined>]
 [-CharacterSet <String>] [-Confirm] [-ContentType <MimeHtmlText | MimeText | MimeHtml>]
 [-DeliveryReportEnabled <$true | $false>] [-DisplaySenderName <$true | $false>] [-DomainController <Fqdn>]
 [-IsCoexistenceDomain <$true | $false>] [-IsInternal <$true | $false>] [-LineWrapSize <Unlimited>]
 [-MeetingForwardNotificationEnabled <$true | $false>] [-Name <String>]
 [-NDRDiagnosticInfoEnabled <$true | $false>] [-NDREnabled <$true | $false>] [-NonMimeCharacterSet <String>]
 [-PreferredInternetCodePageForShiftJis <Undefined | Iso2022Jp | Esc2022Jp | Sio2022Jp>]
 [-RequiredCharsetCoverage <Int32>] [-TargetDeliveryDomain <$true | $false>] [-TNEFEnabled <$true | $false>]
 [-TrustedMailInboundEnabled <$true | $false>] [-TrustedMailOutboundEnabled <$true | $false>]
 [-UseSimpleDisplayName <$true | $false>] [-WhatIf] [-MessageCountThreshold <Int32>] [<CommonParameters>]
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
The Identity parameter specifies the display name of the remote domain.

The length of the name can't exceed 64 characters.

```yaml
Type: RemoteDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowedOOFType
The AllowedOOFType parameter specifies the type of out-of-office notification returned to users at the remote domain. Valid values are External, ExternalLegacy, None and InternalLegacy. The default value is External.

```yaml
Type: External | InternalLegacy | ExternalLegacy | None
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoForwardEnabled
The AutoForwardEnabled parameter specifies whether to allow messages that are auto-forwarded by client email programs in your organization. Valid values are:

- $true: Auto-forwarded messages are delivered to the remote domain. This is the default value for new remote domains that you create and the built-in remote domain named Default in Exchange Online.

- $false: Auto-forwarded messages aren't delivered to the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoReplyEnabled
The AutoReplyEnabled parameter specifies whether to allow messages that are automatic replies from client email programs in your organization. Valid values are:

- $true: Automatic replies are delivered to the remote domain. This is the default value for new remote domains that you create and the built-in remote domain named Default in Exchange Online.

- $false: Automatic replies aren't delivered to the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ByteEncoderTypeFor7BitCharsets
The ByteEncoderTypeFor7BitCharsets parameter specifies the 7-bit transfer encoding method for MIME format for messages sent to this remote domain. The valid values for this parameter are:

- Use7Bit: Always use default 7-bit transfer encoding for HTML and plain text.

- UseQP: Always use QP (quoted-printable) encoding for HTML and for plain text.

- UseBase64: Always use Base64 encoding for HTML and for plain text.

- UseQPHtmlDetectTextPlain: Use QP encoding for HTML and for plain text unless line wrapping is enabled in plain text. If line wrapping is enabled, use 7-bit encoding for plain text.

- UseBase64HtmlDetectTextPlain: Use Base64 encoding for HTML and for plain text, unless line wrapping is enabled in plain text. If line wrapping is enabled in plain text, use Base64 encoding for HTML, and use 7-bit encoding for plain text.

- UseQPHtml7BitTextPlain: Always use QP encoding for HTML. Always use 7-bit encoding for plain text.

- UseBase64Html7BitTextPlain: Always use Base64 encoding for HTML. Always use 7-bit encoding for plain text.

- Undefined: Always use QP encoding for HTML and plain text.

The default value is Undefined.

```yaml
Type: Use7Bit | UseQP | UseBase64 | UseQPHtmlDetectTextPlain | UseBase64HtmlDetectTextPlain | UseQPHtml7BitTextPlain | UseBase64Html7BitTextPlain | Undefined
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CharacterSet
The CharacterSet parameter specifies a character set for this remote domain. The character set that you specify is only used for MIME messages that don't have their own character set specified. Setting this parameter doesn't overwrite character sets already specified in the outbound mail. To remove the character set value, set the value to $null.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentType
The ContentType parameter specifies the outbound message content type and formatting. Valid values for this parameter are MimeHtmlText, MimeText or MimeHtml:

- MimeHtmlText converts messages to MIME messages that use HTML formatting, unless the original message is a text message. If the original message is a text message, the outbound message is a MIME message that uses text formatting.

- MimeText converts all messages to MIME messages that use text formatting.

- MimeHtml converts all messages to MIME messages that use HTML formatting.

The default value is MimeHtmlText.

```yaml
Type: MimeHtmlText | MimeText | MimeHtml
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliveryReportEnabled
The DeliveryReportEnabled parameter specifies whether to allow delivery reports from client software in your organization to the remote domain. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplaySenderName
The DisplaySenderName parameter specifies whether to display the sender name. Valid values for this parameter are $true or $false. The default value is $true. This parameter is used for older versions of Exchange and should only be set under the direction of Microsoft Customer Service and Support.

```yaml
Type: $true | $false
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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -IsCoexistenceDomain
This parameter is available or functional only in Exchange Server 2010.

The IsCoexistenceDomain parameter specifies whether this remote domain is used to represent your Microsoft Office 365 organization. The default value is $false.

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
The IsInternal parameter specifies whether the recipients in this remote domain should be considered internal recipients. Set this parameter to $true if this remote domain is part of your cross-premises deployment.

When you set this parameter to $true, all transport components, like transport rules or any agents you may have deployed, treat this remote domain as an internal domain.

The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineWrapSize
The LineWrapSize parameter specifies the line-wrap size for outbound messages. The parameter takes an integer from 0 through 132, or you can overload the parameter by setting the value to unlimited. The default value is unlimited.

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

### -MeetingForwardNotificationEnabled
The MeetingForwardNotificationEnabled parameter specifies whether to enable meeting forward notifications. When this parameter is enabled, meeting requests forwarded to recipients in the remote domain generate a meeting forward notification to the meeting organizer. When this parameter is disabled, meeting requests forwarded to recipients in the remote domain won't generate a meeting forward notification to the meeting organizer.

Valid values for this parameter are $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the remote domain object.

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

### -NDRDiagnosticInfoEnabled
This parameter is available only in on-premises Exchange.

The NDRDiagnosticInfoEnabled parameter specifies whether the diagnostic information is included in NDRs sent to the remote domain.

The diagnostic information of an NDR includes details that help administrators troubleshoot delivery problems. This detailed information includes internal server names. You may not want to expose this information to NDRs sent to external users. If you set this parameter to $false, the diagnostic information section in the NDR body as well as internal server headers from the attached original message headers are removed from the NDR.

The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NDREnabled
This parameter is available only in on-premises Exchange.

The NDREnabled parameter specifies whether to allow non-delivery reports (NDRs) from your organization. Setting this parameter to $false suppresses NDRs to the remote domain. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonMimeCharacterSet
The NonMimeCharacterSet parameter specifies a character set for this remote domain. The character set that you specify is only used for non-MIME (RFC 822 text) messages that don't have their own character set specified. Setting this parameter doesn't overwrite character sets already specified in the outbound mail. To remove the character set value, set the value to $null.

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

### -PreferredInternetCodePageForShiftJis
The PreferredInternetCodePageForShiftJis parameter specifies the specific code page to use for Shift JIS character encoding when sending messages to this remote domain. The valid values for this parameter are:

- 50220: Use ISO-2022-JP codepage.

- 50221: Use ESC-2022-JP codepage.

- 50222: Use SIO-2022-JP codepage.

```yaml
Type: Undefined | Iso2022Jp | Esc2022Jp | Sio2022Jp
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredCharsetCoverage
The RequiredCharsetCoverage parameter specifies a percentage threshold for characters in a message that must match to apply your organization's preferred character set before switching to automatic character set detection.

For example, if you set this parameter to 60, the preferred character sets will still be used during content conversion for messages that contain characters from non-preferred character sets as long as the percentage of those characters is 40 percent or less. If the percentage of characters in a message doesn't belong to preferred character sets, Exchange analyzes the UNICODE characters and automatically determines the best matching character set to use.

If users in this remote domain use characters that span character sets, you may want to specify a lower percentage to ensure that your organization's preferred character set is used during content conversion.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDeliveryDomain
The TargetDeliveryDomain parameter specifies the email domain that's used when generating target addresses for new mail users in a cross-premises deployment scenario. When you have a cross-premises deployment, the user mailboxes on the remote location are represented as mail user objects. For example, all mailboxes hosted on Exchange Online are represented as mail users in your on-premises organization. The value of this parameter is used to determine what domain should be used for the target email address for these mail users.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TNEFEnabled
The TNEFEnabled parameter specifies whether Transport Neutral Encapsulation Format (TNEF) message encoding is used on messages sent to the remote domain. Valid values for this parameter are $true, $false, or $null. The action associated with each value is as follows:

$true: TNEF encoding is used on all messages sent to the remote domain.

$false: TNEF encoding isn't used on any messages sent to the remote domain.

$null: TNEF encoding isn't specified for the remote domain. TNEF encoding for recipients in the remote domain may be specified by the following:

- Value of the UseMapiRichTextFormat parameter for any mail user or mail contact objects

- Sender's per-recipient settings in Microsoft Outlook

- Sender's default Internet message settings in Outlook

The default value is $null.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedMailInboundEnabled
The TrustedMailInboundEnabled parameter specifies whether Exchange will treat email received from this remote domain as trusted messages. If you set this parameter to $true, all incoming messages from this remote domain are considered safe and they will bypass content and recipient filtering.

We recommend that you set this parameter to $true for cross-premises deployment scenarios.

The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedMailOutboundEnabled
The TrustedMailOutboundEnabled parameter specifies whether the remote domain is considered a trusted domain. We recommend that you set this parameter to $true for cross-premises deployment scenarios.

The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseSimpleDisplayName
The UseSimpleDisplayName parameter specifies whether simple display names for senders appear in messages sent to this domain. Setting this parameter to $true enables simple display names for this remote domain. The default value is $false.

```yaml
Type: $true | $false
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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCountThreshold
This parameter is available only in on-premises Exchange.

The MessageCountThreshold parameter specifies the acceptable message count for the remote domain. If the message count exceeds this value, an event is generated that's visible using the Get-ServerHealth and Get-HealthReport cmdlets.

Valid input for this parameter is an integer. The default value is Int32 (2147483647). The default value indicates there is no message count threshold defined, and that the message count to the remote domain is unmonitored.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
