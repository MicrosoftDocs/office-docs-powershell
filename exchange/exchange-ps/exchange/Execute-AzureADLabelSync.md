---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/execute-azureadlabelsync
applicable: Office 365 Security & Compliance Center
title: Execute-AzureADLabelSync
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Execute-AzureADLabelSync

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Execute-AzureADLabelSync cmdlet to start the synchronization of sensitivity labels into Azure Active Directory. This allows the applicaton of sensitivty labels to Microsoft Teams sites, Office 365 groups, and SharePoint sites. This cmdlet is required if you were  using senstivity labels before September 2019. 

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Execute-AzureADLabelSync [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Execute-AzureADLabelSync
```

This example will initialize the synchronization of sensitivity labels into Azure Active Directory.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
