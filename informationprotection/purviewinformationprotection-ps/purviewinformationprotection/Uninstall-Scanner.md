---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258856
schema: 1.0.0
---

# Uninstall-Scanner

## SYNOPSIS
Uninstalls the Windows Server service for the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Uninstall-Scanner [<CommonParameters>]
```

## DESCRIPTION
The **Uninstall-Scanner** cmdlet uninstalls the Microsoft Purview Information Protection scanner Windows Server service. 

To run this command, you must have local Administrator rights for the Windows Server computer and you must restart the computer after running the command to complete the removal process.

This command does *not* remove the following:

- **Scanner reports**, located in **%localappdata%\Microsoft\MSIP\Scanner\Reports**.

- **The SQL Server database** that was created by running the [Install-AIPScanner](nstall-AIPScanner.md) cmdlet when the Microsoft Purview Information Protection scanner was installed. If this database is no longer required, you must manually remove it. 

    The database name for the scanner is **AIPScannerUL_\<cluster_name>**.


## EXAMPLES

### Example 1: Uninstall the Microsoft Purview Information Protection Scanner service
```
PS C:\> Uninstall-Scanner
```

This command removes the service for the Microsoft Purview Information Protection scanner.

## PARAMETERS

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-ScannerConfiguration](Get-ScannerConfiguration.md)

[Get-ScanStatus](Get-ScanStatus.md)

[Install-Scanner](Install-Scanner.md)

[Set-ScannerDatabase](Set-ScannerDatabase.md)

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Start-Scan](Start-Scan.md)

[Update-ScannerDatabase](Update-ScannerDatabse.md)