---
external help file: Microsoft.SharePoint.MigrationTool.PowerShell.dll-Help.xml
Module Name: Microsoft.SharePoint.MigrationTool.PowerShell
applicable: SharePoint Migration Tool
title: Remove-SPMTTask
online version: 
schema: 2.0.0
---

# Remove-SPMTTask

## SYNOPSIS
Remove an existing migration task from the registered migration.

## SYNTAX

```
Remove-SPMTTask -TaskId <Guid> [-Force]
```

## DESCRIPTION
Remove an existing migration task from the registered migration.

## EXAMPLES

### Example 1
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Force
This parameter is optional. To remove a task already started, the Force parameter is required. 

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

### -TaskId
This parameter is mandatory and defines the ID of task to be removed.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: SharePoint Migration Tool
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

