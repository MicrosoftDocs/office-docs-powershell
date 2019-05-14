---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-Label
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-Label

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-Label cmdlet to modify sensitivity labels in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-Label [-Identity] <ComplianceRuleIdParameter>
 [-AdvancedSettings <PswsHashtable>]
 [-Comment <String>]
 [-Confirm]
 [-Disabled <$true | $false>]
 [-DisplayName <String>]
 [-LabelActions <MultiValuedProperty>]
 [-LocaleSettings <MultiValuedProperty>]
 [-NextLabel <ComplianceRuleIdParameter>]
 [-ParentId <ComplianceRuleIdParameter>]
 [-PreviousLabel <ComplianceRuleIdParameter>]
 [-Priority <Int32>]
 [-Settings <PswsHashtable>]
 [-Tooltip <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920)..

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitivity label that you want to modify. You can use any value that uniquely identifies the label. For example:

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

### -AdvancedSettings
{{Fill AdvancedSettings Description}}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
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

### -Disabled
{{Fill Disabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name for the sensitivity label. The display name appears in the Microsoft Office and is used by Outlook users to select the appropriate sensitivity label before they send a message.

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

### -LocaleSettings
The LocaleSettings parameter specifies one or more localized label name or label Tooltips in different languages. Regions include all region codes supported in Office Client applications. Valid values use the following syntax:

- Label display names: {"localeKey":"DisplayName","Settings":[{"Key":"en-us","Value":"English display name"},{"Key":"de-de",Value":"Deutscher Anzeigename"},{"Key":"es-es",Value":"Nombre para mostrar en español"}]}

- Label Tooltips: {"localeKey":"Tooltip","Settings":[{"Key":"en-us","Value":"English Tooltip"},{"Key":"de-de",Value":"Deutscher Tooltip"},{"Key":"es-es",Value":"Tooltip español"}]}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NextLabel
{{Fill NextLabel Description}}

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

### -ParentId
The ParentId parameter specifies the policy that contains the sensitivity label. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

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

### -PreviousLabel
{{Fill PreviousLabel Description}}

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

### -Priority
The Priority parameter specifies a priority value for the sensitivity label that determines the order of label processing. A lower integer value indicates a higher priority, the value 0 is the highest priority and sensitivity labels can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing sensitivity labels. For example, if there are 8 existing labels:

- Valid priority values for the existing 8 sensitivity labels are from 0 through 7.

- Valid priority values for a new sensitivity label (the 9th label) are from 0 through 8.

- The default value for a new sensitivity label (the 9th label) is 8.

If you modify the priority value of a sensitivity label, the position of the label in the list changes to match the priority value you specify. In other words, if you set the priority value of a sensitivity label to the same value as an existing label, the priority value of the existing sensitivity label and all other lower priority labels after it is increased by 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Settings
{{Fill Settings Description}}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases: 
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tooltip
{{Fill Tooltip Description}}

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/set-label)
