---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Add-SPUserSolution

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Add-SPUserSolution [-LiteralPath] <String> -Site <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The Add-SPUserSolution cmdlet uploads a new sandboxed solution package to the solution gallery.
This cmdlet does not activate the uploaded sandboxed solution; to activate the solution in the site collection, use the Install-SPUserSolution cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE--------------------- (SharePoint Server 2013)
```
C:\PS>Add-SPUserSolution -LiteralPath c:\contoso_solution.wsp -Site http://sitename
```

This example adds the sandboxed solution c:\contoso_solution.wsp to the site http://sitename.

### -------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>Add-SPUserSolution -LiteralPath c:\contoso_solution.wsp -Site http://sitename
```

This example adds the sandboxed solution c:\contoso_solution.wsp to the site http://sitename.

## PARAMETERS

### -LiteralPath
Specifies the path to the sandboxed solution package.

The type must be a valid path in either of the following forms:

- C:\folder_name
- \\\\server_name\folder_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
Specifies the site collection where the sandboxed solution is to be added.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSiteobject.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

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

