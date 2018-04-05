---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-SupervisoryReviewRule
schema: 2.0.0
---

# New-SupervisoryReviewRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-SupervisoryReviewRule cmdlet to create supervisory review rules in the Office 365 Security & Compliance Center. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-SupervisoryReviewRule [-Name] <String> -Policy <PolicyIdParameter> [-Condition <String>] [-Confirm]
 [-SamplingRate <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-SupervisoryReviewRule -Name "EU Brokers Rule" -Policy "EU Brokers Policy" -SamplingRate 100 -Conditions {(NOT(Reviewee:US Compliance)) -AND (Reviewee:EU Brokers) -AND ((trade) -OR (insider trading)) -AND (NOT(approved by the Contoso financial team))}
```

This example creates a new supervisory review rule named EU Brokers Rule with the following settings:

- Policy: EU Brokers Policy

- Sampling rate: 100%

- Conditions: Supervise inbound and outbound communications for members of the EU Brokers group that contain the words trade or insider trading.

- Exceptions: Exclude supervision for members of the EU Compliance group, or messages that contain the phrase "approved by the Contoso financial team".

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the supervisory review rule. The name can't exceed 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the supervisory review policy that's assigned to the rule. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](https://technet.microsoft.com/library/b10216c9-0052-47bb-8da3-4ff9e9ecf9b0.aspx)
