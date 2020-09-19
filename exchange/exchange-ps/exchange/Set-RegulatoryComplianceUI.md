---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-regulatorycomplianceui
applicable: Office 365 Security & Compliance Center
title: Set-RegulatoryComplianceUI
schema: 2.0.0
---

# Set-RegulatoryComplianceUI

## SYNOPSIS
This cmdlet is available only in the Security & Compliance Center. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell)
.

Use the Set-RegulatoryComplianceUI cmdlet to display the UI option in retention label settings to mark content as a regulatory record.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RegulatoryComplianceUI -Enabled <Boolean> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Set-RegulatoryComplianceUI -Enabled $true
```

This example displays the UI option in retention label settings to mark content as a regulatory record.

## PARAMETERS

### -Enabled
The Enabled parameter specifies whether to show or hide the UI option in retention label settings to mark content as a regulatory record. Valid values are:

$true: The option to mark content as a regulatory record is visible in the UI for retention label settings.

$false: The option to mark content as a regulatory record is not visible in the UI for retention label settings. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
