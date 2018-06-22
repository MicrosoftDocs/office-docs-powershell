---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Start-SPMTMigration
online version: 
schema: 2.0.0
---

# Start-SPMTMigration

## SYNOPSIS
This cmdlet will start the registered SPMT migration.
## SYNTAX

```
Start-SPMTMigration [-NoShow] [-ParametersValidationOnly]
```

## DESCRIPTION
This cmdlet will start the registered SPMT migration.

## EXAMPLES

### Example 1
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -NoShow
In "-NoShow" mode, a message will be displayed to indicate that the migration is running in the background.
Note: Use the 'Show-SPMTMigration' to bring the migration from background to foreground. The task ID, data source location, target location and migration status will be displayed.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParametersValidationOnly
Validate the parameters: check source access permissions, source existence and if TargetUrl is valid.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
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

