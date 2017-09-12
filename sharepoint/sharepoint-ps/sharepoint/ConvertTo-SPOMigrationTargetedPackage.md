---
external help file: 
applicable: SharePoint Online
schema: 2.0.0
---

# ConvertTo-SPOMigrationTargetedPackage

## SYNOPSIS
{{Fill in the Synopsis}}

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
Applicable: SharePoint Online

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
Applicable: SharePoint Online

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
Applicable: SharePoint Online

Required: False
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

### -OutputPackagePath
{{Fill OutputPackagePath Description}}

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
{{Fill ParallelImport Description}}

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
{{Fill PartitionSizeInBytes Description}}

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
{{Fill SourceFilesPath Description}}

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
{{Fill SourcePackagePath Description}}

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
{{Fill TargetDocumentLibraryPath Description}}

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
{{Fill TargetDocumentLibrarySubFolderPath Description}}

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
{{Fill TargetEnvironment Description}}

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
{{Fill TargetListPath Description}}

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
{{Fill TargetWebUrl Description}}

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
{{Fill UserMappingFile Description}}

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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

