---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-SupervisoryReviewRule
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-SupervisoryReviewRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-SupervisoryReviewRule cmdlet to modify supervisory review rules in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-SupervisoryReviewRule [-Identity] <ComplianceRuleIdParameter> [-Condition <String>] [-Confirm]
 [-SamplingRate <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-SupervisoryReviewRule -Identity "EU Brokers Rule" -AddReviewers julia@contoso.com
```

This example adds the reviewer julia@contoso.com to the rule named EU Brokers Rule.

## PARAMETERS

### -Identity
The Identity parameter specifies the supervisory review rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

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

### -Condition
The Condition parameter specifies the conditions and exceptions for the rule. This parameter uses the following syntax:

- User or group communications to supervise:((Reviewee:\<emailaddress1\>) -OR (Reviewee:\<emailaddress2\>)...). Exceptions use the syntax (NOT((Reviewee:\<emailaddress1\>) -OR (Reviewee:\<emailaddress2\>)...)).

- Direction:((Direction:Inbound) -OR (Direction:Outbound) -OR (Direction:Internal)).

- Message contains words:((\<Word1orPhrase1\>)-OR (\<Word2orPhrase2\>)...). Exceptions use the syntax (NOT((\<Word1orPhrase1\>)-OR (\<Word2orPhrase2\>)...)).

- Any attachment contains words:((Attachment:\<word1\>)-OR (Attachment:\<word2\>)...). Exceptions use the syntax (NOT((Attachment:\<word1\>)-OR (Attachment:\<word2\>)...)).

- Any attachment has the extension:((AttachmentName:.\<extension1\>)-OR (AttachmentName:.\<extension2\>)...). Exceptions use the syntax (NOT((AttachmentName:.\<extension1\>)-OR (AttachmentName:.\<extension2\>)...)).

- Message size is larger than:(MessageSize:\<size in B, KB, MB or GB\>). For example (MessageSize:300KB). Exceptions use the syntax (NOT(MessageSize:\<size in B, KB, MB or GB\>))

- Any attachment is larger than:(AttachmentSize:\<size in B, KB, MB or GB\>). For example (AttachmentSize:3MB). Exceptions use the syntax (NOT(AttachmentSize:\<size in B, KB, MB or GB\>))

- Braces { } are required around the whole filter.

- Separate multiple conditions or exception types with the -AND operator. For example, {(Reviewee:chris@contoso.com) -AND (AttachmentSize:3MB)}.

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

### -SamplingRate
The SamplingRate parameter specifies the percentage of communications for review. If you want reviewers to review all detected items, use the value 100.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/8ed4a806-ffab-497a-bfea-22aaf05870bb.aspx)
