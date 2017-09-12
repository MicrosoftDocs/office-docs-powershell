---
applicable: SharePoint Online
schema: 2.0.0
---

# Get-SPOMigrationJobProgress

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### AzureLocationsInline
```
Get-SPOMigrationJobProgress -AzureQueueUri <String> -Credentials <CredentialCmdletPipeBind>
 [-DontWaitForEndJob] [-EncryptionParameters <EncryptionParameters>] [-JobIds <Guid[]>] [-NoLogFile]
 [-TargetWebUrl <String>] [<CommonParameters>]
```

### AzureLocationsImplicit
```
Get-SPOMigrationJobProgress -Credentials <CredentialCmdletPipeBind> [-DontWaitForEndJob]
 [-EncryptionParameters <EncryptionParameters>] [-JobIds <Guid[]>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations> [-NoLogFile] [-TargetWebUrl <String>]
 [<CommonParameters>]
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
Parameter Sets: AzureLocationsInline
Aliases: 
Applicable: SharePoint Online

Required: True
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

### -DontWaitForEndJob
{{Fill DontWaitForEndJob Description}}

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

### -JobIds
{{Fill JobIds Description}}

```yaml
Type: Guid[]
Parameter Sets: (All)
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
Parameter Sets: AzureLocationsImplicit
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

### -TargetWebUrl
{{Fill TargetWebUrl Description}}

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

