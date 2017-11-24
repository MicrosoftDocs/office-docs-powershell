---
external help file: 
applicable: SharePoint Online
title: Submit-SPOMigrationJob
schema: 2.0.0
---

# Submit-SPOMigrationJob

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### AzureLocationsInline
```
Submit-SPOMigrationJob [-TargetWebUrl] <String> [-FileContainerUri] <String> [-PackageContainerUri] <String>
 [-AzureQueueUri <String>] -Credentials <CredentialCmdletPipeBind>
 [-EncryptionParameters <EncryptionParameters>] [-NoLogFile] [<CommonParameters>]
```

### AzureLocationsPipebind
```
Submit-SPOMigrationJob [-TargetWebUrl] <String>
 [-MigrationPackageAzureLocations] <MigrationPackageAzureLocations> -Credentials <CredentialCmdletPipeBind>
 [-EncryptionParameters <EncryptionParameters>] [-NoLogFile] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### --------------EXAMPLE-----------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AzureQueueUri
{{Fill AzureQueueUri Description}}

```yaml
Type: String
Parameter Sets: AzureLocationsInline
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

### -FileContainerUri
{{Fill FileContainerUri Description}}

```yaml
Type: String
Parameter Sets: AzureLocationsInline
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationPackageAzureLocations
{{Fill MigrationPackageAzureLocations Description}}

```yaml
Type: MigrationPackageAzureLocations
Parameter Sets: AzureLocationsPipebind
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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

### -PackageContainerUri
{{Fill PackageContainerUri Description}}

```yaml
Type: String
Parameter Sets: AzureLocationsInline
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 2
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
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.Migration.MigrationPackageAzureLocations

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
