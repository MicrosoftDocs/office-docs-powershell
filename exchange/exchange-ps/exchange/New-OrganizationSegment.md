---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-organizationsegment
applicable: Security & Compliance
title: New-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-OrganizationSegment cmdlet to create organization segments for use with information barrier policies in the Microsoft Purview compliance portal. Organization Segments are not in effect until you [apply information barrier policies](https://learn.microsoft.com/purview/information-barriers-policies#step-4-apply-ib-policies).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-OrganizationSegment [-Name] <String> -UserGroupFilter <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about the filterable attributes that you can use to define segments, see [Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-OrganizationSegment -Name "HR" -UserGroupFilter "Department -eq 'HR'"
```

In this example, a segment called HR is defined using HR, a value in the Department attribute.

### Example 2
```powershell
New-OrganizationSegment -Name "NotSales" -UserGroupFilter "Department -ne 'Sales'"
```

In this example, we defined a segment called NotSales that includes everyone who is not in Sales. The "-ne" portion of the cmdlet refers to "not equals."

### Example 3
```powershell
New-OrganizationSegment -Name "LocalFTE" -UserGroupFilter "Location -eq 'Local' -and Position -ne 'Temporary'"
```

In this example, we defined a segment called LocalFTE that includes people who are locally located and whose positions are not listed as Temporary.

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the organization segment. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: False
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
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserGroupFilter
The UserGroupFilter parameter uses OPATH filter syntax to specify the members of the organization segment. The syntax is `"Property -ComparisonOperator 'Value'"` (for example, `"MemberOf -eq 'Engineering Department'"` or `"ExtensionAttribute1 -eq 'DayTrader'"`).

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information, see [Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

Use the same property for all of your segments, and verify that your segments don't overlap (a user must be assigned to only one segment).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes)

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)
