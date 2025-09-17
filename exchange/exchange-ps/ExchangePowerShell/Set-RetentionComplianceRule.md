---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-retentioncompliancerule
schema: 2.0.0
title: Set-RetentionComplianceRule
---

# Set-RetentionComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-RetentionComplianceRule cmdlet to modify existing retention rules in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RetentionComplianceRule [-Identity] <ComplianceRuleIdParameter>
 [-ApplyComplianceTag <String>]
 [-Comment <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentDateFrom <DateTime>]
 [-ContentDateTo <DateTime>]
 [-ContentMatchQuery <String>]
 [-ExcludedItemClasses <MultiValuedProperty>]
 [-ExpirationDateOption <String>]
 [-IRMRiskyUserProfiles <String>]
 [-PriorityCleanup]
 [-RetentionComplianceAction <String>]
 [-RetentionDuration <Unlimited>]
 [-RetentionDurationDisplayHint <HoldDurationHint>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-RetentionComplianceRule -Identity "Internal Company Rule" -RetentionDuration 180 -RetentionDurationDisplayHint Days
```

This example changes the hold duration for the existing retention rule named "Internal Company Rule".

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the retention rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

You can't use this parameter for Teams retention rules.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentDateFrom

> Applicable: Security & Compliance

The ContentDateFrom parameter specifies the start date of the date range for content to include.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentDateTo

> Applicable: Security & Compliance

The ContentDateTo parameter specifies the end date of the date range for content to include.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedItemClasses

> Applicable: Security & Compliance

The ExcludedItemClasses parameter specifies the types of messages to exclude from the rule. You can use this parameter only to exclude items from a hold policy, which excludes the specified item class from being held. This parameter doesn't exclude items from deletion policies. Typically, you use this parameter to exclude voicemail messages, IM conversations, and other Skype for Business Online content from being held by a hold policy. Common Skype for Business values include:

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
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PriorityCleanup

> Applicable: Security & Compliance

The PriorityCleanup switch specifies whether to update the rule associated with a Priority cleanup policy. You don't need to specify a value with this switch.

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

### -RetentionComplianceAction

> Applicable: Security & Compliance

The RetentionComplianceAction parameter specifies the retention action for the rule. Valid values are:

- Delete
- Keep
- KeepAndDelete

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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionDurationDisplayHint

> Applicable: Security & Compliance

The RetentionDurationDisplayHint parameter specifies the units that are used to display the retention duration in the Microsoft Purview compliance portal. Valid values are Days, Months or Years.

- Days
- Months
- Years

For example, if this parameter is set to the value Years, and the RetentionDuration parameter is set to the value 365, the Microsoft Purview compliance portal displays 1 year as the content hold duration.

You can't use this parameter for Teams retention rules.

```yaml
Type: HoldDurationHint
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
