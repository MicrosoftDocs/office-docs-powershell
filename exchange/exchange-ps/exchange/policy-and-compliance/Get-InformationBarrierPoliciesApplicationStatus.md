---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierPoliciesApplicationStatus
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierPoliciesApplicationStatus

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-InformationBarrierPoliciesApplicationStatus cmdlet to [view status of information barrier policy application](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies#view-status-of-user-accounts-segments-policies-or-policy-application) 

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Default (Default)
```
Get-InformationBarrierPoliciesApplicationStatus [-All] [<CommonParameters>]
```

### Identity
```
Get-InformationBarrierPoliciesApplicationStatus [[-Identity] <PolicyIdParameter>] [-All] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-InformationBarrierPoliciesApplicationStatus
```

This will display information about whether all policy applications completed, failed, or is in progress.

### -------------------------- Example 2 --------------------------
```
Get-InformationBarrierPoliciesApplicationStatus -All
```

This will display information about whether policy application completed, failed, or is in progress.

## PARAMETERS

### -Identity
The Identity parameter specifies the information barrier policy application that you want to view. This value is a GUID that's assigned when you run the Start-InformationBarrierPoliciesApplication cmdlet (for example, a0551cee-db3d-4002-9fa0-94358035fdf2). Another way to see this Identity value is to run the command Get-InformationBarrierPoliciesApplicationStatus -All.

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

### -All
The All switch specifies whether to include ???. You don't need to specify a value with this switch.

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-informationbarrierpoliciesapplicationstatus)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)
