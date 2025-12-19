---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-onpremisesorganization
schema: 2.0.0
title: New-OnPremisesOrganization
---

# New-OnPremisesOrganization

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-OnPremisesOrganization cmdlet to create an OnPremisesOrganization object in a Microsoft 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-OnPremisesOrganization [-Name] <String> -HybridDomains <MultiValuedProperty> -InboundConnector <InboundConnectorIdParameter> -OrganizationGuid <Guid> -OutboundConnector <OutboundConnectorIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-OrganizationName <String>]
 [-OrganizationRelationship <OrganizationRelationshipIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The OnPremisesOrganization object represents an on-premises Microsoft Exchange organization configured for hybrid deployment with a Microsoft 365 organization. It's used with the Hybrid Configuration wizard and is typically created automatically when the hybrid deployment is initially configured by the wizard. Manual modification of this object might result in hybrid deployment misconfiguration; therefore, we strongly recommend that you use the Hybrid Configuration wizard to update this object in the Microsoft 365 organization.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-OnPremisesOrganization -Name "ExchangeMail" -OrganizationGuid "a1bc23cb-3456-bcde-abcd-feb363cacc88" -HybridDomains contoso.com, sales.contoso.com -InboundConnector "Inbound to ExchangeMail" -OutboundConnector "Outbound to ExchangeMail"
```

This example creates the OnPremisesOrganization object ExchangeMail in a Microsoft 365 organization for the hybrid domains contoso.com and sales.contoso.com.

## PARAMETERS

### -Name

> Applicable: Exchange Online, Exchange Online Protection

The Name parameter specifies a friendly name for the on-premises Exchange organization object in the Microsoft 365 organization.

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

### -HybridDomains

> Applicable: Exchange Online, Exchange Online Protection

The HybridDomains parameter specifies the domains that are configured in the hybrid deployment between a Microsoft 365 organization and an on-premises Exchange organization. The domains specified in this parameter must match the domains listed in the HybridConfiguration object for the on-premises Exchange organization configured by the Hybrid Configuration wizard. Multiple domains might be listed and must be separated by a comma, for example, "contoso.com, sales.contoso.com".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundConnector

> Applicable: Exchange Online, Exchange Online Protection

The InboundConnector parameter specifies the name of the inbound connector configured in Microsoft 365 for a hybrid deployment configured with an on-premises Exchange organization.

```yaml
Type: InboundConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationGuid

> Applicable: Exchange Online, Exchange Online Protection

The OrganizationGuid parameter specifies the globally unique identifier (GUID) of the on-premises Exchange organization object in the Microsoft 365 organization.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundConnector

> Applicable: Exchange Online, Exchange Online Protection

The OutboundConnector parameter specifies the name of the outbound connector configured in Microsoft 365 for a hybrid deployment with an on-premises Exchange organization.

```yaml
Type: OutboundConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: True
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

### -OrganizationName

> Applicable: Exchange Online, Exchange Online Protection

The OrganizationName parameter specifies the Active Directory object name of the on-premises Exchange organization.

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

### -OrganizationRelationship

> Applicable: Exchange Online, Exchange Online Protection

The OrganizationRelationship parameter specifies the organization relationship configured by the Hybrid Configuration wizard on the Microsoft 365 organization as part of a hybrid deployment with an on-premises Exchange organization. This organization relationship defines the federated sharing features enabled on the Microsoft 365 organization.

```yaml
Type: OrganizationRelationshipIdParameter
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
