---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-retention/set-compliancetag
applicable: Office 365 Security & Compliance Center
title: Set-ComplianceTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-ComplianceTag

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Set-ComplianceTag cmdlet to modify labels in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ComplianceTag [-Identity] <ComplianceRuleIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-EventType <ComplianceRuleIdParameter>]
 [-FilePlanProperty <String>]
 [-Force]
 [-Notes <String>]
 [-RetentionDuration <Unlimited>]
 [-ReviewerEmail <SmtpAddress[]>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Set-ComplianceTag -Identity "HR Content" -RetentionDuration 2555 -Comment "Retain HR content for 7 years"
```

This example modifies the existing label named HR Content by modifying the retention duration and adding a comment.

## PARAMETERS

### -Identity
The Identity parameter specifies the label that you want to modify. You can use any value that uniquely identifies the tag. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -EventType
The EventType specifies the retention rule that's associated with the label. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

You can use the Get-RetentionComplianceRule cmdlet to view the available retention rules.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePlanProperty
The FilePlanProperty parameter specifies the file plan properties to include in the label. To view the file plan property names that you need to use in this parameter, run the following commands:

- Get-FilePlanPropertyAuthority | Format-List Name

- Get-FilePlanPropertyCategory | Format-List Name

- Get-FilePlanPropertyCitation | Format-List Name

- Get-FilePlanPropertyDepartment | Format-List Name

- Get-FilePlanPropertyReferenceId | Format-List Name

- Get-FilePlanPropertySubCategory | Format-List Name

A valid value for this parameter involves two steps:

- A variable to store the file plan properties as a PSCustomObject using the following syntax:

  $Variable1=[PSCustomObject]@{Settings=@(@{Key="FilePlanPropertyDepartment";Value="Name"},@{Key="FilePlanPropertyCategory";Value="Name"},@{Key="FilePlanPropertySubcategory";Value="Name"},@{Key="FilePlanPropertyCitation";Value="Name"},@{Key="FilePlanPropertyReferenceId";Value="Name"},@{Key="FilePlanPropertyAuthority";Value="Name"})}

  For example:

  $retentionLabelAction=[PSCustomObject]@{Settings=@(@{Key="FilePlanPropertyDepartment";Value="Legal"},@{Key="FilePlanPropertyCategory";Value="Tax"},@{Key="FilePlanPropertySubcategory";Value="US_Tax"},@{Key="FilePlanPropertyCitation";Value="LegalCitation"},@{Key="FilePlanPropertyReferenceId";Value="ReferenceA"},@{Key="FilePlanPropertyAuthority";Value="Auth1"})}

- A second variable to convert the PSCustomObject to a JSON object using the following syntax:

  $Variable2 = ConvertTo-Json $Variable1

  For example:

  $fpStr = ConvertTo-Json $retentionLabelAction

You use the second variable as the value for this parameter.

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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameter specifies an optional note. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is a user note".

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

### -RetentionDuration
The RetentionDuration parameter specifies the number of days to retain the content. Valid values are:

- A positive integer.

- The value unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReviewerEmail
The ReviewerEmail parameter specifies the email address of a reviewer for Delete and KeepAndDelete retention actions. You can specify multiple email addresses separated by commas.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
