---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Initialize-SPStateServiceDatabase

## SYNOPSIS
Installs the state database schema into a state service database.

## SYNTAX

```
Initialize-SPStateServiceDatabase [-Identity] <SPStateDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Initialize-SPStateServiceDatabase cmdlet installs the session state database schema in an empty state service database.
The current user's credentials are used to create the state database schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
C:\PS>Initialize-SPStateServiceDatabase -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b
```

This example installs the state service database schema into the database associated with the provided identity.

## PARAMETERS

### -Identity
Specifies the state service database to initialize.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a state database (for example, StateSvcDB1); or an instance of a valid SPStateServiceDatabase object.

```yaml
Type: SPStateDatabasePipeBind
Parameter Sets: (All)
Aliases: Name
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

