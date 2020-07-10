---
External help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: https://docs.microsoft.com/powershell/module/spmt/register-spmtmigration
applicable: SharePoint Migration Tool
title: Register-SPMTMigration
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Register-SPMTMigration

## SYNOPSIS
This cmdlet will create a migration session and initialize it. The initialization will configure migration settings at session level. If no specific setting parameters are defined, default settings will be used.
After a session is registered, the user can add a migration task to the migration session and start migration.

## SYNTAX

```powershell
Register-SPMTMigration [-SPOCredentials<PSCredential>] [-EnableMultiRound <bool>] [-ScanOnly <bool>] [-MigrateFilesAndFoldersWithInvalidChars <bool>] [-AzureActiveDirectoryLookup <bool>] [-CustomAzureAccessKey <string>] [-CustomAzureStorageAccount <bool>] [-DeleteTempFilesWhenMigrationDone <bool>] [-EnableEncryption <bool>] [-IgnoreUpdate <SwitchParameter>] [-KeepAllVersions <bool>] [-MigrateFileVersionHistory <bool>] [-MigrateOneNoteFolderAsOneNoteNoteBook <bool>] [-MigrateFilesCreatedAfter <DateTime>] [-MigrateFilesModifiedAfter <DateTime>] [-SkipFilesWithExtension <string>] [-MigrateHiddenFiles <bool>] [-NumberOfVersionToMigrate <int>] [-PreserveUserPermissionsForFileShare <bool>] [-PreserveUserPermissionsForSharePointSource <bool>] [-SkipListWithAudienceTargetingEnabled <bool>] [-StartMigrationAutomaticallyWhenNoScanIssue <bool>] [-UseCustomAzureStorage <bool>] [-UserMappingFile <string>] [-MigrateAllSiteFieldsAndContentTypes<bool>] [-WorkingFolder <string>] [-SkipSitesWithName <string>] [-SkipListsWithName <string>] [-SkipContentTypesWithName <string>] [-DuplicatePageBehavior <string>] [-MigrateNavigation <string>] [-MigrateTermGroups <string>] -Force
```

## DESCRIPTION
This cmdlet will create a migration session and initialize it. The initialization will configure migration settings at session level. If no specific setting parameters are defined, default settings will be used.
After a session is registered, the user can add a migration task to the migration session and start migration.

## EXAMPLES

### EXAMPLE 1
```powershell
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

This example registers a migration session.

## PARAMETERS

### -AzureActiveDirectoryLookup
By default, this is set to On. 
If no user mapping file is provided by the user, then Azure Active Directory is used as the default for user mapping.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAzureAccessKey
If you use your own Azure storage, you need to set Azure storage account to On, enter your account and key. 
You also need to select if you want to enable or disable encryption, and whether temporary files are deleted when migration is completed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAzureStorageAccount
The default is Off.
If you wish to use your own Azure storage, set this value to On.

If you choose to turn it On, additional fields will appear for you to enter your account and key, and settings to select if you want to enable or disable encryption.
You also need to decide whether temporary files are deleted when migration is completed.

*Note: * This feature is supported only for *General Purpose storage accounts* as General-Purpose accounts support Azure blobs and queues.
This feature is not available for Blob Storage accounts.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteTempFilesWhenMigrationDone
By default, this is set to Off. If you set this value to On, those temporary files in Custom Azure storage generated during migration will be deleted when the migration is completed. Otherwise, those temporary files will not be deleted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableEncryption
The default is set to On.
If you use your own Azure storage, you will set and define your account and key, and decide and configure enable or disable encryption in settings, and whether temporary files are deleted when migration is completed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forcibly stop and unregister existing migration.

Note: If you have a registered SPMT migration session already, the Force parameter will register a new session anyway.The Force parameter performs the function of Stop-SMPTMigration and Unregister-SPMTMigration together.
If you have never run "Register-SPMTMigration", with or without the Force parameter, a new session will be created.

If you have an active migration and didn't use the Force parameter, you need to run Stop-SPMTMigration, and then run Unregister-SPMTMigration to unregister the exiting migration session first.

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

### -IgnoreUpdate
The default setting is OFF.

Skip the checking and installation of new updates, even when a new version of PowerShell SPMT is available.

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

### -EnableMultiRound
The default setting is Off.
This means the migration will only do one check round to make sure no new changes or additions were made since the previous run.
If it is set to On, it will do up to 5 check round to make sure no changes or additions were made.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepAllVersions
The default is set to On.
If set to On, all version numbers of the file will be migrated.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateFileVersionHistory
If set to No, only the most recent versions of the file will be migrated.
If set to Yes, you can choose whether to keep all versions, or limit it to a specific number.
By default, it is set to On.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateFilesAndFoldersWithInvalidChars
The default is On.
Files and folders with invalid characters (for example:\<, \>, :, ", |, ?, *, /, \,\u007f) in the names will be migrated by default.
If set to Off, files and folders with invalid characters in names will not be migrated.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateFilesCreatedAfter
If you choose to limit which files are to be migrated based on creation dates, set your values in this section.
This may be to limit the number of files migrated or to adhere to overall company governance policy regarding to file retention.
The default value is null.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateFilesModifiedAfter
If you choose to limit what files are to be migrated based on modified dates, set your values in this section.
This may be to limit the number of files migrated or to adhere to overall company governance policy regarding to file retention.
The default value is null.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateHiddenFiles
If set to On, hidden system files will be migrated.
By default, it is set to On.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateOneNoteFolderAsOneNoteNoteBook
By default, MigrateOneNoteFolderAsOneNoteNoteBook is set to Off.
OneNote notebooks comprise of folders containing OneNote files and potentially nested subfolders with these files.
The root folder of such a hierarchy is a OneNote notebook and it must contain a .onetoc2 file.

The current implementation is to mark the folders as notebooks at the end of the migration.
If a folder contains any non-onenote files, it won't be marked as a notebook.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfVersionToMigrate
You can choose a specific version number for the files to be migrated.
By default, the number of versions kept is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreserveUserPermissionsForFileShare
By default, this is set to Off.
If set to On, permissions will be preserved.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreserveUserPermissionsForSharePointSource
By default, this is set to On.
If set to Off, no permissions will be preserved.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPOCredential
The credentials are used to connect the SharePoint Online tenant. If no credentials are passed in, use ADAL OAuth2. Important: If you are using multifactor authentication on your tenant, do not use the -SPOCredential parameter.  The ADAL dialog will prompt for authentication and MFA.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScanOnly
The default is Off.
When ScanOnly is On, only a scan will be performed.
If you wish to scan migrated items as a pre-assessment to migration, turn it On.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipFilesWithExtension
To prevent certain file types from migrating, list each extension, separate them with colons.
The default value is null.

```yaml
Type: System.Collections.Generic.List`1[System.String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipListWithAudienceTargetingEnabled
By default, this is set to On.
Lists with an audience field, the migration will fail with warning "Does not support list with audience settings' unless customer enable the 'Ignore audience' setting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartMigrationAutomaticallyWhenNoScanIssue
By default, this is set to On.When StartMigrationAutomaticallyWhenNoScanIssue is turned on, it means to start migration automatically if no scan issue.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCustomAzureStorage
If you use your own Azure storage, you will set your account and key, and select if you want to enable or disable encryption, and whether temporary files are deleted when migration is completed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserMappingFile
By default, Azure AD lookup is used to map users when submitting migration jobs.
If you choose to use a custom user mapping file and you want to preserve user permissions, turn off Azure Active Directory lookup.By doing so, if a user isn't found in the mapping file, the tool won't look it up in AAD.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateAllSiteFieldsAndContentTypes
The default setting is Off.
If set to On, all the site fields and content types will be migrated.
Otherwise, only those fields and content types used by lists to be migrated will be migrated.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkingFolder
By default, a temp folder will be created as working folder.
If you wish to specify your own specific working folder, enter the name here.
Note: By default, the working folder is %appdata%\Microsoft\MigrationToolStorage.Please make sure that your working folder has a minimum of 150 GB of free space.It may need more depending on the size of the data you plan to migrate.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipSitesWithName
To prevent certain sites from migrating, list each site name, separating it with a semicolon.
The default value is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipListsWithName
To prevent certain lists from migrating, list each list name, separating it with a semicolon.
The default value is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipContentTypesWithName
To prevent certain content types from migrating, list each content type name, separating it with a semicolon.
The default value is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DuplicatePageBehavior
Determine the behavior of the page file migration when encountering a page file with the same name or same id on the target.By default, DuplicatePageBehavior is set to RENAME.

For RENAME, we will keep the conflicted page file on the target and rename the source page file with a new name.

For OVERWRITE, we will overwrite the conflicted page file on the target using the source page file

For SKIP, we will skip migrating this conflicted page file.

For NO_PAGES_MIGRATION, we will skip all the page files no matter they conflict with the target or not during the migration.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateNavigation
By default this is set to On.
We will migrate the site and web navigation nodes when doing the migration.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateTermGroups
By default this is set to On.
We will migrate the term groups when doing the migration.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
