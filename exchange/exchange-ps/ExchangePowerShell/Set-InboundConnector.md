---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-inboundconnector
schema: 2.0.0
title: Set-InboundConnector
---

# Set-InboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-InboundConnector cmdlet to change an existing Inbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-InboundConnector [-Identity] <InboundConnectorIdParameter>
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
 [-Name <String>]
 [-RequireTls <Boolean>]
 [-RestrictDomainsToCertificate <Boolean>]
 [-RestrictDomainsToIPAddresses <Boolean>]
 [-ScanAndDropRecipients <MultiValuedProperty>]
 [-SenderDomains <MultiValuedProperty>]
 [-SenderIPAddresses <MultiValuedProperty>]
 [-TlsSenderCertificateName <TlsCertificate>]
 [-TreatMessagesAsInternal <Boolean>]
 [-TrustedOrganizations <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Inbound connectors accept email messages from remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-InboundConnector "Contoso Inbound Connector" -RequireTls $true -TlsSenderCertificateName contoso.com
```

This example makes the following configuration changes to the existing Inbound connector named Contoso.com Inbound Connector.

Require TLS transmission for all incoming messages on the connector.

Require that the TLS certificate that is used to encrypt communications contain the domain name contoso.com

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the Inbound connector you want to change.

```yaml
Type: InboundConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AssociatedAcceptedDomains

> Applicable: Exchange Online, Exchange Online Protection

The AssociatedAcceptedDomains parameter restricts the source domains that use the connector to the specified accepted domains. A valid value is an SMTP domain that's configured as an accepted domain in your Microsoft 365 organization.

You can specify multiple values separated by commas.

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

### -CloudServicesMailEnabled

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

The ConnectorSource parameter specifies how the connector is created. Valid input for this parameter includes the following values:

- Default: The connector is manually created. This value is the default.
- HybridWizard: The connector is automatically created by the Hybrid Configuration Wizard.
- Migrated: The connector was originally created in Microsoft Forefront Online Protection for Exchange.

We recommended that you don't change this value.

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

> Applicable: Exchange Online, Exchange Online Protection

The ConnectorType parameter specifies a category for the domains that are serviced by the connector. Valid input for this parameter includes the following values:

- Partner: The connector services domains that are external to your organization.
- OnPremises: The connector services domains that are used by your on-premises organization. OnPremises connectors grant special rights to an email that matches the connector and additional requirements. For example: allowing relay through the tenant to internet destinations, promoting emails from on-premises or other environments as internal (in a hybrid configuration), or enabling other more complex mail flows.

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

### -EFSkipIPs

> Applicable: Exchange Online, Exchange Online Protection

the EFSkipIPs parameter specifies the source IP addresses to skip in Enhanced Filtering for Connectors when the EFSkipLastIP parameter value is $false. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.3.1/24.

You can specify multiple values separated by commas.

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

### -EFSkipLastIP

> Applicable: Exchange Online, Exchange Online Protection

The EFSkipIPs parameter specifies the behavior of Enhanced Filtering for Connectors. Valid values are:

- $true: Only the last message source is skipped.
- $false: Skip the source IP addresses specified by the EFSkipIPs parameter. If no IP addresses are specified, Enhanced Filtering for Connectors is disabled on the connector. This value is the default.

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

### -EFSkipMailGateway

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -EFTestMode

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -EFUsers

> Applicable: Exchange Online, Exchange Online Protection

The EFUsers parameter specifies the recipients that Enhanced Filtering for Connectors applies to. The default value is blank ($null), which means Enhanced Filtering for Connectors is applied to all recipients.

You can specify multiple recipient email addresses separated by commas.

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

### -Enabled

> Applicable: Exchange Online, Exchange Online Protection

The Enabled parameter enables or disables the connector. Valid values are:

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

### -Name

> Applicable: Exchange Online, Exchange Online Protection

The Name parameter specifies a descriptive name for the connector.

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

### -RequireTls

> Applicable: Exchange Online, Exchange Online Protection

The RequireTLS parameter specifies whether to require TLS transmission for all messages that are received by a Partner type connector. Valid values are:

- $true: Reject messages if they aren't sent over TLS. This value is the default
- $false: Allow messages if they aren't sent over TLS.

**Note**: This parameter applies only to Partner type connectors.

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

### -RestrictDomainsToCertificate

> Applicable: Exchange Online, Exchange Online Protection

The RestrictDomainsToCertificate parameter specifies whether the Subject value of the TLS certificate is checked before messages can use the Partner type connector. Valid values are:

- $true: Mail is allowed to use the connector only if the Subject value of the TLS certificate that the source email server uses to authenticate matches the TlsSenderCertificateName parameter value.
- $false: The Subject value of the TLS certificate that the source email server uses to authenticate doesn't control whether mail from that source uses the connector. This value is the default.

**Note**: This parameter applies only to Partner type connectors.

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

### -RestrictDomainsToIPAddresses

> Applicable: Exchange Online, Exchange Online Protection

The RestrictDomainsToIPAddresses parameter specifies whether to reject mail that comes from unknown source IP addresses for Partner type connectors. Valid values are:

- $true: Automatically reject mail from domains that are specified by the SenderDomains parameter if the source IP address isn't also specified by the SenderIPAddress parameter.
- $false: Don't automatically reject mail from domains that are specified by the SenderDomains parameter based on the source IP address. This value is the default.

**Note**: This parameter applies only to Partner type connectors.

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

### -ScanAndDropRecipients

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -SenderDomains

> Applicable: Exchange Online, Exchange Online Protection

The SenderDomains parameter specifies the source domains that a Partner type connector accepts messages for (limits the scope of a Partner type connector). A valid value is an SMTP domain. Wildcards are supported to indicate a domain and all subdomains (for example, `*.contoso.com`). However, you can't embed the wildcard character (for example, `domain.*.contoso.com` isn't valid).

You can specify multiple domains separated by commas.

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

### -SenderIPAddresses

> Applicable: Exchange Online, Exchange Online Protection

The SenderIPAddresses parameter specifies the source IPV4 IP addresses that the Partner type connector accepts messages from when the value of the RestrictDomainsToIPAddresses parameter is $true. Valid values are:

- Single IP address: For example, 192.168.1.1.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25. Valid subnet mask values are /24 through /32.
@@ -435,6 +441,8 @@ You can specify multiple IP addresses separated by commas.

IPv6 addresses are not supported.

**Note**: This parameter applies to Partner type connectors only if the value of the RestrictDomainsToIPAddresses parameter is $true.

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

### -TlsSenderCertificateName

> Applicable: Exchange Online, Exchange Online Protection

The TlsSenderCertificateName parameter specifies the TLS certificate that's used when the value of the RequireTls parameter is $true. A valid value is an SMTP domain. Wildcards are supported to indicate a domain and all subdomains (for example, \*.contoso.com), but you can't embed the wildcard character (for example, domain.\*.contoso.com is not valid).

```yaml
Type: TlsCertificate
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatMessagesAsInternal

> Applicable: Exchange Online, Exchange Online Protection

The TreatMessagesAsInternal parameter specifies an alternative method to identify messages sent from an on-premises organization as internal messages. You should only consider using this parameter when your on-premises organization doesn't use Exchange. Valid values are:

- $true: Messages are considered internal if the sender's domain matches a domain that's configured in Microsoft 365. This setting allows internal mail flow between Microsoft 365 and on-premises organizations that don't have Exchange Server 2010 or later installed. However, this setting has potential security risks (for example, internal messages bypass antispam filtering), so use caution when configuring this setting.
- $false: Messages aren't considered internal. This value is the default.

In hybrid environments, you don't need to use this parameter, because the Hybrid Configuration wizard automatically configures the required settings on the Inbound connector in Microsoft 365 and the Send connector in the on-premises Exchange organization (the CloudServicesMailEnabled parameter).

**Note**: You can't set this parameter to the value $true if either of the following conditions is true:

- The CloudServicesMailEnabled parameter is set to the value $true.
- The ConnectorType parameter value is not OnPremises.

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

### -TrustedOrganizations

> Applicable: Exchange Online, Exchange Online Protection

The TrustedOrganizations parameter specifies other Microsoft 365 organizations that are trusted mail sources (for example, after acquisitions and mergers). This parameter works only for mail flow between two Microsoft 365 organizations, so no other parameters are used.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -WhatIf

> Applicable: Exchange Online, Exchange Online Protection

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
