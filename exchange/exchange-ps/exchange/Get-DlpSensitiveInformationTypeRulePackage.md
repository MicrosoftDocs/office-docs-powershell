---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-dlpsensitiveinformationtyperulepackage
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-DlpSensitiveInformationTypeRulePackage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-DlpSensitiveInformationTypeRulePackage

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpSensitiveInformationTypeConfig cmdlet to view data loss prevention (DLP) sensitive information type rule packages in the Security & Compliance Center.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpSensitiveInformationTypeRulePackage [[-Identity] <SensitiveInformationTypeRuleCollectionIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by DLP to detect sensitive content. The default sensitive information type rule package is named Microsoft Rule Package.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Get-DlpSensitiveInformationTypeRulePackage
```

This example returns a summary list of all sensitive information type rule packages in the organization.

### Example 2
```powershell
Get-DlpSensitiveInformationTypeRulePackage -Identity "Microsoft Rule Package" | Format-List
```

This example returns detailed information for the sensitive information type rule package named Microsoft Rule Package.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type rule package that you want to view. You can use any value that uniquely identifies the rule package. For example:

- RuleCollectionName

- LocalizedName

- GUID (from the Identity value)

```yaml
Type: SensitiveInformationTypeRuleCollectionIdParameter
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
