---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPInfoPathWebServiceProxy
schema: 2.0.0
---

# Set-SPInfoPathWebServiceProxy

## SYNOPSIS
Sets parameters for an existing SharePoint Web service application.


## SYNTAX

```
Set-SPInfoPathWebServiceProxy [-Identity] <SPWebServiceProxyPipeBind> [-AllowForUserForms <String>]
 [-AllowWebServiceProxy <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPInfoPathWebServiceProxy` cmdlet configures exposed parameters for an existing SharePoint Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------EXAMPLE-----------------
```
C:\PS>Set-SPInfoPathWebServiceProxy -Identity "http://server_name" -AllowWebServiceProxy $true
```

This example sets the Web service proxy for a Web application.


## PARAMETERS

### -Identity
Specifies the SharePoint Web service application proxy to update.

The type must be a valid URL, in the form http://server_name; a valid name of a Web application (for example, WebApp1); a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPWebServiceProxy object.

```yaml
Type: SPWebServiceProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowForUserForms
Specifies that a form opened in the InfoPath  client can use the InfoPath Forms Services Web service proxy to connect to a Web service.
This parameter can be set only when AllowWebServiceProxy is set to True.

The type must be one of the following: True, False The default value is False.

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

### -AllowWebServiceProxy
Specifies that browser-enabled form templates can use the InfoPath Forms Services Web service proxy to connect to a Web service.

The type must be one of the following: True, False The default value is False.

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
