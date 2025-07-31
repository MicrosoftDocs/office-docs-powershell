---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-informationbarrierpoliciesapplicationstatus
schema: 2.0.0
title: Get-InformationBarrierPoliciesApplicationStatus
---

# Get-InformationBarrierPoliciesApplicationStatus

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-InformationBarrierPoliciesApplicationStatus cmdlet to view the application status of information barrier policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-InformationBarrierPoliciesApplicationStatus [-All]
 [<CommonParameters>]
```

### Identity
```
Get-InformationBarrierPoliciesApplicationStatus [[-Identity] <PolicyIdParameter>]
 [-All]
 [<CommonParameters>]
```

## DESCRIPTION
 For more information, see [View status of information barrier policy application](https://learn.microsoft.com/purview/information-barriers-policies#view-status-of-user-accounts-segments-policies-or-policy-application).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-InformationBarrierPoliciesApplicationStatus
```

This example returns the most recent application of information barrier policies by the Start-InformationBarrierPoliciesApplication cmdlet.

### Example 2
```powershell
Get-InformationBarrierPoliciesApplicationStatus -All
```

This example returns all applications of information barrier policies by the Start-InformationBarrierPoliciesApplication cmdlet.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the information barrier policy application that you want to view. This value is a GUID that's displayed when you run the Start-InformationBarrierPoliciesApplication cmdlet (for example, a0551cee-db3d-4002-9fa0-94358035fdf2). You can also find the Identity value by running the command Get-InformationBarrierPoliciesApplicationStatus -All.

```yaml
Type: PolicyIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -All

> Applicable: Security & Compliance

The All switch specifies whether to include all applications of information barrier policies in the results. You don't need to specify a value with this switch.

If you don't use this switch, the command only returns the most recent policy application.

```yaml
Type: SwitchParameter
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

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)
