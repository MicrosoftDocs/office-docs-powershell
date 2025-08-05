---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/microsoft.sharepoint.migrationtool.powershell/start-spmtmigration
applicable: SharePoint Migration Tool
title: Start-SPMTMigration
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Start-SPMTMigration

## SYNOPSIS
This cmdlet will start the registered SPMT migration.

## SYNTAX

```
Start-SPMTMigration [-NoShow] [-ParametersValidationOnly] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet will start the registered SPMT migration.

## EXAMPLES

### EXAMPLE 1

This example starts a migration with one SharePoint migration task and one File Share migration task.

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

# Register the SPMT session with SPO credentials
Register-SPMTMigration -SPOCredential $SPOCredential -Force

# Add two tasks into the session. One is SharePoint migration task, and another is
# File Share migration task.
Add-SPMTTask -SharePointSourceCredential $SPCredential -SharePointSourceSiteUrl $SourceSiteUrl  -TargetSiteUrl $SPOUrl -MigrateAll
Add-SPMTTask -FileShareSource $FileshareSource -TargetSiteUrl $SPOUrl -TargetList $TargetListName

# Start Migration in the console.
Start-SPMTMigration
```

## PARAMETERS

### -NoShow

In "-NoShow" mode, a message will be displayed to indicate that the migration is running in the
background.

Note: Use the 'Show-SPMTMigration' to bring the migration from background to foreground. The task
ID, data source location, target location and migration status will be displayed.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParametersValidationOnly

Validate the parameters: check source access permissions, source existence and if TargetUrl is
valid.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
