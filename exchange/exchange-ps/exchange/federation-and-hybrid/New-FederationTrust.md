---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: New-FederationTrust
schema: 2.0.0
---

# New-FederationTrust

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-FederationTrust cmdlet to set up a federation trust between your Exchange organization and the Microsoft Federation Gateway.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-FederationTrust [-Name] <String> -ApplicationUri <String> [-SkipNamespaceProviderProvisioning]
 -Thumbprint <String> [-AdministratorProvisioningId <String>] [-ApplicationIdentifier <String>] [-Confirm]
 [-DomainController <Fqdn>] [-MetadataUrl <Uri>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-FederationTrust [-Name] <String> -Thumbprint <String> [-Confirm] [-DomainController <Fqdn>]
 [-MetadataUrl <Uri>] [-SuppressDnsWarning] [-UseLegacyProvisioningService] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Federation trusts are trusts created between an Exchange organization and the Microsoft Federation Gateway. A federation trust is required to configure a federated organization identifier for federated sharing.

For more information, see Federation (https://technet.microsoft.com/library/dd335047.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example1
```
New-FederationTrust -Name "Microsoft Federation Gateway" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

This example creates the federation trust Microsoft Federation Gateway with a certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17.

## PARAMETERS

### -Name
The Name parameter specifies a friendly name for the federation trust.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationUri
The ApplicationUri parameter specifies the primary domain used for the federated organization identifier.

If you specify the ApplicationUri parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the AdministratorProvisioningId and ApplicationIdentifier parameters.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipNamespaceProviderProvisioning
The SkipNamespaceProviderProvisioning switch specifies that the trust and federated organization identifier are provisioned externally without using federation functionality in Microsoft Exchange.

If you use this switch, you must specify the ApplicationIdentifier, ApplicationUri and AdministratorProvisioningId parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Thumbprint
The Thumbprint parameter specifies the thumbprint of a certificate issued by a public certification authority (CA) trusted by the Microsoft Federation Gateway. For more details, see Federation (https://technet.microsoft.com/library/dd335047.aspx).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdministratorProvisioningId
The AdministratorProvisioningId parameter specifies the provisioning key returned by the Microsoft Federation Gateway when an organization has already registered a SiteID or ApplicationID.

If you specify the AdministratorProvisioningId parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the ApplicationIdentifier and ApplicationUri parameters.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationIdentifier
The ApplicationIdentifier parameter specifies the SiteID or ApplicationID when an organization has already registered a SiteID or ApplicationID.

If you specify the ApplicationIdentifier parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the AdministratorProvisioningId and ApplicationUri parameters.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressDnsWarning
The SuppressDNSWarning parameter specifies whether to display the DNS warning message for creating TXT records in your public DNS when running the New-FederationTrust cmdlet. Valid values are $true or $false. The default value is $false. However, this parameter is automatically set to $true when used by the Hybrid Configuration wizard. It's not recommended that you use this parameter when using the New-FederationTrust cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLegacyProvisioningService
The UseLegacyProvisioningService parameter specifies if the legacy interface on the Microsoft Federation Gateway will be used for managing the federation trust, including federated domains, certificates, and federation metadata. Valid input for this parameter is $true or $false. The default value is $false. When using a self-signed certificate for configuring a federation trust with the Microsoft Federation Gateway, the trust needs to be created with the parameter set to $true. After the federation trust is created, this behavior can't be changed and requires the deletion and re-creation of the federation trust. We recommend you always use the default value of $false.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/ab3bb2d0-c346-480d-93b2-be563aebc261.aspx)
