---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/convertto-spomigrationencryptedpackage
applicable: SharePoint Online
title: ConvertTo-SPOMigrationEncryptedPackage
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# ConvertTo-SPOMigrationEncryptedPackage

## SYNOPSIS

Use this Cmdlet to convert your XML files into a new encrypted migration package.

## SYNTAX

### ImplicitSourceParameterSet

```powershell
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters <EncryptionParameters> -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] -TargetFilesPath <String> -TargetPackagePath <String> [<CommonParameters>]
```

### ExplicitSourceParameterSet

```powershell
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters <EncryptionParameters> [-NoLogFile]
 -SourceFilesPath <String> -SourcePackagePath <String> -TargetFilesPath <String> -TargetPackagePath <String>
 [<CommonParameters>]
```

## DESCRIPTION

This command convert the XML file on your temporary XML folder files into a new set of targeted migration encrypted metadata files to the target directory.

## EXAMPLES

### Example 1

```powershell
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters SHA256 -MigrationSourceLocations $MigrationPackageLocation -NoLogFile -TargetFilesPath $TargetFilesPath -TargetPackagePath $TargetPackagePath
```

Changes a migration package to a migration encrypted package on the "migrationSourceLocations" , with log file on the current tenant

### Example 2

```powershell
ConvertTo-SPOMigrationEncryptedPackage -EncryptionParameters SHA384 -MigrationSourceLocations $MigrationPackageLocation  -TargetFilesPath $TargetFilesPath -TargetPackagePath $TargetPackagePath
```

Same as example1 but without log file and using an encryption type SHA384

## PARAMETERS

### -EncryptionParameters

Parameters of the encryption, it doesn't accept wildcard characters.
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

Possible Source locations to migrate

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[ConvertTo-SPOMigrationTargetedPackage](ConvertTo-SPOMigrationTargetedPackage.md)
[Migrate to SharePoint Online using PowerShell](https://docs.microsoft.com/sharepointmigration/overview-spmt-ps-cmdlets)
