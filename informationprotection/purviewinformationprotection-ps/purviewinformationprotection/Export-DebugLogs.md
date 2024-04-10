---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258759
schema: 1.0.0
---

# Export-DebugLogs

## SYNOPSIS

Gathers and exports Microsoft Purview Information Protection client and scanner log files to a compressed file.

## SYNTAX

```
Export-DebugLogs [-FileName] <String> [-OnBehalfOf <PSCredential>] [<CommonParameters>]
```

## DESCRIPTION
The **Export-DebugLogs** cmdlet gathers all client and scanner log files from **%localappdata%\Microsoft\MSIP\Logs** and saves them to a single, compressed file that has a **.zip** format. This file can then be sent to Microsoft Support if you are requested to send log files to help investigate a reported issue with the Microsoft Purview Information Protection client or scanner from this client.

Use the *OnBehalfOf* parameter if you need to export log files from a service account. For example, an account that has been created to run non-interactively, such as the account for the MicrosoftPurview Information Protection scanner.

## EXAMPLES

### Example 1
```powershell
PS C:\> Export-DebugLogs -FileName C:\Logs\AIPLogs.zip
```

This command gathers and saves all exported logs to the AIPLogs.zip file in the existing **C:\Logs** folder.

## PARAMETERS

### -FileName

The path and file name for the exported log files.

The path can be local or a network path (mapped drive letter or UNC).

Any folders in the path must already exist. If you specify a file name that already exists in the specified folder, the original file is overwritten.

When you specify the file name, include the **.zip** file name extension.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnBehalfOf

To use this parameter, you must run your PowerShell session with the **Run as Administrator** option.

Specifies the variable that includes the credentials object to use when you need to export log files from an account other than the account you are currently signed in with. For example, you need to collect log files for the service account that runs the Microsoft Purview Information Protection scanner. In this scenario, if the scanner is installed on the same computer as you're running this cmdlet, the log files also include some information from the scanner's configuration database.

Use the [Get-Credentials](/powershell/module/Microsoft.PowerShell.Security/Get-Credential) cmdlet to create the variable that stores the credentials.


```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
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