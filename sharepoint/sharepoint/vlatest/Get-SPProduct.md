---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPProduct

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPProduct [-AssignmentCollection <SPAssignmentCollection>] [-Local]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPProduct [-AssignmentCollection <SPAssignmentCollection>] [-Server <SPServerPipeBind>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPProduct cmdlet returns a list of the SharePoint-related products installed in the farm and the versions of all updates installed for each product.
By default this cmdlet returns the list of SharePoint-related products installed in the farm.
Use the Local parameter to get only information about the local server or for a specific server to get the list, use the Server parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPProduct -Local
```

This example displays the SharePoint-related products installed on the local server.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPProduct -Local
```

This example displays the SharePoint-related products installed on the local server.

## PARAMETERS

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Local
Returns product and update information for only the local computer.
If you use the Local parameter, you cannot use the Server parameter.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
Returns product and update information for a specified server.
If you use the Server parameter, you cannot use the Local parameter.

```yaml
Type: SPServerPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

