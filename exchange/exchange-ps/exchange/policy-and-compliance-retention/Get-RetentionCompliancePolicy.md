---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-RetentionCompliancePolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-RetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-RetentionCompliancePolicy to view existing retention policies in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RetentionCompliancePolicy [[-Identity] <PolicyIdParameter>] [-DistributionDetail] [-RetentionRuleTypes]
 [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties that are displayed by default.

- Name: The unique name of the policy.

- Workload: Where the policy is applied. For example, SharePoint or Exchange.

- Enabled: The value True means the policy is enabled.

- Mode: The current operating mode of the policy. The possible values are Test (the content is tested, but no rules are enforced), AuditandNotify (when content matches the conditions specified by the policy, the rule is not enforced, but notification emails are sent) or Enforce (all aspects of the policy are enabled and enforced).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-RetentionCompliancePolicy
```

This example displays summary information for all retention policies in your organization.

### -------------------------- Example 2 --------------------------
```
Get-RetentionCompliancePolicy -Identity "Regulation 123 Compliance" -DistributionDetail | Format-List
```

This example displays detailed information for the policy named "Regulation 123 Compliance", including accurate values for the DistributionStatus and \*Location properties.

## PARAMETERS

### -DistributionDetail
The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch.

If you don't use this switch, the values of the DistributionStatus and \*Location property values will be inaccurate.

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
The Identity parameter specifies the retention policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

### -RetentionRuleTypes
The RetentionRuleTypes switch specifies whether to return the value of the RetentionRuleTypes property in the results. You don't need to specify a value with this switch.

To see the RetentionRuleTypes property, you need to pipe the command to a formatting cmdlet. For example, Get-RetentionCompliancePolicy -RetentionRuleTypes | Format-Table -Auto Name,RetentionRuleTypes. If you don't use the RetentionRuleTypes switch, the value appears blank.

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

[Online Version](https://technet.microsoft.com/library/e9f861b8-481a-49e0-884d-6617ff9852a1.aspx)
