---
applicable: Security & Compliance
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-regulatorycomplianceui
schema: 2.0.0
title: Set-RegulatoryComplianceUI
---

# Set-RegulatoryComplianceUI

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell)
.

Use the Set-RegulatoryComplianceUI cmdlet to display the UI option in retention label settings to mark content as a regulatory record.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RegulatoryComplianceUI -Enabled <Boolean>
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-RegulatoryComplianceUI -Enabled $true
```

This example displays the UI option in retention label settings to mark content as a regulatory record.

## PARAMETERS

### -Enabled

> Applicable: Security & Compliance

The Enabled parameter specifies whether to show or hide the UI option in retention label settings to mark content as a regulatory record. Valid values are:

$true: The option to mark content as a regulatory record is visible in the UI for retention label settings.

$false: The option to mark content as a regulatory record is not visible in the UI for retention label settings. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
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
