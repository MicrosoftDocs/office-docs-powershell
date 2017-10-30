---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPServerScaleOutDatabaseLogEntry

## SYNOPSIS

Queries a scale-out database for scale-out logs.



## SYNTAX

```
Get-SPServerScaleOutDatabaseLogEntry -Count <Int32> -Database <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-CorrelationId <Guid>]
 [-MajorAction <SPScaleOutDatabaseMajorAction>] [-RangeLimitPoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Use the Get-SPServerScaleOutDatabaseLogEntry cmdlet to query a scale-out database for scale-out logs that include specified criteria.



## EXAMPLES

### -------------EXAMPLE----------- 
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>Get-SPServerScaleOutDatabaseLogEntry -Database $database -Count 10 -MajorAction DataMove
```

This example gets the 10 most recent scale-out log entries from the first scale-out database of the given service application.


## PARAMETERS

### -Count

Specifies the number of scale-out log entries to return.





```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database

Specifies the scale-out database from which to return the scale-out logs



```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.




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

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`





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

### -CorrelationId

Specifies the correlation id of the scale-out logs to be returned.
Correlation id of the log entries that belong to the same major action are the same.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MajorAction

Specifies the major action of the scale-out log entries to be returned.
The values are the following:

DataMove -A data migration operation between two scale-out databases.

Recovery -Any data recovery operation that is performed to recover from a failure.




```yaml
Type: SPScaleOutDatabaseMajorAction
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RangeLimitPoint

Specifies the range limit point of the scale-out log entries to be returned.

The range limit point has different meaning depending on the action that records the log entry.




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

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`




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

