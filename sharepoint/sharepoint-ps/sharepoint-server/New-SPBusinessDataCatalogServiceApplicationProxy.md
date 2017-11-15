---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPBusinessDataCatalogServiceApplicationProxy
schema: 2.0.0
---

# New-SPBusinessDataCatalogServiceApplicationProxy

## SYNOPSIS

Creates a new Business Data Connectivity service application proxy in the farm.



## SYNTAX

### PipeBind
```
New-SPBusinessDataCatalogServiceApplicationProxy [-Name <String>]
 -ServiceApplication <SPServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DefaultProxyGroup] [-WhatIf] [<CommonParameters>]
```

### Uri
```
New-SPBusinessDataCatalogServiceApplicationProxy [-Name <String>] -Uri <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] [-WhatIf] [-PartitionMode]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The New-SPBusinessDataCatalogServiceApplicationProxy cmdlet creates a new Business Data Connectivity service application proxy for a Business Data Connectivity service application in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>New-SPBusinessDataCatalogServiceApplicationProxy -Name "ContosoServiceAppProxy" -ServiceApplication $serviceApplication
```

This example creates a new Business Data Connectivity service application proxy with the name ContosoServiceAppProxy for the given service application.

## PARAMETERS

### -Name
Specifies a display name for the new Business Data Connectivity service application proxy.

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

### -ServiceApplication
Specifies the Business Data Connectivity service application associated with the new proxy.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: PipeBind
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Uri
Specifies the URI of a remote service application to which to connect.

The type must be a valid URI, in the form file:\\\\server_name\sitedocs.

```yaml
Type: Uri
Parameter Sets: Uri
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
Specifies that the service application proxy is added to the default proxy group for the farm.

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

### -PartitionMode
{{Fill PartitionMode Description}}

```yaml
Type: SwitchParameter
Parameter Sets: Uri
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

