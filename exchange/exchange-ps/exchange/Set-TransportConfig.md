---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-transportconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-TransportConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-TransportConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-TransportConfig cmdlet to modify the transport configuration settings for the whole Exchange organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-TransportConfig [[-Identity] <OrganizationIdParameter>]
 [-AddressBookPolicyRoutingEnabled <Boolean>]
 [-AgentGeneratedMessageLoopDetectionInSmtpEnabled <Boolean>]
 [-AgentGeneratedMessageLoopDetectionInSubmissionEnabled <Boolean>]
 [-AllowLegacyTLSClients <System.Boolean>]
 [-ClearCategories <Boolean>]
 [-Confirm]
 [-ConvertDisclaimerWrapperToEml <Boolean>]
 [-DiagnosticsAggregationServicePort <Int32>]
 [-DomainController <Fqdn>]
 [-DSNConversionMode <DSNConversionOption>]
 [-ExternalDelayDsnEnabled <Boolean>]
 [-ExternalDsnDefaultLanguage <CultureInfo>]
 [-ExternalDsnLanguageDetectionEnabled <Boolean>]
 [-ExternalDsnMaxMessageAttachSize <ByteQuantifiedSize>]
 [-ExternalDsnReportingAuthority <SmtpDomain>]
 [-ExternalDsnSendHtml <Boolean>]
 [-ExternalPostmasterAddress <SmtpAddress>]
 [-Force]
 [-GenerateCopyOfDSNFor <MultiValuedProperty>]
 [-HeaderPromotionModeSetting <HeaderPromotionMode>]
 [-InternalDelayDsnEnabled <Boolean>]
 [-InternalDsnDefaultLanguage <CultureInfo>]
 [-InternalDsnLanguageDetectionEnabled <Boolean>]
 [-InternalDsnMaxMessageAttachSize <ByteQuantifiedSize>]
 [-InternalDsnReportingAuthority <SmtpDomain>]
 [-InternalDsnSendHtml <Boolean>]
 [-InternalSMTPServers <MultiValuedProperty>]
 [-JournalMessageExpirationDays <Int32>]
 [-JournalingReportNdrTo <SmtpAddress>]
 [-LegacyJournalingMigrationEnabled <Boolean>]
 [-MaxAllowedAgentGeneratedMessageDepth <UInt32>]
 [-MaxAllowedAgentGeneratedMessageDepthPerAgent <UInt32>]
 [-MaxDumpsterSizePerDatabase <ByteQuantifiedSize>]
 [-MaxDumpsterTime <EnhancedTimeSpan>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxRecipientEnvelopeLimit <Unlimited>]
 [-MaxRetriesForLocalSiteShadow <Int32>]
 [-MaxRetriesForRemoteSiteShadow <Int32>]
 [-MaxSendSize <Unlimited>]
 [-MessageExpiration <EnhancedTimeSpan>]
 [-PreventDuplicateJournalingEnabled <Boolean>]
 [-QueueDiagnosticsAggregationInterval <EnhancedTimeSpan>]
 [-RejectMessageOnShadowFailure <Boolean>]
 [-ReplyAllStormBlockDurationHours <Int32>]
 [-ReplyAllStormDetectionMinimumRecipients <Int32>]
 [-ReplyAllStormDetectionMinimumReplies <Int32>]
 [-ReplyAllStormProtectionEnabled <Boolean>]
 [-Rfc2231EncodingEnabled <Boolean>]
 [-SafetyNetHoldTime <EnhancedTimeSpan>]
 [-ShadowHeartbeatFrequency <EnhancedTimeSpan>]
 [-ShadowHeartbeatRetryCount <Int32>]
 [-ShadowHeartbeatTimeoutInterval <EnhancedTimeSpan>]
 [-ShadowMessageAutoDiscardInterval <EnhancedTimeSpan>]
 [-ShadowMessagePreferenceSetting <ShadowMessagePreference>]
 [-ShadowRedundancyEnabled <Boolean>]
 [-ShadowResubmitTimeSpan <EnhancedTimeSpan>]
 [-SmtpClientAuthenticationDisabled <Boolean>]
 [-SupervisionTags <MultiValuedProperty>]
 [-TLSReceiveDomainSecureList <MultiValuedProperty>]
 [-TLSSendDomainSecureList <MultiValuedProperty>]
 [-TransportRuleAttachmentTextScanLimit <ByteQuantifiedSize>]
 [-VerifySecureSubmitEnabled <Boolean>]
 [-VoicemailJournalingEnabled <Boolean>]
 [-WhatIf]
 [-Xexch50Enabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-TransportConfig -GenerateCopyOfDSNFor 5.7.1,5.7.2,5.7.3
```

This example configures the Exchange organization to forward all DSN messages that have the DSN codes 5.7.1, 5.7.2, and 5.7.3 to the postmaster email account.

### Example 2
```powershell
Set-TransportConfig -JournalingReportNdrTo journalingndr@contoso.com
```

This example configures the Exchange organization to redirect all journaling reports that can't be delivered to the journaling mailbox to the email account journalingndr@contoso.com.

To avoid journaling issues, we recommend that you set JournalingReportNdrTo to an external address. Like the journaling mailbox, the alternate journaling mailbox can't be an Exchange Online mailbox. In Exchange Online, you can configure this setting by using the Microsoft 365 admin center or Exchange Online PowerShell. In on-premises Exchange Server, you can configure this setting by using the Exchange Management Shell. For more information, see [KB2829319](https://support.microsoft.com/help/2829319).

## PARAMETERS

### -Identity
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressBookPolicyRoutingEnabled
The AddressBookPolicyRoutingEnabled parameter controls how recipients are resolved in an organization that uses address book policies to create separate virtual organizations within the same Exchange organization. Specifically, the global address list (GAL) that's specified in the user's address book policy controls how recipients are resolved. When the value of this parameter is $true, users that are assigned different GALs appear as external recipients. When the value of this parameter is $false, users that are assigned different GALs appear as internal recipients.

The default value is $false. Note that this parameter has no effect if your organization doesn't use address book policies, or if the address book policy routing agent isn't installed and enabled. Also note that changing the value of this parameter may take up to 30 minutes to take effect. For more information about address book policies, see [Address book policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/address-book-policies/address-book-policies).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentGeneratedMessageLoopDetectionInSubmissionEnabled
This parameter is available only in on-premises Exchange.

The AgentGeneratedMessageLoopDetectionInSubmissionEnabled parameter controls the behavior of messages loop detection in for loops caused by transport agents in the Mailbox Transport Submission service. An agent-generated loop occurs when an agent creates a new copy of a message or adds recipients to a message, and the agent continues to process these resulting messages by creating copies or adding recipients.

Valid input for this parameter is $true or $false. The default value is $false.

When Exchange detects an agent-generated message loop, the loop is stopped. When this parameter is set to $true, the loop is logged in the message tracking log. When this parameter is set to $false, the message is rejected with an NDR when the loop generates the number of messages specified by the MaxAllowedAgentGeneratedMessageDepthPerAgent and MaxAllowedAgentGeneratedMessageDepth parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentGeneratedMessageLoopDetectionInSmtpEnabled
This parameter is available only in on-premises Exchange.

The AgentGeneratedMessageLoopDetectionInSmtpEnabled parameter controls the behavior of messages loop detection in for loops caused by transport agents in the Transport service. An agent-generated loop occurs when an agent creates a new copy of a message or adds recipients to a message, and the agent continues to process these resulting messages by creating copies or adding recipients.

Valid input for this parameter is $true or $false. The default value is $false.

When Exchange detects an agent-generated message loop, the loop is stopped. When this parameter is set to $false, the loop is logged in the message tracking log. When this parameter is set to $true, the message is rejected with an NDR when the loop generates the number of messages specified by the MaxAllowedAgentGeneratedMessageDepth and MaxAllowedAgentGeneratedMessageDepthPerAgent parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyTLSClients
This parameter is available only in the cloud-based service.

{{ Fill AllowLegacyTLSClients Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearCategories
The ClearCategories parameter keeps or removes Microsoft Outlook message categories during content conversion. Valid input for this parameter is $true or $false. The default value is $true. This means that by default, Outlook message categories are removed during content conversion.

```yaml
Type: Boolean
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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
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

### -ConvertDisclaimerWrapperToEml
The ConvertDisclaimerWrapperToEml parameter specifies whether the original message will be added as a TNEF attachment or a regular EML attachment to a disclaimer when all of the following are true:

- Message is sent to an external user.
- The sender has signed the message.
- The message is processed by a Transport rule that adds a disclaimer.

When a Transport rule that adds disclaimers to outbound messages encounters a message signed by the sender, the Transport rule can't add the disclaimer directly to the message. As a result, the disclaimer is sent to the intended recipient with the original message as an attachment.

Valid input for this parameter is $true or $false. The default value is $false. If you set this parameter to $true, the original message is sent as an EML attachment. Otherwise, it is sent as a TNEF attachment.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticsAggregationServicePort
This parameter is available only in on-premises Exchange.

The DiagnosticsAggregationServicePort parameter specifies the TCP port that's used to collect message queue diagnostic information. The default value is 9710.

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

### -DSNConversionMode
The DSNConversionMode parameter controls how Exchange handles delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) that are generated by earlier versions of Exchange or other email systems. Valid values are:

- DoNotConvert: DSNs aren't modified. The DSN is delivered as a standard message.
- PreserveDSNBody: DSNs are converted to the Exchange 2010 or later format, and the text in the body of the DSN message is retained.
- UseExchangeDSNs: DSNs are converted to the Exchange 2010 or later format. However, any customized text or attachments that were associated with the original DSN are overwritten.

The default value in Exchange 2010 and Exchange 2013 is UseExchangeDSNs. Otherwise, the default value is PreserveDSNBody.

```yaml
Type: DSNConversionOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDelayDsnEnabled
The ExternalDelayDsnEnabled parameter specifies whether a delay delivery status notification (DSN) message should be created for external messages that couldn't be immediately delivered. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnDefaultLanguage
The ExternalDsnDefaultLanguage parameter specifies which Exchange server language should be used by default when you create external DSN messages. The default value is the default Windows server language.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnLanguageDetectionEnabled
The ExternalDsnLanguageDetectionEnabled parameter specifies whether the server should try to send an external DSN message in the same language as the original message that generated the notification. Valid input for this parameter is $true or $false.The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnMaxMessageAttachSize
This parameter is available only in on-premises Exchange.

The ExternalDsnMaxMessageAttachSize parameter specifies the maximum size of the original message attached to an external DSN message. If the original message exceeds this size, only the headers of the original message are included in the DSN message. The default value is 10 megabytes (MB).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2147483647 bytes. If you specify a value of 0, only the original message headers are included in the external DSN message.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnReportingAuthority
The ExternalDsnReportingAuthority parameter specifies the domain in the machine-readable part of external DSN messages. The default value is blank ($null), which means the value is the authoritative domain that you specified during the creation of the organization.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnSendHtml
The ExternalDsnSendHtml parameter specifies whether external DSN messages should be HTML or plain text. Valid values are:

- $true: External DSNs are HTML. This is the default value.
- $false: External DSNs are plain text.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalPostmasterAddress
The ExternalPostmasterAddress parameter specifies the email address in the From header field of an external DSN message. The default value is blank ($null).

The default value means the external postmaster address is `postmaster@<DefaultAcceptedDomain>` in the following locations:

- On Hub Transport servers or the Transport service on Mailbox servers.
- On Edge Transport servers that are subscribed to the Exchange organization.
- In Exchange Online.

On Edge Transport servers that aren't subscribed to the Exchange organization, the default external postmaster email address is `postmaster@<EdgeTransportServerFQDN>`.

To override the default behavior, you can specify an email address for the ExternalPostMasterAddress parameter.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateCopyOfDSNFor
This parameter is available only in on-premises Exchange.

The GenerateCopyOfDSNFor parameter controls the non-delivery reports (NDRs) that are copied to a mailbox by specifying the DSN codes that you want to monitor. You must configure the list of monitored DSNs on one Mailbox server and locally on each Edge Transport server in your Exchange organization.

On a Mailbox server, NDRs are copied to the mailbox assigned to the Exchange recipient. On Edge Transport servers, NDRs are copied to the mailbox assigned to the external postmaster address.

DSN codes are entered as x.y.z and are separated by commas. By default, the following DSN codes are monitored:

- 5.4.8
- 5.4.6
- 5.4.4
- 5.2.4
- 5.2.0
- 5.1.4

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although these DSN codes are monitored by default, the associated NDRs aren't copied to the Exchange recipient or to the external postmaster address if no mailbox is assigned to the Exchange recipient or to the external postmaster address. By default, no mailbox is assigned to the Exchange recipient or to the external postmaster address.

To assign a mailbox to the Exchange recipient, use the Set-OrganizationConfig cmdlet with the MicrosoftExchangeRecipientReplyRecipient parameter. To assign a mailbox to the external postmaster address, create a new mailbox postmaster. The default email address policy of the Exchange organization should automatically add an SMTP address of `postmaster@<AuthoritativeDomain>` to the mailbox.

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

### -HeaderPromotionModeSetting
The HeaderPromotionModeSetting parameter specifies whether named properties are created for custom X-headers on messages received. Valid values are:

- MustCreate: Exchange creates a named property for each new custom X-header.
- MayCreate: Exchange creates a named property for each new custom X-header on messages received from authenticated senders. No named properties are created for custom X-headers on messages received from unauthenticated senders.
- NoCreate: Exchange won't create any named properties based on custom X-headers on incoming messages. This is the default value.

```yaml
Type: HeaderPromotionMode
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDelayDsnEnabled
The InternalDelayDsnEnabled parameter specifies whether a delay DSN message should be created for messages sent to or from recipients or senders in the same Exchange organization that couldn't be immediately delivered. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnDefaultLanguage
The InternalDsnDefaultLanguage parameter specifies which Exchange server language should be used by default when you create internal DSN messages. The default value is the default Windows server language.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnLanguageDetectionEnabled
The InternalDsnLanguageDetectionEnabled parameter specifies whether the server should try to send an internal DSN message in the same language as the original message that generated the notification. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnMaxMessageAttachSize
This parameter is available only in on-premises Exchange.

The InternalDsnMaxMessageAttachSize parameter specifies the maximum size of the original message that generated an internal DSN message. If the original message exceeds this size, only the headers of the original message are included in the DSN message. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2147483647 bytes. If you specify a value of 0, only the original message headers are included in the internal DSN message.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnReportingAuthority
The InternalDsnReportingAuthority parameter specifies the domain in the machine-readable part of internal DSN messages. The default value is blank ($null), which means the value is the authoritative domain that you specified during the creation of the organization.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnSendHtml
The InternalDsnSendHtml parameter specifies whether internal DSN messages should be HTML or plain text. Valid values are:

- $true: Internal DSNs are HTML. This is the default value.
- $false: Internal DSNs are plain text.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalSMTPServers
This parameter is available only in on-premises Exchange.

The InternalSMTPServers parameter specifies a list of internal SMTP server IP addresses or IP address ranges that should be ignored by Sender ID and connection filtering.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -JournalMessageExpirationDays
This parameter is available only in the cloud-based service.

The JournalMessageExpirationDays parameter extends the number of days that undeliverable journal reports are queued before they expire. A valid value is an integer from 0 to 7. The default value is 0, which means undeliverable journal reports are treated like regular undeliverable messages.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalingReportNdrTo
The JournalingReportNdrTo parameter specifies the email address to which journal reports are sent if the journaling mailbox is unavailable. By default, if this parameter is left empty, Exchange continues to try to deliver the journal report to the journaling mailbox. We recommended that you use a dedicated (non-user) mailbox as the value for this parameter. Like the journaling mailbox, the alternate journaling mailbox can't be an Exchange Online mailbox.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyJournalingMigrationEnabled
This parameter is available only in Exchange Server 2010.

The LegacyJournalingMigrationEnabled parameter specifies whether journal messages generated in Microsoft Exchange Server 2003 will be reformatted by Exchange 2010.

The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAllowedAgentGeneratedMessageDepth
This parameter is available only in on-premises Exchange.

The MaxAllowedAgentGeneratedMessageDepth parameter specifies how many times all agents can process any resulting copies of the same message. The default value is 3. Valid input for this parameter is an integer.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAllowedAgentGeneratedMessageDepthPerAgent
This parameter is available only in on-premises Exchange.

The MaxAllowedAgentGeneratedMessageDepthPerAgent parameter specifies how many times a single agent can process any resulting copies of the same message. The default value is 2.

The value of the MaxAllowedAgentGeneratedMessageDepth parameter should be larger than the value of the MaxAllowedAgentGeneratedMessageDepthPerAgent parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDumpsterSizePerDatabase
This parameter is available only in on-premises Exchange.

This parameter isn't used by Exchange Server 2016. It's used only by Exchange 2010 servers in coexistence environments.

The MaxDumpsterSizePerDatabase parameter specifies the maximum size of the transport dumpster on a Hub Transport server for each database. The default value is 18 MB. The valid input range for this parameter is from 0 through 2147483647 KB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

To enable the transport dumpster, the value of the MaxDumpsterSizePerDatabase parameter must be greater than 0, and the value of the MaxDumpsterTime parameter must be greater than 00:00:00.

There's no replacement for this parameter in later versions of Exchange.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDumpsterTime
This parameter is available only in on-premises Exchange.

This parameter isn't used by Exchange Server 2016. It's used only by Exchange 2010 servers in coexistence environments.

The MaxDumpsterTime parameter specifies how long an email message should remain in the transport dumpster on a Hub Transport server. The default value is seven days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is 00:00:00 to 24855.03:14:07.

To enable the transport dumpster, the value of the MaxDumpsterSizePerStorageGroup parameter must be greater than 0, and the value of the MaxDumpsterTime parameter must be greater than 00:00:00.

This parameter is replaced by the SafetyNetHoldTime parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReceiveSize
This parameter is available only in on-premises Exchange.

The MaxReceiveSize parameter specifies the maximum message size that can be received by recipients in the organization. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147482624 bytes) or the value unlimited.

The value unlimited indicates the maximum size is imposed elsewhere (for example, server, connector, or individual recipient limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecipientEnvelopeLimit
The MaxRecipientEnvelopeLimit parameter specifies the maximum number of recipients in a message. Exchange treats an unexpanded distribution group as one recipient.

In on-premises Exchange, the default value is 500. The valid input range for this parameter is from 0 through 2147483647. If you enter a value of Unlimited, no limit is imposed on the number of recipients in a message.

In Exchange Online, the default value is Unlimited, which means the organizational limit of 1000 is used. You can enter a custom value up to 1000. For more information, see [Sending limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-1) in the Microsoft 365 service description.

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

### -MaxRetriesForLocalSiteShadow
This parameter is available only in on-premises Exchange.

The MaxRetriesForLocalSiteShadow parameter specifies the maximum number of attempts to make a shadow copy of the message in the local Active Directory site. Valid input for this parameter is an integer between 0 and 255. The default value is 2. The total number of attempts to create a shadow copy of the message is controlled by the ShadowMessagePreferenceSetting parameter:

- If ShadowMessagePreferenceSetting is set to LocalOnly, the total number of attempts to make a shadow copy of the message is the value of the MaxRetriesForLocalSiteShadow parameter.
- If ShadowMessagePreferenceSetting is set to PreferRemote, the total number of attempts to make a shadow copy of the message is the value of the MaxRetriesForLocalSiteShadow and MaxRetriesForRemoteSiteShadow parameters added together.
- If ShadowMessagePreferenceSetting is set to RemoteOnly, the value of MaxRetriesForLocalSiteShadow is 0, and the MaxRetriesForLocalSiteShadow parameter has no effect on the total number of attempts to create a shadow copy of the message.

If a shadow copy of the message isn't created after the specified number of attempts, accepting or rejecting the message is controlled by the RejectMessageOnShadowFailure parameter.

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

### -MaxRetriesForRemoteSiteShadow
This parameter is available only in on-premises Exchange.

The MaxRetriesForRemoteSiteShadow parameter specifies the maximum number of attempts to make a shadow copy of the message in a different Active Directory site. Valid input for this parameter is an integer between 0 and 255. The default value is 4. The total number of attempts to create a shadow copy of the message is controlled by the ShadowMessagePreferenceSetting parameter:

- If ShadowMessagePreferenceSetting is set to RemoteOnly, the total number of attempts to make a shadow copy of the message is the value of the MaxRetriesForRemoteSiteShadow parameter.
- If ShadowMessagePreferenceSetting is set to PreferRemote, the total number of attempts to make a shadow copy of the message is the value of the MaxRetriesForLocalSiteShadow and MaxRetriesForRemoteSiteShadow parameters added together.
- If ShadowMessagePreferenceSetting is set to LocalOnly, the value of MaxRetriesForRemoteSiteShadow is 0, and the MaxRetriesForRemoteSiteShadow parameter has no effect on the total number of attempts to create a shadow copy of the message.

If a shadow copy of the message isn't created after the specified number of attempts, accepting or rejecting the message is controlled by the RejectMessageOnShadowFailure parameter.

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

### -MaxSendSize
This parameter is available only in on-premises Exchange.

The MaxSendSize parameter specifies the maximum message size that can be sent by senders in the organization. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147482624 bytes) or the value unlimited.

The value unlimited indicates the maximum size is imposed elsewhere (for example, server, connector, or individual sender limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageExpiration
This parameter is available only in the cloud-based service.

The MessageExpiration parameter specifies the message expiration timeout interval for the organization.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 1.00:00:00 or 1 day.

A valid value is from 12 hours (0.12:00:00) to 24 hours (1.00:00:00).

Queued messages typically expire after 24 hours, resulting in an NDR for failed delivery. If you change this value, the NDR will be sent at the new applicable time.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -PreventDuplicateJournalingEnabled
This parameter is available only in the cloud-based service.

The PreventDuplicateJournalingEnabled parameter is designed to prevent duplicate journaling reports that can occur when messages are processed by both on-premises and cloud journaling agents. By enabling this setting, you can ensure that journaling messages are not duplicated. 

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueDiagnosticsAggregationInterval
This parameter is available only in on-premises Exchange.

The QueueDiagnosticsAggregationInterval parameter specifies the polling interval that's used to retrieve message queue diagnostic information. The default value is 00:01:00 or one minute.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessageOnShadowFailure
This parameter is available only in on-premises Exchange.

The RejectMessageOnShadowFailure parameter specifies whether to accept or reject messages when shadow copies of the messages can't be created. Valid values are:

- $true: Messages are rejected with the SMTP code 450 4.5.1. Use this value only if you have multiple Mailbox servers in a database availability group (DAG) or in an Active Directory site where shadow copies of the messages can be created.
- $false: Messages are accepted without making shadow copies. This is the default value.

The number of attempts to make a shadow copy of the message and where to make the shadow copy are controlled by the MaxRetriesForLocalSiteShadow, MaxRetriesForRemoteSiteShadow, and ShadowMessagePreferenceSetting parameter settings.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplyAllStormBlockDurationHours
This parameter is available only in the cloud-based service.

{{ Fill ReplyAllStormBlockDurationHours Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplyAllStormDetectionMinimumRecipients
This parameter is available only in the cloud-based service.

{{ Fill ReplyAllStormDetectionMinimumRecipients Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplyAllStormDetectionMinimumReplies
This parameter is available only in the cloud-based service.

{{ Fill ReplyAllStormDetectionMinimumReplies Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplyAllStormProtectionEnabled
This parameter is available only in the cloud-based service.

{{ Fill ReplyAllStormProtectionEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rfc2231EncodingEnabled
The Rfc2231EncodingEnabled parameter specifies whether the RFC 2231 encoding of MIME parameters for outbound messages is enabled in your organization. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafetyNetHoldTime
This parameter is available only in on-premises Exchange.

The SafetyNetHoldTime parameter specifies how long a copy of a successfully processed message is retained in Safety Net. Unacknowledged shadow copies of messages auto-expire from Safety Net based on adding the values of the SafetyNetHoldTime parameter and the MessageExpirationTimeout parameter on the Set-TransportService cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 2.00:00:00 or 2 days.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowHeartbeatFrequency
This parameter is available only in on-premises Exchange.

The ShadowHeartbeatFrequency parameter specifies the amount of time a server waits before establishing a connection to a primary server to query the discard status of shadow messages.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid input for this parameter is 00:00:01 to 1.00:00:00. The default value is 00:02:00 or 2 minutes.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowHeartbeatRetryCount
This parameter is available only in on-premises Exchange.

This parameter isn't used by Exchange Server 2016. It's used only by Exchange 2010 servers in coexistence environments.

The ShadowHeartbeatRetryCount parameter specifies the number of time-outs a server waits before deciding that a primary server has failed and assumes ownership of shadow messages in the shadow queue for the primary server that's unreachable. Valid input for this parameter is an integer between 1 and 15. The default value is 12.

This parameter is replaced by the ShadowResubmitTimeSpan parameter.

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

### -ShadowHeartbeatTimeoutInterval
This parameter is available only in on-premises Exchange.

This parameter isn't used by Exchange Server 2016. It's used only by Exchange 2010 servers in coexistence environments.

The ShadowHeartbeatTimeoutInterval parameter specifies the amount of time a server waits before establishing a connection to a primary server to query the discard status of shadow messages.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid input for this parameter is 00:00:01 to 1.00:00:00. The default value is 00:15:00 or 15 minutes.

This parameter is replaced by the ShadowHeartbeatFrequency parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowMessageAutoDiscardInterval
This parameter is available only in on-premises Exchange.

The ShadowMessageAutoDiscardInterval parameter specifies how long a server retains discard events for shadow messages. A primary server queues discard events until queried by the shadow server. However, if the shadow server doesn't query the primary server for the duration specified in this parameter, the primary server deletes the queued discard events.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid input for this parameter is 00:00:05 to 90.00:00:00. The default value is 2.00:00:00 or 2 days.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowMessagePreferenceSetting
This parameter is available only in on-premises Exchange.

The ShadowMessagePreferenceSetting parameter specifies the preferred location for making a shadow copy of a message. Valid values are:

- LocalOnly: A shadow copy of the message should only be made on a server in the local Active Directory site.
- RemoteOnly: A shadow copy of the message should only be made on a server in a different Active Directory site.
- PreferRemote: Try to make a shadow copy of the message in a different Active Directory site. If the operation fails, try make a shadow copy of the message on a server in the local Active Directory site.

The default value is PreferRemote.

```yaml
Type: ShadowMessagePreference
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowRedundancyEnabled
This parameter is available only in on-premises Exchange.

The ShadowRedundancyEnabled parameter specifies whether shadow redundancy is enabled in the organization. Valid input for this parameter is $true or $false. The default value is $true.

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

### -ShadowResubmitTimeSpan
This parameter is available only in on-premises Exchange.

The ShadowResubmitTimeSpan parameter specifies amount of time a server waits before deciding that a primary server has failed and assumes ownership of shadow messages in the shadow queue for the primary server that's unreachable.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid input for this parameter is 00:00:01 to 1.00:00:00. The default value is 03:00:00 or 3 hours.

This parameter replaces the ShadowHeartbeatRetryCount parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpClientAuthenticationDisabled
This parameter is available only in the cloud-based service.

The SmtpClientAuthenticationDisabled parameter specifies whether to disable authenticated SMTP (SMTP AUTH) for the whole organization. Examples of clients and services that require authenticated SMTP to send email messages include:

- POP3 and IMAP4 clients.
- Devices with scan to email capability.
- Workflow applications that send email notifications.
- Online services that send messages using internal email addresses in the organization.

Valid values for this parameter are:

- $true: Authenticated SMTP is disabled. This is the default value for organizations created after January 2020.
- $false: Authenticated SMTP is enabled.

The corresponding parameter that controls authenticated SMTP on individual mailboxes is the SmtpClientAuthenticationDisabled parameter on the Set-CASMailbox cmdlet. The default mailbox value is blank ($null), which means the mailbox setting is controlled by this organizational setting.

To selectively enable authenticated SMTP for specific mailboxes only: disable authenticated SMTP at the organizational level ($true), enable it for the specific mailboxes ($false), and leave the rest of the mailboxes with their default value ($null).

```yaml
Type: Boolean
Parameter Sets: Exchange Online
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupervisionTags
This parameter is available only in on-premises Exchange.

The SupervisionTags parameter specifies the various tags that are used for transport supervision in the organization.

When you install Exchange, two tags, Allow and Reject, are created by default.

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

### -TLSReceiveDomainSecureList
This parameter is available only in on-premises Exchange.

The TLSReceiveDomainSecureList parameter specifies the domains from which you want to receive domain secured email by using mutual Transport Layer Security (TLS) authentication. To fully support mutual TLS authentication, you must also perform the following steps:

- Enable Domain Security (Mutual Auth TLS) and the TLS authentication method on the Receive connectors that receive messages from the domains that you specified with the TLSReceiveDomainSecureList parameter.
- Specify the domains to which you want to send domain secured email by using the TLSSendDomainSecureList parameter.
- Enable Domain Security (Mutual Auth TLS) on the Send connectors that send messages to the domains that you specified in the TLSSendDomainSecureList parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The wildcard character (\*) isn't supported in the domains listed in the TLSReceiveDomainSecureList parameter or in the TLSSendDomainSecureList parameter. The default value for both parameters is an empty list ({}).

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

### -TLSSendDomainSecureList
This parameter is available only in on-premises Exchange.

The TLSSendDomainSecureList parameter specifies the domains from which you want to send domain secured email by using mutual TLS authentication. To fully support mutual TLS authentication, you must also perform the following steps:

- Enable Domain Security (Mutual Auth TLS) on the Send connectors that send messages to the domains that you specified in the TLSSendDomainSecureList parameter.
- Specify the domains from which you want to receive domain secured email by using the TLSReceiveDomainSecureList parameter.
- Enable Domain Security (Mutual Auth TLS) and the TLS authentication method on the Receive connectors that receive messages from the domains that you specified in the TLSReceiveDomainSecureList parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Multiple domains may be separated by commas. The wildcard character (\*) isn't supported in the domains listed in the TLSSendDomainSecureList parameter or in the TLSReceiveSecureList parameter. The default values for both parameters are an empty list ({}).

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

### -TransportRuleAttachmentTextScanLimit
This parameter is available only in on-premises Exchange.

The TransportRuleAttachmentTextScanLimit parameter specifies the maximum size of text to extract from attachments for scanning by attachment scanning predicates in transport rules and data loss prevention (DLP) policies.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

In Exchange Online, Exchange 2019, and Exchange 2016, the default value is 1 MB (1,048,576 bytes). In Exchange 2013, the default value is 150 KB (153,600 bytes).

If the amount of text in the attachment is larger than the value of this parameter, only the specified amount of text is scanned. For example, if a 5 megabyte attachment contains 300 kilobytes of text, and the value of TransportRuleAttachmentTextScanLimit is 150 kilobytes, only the first 150 kilobytes of text are extracted and scanned.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerifySecureSubmitEnabled
This parameter is available only in on-premises Exchange.

The VerifySecureSubmitEnabled parameter verifies that email clients submitting messages from mailboxes on Mailbox servers are using encrypted MAPI submission. The valid values for this parameter are $true or $false. The default value is $false

If the VerifySecureSubmitEnabled parameter is set to $true, and Outlook 2010 or later is used to submit the message, the message is marked as secure. If a previous version of Outlook is used to submit the message, the message is marked as anonymous.

If the VerifySecureSubmitEnabled parameter is set to $false, all MAPI message submissions are marked as secure. Messages submitted from mailboxes on the Mailbox server by using any MAPI client aren't checked for encrypted MAPI submission. If you use previous Outlook versions in your Exchange organization, you should set the VerifySecureSubmitEnabled parameter to $false.

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

### -VoicemailJournalingEnabled
This parameter is functional only in on-premises Exchange.

The VoicemailJournalingEnabled parameter specifies whether Unified Messaging voice mail messages are journaled by the Journaling agent. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Xexch50Enabled
This parameter is available only in on-premises Exchange.

The Xexch50Enabled parameter specifies whether Xexch50 authentication should be enabled for backward compatibility with computers running Exchange 2003. Valid input for this parameter is $true or $false. The default value is $true.

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
