---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-ComplianceRetentionEventType
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-ComplianceRetentionEventType

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-ComplianceRetentionEventType cmdlet to view retention event types in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ComplianceRetentionEventType [-Identity <ComplianceRuleIdParameter>] [-LoadTag] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ComplianceRetentionEventType | Format-Table Name,Priority
```

This example returns a summary list of all retention event types

### -------------------------- Example 2 --------------------------
```
Get-ComplianceRetentionEventType -Identity "Fabrikam Project" -LoadTag
```

This example returns detailed information for the retention event type named Fabrikam Project, including the associated compliance tags.

## PARAMETERS

### -Identity
The Identity parameter specifies the retention event type that you want to view. You can use any value that uniquely identifies the retention event type. For example:

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

### -LoadTag
The LoadTag switch specifies whether to show the compliance tags that are associated with the retention event types. You don't need to specify a value with this switch.

If you don't use this switch, the ComplianceTag property will always appear empty in the results.

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-retention/Get-ComplianceRetentionEventType)
