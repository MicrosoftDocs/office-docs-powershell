---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancetag
schema: 2.0.0
title: New-ComplianceTag
---

# New-ComplianceTag

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-ComplianceTag cmdlet to create retention labels in the Microsoft Purview compliance portal. Retention labels apply retention settings to content.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
New-ComplianceTag [-Name] <String>
 [-AutoApprovalPeriod <System.Int32>]
 [-Comment <String>]
 [-ComplianceTagForNextStage <String>]
 [-Confirm]
 [-EventType <ComplianceRuleIdParameter>]
 [-FilePlanProperty <String>]
 [-FlowId <System.Guid>]
 [-Force]
 [-IsRecordLabel <Boolean>]
 [-IsRecordUnlockedAsDefault <Boolean>]
 [-MultiStageReviewProperty <String>]
 [-Notes <String>]
 [-Regulatory <Boolean>]
 [-RetentionAction <String>]
 [-RetentionDuration <Unlimited>]
 [-RetentionType <String>]
 [-ReviewerEmail <SmtpAddress[]>]
 [-WhatIf]
 [<CommonParameters>]
```

### PriorityCleanup
```
New-ComplianceTag [-Name] <String> -RetentionAction <String> -RetentionDuration <Unlimited> -RetentionType <String>
 -MultiStageReviewProperty <String> [-PriorityCleanup]
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-Notes <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-ComplianceTag -Name "HR Content" -RetentionAction Keep -RetentionDuration 1825 -RetentionType ModificationAgeInDays
```

This example creates a new label named HR Content with the following settings:

- Action: Keep.
- Duration: 5 years (1825 days)
- Type: Modification age in days.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the label. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PriorityCleanup

> Applicable: Security & Compliance

{{ Fill PriorityCleanup Description }}

```yaml
Type: SwitchParameter
Parameter Sets: PriorityCleanup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionAction

> Applicable: Security & Compliance

The RetentionAction parameter specifies the action for the label. Valid values are:

- Delete
- Keep
- KeepAndDelete

```yaml
Type: String
Parameter Sets: Default, PriorityCleanup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionDuration

> Applicable: Security & Compliance

The RetentionDuration parameter specifies the number of days to retain the content. Valid values are:

- A positive integer.
- The value unlimited.

```yaml
Type: Unlimited
Parameter Sets: Default, PriorityCleanup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionType

> Applicable: Security & Compliance

The RetentionType parameter specifies whether the retention duration is calculated from the content creation date, tagged date, or last modification date. Valid values are:

- CreationAgeInDays
- EventAgeInDays
- ModificationAgeInDays
- TaggedAgeInDays

```yaml
Type: String
Parameter Sets: Default, PriorityCleanup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoApprovalPeriod

> Applicable: Security & Compliance

{{ Fill AutoApprovalPeriod Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
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

### -ComplianceTagForNextStage

> Applicable: Security & Compliance

{{ Fill ComplianceTagForNextStage Description }}

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

### -EventType

> Applicable: Security & Compliance

The EventType specifies the retention rule that's associated with the label. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

You can use the Get-RetentionComplianceRule cmdlet to view the available retention rules.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePlanProperty

> Applicable: Security & Compliance

The FilePlanProperty parameter specifies the file plan properties to include in the label. To view the file plan property names that you need to use in this parameter, run the following commands:

- `Get-FilePlanPropertyAuthority | Format-List Name`
- `Get-FilePlanPropertyCategory | Format-List Name`
- `Get-FilePlanPropertyCitation | Format-List Name`
- `Get-FilePlanPropertyDepartment | Format-List Name`
- `Get-FilePlanPropertyReferenceId | Format-List Name`
- `Get-FilePlanPropertySubCategory | Format-List Name`

A valid value for this parameter involves two steps:

- A variable to store the file plan properties as a PSCustomObject using the following syntax:

  `$Variable1=[PSCustomObject]@{Settings=@(@{Key="FilePlanPropertyDepartment";Value="Name"},@{Key="FilePlanPropertyCategory";Value="Name"},@{Key="FilePlanPropertySubcategory";Value="Name"},@{Key="FilePlanPropertyCitation";Value="Name"},@{Key="FilePlanPropertyReferenceId";Value="Name"},@{Key="FilePlanPropertyAuthority";Value="Name"})}`

  For example:

  `$retentionLabelAction=[PSCustomObject]@{Settings=@(@{Key="FilePlanPropertyDepartment";Value="Legal"},@{Key="FilePlanPropertyCategory";Value="Tax"},@{Key="FilePlanPropertySubcategory";Value="US_Tax"},@{Key="FilePlanPropertyCitation";Value="LegalCitation"},@{Key="FilePlanPropertyReferenceId";Value="Referen`ceA"},@{Key="FilePlanPropertyAuthority";Value="Auth1"})}

- A second variable to convert the PSCustomObject to a JSON object using the following syntax:

  `$Variable2 = ConvertTo-Json $Variable1`

  For example:

  `$fpStr = ConvertTo-Json $retentionLabelAction`

You use the second variable as the value for this parameter.

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

### -FlowId

> Applicable: Security & Compliance

**Note**: This parameter is currently in Preview, is not available in all organizations, and is subject to change.

The FlowId parameter specifies the Power Automate flow to run at the end of the retention period. A valid value for this parameter is the GUID value of the flow.

You can find the GUID value of the flow by using either of the following methods:

- Navigate to the flow from the Power Automate portal. The GUID value of the flow is in the URL.
- Use the Power Automate action named 'List flows as admin'.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Security & Compliance

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsRecordLabel

> Applicable: Security & Compliance

The IsRecordLabel parameter specifies whether the label is a record label. Valid values are:

- $true: The label is a record label. Once the label is applied to content, the label can't be removed.
- $false: The label isn't a record label. This is the default value.

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

### -IsRecordUnlockedAsDefault

> Applicable: Security & Compliance

{{ Fill IsRecordUnlockedAsDefault Description }}

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

### -MultiStageReviewProperty

> Applicable: Security & Compliance

The MultiStageReviewProperty parameter specifies the multi-stage review properties to include in the label. This parameter uses the following syntax:

`'{"MultiStageReviewSettings":[{"StageName":"Stage1","Reviewers":[reviewer1,reviewer2,...reviewerN]},{"StageName":"Stage2","Reviewers":[reviewer1,reviewer2,...reviewerN]},]}'`

For example:

`'{"MultiStageReviewSettings":[{"StageName":"Stage1","Reviewers":[jie@contoso.onmicrosoft.com]},{"StageName":"Stage2","Reviewers":[bharath@contoso.onmicrosoft.com,helen@contoso.onmicrosoft.com]},]}'`

This syntax is a JSON object that defines each review stage id, review stage name, and list of reviewers.

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

### -Notes

> Applicable: Security & Compliance

The Notes parameter specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

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

### -Regulatory

> Applicable: Security & Compliance

{{ Fill Regulatory Description }}

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

### -ReviewerEmail

> Applicable: Security & Compliance

The ReviewerEmail parameter specifies the email address of a reviewer for Delete and KeepAndDelete retention actions. You can specify multiple email addresses separated by commas.

```yaml
Type: SmtpAddress[]
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
