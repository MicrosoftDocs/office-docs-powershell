---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpsensitiveinformationtype
schema: 2.0.0
title: Get-DlpSensitiveInformationType
---

# Get-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpSensitiveInformationType cmdlet to list the sensitive information types that are defined for your organization in the Microsoft Purview compliance portal. Sensitive information types are used by data loss prevention (DLP) rules to check for sensitive information such as social security, passport, or credit card numbers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpSensitiveInformationType [[-Identity] <SensitiveInformationTypeIdParameter>]
 [-Capability <ClassificationCapabilityType>]
 [-IncludeDetails]
 [-IncludeElements <ClassificationPrimitiveElementType>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
The RecommendedConfidence property of the returned objects contains a value that represents the default (or recommended) confidence level that should be used with the corresponding sensitive information type.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

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

> Applicable: Security & Compliance

The Identity parameter specifies the sensitive information type that you want to view. Valid values are:

- Name
- Id (GUID value)

```yaml
Type: SensitiveInformationTypeIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Capability

> Applicable: Security & Compliance

{{ Fill Capability Description }}

```yaml
Type: ClassificationCapabilityType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDetails

> Applicable: Security & Compliance

{{ Fill IncludeDetails Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeElements

> Applicable: Security & Compliance

{{ Fill IncludeElements Description }}

```yaml
Type: ClassificationPrimitiveElementType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
