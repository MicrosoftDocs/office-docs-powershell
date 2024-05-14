---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/spmt/stop-spmtmigration
applicable: SharePoint Migration Tool
title: Stop-SPMTMigration
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Stop-SPMTMigration

## SYNOPSIS
Cancel the current migration session.

## SYNTAX

```powershell
Stop-SPMTMigration [<CommonParameters>]
```

## DESCRIPTION
Cancel the current migration session.

## EXAMPLES

### EXAMPLE 1
```powershell
#Define SharePoint 2013 data source#

$Global:SourceSiteUrl = "https://YourOnPremSite/"
$Global:OnPremUserName = "Yourcomputer\administrator"
$Global:OnPremPassword = ConvertTo-SecureString -String "OnPremPassword" -AsPlainText -Force
$Global:SPCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Global:OnPremUserName, $Global:OnPremPassword
$Global:SourceListName = "SourceListName"


#Define SPO target#
$Global:SPOUrl = "https://contoso.sharepoint.com"
$Global:UserName = "admin@contoso.onmicrosoft.com"
$Global:PassWord = ConvertTo-SecureString -String "YourSPOPassword" -AsPlainText -Force
$Global:SPOCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Global:UserName, $Global:PassWord
$Global:TargetListName = "TargetListName"

#Define File Share data source#
$Global:FileshareSource = "YourFileShareDataSource"

#Import SPMT Migration Module#
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell

#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $Global:SPOCredential -Force

#Add two tasks into the session. One is SharePoint migration task, and another is File Share migration task.#
Add-SPMTTask -SharePointSourceCredential $Global:SPCredential -SharePointSourceSiteUrl $Global:SourceSiteUrl  -TargetSiteUrl $Global:SPOUrl -MigrateAll
Add-SPMTTask -FileShareSource $Global:FileshareSource -TargetSiteUrl $Global:SPOUrl -TargetList $Global:TargetListName

#Start Migration in the background.#
Start-SPMTMigration -NoShow

#cancel the started migration.#
Stop-SPMTMigration
```

This example starts a migration first, then run "Stop-SPMTMigration" to cancel the migration.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
