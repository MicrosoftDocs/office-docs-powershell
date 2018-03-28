---
applicable: Office 365 Security & Compliance Center
schema: 2.0.0
---

# Get-CaseHoldPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-CaseHoldPolicy to view existing case hold policies in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-CaseHoldPolicy [[-Identity] <PolicyIdParameter>] [-Case <String>] [-DistributionDetail] [-IncludeBindings]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Get-CaseHoldPolicy -Case "Contoso Legal"
```

This example displays detailed information for the policy that's associated with the eDiscovery case named Contoso Legal.

### Example 2
```
Get-CaseHoldPolicy -Identity "Regulation 123 Compliance"
```

This example displays detailed information for the policy named "Regulation 123 Compliance".

## PARAMETERS

### -Case
The Case parameter specifies the case hold policy that you want to view by using the eDiscovery case that's associated with the policy. You can use the following values to identify the eDiscovery case:

- Name

- Identity (GUID value).

You can find these values by running the command: Get-ComplianceCase | Format-Table -Auto Name,Status,Identity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
The Identity parameter specifies the case hold policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

### -IncludeBindings
PARAMVALUE: SwitchParameter

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

[Online Version](https://technet.microsoft.com/library/ea8d4be5-bb31-4db3-a49e-08861561f402.aspx)

