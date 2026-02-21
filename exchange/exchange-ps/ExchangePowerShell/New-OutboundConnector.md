---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-outboundconnector
schema: 2.0.0
title: New-OutboundConnector
---

# New-OutboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-OutboundConnector cmdlet to create a new Outbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-OutboundConnector [-Name] <String>
 [-AllAcceptedDomains <Boolean>]
 [-CloudServicesMailEnabled <Boolean>]
 [-Comment <String>]
 [-Confirm]
 [-ConnectorSource <TenantConnectorSource>]
 [-ConnectorType <TenantConnectorType>]
 [-Enabled <Boolean>]
 [-IsTransportRuleScoped <Boolean>]
 [-LinkForModifiedConnector <Guid>]
 [-MtaStsMode <MtaStsMode>]
 [-RecipientDomains <MultiValuedProperty>]
 [-RouteAllMessagesViaOnPremises <Boolean>]
 [-SenderRewritingEnabled <Boolean>]
 [-SmartHosts <MultiValuedProperty>]
 [-SmtpDaneMode <SmtpDaneMode>]
 [-TestMode <Boolean>]
 [-TlsDomain <SmtpDomainWithSubdomains>]
 [-TlsSettings <TlsAuthLevel>]
 [-UseMXRecord <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Outbound connectors send email messages to remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-OutboundConnector -Name "Contoso Outbound Connector" -RecipientDomains *.contoso.com -TlsSettings DomainValidation -TlsDomain *.contoso.com
```

This example creates the Outbound connector named Contoso Outbound Connector with the following properties:

- It sends messages to recipients in the contoso.com domain and all subdomains.
- It uses TLS encryption and certificate verification for mail routed to the contoso.com domain and all subdomains

## PARAMETERS

### -Name

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Name parameter specifies the unique name for the connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllAcceptedDomains

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AllAcceptedDomains parameter specifies whether the Outbound connector is used in hybrid organizations where message recipients are in accepted domains of the cloud-based organization. Valid values are:

- $true: The Outbound connector is used in hybrid organizations when message recipients are in an accepted domain of the cloud-based organization. This setting requires OnPremises for the ConnectorType value.
- $false: The Outbound connector isn't used in hybrid organizations. This value is the default.

This parameter is effective only for OnPremises connectors.

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

### -CloudServicesMailEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

**Note**: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see [Hybrid Configuration wizard](https://learn.microsoft.com/exchange/hybrid-configuration-wizard).

The CloudServicesMailEnabled parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft 365. Specifically, this parameter controls how certain internal X-MS-Exchange-Organization-\* message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known as cross-premises headers.

Valid values are:

- $true: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This value is the default for connectors that are created by the Hybrid Configuration wizard. Certain X-MS-Exchange-Organization-\* headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to X-MS-Exchange-CrossPremises-\* headers and are thereby preserved in messages. X-MS-Exchange-CrossPremises-\* headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to X-MS-Exchange-Organization-\* headers. These promoted headers replace any instances of the same X-MS-Exchange-Organization-\* headers that already exist in messages.
- $false: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.

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

### -Comment

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -ConnectorSource

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ConnectorSource parameter specifies how the connector is created. Valid values are:

- Default: The connector is manually created. This value is the default when you use this cmdlet, and we recommend that you don't change this value.
- HybridWizard: The connector is automatically created by the Hybrid Configuration Wizard.
- Migrated: The connector was originally created in Microsoft Forefront Online Protection for Exchange.

```yaml
Type: TenantConnectorSource
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ConnectorType parameter specifies a category for the domains that are serviced by the connector. Valid values are:

- Partner: The connector services domains that are external to your organization.
- OnPremises: The connector services domains that are used by your on-premises organization.

```yaml
Type: TenantConnectorType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Enabled parameter specifies whether to enable or disable the Outbound connector. Valid values are:

- $true: The connector is enabled. This value is the default.
- $false: The connector is disabled.

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

### -IsTransportRuleScoped

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IsTransportRuleScoped parameter specifies whether the Outbound connector is associated with a transport rule (also known as a mail flow rule). Valid values are:

- $true: The connector is associated with a transport rule.
- $false: The connector isn't associated with a transport rule. This value is the default.

You scope a transport rule to an Outbound connector by using the RouteMessageOutboundConnector parameter on the New-TransportRule or Set-TransportRule cmdlets. Messages that match the conditions of the transport rule are routed to their destinations by using the specified Outbound connector.

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

### -LinkForModifiedConnector

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MtaStsMode

> Applicable: Exchange Online

The MtaStsMode parameter provides admin control over outbound MTA Strict Transport Security (MTA-STS) validation for email sent over the outbound connector. Organizations can choose how strictly to enforce MTA-STS when sending mail to external domains. Valid values are:

- Opportunistic: This value is the default. The connector uses MTA-STS opportunistically.

  • If the destination domain doesn't support MTA-STS, the message is sent using the connector settings or Exchange Online default settings.

  • If the destination domain supports MTA-STS but validation fails while the policy mode is set to Enforce, Exchange Online queues the message and retries delivery for 24 hours. If validation doesn't pass within 24 hours, the message is dropped.  

- None: Messages always attempt delivery without verifying MTA-STS. The security of email sent over the connector is reduced (can't protect against downgrade attacks or spoofed MX redirection). This value can result in messages from this connector being intercepted or redirected to malicious entities.

```yaml
Type: MtaStsMode
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: Opportunistic
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomains

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The RecipientDomains parameter specifies the domains that the Outbound connector routes mail to. You can specify multiple domains separated by commas.

You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: \*.contoso.com. However, you can't embed a wildcard character, as shown in the following example: domain.\*.contoso.com.

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

### -RouteAllMessagesViaOnPremises

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The RouteAllMessagesViaOnPremises parameter specifies that all messages serviced by this connector are first routed through the on-premises email system in hybrid organizations. Valid values are:

- $true: Messages are routed through the on-premises email system. This setting requires OnPremises for the ConnectorType value.
- $false: Messages aren't routed through the on-premises email system. This value is the default.

This parameter is effective only for OnPremises connectors.

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

### -SenderRewritingEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SenderRewritingEnabled parameter specifies that all messages that normally qualify for SRS rewriting are rewritten for routing through the on-premises email system. Valid values are:

- $true: Messages are rewritten by SRS as needed before being routed through the on-premises email system. This setting requires OnPremises for the ConnectorType value.
- $false: Messages aren't rewritten by SRS before being routed through the on-premises email system. This value is the default.

This parameter is effective only for OnPremises connectors.

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

### -SmartHosts

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SmartHosts parameter specifies the smart host that the Outbound connector uses to route mail. Valid values are:

- FQDN of a smart host server, a mail exchange (MX) record, or an address (A) record: For example, mail.contoso.com.
- Single IP address: For example, 10.10.1.1.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple value separated by commas: `"Value1","Value2",..."ValueN"`.

This parameter is required if you use the value $false for the UseMxRecord parameter.

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

### -SmtpDaneMode

> Applicable: Exchange Online

The SmtpDaneMode parameter provides admin control over outbound SMTP DNS-based Authentication of Named Entities (DANE) validation for email sent over the outbound connector. Organizations can choose how strictly to enforce SMTP DANE when sending mail to external domains. Valid values are:

- Opportunistic: This value is the default. The connector uses SMTP DANE with DNSSEC opportunistically on messages sent via the connector.

  • If the destination domain doesn't support SMTP DANE with DNSSEC, the message is sent using the connector settings or Exchange Online default settings.

  • If the destination domain supports SMTP DANE with DNSSEC but the DNSSEC or the SMTP DANE validations fail, Exchange Online queues the message and retries delivery for 24 hours while attempting to fall back to a secondary MX record. If validation doesn't pass within 24 hours and there's no secondary MX record, the message is dropped.

- Mandatory: The connector enforces SMTP DANE with DNSSEC on all messages sent via the connector. If the destination domain doesn't support SMTP DANE with DNSSEC, or validation fails at any point, Exchange Online queues the message and retries delivery for 24 hours. The message is eventually dropped if the destination domain doesn't support SMTP DANE with DNSSEC or supports the protocol but continues to fail validation.

- None: Messages always attempt delivery without verifying SMTP DANE with DNSSEC. The security of email sent over the connector is reduced (can't protect against downgrade attacks or spoofed MX redirection). This value can result in messages from this connector being intercepted or redirected to malicious entities.

```yaml
Type: SmtpDaneMode
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: Opportunistic
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestMode

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The TestMode parameter specifies whether you want to enabled or disable test mode for the Outbound connector. Valid values are:

- $true: Test mode is enabled.
- $false: Test mode is disabled. This value is the default.

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

### -TlsDomain

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The TlsDomain parameter specifies the domain name that the Outbound connector uses to verify the FQDN of the target certificate when establishing a TLS secured connection. A valid value for this parameter is an SMTP domain.

Wildcards are supported to specify all subdomains of a domain (for example, \*.contoso.com), but you can't embed the wildcard character within the domain (for example, domain.\*.contoso.com).

This parameter meaningful only when the TlsSettings value is DomainValidation.

```yaml
Type: SmtpDomainWithSubdomains
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsSettings

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The TlsSettings parameter specifies the TLS authentication level that's used for outbound TLS connections established by this Outbound connector. Valid values are:

- EncryptionOnly: TLS is used only to encrypt the communication channel. No certificate authentication is performed.
- CertificateValidation: TLS is used to encrypt the channel and certificate chain validation and revocation lists checks are performed.
- DomainValidation: In addition to channel encryption and certificate validation, the Outbound connector also verifies that the FQDN of the target certificate matches the domain specified in the TlsDomain parameter.
- $null (blank): This value is the default.

```yaml
Type: TlsAuthLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMXRecord

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The UseMXRecord parameter enables or disables DNS routing for the connector. Valid values are:

- $true: The connector uses DNS routing (MX records in DNS) to deliver email. This value is the default.
- $false: The connector delivers email to one or more smart hosts. This setting requires one or more smart hosts for the SmartHosts value.

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

### -WhatIf

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
