---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierPolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-InformationBarrierPolicy cmdlet to view a list of information barrier policies that are defined in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### InformationBarrierDefault (Default)
```
Get-InformationBarrierPolicy [-ExoPolicyId <Guid>] [<CommonParameters>]
```

### Identity
```
Get-InformationBarrierPolicy [[-Identity] <PolicyIdParameter>] [-ExoPolicyId <Guid>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-InformationBarrierPolicy
```

This example displays a list of information barrier policies that were defined, and their status.

## PARAMETERS

### -Identity
The Identity parameter specifies the information barrier policy that you want to view.

```yaml
Type: PolicyIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ExoPolicyId
{{Fill ExoPolicyId Description}}

```yaml
Type: Guid
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-informationbarrierpolicy)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)

[New-InformationBarrierPolicy](New-InformationBarrierPolicy.md)
