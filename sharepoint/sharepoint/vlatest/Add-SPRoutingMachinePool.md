---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Add-SPRoutingMachinePool

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Add-SPRoutingMachinePool [-RequestManagementSettings] <SPRequestManagementSettingsPipeBind> [-Name] <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-MachineTargets <SPRoutingRuleTargetPipeBind[]>]
```

## DESCRIPTION
Use the Add-SPRoutingMachinePool cmdlet to add a machine pool by using the RequestManagementSettings and Name parameters.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------EXAMPLE-------- (SharePoint Server 2013)
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>Add-SPRoutingMachinePool -RequestManagementSettings $rm -Name <MachineName>
```

This example adds a machine pool.

### ----------EXAMPLE-------- (SharePoint Server 2016)
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>Add-SPRoutingMachinePool -RequestManagementSettings $rm -Name <MachineName>
```

This example adds a machine pool.

## PARAMETERS

### -RequestManagementSettings
Specifies the name of the request management settings object to add to the routing machine pool.

```yaml
Type: SPRequestManagementSettingsPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of machine pool.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPRoutingMachinePool]()

[Remove-SPRoutingMachinePool]()

[Set-SPRoutingMachinePool]()

