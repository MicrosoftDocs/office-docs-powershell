---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-supervisoryreviewpolicy
schema: 2.0.0
title: Set-SupervisoryReviewPolicy
---

# Set-SupervisoryReviewPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-SupervisoryReviewPolicy cmdlet to modify supervisory review policies in the Microsoft Purview portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SupervisoryReviewPolicy [-Identity] <SearchObjectIdParameter>
 [-AddReviewers <String[]>]
 [-Condition <String>]
 [-Description <String>]
 [-PolicyType <SupervisoryReviewPolicyType>]
 [-RemoveReviewers <String[]>]
 [-Reviewers <String[]>]
 [-SamplingRate <System.Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SupervisoryReviewPolicy -Identity "EU Brokers" -AddReviewers chris@contoso.com,michelle@contoso.com -Description "Updated for new EU regulations"
```

This example adds reviewers and updates the description for the supervisory review policy named EU Brokers.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the supervisory review policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: SearchObjectIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddReviewers

> Applicable: Security & Compliance

The AddReviewers parameter specifies the SMTP addresses of reviewers to add to the supervisory review policy. You can specify multiple email addresses separated by commas.

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

### -Condition

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

Use the Condition parameter on the New-SupervisoryReviewRule or Set-SupervisoryReviewRule cmdlets for the corresponding supervisory review rule.

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

### -Description

> Applicable: Security & Compliance

The Description parameter specifies an optional description for the supervisory review policy. If the value contains spaces, enclose the value in quotation marks.

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

### -PolicyType

> Applicable: Security & Compliance

The PolicyType parameter specifies the type of the supervisory review policy. Valid values are:

- PreReview
- PostReview

```yaml
Type: SupervisoryReviewPolicyType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveReviewers

> Applicable: Security & Compliance

The RemoveReviewers parameter specifies the SMTP addresses of reviewers to remove from the supervisory review policy. You can specify multiple email addresses separated by commas.

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

### -Reviewers

> Applicable: Security & Compliance

The Reviewers parameter specifies the SMTP addresses of the reviewers for the supervisory review policy. You can specify multiple email addresses separated by commas.

The values you specify with this parameter replace any existing reviewers.

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

### -SamplingRate

> Applicable: Security & Compliance

The SamplingRate parameter specifies the sampling rate for the supervisory review policy. A valid value is an integer from 0 through INT32 (2147483647). The default value is 0.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
