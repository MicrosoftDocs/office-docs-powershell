---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPRoutingMachinePool
schema: 2.0.0
---

# Set-SPRoutingMachinePool

## SYNOPSIS
Sets properties of a machine pool.


## SYNTAX

```
Set-SPRoutingMachinePool [-Identity] <SPRoutingMachinePoolPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-MachineTargets <SPRoutingRuleTargetPipeBind[]>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPRoutingMachinePool` cmdlet to set properties of a machine pool by using the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE---------------------
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>$pool=Get-SPRoutingMachinePool -RequestManagementSettings $rm

C:\PS>Set-SPRoutingMachinePool -Identity $pool -MachineTargets <Machine collections>
```

This example sets the machine pool property of MachineTargets for a specified identity as defined by the $pool variable.


## PARAMETERS

### -Identity
Specifies the name of the request management settings object to set.

```yaml
Type: SPRoutingMachinePoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -MachineTargets
Specifies the routing targets collection that the machine pool will contain.

```yaml
Type: SPRoutingRuleTargetPipeBind[]
Parameter Sets: (All)
Aliases: 
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPRoutingMachinePool](Add-SPRoutingMachinePool.md)

[Get-SPRoutingMachinePool](Get-SPRoutingMachinePool.md)

[Remove-SPRoutingMachinePool](Remove-SPRoutingMachinePool.md)
