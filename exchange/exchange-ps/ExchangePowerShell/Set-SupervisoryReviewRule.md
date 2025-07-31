---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-supervisoryreviewrule
schema: 2.0.0
title: Set-SupervisoryReviewRule
---

# Set-SupervisoryReviewRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-SupervisoryReviewRule cmdlet to modify supervisory review rules in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SupervisoryReviewRule [-Identity] <ComplianceRuleIdParameter>
 [-AdvancedRule <String>]
 [-CcsiDataModelOperator <String>]
 [-Condition <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentMatchesDataModel <String>]
 [-ContentSources <String[]>]
 [-DayXInsights <Boolean>]
 [-ExceptIfFrom <MultiValuedProperty>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfRevieweeIs <MultiValuedProperty>]
 [-ExceptIfSenderDomainIs <MultiValuedProperty>]
 [-ExceptIfSentTo <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyContainsWords <MultiValuedProperty>]
 [-From <MultiValuedProperty>]
 [-IncludeAdaptiveScopes <String[]>]
 [-InPurviewFilter <String>]
 [-Ocr <Boolean>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-SamplingRate <Int32>]
 [-SentTo <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SupervisoryReviewRule -Identity "EU Brokers Rule" -Conditions "((NOT(Reviewee:US Compliance)) -AND (Reviewee:EU Brokers) -AND ((trade) -OR (insider trading)) -AND (NOT(approved by the Contoso financial team)))"
```

This example modifies the existing rule named EU Brokers Rule with the following settings:

- Conditions: Supervise inbound and outbound communications for members of the EU Brokers group that contain the words trade or insider trading.
- Exceptions: Exclude supervision for members of the EU Compliance group, or messages that contain the phrase "approved by the Contoso financial team".

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the supervisory review rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

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

### -AdvancedRule

> Applicable: Security & Compliance

{{ Fill AdvancedRule Description }}

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

### -CcsiDataModelOperator

> Applicable: Security & Compliance

{{ Fill CcsiDataModelOperator Description }}

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

### -Condition

> Applicable: Security & Compliance

The Condition parameter specifies the conditions and exceptions for the rule. This parameter uses the following syntax:

- User or group communications to supervise: `"((Reviewee:<emailaddress1>) -OR (Reviewee:<emailaddress2>)...)"`. Exceptions use the syntax `"(NOT((Reviewee:<emailaddress1>) -OR (Reviewee:<emailaddress2>)...))"`.
- Direction: `"((Direction:Inbound) -OR (Direction:Outbound) -OR (Direction:Internal))"`.
- Message contains words: `"((<Word1orPhrase1>) -OR (<Word2orPhrase2>)...)"`. Exceptions use the syntax `"(NOT((<Word1orPhrase1>) -OR (<Word2orPhrase2>)...))"`.
- Any attachment contains words: `"((Attachment:<word1>) -OR (Attachment:<word2>)...)"`. Exceptions use the syntax `"(NOT((Attachment:<word1>) -OR (Attachment:<word2>)...))"`.
- Any attachment has the extension: `"((AttachmentName:.<extension1>) -OR (AttachmentName:.<extension2>)...)"`. Exceptions use the syntax `"(NOT((AttachmentName:.<extension1>) -OR (AttachmentName:.<extension2>)...))"`.
- Message size is larger than: `"(MessageSize:<size in B, KB, MB or GB>)"`. For example `"(MessageSize:300KB)"`. Exceptions use the syntax `"(NOT(MessageSize:<size in B, KB, MB or GB>))"`.
- Any attachment is larger than: `"(AttachmentSize:<size in B, KB, MB or GB>)"`. For example `"(AttachmentSize:3MB)"`. Exceptions use the syntax `"(NOT(AttachmentSize:<size in B, KB, MB or GB>))"`.
- Parentheses ( ) are required around the whole filter.
- Separate multiple conditions or exception types with the AND operator. For example, `"((Reviewee:chris@contoso.com) -AND (AttachmentSize:3MB))"`.

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

{{ Fill ContentContainsSensitiveInformation Description }}

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

### -ContentMatchesDataModel

> Applicable: Security & Compliance

{{ Fill ContentMatchesDataModel Description }}

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

### -ContentSources

> Applicable: Security & Compliance

{{ Fill ContentSources Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DayXInsights

> Applicable: Security & Compliance

{{ Fill DayXInsights Description }}

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

### -ExceptIfFrom

> Applicable: Security & Compliance

{{ Fill ExceptIfFrom Description }}

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

### -ExceptIfRecipientDomainIs

> Applicable: Security & Compliance

{{ Fill ExceptIfRecipientDomainIs Description }}

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

### -ExceptIfRevieweeIs

> Applicable: Security & Compliance

{{ Fill ExceptIfRevieweeIs Description }}

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

### -ExceptIfSenderDomainIs

> Applicable: Security & Compliance

{{ Fill ExceptIfSenderDomainIs Description }}

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

### -ExceptIfSentTo

> Applicable: Security & Compliance

{{ Fill ExceptIfSentTo Description }}

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

### -ExceptIfSubjectOrBodyContainsWords

> Applicable: Security & Compliance

{{ Fill ExceptIfSubjectOrBodyContainsWords Description }}

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

### -From

> Applicable: Security & Compliance

{{ Fill From Description }}

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

### -IncludeAdaptiveScopes

> Applicable: Security & Compliance

{{ Fill IncludeAdaptiveScopes Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InPurviewFilter

> Applicable: Security & Compliance

{{ Fill InPurviewFilter Description }}

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

### -Ocr

> Applicable: Security & Compliance

{{ Fill Ocr Description }}

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

### -PolicyRBACScopes

> Applicable: Security & Compliance

{{ Fill PolicyRBACScopes Description }}

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

### -SamplingRate

> Applicable: Security & Compliance

The SamplingRate parameter specifies the percentage of communications for review. If you want reviewers to review all detected items, use the value 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo

> Applicable: Security & Compliance

{{ Fill SentTo Description }}

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
