---
External help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
Applicable: SharePoint Migration Tool
Title: Remove-SPMTTask
Online version: 
Schema: 2.0.0
---

# Remove-SPMTTask

## SYNOPSIS
Remove an existing migration task from the registered migration.

## SYNTAX

```
Remove-SPMTTask -TaskId <Guid> [-Force]
```

## DESCRIPTION
Remove an existing migration task from the registered migration.

## EXAMPLES

### Example 1
```
#Define SharePoint 2013 data source#

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

#Remove an existing migration task from the migration. Remember to replace the "XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" with your actual TaskID. You can get the TaskID in the console if the migration is running without -NoShow parameter. If the migration is running with -NoShow parameter, then find the TaskID after running "Get-SPMTMigration" first.#
Remove-SPMTTask -TaskID XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX -Force
```

Remove an existing migration task from the migration.  
## PARAMETERS

### -Force
This parameter is optional. To remove a task already started, the Force parameter is required. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TaskId
This parameter is mandatory and defines the ID of task to be removed.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: Empty
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

