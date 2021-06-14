---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/execute-azureadlabelsync
applicable: Security & Compliance Center
title: Execute-AzureADLabelSync
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Execute-AzureADLabelSync

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Execute-AzureADLabelSync cmdlet to start the synchronization of sensitivity labels into Azure Active Directory. This allows the application of sensitivity labels to Microsoft Teams sites, Microsoft 365 Groups, and SharePoint sites. This cmdlet is required if you were using sensitivity labels before September 2019.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Execute-AzureADLabelSync [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance Center PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft 365 compliance center](https://docs.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

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
