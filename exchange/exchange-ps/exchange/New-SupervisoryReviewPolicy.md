---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-supervisoryreviewpolicy
applicable: Security & Compliance
title: New-SupervisoryReviewPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-SupervisoryReviewPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-SupervisoryReviewPolicy cmdlet to create supervisory review policies in the Microsoft Purview portal. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SupervisoryReviewPolicy [-Name] <String>
 [[-Condition] <String>]
 [[-Description] <String>]
 [[-PolicyType] <SupervisoryReviewPolicyType>]
 [[-Reviewers] <String[]>]
 [[-SamplingRate] <System.Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-SupervisoryReviewPolicy -Name "EU Brokers Policy" -Reviewers laura@contoso.com,julia@contoso.com -Description "Created by the compliance team"
```

This example creates a new supervisory review policy named EU Brokers Policy.

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the supervisory review policy. The name can't exceed 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Condition
This parameter is reserved for internal Microsoft use.

Use the Condition parameter on the New-SupervisoryReviewRule or Set-SupervisoryReviewRule cmdlets for the corresponding supervisory review rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies an optional description for the supervisory review policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
The PolicyType parameter specifies the type of the supervisory review policy. Valid values are:

- PreReview
- PostReview

```yaml
Type: SupervisoryReviewPolicyType
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reviewers
The Reviewers parameter specifies the SMTP addresses of the reviewers for the supervisory review policy. You can specify multiple email addresses separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamplingRate
The SamplingRate parameter specifies the sampling rate for the supervisory review policy. A valid value is an integer from 0 through INT32 (2147483647). The default value is 0.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 6
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
