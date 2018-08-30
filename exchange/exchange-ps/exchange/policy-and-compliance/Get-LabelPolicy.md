---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-LabelPolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-LabelPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-LabelPolicy cmdlet to view label policies in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-LabelPolicy [[-Identity] <PolicyIdParameter>]
```

### -------------------------- Example 1 --------------------------
```
Get-Label
```

This example returns a summary list of all label policies in the organization.

### -------------------------- Example 2 --------------------------
```
Get-Label -Identity "Engineering Group" | Format-List
```

This example returns detailed information for the policy named Engineering Group.

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-LabelPolicy
```

This example returns a summary list of all policies in the organization.

### -------------------------- Example 2 --------------------------
```
Get-LabelPolicy -Identity "Engineering Group" | Format-List
```

This example returns detailed information for the policy named Engineering Group.

## PARAMETERS

### -Identity
The Identity parameter specifies the policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-labelpolicy)
