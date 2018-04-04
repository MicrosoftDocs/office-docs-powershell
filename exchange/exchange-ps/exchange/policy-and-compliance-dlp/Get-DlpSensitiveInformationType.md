---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-DlpSensitiveInformationType
schema: 2.0.0
---

# Get-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-DlpSensitiveInformationType cmdlet to list the sensitive information types that are defined for your organization in the Security & Compliance Center. Sensitive information types are used by Data Loss Prevention (DLP) rules to check for sensitive information such as social security, passport, or credit card numbers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DlpSensitiveInformationType [[-Identity] <SensitiveInformationTypeIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The RecommendedConfidence property of the returned objects contains a value that represents the default (or recommended) confidence level that should be used with the corresponding sensitive information type.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Get-DlpSensitiveInformationType
```

This example lists all the sensitive information types defined for your organization.

### Example 2
```
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/2ac12437-1463-45e1-9da5-f306ae07e1af.aspx)

