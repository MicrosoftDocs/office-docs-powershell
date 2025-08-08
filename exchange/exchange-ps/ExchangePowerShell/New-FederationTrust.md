---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-federationtrust
schema: 2.0.0
title: New-FederationTrust
---

# New-FederationTrust

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-FederationTrust cmdlet to set up a federation trust between your Exchange organization and the Microsoft Federation Gateway.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### SkipNamespaceProviderProvisioning
```
New-FederationTrust [-Name] <String> -Thumbprint <String> -ApplicationUri <String>
 [-SkipNamespaceProviderProvisioning]
 [-AdministratorProvisioningId <String>]
 [-ApplicationIdentifier <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MetadataUrl <Uri>]
 [-WhatIf]
 [<CommonParameters>]
```

### FederationTrust
```
New-FederationTrust [-Name] <String> -Thumbprint <String>
 [-SuppressDnsWarning]
 [-UseLegacyProvisioningService]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MetadataUrl <Uri>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Federation trusts are trusts created between an Exchange organization and the Microsoft Federation Gateway. A federation trust is required to configure a federated organization identifier for federated sharing.

For more information, see [Federation](https://learn.microsoft.com/exchange/federation-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-FederationTrust -Name "Microsoft Federation Gateway" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

This example creates the federation trust Microsoft Federation Gateway with a certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Name parameter specifies a friendly name for the federation trust.

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

### -ApplicationUri

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ApplicationUri parameter specifies the primary domain used for the federated organization identifier.

If you specify the ApplicationUri parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the AdministratorProvisioningId and ApplicationIdentifier parameters.

```yaml
Type: String
Parameter Sets: SkipNamespaceProviderProvisioning
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipNamespaceProviderProvisioning

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipNamespaceProviderProvisioning switch specifies that the trust and federated organization identifier are provisioned externally without using federation functionality in Microsoft Exchange. You don't need to specify a value with this switch.

If you use this switch, you must specify the ApplicationIdentifier, ApplicationUri and AdministratorProvisioningId parameters.

```yaml
Type: SwitchParameter
Parameter Sets: SkipNamespaceProviderProvisioning
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Thumbprint

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Thumbprint parameter specifies the thumbprint of a certificate issued by a public certification authority (CA) trusted by the Microsoft Federation Gateway. For more details, see [Federation](https://learn.microsoft.com/exchange/federation-exchange-2013-help).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdministratorProvisioningId

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AdministratorProvisioningId parameter specifies the provisioning key returned by the Microsoft Federation Gateway when an organization has already registered a SiteID or ApplicationID.

If you specify the AdministratorProvisioningId parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the ApplicationIdentifier and ApplicationUri parameters.

```yaml
Type: String
Parameter Sets: SkipNamespaceProviderProvisioning
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationIdentifier

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ApplicationIdentifier parameter specifies the SiteID or ApplicationID when an organization has already registered a SiteID or ApplicationID.

If you specify the ApplicationIdentifier parameter, you must use the SkipNamespaceProviderProvisioning switch and also specify the AdministratorProvisioningId and ApplicationUri parameters.

```yaml
Type: String
Parameter Sets: SkipNamespaceProviderProvisioning
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetadataUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MetadataUrl parameter specifies the URL where WS-FederationMetadata is published by the Microsoft Federation Gateway.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressDnsWarning

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The SuppressDNSWarning switch specifies whether to display the DNS warning message for creating TXT records in your public DNS when running the New-FederationTrust cmdlet. You don't need to specify a value with this switch.

This switch is used automatically by the Hybrid Configuration wizard. We don't recommend manually using this switch.

```yaml
Type: SwitchParameter
Parameter Sets: FederationTrust
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLegacyProvisioningService

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The UseLegacyProvisioningService switch specifies that the legacy interface on the Microsoft Federation Gateway is used for managing the federation trust, including federated domains, certificates, and federation metadata. You don't need to specify a value with this switch.

When using a self-signed certificate for configuring a federation trust with the Microsoft Federation Gateway, the trust needs to be created using this switch. After the federation trust is created, this behavior can't be changed and requires the deletion and re-creation of the federation trust.

```yaml
Type: SwitchParameter
Parameter Sets: FederationTrust
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
