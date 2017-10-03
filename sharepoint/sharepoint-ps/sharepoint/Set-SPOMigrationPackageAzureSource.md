---
external help file: 
applicable: SharePoint Online
schema: 2.0.0
---

# Set-SPOMigrationPackageAzureSource

## SYNOPSIS
{{Fill in the Synopsis}}


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
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -AccountKey
{{Fill AccountKey Description}}

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
{{Fill AccountName Description}}

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
{{Fill AzureQueueName Description}}

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
{{Fill EncryptionMetaInfo Description}}

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
{{Fill EncryptionParameters Description}}

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
{{Fill FileContainerName Description}}

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
{{Fill MigrationPackageAzureLocations Description}}

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
{{Fill MigrationSourceLocations Description}}

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
{{Fill NoLogFile Description}}

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
{{Fill NoSnapshotCreation Description}}

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
{{Fill NoUpload Description}}

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
{{Fill Overwrite Description}}

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
{{Fill PackageContainerName Description}}

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
{{Fill SourceFilesPath Description}}

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
{{Fill SourcePackagePath Description}}

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
