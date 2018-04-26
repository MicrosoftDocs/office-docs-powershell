---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-RetentionComplianceRule
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-RetentionComplianceRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-RetentionComplianceRule to view retention rules in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RetentionComplianceRule [[-Identity] <ComplianceRuleIdParameter>] [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties that are displayed by default in the summary information.

- Name: The unique name of the rule.

- Disabled: The enabled or disabled status of the rule.

- Mode: The current operating mode of the rule (for example, Enforce).

- Comment: An administrative comment.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-RetentionComplianceRule
```

This example displays summary information for all retention rules in your organization.

### -------------------------- Example 2 --------------------------
```
Get-RetentionComplianceRule -Identity "30 Day Rule" | Format-List
```

This example displays detailed information for the retention rule named "30 Day Rule".

## PARAMETERS

### -Identity
The Identity parameter specifies the retention rule you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Policy
The Policy parameter filters the retention rule results by the associated retention policy. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

You can use this parameter with the Identity parameter in the same command.

```yaml
Type: PolicyIdParameter
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

[Online Version](https://technet.microsoft.com/library/9eabf25a-8519-4c40-8977-b1d46e6acb3e.aspx)
