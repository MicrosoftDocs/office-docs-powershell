---
External help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
Applicable: SharePoint Migration Tool
Title: Start-SPMTMigration
Online version: 
Schema: 2.0.0
---

# Start-SPMTMigration

## SYNOPSIS
This cmdlet will start the registered SPMT migration.
## SYNTAX

```
Start-SPMTMigration [-NoShow] [-ParametersValidationOnly]
```

## DESCRIPTION
This cmdlet will start the registered SPMT migration.

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
```

Start a migration with one SharePoint migration task and one File Share migration task. 

## PARAMETERS

### -NoShow
In "-NoShow" mode, a message will be displayed to indicate that the migration is running in the background.
Note: Use the 'Show-SPMTMigration' to bring the migration from background to foreground. The task ID, data source location, target location and migration status will be displayed in the console. 


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParametersValidationOnly
Validate the parameters: check source access permissions, source existence and if the TargetUrl is valid.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

