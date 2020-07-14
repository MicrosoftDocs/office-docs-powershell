---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-dlpsensitiveinformationtype
applicable: Office 365 Security & Compliance Center
title: Get-DlpSensitiveInformationType
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpSensitiveInformationType cmdlet to list the sensitive information types that are defined for your organization in the Security & Compliance Center. Sensitive information types are used by Data Loss Prevention (DLP) rules to check for sensitive information such as social security, passport, or credit card numbers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpSensitiveInformationType [[-Identity] <SensitiveInformationTypeIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The RecommendedConfidence property of the returned objects contains a value that represents the default (or recommended) confidence level that should be used with the corresponding sensitive information type.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Get-DlpSensitiveInformationType
```

This example lists all the sensitive information types defined for your organization.

### Example 2
```powershell
Get-DlpSensitiveInformationType -Identity "Credit Card Number" | Format-List
```

This example lists all the properties of the sensitive information type named "Credit Card Number".

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type that you want to view. Valid values are:

- Name

- Id (GUID value)

```yaml
Type: SensitiveInformationTypeIdParameter
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
