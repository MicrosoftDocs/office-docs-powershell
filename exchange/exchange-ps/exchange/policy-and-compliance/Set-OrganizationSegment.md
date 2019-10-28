---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
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
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Set-OrganizationSegment cmdlet to modify organization segments in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OrganizationSegment [-Identity] <PolicyIdParameter> [-UserGroupFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
Segments are defined by using certain [attributes](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes) in Azure Active Directory.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
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

- Enclose the whole OPath filter in double quotation marks " ". Braces { } will also work, but only if the filter doesn't contain variables.

- Property is a filterable property. For more information, see [Attributes for information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes).

- ComparisonOperator is an OPath comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see [about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).

- Value is the property value. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). Don't use quotation marks with integers or the system values $true, $false, or $null. You need to escape any variables with values that contain single quotation marks. For example, instead of `"Property -eq '$x'"`, use `"Property -eq '$($x -Replace "'","''")'"`.

Use the same attribute for all of your segments, and verify that your segments don't overlap (a user must be assigned to only one segment).

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/set-organizationsegment)

[Attributes for information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)

[New-InformationBarrierPolicy](New-InformationBarrierPolicy.md)
