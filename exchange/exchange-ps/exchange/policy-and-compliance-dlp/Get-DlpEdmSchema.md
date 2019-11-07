---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-DlpEdmSchema
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-DlpEdmSchema

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-DlpEdmSchema cmdlet to view exact data match (EDM) data loss prevention (DLP) schemas in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpEdmSchema [[-Identity] <EdmStorageIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Get-DlpEdmSchema
```

This example returns a summary list of all DLP EDM schemas in the organization.

### Example 2
```
Get-DlpEdmSchema -Identity "Schema for Patient Records"
```

This example returns detailed information for the DLP EDM schema named Schema for patient Records.

## PARAMETERS

### -Identity
The Identity parameter specifies the DLP EDM schema that you want to view. You can use any value that uniquely identifies the schema. For example:

- Name

- Distinguished name (DN)

```yaml
Type: EdmStorageIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-dlp/Get-DlpEdmSchema)

[Create custom sensitive information types with Exact Data Match based classification](https://docs.microsoft.com/office365/securitycompliance/create-custom-sensitive-info-type-edm)
