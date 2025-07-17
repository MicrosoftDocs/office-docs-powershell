---
external help file: microsoft.sharepoint.migrationtool.powershell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://learn.microsoft.com/powershell/module/spmt/add-spmttask
applicable: SharePoint Migration Tool
title: Add-SPMTTask
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Add-SPMTTask

## SYNOPSIS

Add a new migration task to the registered migration session.

## SYNTAX

### FileShare (Default)

```
Add-SPMTTask -FileShareSource <String> -TargetSiteUrl <String> -TargetList <String>
 [-TargetListRelativePath <String>] [-MigrationType <String>] [<CommonParameters>]
```

### SharePointMigrateAll

```
Add-SPMTTask [-MigrateAll] -SharePointSourceSiteUrl <String>
 -SharePointSourceCredential <PSCredential> -TargetSiteUrl <String> [-MigrationType <String>]
 [<CommonParameters>]
```

### SharePointMigrateSelected

```
Add-SPMTTask -SharePointSourceSiteUrl <String> -SharePointSourceCredential <PSCredential>
 [-SourceListRelativePath <String>] -SourceList <String> -TargetSiteUrl <String>
 -TargetList <String> [-TargetListRelativePath <String>] [-MigrationType <String>]
 [<CommonParameters>]
```

### Json

```
Add-SPMTTask [-SharePointSourceCredential <PSCredential>] -JsonDefinition <String>
  [-MigrationType <String>] [<CommonParameters>]
```

## DESCRIPTION

Add a new migration task to the registered migration session. Currently there are three different
types of tasks allowed: File Share task, SharePoint task and JSON defined task.

## EXAMPLES

### EXAMPLE 1

This example adds one File Share migration task and one SharePoint 2013 migration task to the
registered migration session.

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

#Define File Share data source#
$FileshareSource = "YourFileShareDataSource"

#Import SPMT Migration Module#
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell

#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $SPOCredential -Force

# Add two tasks into the session. One is SharePoint migration task, and another is
# File Share migration task.#
Add-SPMTTask -SharePointSourceCredential $SPCredential -SharePointSourceSiteUrl $SourceSiteUrl  -TargetSiteUrl $SPOUrl -MigrateAll
Add-SPMTTask -FileShareSource $FileshareSource -TargetSiteUrl $SPOUrl -TargetList $TargetListName
```

### EXAMPLE 2

This example adds a new migration task to the registered migration session. Currently there are
three different types of tasks allowed: File Share task, SharePoint task and JSON defined task.

```powershell
# Code snippets for bulk migration by loading the sample CSV with the name of spmt.csv

$csvItems = import-csv "C:\spmt.csv" -Header c1,c2,c3,c4,c5,c6
ForEach ($item in $csvItems) {
    Write-Host $item.c1
    Add-SPMTTask -FileShareSource $item.c1 -TargetSiteUrl $item.c4 -TargetList $item.c5 -TargetListRelativePath $item.c6
}
```

```CSV
# Two migration tasks are defined in the file spmt.csv

D:\MigrationTest\Files\Average_1M\c,,,https://SPOSite.sharepoint.com,Documents,Test
C:\work\Powershell\negative,,,https://SPOSite.sharepoint.com/,Documents,DocLibrary_SubfolderName
```

```powershell
# Code snippets for bulk migration by loading one JSON file:

$jsonItems = Get-Content -Raw -Path  "C:\spmt.json" | ConvertFrom-Json
ForEach ($taskItem in $jsonItems.Tasks) {
    $jsonString = ConvertTo-Json $taskItem -Depth 100
    Add-SPMTTask -JsonDefinition $jsonString -SharePointSourceCredential $onpremCredential
}
```

```json
// Three migration tasks are defined in the file spmt.json.
{
   "Tasks":[
      {
         "SourcePath":"https://On-prem/sites/test",
         "TargetPath":"https://YourSPO.sharepoint.com",
         "Items":{
            "Lists":[
               {
                  "SourceList":"list-01",
                  "TargetList":"list-01"
               }
            ],
            "SubSites":[

            ]
         }
      },
      {
         "SourcePath":"https://On-prem/sites/test",
         "TargetPath":"https://YourSPO.sharepoint.com",
         "Items":{
            "Lists":[
               {
                  "SourceList":"list-02",
                  "TargetList":"list-02"
               }
            ],
            "SubSites":[

            ]
         }
      },
      {
         "SourcePath":"https://On-prem/sites/test",
         "TargetPath":"https://YourSPO.sharepoint.com",
         "Items":{
            "Lists":[
               {
                  "SourceList":"doclib-01",
                  "TargetList":"doclib-01"
               }
            ],
            "SubSites":[

            ]
         }
      }
   ]
}
```

### EXAMPLE 3

This is a Json sample for File Share migration.

```json
{
   "SourcePath":"\\LocalOrFileShareDataSource",
   "TargetPath":"https://YourTargetSite",
   "TargetList":"Documents",
   "TargetListRelativePath":"subfolder"
}

// Json sample for SharePoint migration(lists only):
{
   "SourcePath":"https://YourOnPremSite",
   "TargetPath":"https://YourTargetSite",
   "Items":{
      "Lists":[
         {
            "SourceList":"sourceListName",
            "TargetList":"targetListName"
         }
      ]
   }
}

// Json sample for SharePoint migration(lists and subsites):
{
   "SourcePath":"https://YourOnPremSite",
   "TargetPath":"https://YourTargetSite",
   "Items":{
      "Lists":[
         {
            "SourceList":"listVersion2",
            "TargetList":"ListVersion2"
         },
         {
            "SourceList":"listVersion3",
            "TargetList":"ListVersion3"
         }
      ],
      "SubSites":[
         {
            "SourceSubSitePath":"subSite",
            "TargetSubSitePath":"targetSubSite",
            "Lists":[
               {
                  "SourceList":"testSubListB",
                  "TargetList":"targetSubList"
               }
            ]
         }
      ]
   }
}

// Json sample for SharePoint migration(whole site):
{
   "SourcePath":"https://YourOnPremSite/subsite2",
   "TargetPath":"https://YourTargetSite/targetSubSite2"
}

// Json sample with task level setting:
{
  "Tasks": [
    {
      "SourcePath": "https://YourOnPremServerSiteURL",
      "TargetPath": "https://YourTargetSiteURL",
      "Items": {
        "Lists": [
          {
            "SourceList": "SourceListName",
            "TargetList": "TargetListName"
          }
        ],
        "SubSites": []
      },
      "Settings": {
        "MigrateFileVersionHistory": true,
        "KeepFileVersions": 100,
        "MigrateHiddenItems": false,
        "MigrateItemsCreatedAfter": "yyyy-MM-dd",
        "MigrateItemsModifiedAfter": "yyyy-MM-dd",
        "SkipFilesWithExtensions": "txt:mp3:OtherFileExtentionsYouwantSkip",
        "EnableAzureDirectoryLookup": false,
        "PreservePermission": true,
        "UseCustomAzureStorage": false,
        "CustomAzureStorageAccount": null,
        "CustomAzureAccessKey": null,
        "CustomAzureDeletionAfterMig": false,
        "UserMappingCSVFile": null,
        "SkipListWithAudienceEnabled": true,
        "EnableIncremental": false,
        "MigrateOneNoteNotebook": true,
        "MigrateAllWebStructures": false,
        "FilterOutPathSpecialCharacters": false
      }
    }
  ]
}

// Note: Datetime format is "yyyy-MM-dd"
```

## PARAMETERS

### -FileShareSource

This parameter is mandatory for File Share migration. Please specify the source folder path. For
example: C:\SourceFiles.

```yaml
Type: System.String
Parameter Sets: FileShare
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JsonDefinition

Define one File share task or SharePoint task in JSON format.

```yaml
Type: System.String
Parameter Sets: Json
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateAll

This is a switch parameter. If set to True, all lists will be migrated. If set to False, the
customer will migrate selected lists.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: SharePointMigrateAll
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationType

{{ Fill MigrationType Description }}

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceCredential

Use this parameter to define SharePoint 2013 sign-in credentials.

```yaml
Type: System.Management.Automation.PSCredential
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected, Json
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceSiteUrl

Use this parameter to define SharePoint data source site URL.

```yaml
Type: System.String
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceList

This parameter is mandatory and is to define source document library name or list name.

```yaml
Type: System.String
Parameter Sets: SharePointMigrateSelected
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceListRelativePath

This parameter is optional and is to define data source relative path.

```yaml
Type: System.String
Parameter Sets: SharePointMigrateSelected
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetList

This parameter is mandatory and is to define target library name or list name.

```yaml
Type: System.String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetListRelativePath

This parameter is optional and is to define target relative path.

```yaml
Type: System.String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetSiteUrl

This parameter is mandatory for both File Share and SharePoint migration and is to define the target
site URL.

```yaml
Type: System.String
Parameter Sets: FileShare, SharePointMigrateAll, SharePointMigrateSelected
Aliases:

Required: True
Position: Named
Default value: None
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
