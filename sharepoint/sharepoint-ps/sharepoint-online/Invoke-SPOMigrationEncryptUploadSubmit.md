---
external help file: 
applicable: SharePoint Online
title: Invoke-SPOMigrationEncryptUploadSubmit
schema: 2.0.0
---

# Invoke-SPOMigrationEncryptUploadSubmit

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### ImplicitSourceParameterSet
```
Invoke-SPOMigrationEncryptUploadSubmit -Credentials <CredentialCmdletPipeBind>
 -MigrationSourceLocations <MigrationPackageLocation> [-NoLogFile] -TargetWebUrl <String> [<CommonParameters>]
```

### ExplicitSourceParameterSet
```
Invoke-SPOMigrationEncryptUploadSubmit -Credentials <CredentialCmdletPipeBind> [-NoLogFile]
 -SourceFilesPath <String> -SourcePackagePath <String> -TargetWebUrl <String> [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 
```
$sourceFiles = "sourceFiles"
$spoPackagePath = "packagePath"
$credentials = Get-Credential
$targetweburl = "https://contoso.sharepoint.com" 
Invoke-SPOMigrationEncryptUploadSubmit -SourceFilesPath $sourceFiles -SourcePackagePath $spoPackagePath -Credentials $credentials -TargetWebUrl $targetweburl
```

This example shows how to submit package data to create a new migration job. 

This article contains the steps on how to create this package: https://support.office.com/en-us/article/upload-on-premises-content-to-sharepoint-online-using-powershell-cmdlets-555049c6-15ef-45a6-9a1f-a1ef673b867c

## PARAMETERS

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

### -MigrationSourceLocations
{{Fill MigrationSourceLocations Description}}

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

### -SourceFilesPath
{{Fill SourceFilesPath Description}}

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
{{Fill SourcePackagePath Description}}

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
{{Fill TargetWebUrl Description}}

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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

