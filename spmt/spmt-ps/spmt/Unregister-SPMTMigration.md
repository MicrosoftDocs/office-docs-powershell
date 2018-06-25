---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Unregister-SPMTMigration
online version: 
schema: 2.0.0
---

# Unregister-SPMTMigration

## SYNOPSIS
Remove the SPMT migration session created. 

## SYNTAX

```
Unregister-SPMTMigration
```

## DESCRIPTION
Remove the SPMT migration session created. 

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

PS C:\Users\YourUserName> Stop-SPMTMigration 
PS C:\Users\YourUserName> Unregister-SPMTMigration 
```
Cancel the started migration and unregister the migration session from the commandline. 

## PARAMETERS

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

