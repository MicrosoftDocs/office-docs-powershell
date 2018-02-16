---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Uninstall-SPAppInstance
schema: 2.0.0
---

# Uninstall-SPAppInstance

## SYNOPSIS
Uninstalls an instance of an app.


## SYNTAX

```
Uninstall-SPAppInstance -Identity <SPAppInstance> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Uninstall-SPAppInstance` cmdlet to uninstall an instance of an app.
This cmdlet is required to be run before a migration process.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------EXAMPLE--------------
```
C:\PS>$instance = Get-SPAppInstance -AppInstanceId $instance.Id

C:\PS>Uninstall-SPAppInstance -Identity $spapp
```

This example uninstalls an instance of an app.


## PARAMETERS

### -Identity
Specifies the app instance for which to find metadata.

```yaml
Type: SPAppInstance
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Get-SPAppInstance](Get-SPAppInstance.md)

[Restart-SPAppInstanceJobs](Restart-SPAppInstanceJobs.md)

[Uninstall-SPAppInstance](Uninstall-SPAppInstance.md)
