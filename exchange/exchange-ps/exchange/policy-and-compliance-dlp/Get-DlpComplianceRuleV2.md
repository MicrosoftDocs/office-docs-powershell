---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-DlpComplianceRuleV2
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-DlpComplianceRuleV2

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-DlpComplianceRuleV2 to view Data Loss Prevention (DLP) rules in the Security & Compliance Center. DLP rules identify and protect sensitive information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DlpComplianceRuleV2 [[-Identity] <ComplianceRuleIdParameter>] [-DomainController <Fqdn>]
 [-Policy <PolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-DlpComplianceRuleV2
```

This example displays summary information for all DLP rules in the Security & Compliance Center.

### -------------------------- Example 2 --------------------------
```
Get-DlpComplianceRuleV2 -Identity "PII SS# Custom" | Format-List
```

This example displays detailed information for the DLP rule named "PII SS# Custom".

### -------------------------- Example 3 --------------------------
```
Get-DlpComplianceRuleV2 -Policy "PII Limited"
```

This example lists all the rules included in the DLP compliance policy named "PII Limited".

## PARAMETERS

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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
The Identity parameter specifies the DLP rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

- Id

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
The Policy parameter specifies the DLP policy that contains the rules. Using this parameter returns all rules that are assigned to the specified policy. Valid input for this parameter is any value that uniquely identifies the policy. For example

- Name

- Distinguished name (DN)

- GUID

- Id

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

[Online Version](https://technet.microsoft.com/library/4566b601-104e-4843-b1d0-110b33ba1311.aspx)
