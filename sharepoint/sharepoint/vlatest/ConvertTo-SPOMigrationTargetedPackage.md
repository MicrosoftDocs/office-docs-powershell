---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# ConvertTo-SPOMigrationTargetedPackage

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
ConvertTo-SPOMigrationTargetedPackage [-SourceFilesPath] <String> [-SourcePackagePath] <String>
 [[-OutputPackagePath] <String>] [-TargetWebUrl] <String> [-AzureADUserCredentials <CredentialCmdletPipeBind>]
 -Credentials <CredentialCmdletPipeBind> [-NoAzureADLookup] [-NoLogFile] [-ParallelImport]
 [-PartitionSizeInBytes <Int64>] -TargetDocumentLibraryPath <String>
 [-TargetDocumentLibrarySubFolderPath <String>] [-TargetEnvironment <TargetEnvironment>]
 [-UserMappingFile <String>]
```

### UNNAMED_PARAMETER_SET_2
```
ConvertTo-SPOMigrationTargetedPackage [-SourceFilesPath] <String> [-SourcePackagePath] <String>
 [[-OutputPackagePath] <String>] [-TargetWebUrl] <String> [-AzureADUserCredentials <CredentialCmdletPipeBind>]
 -Credentials <CredentialCmdletPipeBind> [-NoAzureADLookup] [-NoLogFile] [-ParallelImport]
 [-PartitionSizeInBytes <Int64>] [-TargetEnvironment <TargetEnvironment>] -TargetListPath <String>
 [-UserMappingFile <String>]
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

### -AzureADUserCredentials
{{Fill AzureADUserCredentials Description}}

```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
{{Fill Credentials Description}}

```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAzureADLookup
{{Fill NoAzureADLookup Description}}

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

### -OutputPackagePath
{{Fill OutputPackagePath Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParallelImport
{{Fill ParallelImport Description}}

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

### -PartitionSizeInBytes
{{Fill PartitionSizeInBytes Description}}

```yaml
Type: Int64
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePackagePath
{{Fill SourcePackagePath Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDocumentLibraryPath
{{Fill TargetDocumentLibraryPath Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDocumentLibrarySubFolderPath
{{Fill TargetDocumentLibrarySubFolderPath Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetEnvironment
{{Fill TargetEnvironment Description}}

```yaml
Type: TargetEnvironment
Parameter Sets: (All)
Aliases: 
Accepted values: Production, ProductionChina, None, OnPremises

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetListPath
{{Fill TargetListPath Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetWebUrl
{{Fill TargetWebUrl Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 3
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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

