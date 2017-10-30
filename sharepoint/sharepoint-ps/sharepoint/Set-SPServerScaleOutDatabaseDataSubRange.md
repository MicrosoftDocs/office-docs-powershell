---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPServerScaleOutDatabaseDataSubRange

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

### UnattachedDatabase
```
Set-SPServerScaleOutDatabaseDataSubRange -ConnectionString <String> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> -SubRangeMode <SPScaleOutDatabaseSubRangeMode>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-IgnoreSubRangePointOnBoundary]
 [-IsAzureDatabase] [-SubRangePoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

### AttachedDatabase
```
Set-SPServerScaleOutDatabaseDataSubRange -Database <SPDatabasePipeBind> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> -SubRangeMode <SPScaleOutDatabaseSubRangeMode>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-IgnoreSubRangePointOnBoundary]
 [-SubRangePoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -ConnectionString
{{Fill ConnectionString Description}}


```yaml
Type: String
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
{{Fill Database Description}}


```yaml
Type: SPDatabasePipeBind
Parameter Sets: AttachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsUpperSubRange
{{Fill IsUpperSubRange Description}}


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Range
{{Fill Range Description}}


```yaml
Type: SPScaleOutDataRange
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubRangeMode
{{Fill SubRangeMode Description}}


```yaml
Type: SPScaleOutDatabaseSubRangeMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
{{Fill AssignmentCollection Description}}


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreSubRangePointOnBoundary
{{Fill IgnoreSubRangePointOnBoundary Description}}


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAzureDatabase
{{Fill IsAzureDatabase Description}}


```yaml
Type: SwitchParameter
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubRangePoint
{{Fill SubRangePoint Description}}


```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Clear-SPServerScaleOutDatabaseDeletedDataSubRange]()
