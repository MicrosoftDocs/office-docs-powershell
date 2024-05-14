---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-reportsubmissionrule
applicable: Exchange Online
title: Get-ReportSubmissionRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ReportSubmissionRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ReportSubmissionRule cmdlet to view the report submission rule in your cloud-based organization. The report submission rule identifies the reporting mailbox where user reported messages are delivered.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ReportSubmissionRule [[-Identity] <RuleIdParameter>] [-State <RuleState>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ReportSubmissionRule
```

This example returns detailed information about the report submission rule in your organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the report submission rule that you want to view. The default rule is named DefaultReportSubmissionRule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -State
The State parameter filters the results by whether the report submission rule is enabled or disabled. Valid values are:

- Disabled
- Enabled

Remember, there's only one rule in your organization.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:
Accepted values: Enabled, Disabled
Applicable: Exchange Online

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
