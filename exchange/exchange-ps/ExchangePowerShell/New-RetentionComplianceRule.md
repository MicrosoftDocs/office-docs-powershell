---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule
schema: 2.0.0
title: New-RetentionComplianceRule
---

# New-RetentionComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-RetentionComplianceRule cmdlet to create new retention rules in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ComplianceTag
```
New-RetentionComplianceRule -ApplyComplianceTag <String> -Policy <PolicyIdParameter>
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-Confirm]
 [-ContentMatchQuery <String>]
 [-ExpirationDateOption <String>]
 [-IRMRiskyUserProfiles <String>]
 [-MachineLearningModelIDs <MultiValuedProperty>]
 [-PriorityCleanup]
 [-RetentionComplianceAction <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
New-RetentionComplianceRule [-Name] <String> -Policy <PolicyIdParameter>
 [-Comment <String>]
 [-ExcludedItemClasses <MultiValuedProperty>]
 [-RetentionDuration <Unlimited>]
 [-RetentionDurationDisplayHint <HoldDurationHint>]
 [-Confirm]
 [-ContentMatchQuery <String>]
 [-ExpirationDateOption <String>]
 [-PriorityCleanup]
 [-RetentionComplianceAction <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublishComplianceTag
```
New-RetentionComplianceRule -Policy <PolicyIdParameter> -PublishComplianceTag <String>
 [-Confirm]
 [-ExpirationDateOption <String>]
 [-PriorityCleanup]
 [-RetentionComplianceAction <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The retention rule must be added to an existing retention policy using the Policy parameter. Only one rule can be added to each retention policy.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-RetentionComplianceRule -Name InternalCompanyRule -Policy "Internal Company Policy" -RetentionDuration Unlimited -RetentionComplianceAction Keep
```

This example creates a new case hold rule named InternalCompanyRule and adds it to the existing case hold policy named "Internal Company Policy". Content is held indefinitely.

### Example 2
```powershell
New-RetentionComplianceRule -Name SeptOneYear -Policy "Internal Company Policy" -RetentionDuration 365 -RetentionComplianceAction KeepAndDelete -ExpirationDateOption ModificationAgeInDays
```

This example creates a new retention rule named SeptOneYear and adds it to the existing retention policy named "Internal Company Policy". Content is held for one year from the day content was last modified before it is deleted.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the retention rule. If the value contains spaces, enclose the value in quotation marks.

You can't use this parameter with the ApplyComplianceTag or PublishComplianceTag parameters.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyComplianceTag

> Applicable: Security & Compliance

The ApplyComplianceTag parameter specifies the label that's applied to email messages or documents by the rule (which affects how long the content is retained). A valid value for this parameter is the name of an existing label. If the value contains spaces, enclose the value in quotation marks.

You view and create labels by using the Get-ComplianceTag and New-ComplianceTag cmdlets.

You can't use this parameter with the Name or PublishComplianceTag parameters.

You can't use this parameter for Teams retention rules.

```yaml
Type: String
Parameter Sets: ComplianceTag
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy

> Applicable: Security & Compliance

The Policy parameter specifies the policy to contain the rule.

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

### -PriorityCleanup

> Applicable: Security & Compliance

The PriorityCleanup switch specifies whether to create a rule associated with a Priority cleanup policy. You don't need to specify a value with this switch.

Priority cleanup policies expedite the deletion of sensitive content by overriding any existing retention settings or eDiscovery holds. For more information, see [Priority Cleanup](https://learn.microsoft.com/purview/priority-cleanup).

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

### -PublishComplianceTag

> Applicable: Security & Compliance

The PublishComplianceTag parameter specifies the label that's published for the rule, which makes the label visible to users in apps (for example, Outlook, SharePoint, and OneDrive). A valid value for this parameter is the name of an existing label. If the value contains spaces, enclose the value in quotation marks.

You view and create labels by using the Get-ComplianceTag and New-ComplianceTag cmdlets.

You can't use this parameter in the following scenarios:

- With the Name or ApplyComplianceTag parameters.
- For Teams retention rules.
- With cloud attachment policies.

```yaml
Type: String
Parameter Sets: PublishComplianceTag
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
Parameter Sets: Default
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

### -ContentContainsSensitiveInformation

> Applicable: Security & Compliance

The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`.

Use the Get-DLPSensitiveInformationType cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see [What the sensitive information types in Exchange look for](https://learn.microsoft.com/exchange/what-the-sensitive-information-types-in-exchange-look-for-exchange-online-help).

You can use this parameter with the ApplyComplianceTag parameter.

You can't use this parameter for Teams retention rules.

```yaml
Type: PswsHashtable[]
Parameter Sets: ComplianceTag
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentMatchQuery

> Applicable: Security & Compliance

The ContentMatchQuery parameter specifies a content search filter.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information, see [Keyword Query Language (KQL) syntax reference](https://learn.microsoft.com/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) and [Keyword queries and search conditions for eDiscovery](https://learn.microsoft.com/purview/ediscovery-keyword-queries-and-search-conditions).

You can't use this parameter for Teams retention rules.

```yaml
Type: String
Parameter Sets: ComplianceTag, Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedItemClasses

> Applicable: Security & Compliance

The ExcludedItemClasses parameter specifies the types of messages to exclude from the rule. You can use this parameter only to exclude items from a hold policy, which excludes the specified item class from being held. Using this parameter doesn't exclude items from deletion policies. Typically, you use this parameter to exclude voicemail messages, IM conversations, and other Skype for Business Online content from being held by a hold policy. Common Skype for Business values include:

- IPM.Note.Microsoft.Conversation
- IPM.Note.Microsoft.Conversation.Voice
- IPM.Note.Microsoft.Missed
- IPM.Note.Microsoft.Missed.Voice
- IPM.Note.Microsoft.Voicemail
- IPM.Note.Microsoft.VoiceMessage.UA
- IPM.Note.Microsoft.Voicemail.UM
- IPM.Note.Microsoft.Voicemail.UM.CA

Additionally, you can specify [message classes for Exchange items](https://learn.microsoft.com/office/vba/outlook/concepts/forms/item-types-and-message-classes) and custom or non-Microsoft message classes. The values you specify aren't validated, so the parameter accepts any text value.

You can specify multiple item class values by using the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter for Teams retention rules.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpirationDateOption

> Applicable: Security & Compliance

The ExpirationDateOption parameter specifies whether the expiration date is calculated from the content creation date or last modification date. Valid values are:

- CreationAgeInDays
- ModificationAgeInDays

You can't use this parameter for Teams retention rules.

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

### -IRMRiskyUserProfiles

> Applicable: Security & Compliance

{{ Fill IRMRiskyUserProfiles Description }}

```yaml
Type: String
Parameter Sets: ComplianceTag
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MachineLearningModelIDs

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: ComplianceTag
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionComplianceAction

> Applicable: Security & Compliance

The RetentionComplianceAction parameter specifies the retention action for the rule. Valid values are:

- Delete
- Keep
- KeepAndDelete

If you don't use this parameter, the retention policy is created as an "UniH" policy instead of a "mbx" policy. This parameter is mandatory to prevent non-compliant deletion.

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

### -RetentionDuration

> Applicable: Security & Compliance

The RetentionDuration parameter specifies the hold duration for the retention rule. Valid values are:

- An integer: The hold duration in days.
- Unlimited: The content is held indefinitely.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionDurationDisplayHint

> Applicable: Security & Compliance

The RetentionDurationDisplayHint parameter specifies the units that are used to display the retention duration in the Microsoft Purview compliance portal. Valid values are:

- Days
- Months
- Years

For example, if this parameter is set to the value Years, and the RetentionDuration parameter is set to the value 365, the Microsoft Purview compliance portal displays 1 year as the content hold duration.

You can't use this parameter for Teams retention rules.

```yaml
Type: HoldDurationHint
Parameter Sets: Default
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
