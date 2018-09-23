---
external help file: 
applicable: SharePoint Online
title: Invoke-SPOMigrationEncryptUploadSubmit
schema: 2.0.0
---

# Invoke-SPOMigrationEncryptUploadSubmit

## SYNOPSIS
Creates a new migration job in the target site collection

## SYNTAX

### ImplicitSourceParameterSet
```Powershell
Invoke-SPOMigrationEncryptUploadSubmit -Credentials <CredentialCmdletPipeBind>
 -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] -TargetWebUrl <String> [<CommonParameters>]
```

### ExplicitSourceParameterSet
```Powershell
Invoke-SPOMigrationEncryptUploadSubmit -Credentials <CredentialCmdletPipeBind> [-NoLogFile]
 -SourceFilesPath <String> -SourcePackagePath <String> -TargetWebUrl <String> [<CommonParameters>]
```

## DESCRIPTION
Creates a new migration job in the target site collection, and then returns a GUID representing the JobID. This command will upload encrypted source files and manifests into temporary Azure blob storage per job.

## EXAMPLES

### Example 1 
This example shows how to submit package data to create a new migration job

```Powershell
$job = Invoke-SPOMigrationEncryptUploadSubmit -SourceFilesPath $sourceFiles -SourcePackagePath $spoPackagePath -Credentials $cred -TargetWebUrl $targetWebUrl
```

### Example 2 
```Powershell
$sourceFiles = "sourceFiles"
$spoPackagePath = "packagePath"
$credentials = Get-Credential
$targetweburl = "https://contoso.sharepoint.com" 
Invoke-SPOMigrationEncryptUploadSubmit -SourceFilesPath $sourceFiles -SourcePackagePath $spoPackagePath -Credentials $credentials -TargetWebUrl $targetweburl
```

This example shows how to submit package data to create a new migration job. 

This article contains the steps on how to create this package: https://support.office.com/en-us/article/upload-on-premises-content-to-sharepoint-online-using-powershell-cmdlets-555049c6-15ef-45a6-9a1f-a1ef673b867c


### Example 3

This example shows how to submit package data to create new migration jobs for parallel import.
```Powershell
$jobs = $finalPackages | % {Invoke-SPOMigrationEncryptUploadSubmit -SourceFilesPath $_.FilesDirectory.FullName -SourcePackagePath $_.PackageDirectory.FullName -Credentials $cred -TargetWebUrl $targetWeb}
```
 
## PARAMETERS

### -Credentials
Parameter to fill out credentials of the SPO tenant.

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

### -MigrationSourceLocations
Migration Location where the package lies.

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
Controls if a log will be created or not

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
Source files Path, string

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
Source Package Path.

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

### -TargetWebUrl
Target web URL

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
[Upload on-premises content to SharePoint Online using PowerShell cmdlets](https://support.office.com/en-us/article/upload-on-premises-content-to-sharepoint-online-using-powershell-cmdlets-555049c6-15ef-45a6-9a1f-a1ef673b867c)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

