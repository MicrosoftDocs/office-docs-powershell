---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-InboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-InboundConnector cmdlet to change an existing Inbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-InboundConnector [-Identity] <InboundConnectorIdParameter>
 [-AssociatedAcceptedDomains <MultiValuedProperty>] [-CloudServicesMailEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectorSource <Default | Migrated | HybridWizard | AdminUI>]
 [-ConnectorType <OnPremises | Partner>] [-Enabled <$true | $false>] [-Name <String>]
 [-RequireTls <$true | $false>] [-RestrictDomainsToCertificate <$true | $false>]
 [-RestrictDomainsToIPAddresses <$true | $false>] [-SenderDomains <MultiValuedProperty>]
 [-SenderIPAddresses <MultiValuedProperty>] [-TlsSenderCertificateName <TlsCertificate>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Inbound connectors accept email messages from remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-InboundConnector "Contoso Inbound Connector" -RequireTls $true -TlsSenderCertificateName contoso.com
```

This example makes the following configuration changes to the existing Inbound connector named Contoso.com Inbound Connector.


Require TLS transmission for all incoming messages on the connector.

Require that the TLS certificate that is used to encrypt communications contain the domain name contoso.com

## PARAMETERS

### -Identity
The Identity parameter specifies the Inbound connector you want to change.

```yaml
Type: InboundConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AssociatedAcceptedDomains
The AssociatedAcceptedDomains parameter specifies the accepted domains that the connector applies to, thereby limiting its scope. For example, you can apply the connector to a specific accepted domain in your organization, such as contoso.com.

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

> [!NOTE]  
> We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see Hybrid Configuration wizard (https://technet.microsoft.com/library/hh529921.aspx).

The CloudServicesMailEnabled parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft Office 365. Specifically, this parameter controls how certain internal X-MS-Exchange-Organization-\* message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known as cross-premises headers.

Valid values are:

- $true: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain X-MS-Exchange-Organization-\* headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to X-MS-Exchange-CrossPremises-\* headers and are thereby preserved in messages. X-MS-Exchange-CrossPremises-\* headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to X-MS-Exchange-Organization-\* headers. These promoted headers replace any instances of the same X-MS-Exchange-Organization-\* headers that already exist in messages.

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorSource
The ConnectorSource parameter specifies how the connector was created. Valid input for this parameter includes the following values:

- Default: The connector is manually created.

- HybridWizard: The connector is created automatically by the Hybrid Configuration Wizard.

- Migrated: The connector was originally created in Microsoft Forefront Online Protection for Exchange.

The default value for connectors you create is Default. It isn't recommended that you change this value.

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
The ConnectorType parameter specifies a category for the domains that are serviced by the connector. Valid input for this parameter includes the following values:

- Partner: The connector services domains that are external to your organization.

- OnPremises: The connector services domains that are used by your on-premises organization. Use this value for accepted domains in your cloud-based organization that are also specified by the SenderDomains parameter.

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
The Enabled parameter enables or disables the connector. Valid input for this parameter is $true or $false. The default value is $true.

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

### -Name
The Name parameter specifies a descriptive name for the connector.

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

### -RequireTls
The RequireTLS parameter specifies that all messages received by this connector require TLS transmission. Valid values for this parameter are $true or $false. The default value is $false. When the RequireTLS parameter is set to $true, all messages received by this connector require TLS transmission.

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

### -RestrictDomainsToCertificate
The RestrictDomainsToCertificate parameter, when set to $true, causes the connector to reject mail that originates from a namespace not specified by the TlsSenderCertificateName parameter.

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

### -RestrictDomainsToIPAddresses
The RestrictDomainsToIPAddresses parameter, when set to $true, automatically rejects mail from the domains specified by the SenderDomains parameter if the mail originates from an IP address that isn't specified by the SenderIPAddresses parameter.

Valid input for this parameter is $true or $false. The default value is $false.

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

### -SenderDomains
The SenderDomains parameter specifies the remote domains from which this connector accepts messages, thereby limiting its scope. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: \*.contoso.com. However, you can't embed a wildcard character, as shown in the following example: domain.\*.contoso.com.

You can specify multiple domains separated by commas.

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
The SenderIPAddresses parameter specifies the remote IP addresses from which this connector accepts messages. You enter the IP addresses using the following syntax:

- Single IP: For example, 192.168.1.1.

- CIDR IP: You can use Classless InterDomain Routing (CIDR). For example, 192.168.0.1/25.

You can specify multiple IP addresses separated by commas.

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
The TlsSenderCertificateName parameter specifies the certificate used by the sender's domain when the RequireTls parameter is set to $true. Valid input for the TlsSenderCertificateName parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: \*.contoso.com.

You can't embed a wildcard character, as shown in the following example: domain.\*.contoso.com.

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

- $true: Messages are considered internal if the sender's domain matches a domain that's configured in Office 365. This setting allows internal mail flow between Office 365 and on-premises organizations that don't have Exchange Server 2010 or later installed. However, this setting has potential security risks (for example, internal messages bypass antispam filtering), so use caution when configuring this setting.

- $false: Messages aren't considered internal. This is the default value.

In hybrid environments, you don't need to use this parameter, because the Hybrid Configuration wizard automatically configures the required settings on the Inbound connector in Office 365 and the Send connector in the on-premises Exchange organization (the CloudServicesMailEnabled parameter).

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/6d21f091-def4-49a8-ab44-d36b9a12499d.aspx)
