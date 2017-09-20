---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Dismount-SPContentDatabase

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Detaches a content database from its currently associated Web application.



## SYNTAX

```
Dismount-SPContentDatabase [-Identity] <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Dismount-SPContentDatabase cmdlet to detatch the given content database from its currently associated Web application.
This cmdlet will not delete the content database.
Use the Remove-SPContentDatabase cmdlet to delete a content database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1------------ (SharePoint Server 2013)
```
C:\PS>Dismount-SPContentDatabase 12345678-90ab-cdef-1234-567890abcdef
```

This example detaches the content database with the GUID 12345678-90ab-cdef-1234-567890abcdef from its current parent Web application.

### --------------EXAMPLE 1------------ (SharePoint Server 2016)
```
C:\PS>Dismount-SPContentDatabase 12345678-90ab-cdef-1234-567890abcdef
```

This example detaches the content database with the GUID 12345678-90ab-cdef-1234-567890abcdef from its current parent Web application.

### --------------EXAMPLE 2------------ (SharePoint Server 2013)
```
C:\PS>Get-SPContentDatabase -WebApplication http://sitename | Dismount-SPContentDatabase -WhatIf
```

This example detaches all content databases from the Web application on port 80 of the local machine.
Remove the WhatIf parameter to perform the operation.

### --------------EXAMPLE 2------------ (SharePoint Server 2016)
```
C:\PS>Get-SPContentDatabase -WebApplication http://sitename | Dismount-SPContentDatabase -WhatIf
```

This example detaches all content databases from the Web application on port 80 of the local machine.
Remove the WhatIf parameter to perform the operation.

## PARAMETERS

### -Identity
Specifies the content database to detach.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint content database (for example, SPContentDB1); or an instance of a valid SPContentDatabase object.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
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

