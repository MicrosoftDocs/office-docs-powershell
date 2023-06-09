---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
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
Add a new migration task to the registered migration session. Currently there are three different types of tasks allowed: File Share task, SharePoint task and JSON defined task.

## SYNTAX

### FileShare
```powershell
Add-SPMTTask -FileShareSource <String> -TargetSiteUrl <String> -TargetList <String> [-TargetListRelativePath <String>]
```

### SharePointMigrateAll
```powershell
Add-SPMTTask -SharePointSourceCredential <PSCredential> -SharePointSourceSiteUrl <string> -TargetSiteUrl <string> -MigrateAll
```

### SharePointMigrateSelected
```powershell
 Add-SPMTTask -SharePointSourceSiteUrl <string> -SharePointSourceCredential <PSCredential> -SourceList <string> [-SourceListRelativePath <string>] -TargetSiteUrl <string> -TargetList <string> [-TargetListRelativePath <string>]
```

### Json
```powershell
Add-SPMTTask [-SharePointSourceCredential <PSCredential>] -JsonDefinition <String> [<CommonParameters>]
```

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
```
This example adds one File Share migration task and one SharePoint 2013 migration task to the registered migration session.

### EXAMPLE 2

```powershell

# Code snippets for bulk migration by loading the sample CSV with the name of spmt.csv

    $csvItems = import-csv "C:\spmt.csv" -Header c1,c2,c3,c4,c5,c6
    ForEach ($item in $csvItems)
    {
        Write-Host $item.c1
        Add-SPMTTask -FileShareSource $item.c1 -TargetSiteUrl $item.c4 -TargetList $item.c5 -TargetListRelativePath $item.c6
    }

# Two migration tasks are defined in the file spmt.csv


D:\MigrationTest\Files\Average_1M\c,,,https://SPOSite.sharepoint.com,Documents,Test
C:\work\Powershell\negative,,,https://SPOSite.sharepoint.com/,Documents,DocLibrary_SubfolderName

# Code snippets for bulk migration by loading one JSON file:



    $jsonItems = Get-Content -Raw -Path  "C:\spmt.json" | ConvertFrom-Json
    ForEach ($taskItem in $jsonItems.Tasks)
    {
        $jsonString = ConvertTo-Json $taskItem -Depth 100
        Add-SPMTTask -JsonDefinition $jsonString -SharePointSourceCredential $onpremCredential
    }

# Three migration tasks are defined in the file spmt.json.


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
This example adds a new migration task to the registered migration session.
Currently there are three different types of tasks allowed: File Share task, SharePoint task and JSON defined task.

### EXAMPLE 3
```
{
   "SourcePath":"\\LocalOrFileShareDataSource",
   "TargetPath":"https://YourTargetSite",
   "TargetList":"Documents",
   "TargetListRelativePath":"subfolder"
}

Json sample for SharePoint migration(lists only):
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

Json sample for SharePoint migration(lists and subsites):
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

Json sample for SharePoint migration(whole site):
{
   "SourcePath":"https://YourOnPremSite/subsite2",
   "TargetPath":"https://YourTargetSite/targetSubSite2"
}
Json sample with task level setting:
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

Note: Datetime format is "yyyy-MM-dd"
```
This is a Json sample for File Share migration.

## PARAMETERS

### -FileShareSource
This parameter is mandatory for File Share migration. Please specify the source folder path. For example: C:\SourceFiles.

```yaml
Type: String
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
Type: String
Parameter Sets: Json
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateAll
This is a switch parameter. 
If set to True, all lists will be migrated. 
If set to False, the customer will migrate selected lists.

```yaml
Type: SwitchParameter
Parameter Sets: SharePointMigrateAll
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceCredential
Use this parameter to define SharePoint 2013 sign-in credentials.

```yaml
Type: PSCredential
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
Type: String
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
Type: String
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
Type: String
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
Type: String
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
Type: String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetSiteUrl
This parameter is mandatory for both File Share and SharePoint migration and is to define the target site URL.

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateAll, SharePointMigrateSelected
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
