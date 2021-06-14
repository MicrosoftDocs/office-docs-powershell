---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-activityalert
applicable: Security & Compliance Center
title: Get-ActivityAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ActivityAlert

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ActivityAlert cmdlet to view activity alerts in the Microsoft 365 Defender portal or the Microsoft 365 compliance center. Activity alerts send you email notifications when users perform specific activities in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ActivityAlert [[-Identity] <ComplianceRuleIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance Center PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft 365 Defender portal](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-microsoft-365-security-center) or [Permissions in the Microsoft 365 compliance center](https://docs.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ActivityAlert | Format-List Disabled,Name,Description,Operation,UserId,NotifyUser
```

This example returns a summary list of all activity alerts.

### Example 2
```powershell
Get-ActivityAlert -Identity "All Mailbox Activities"
```

This example returns detailed information about the activity alert named All Mailbox Activities.

## PARAMETERS

### -Identity
The Identity parameter specifies the activity alert that you want to view. You can use any value that uniquely identifies the activity alert. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

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
