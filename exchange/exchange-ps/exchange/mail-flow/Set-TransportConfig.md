---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-TransportConfig
schema: 2.0.0
---

# Set-TransportConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-TransportConfig cmdlet to modify the transport configuration settings for the whole Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-TransportConfig [[-Identity] <OrganizationIdParameter>] [-ClearCategories <$true | $false>] [-Confirm]
 [-ConvertDisclaimerWrapperToEml <$true | $false>] [-DomainController <Fqdn>]
 [-DSNConversionMode <UseExchangeDSNs | PreserveDSNBody | DoNotConvert>]
 [-ExternalDelayDsnEnabled <$true | $false>] [-ExternalDsnDefaultLanguage <CultureInfo>]
 [-ExternalDsnLanguageDetectionEnabled <$true | $false>]
 [-ExternalDsnMaxMessageAttachSize <ByteQuantifiedSize>] [-ExternalDsnReportingAuthority <SmtpDomain>]
 [-ExternalDsnSendHtml <$true | $false>] [-ExternalPostmasterAddress <SmtpAddress>]
 [-GenerateCopyOfDSNFor <MultiValuedProperty>]
 [-HeaderPromotionModeSetting <NoCreate | MayCreate | MustCreate>]
 [-InternalDelayDsnEnabled <$true | $false>] [-InternalDsnDefaultLanguage <CultureInfo>]
 [-InternalDsnLanguageDetectionEnabled <$true | $false>]
 [-InternalDsnMaxMessageAttachSize <ByteQuantifiedSize>] [-InternalDsnReportingAuthority <SmtpDomain>]
 [-InternalDsnSendHtml <$true | $false>] [-InternalSMTPServers <MultiValuedProperty>]
 [-JournalingReportNdrTo <SmtpAddress>] [-LegacyJournalingMigrationEnabled <$true | $false>]
 [-MaxDumpsterSizePerDatabase <ByteQuantifiedSize>] [-MaxDumpsterTime <EnhancedTimeSpan>]
 [-MaxReceiveSize <Unlimited>] [-MaxRecipientEnvelopeLimit <Unlimited>] [-MaxSendSize <Unlimited>]
 [-OrganizationFederatedMailbox <SmtpAddress>] [-Rfc2231EncodingEnabled <$true | $false>]
 [-ShadowHeartbeatRetryCount <Int32>] [-ShadowHeartbeatTimeoutInterval <EnhancedTimeSpan>]
 [-ShadowMessageAutoDiscardInterval <EnhancedTimeSpan>] [-ShadowRedundancyEnabled <$true | $false>]
 [-SupervisionTags <MultiValuedProperty>] [-TLSReceiveDomainSecureList <MultiValuedProperty>]
 [-TLSSendDomainSecureList <MultiValuedProperty>] [-VerifySecureSubmitEnabled <$true | $false>]
 [-VoicemailJournalingEnabled <$true | $false>] [-WhatIf] [-Xexch50Enabled <$true | $false>]
 [-AddressBookPolicyRoutingEnabled <$true | $false>]
 [-AgentGeneratedMessageLoopDetectionInSmtpEnabled <$true | $false>]
 [-AgentGeneratedMessageLoopDetectionInSubmissionEnabled <$true | $false>]
 [-DiagnosticsAggregationServicePort <Int32>] [-Force]
 [-JournalReportDLMemberSubstitutionEnabled <$true | $false>] [-MaxAllowedAgentGeneratedMessageDepth <UInt32>]
 [-MaxAllowedAgentGeneratedMessageDepthPerAgent <UInt32>] [-MaxRetriesForLocalSiteShadow <Int32>]
 [-MaxRetriesForRemoteSiteShadow <Int32>] [-QueueDiagnosticsAggregationInterval <EnhancedTimeSpan>]
 [-RejectMessageOnShadowFailure <$true | $false>] [-SafetyNetHoldTime <EnhancedTimeSpan>]
 [-ShadowHeartbeatFrequency <EnhancedTimeSpan>]
 [-ShadowMessagePreferenceSetting <PreferRemote | LocalOnly | RemoteOnly>]
 [-ShadowResubmitTimeSpan <EnhancedTimeSpan>] [-TransportRuleAttachmentTextScanLimit <ByteQuantifiedSize>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-TransportConfig -GenerateCopyOfDSNFor 5.7.1,5.7.2,5.7.3
```

This example configures the Exchange organization to forward all DSN messages that have the DSN codes 5.7.1, 5.7.2, and 5.7.3 to the postmaster email account.

### -------------------------- Example 2 --------------------------
```
Set-TransportConfig -JournalingReportNdrTo journalingndr@contoso.com
```

This example configures the Exchange organization to redirect all journaling reports that can't be delivered to the journaling mailbox to the email account journalingndr@contoso.com.

To avoid journaling issues, we recommend that you set JournalingReportNdrTo to a dedicated mailbox without any transport rule or mailbox rule. Or, set JournalingReportNdrTo to an external address. In Exchange Online, you can configure this setting by using the Office 365 portal or Exchange Online PowerShell. In on-premises Exchange Server, you can configure this setting by using the Exchange Management Shell. For more information, see Transport and Mailbox rules in Exchange Online or in on-premises Exchange Server don't work as expected (https://go.microsoft.com/fwlink/p/?linkid=787472&clcid=0x409).

## PARAMETERS

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ClearCategories
The ClearCategories parameter keeps or removes Microsoft Outlook message categories during content conversion. Valid input for this parameter is $true or $false. The default value is $true. This means that by default, Outlook message categories are removed during content conversion.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ConvertDisclaimerWrapperToEml
The ConvertDisclaimerWrapperToEml parameter specifies whether the original message will be added as a TNEF attachment or a regular EML attachment to a disclaimer when all of the following are true:

- Message is sent to an external user.

- The sender has signed the message.

- The message is processed by a Transport rule that adds a disclaimer.

When a Transport rule that adds disclaimers to outbound messages encounters a message signed by the sender, the Transport rule can't add the disclaimer directly to the message. As a result, the disclaimer is sent to the intended recipient with the original message as an attachment.

Valid input for this parameter is $true or $false. The default value is $false. If you set this parameter to $true, the original message is sent as an EML attachment. Otherwise, it is sent as a TNEF attachment.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DSNConversionMode
The DSNConversionMode parameter controls how Exchange handles delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) that are generated by earlier versions of Exchange or other messaging systems. Valid values are:

- DoNotConvert: DSNs aren't modified. The DSN is delivered as a standard message.

- PreserveDSNBody: DSNs are converted to the Exchange 2010 or later format, and the text in the body of the DSN message is retained. This is the default value.

- UseExchangeDSNs: DSNs are converted to the Exchange 2010 or later format. However, any customized text or attachments that were associated with the original DSN are overwritten.

```yaml
Type: UseExchangeDSNs | PreserveDSNBody | DoNotConvert
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDelayDsnEnabled
The ExternalDelayDsnEnabled parameter specifies whether a delay delivery status notification (DSN) message should be created for external messages that couldn't be immediately delivered. Valid input for this parameter is $true or $false. The default value is $true.

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

### -ExternalDsnDefaultLanguage
The ExternalDsnDefaultLanguage parameter specifies which Exchange server language should be used by default when you create external DSN messages. The default value is the default Windows server language.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnLanguageDetectionEnabled
The ExternalDsnLanguageDetectionEnabled parameter specifies whether the server should try to send an external DSN message in the same language as the original message that generated the notification. Valid input for this parameter is $true or $false.The default value is $true.

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

### -ExternalDsnMaxMessageAttachSize
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnReportingAuthority
The ExternalDsnReportingAuthority parameter specifies what the server name should be in the machine-readable part of the external DSN message. The default value is the authoritative domain specified during installation.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDsnSendHtml
The ExternalDsnSendHtml parameter specifies whether external DSN messages should be sent by using HTML or whether messages should be sent in plain text. Valid input for this parameter is $true or $false.The default value is $true.

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

### -ExternalPostmasterAddress
The ExternalPostmasterAddress parameter specifies the email address in the From header field of an external DSN message. The default value is $null. In the Transport service on a Mailbox server, the value of the external postmaster email address is postmaster@\<defaultaccepteddomain\>. If an Edge Transport server hasn't yet been through the EdgeSync process, and the ExternalPostmasterAddress parameter is set to $null, the external postmaster email address on the Edge Transport server is postmaster@\<edgetransportserverfqdn\>. If an Edge Transport server has completed the EdgeSync process, and the ExternalPostmasterAddress parameter is set to $null, the external postmaster email address on the Edge Transport server is postmaster@\<defaultaccepteddomain\>. To override the default behavior, you can specify an email address for the ExternalPostMasterAddress parameter.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

Although these DSN codes are monitored by default, the associated NDRs aren't copied to the Exchange recipient or to the external postmaster address if no mailbox is assigned to the Exchange recipient or to the external postmaster address. By default, no mailbox is assigned to the Exchange recipient or to the external postmaster address.

To assign a mailbox to the Exchange recipient, use the Set-OrganizationConfig cmdlet with the MicrosoftExchangeRecipientReplyRecipient parameter. To assign a mailbox to the external postmaster address, create a new mailbox postmaster. The default email address policy of the Exchange organization should automatically add an SMTP address of postmaster@\<Authoritative domain\> to the mailbox.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderPromotionModeSetting
The HeaderPromotionModeSetting parameter specifies whether named properties are created for custom X-headers on messages received from outside the Exchange organization. You can use one of the following values:

- MustCreate: Exchange creates a named property for each new custom X-header.

- MayCreate: Exchange creates a named property for each new custom X-header on messages received from authenticated senders. No named properties are created for custom X-headers on messages received from unauthenticated senders.

- NoCreate: Exchange won't create any named properties based on custom X-headers on incoming messages.

```yaml
Type: NoCreate | MayCreate | MustCreate
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDelayDsnEnabled
The InternalDelayDsnEnabled parameter specifies whether a delay DSN message should be created for messages sent to or from recipients or senders in the same Exchange organization that couldn't be immediately delivered. Valid input for this parameter is $true or $false. The default value is $true.

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

### -InternalDsnDefaultLanguage
The InternalDsnDefaultLanguage parameter specifies which Exchange server language should be used by default when you create internal DSN messages. The default value is the default Windows server language.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnLanguageDetectionEnabled
The InternalDsnLanguageDetectionEnabled parameter specifies whether the server should try to send an internal DSN message in the same language as the original message that generated the notification. Valid input for this parameter is $true or $false. The default value is $true.

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

### -InternalDsnMaxMessageAttachSize
The InternalDsnMaxMessageAttachSize parameter specifies the maximum size of the original message that generated an internal DSN message. If the original message exceeds this size, only the headers of the original message are included in the DSN message. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2147483647 bytes. If you specify a value of 0, only the original message headers are included in the internal DSN message.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnReportingAuthority
The InternalDsnReportingAuthority parameter specifies what the server name should be in the internal DSN message. The default value is the authoritative domain specified during installation.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDsnSendHtml
The InternalDsnSendHtml parameter specifies whether internal DSN messages should be sent by using HTML or whether messages should be sent in plain text. Valid input for this parameter is $true or $false. The default is $true.

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

### -InternalSMTPServers
This parameter is available only in on-premises Exchange.

The InternalSMTPServers parameter specifies a list of internal SMTP server IP addresses or IP address ranges that should be ignored by Sender ID and connection filtering.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalingReportNdrTo
The JournalingReportNdrTo parameter specifies the email address to which journal reports are sent if the journaling mailbox is unavailable. By default, if this parameter is left empty, Exchange continues to try to deliver the journal report to the journaling mailbox. We recommended that you use a dedicated (non-user) mailbox as the argument to JournalingReportNdrTo.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyJournalingMigrationEnabled
The LegacyJournalingMigrationEnabled parameter specifies whether journal messages generated in Microsoft Exchange Server 2003 will be reformatted by Exchange 2010.

The default value is $false.

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

### -MaxDumpsterSizePerDatabase
This parameter is available only in on-premises Exchange.

This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDumpsterTime
This parameter is available only in on-premises Exchange.

This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The MaxDumpsterTime parameter specifies how long an email message should remain in the transport dumpster on a Hub Transport server. The default value is seven days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is 00:00:00 to 24855.03:14:07.

To enable the transport dumpster, the value of the MaxDumpsterSizePerStorageGroup parameter must be greater than 0, and the value of the MaxDumpsterTime parameter must be greater than 00:00:00.

This parameter is replaced by the SafetyNetHoldTime parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2097151 KB. If you enter a value of Unlimited, no limit is imposed on the message size that can be received by recipients in the organization.

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

### -MaxRecipientEnvelopeLimit
This parameter is available only in on-premises Exchange.

The MaxRecipientEnvelopeLimit parameter specifies the maximum number of recipients in a message. The default value is 5000. The valid input range for this parameter is from 0 through 2147483647. If you enter a value of Unlimited, no limit is imposed on the number of recipients in a message. Exchange treats an unexpanded distribution group as one recipient.

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

### -MaxSendSize
This parameter is available only in on-premises Exchange.

The MaxSendSize parameter specifies the maximum message size that can be sent by senders in the organization. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2097151 KB. If you enter a value of Unlimited, no limit is imposed on the message size that can be sent by senders in the organization.

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

### -OrganizationFederatedMailbox
The OrganizationFederatedMailbox parameter specifies the SMTP address of the federated mailbox used for federated delivery with other organizations.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rfc2231EncodingEnabled
The Rfc2231EncodingEnabled parameter specifies whether the RFC 2231 encoding of MIME parameters for outbound messages is enabled in your organization. Valid input for this parameter is $true or $false. The default value is $false.

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

### -ShadowHeartbeatRetryCount
This parameter is available only in on-premises Exchange.

This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The ShadowHeartbeatRetryCount parameter specifies the number of time-outs a server waits before deciding that a primary server has failed and assumes ownership of shadow messages in the shadow queue for the primary server that's unreachable. Valid input for this parameter is an integer between 1 and 15. The default value is 12.

This parameter is replaced by the ShadowResubmitTimeSpan parameter.

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

### -ShadowHeartbeatTimeoutInterval
This parameter is available only in on-premises Exchange.

This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The ShadowHeartbeatTimeoutInterval parameter specifies the amount of time a server waits before establishing a connection to a primary server to query the discard status of shadow messages.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid input for this parameter is 00:00:01 to 1.00:00:00. The default value is 00:15:00 or 15 minutes.

This parameter is replaced by the ShadowHeartbeatFrequency parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -SupervisionTags
This parameter is available only in on-premises Exchange.

The SupervisionTags parameter specifies the various tags that are used for transport supervision in the organization.

When you install Exchange, two tags, Allow and Reject, are created by default.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The wildcard character (\*) isn't supported in the domains listed in the TLSReceiveDomainSecureList parameter or in the TLSSendDomainSecureList parameter. The default value for both parameters is an empty list ({}).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

Multiple domains may be separated by commas. The wildcard character (\*) isn't supported in the domains listed in the TLSSendDomainSecureList parameter or in the TLSReceiveSecureList parameter. The default values for both parameters are an empty list ({}).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -VoicemailJournalingEnabled
This parameter is available only in on-premises Exchange.

The VoicemailJournalingEnabled parameter specifies whether Unified Messaging voice mail messages are journaled by the Journaling agent. Valid input for this parameter is $true or $false. The default value is $true.

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

### -Xexch50Enabled
This parameter is available only in on-premises Exchange.

The Xexch50Enabled parameter specifies whether Xexch50 authentication should be enabled for backward compatibility with computers running Exchange 2003. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AddressBookPolicyRoutingEnabled
The AddressBookPolicyRoutingEnabled parameter controls how recipients are resolved in an organization that uses address book policies to create separate virtual organizations within the same Exchange organization. Specifically, the global address list (GAL) that's specified in the user's address book policy controls how recipients are resolved. When the value of this parameter is $true, users that are assigned different GALs appear as external recipients. When the value of this parameter is $false, users that are assigned different GALs appear as internal recipients.

The default value is $false. Note that this parameter has no effect if your organization doesn't use address book policies, or if the address book policy routing agent isn't installed and enabled. Also note that changing the value of this parameter may take up to 30 minutes to take effect. For more information about address book policies, see Address book policies (https://technet.microsoft.com/library/hh529948.aspx).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalReportDLMemberSubstitutionEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Type: PreferRemote | LocalOnly | RemoteOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRuleAttachmentTextScanLimit
This parameter is available only in on-premises Exchange.

The TransportRuleAttachmentTextScanLimit parameter specifies the maximum size of text to extract from attachments for scanning by attachment scanning predicates in transport rules and data loss prevention (DLP) policies. The default value is 150 kilobytes (KB).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

If the amount of text in the attachment is larger than the value of this parameter, only the specified amount of text is scanned. For example, if a 5 megabyte attachment contains 300 kilobytes of text, and the value of TransportRuleAttachmentTextScanLimit is 150 kilobytes, only the first 150 kilobytes of text are extracted and scanned.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

- $true: Authenticated SMTP is disabled.

- $false: Authenticated SMTP is enabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: Exchange Online
Aliases:

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

[Online Version](https://technet.microsoft.com/library/ad3910a5-2227-47a2-8ccc-a208ce6210bb.aspx)
