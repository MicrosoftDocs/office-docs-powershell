---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Remove-SPMTTask
online version: 
schema: 2.0.0
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
 PS C:\Users\YourUserName> Remove-SPMTTask -TaskID XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX -Force
```

Remove an existing migration task from the migration. Remember to replace the "XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" with your actual TaskID. You can get the Task ID in the console if the migration is running in the foregrund. If the migration is running in the background with -NoShow parameter, then find TaskID after running "Get-SPMTMigration" first. 
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
Default value: None
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

