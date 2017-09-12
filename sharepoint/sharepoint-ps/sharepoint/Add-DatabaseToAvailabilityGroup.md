---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-DatabaseToAvailabilityGroup

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### Default
```
Add-DatabaseToAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 -DatabaseName <String> [-FileShare <String>] [<CommonParameters>]
```

### AllDatabases
```
Add-DatabaseToAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-FileShare <String>] [-ProcessAllDatabases] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 (SharePoint Server 2013)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AGName
{{Fill AGName Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
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

### -DatabaseName
{{Fill DatabaseName Description}}

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileShare
{{Fill FileShare Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessAllDatabases
{{Fill ProcessAllDatabases Description}}

```yaml
Type: SwitchParameter
Parameter Sets: AllDatabases
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

