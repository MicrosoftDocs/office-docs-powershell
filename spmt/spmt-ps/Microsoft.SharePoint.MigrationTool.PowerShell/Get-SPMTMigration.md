---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/spmt/get-spmtmigration
applicable: SharePoint Migration Tool
title: Get-SPMTMigration
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-SPMTMigration

## SYNOPSIS
Get the registered SPMT Migration.

## SYNTAX

```powershell
Get-SPMTMigration [<CommonParameters>]
```

## DESCRIPTION

Return object of current session. It includes current tasks status and current session level
settings.

The status of current tasks includes:

1. Count of scanned files
2. Count of migrated files
3. Migration error message if there is any

## EXAMPLES

### EXAMPLE 1

This example starts a migration first, and then run "Get-SPMTMigration" to get the object of current
migration.

```powershell
#Define SharePoint 2013 data source#
$SourceSiteUrl = "https://YourOnPremSite/"
$OnPremUserName = "Yourcomputer\administrator"
$OnPremPassword = ConvertTo-SecureString -String "OnPremPassword" -AsPlainText -Force
$SPCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $OnPremUserName, $OnPremPassword
$SourceListName = "SourceListName"

#Define SPO target#
$SPOUrl = "https://contoso.sharepoint.com"
$UserName = "admin@contoso.onmicrosoft.com"
$PassWord = ConvertTo-SecureString -String "YourSPOPassword" -AsPlainText -Force
$SPOCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $UserName, $PassWord
$TargetListName = "TargetListName"

#Define Fileshare data source#
$FileshareSource = "YourFileShareDataSource"

#Import SPMT Migration Module#
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell

#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $SPOCredential -Force

#Add two tasks into the session. One is SharePoint migration task, and another is File Share migration task.#
Add-SPMTTask -SharePointSourceCredential $SPCredential -SharePointSourceSiteUrl $SourceSiteUrl  -TargetSiteUrl $SPOUrl -MigrateAll
Add-SPMTTask -FileShareSource $FileshareSource -TargetSiteUrl $SPOUrl -TargetList $TargetListName

#Start migration in the background#
Start-SPMTMigration -NoShow

#Get the object of current migration#
$session = Get-SPMTMigration
```

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
