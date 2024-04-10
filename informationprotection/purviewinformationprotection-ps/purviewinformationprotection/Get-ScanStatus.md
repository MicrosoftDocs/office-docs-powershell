---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258954
schema: 1.0.0
---

# Get-ScanStatus

## SYNOPSIS
Gets the current status of the service for the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Get-ScanStatus [<CommonParameters>]
```

## DESCRIPTION

The **Get-ScanStatus** cmdlet returns the following details about the current scanner cluster status:

- **Cluster name**

- **Cluster status**, including:

    - Offline: The service is not started
    - Idle: The service is running but not currently scanning
    - Scanning: The service is running and is currently scanning files
    - Error. The scanner service is running but it has encountered an error that prevents it from scanning files. For example, the service cannot access the database for the scanner configuration.

- **Scan start time**: The time the last scan started, in UTC time format.
- **Time from start**: The scanning duration, in the following format: `Days.HH:MM:SS`
- **Node information**: A list of the nodes in the scanner cluster

To obtain further details, use one or both of the following methods:

- Use the **NodesInfo** variable to view details about the current scanning status for each node. For more information, see the examples below.

- Use the **Verbose** parameter to view details such as the number of scanned files, amount of data scanned, and details for each repository scanned.

    When using the **Verbose** parameter, drill down further to find more details for the repositories by using the **RepositoriesStatus** or the **CurrentScanSummary** variables.

    Possible repository statuses include:

    - **Skipped**, if the repository was skipped
    - **Pending**, if the current scan has not yet started scanning the repository
    - **Scanning**, if the current scan is running on the repository
    - **Finished**, if the current scan has completed running on the repository



For more information, see [Verify scanning details per scanner node and repository](/azure/information-protection/deploy-aip-scanner-tsg#verify-scanning-details-per-scanner-node-and-repository).

## EXAMPLES

### Example 1: Get the current status of the scanner service 

```
PS C:\> Get-ScanStatus
Cluster        : contoso-test
ClusterStatus  : Scanning
StartTime      : 03/10/2021 9:05:02 AM
TimeFromStart  : 00:00:00:37
NodesInfo      : {t-contoso1-T298-corp.contoso.com,t-contoso2-T298-corp.contoso.com,t-contoso3-T298-corp.contoso.com}
```

This output shows that a scan is currently running on the `contoso-test` cluster, and was started 37 seconds ago, at 03/10/2021 9:05:02 AM.

The output also shows that the `contoso-test` cluster has 3 nodes.

### Example 2: Use the Verbose parameter to get data for the current scan 

```
PS C:\> Get-ScanStatus -Verbose

ScannedFiles    MBScanned    CurrentScanSummary                                         RepositoriesStatus
------------    ---------    ------------------                                         ------------------
        2280    78478187     Microsoft.InformationProtection.Scanner.ScanSummaryData    {​​​​​​{​​​​​​ Path = C:\temp, Status = Scanning }​​​​​​
```

This output shows only a single repository. In cases of multiple repositories, each one will be listed separately.

### Example 3: Use the NodesInfo variable to get details about the scanning status on each node 

```powershell
PS C:\> Get-ScanStatus

Cluster        : contoso-test
ClusterStatus  : Scanning
StartTime      : 12/22/2020 9:05:02 AM
TimeFromStart  : 00:00:00:37
NodesInfo      : {t-contoso1-T298-corp.contoso.com,t-contoso2-T298-corp.contoso.com}

PS C:\WINDOWS\system32> $x=Get-ScanStatus
PS C:\WINDOWS\system32> $x.NodesInfo

NodeName                            Status    IsScanning    Summary
--------                            --------  ----------    -------
t-contoso1-T298-corp.contoso.com    Scanning        True    Microsoft.InformationProtection.Scanner.ScanSummaryData
t-contoso2-T298-corp.contoso.com    Scanning     Pending    Microsoft.InformationProtection.Scanner.ScanSummaryData

PS C:\Windows\system32> $x.NodesInfo[0].Summary


ScannerID               : t-contoso1-T298-corp.contoso.com
ScannedFiles            : 2280
FailedFiles             : 0
ScannedBytes            : 78478187
Classified              : 0
Labeled                 : 0
....
```

This output first displays details about the current scan status as well as a list of nodes in the cluster, and then details for each node, in a table. 

Further drilldown using the node integer shows a long list of details about the scan on the selected node, such as the number of scanned, classified, and labeled files, as well as the number of bytes scanned. 

When using the **NodesInfo** variable to drill down to node details, node integers start with **0**.


### Example 4: Use the Verbose parameter and the RepositoriesStatus variable

```powershell
PS C:\Windows\system32> $x=Get-ScanStatus - Verbose
PS C:\Windows\system32> $x.RepositoriesStatus

Path        Status
----        ------
C:\temp     Scanning
```

The output shows the scan status for each repository configured for the content scan job.

### Example 5: Use the Verbose parameter and the CurrentScanSummary variable

```powershell
PS C:\Windows\system32> $x.CurrentScanSummary


ScannerID               : 
ScannedFiles            : 2280
FailedFiles             : 0
ScannedBytes            : 78478187
Classified              : 0
Labeled                 : 0
....
```

The output shows further details about the scan currently running, including the number of scanned, failed, classified, and labeled files, as well as the number of bytes scanned.

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-ScannerConfiguration](Get-ScannerConfiguration.md)

[Install-Scanner](Install-Scanner.md)

[Set-ScannerDatabase](Set-ScannerDatabase.md)

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Start-Scan](Start-Scan.md)

[Uninstall-Scanner](Uninstall-Scanner.md)

[Update-ScannerDatabase](Update-ScannerDatabase.md)