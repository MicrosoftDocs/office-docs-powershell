---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Update-SPInfoPathUserFileUrl

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Update-SPInfoPathUserFileUrl [-ContentDatabase] <SPContentDatabasePipeBind> -Find <Uri> -Replace <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Scan] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Update-SPInfoPathUserFileUrl [-Site] <SPSitePipeBind> -Find <Uri> -Replace <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Scan] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_3
```
Update-SPInfoPathUserFileUrl [-WebApplication] <SPWebApplicationPipeBind> -Find <Uri> -Replace <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Scan] [-WhatIf]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Update-SPInfoPathAdminFileUrl cmdlet updates data connections in InfoPath form templates (.xsn files) and universal data connections (.udcx files).
This allows for InfoPath data connections that reference the current farm to be updated when content is migrated to a different farm URL.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Get-SPWebApplication http://contoso2010 | Update-SPInfoPathUserFileUrl-find "http://contoso2007" -replace "http://contoso2010"
```

This example updates data connections in InfoPath form templates and universal data connection files, for all content under the Web application http://contoso2010.
Data connections that reference http://contoso2007 are updated to reference http://contoso2010.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPWebApplication http://contoso2010 | Update-SPInfoPathUserFileUrl
-find "http://contoso2007" 
-replace "http://contoso2010"
```

This example updates data connections in InfoPath form templates and universal data connection files, for all content under the Web application http://contoso2010.
Data connections that reference http://contoso2007 are updated to reference http://contoso2010.

## PARAMETERS

### -ContentDatabase
Specifies the parent content database where the update will start.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a content database (for example, SPContent DB1); or an instance of a valid SPContentDatabase object.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
Specifies the parent site collection where the update will start.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://sites/example; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the parent SharePoint Web application where the update will start.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Find
Specifies the URL to find.

The type must be a valid URL, in the form http://previous_server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Replace
Specifies the URL to find.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
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

### -Scan
Run the tool and log the actions that can be taken.
No content is changed as a result of the scan.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

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

