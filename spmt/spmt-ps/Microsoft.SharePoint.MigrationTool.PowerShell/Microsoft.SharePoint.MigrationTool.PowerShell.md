---
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
Module Guid: 2dc42197-33c3-4a1a-b957-92ac375c77a4
Download Help Link:
Help Version:
Locale: en-US
---

# Microsoft.SharePoint.MigrationTool.PowerShell Module

## Description

The following migration cmdlets are based on the SharePoint Migration Tool (SPMT) migration engine.
It will move files from File Share, SharePoint 2013 document libraries, or items of SharePoint 2013
lists to Office 365.

[Install SPMT and Get PowerShell module](https://spmtreleasescus.blob.core.windows.net/install/default.htm)

> [!NOTE]
> PowerShell 5.0 and .NET Framework 4.6.2 or higher are required to support the migration of file
> paths of up to 400 characters. After installing SPMT, the PowerShell dlls are copied to
> `%userprofile%\Documents\WindowsPowerShell\Modules`.

## Microsoft.SharePoint.MigrationTool.PowerShell Cmdlets

### [Add-SPMTTask](Add-SPMTTask.md)

Add a new migration task to the registered migration session.

### [Get-SPMTMigration](Get-SPMTMigration.md)

Get the registered SPMT Migration.

### [Register-SPMTMigration](Register-SPMTMigration.md)

This cmdlet will create a migration session and initialize it.

### [Remove-SPMTTask](Remove-SPMTTask.md)

Remove an existing migration task from the registered migration.

### [Show-SPMTMigration](Show-SPMTMigration.md)

If the user starts the migration with -NoShow parameter, running the 'Show-SPMTMigration' cmdlet
will display the task ID, data source location, target location and migration status in the console.

### [Start-SPMTMigration](Start-SPMTMigration.md)

This cmdlet will start the registered SPMT migration.

### [Stop-SPMTMigration](Stop-SPMTMigration.md)

Cancel the current migration session.

### [Unregister-SPMTMigration](Unregister-SPMTMigration.md)

Remove the SPMT migration session created.
