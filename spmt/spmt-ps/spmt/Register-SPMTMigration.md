---
External help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
Applicable: SharePoint Migration Tool
Title: Register-SPMTMigration
Online version: 
Schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Register-SPMTMigration

## SYNOPSIS
This cmdlet will create a migration session and initialize it. The initialization will configure migration settings at session level. If no specific setting parameters are defined, default settings will be used. 
After a session is registered, the user can add a migration task to the migration session and start migration.

## SYNTAX

```
Register-SPMTMigration [-SPOCredentials<PSCredential>] [-Incremental <bool>] [-ScanOnly <bool>] [-MigrateFilesAndFoldersWithInvalidChars <bool>] [-AzureActiveDirectoryLookup <bool>] [-CustomAzureAccessKey <string>] [-CustomAzureStorageAccount <bool>] [-DeleteTempFilesWhenMigrationDone <bool>] [-EnableEncryption <bool>] [-KeepAllVersions <bool>] [-MigrateFileVersionHistory <bool>] [-MigrateOneNoteFolderAsOneNoteNoteBook <bool>] [-MigrateFilesCreatedAfter <DateTime>] [-MigrateFilesModifiedAfter <DateTime>] [-SkipFilesWithExtension <string>] [-MigrateHiddenFiles <bool>] [-NumberOfVersionToMigrate <int>] [-PreserveUserPermissionsForFileShare <bool>] [-PreserveUserPermissionsForSharePointSource <bool>] [-SkipListWithAudienceTargetingEnabled <bool>] [-StartMigrationAutomaticallyWhenNoScanIssue <bool>] [-UseCustomAzureStorage <bool>] [-UserMappingFile <string>] [-MigrateAllSiteFieldsAndContentTypes<bool>] [-WorkingFolder <string>] [-SkipSitesWithName <string>] [-SkipListsWithName <string>] [-SkipContentTypesWithName <string>] [-DuplicatePageBehavior <string>] [-MigrateNavigation <Nullable`1>] [-MigrateTermGroups <Nullable`1>] -Force
```

## DESCRIPTION
This cmdlet will create a migration session and initialize it. The initialization will configure migration settings at session level. If no specific setting parameters are defined, default settings will be used. 
After a session is registered, the user can add a migration task to the migration session and start migration.

## EXAMPLES

### Create a migration session and connecting to SPO. 
```
#Define SPO target#
$Global:SPOUrl = "https://contoso.sharepoint.com"
$Global:UserName = "admin@contoso.onmicrosoft.com"
$Global:PassWord = ConvertTo-SecureString -String "YourSPOPassword" -AsPlainText -Force
$Global:SPOCredential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Global:UserName, $Global:PassWord

#Import SPMT Migration Module#
Import-Module Microsoft.SharePoint.MigrationTool.PowerShell

#Register the SPMT session with SPO credentials#
Register-SPMTMigration -SPOCredential $Global:SPOCredential -Force
```

Create a migration session.

## PARAMETERS

### -AzureActiveDirectoryLookup
By default, this is set to On. If no user mapping file is provided by the user, then Azure Active Directory is used as the default for user mapping. 

```yaml
Type: Boolean
Parameter Sets: 
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
