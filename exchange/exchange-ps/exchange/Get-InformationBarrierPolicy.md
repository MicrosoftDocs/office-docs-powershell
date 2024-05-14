---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-informationbarrierpolicy
applicable: Security & Compliance
title: Get-InformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-InformationBarrierPolicy cmdlet to view information barrier policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### InformationBarrierDefault (Default)
```
Get-InformationBarrierPolicy [-ExoPolicyId <Guid>]
 [<CommonParameters>]
```

### Identity
```
Get-InformationBarrierPolicy [[-Identity] <PolicyIdParameter>]
 [-ExoPolicyId <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
For more information, see [Information barrier policies](https://learn.microsoft.com/purview/information-barriers-policies).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-InformationBarrierPolicy | Format-Table Name,State,AssignedSegment,Segments* -Auto
```

This example displays a summary list of all information barrier policies.

### Example 2
```powershell
Get-InformationBarrierPolicy -Identity HR-Sales
```

This example displays detailed information for the information barrier policy named HR-Sales.

## PARAMETERS

### -Identity
The Identity parameter specifies the information barrier policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the ExOPolicyId parameter.

```yaml
Type: PolicyIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ExoPolicyId
The ExOPolicyId parameter specifies the information barrier policy that you want to view, but using the GUID part of the ExoPolicyId property value from the output of the Get-InformationBarrierRecipientStatus cmdlet.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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

[New-InformationBarrierPolicy](https://learn.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
