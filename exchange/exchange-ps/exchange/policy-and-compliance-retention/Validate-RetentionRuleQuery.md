---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Validate-RetentionRuleQuery
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || o365scc-ps"
---

# Validate-RetentionRuleQuery

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Validate-RetentionRuleQuery cmdlet to validate the Keyword Query Language (KQL) content search filters for retention rules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Validate-RetentionRuleQuery -KqlQueryString <String> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Validate-RetentionRuleQuery -KqlQueryString 'from:"Ann Beebe" AND subject:northwind'
```

This example validates the specified KQL content search filter.

## PARAMETERS

### -KqlQueryString
The KqlQueryString parameter specifies the KQL text search string that you want to validate.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see [Keyword Query Language (KQL) syntax reference](https://go.microsoft.com/fwlink/p/?linkid=269603).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](https://technet.microsoft.com/library/7e630b2a-d199-495e-91f7-349d426f6e8c.aspx)
