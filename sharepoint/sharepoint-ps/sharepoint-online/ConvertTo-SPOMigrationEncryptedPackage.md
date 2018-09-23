---
external help file: 
applicable: SharePoint Online
title: ConvertTo-SPOMigrationEncryptedPackage
schema: 2.0.0
---

# ConvertTo-SPOMigrationEncryptedPackage

## SYNOPSIS
Use this command to convert the XML that is generated in your temporary folder. It saves a new set of targeted encrypted migration package metadata files to the target directory.

## SYNTAX

### ImplicitSourceParameterSet
```
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters <EncryptionParameters>
 -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] -TargetFilesPath <String>
 -TargetPackagePath <String> [<CommonParameters>]
```

### ExplicitSourceParameterSet
```
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters <EncryptionParameters> [-NoLogFile]
 -SourceFilesPath <String> -SourcePackagePath <String> -TargetFilesPath <String> -TargetPackagePath <String>
 [<CommonParameters>]
```

## DESCRIPTION
This command convert the XML file on your temprary folder XML file into a new set of targeted migration encrypted metadata.

## EXAMPLES

### Example 1 
```powershell
PS C:\> ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters SHA256
 -MigrationSourceLocations $MigrationPackageLocation -NoLogFile -TargetFilesPath $TargetFilesPath
 -TargetPackagePath $TargetPackagePath
```

Changes a migration package to a migration encrypted package on the "migrationSourceLocations" , with log file on the current tenant

### Example 2 
```powershell
PS C:\> ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters SHA384
 -MigrationSourceLocations $MigrationPackageLocation  -TargetFilesPath $TargetFilesPath
 -TargetPackagePath $TargetPackagePath
```

Same as example1 but without log file and using an encription type SHA384

## PARAMETERS

### -EncryptionParameters
Parameters of the encription, it doesn't accept wildcard caracters.
It accepts parameters like SHA384, SHA256, etc.

```yaml
Type: EncryptionParameters
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationSourceLocations
Posible Source locations to migrate

```yaml
Type: MigrationPackageLocation
Parameter Sets: ImplicitSourceParameterSet
Aliases: 
Applicable: SharePoint Online

Required: True
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

### -SourceFilesPath
Defines the temporary Path where are located the XML source files.

```yaml
Type: String
Parameter Sets: ExplicitSourceParameterSet
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePackagePath
Defines the source package path location.

```yaml
Type: String
Parameter Sets: ExplicitSourceParameterSet
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFilesPath
Defines the temporary Path where are located the XML source files.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetPackagePath
Defines the source package path location of the package to be encrypted.

```yaml
Type: String
Parameter Sets: (All)
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


## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[ConvertTo-SPOMigrationTargetedPackage](ConvertTo-SPOMigrationTargetedPackage.md)
[Migrate to SharePoint Online using PowerShell](https://docs.microsoft.com/en-us/sharepointmigration/overview-spmt-ps-cmdlets)