---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-organizationsegment
applicable: Security & Compliance
title: Get-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-OrganizationSegment cmdlet to view organization segments in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### OrganizationSegmentsDefault (Default)
```
Get-OrganizationSegment [<CommonParameters>]
```

### Identity
```
Get-OrganizationSegment [[-Identity] <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
Segments are defined by using certain [attributes](https://learn.microsoft.com/purview/information-barriers-attributes) in Microsoft Entra ID.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OrganizationSegment | Format-List Name,UserGroupFilter
```

This example returns a summary list of all organization segments.

### Example 2
```powershell
Get-OrganizationSegment -Identity "Engineering Group"
```

This example returns detailed information about the organization segment named Engineering Group.

## PARAMETERS

### -Identity
The Identity parameter specifies the organization segment that you want to view. You can use a value that uniquely identifies the segment. For example:

- Name
- Distinguished name (DN)
- ExchangeObjectId (not the ExoSegmentId)

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes)

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)

[New-InformationBarrierPolicy](https://learn.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
