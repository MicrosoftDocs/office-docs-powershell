---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-organizationsegment
schema: 2.0.0
title: Set-OrganizationSegment
---

# Set-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-OrganizationSegment cmdlet to modify organization segments in the Microsoft Purview compliance portal. Organization Segments are not in effect until you [apply information barrier policies](https://learn.microsoft.com/purview/information-barriers-policies#step-4-apply-ib-policies).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OrganizationSegment [-Identity] <PolicyIdParameter>
 [-UserGroupFilter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Segments are defined by using certain [attributes](https://learn.microsoft.com/purview/information-barriers-attributes) in Microsoft Entra ID.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OrganizationSegment -Identity c96e0837-c232-4a8a-841e-ef45787d8fcd -UserGroupFilter "Department -eq 'HRDept'"
```

In this example, for the segment that has the GUID c96e0837-c232-4a8a-841e-ef45787d8fcd, we updated the department name to "HRDept".

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the organization segment that you want to modify. You can use any value that uniquely identifies the segment. For example:

- Name
- Distinguished name (DN)
- GUID

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

### -UserGroupFilter

> Applicable: Security & Compliance

The UserGroupFilter parameter uses OPATH filter syntax to specify the members of the organization segment. The syntax is `"Property -ComparisonOperator 'Value'"` (for example, `"MemberOf -eq 'Engineering Department'"` or `"ExtensionAttribute1 -eq 'DayTrader'"`).

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information, see [Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

Use the same property for all of your segments, and verify that your segments don't overlap (a user must be assigned to only one segment).

```yaml
Type: String
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

[Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes)

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)

[New-InformationBarrierPolicy](https://learn.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
