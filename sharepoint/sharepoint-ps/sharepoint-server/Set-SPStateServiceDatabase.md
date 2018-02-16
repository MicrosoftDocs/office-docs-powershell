---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPStateServiceDatabase
schema: 2.0.0
---

# Set-SPStateServiceDatabase

## SYNOPSIS
Updates properties of a state service database.

## SYNTAX

```
Set-SPStateServiceDatabase [-Identity] <SPStateDatabasePipeBind>
 [[-ServiceApplication] <SPStateServiceApplicationPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DatabaseCredentials <PSCredential>] [-Weight <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPStateServiceDatabase` cmdlet manages the credentials that are used to communicate with the database, sets the weight of the database, or changes the state service application with which it is associated.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
C:\PS>Set-SPStateServiceDatabase -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b -Weight 10
```

This example updates the database weight to the maximum (10).


### --------------------EXAMPLE 2---------------------
```
C:\PS>Set-SPStateServiceDatabase -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b -ServiceApplication "StateSvcApp1"
```

This example updates the associated service application for a state service database.


### --------------------EXAMPLE 3---------------------
```
C:\PS>$cred = Get-Credential

C:\PS>Set-SPStateServiceDatabase -Identity "StateSvcDB1" -DatabaseCredentials $cred
```

This example updates the SQL Authentication credentials that are used for a given database.


## PARAMETERS

### -Identity
Specifies the state service database to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a state database (for example, StateSvcDB1); or an instance of a valid SPStateServiceDatabase object.

```yaml
Type: SPStateDatabasePipeBind
Parameter Sets: (All)
Aliases: Name
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the state service application to which to add the state database.

The type must be a valid name of a state service application (for example, StateServiceApp1); a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPStateServiceApplication object.

```yaml
Type: SPStateServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: Application
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the database credentials for SQL Authentication used to access the state service database.
If this parameter is not specified, Windows authentication is used.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Weight
Specifies the weight for the state database.
The default value is 1.

The type must be a valid integer in the range of 1 to 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
