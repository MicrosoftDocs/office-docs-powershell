---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/test-dataclassification
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance
title: Test-DataClassification
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Test-DataClassification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Test-DataClassification cmdlet to find the confidence and count of a sensitive information type that's found in a specified text string.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-DataClassification
 [-ClassificationNames <String[]>]
 [-DomainController <Fqdn>]
 [-FileExtension <String>]
 [-TestTextExtractionResults <TestTextExtractionResult[]>]
 [-TextToClassify <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lets you know the classification results that are returned by the Microsoft classification engine in specific text. The classification results include the sensitive type, its count, and confidence.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$r = Test-DataClassification -TextToClassify "Credit card information Visa: xxxx xxxx xxxx xxxx. Patient Identifier or SSN: xxx-xx-xxxx"

$r.ClassificationResults
```

This example lists all sensitive info types, their count, and confidence in the specified text string.

## PARAMETERS

### -ClassificationNames
The ClassificationNames parameter specifies the sensitive information type that you want to find in the text specified by the TextToClassify parameter. Valid values are:

- Name
- Id (GUID value)

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is functional only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileExtension
This parameter is available only in the cloud-based service.

{{ Fill FileExtension Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestTextExtractionResults
The TestTextExtractionResults parameter specifies the extracted text from the Test-TextExtraction cmdlet as the input text stream.

```yaml
Type: TestTextExtractionResult[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TextToClassify
The TextToClassify parameter specifies the text string for which classification results need to be shown.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance

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
