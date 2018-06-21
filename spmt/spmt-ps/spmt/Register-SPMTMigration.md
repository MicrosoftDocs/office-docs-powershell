---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: 
schema: 2.0.0
---

# Register-SPMTMigration

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

```
Register-SPMTMigration [-Force] [-SPOCredential <PSCredential>] [-ScanOnly <Boolean>]
 [-StartMigrationAutomaticallyWhenNoScanIssue <Boolean>] [-Incremental <Boolean>]
 [-MigrateFileVersionHistory <Boolean>] [-KeepAllVersions <Boolean>] [-NumberOfVersionToMigrate <Int32>]
 [-MigrateHiddenFiles <Boolean>] [-MigrateFilesCreatedAfter <DateTime>] [-MigrateFilesModifiedAfter <DateTime>]
 [-SkipFilesWithExtension <System.Collections.Generic.List`1[System.String]>]
 [-MigrateFilesAndFoldersWithInvalidChars <Boolean>] [-MigrateOneNoteFolderAsOneNoteNoteBook <Boolean>]
 [-AzureActiveDirectoryLookup <Boolean>] [-PreserveUserPermissionsForSharePointSource <Boolean>]
 [-PreserveUserPermissionsForFileShare <Boolean>] [-SkipListWithAudienceTargetingEnabled <Boolean>]
 [-UserMappingFile <String>] [-WorkingFolder <String>] [-UseCustomAzureStorage <Boolean>]
 [-EnableEncryption <Boolean>] [-DeleteTempFilesWhenMigrationDone <Boolean>]
 [-CustomAzureStorageAccount <String>] [-CustomAzureAccessKey <String>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AzureActiveDirectoryLookup
{{Fill AzureActiveDirectoryLookup Description}}

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
{{Fill CustomAzureAccessKey Description}}

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
{{Fill CustomAzureStorageAccount Description}}

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
{{Fill DeleteTempFilesWhenMigrationDone Description}}

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
{{Fill EnableEncryption Description}}

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
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Incremental
{{Fill Incremental Description}}

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
{{Fill KeepAllVersions Description}}

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
{{Fill MigrateFileVersionHistory Description}}

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
{{Fill MigrateFilesAndFoldersWithInvalidChars Description}}

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
{{Fill MigrateFilesCreatedAfter Description}}

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
{{Fill MigrateFilesModifiedAfter Description}}

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
{{Fill MigrateHiddenFiles Description}}

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
{{Fill MigrateOneNoteFolderAsOneNoteNoteBook Description}}

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
{{Fill NumberOfVersionToMigrate Description}}

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
{{Fill PreserveUserPermissionsForFileShare Description}}

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
{{Fill PreserveUserPermissionsForSharePointSource Description}}

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
{{Fill SPOCredential Description}}

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
{{Fill ScanOnly Description}}

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
{{Fill SkipFilesWithExtension Description}}

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
{{Fill SkipListWithAudienceTargetingEnabled Description}}

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
{{Fill StartMigrationAutomaticallyWhenNoScanIssue Description}}

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
{{Fill UseCustomAzureStorage Description}}

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
{{Fill UserMappingFile Description}}

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

### -WorkingFolder
{{Fill WorkingFolder Description}}

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

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

