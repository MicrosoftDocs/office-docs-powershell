---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Set-OutboundConnector
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Set-OutboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-OutboundConnector cmdlet to modify an existing Outbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OutboundConnector [-Identity] <OutboundConnectorIdParameter> [-AllAcceptedDomains <$true | $false>]
 [-CloudServicesMailEnabled <$true | $false>] [-Comment <String>] [-Confirm]
 [-ConnectorSource <Default | Migrated | HybridWizard | AdminUI>] [-ConnectorType <OnPremises | Partner>]
 [-Enabled <$true | $false>] [-IsTransportRuleScoped <$true | $false>] [-IsValidated <$true | $false>]
 [-LastValidationTimestamp <DateTime>] [-Name <String>] [-RecipientDomains <MultiValuedProperty>]
 [-RouteAllMessagesViaOnPremises <$true | $false>] [-SmartHosts <MultiValuedProperty>]
 [-TestMode <$true | $false>] [-TlsDomain <SmtpDomainWithSubdomains>]
 [-TlsSettings <EncryptionOnly | CertificateValidation | DomainValidation>] [-UseMXRecord <$true | $false>]
 [-ValidationRecipients <String[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Outbound connectors send email messages to remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OutboundConnector "Contoso Outbound Connector" -UseMxRecord $false -SmartHosts 192.168.0.1
```

This example changes the settings of the existing Outbound connector named Contoso Outbound Connector to route to a smart host at IP address 192.168.0.1.

## PARAMETERS

### -Identity
The Identity parameter specifies the connector you want to modify. You can use any value that uniquely identifies the connector. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: OutboundConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllAcceptedDomains
The AllAcceptedDomains parameter specifies whether the Outbound connector is used in hybrid organizations where message recipients are in accepted domains of the cloud-based organization. Valid values are:

- $true: The Outbound connector is used in hybrid organizations when message recipients are in an accepted domain of the cloud-based organization. You can only use this value when the ConnectorType parameter value is OnPremises.

- $false: The Outbound connector isn't used in hybrid organizations. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloudServicesMailEnabled
Note: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see Hybrid Configuration wizard (https://technet.microsoft.com/library/hh529921.aspx).

The CloudServicesMailEnabled parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft Office 365. Specifically, this parameter controls how certain internal X-MS-Exchange-Organization- message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known as cross-premises headers.

Valid values are:

- $true: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain X-MS-Exchange-Organization- headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to X-MS-Exchange-CrossPremises- headers and are thereby preserved in messages. X-MS-Exchange-CrossPremises- headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to X-MS-Exchange-Organization- headers. These promoted headers replace any instances of the same X-MS-Exchange-Organization- headers that already exist in messages.

- $false: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSource
The ConnectorSource parameter specifies how the connector is created. Valid values are:

- Default: The connector is manually created. This is the default value for manually created connectors, and we recommend that you don't change this value.

- HybridWizard: The connector is automatically created by the Hybrid Configuration Wizard.

- Migrated: The connector was originally created in Microsoft Forefront Online Protection for Exchange.

```yaml
Type: Default | Migrated | HybridWizard | AdminUI
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorType
The ConnectorType parameter specifies a category for the domains that are serviced by the connector. Valid values are:

- Partner: The connector services domains that are external to your organization.

- OnPremises: The connector services domains that are used by your on-premises organization.

```yaml
Type: OnPremises | Partner
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether to enable or disable the Outbound connector. Valid values are:

- $true: The connector is enabled. This is the default value.

- $false: The connector is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsTransportRuleScoped
The IsTransportRuleScoped parameter specifies whether the Outbound connector is associated with a transport rule (also known as a mail flow rule). Valid values are:

- $true: The connector is associated with a transport rule.

- $false: The connector isn't associated with a transport rule. This is the default value.

You scope a transport rule to an Outbound connector by using the RouteMessageOutboundConnector parameter on the New-TransportRule or Set-TransportRule cmdlets. Messages that match the conditions of the transport rule are routed to their destinations by using the specified Outbound connector.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsValidated
The IsValidated parameter specifies whether the Outbound connector has been validated. Valid values are:

- $true: The connector has been validated,

- $false: The connector hasn't been validated. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastValidationTimestamp
The LastValidationTimestamp parameter specifies the date/time that the Outbound connector was validated.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, (Get-Date "5/6/2016 9:30 AM").ToUniversalTime(). For more information, see Get-Date (https://go.microsoft.com/fwlink/p/?LinkID=113313).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomains
The RecipientDomains parameter specifies the domain that the Outbound connector routes mail to. You can specify multiple domains separated by commas.

You can use a wildcard character to specify all subdomains of a specified domain (for example, `*.contoso.com`), but you can't embed a wildcard character (for example, `domain.*.contoso.com`).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteAllMessagesViaOnPremises
The RouteAllMessagesViaOnPremises parameter specifies that all messages serviced by this connector are first routed through the on-premises messaging system. Valid values are:

- $true: Messages are routed through the on-premises messaging system. This setting requires you to set the ConnectorType parameter to the value OnPremises in the same command.

- $false: Messages aren't routed through the on-premises messaging system. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmartHosts
The SmartHosts parameter specifies the smart hosts the Outbound connector uses to route mail. This parameter is required if you set the UseMxRecord parameter to $false and must be specified on the same command line. The SmartHosts parameter takes one or more FQDNs, such as server.contoso.com, or one or more IP addresses, or a combination of both FQDNs and IP addresses. Separate each value by using a comma. If you enter an IP address, you may enter the IP address as a literal, for example: 10.10.1.1, or using Classless InterDomain Routing (CIDR), for example, 192.168.0.1/25. The smart host identity can be the FQDN of a smart host server, a mail exchange (MX) record, or an address (A) record.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestMode
The TestMode parameter specifies whether you want to enabled or disable test mode for the Outbound connector. Valid values are:

- $true: Test mode is enabled.

- $false: Test mode is disabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsDomain
The TlsDomain parameter specifies the domain name that the Outbound connector uses to verify the FQDN of the target certificate when establishing a TLS secured connection. This parameter is only used if the TlsSettings parameter is set to DomainValidation. Valid input for the TlsDomain parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain (for example, `*.contoso.com`), but you can't embed a wildcard character (for example, `domain.*.contoso.com`).

```yaml
Type: SmtpDomainWithSubdomains
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsSettings
The TlsSettings parameter specifies the TLS authentication level that's used for outbound TLS connections established by this Outbound connector. Valid values are:

- EncryptionOnly: TLS is used only to encrypt the communication channel. No certificate authentication is performed.

- CertificateValidation: TLS is used to encrypt the channel and certificate chain validation and revocation lists checks are performed.

- DomainValidation: In addition to channel encryption and certificate validation, the Outbound connector also verifies that the FQDN of the target certificate matches the domain specified in the TlsDomain parameter.

- $null (blank): This is the default value.

```yaml
Type: EncryptionOnly | CertificateValidation | DomainValidation
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMXRecord
The UseMXRecord parameter enables or disables DNS routing for the connector. Valid values are:

- $true: The connector uses DNS routing (MX records in DNS) to deliver email. This is the default value.

- $false: The connector delivers email to one or more smart hosts. When you use this value, you also need to specifiy the smart hosts by using the SmartHosts parameter in the same command.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationRecipients
The ValidationRecipients parameter specifies the email addresses of the validation recipients for the Outbound connector. You can specify multiple email addresses separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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
Applicable: Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/beba3ca3-6f93-49c5-9ddf-505260655bed.aspx)
