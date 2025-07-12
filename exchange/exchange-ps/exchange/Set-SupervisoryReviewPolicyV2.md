---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-supervisoryreviewpolicyv2
applicable: Security & Compliance
title: Set-SupervisoryReviewPolicyV2
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-SupervisoryReviewPolicyV2

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-SupervisoryReviewPolicyV2 cmdlet to modify supervisory review policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SupervisoryReviewPolicyV2 [-Identity] <PolicyIdParameter>
 [-AddReviewers <String[]>]
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-Force]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PolicyTemplate <String>]
 [-PreservationPeriodInDays <Int32>]
 [-RemoveReviewers <String[]>]
 [-RetentionPeriodInDays <Int32>]
 [-Reviewers <String[]>]
 [-UserReportingWorkloads <String[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SupervisoryReviewPolicyV2 -Identity "EU Brokers" -AddReviewers chris@contoso.com,michelle@contoso.com -Comment "Updated for new EU regulations"
```

This example adds reviewers and updates the comment for the supervisory review policy named EU Brokers.

## PARAMETERS

### -Identity
The Identity parameter specifies the supervisory review policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddReviewers
The AddReviewers parameter specifies the SMTP addresses of reviewers to add to the supervisory review policy. You can specify multiple email addresses separated by commas.

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

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Enabled
{{ Fill Enabled Description }}

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

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyRBACScopes
{{ Fill PolicyRBACScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All))
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTemplate
{{ Fill PolicyTemplate Description }}

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

### -PreservationPeriodInDays
{{ Fill PreservationPeriodInDays Description }}

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

### -RemoveReviewers
The RemoveReviewers parameter specifies the SMTP addresses of reviewers to remove from the supervisory review policy. You can specify multiple email addresses separated by commas.

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

### -RetentionPeriodInDays
The RetentionPeriodInDays parameter specifies the number of days that the messages will be retained for review.

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

### -Reviewers
The Reviewers parameter specifies the SMTP addresses of the reviewers for the supervisory review policy. You can specify multiple email addresses separated by commas.

The reviewers that you specify with this parameter replace the existing reviewers. To selectively add or remove reviewers, use the AddReviewers and RemoveReviewers parameters.

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

### -UserReportingWorkloads
{{ Fill UserReportingWorkloads Description }}

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
