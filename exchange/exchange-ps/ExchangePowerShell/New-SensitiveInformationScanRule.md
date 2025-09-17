---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscanrule
schema: 2.0.0
title: New-SensitiveInformationScanRule
---

# New-SensitiveInformationScanRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-SensitiveInformationScan cmdlet to create sensitive information scan rules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SensitiveInformationScanRule [-Name] <String> -Policy <PolicyIdParameter> -Workload <PolicyConfiguration.Workload>
 [-Comment <String>]
 [-Confirm]
 [-ContentCreatedOrUpdatedDateFrom <System.DateTime>]
 [-ContentCreatedOrUpdatedDateTo <System.DateTime>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-ContentPropertyContainsWords <MultiValuedProperty>]
 [-ExceptIfContentExtensionMatchesWords <MultiValuedProperty>]
 [-ExceptIfContentPropertyContainsWords <MultiValuedProperty>]
 [-StartImpactAssessment <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-SensitiveInformationScan "SharePoint scan" -SharePointLocation All

New-SensitiveInformationScanRule "SharePoint scan rule" -ContentExtensionMatchesWords "pdf", "docx" -Policy "SharePoint scan" -Workload SharePoint
```

This example creates a scan for all SharePoint sites scoped to pdf and docx files only. Use the New-SensitiveInformationScanRule only in combination with New-SensitiveInformationScan.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifes the unique rule name for the scan. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy

> Applicable: Security & Compliance

The Policy parameter specifies the name of the parent scan policy for this rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload

> Applicable: Security & Compliance

The Workload parameter specifies the workload. Valid values are:

- Applications
- AuditAlerting
- AWS
- Azure
- AzureBatch
- Copilot
- DynamicScope
- EndpointDevices
- Exchange
- ExchangeOnPremises
- Intune
- ModernGroup
- OneDriveForBusiness
- OnPremisesScanner
- PowerBI
- PublicFolder
- SharePoint
- SharePointOnPremises
- Skype
- Substrate
- Teams
- ThirdPartyApps
- UnifiedAuditAzure

This value appears in the LogicalWorkload property in the output of the Get-SensitiveInformationScanRule cmdlet.

```yaml
Type: PolicyConfiguration.Workload
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCreatedOrUpdatedDateFrom

> Applicable: Security & Compliance

The ContentCreatedOrUpdatedDateFrom parameter specifies the earliest modification date-time of files that are considered in scope of this scan.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCreatedOrUpdatedDateTo

> Applicable: Security & Compliance

The ContentCreatedOrUpdatedDateTo parameter specifies the latest modification date-time of files that are considered in scope of this scan.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords

> Applicable: Security & Compliance

The ContentExtensionMatchesWords parameter specifies a condition for the rule that looks for words in file extensions. You can specify multiple words separated by commas. Irrespective of the original file type, this predicate matches based on the extension that is present in the name of the file.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentPropertyContainsWords

> Applicable: Security & Compliance

The ContentPropertyContainsWords parameter specifies a condition for the rule that's based on a property match in content. The rule is applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords

> Applicable: Security & Compliance

The ExceptIfContentExtensionMatchesWords parameter specifies an exception for the rule that looks for words in file extensions. You can specify multiple words separated by commas. Irrespective of what the original file type is, this predicate matches based on the extension that is present in the name of the file.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentPropertyContainsWords

> Applicable: Security & Compliance

The ExceptIfContentPropertyContainsWords parameter specifies an exception for the rule that's based on a property match in content. The rule is not applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartImpactAssessment

> Applicable: Security & Compliance

The StartImpactAssessment parameter specifies whether to start a scan estimation. Valid values are:

- $true: Start an scan estimation by default.
- $false: Prevent starting scan estimation by default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
