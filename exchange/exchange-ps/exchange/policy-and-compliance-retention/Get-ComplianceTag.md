---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-ComplianceTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-ComplianceTag

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-ComplianceTag cmdlet to view labels in the Security & Compliance Center. Labels apply retention settings to content.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceTag [[-Identity] <ComplianceRuleIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ComplianceTag | Format-Table -Auto Name,Priority,RetentionAction,RetentionDuration,Workload
```

This example returns a summary list of all labels.

### -------------------------- Example 2 --------------------------
```
Get-ComplianceTag -Identity "HR Content"
```

This example returns detailed information about the label named HR Content.

## PARAMETERS

### -Identity
The Identity parameter specifies the label that you want to view. You can use any value that uniquely identifies the tag. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
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

[Online Version](https://technet.microsoft.com/library/101c1af9-202a-43a9-ad3d-bde116b01889.aspx)
