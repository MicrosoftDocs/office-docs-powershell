---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-OrganizationSegment cmdlet to create organization segments for use with information barrier policies in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-OrganizationSegment [-Name] <String> -UserGroupFilter <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
For more information about the filterable attributes that you can use to define segments, see [Attributes for information barrier policies](https://docs.microsoft.com/Office365/SecurityCompliance/information-barriers-attributes).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-OrganizationSegment -Name "HR" -UserGroupFilter "Department -eq 'HR'"
```

In this example, a segment called HR is defined using HR, a value in the Department attribute.

### -------------------------- Example 2 --------------------------
```
New-OrganizationSegment -Name "NotSales" -UserGroupFilter "Department -ne 'Sales'"
```

In this example, we defined a segment called NotSales that includes everyone who is not in Sales. The "-ne" portion of the cmdlet refers to "not equals."

### -------------------------- Example 3 --------------------------
```
New-OrganizationSegment -Name "LocalFTE" -UserGroupFilter "Location -eq 'Local'" and "Position -ne 'Temporary'"
```

In this example, we defined a segment called LocalFTE that includes people who are locally located and whose positions are not listed as Temporary.

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the organization segment. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserGroupFilter
The UserGroupFilter parameter specifies the members of the organization segment based on user attributes in an OPATH filter. The OPATH filter uses the syntax "\<Property\> -\<Comparison operator\> '\<Value\>'".

- \<Property\> is a filterable attribute. For more information, see [Attributes for information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes).

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the attribute value.

For example, "MemberOf -eq 'Engineering Department'" or "ExtensionAttribute1 -eq 'DayTrader'".

Use the same attribute for all of your segments, and verify that your segments don't overlap (a user must be assigned to only one segment).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/new-organizationsegment)

[Attributes for information barrier policies](https://docs.microsoft.com/Office365/SecurityCompliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)
