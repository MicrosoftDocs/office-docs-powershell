---
applicable: Security & Compliance
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig
schema: 2.0.0
title: Export-PurviewConfig
---

# Export-PurviewConfig

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Export-PurviewConfig cmdlet to export Microsoft Purview diagnostic configuration data for your organization. The exported data is returned as a compressed ZIP file (byte array) containing component-specific diagnostic information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-PurviewConfig -Components <MultiValuedProperty>
 [-Confirm]
 [[-DomainController] <Fqdn>]
 [[-PolicyName <String>]]
 [[-UserPrincipalName <SmtpAddress>]]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet exports Purview diagnostic data for specified components in your organization. The data is returned as a ZIP archive (binary-encoded byte array) for each component. Each file contains the diagnostic configuration data for the component in a structured format.

The exported data is useful for troubleshooting and diagnostics of Purview configuration issues across DLP, MIP Labels, Classification, and Data Lifecycle Management.

You need to be assigned permissions in the Security & Compliance before you can use this cmdlet. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Export-PurviewConfig -Components DLP
```

This example exports diagnostic configuration data for the DLP component.

### Example 2
```powershell
$result = Export-PurviewConfig -Components DLP,MIPLabels

[IO.File]::WriteAllBytes("C:\DiagnosticExport.zip", $result)
```

This example exports diagnostic data for the DLP and MIPLabels components and saves the resulting ZIP file to disk.

## PARAMETERS

### -Components

> Applicable: Security & Compliance

The Components parameter specifies which Purview components to export diagnostic data for. Valid values are:

- ClassificationAndTextExtraction
- DLM
- DLP
- MIPLabels

You can specify multiple values separated by commas.

**Note**: If you specify an unsupported component value, a warning is logged and the component is skipped.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName

> Applicable: Security & Compliance

The PolicyName parameter specifies the name of the policy to scope the export to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Security & Compliance

The UserPrincipalName parameter specifies the user principal name (UPN) of the user to scope the export to.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
