---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPVisioServiceApplication

## SYNOPSIS
Adds a new Visio Services application to a farm.

## SYNTAX

```
New-SPVisioServiceApplication -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-AddToDefaultGroup]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Name <String>] [-WhatIf]
```

## DESCRIPTION
The New-SPVisioServiceApplication cmdlet adds a new Visio Services application to a farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>New-SPVisioServiceApplication -Identity "VGS2" -ServiceApplicationPool "SharePoint Web Services Default" -CreateDefaultProxy
```

This example creates a new Visio Services application VGS2, and also creates a service application proxy associated with it.

### ----------------EXAMPLE 1--------------------- (SharePoint Server 2016)
```
C:\PS>New-SPVisioServiceApplication -Identity "VGS2" -ServiceApplicationPool "SharePoint Web Services Default" -CreateDefaultProxy
```

This example creates a new Visio Services application VGS2, and also creates a service application proxy associated with it.

### ----------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPIISWebServiceApplicationPool "SharePoint Web Services System Default" | New-SPVisioServiceApplication "VGS3"
```

This example creates a new Visio Services application VGS3 without creating an associated service application proxy.
You can pipe the results from the Get-SPIISWebServiceApplicationPool cmdlet.

### ----------------EXAMPLE 2--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPIISWebServiceApplicationPool "SharePoint Web Services System Default" | New-SPVisioServiceApplication "VGS3"
```

This example creates a new Visio Services application VGS3 without creating an associated service application proxy.
You can pipe the results from the Get-SPIISWebServiceApplicationPool cmdlet.

## PARAMETERS

### -ApplicationPool
Specifies the existing IIS application pool in which to run the Web service for the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddToDefaultGroup
Specifies that a default proxy is created for the new Visio Services application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -Name
Specifies the Visio Services application to create.

The type must be a valid name of a Visio Service application; for example, MyVisioService1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

