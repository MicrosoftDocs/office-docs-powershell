---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-reportsubmissionpolicy
schema: 2.0.0
title: Remove-ReportSubmissionPolicy
---

# Remove-ReportSubmissionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-ReportSubmissionPolicy cmdlet to remove the report submission policy from your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-ReportSubmissionPolicy [-Identity] <ReportSubmissionPolicyIdParameter> [<CommonParameters>]
```

## DESCRIPTION
There's only one report submission policy in an organization, and it's named DefaultReportSubmissionPolicy. You can remove the policy and then use the New-ReportSubmissionPolicy cmdlet to recreate it with the default settings.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy
```

This example removes the report submission policy from your organization.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the report submission policy that you want to remove. The only available policy is named DefaultReportSubmissionPolicy.

```yaml
Type: ReportSubmissionPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
