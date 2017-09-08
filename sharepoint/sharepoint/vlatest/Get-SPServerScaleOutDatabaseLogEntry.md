---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPServerScaleOutDatabaseLogEntry

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPServerScaleOutDatabaseLogEntry -Count <Int32> -Database <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-CorrelationId <Guid>]
 [-MajorAction <SPScaleOutDatabaseMajorAction>] [-RangeLimitPoint <Byte[]>] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the Get-SPServerScaleOutDatabaseLogEntry cmdlet to query a scale-out database for scale-out logs that include specified criteria.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### -------------EXAMPLE----------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>Get-SPServerScaleOutDatabaseLogEntry -Database $database -Count 10 -MajorAction DataMove
```

This example gets the 10 most recent scale-out log entries from the first scale-out database of the given service application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Count
Below Content Applies To: SharePoint Server 2013

Specifies the number of scale-out log entries to return.
Below Content Applies To: SharePoint Server 2016

{{Fill Count Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
Below Content Applies To: SharePoint Server 2013

Specifies the scale-out database from which to return the scale-out logs Below Content Applies To: SharePoint Server 2016

{{Fill Database Description}}

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
Below Content Applies To: SharePoint Server 2016

{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CorrelationId
Below Content Applies To: SharePoint Server 2013

Specifies the correlation id of the scale-out logs to be returned.
Correlation id of the log entries that belong to the same major action are the same.
Below Content Applies To: SharePoint Server 2016

{{Fill CorrelationId Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MajorAction
Below Content Applies To: SharePoint Server 2013

Specifies the major action of the scale-out log entries to be returned.
The values are the following:

DataMove -A data migration operation between two scale-out databases.

Recovery -Any data recovery operation that is performed to recover from a failure.
Below Content Applies To: SharePoint Server 2016

{{Fill MajorAction Description}}

```yaml
Type: SPScaleOutDatabaseMajorAction
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RangeLimitPoint
Below Content Applies To: SharePoint Server 2013

Specifies the range limit point of the scale-out log entries to be returned.

The range limit point has different meaning depending on the action that records the log entry.
Below Content Applies To: SharePoint Server 2016

{{Fill RangeLimitPoint Description}}

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

