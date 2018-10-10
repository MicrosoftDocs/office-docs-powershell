---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
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
PS C:\>$wa = Get-SPWebApplication -Identity http://webAppUrl
PS C:\>$rm = Get-SPRequestManagementSettings -Identity $wa
PS C:\>$pool = Get-SPRoutingMachinePool -RequestManagementSettings $rm -Name 'MachinePool'
PS C:\>$newMachine = Get-SPRoutingMachineInfo -RequestManagementSettings $rm -Name SP01
PS C:\>Set-SPRoutingMachinePool -Identity $pool -MachineTargets ($pool.MachineTargets + $newMachine)
```
This example sets the routing machine pool on the specified Web Application. Using the Request Management settings of the Web Application, it retrives the existing routing machine pool named 'MachinePool'. It then gets the routing machine info for a new machine to add to the pool. Lastly, it sets the pool with the existing machine targets plus the new machine target.

## PARAMETERS

### -Identity
Specifies the name of the request management settings object to set.

```yaml
Type: SPRoutingMachinePoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
