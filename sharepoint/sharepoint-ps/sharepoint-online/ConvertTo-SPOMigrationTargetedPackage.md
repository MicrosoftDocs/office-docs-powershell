---
external help file: 
applicable: SharePoint Online
title: ConvertTo-SPOMigrationTargetedPackage
schema: 2.0.0
---

# ConvertTo-SPOMigrationTargetedPackage

## SYNOPSIS
Use this cmdlet to convert your XML files into a new migration package.

## SYNTAX

### DocumentLibraryImport
```
ConvertTo-SPOMigrationTargetedPackage [-SourceFilesPath] <String> [-SourcePackagePath] <String>
 [[-OutputPackagePath] <String>] [-TargetWebUrl] <String> [-AzureADUserCredentials <CredentialCmdletPipeBind>]
 -Credentials <CredentialCmdletPipeBind> [-NoAzureADLookup] [-NoLogFile] [-ParallelImport]
 [-PartitionSizeInBytes <Int64>] -TargetDocumentLibraryPath <String>
 [-TargetDocumentLibrarySubFolderPath <String>] [-TargetEnvironment <TargetEnvironment>]
 [-UserMappingFile <String>] [<CommonParameters>]
```

### ListImport
```
ConvertTo-SPOMigrationTargetedPackage [-SourceFilesPath] <String> [-SourcePackagePath] <String>
 [[-OutputPackagePath] <String>] [-TargetWebUrl] <String> [-AzureADUserCredentials <CredentialCmdletPipeBind>]
 -Credentials <CredentialCmdletPipeBind> [-NoAzureADLookup] [-NoLogFile] [-ParallelImport]
 [-PartitionSizeInBytes <Int64>] [-TargetEnvironment <TargetEnvironment>] -TargetListPath <String>
 [-UserMappingFile <String>] [<CommonParameters>]
```

## DESCRIPTION
Use this Cmdlets to create a migration package from one Library to Another Library in form of a package. It converts the XML files and saves them as a new set of targeted migration package metadata files to the target directory.


## EXAMPLES

### Example 1 
This example shows how to convert a package to a targeted one by looking up data in the target site collection. It uses the –ParallelImport parameter to boost file share migration performance.
```Powershell
$finalPackages = ConvertTo-SPOMigrationTargetedPackage -ParallelImport -SourceFilesPath $sourceFiles -SourcePackagePath $sourcePackage -OutputPackagePath $targetPackage -Credentials $cred -TargetWebUrl $targetWeb -TargetDocumentLibraryPath $targetDocLib
```


## PARAMETERS

### -AzureADUserCredentials
Receives Azure Active Directory User Credentials

```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
Fill out the Regular Credentials (Get-Credential)

```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAzureADLookup
Switch parameter that says if the command should or should not look up for Azure AD.

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
Switch Parameter to determine if you should get or not a log file.

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
Output package path

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

### -ParallelImport
Switch parameter to boost file share migration performance.

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

### -PartitionSizeInBytes
Define the partition size in Bytes where it will be located the target package.

```yaml
Type: Int64
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
Defines the temporary Path where are located the XML source files.

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

### -SourcePackagePath
Defines the source package path location.

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

### -TargetDocumentLibraryPath
Defines the target document library path.

```yaml
Type: String
Parameter Sets: DocumentLibraryImport
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDocumentLibrarySubFolderPath
Defines the target document library subfolder path.

```yaml
Type: String
Parameter Sets: DocumentLibraryImport
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetEnvironment
Defines the Target environment: Production, ProductionChina, None or OnPremises.

```yaml
Type: TargetEnvironment
Parameter Sets: (All)
Aliases: 
Accepted values: Production, ProductionChina, None, OnPremises
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetListPath
Defines the Target list path

```yaml
Type: String
Parameter Sets: ListImport
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetWebUrl
Defines the Target Web URL of the package.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserMappingFile
Defines the file mapping of the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)


[ConvertTo-SPOMigrationEncryptedPackage](ConvertTo-SPOMigrationEncryptedPackage.md)

