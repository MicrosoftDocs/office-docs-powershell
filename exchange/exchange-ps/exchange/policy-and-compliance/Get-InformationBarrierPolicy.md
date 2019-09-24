---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-InformationBarrierPolicy cmdlet to view information barrier policies in the Office 365 Security & Compliance Center.

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
For more information, see [Information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-InformationBarrierPolicy | Format-Table Name,State,AssignedSegment,Segments* -Auto
```

This example displays a summary list of all information barrier policies.

### -------------------------- Example 2 --------------------------
```
Get-InformationBarrierPolicy -Identity HR-Sales
```

This example displays detailed information for the information barrier policy named HR-Sales.

## PARAMETERS

### -Identity
The Identity parameter specifies the information barrier policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the ExOPolicyId parameter.

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
The ExOPolicyId parameter specifies the information barrier policy that you want to view, but using the GUID part of the ExoPolicyId property value from the output of the Get-InformationBarrierRecipientStatus cmdlet.

You can't use this parameter with the Identity parameter.

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
