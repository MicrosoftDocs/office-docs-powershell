---
external help file: 
applicable: SharePoint Online
title: New-SPOMigrationPackage
schema: 2.0.0
---

# New-SPOMigrationPackage

## SYNOPSIS
Cmdlet to create a new migration package based on source files in a local or network shared folder.


## SYNTAX

```
New-SPOMigrationPackage [-SourceFilesPath] <String> [-OutputPackagePath] <String> [[-TargetWebUrl] <String>]
 [[-TargetDocumentLibraryPath] <String>] [[-TargetDocumentLibrarySubFolderPath] <String>] [-IgnoreHidden]
 [-IncludeFileSharePermissions] [-NoAzureADLookup] [-NoLogFile] [-ReplaceInvalidCharacters]
 [<CommonParameters>]
```


## DESCRIPTION
Cmdlet to create a new migration package based on source files in a local or network shared folder.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
New-SPOMigrationPackage -SourcePath \\fileserver\share\folder1 -OutputPackagePath d:\MigrationPackages\Folder1_SrcPkg

New-SPOMigrationPackage -SourcePath \\fileserver\share\folder1 -OutputPackagePath d:\MigrationPackages\Folder1_SrcPkg -TargetWebUrl https://contoso.sharepoint.com/sites/TargetSite/TargetWeb -TargetDocumentLibraryPath "Shared Documents" -TargetDocumentLibrarySubFolderPath "Sub Folder/Target Folder"
```
This example creates a new set of migration source package metadata files, using default URL values, in the d:\MigrationPackages\Folder1_SrcPkg directory based on content files found in the \\fileserver\share\folder1 source location.


### -----------------------EXAMPLE 2-----------------------------
```
New-SPOMigrationPackage -SourcePath \\fileserver\share\folder1 -OutputPackagePath d:\MigrationPackages\Folder1_SrcPkg -TargetWebUrl https://contoso.sharepoint.com/sites/TargetSite/TargetWeb -TargetDocumentLibraryPath "Shared Documents"
```
This example creates a new set of migration source package metadata files in the d:\MigrationPackages\Folder1_SrcPkg directory based on content files found in the \\fileserver\share\folder1 source location. The package is prepared using the document library path “https://contoso.sharepoint.com/sites/TargetSite/TargetWeb/Shared Documents”.


## PARAMETERS

### -IgnoreHidden
Switch to ignore hidden files and folders.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFileSharePermissions
Used to include permissions and sharing information into the generated manifest files in the package metadata. 


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAzureADLookup
Switch to not lookup local user accounts in Azure Active Directory.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoLogFile
Used to not create a log file. The default is to create a new CreateMigrationPackage log file within the directory specified within the OutputPackagePath parameter.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPackagePath
The directory location where the output package metadata files will be saved. If the directory does not exist, it will be created. 


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplaceInvalidCharacters
Switch to replace characters in file and folder names that would be invalid in SharePoint Online.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFilesPath
The directory location where the source content files exist. This directory will be enumerated to create the package metadata files. 


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDocumentLibraryPath
The web relative document library to use as the document library part of the base URL in the package metadata. If this is not supplied, “Documents” will be used within the package metadata instead.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDocumentLibrarySubFolderPath
Specifies the document library relative subfolder to use as the folder path part of the base URL in the package metadata. If this is not provided, no value will be used within the package metadata. The files will be homed under the document library root.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetWebUrl
The fully qualified web URL to use as the web address part of the base URL in the package metadata. If this is not provided, “http://fileserver/sites/user” will be used instead within the package metadata.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
