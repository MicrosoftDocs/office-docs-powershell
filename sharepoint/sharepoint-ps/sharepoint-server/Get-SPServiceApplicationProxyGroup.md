---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPServiceApplicationProxyGroup
schema: 2.0.0
---

# Get-SPServiceApplicationProxyGroup

## SYNOPSIS

Returns the proxy group for the specified service application.



## SYNTAX

### Identity
```
Get-SPServiceApplicationProxyGroup [[-Identity] <SPServiceApplicationProxyGroupPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### Default identity
```
Get-SPServiceApplicationProxyGroup [-Default] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPServiceApplicationProxyGroup cmdlet displays a list of the proxy groups in the farm.
To display a specific proxy group, use the Identity parameter.
If no parameter value is specified, a list of all proxy groups is displayed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
C:\PS>Get-SPServiceApplicationProxyGroup
```

This example retrieves all of the service application proxy groups in the farm.

## PARAMETERS

### -Identity
Specifies the name or the GUID of the proxy group.

```yaml
Type: SPServiceApplicationProxyGroupPipeBind
Parameter Sets: Identity
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Parameter Sets: Default identity
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

