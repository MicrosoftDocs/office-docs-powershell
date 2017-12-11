---
external help file: 
applicable: SharePoint Server 2016
title: Stop-SPService
schema: 2.0.0
---

# Stop-SPService

## SYNOPSIS
Disables a service in the farm.

## SYNTAX

```
Stop-SPService [-Identity] <SPServicePipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-IncludeCustomServerRole] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Stop-SPService cmdlet disables a service in the farm. Service instances for this service will be stopped on the appropriate servers in the farm.

**Note**: This cmdlet only controls service instances on servers that are managed by MinRole.  The behavior for the Custom server role has changed with the November 2016 Public Update (PU). Please see the **IncludeCustomServerRole** parameter for additional information. 

## EXAMPLES

### ---------------EXAMPLE--------------
```
Stop-SPService -Identity "Microsoft SharePoint Foundation Sandboxed Code Service"
```

This example disables the  Microsoft SharePoint Foundation Sandboxed Code Service  in the farm.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used. 

**Note**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur. 

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

### -Identity
Specifies the name of the service to disable.

```yaml
Type: SPServicePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludeCustomServerRole
Creates a timer job that also stops service instances on servers that are assigned to the custom server role.
**Note**: This is a one-time Timer job. MinRole will make no further attempts to manage the service instances on servers assigned to the Custom server role.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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

### Microsoft.SharePoint.PowerShell.SPServicePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
