---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258761
schema: 1.0.0
---

# Import-ScannerConfiguration

## SYNOPSIS
Imports local configuration for the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Import-ScannerConfiguration -FileName <String> [<CommonParameters>]
```

## DESCRIPTION
The **Import-ScannerConfiguration** cmdlet imports local configuration settings for the Microsoft Purview Information Protection scanner, and automatically configures the scanner to use offline configuration. 

Use this cmdlet after you've configured the following in the Microsoft Purview compliance portal:

- Configured a cluster (unified labeling client only) or a profile
- Configured a content scan job for the scanner
- Exported the settings to a file instead of having the scanner connect to the Microsoft Purview Information Protection service.

For example, use this cmdlet when the computer running the scanner doesn't have Internet connectivity.

If you need to make configuration changes to the scanner after you have run this cmdlet, make those changes in the Microsoft Purview compliance portal, export the content scan job again, and rerun this cmdlet.

If you want to change the scanner to use online configuration after you have run this cmdlet, use the [Set-ScannerConfiguration](./Set-ScannerConfiguration.md) and set the *OnlineConfiguration* parameter to **On**.

Any changes will be used the next time the scanner runs. If you need the changes to take effect immediately, restart the Microsoft Purview Information Protection scanner on the Windows server computer.



## EXAMPLES

### Example 1: Import local configuration settings for the Microsoft Purview Information Protection scanner
```powershell
PS C:\> Import-ScannerConfiguration -FileName "C:\Scannerconfig\Eu-set.json"
Configuration was imported successfully.

```

The scanner is configured to prevent getting its configuration directly from the Microsoft Purview Information Protection service, and the configuration settings are imported from a file named **C:\Scannerconfig\Eu-set.json**.

## PARAMETERS

### -FileName
Specifies a file that contains scanner configuration settings. To create this file, export your content scan job from the Microsoft Purview compliance portal.

The file is used to do a one-time import of configuration settings into the scanner configuration database.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.

For more information, see [about_CommonParameters](/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Get-ScanStatus](Get-ScanStatus.md)

[Install-Scanner](Install-Scanner.md)

[Set-ScannerDatabase](Set-ScannerDatabase.md)

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Start-Scan](Start-Scan.md)

[Uninstall-Scanner](Uninstall-Scanner.md)

[Update-ScannerDatabase](Update-ScannerDatabase.md)