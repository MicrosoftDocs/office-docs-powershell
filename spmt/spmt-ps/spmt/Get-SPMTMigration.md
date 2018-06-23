---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Get-SPMTMigration
online version: 
schema: 2.0.0
---

# Get-SPMTMigration

## SYNOPSIS
Return object of current session. It includes current tasks status and current session level settings.  
The status of current tasks includes
1. Count of scanned files 
2. Count of migrated files
3. Migration error message if there is any. 

## SYNTAX

```

```

## DESCRIPTION
Return object of current session. It includes current tasks status and current session level settings. 
## EXAMPLES

### Example 1
```
#Define On-prem SharePoint 2013 data source#

$Global:SourceSiteUrl = "http://YourOnPremSite/"
$Global:OnPremUserName = "Yourcomputer\administrator"
$Global:OnPremPassword = ConvertTo-SecureString -String "OnPremPassword" -AsPlainText -Force 
$Global:SPCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Global:OnPremUserName, $Global:OnPremPassword
$Global:SourceListName = "SourceListName"


#Define SPO target#
$Global:SPOUrl = “https://contoso.sharepoint.com”
$Global:UserName = “admin@contoso.onmicrosoft.com”
$Global:PassWord = ConvertTo-SecureString -String "YourSPOPassword" -AsPlainText -Force
$Global:SPOCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Global:UserName, $Global:PassWord
$Global:TargetListName = "TargetListName"

#Define  Fileshare data source#
$Global:FileshareSource = "YourFileShareDataSource"
#Import SPMT Migration Module#
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell
#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $Global:SPOCredential -Force 
#Add two tasks into the session. One on-prem and one file share task.#
Add-SPMTTask -SharePointSourceCredential $Global:SPCredential -SharePointSourceSiteUrl $Global:SourceSiteUrl  -TargetSiteUrl $Global:SPOUrl -MigrateAll 
Add-SPMTTask -FileShareSource $Global:FileshareSource -TargetSiteUrl $Global:SPOUrl -TargetList "Documents"
#Start Migration#
Start-SPMTMigration
 PS C:\Users\YourUserName> Get-SPMTMigration 
```
Start a migration first, and then run "Get-SPMTMigration" to get current tasks status and session level settings

## PARAMETERS

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

