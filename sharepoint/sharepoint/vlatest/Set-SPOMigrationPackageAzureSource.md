---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPOMigrationPackageAzureSource

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Set-SPOMigrationPackageAzureSource -AccountKey <String> -AccountName <String> [-AzureQueueName <String>]
 [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>] [-EncryptionParameters <EncryptionParameters>]
 [-FileContainerName <String>] -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile]
 [-NoSnapshotCreation] [-NoUpload] [-Overwrite] [-PackageContainerName <String>]
```

### UNNAMED_PARAMETER_SET_2
```
Set-SPOMigrationPackageAzureSource -AccountKey <String> -AccountName <String> [-AzureQueueName <String>]
 [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>] [-EncryptionParameters <EncryptionParameters>]
 [-FileContainerName <String>] [-NoLogFile] [-NoSnapshotCreation] [-NoUpload] [-Overwrite]
 [-PackageContainerName <String>] -SourceFilesPath <String> -SourcePackagePath <String>
```

### UNNAMED_PARAMETER_SET_3
```
Set-SPOMigrationPackageAzureSource [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>]
 [-EncryptionParameters <EncryptionParameters>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations>
 -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] [-NoSnapshotCreation] [-NoUpload]
 [-Overwrite]
```

### UNNAMED_PARAMETER_SET_4
```
Set-SPOMigrationPackageAzureSource [-EncryptionMetaInfo <MigrationFileEncryptionInfo[]>]
 [-EncryptionParameters <EncryptionParameters>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations> [-NoLogFile] [-NoSnapshotCreation]
 [-NoUpload] [-Overwrite] -SourceFilesPath <String> -SourcePackagePath <String>
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 (SharePoint Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AccountKey
{{Fill AccountKey Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_3, UNNAMED_PARAMETER_SET_4
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_3
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoSnapshotCreation
{{Fill NoSnapshotCreation Description}}

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

### -NoUpload
{{Fill NoUpload Description}}

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

### -Overwrite
{{Fill Overwrite Description}}

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

### -PackageContainerName
{{Fill PackageContainerName Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2, UNNAMED_PARAMETER_SET_4
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2, UNNAMED_PARAMETER_SET_4
Aliases: 

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

