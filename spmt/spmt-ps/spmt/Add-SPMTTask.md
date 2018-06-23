---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Add-SPMTTask
online version: 
schema: 2.0.0
---

# Add-SPMTTask

## SYNOPSIS
Add a new migration task to the registered migration session. Currently there are three different types of tasks allowed: File share task, SharePoint task and a JSON defined task.  
## SYNTAX

### FileShare
```
Add-SPMTTask -FileShareSource <String> -TargetSiteUrl <String> -TargetList <String>
 [-TargetListRelativePath <String>]
```
### SharePointMigrateAll
``` 
Add-SPMTTask -SharePointSourceCredential <PSCredential> -SharePointSourceSiteUrl <string> -TargetSiteUrl <string> -MigrateAll 
```

### SharePointMigrateSelected
```
 Add-SPMTTask -SharePointSourceSiteUrl <string> -SharePointSourceCredential <pscredential> -SourceList <string> [-SourceListRelativePath <string>] -TargetSiteUrl <string> -TargetList <string> [-TargetListRelativePath <string>]
```

### Json
```
Add-SPMTTask [-JsonDefinition <string>] 
Add-SPMTTask -SharePointSourceCredential <PSCredential> [-JsonDefinition <string>]   
```

## DESCRIPTION
Add a new migration task to the registered migration session. 
Currently there are three different types of tasks allowed: File share task, SharePoint task and a JSON defined task. 

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
```

Add one file share migration task and one on-prem 2013 migration task to registered migration session. 

## PARAMETERS

### -FileShareSource
This parameter is mandatory for file share migration. Please specify the source folder path. For example: C:\SourceFiles.

```yaml
Type: String
Parameter Sets: FileShare
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JsonDefinition
Define one File share task or SharePoint task in JSON format.

```yaml
Type: String
Parameter Sets: Json
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateAll
This is a switch parameter. If set to True, all lists will be migrated. If set to False, the customer will migrate selected lists. 

```yaml
Type: SwitchParameter
Parameter Sets: SharePointMigrateAll
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceCredential
This is a switch parameter. If set to True, all lists will be migrated. If set to False, the customer will migrate selected lists. 

```yaml
Type: PSCredential
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: Json
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceSiteUrl
Use this parameter to define SharePoint data source site URL.

```yaml
Type: String
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceList
This parameter is mandatory and defines source document library name or list name.

```yaml
Type: String
Parameter Sets: SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceListRelativePath
This parameter is optional and is to define one or more migration data source relative paths. 

```yaml
Type: String
Parameter Sets: SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetList
This parameter is mandatory and defines target library name or list name.

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetListRelativePath
This parameter is optional. You can define one or more target relative paths in a list and make the value to this parameter. 

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetSiteUrl
This parameter is mandatory for both file share and on-prem migration and defines the target site URL.

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateAll, SharePointMigrateSelected
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

