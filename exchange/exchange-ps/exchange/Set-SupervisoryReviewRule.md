---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-supervisoryreviewrule
applicable: Security & Compliance
title: Set-SupervisoryReviewRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-SupervisoryReviewRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-SupervisoryReviewRule cmdlet to modify supervisory review rules in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-SupervisoryReviewRule [-Identity] <ComplianceRuleIdParameter>
 [-CcsiDataModelOperator <String>]
 [-Condition <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentMatchesDataModel <String>]
 [-ContentSources <String[]>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfRevieweeIs <MultiValuedProperty>]
 [-ExceptIfSenderDomainIs <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyContainsWords <MultiValuedProperty>]
 [-IncludeAdaptiveScopes <String[]>]
 [-InPurviewFilter <String>]
 [-Ocr <Boolean>]
 [-SamplingRate <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
Set-SupervisoryReviewRule
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
The Identity parameter specifies the supervisory review rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CcsiDataModelOperator
{{ Fill CcsiDataModelOperator Description }}

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

### -Condition
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

### -ContentContainsSensitiveInformation
{{ Fill ContentContainsSensitiveInformation Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentMatchesDataModel
{{ Fill ContentMatchesDataModel Description }}

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

### -ContentSources
{{ Fill ContentSources Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DayXInsights
{{ Fill DayXInsights Description }}

```yaml
Type: Boolean
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
{{ Fill ExceptIfFrom Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
{{ Fill ExceptIfRecipientDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRevieweeIs
{{ Fill ExceptIfRevieweeIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs
{{ Fill ExceptIfSenderDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
{{ Fill ExceptIfSentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords
{{ Fill ExceptIfSubjectOrBodyContainsWords Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
{{ Fill From Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAdaptiveScopes
{{ Fill IncludeAdaptiveScopes Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InPurviewFilter
{{ Fill InPurviewFilter Description }}

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

### -Ocr
{{ Fill Ocr Description }}

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

### -SamplingRate
The SamplingRate parameter specifies the percentage of communications for review. If you want reviewers to review all detected items, use the value 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
{{ Fill SentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
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
