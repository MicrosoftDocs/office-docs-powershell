---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/spmt/start-spmtmigration
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

```powershell
Start-SPMTMigration [-NoShow] [-ParametersValidationOnly]
```

## DESCRIPTION
This cmdlet will start the registered SPMT migration.

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

#Start Migration in the console.#
Start-SPMTMigration
```

This example starts a migration with one SharePoint migration task and one File Share migration task.

## PARAMETERS

### -NoShow
In "-NoShow" mode, a message will be displayed to indicate that the migration is running in the background.

Note: Use the 'Show-SPMTMigration' to bring the migration from background to foreground.
The task ID, data source location, target location and migration status will be displayed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParametersValidationOnly
Validate the parameters: check source access permissions, source existence and if TargetUrl is valid.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
