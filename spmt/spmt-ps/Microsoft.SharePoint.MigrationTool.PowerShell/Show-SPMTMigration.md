---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/microsoft.sharepoint.migrationtool.powershell/show-spmtmigration
applicable: SharePoint Migration Tool
title: Show-SPMTMigration
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Show-SPMTMigration

## SYNOPSIS

If the user starts the migration with -NoShow parameter, running the 'Show-SPMTMigration' cmdlet
will display the task ID, data source location, target location and migration status in the console.
Pressing Ctrl+C will return to NoShow mode.

## SYNTAX

```
Show-SPMTMigration [<CommonParameters>]
```

## DESCRIPTION

If the user starts the migration with -NoShow parameter, running the 'Show-SPMTMigration' cmdlet
will display the task ID, data source location, target location and migration status in the console.
Pressing Ctrl+C will return to NoShow mode.

## EXAMPLES

### EXAMPLE 1

This example, first, starts a migration with -NoShow parameter, then run 'Show-SPMTMigration', the
migration task ID, data source location, target location and migration status will show up in the
console.

```powershell
# Define SharePoint 2013 data source
$SourceSiteUrl = "https://YourOnPremSite/"
$OnPremUserName = "Yourcomputer\administrator"
$OnPremPassword = ConvertTo-SecureString -String "OnPremPassword" -AsPlainText -Force
$SPCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $OnPremUserName, $OnPremPassword
$SourceListName = "SourceListName"

# Define SPO target
$SPOUrl = "https://contoso.sharepoint.com"
$UserName = "admin@contoso.onmicrosoft.com"
$PassWord = ConvertTo-SecureString -String "YourSPOPassword" -AsPlainText -Force
$SPOCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $UserName, $PassWord
$TargetListName = "TargetListName"

# Define File Share data source
$FileshareSource = "YourFileShareDataSource"

# Import SPMT Migration Module
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell

#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $SPOCredential -Force

# Add two tasks into the session. One is SharePoint migration task, and another is
# File Share migration task.
Add-SPMTTask -SharePointSourceCredential $SPCredential -SharePointSourceSiteUrl $SourceSiteUrl  -TargetSiteUrl $SPOUrl -MigrateAll
Add-SPMTTask -FileShareSource $FileshareSource -TargetSiteUrl $SPOUrl -TargetList $TargetListName

# Start Migration in the background.
Start-SPMTMigration -NoShow
Show-SPMTMigration
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
