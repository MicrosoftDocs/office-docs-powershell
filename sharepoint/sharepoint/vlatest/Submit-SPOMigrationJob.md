---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/985591b0-951f-4274-aead-a184398bba41(Office.15).aspx
schema: 2.0.0
---

# Submit-SPOMigrationJob

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Submit-SPOMigrationJob [-TargetWebUrl] <String> [-FileContainerUri] <String> [-PackageContainerUri] <String>
 [-AzureQueueUri <String>] -Credentials <CredentialCmdletPipeBind>
 [-EncryptionParameters <EncryptionParameters>] [-NoLogFile]
```

### UNNAMED_PARAMETER_SET_2
```
Submit-SPOMigrationJob [-TargetWebUrl] <String>
 [-MigrationPackageAzureLocations] <MigrationPackageAzureLocations> -Credentials <CredentialCmdletPipeBind>
 [-EncryptionParameters <EncryptionParameters>] [-NoLogFile]
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

### -AzureQueueUri
{{Fill AzureQueueUri Description}}

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

### -FileContainerUri
{{Fill FileContainerUri Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageContainerUri
{{Fill PackageContainerUri Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.Online.SharePoint.Migration.MigrationPackageAzureLocations

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

