---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-organizationsegment
applicable: Office 365 Security & Compliance Center
title: Get-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-OrganizationSegment cmdlet to view organization segments in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### OrganizationSegmentsDefault (Default)
```
Get-OrganizationSegment [<CommonParameters>]
```

### Identity
```
Get-OrganizationSegment [[-Identity] <PolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Segments are defined by using certain [attributes](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes) in Azure Active Directory.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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
The Identity parameter specifies the organization segment that you want to view. You can use any value that uniquely identifies the segment. For example:

- Name

- Distinguished name (DN)

- GUID

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Attributes for information barrier policies](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies)

[New-InformationBarrierPolicy](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/new-informationbarrierpolicy)
