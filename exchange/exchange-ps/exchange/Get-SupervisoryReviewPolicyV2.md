---
applicable: Office 365 Security & Compliance Center
schema: 2.0.0
---

# Get-SupervisoryReviewPolicyV2

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-SupervisoryReviewPolicyV2 cmdlet to view supervisory review policies in the Office 365 Security & Compliance Center. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SupervisoryReviewPolicyV2 [[-Identity] <PolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1 -------------------------- (Office 365 Security & Compliance Center)
```
Get-SupervisoryReviewPolicyV2
```

This example returns a summary list of all supervisory review policies.

### Example 2 -------------------------- (Office 365 Security & Compliance Center)
```
Get-SupervisoryReviewPolicyV2 -Identity "EU Brokers Policy" | Format-List
```

This example returns detailed information for the supervisory review policy named EU Brokers Policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the supervisory review policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ce966c7e-a0ba-4c7b-afc7-d9a0a7f3f831.aspx)

