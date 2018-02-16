---
external help file: 
applicable: SharePoint Server 2016
title: Remove-SPSiteMaster
schema: 2.0.0
---

# Remove-SPSiteMaster

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

```
Remove-SPSiteMaster [-ContentDatabase] <SPContentDatabasePipeBind> [-SiteId] <Guid>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentDatabase
{{Fill ContentDatabase Description}}

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SiteId
{{Fill SiteId Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPContentDatabasePipeBind
System.Guid
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
