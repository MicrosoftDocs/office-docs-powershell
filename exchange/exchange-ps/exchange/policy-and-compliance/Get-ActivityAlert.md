---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-ActivityAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-ActivityAlert

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-ActivityAlert cmdlet to view activity alerts in the Security & Compliance Center. Activity alerts send you email notifications when users perform specific activities in Office 365.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ActivityAlert [[-Identity] <ComplianceRuleIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ActivityAlert | Format-List Disabled,Name,Description,Operation,UserId,NotifyUser
```

This example returns a summary list of all activity alerts.

### -------------------------- Example 2 --------------------------
```
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3ae133df-cd0e-4782-b41a-973ca9578776.aspx)
