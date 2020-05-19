---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-informationbarrierpoliciesapplicationstatus
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierPoliciesApplicationStatus
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierPoliciesApplicationStatus

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-InformationBarrierPoliciesApplicationStatus cmdlet to view the application status of information barrier policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-InformationBarrierPoliciesApplicationStatus [-All] [<CommonParameters>]
```

### Identity
```
Get-InformationBarrierPoliciesApplicationStatus [[-Identity] <PolicyIdParameter>] [-All] [<CommonParameters>]
```

## DESCRIPTION
 For more information, see [View status of information barrier policy application](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies#view-status-of-user-accounts-segments-policies-or-policy-application).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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
The Identity parameter specifies the information barrier policy application that you want to view. This value is a GUID that's displayed when you run the Start-InformationBarrierPoliciesApplication cmdlet (for example, a0551cee-db3d-4002-9fa0-94358035fdf2). You can also find the Identity value by running the command Get-InformationBarrierPoliciesApplicationStatus -All.

```yaml
Type: PolicyIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -All
The All switch specifies whether to include all applications of information barrier policies in the results. You don't need to specify a value with this switch.

If you don't use this switch, the command only returns the most recent policy application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Define policies for information barriers](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies)
