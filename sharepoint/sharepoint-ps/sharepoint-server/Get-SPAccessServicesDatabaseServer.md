---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServicesDatabaseServer
schema: 2.0.0
---

# Get-SPAccessServicesDatabaseServer

## SYNOPSIS
Returns SQL Server instances associated with Access Services.

## SYNTAX

### GetSingleDatabaseServerParamterSet
```
Get-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [<CommonParameters>]
```

### GetDatabaseServersParameterSet
```
Get-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
Returns the SQL Server instances that are available for use with Access Services.

## EXAMPLES

### Example 1 
```
PS C:\>Get-SPAccessServicesDatabaseServer
```

Returns all SQL Server instances available for use.


### Example 2 
```
PS C:\>Get-SPAccessServicesDatabaseServer -DatabaseServer ACCSQL -ServiceContext http://siteUrl -DatabaseServergroup DEFAULT
```

Returns the database server ACCSQL from the DEFAULT database server group using the service context from http://siteUrl.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -DatabaseServer
Specifies an existing Database Server associated with Access Services.

```yaml
Type: AccessServicesDatabaseServerPipeBind
Parameter Sets: GetSingleDatabaseServerParamterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerGroup
The name of the database server group.

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: GetSingleDatabaseServerParamterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: GetDatabaseServersParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context to retrieve Access Services database server information from.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServiceContextPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

