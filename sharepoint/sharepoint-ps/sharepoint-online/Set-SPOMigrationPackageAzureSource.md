---
external help file: 
applicable: SharePoint Online
title: Set-SPOMigrationPackageAzureSource
schema: 2.0.0
---

# Set-SPOMigrationPackageAzureSource

## SYNOPSIS
Cmdlet to create Azure containers, upload migration package files into the appropriate containers and snapshot the uploaded content.


## SYNTAX

### ImplicitSourceExplicitAzure
```
Set-SPOMigrationPackageAzureSource -AccountKey <String> -AccountName <String> [-AzureQueueName <String>]
 [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>] [-EncryptionParameters <EncryptionParameters>]
 [-FileContainerName <String>] -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile]
 [-NoSnapshotCreation] [-NoUpload] [-Overwrite] [-PackageContainerName <String>] [<CommonParameters>]
```

### ExplicitSourceExplicitAzure
```
Set-SPOMigrationPackageAzureSource -AccountKey <String> -AccountName <String> [-AzureQueueName <String>]
 [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>] [-EncryptionParameters <EncryptionParameters>]
 [-FileContainerName <String>] [-NoLogFile] [-NoSnapshotCreation] [-NoUpload] [-Overwrite]
 [-PackageContainerName <String>] -SourceFilesPath <String> -SourcePackagePath <String> [<CommonParameters>]
```

### ImplicitSourceImplicitAzure
```
Set-SPOMigrationPackageAzureSource [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>]
 [-EncryptionParameters <EncryptionParameters>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations>
 -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] [-NoSnapshotCreation] [-NoUpload]
 [-Overwrite] [<CommonParameters>]
```

### ExplicitSourceImplicitAzure
```
Set-SPOMigrationPackageAzureSource [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>]
 [-EncryptionParameters <EncryptionParameters>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations> [-NoLogFile] [-NoSnapshotCreation]
 [-NoUpload] [-Overwrite] -SourceFilesPath <String> -SourcePackagePath <String> [<CommonParameters>]
```


## DESCRIPTION
This cmdlet contains more than one parameter set. You may only use parameters from one parameter set and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see Cmdlet Parameter Sets. 

This cmdlet returns a Microsoft.Online.SharePoint.Migration. MigrationPackageAzureLocations object, which can be used as a source for this cmdlet or, more commonly, as a source for the `Submit-SPOMigrationJob` cmdlet.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
$azurelocations = Set-SPOMigrationPackageAzureSource -SourcePath \\fileserver\share\folder1 -OutputPackagePath d:\MigrationPackages\Folder1_TgtPkg -FileContainerUri migration-files -PackageContainerUri migration-package -AccountName migrationstore -AccountKey "nmcXQ+1NctB7BlRVm+8+qWUn6GUFIH7E5ZQPThcjg8SfFWTJ34HthyOEoROwxHYIajpOYxYDt7qUwSEBQlLWoA==" 
```
This example creates migration package containers in Azure storage using the supplied account credentials, uploads the package files into them, snapshots the files and lastly returns the connection strings to a PowerShell variable.


### -----------------------EXAMPLE 2-----------------------------
```
Set-SPOMigrationPackageAzureSource -SourcePath \\fileserver\share\folder1 -OutputPackagePath d:\MigrationPackages\Folder1_TgtPkg -MigrationPackageAzureLocations $azurelocations -AccountName migrationstore -AccountKey "nmcXQ+1NctB7BlRVm+8+qWUn6GUFIH7E5ZQPThcjg8SfFWTJ34HthyOEoROwxHYIajpOYxYDt7qUwSEBQlLWoA==" -NoUpload
```
This example uses existing migration package containers in Azure storage to snapshot previously uploaded files and then returns the connection strings to a PowerShell variable.


## PARAMETERS

### -AccountKey
The account key for the Azure Storage account.


```yaml
Type: String
Parameter Sets: ImplicitSourceExplicitAzure, ExplicitSourceExplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountName
The account name for the Azure Storage account. 


```yaml
Type: String
Parameter Sets: ImplicitSourceExplicitAzure, ExplicitSourceExplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureQueueName
An optional name of the Azure Storage Reporting Queue where import operations lists events during import. This value must be in lower case and conform to Azure’s queue naming rules. 


```yaml
Type: String
Parameter Sets: ImplicitSourceExplicitAzure, ExplicitSourceExplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionMetaInfo
PARAMVALUE: MigrationFileEncryptionInfo[]


```yaml
Type: MigrationFileEncryptionInfo[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionParameters
PARAMVALUE: EncryptionParameters


```yaml
Type: EncryptionParameters
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileContainerName
The optional name of the Azure Blob Storage container that will be created if it does not currently exist. It will hold the uploaded package content files. The value must be in lower case and conform to Azure’s container naming rules. If this not supplied a name will be generated using the format <GUID>-files.


```yaml
Type: String
Parameter Sets: ImplicitSourceExplicitAzure, ExplicitSourceExplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationPackageAzureLocations
A set of fully qualified URLs and SAS tokens representing the Azure Blob Storage containers that hold the package content and metadata files and an optional Azure Storage Reporting Queue. This object is returned during successful processing of the `Set-SPOMigrationPackageAzureSource`


```yaml
Type: MigrationPackageAzureLocations
Parameter Sets: ImplicitSourceImplicitAzure, ExplicitSourceImplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationSourceLocations
PARAMVALUE: MigrationPackageLocation


```yaml
Type: MigrationPackageLocation
Parameter Sets: ImplicitSourceExplicitAzure, ImplicitSourceImplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoLogFile
Indicates to not create a log file. The default is to create a new CopyMigrationPackage log file within the directory specified within the SourcePackagePath parameter.


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

### -NoSnapshotCreation
Indicates to not perform snapshots on the content in the containers. The default is to snapshot each of the packages files in the containers.


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

### -NoUpload
Indicates to not upload the package files. The default is to upload all the package files.


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

### -Overwrite
PARAMVALUE: SwitchParameter


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

### -PackageContainerName
The optional name of the Azure Blob Storage container that will be created if it does not currently exist. It will hold the uploaded package metadata files. The value must be in lower case and conform to Azure’s container naming rules. If this not supplied a name will be generated using the format <GUID>-package. 


```yaml
Type: String
Parameter Sets: ImplicitSourceExplicitAzure, ExplicitSourceExplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFilesPath
The directory location where the package’s source content files exist. 


```yaml
Type: String
Parameter Sets: ExplicitSourceExplicitAzure, ExplicitSourceImplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePackagePath
The directory location where the package’s metadata files exist. 


```yaml
Type: String
Parameter Sets: ExplicitSourceExplicitAzure, ExplicitSourceImplicitAzure
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
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
