---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-jitconfiguration
schema: 2.0.0
title: Get-JitConfiguration
---

# Get-JitConfiguration

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-JitConfiguration cmdlet to view the Just-in-time (JIT) configuration in the organization. For more information about JIT, see [Just-in-time protection](https://learn.microsoft.com/purview/endpoint-dlp-learn-about#just-in-time-protection-preview).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-JitConfiguration [[-Identity] <PolicyIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-JitConfiguration
```

This example returns the JIT configuration in your organization.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the JIT configuration that you want to view. There's only one JIT configuration named "Jit" in the organization.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Organization

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

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
