---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
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
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-OrganizationSegment cmdlet to view organization segments in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

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
Segments are defined by using certain [attributes](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes) in Azure Active Directory.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-OrganizationSegment | Format-List Name,UserGroupFilter
```

This example returns a summary list of all organization segments.

### -------------------------- Example 2 --------------------------
```
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-organizationsegment)

[Attributes for information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)

[New-InformationBarrierPolicy](New-InformationBarrierPolicy.md)
