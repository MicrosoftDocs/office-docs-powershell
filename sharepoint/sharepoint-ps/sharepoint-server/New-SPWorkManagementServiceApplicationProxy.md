---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPWorkManagementServiceApplicationProxy
schema: 2.0.0
---

# New-SPWorkManagementServiceApplicationProxy

## SYNOPSIS
Creates a new service application proxy group.


## SYNTAX

```
New-SPWorkManagementServiceApplicationProxy -Name <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DefaultProxyGroup] [-ServiceApplication <SPWorkManagementServiceCmdletPipeBind>] [-Uri <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `New-SPWorkManagementServiceApplicationProxy` cmdlet to create a new Work Management Service application proxy object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>$serviceApp = Get-SPServiceApplication -name "Work Management Service Application"

C:\PS>New-SPWorkManagementServiceApplicationProxy -name "WMServiceProxy" -ServiceApplication $serviceApp
```

This example creates a new SPWorkManagementServiceApplicationProxy called "WMServiceProxy" mapped to the "Work Management Service Application" Service Application.


## PARAMETERS

### -Name
Specifies the display name for the new Work Management Service application proxy.
The name that you use must be a unique name of a Work Management Service application proxy in the farm.
The maximum length is 128 characters.

The value must be a name of a valid Work Management Service application proxy; for example, WorkMgmtSvcProxy1.

```yaml
Type: String
Parameter Sets: (All)
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

### -DefaultProxyGroup
Specifies that the Work Management Service application proxy be added to the default proxy group for the local farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the local Work Management Service application that is associated with the new proxy.

The value must be in one of the following forms:

--A valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh
--A valid name of a Work Management Service application (for example, WorkManServ1)
--An instance of a valid SPServiceApplication object

```yaml
Type: SPWorkManagementServiceCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
{{ Fill Uri Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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

[New-SPWorkManagementServiceApplication]()

[Set-SPWorkManagementServiceApplication]()

[Set-SPWorkManagementServiceApplicationProxy]()
