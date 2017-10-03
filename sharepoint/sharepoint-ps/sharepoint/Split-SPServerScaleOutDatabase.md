---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Split-SPServerScaleOutDatabase

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

### NewDatabase
```
Split-SPServerScaleOutDatabase -NewDatabaseName <String> -SourceDatabase <SPDatabasePipeBind>
 -SourceServiceApplication <SPServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-MoveLowerHalf] [-NewDatabaseCredentials <PSCredential>] [-NewDatabaseFailoverServer <String>]
 [-NewDatabaseServer <String>] [-SourcePercentage <Int32>] [-WhatIf] [<CommonParameters>]
```

### ExistingDatabase
```
Split-SPServerScaleOutDatabase -SourceDatabase <SPDatabasePipeBind>
 -SourceServiceApplication <SPServiceApplicationPipeBind> -TargetDatabase <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-MoveLowerHalf] [-SourcePercentage <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### ---------------EXAMPLE---------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -NewDatabaseName
{{Fill NewDatabaseName Description}}



```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceDatabase
{{Fill SourceDatabase Description}}


```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceServiceApplication
{{Fill SourceServiceApplication Description}}


```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase
{{Fill TargetDatabase Description}}


```yaml
Type: SPDatabasePipeBind
Parameter Sets: ExistingDatabase
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

### -MoveLowerHalf
{{Fill MoveLowerHalf Description}}


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

### -NewDatabaseCredentials
{{Fill NewDatabaseCredentials Description}}


```yaml
Type: PSCredential
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewDatabaseFailoverServer
{{Fill NewDatabaseFailoverServer Description}}


```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewDatabaseServer
{{Fill NewDatabaseServer Description}}


```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePercentage
{{Fill SourcePercentage Description}}


```yaml
Type: Int32
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

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Add-SPServerScaleOutDatabase]()

[Get-SPServerScaleOutDatabase]()

[Remove-SPServerScaleOutDatabase]()
