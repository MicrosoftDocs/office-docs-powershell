---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-holdcompliancerule
applicable: Security & Compliance
title: New-HoldComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-HoldComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-HoldComplianceRule cmdlet to create new preservation rules in the Microsoft Purview compliance portal.

**Note**: The New-HoldComplianceRule cmdlet has been replaced by the New-RetentionComplianceRule cmdlet. If you have scripts that use New-HoldComplianceRule, update them to use New-RetentionComplianceRule.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HoldComplianceRule [-Name] <String> -Policy <PolicyIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-ContentDateFrom <DateTime>]
 [-ContentDateTo <DateTime>]
 [-ContentMatchQuery <String>]
 [-Disabled <Boolean>]
 [-HoldContent <Unlimited>]
 [-HoldDurationDisplayHint <HoldDurationHint>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The preservation rule must be added to an existing preservation policy using the Policy parameter. Only one rule can be added to each preservation policy.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-HoldComplianceRule -Name SeptOneYear -Policy "Internal Company Policy" -ContentDateFrom "09/10/14 5:00 PM" -ContentDateTo "09/10/15 5:00 PM" -HoldContent Unlimited
```

This example creates a new preservation rule named SeptOneYear and adds it to the existing preservation policy named "Internal Company Policy". Content created or updated between the specified dates will be held indefinitely.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the preservation rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the policy to contain the rule.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
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

### -ContentDateFrom
The ContentDateFrom parameter specifies the start date of the date range for content to include.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentDateTo
The ContentDateTo parameter specifies the end date of the date range for content to include.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentMatchQuery
The ContentMatchQuery parameter specifies a content search filter.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information, see [Keyword Query Language (KQL) syntax reference](https://learn.microsoft.com/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) and [Keyword queries and search conditions for eDiscovery](https://learn.microsoft.com/purview/ediscovery-keyword-queries-and-search-conditions).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
The Disabled parameter specifies whether the preservation rule is enabled or disabled. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldContent
The HoldContent parameter specifies the hold duration for the preservation rule. Valid values are:

- An integer: The hold duration in days.
- Unlimited: The content is held indefinitely.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldDurationDisplayHint
The HoldDurationDisplayHint parameter specifies the units that are used to display the preservation duration in the Microsoft Purview compliance portal. Valid values are:

- Days
- Months
- Years

For example, if this parameter is set to the value Years, and the HoldContent parameter is set to the value 365, the Microsoft Purview compliance portal will display 1 year as the content hold duration.

```yaml
Type: HoldDurationHint
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
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
