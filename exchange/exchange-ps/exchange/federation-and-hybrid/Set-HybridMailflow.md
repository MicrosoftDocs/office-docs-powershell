---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Set-HybridMailflow
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-HybridMailflow

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-HybridMailflow cmdlet to configure the message transport settings for the Microsoft Exchange Online Protection (EOP) service in a hybrid deployment.

The Set-HybridMailflow cmdlet is only used to support hybrid deployments configured with the Hybrid Configuration wizard offered in Microsoft Exchange Server 2010 Service Pack 2 (SP2).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-HybridMailflow [-CentralizedTransportEnabled <$true | $false>] [-CertificateSubject <String>] [-Confirm]
 [-InboundIPs <IPRange[]>] [-OnPremisesFQDN <Fqdn>] [-OutboundDomains <SmtpDomainWithSubdomains[]>]
 [-SecureMailEnabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-HybridMailflow cmdlet supports the configuration of message transport settings for hybrid deployments created with the Hybrid Configuration wizard offered in Exchange 2010 SP2. This cmdlet isn't typically used by administrators; therefore, we strongly recommend that it only be used as part of the hybrid configuration process using the Hybrid Configuration wizard.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-HybridMailflow
```

This example configures the message transport settings in the EOP service for a hybrid deployment.

## PARAMETERS

### -CentralizedTransportEnabled
The CentralizedTransportEnabled parameter specifies that the Exchange Online organization routes all outbound mail messages to external recipients to the on-premises Exchange organization. The on-premises Exchange organization then routes the messages to the external recipients. The valid input for the CentralizedTransportEnabled parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CertificateSubject
The CertificateSubject parameter specifies the principal name of the certificate used for secure mail flow between the on-premises Exchange and Exchange Online organizations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundIPs
The InboundIPs parameter specifies the IP addresses of the on-premises mail transport servers configured as part of the hybrid deployment. These must point to either Exchange 2010 SP2 Hub Transport or Edge Transport servers.

```yaml
Type: IPRange[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -OnPremisesFQDN
The OnPremisesFQDN parameter specifies the fully qualified domain name (FQDN) of the outbound smart host in the on-premises Exchange organization to use for centralized transport. This is either an on-premises Exchange 2010 SP2 Hub Transport or Edge Transport server.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -OutboundDomains
The OutboundDomains parameter specifies SMTP domains configured for the hybrid deployment.

```yaml
Type: SmtpDomainWithSubdomains[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecureMailEnabled
The SecureMailEnabled parameter specifies that all messages sent between the on-premises Exchange and the Exchange Online organizations must use the Transport Layer Security (TLS) protocol and the assigned digital certificate. The valid input for the SecureMailEnabled parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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

[Online Version](https://technet.microsoft.com/library/69d01866-50ff-4ddf-9e7c-d448ff24da69.aspx)
