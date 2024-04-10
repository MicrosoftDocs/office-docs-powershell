---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258957
schema: 1.0.0
---

# Set-ScannerConfiguration

## SYNOPSIS
Sets optional configuration for the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Set-ScannerConfiguration [-ReportLevel <ReportLevel>] [-OnlineConfiguration <OnlineConfiguration>] [<CommonParameters>]
```

## DESCRIPTION
The **Set-ScannerConfiguration** cmdlet sets local configuration settings for the Microsoft Purview Information Protection scanner. 

You configure most of the scanner configuration settings in the Microsoft Purview compliance portal, but must use this cmdlet if you need to import configuration settings from a file because the scanner cannot support online configuration, or if you need to change the report level for the locally created reports.

Any changes will be used the next time the scanner runs. If you need the changes to take effect immediately, restart the Microsoft Purview Information Protection scanner on the Windows server computer.


## EXAMPLES

### Example 1: Set the Microsoft Purview Information Protection scanner to use online configuration

```
PS C:\> Set-ScannerConfiguration -OnlineConfiguration On

Configuration was set successfully.
```

This command sets the scanner to get its configuration directly from the Microsoft Purview Information Protection service.


## PARAMETERS

### -ReportLevel
Define the level of logging for the scanner reports. By default, only files that are successfully labeled by the scanner or contain sensitive information types are included in the log file.

Log files are stored in the **%localappdata%\Microsoft\MSIP\Scanner\Reports** folder. A summary report **(.txt)** includes the time taken to scan, the number of scanned files, and statistics of how many files were classified and protected. Detailed reports **(.csv)** has details for each file. The folder stores up to 60 reports for each scanning cycle and all but the latest report is compressed to help minimize the required disk space.

|Log level |Description  |
|---------|---------|
|**Debug**     | Logs every file that was discovered and the resulting action. This level of logging is useful for troubleshooting but slows down the Microsoft Purview Information Protection scanner. This category includes files that don't meet any of the conditions and files that are skipped because of an unsupported file type. </br></br>For example, trying to label a file for classification-only when the file type doesn't support this action, and trying to label files that are automatically excluded.  |
|**Info**   (Default)  | Logs only the files that:<br>- Were successfully labeled by the scanner<br>- Would have been labeled by the scanner, if the scanner was not in discovery mode<br>- Contain sensitive information types      |
|**Error**     |  Logs only the files that the scanner attempted to label or identify but could not. For example, a file was in use, or the scanner service did not have write access to the file.       |
|**Off**     |  Disables reporting, which results in the best performance for the scanner.       |

The local Windows **Applications and Services** event log, **Information Protection Scanner** contains additional logging information. The events include the start and end times for each scanning cycle, when a scanned file has a label applied, and when protection is applied or removed. For more information, see [Event log IDs and descriptions for the scanner](/information-protection/deploy-aip-scanner#event-log-ids-and-descriptions-for-the-scanner).


```yaml
Type: ReportLevel
Parameter Sets: (All)
Aliases:
Accepted values: Off, Debug, Info, Error

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlineConfiguration 
Specifies whether the scanner gets its configuration settings directly from the Microsoft Purview Information Protection service (the default), or uses an offline configuration file.

- **On:** The default setting. The scanner gets its configuration settings directly from the Microsoft Purview Information Protection service.

- **Off:** The scanner is prevented from getting its configuration settings directly from the Microsoft Purview Information Protection service. Instead, the scanner is configured by settings that you import from a file. 

If the scanner cannot support online configuration, you must still configure the scanner in the Azure portal. Then, export the scanner configuration from the portal to a .json file and import this file by using the [Import-ScannerConfiguration](./Import-ScannerConfiguration.md) cmdlet.

```yaml
Type: OnlineConfiguration
Parameter Sets: (All)
Aliases:
```

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

[Start-Scan](Start-Scan.md)

[Uninstall-Scanner](Uninstall-Scanner.md)

[Update-ScannerDatabase](Update-ScannerDatabase.md)