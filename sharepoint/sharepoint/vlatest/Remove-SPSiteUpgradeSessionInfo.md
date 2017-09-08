---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPSiteUpgradeSessionInfo

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Remove-SPSiteUpgradeSessionInfo [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf]
```

## DESCRIPTION
Use the Remove-SPSiteUpgradeSessionInfo cmdlet to remove an SPSite object from the upgrade queue.

If the site is not in the upgrade queue, the returned value is Null.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite | Remove-SPSiteUpgradeSessionInfo
```

This example removes the SPSite objects from the farm.

### ------------EXAMPLE------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite | Remove-SPSiteUpgradeSessionInfo
```

This example removes the SPSite objects from the farm.

## PARAMETERS

### -Identity
Specifies the site from which to remove the site collections.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

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

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPSiteUpgradeSessionInfo]()

