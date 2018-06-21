---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
online version: 
schema: 2.0.0
---

# Add-SPMTTask

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### FileShare (Default)
```
Add-SPMTTask -FileShareSource <String> -TargetSiteUrl <String> -TargetList <String>
 [-TargetListRelativePath <String>]
```

### SharePointMigrateAll
```
Add-SPMTTask [-MigrateAll] -SharePointSourceSiteUrl <String> -SharePointSourceCredential <PSCredential>
 -TargetSiteUrl <String>
```

### SharePointMigrateSelected
```
Add-SPMTTask -SharePointSourceSiteUrl <String> -SharePointSourceCredential <PSCredential>
 [-SourceListRelativePath <String>] -SourceList <String> -TargetSiteUrl <String> -TargetList <String>
 [-TargetListRelativePath <String>]
```

### Json
```
Add-SPMTTask [-SharePointSourceCredential <PSCredential>] -JsonDefinition <String>
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -FileShareSource
{{Fill FileShareSource Description}}

```yaml
Type: String
Parameter Sets: FileShare
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JsonDefinition
{{Fill JsonDefinition Description}}

```yaml
Type: String
Parameter Sets: Json
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateAll
{{Fill MigrateAll Description}}

```yaml
Type: SwitchParameter
Parameter Sets: SharePointMigrateAll
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceCredential
{{Fill SharePointSourceCredential Description}}

```yaml
Type: PSCredential
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: Json
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointSourceSiteUrl
{{Fill SharePointSourceSiteUrl Description}}

```yaml
Type: String
Parameter Sets: SharePointMigrateAll, SharePointMigrateSelected
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceList
{{Fill SourceList Description}}

```yaml
Type: String
Parameter Sets: SharePointMigrateSelected
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceListRelativePath
{{Fill SourceListRelativePath Description}}

```yaml
Type: String
Parameter Sets: SharePointMigrateSelected
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetList
{{Fill TargetList Description}}

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetListRelativePath
{{Fill TargetListRelativePath Description}}

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateSelected
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetSiteUrl
{{Fill TargetSiteUrl Description}}

```yaml
Type: String
Parameter Sets: FileShare, SharePointMigrateAll, SharePointMigrateSelected
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

