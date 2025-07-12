---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-tenantallowblocklistspoofitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: Set-TenantAllowBlockListSpoofItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-TenantAllowBlockListSpoofItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-TenantAllowBlockListSpoofItems cmdlet to modify spoofed sender entries in the Tenant Allow/Block List.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-TenantAllowBlockListSpoofItems [-Identity] <HostedConnectionFilterPolicyIdParameter> -Action <String> -Ids <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows or blocks spoof pairs (the combination of the spoofed user and the sending infrastructure) in the Tenant Allow/Block List.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-TenantAllowBlockListSpoofItems | Format-Table SpoofedUser,SendingInfrastructure,SpoofType,Action,Identity

Set-TenantAllowBlockListSpoofItems -Identity Default -Action Block -Ids 375e76f1-eefb-1626-c8bc-5efefd057488,f8cb0908-8533-1156-ce7b-9aebd685b0eb
```

This example bocks the specified spoof pairs. You get the Ids parameter values from the output of Get-TenantAllowBlockListSpoofItems command (the Identity property).

### Example 2
```powershell
(Get-TenantAllowBlockListSpoofItems -SpoofType External | Select-Object -Property Identity).Identity | Remove-TenantAllowBlockListSpoofItems -Identity Default
```

This example removes all external spoof pairs from the Tenant Allow/Block List.

## PARAMETERS

### -Identity
The Identity parameter uses the value Default.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Action
The Action parameter specifies whether this entry is an allow or block spoofed sender entry. Valid values are:

- Allow
- Block

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
The Ids parameter specifies the spoof pair that you want to modify. A valid value is the Identity property value from the output of the Get-TenantAllowBlockListSpoofItems cmdlet. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
