---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-inboundconnector
applicable: Exchange Online, Exchange Online Protection
title: New-InboundConnector
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-InboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-InboundConnector cmdlet to create a new Inbound connector in your cloud-based organization.

**Note**: Creation of inbound connectors is restricted in [Microsoft 365 E5 developer subscriptions](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program-faq#does-the-microsoft-365-e5-developer-subscription-include-the-same-capabilities-that-the-regular-microsoft-365-e5-subscription-includes-). Opening a support ticket in affected organizations won't help.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-InboundConnector [-Name] <String> -SenderDomains <MultiValuedProperty>
 [-AssociatedAcceptedDomains <MultiValuedProperty>]
 [-CloudServicesMailEnabled <Boolean>]
 [-Comment <String>]
 [-Confirm]
 [-ConnectorSource <TenantConnectorSource>]
 [-ConnectorType <TenantConnectorType>]
 [-EFSkipIPs <MultiValuedProperty>]
 [-EFSkipLastIP <Boolean>]
 [-EFSkipMailGateway <MultiValuedProperty>]
 [-EFTestMode <Boolean>]
 [-EFUsers <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-RequireTls <Boolean>]
 [-RestrictDomainsToCertificate <Boolean>]
 [-RestrictDomainsToIPAddresses <Boolean>]
 [-ScanAndDropRecipients <MultiValuedProperty>]
 [-SenderIPAddresses <MultiValuedProperty>]
 [-TlsSenderCertificateName <TlsCertificate>]
 [-TreatMessagesAsInternal <Boolean>]
 [-TrustedOrganizations <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Inbound connectors accept email messages from remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-InboundConnector -Name "Contoso Inbound Connector" -SenderDomains *.contoso.com -SenderIPAddresses 192.168.0.1/25 -RestrictDomainsToIPAddresses $true
```

This example creates the Inbound connector named Contoso Inbound Connector with the following properties:

- It listens for incoming connections from the domain contoso.com and all subdomains.
- It only accepts mail from contoso.com, and from the IP range 192.168.0.1/25. It rejects mail from contoso.com if it originates from any other IP address.

### Example 2
```powershell
New-InboundConnector -Name "Contoso Inbound Secure Connector" -SenderDomains *.contoso.com -SenderIPAddresses 192.168.0.1/25 -RestrictDomainsToIPAddresses $true -RequireTLS $true -TlsSenderCertificateName *.contoso.com
```

This example creates the Inbound connector named Contoso Inbound Secure Connector and requires TLS transmission for all messages.

## PARAMETERS

### -Name
The Name parameter specifies a descriptive name for the connector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomains
The SenderDomains parameter specifies the source domains that the connector accepts messages for. A valid value is an SMTP domain. Wildcards are supported to indicate a domain and all subdomains (for example, \*.contoso.com), but you can't embed the wildcard character (for example, domain.\*.contoso.com is not valid).

You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssociatedAcceptedDomains
The AssociatedAcceptedDomains parameter restricts the source domains that use the connector to the specified accepted domains. A valid value is an SMTP domain that's configured as an accepted domain in your Microsoft 365 organization.

You can specify multiple values separated by commas.

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

### -CloudServicesMailEnabled
**Note**: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see [Hybrid Configuration wizard](https://learn.microsoft.com/exchange/hybrid-configuration-wizard).

The CloudServicesMailEnabled parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft 365. Specifically, this parameter controls how certain internal X-MS-Exchange-Organization-\* message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known as cross-premises headers.

Valid values are:

- $true: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain X-MS-Exchange-Organization-\* headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to X-MS-Exchange-CrossPremises-\* headers and are thereby preserved in messages. X-MS-Exchange-CrossPremises-\* headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to X-MS-Exchange-Organization-\* headers. These promoted headers replace any instances of the same X-MS-Exchange-Organization-\* headers that already exist in messages.
- $false: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.

```yaml
Type: Boolean
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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
The ConnectorSource parameter specifies how the connector is created. Valid input for this parameter includes the following values:

- Default: The connector is manually created. This is the default value.
- HybridWizard: The connector is automatically created by the Hybrid Configuration Wizard.
- Migrated: The connector was originally created in Microsoft Forefront Online Protection for Exchange.

We recommended that you don't change this value.

```yaml
Type: TenantConnectorSource
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
The ConnectorType parameter specifies the category for the source domains that the connector accepts messages for. Valid values are:

- Partner: External partners or services.
- OnPremises: Your on-premises email organization. Use this value for accepted domains in your cloud-based organization that are also specified by the SenderDomains parameter.

```yaml
Type: TenantConnectorType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EFSkipIPs
the EFSkipIPs parameter specifies the source IP addresses to skip in Enhanced Filtering for Connectors when the EFSkipLastIP parameter value is $false. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.3.1/24.

You can specify multiple values separated by commas.

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

### -EFSkipLastIP
The EFSkipIPs parameter specifies the behavior of Enhanced Filtering for Connectors. Valid values are:

- $true: Only the last message source is skipped.
- $false: Skip the source IP addresses specified by the EFSkipIPs parameter. If no IP addresses are specified, Enhanced Filtering for Connectors is disabled on the connector. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EFSkipMailGateway
This parameter is reserved for internal Microsoft use.

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

### -EFTestMode
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EFUsers
The EFUsers parameter specifies the recipients that Enhanced Filtering for Connectors applies to. The default value is blank ($null), which means Enhanced Filtering for Connectors is applied to all recipients.

You can specify multiple recipient email addresses separated by commas.

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

### -Enabled
The Enabled parameter enables or disables the connector. Valid values are:

- $true: The connector is enabled. This is the default value.
- $false: The connector is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireTls
The RequireTLS parameter specifies whether to require TLS transmission for all messages that are received by the connector. Valid values are:

- $true: Reject messages if they aren't sent over TLS. This is the default value
- $false: Allow messages if they aren't sent over TLS.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictDomainsToCertificate
The RestrictDomainsToCertificate parameter specifies whether the Subject value of the TLS certificate is checked before messages can use the connector. Valid values are:

- $true: Mail is allowed to use the connector only if the Subject value of the TLS certificate that the source email server uses to authenticate matches the TlsSenderCertificateName parameter value.
- $false: The Subject value of the TLS certificate that the source email server uses to authenticate doesn't control whether mail from that source uses the connector. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictDomainsToIPAddresses
The RestrictDomainsToIPAddresses parameter specifies whether to reject mail that comes from unknown source IP addresses. Valid values are:

- $true: Automatically reject mail from domains that are specified by the SenderDomains parameter if the source IP address isn't also specified by the SenderIPAddress parameter.
- $false: Don't automatically reject mail from domains that are specified by the SenderDomains parameter based on the source IP address. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScanAndDropRecipients
This parameter is reserved for internal Microsoft use.

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

### -SenderIPAddresses
The SenderIPAddresses parameter specifies the source IPV4 IP addresses that the connector accepts messages from. Valid values are:

- Single IP address: For example, 192.168.1.1.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25. Valid subnet mask values are /24 through /32.

You can specify multiple IP addresses separated by commas.

IPv6 addresses are not supported.

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

### -TlsSenderCertificateName
The TlsSenderCertificateName parameter specifies the TLS certificate that's used when the value of the RequireTls parameter is $true. A valid value is an SMTP domain. Wildcards are supported to indicate a domain and all subdomains (for example, \*.contoso.com), but you can't embed the wildcard character (for example, domain.\*.contoso.com is not valid).

```yaml
Type: TlsCertificate
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatMessagesAsInternal
The TreatMessagesAsInternal parameter specifies an alternative method to identify messages sent from an on-premises organization as internal messages. You should only consider using this parameter when your on-premises organization doesn't use Exchange. Valid values are:

- $true: Messages are considered internal if the sender's domain matches a domain that's configured in Microsoft 365. This setting allows internal mail flow between Microsoft 365 and on-premises organizations that don't have Exchange Server 2010 or later installed. However, this setting has potential security risks (for example, internal messages bypass antispam filtering), so use caution when configuring this setting.
- $false: Messages aren't considered internal. This is the default value.

In hybrid environments, you don't need to use this parameter, because the Hybrid Configuration wizard automatically configures the required settings on the Inbound connector in Microsoft 365 and the Send connector in the on-premises Exchange organization (the CloudServicesMailEnabled parameter).

**Note**: You can't set this parameter to the value $true if either of the following conditions is true:

- The CloudServicesMailEnabled parameter is set to the value $true.
- The ConnectorType parameter value is not OnPremises.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedOrganizations
The TrustedOrganizations parameter specifies other Microsoft 365 organizations that are trusted mail sources (for example, after acquisitions and mergers). You can specify multiple Microsoft 365 organizations separated by commas.

This parameter works only for mail flow between two Microsoft 365 organizations, so no other parameters are used.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
