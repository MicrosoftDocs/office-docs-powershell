---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPServiceApplicationProxyGroup

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPServiceApplicationProxyGroup [[-Identity] <SPServiceApplicationProxyGroupPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPServiceApplicationProxyGroup [-Default] [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Get-SPServiceApplicationProxyGroup cmdlet displays a list of the proxy groups in the farm.
To display a specific proxy group, use the Identity parameter.
If no parameter value is specified, a list of all proxy groups is displayed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPServiceApplicationProxyGroup
```

This example retrieves all of the service application proxy groups in the farm.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPServiceApplicationProxyGroup
```

This example retrieves all of the service application proxy groups in the farm.

## PARAMETERS

### -Identity
Specifies the name or the GUID of the proxy group.

```yaml
Type: SPServiceApplicationProxyGroupPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Default
Returns the default sevice proxy group for the farm.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

