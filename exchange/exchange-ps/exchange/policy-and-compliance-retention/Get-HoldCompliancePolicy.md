---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-HoldCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-HoldCompliancePolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-HoldCompliancePolicy to view existing preservation policies in the Security & Compliance Center.

Note: The Get-HoldCompliancePolicy cmdlet has been replaced by the Get-RetentionCompliancePolicy cmdlet. If you have scripts that use Get-HoldCompliancePolicy, update them to use Get-RetentionCompliancePolicy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HoldCompliancePolicy [[-Identity] <PolicyIdParameter>] [-DistributionDetail] [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties displayed by default.

- Name: The unique name of the policy.

- Workload: Where the policy is applied. For example, SharePoint or Exchange.

- Enabled: The value True means the policy is enabled.

- Mode: The current operating mode of the policy. The possible values are Test (the content is tested, but no rules are enforced), AuditAndNotify (when content matches the conditions specified by the policy, the rule is not enforced, but notification emails are sent) or Enforce (all aspects of the policy are enabled and enforced).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-HoldCompliancePolicy
```

This example displays summary information for all preservation policies in your organization.

### Example 2
```powershell
Get-HoldCompliancePolicy -Identity "Regulation 123 Compliance" | Format-List
```

This example displays detailed information for the policy named "Regulation 123 Compliance".

## PARAMETERS

### -DistributionDetail
The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the preservation policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-retention/get-holdcompliancepolicy)
