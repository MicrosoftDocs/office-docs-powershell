---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258675
schema: 1.0.0
---

# Get-ScannerContentScan

## SYNOPSIS
Gets details about an Microsoft Purview Information Protection scanner content scan job.

## SYNTAX

```
Get-ScannerContentScan [<CommonParameters>]
```

## DESCRIPTION
Returns a full list of all the parameters configured for the content scan job.

For more information about content scan jobs, see the [Microsoft Purview Information Protection scanner](/information-protection/deploy-aip-scanner-configure-install#create-a-content-scan-job).

## EXAMPLES

### Example 1 Content scan job settings defined by PowerShell
```powershell
PS C:\WINDOWS\system32> Get-ScannerContentScan

Schedule                : Manual
DiscoverInformationTypes: All
RecommendedAsAutomatic  : False
EnableDlp               : Off
Enforce                 : On
LabelFilesByContent     : On
RelabelFiles            : Off
AllowLabelDowngrade     : Off
EnforceDefaultLabel     : Off
DefaultLabelType        : PolicyDefault
DefaultLabelId          :
DefaultOwner            : Scanner
RepositoryOwner         :
PreserveFileDetails     : On
IncludeFileTypes        :
ExcludeFileTypes        : .lnk,.exe.,.com,.cmd,.bat,.dll,.ini,.sca,.drm,.sys,.cpl,.inf,.drv,.dat,.tmp,.msp,.msi,.pdb,.jar,.ocx,.rtf,.rar,.msg
Repositories:
c:\repoToScan1
c:\repoToScan2
```

This example shows a sample command and response when the content scan job has been configured via PowerShell.

### Example 2 Content scan job settings defined by PowerShell
```powershell
PS C:\WINDOWS\system32> Get-ScannerContentScan

Schedule                : Manual
DiscoverInformationTypes: PolicyOnly
RecommendedAsAutomatic  : False
EnableDlp               : 
Enforce                 : 
LabelFilesByContent     : 
RelabelFiles            : 
AllowLabelDowngrade     : 
EnforceDefaultLabel     : 
DefaultLabelType        : 
DefaultLabelId          :
DefaultOwner            : 
RepositoryOwner         :
PreserveFileDetails     : 
IncludeFileTypes        :
ExcludeFileTypes        : 
Repositories:
c:\repoToScan1
```

This example shows a sample command and response when the content scan job has been configured by importing a file, or using the Microsoft Purview compliance portal. In this case, the individual content scan job parameters are not applicable, and do not return values.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

- [Add-ScannerRepository](Add-ScannerRepository.md)

- [Get-ScannerRepository](Get-ScannerRepository.md)

- [Remove-AIPScannerContentScanJob](Remove-AIPScannerContentScanJob.md)

- [Remove-ScannerRepository](Remove-ScannerRepository.md)

- [Set-ScannerContentScan](Set-ScannerContentScan.md)

- [Set-ScannerRepository](Set-ScannerRepository.md)