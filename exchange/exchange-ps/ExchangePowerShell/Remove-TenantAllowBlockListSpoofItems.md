---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/remove-tenantallowblocklistspoofitems
schema: 2.0.0
title: Remove-TenantAllowBlockListSpoofItems
---

# Remove-TenantAllowBlockListSpoofItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-TenantAllowBlockListSpoofItems cmdlet to remove spoofed sender entries from the Tenant Allow/Block List.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-TenantAllowBlockListSpoofItems [-Identity] <HostedConnectionFilterPolicyIdParameter> -Ids <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes spoof pairs (the combination of the spoofed user and the sending infrastructure) from the Tenant Allow/Block List.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-TenantAllowBlockListSpoofItems -Identity domain.com\Default -Ids 375e76f1-eefb-1626-c8bc-5efefd057488,f8cb0908-8533-1156-ce7b-9aebd685b0eb
```

This example removes the specified spoofed sender. You get the Ids parameter value from the Identity property in the output of Get-TenantAllowBlockListSpoofItems command.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Use the value `domain.com\Default` for this parameter. The spoofed sender that you want to remove is really identified by the Ids parameter.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Ids

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Ids parameter specifies the spoof pair that you want to remove. A valid value for this parameter is the Identity property value from the output of the Get-TenantAllowBlockListSpoofItems cmdlet. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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

### -WhatIf

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

## OUTPUTS

## NOTES

## RELATED LINKS
