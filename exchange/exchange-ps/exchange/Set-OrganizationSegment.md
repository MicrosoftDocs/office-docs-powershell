---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-organizationsegment
applicable: Office 365 Security & Compliance Center
title: Set-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc-powershell).

Use the Set-OrganizationSegment cmdlet to modify organization segments in the Office 365 Security & Compliance Center. Organization Segments are not in effect until you [apply information barrier policies](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies#part-3-apply-information-barrier-policies).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OrganizationSegment [-Identity] <PolicyIdParameter> [-UserGroupFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
Segments are defined by using certain [attributes](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes) in Azure Active Directory.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Set-OrganizationSegment -Identity c96e0837-c232-4a8a-841e-ef45787d8fcd -UserGroupFilter "Department -eq 'HRDept'"
```

In this example, for the segment that has the GUID c96e0837-c232-4a8a-841e-ef45787d8fcd, we updated the department name to "HRDept".

## PARAMETERS

### -Identity
The Identity parameter specifies the organization segment that you want to modify. You can use any value that uniquely identifies the segment. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -UserGroupFilter
The UserGroupFilter parameter uses OPath filter syntax to specify the members of the organization segment. The syntax is `"Property -ComparisonOperator 'Value'"` (for example, `"MemberOf -eq 'Engineering Department'"` or `"ExtensionAttribute1 -eq 'DayTrader'"`).

- Enclose the whole OPath filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

- Property is a filterable property. For more information, see [Attributes for information barrier policies](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes).

- ComparisonOperator is an OPath comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).

- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values (for example, `500`, `$true`, `$false`, or `$null`).

Use the same property for all of your segments, and verify that your segments don't overlap (a user must be assigned to only one segment).

```yaml
Type: String
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

[Attributes for information barrier policies](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies)

[New-InformationBarrierPolicy](https://docs.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
