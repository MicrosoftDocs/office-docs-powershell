---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-FederationTrust
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-FederationTrust

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-FederationTrust cmdlet to modify an existing federation trust.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Set-FederationTrust [-Identity] <FederationTrustIdParameter> -ApplicationUri <String> [-Confirm]
 [-DomainController <Fqdn>] [-Name <String>] [-WhatIf] [-PublishFederationCertificate] [<CommonParameters>]
```

### Set2
```
Set-FederationTrust [-Identity] <FederationTrustIdParameter> [-PublishFederationCertificate] [-Confirm]
 [-DomainController <Fqdn>] [-Name <String>] [-WhatIf] -ApplicationUri <String> [<CommonParameters>]
```

### Set1
```
Set-FederationTrust [-Identity] <FederationTrustIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-MetadataUrl <Uri>] [-Name <String>] [-RefreshMetadata] [-Thumbprint <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can use the Set-FederationTrust cmdlet to manage the certificates used for the federation trust. You can also use the Set-FederationTrust cmdlet to refresh the metadata document from the Microsoft Federation Gateway and download its certificate.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-FederationTrust -Identity "Microsoft Federation Gateway" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

This example configures the federation trust Microsoft Federation Gateway to use the certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17 as the next certificate.

### -------------------------- Example 2 --------------------------
```
Set-FederationTrust -Identity "Microsoft Federation Gateway" -PublishFederationCertificate
```

This example configures the federation trust Microsoft Federation Gateway to use the next certificate as the current certificate.

Before you configure a federation trust to use the next certificate as the current certificate, you need to use the Test-FederationTrust cmdlet to verify that the certificate is available on all Exchange servers.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the federation trust being modified.

```yaml
Type: FederationTrustIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApplicationUri
The ApplicationUri parameter specifies the primary domain used for the federation organization identifier.

```yaml
Type: String
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishFederationCertificate
The PublishFederationCertificate switch specifies the next certificate as the current certificate for the federation trust and publishes it to the Microsoft Federation Gateway. You don't need to specify a value with this switch.

The certificate is used to encrypt tokens with the Microsoft Federation Gateway.

Before setting the next certificate to be used as the current certificate, ensure that the certificate is deployed on all Exchange servers. Use the Test-FederationCertificate cmdlet to check the deployment status of the certificate.

```yaml
Type: SwitchParameter
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -MetadataUrl
The MetadataUrl parameter specifies the URL where WS-FederationMetadata is published by the Microsoft Federation Gateway.

```yaml
Type: Uri
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the federation trust.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshMetadata
The RefreshMetadata switch specifies that the metadata document and certificate is retrieved again from the Microsoft Federation Gateway.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Thumbprint
The Thumbprint parameter specifies the thumbprint of the X.509 certificate to be configured as the next certificate for the federation trust. After the certificate is deployed on all Exchange servers in the organization, you can use the PublishFederationCertificate switch to configure the trust to use this certificate.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/67b2ab23-e868-448f-b5c6-f73c2136223c.aspx)
