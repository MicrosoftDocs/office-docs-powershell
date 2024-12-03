---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2259002
schema: 1.0.0
---

# Get-ScannerConfiguration

## SYNOPSIS
Gets the configuration settings for the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Get-ScannerConfiguration [<CommonParameters>]
```

## DESCRIPTION
The **Get-ScannerConfiguration** cmdlet gets the configuration settings for the Microsoft Purview Information Protectionscanner. 

If you run [Import-ScannerConfiguration](./Import-ScannerConfiguration.md), this action automatically configures the scanner to get its configuration offline. As a result, when you run this Get-ScannerConfiguration cmdlet after importing settings from a file, **OnlineConfiguration** displays **Off**. 


## EXAMPLES

### Example 1: Gets the configuration for the Microsoft Purview Information Protection scanner
```
PS C:\> Get-ScannerConfiguration
OnlineConfiguration : On
ReportLevel         : Info
LogLevel            : Trace
Cluster             : contoso-test
SqlInstance         : localhost\sqlexpress
DatabaseName        : AIPScannerUL_contoso-test
Cloud               : Commercial
```

This command gets the current PowerShell configuration settings for the Microsoft Purview Information Protection scanner. 

In this example, the output shows that the scanner is using the default configuration for online configuration, the report level of **Info**, and a logging level of **Trace**. The cluster name, SQL instance, and database names are listed, and the cloud type is **Commercial**.



## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.

For more information, see [about_CommonParameters](/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-ScanStatus](Get-ScanStatus.md)

[Install-Scanner](Install-Scanner.md)

[Set-ScannerDatabase](Set-ScannerDatabase.md)

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Start-Scan](Start-Scan.md)

[Uninstall-Scanner](Uninstall-Scanner.md)

[Update-ScannerDatabase](Update-ScannerDatabase.md)