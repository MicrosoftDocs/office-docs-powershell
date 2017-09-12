---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Move-SPDeletedSite

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Moves deleted site collections from one content database to another.



## SYNTAX

```
Move-SPDeletedSite [-Identity] <SPDeletedSitePipeBind> -DestinationDatabase <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-ContentDatabase <SPContentDatabasePipeBind>]
 [-RbsProviderMapping <Hashtable>] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Move-SPDeletedSite cmdlet to move data in a specified site collection from its current content database to the content database specified by the DestinationDatabase parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------EXAMPLE---------- (SharePoint Server 2013)
```
C:\PS>Move-SPDeletedSite -Identity 610857cb-8414-4a89-8bf3-ad3628f6c86c -DestinationDatabase "ContentDB2"
```

This example moves deleted site collections from the specified GUID to the database named "ContentDB2".

### ----------EXAMPLE---------- (SharePoint Server 2016)
```
C:\PS>Move-SPDeletedSite -Identity 610857cb-8414-4a89-8bf3-ad3628f6c86c -DestinationDatabase "ContentDB2"
```

This example moves deleted site collections from the specified GUID to the database named "ContentDB2".

## PARAMETERS

### -Identity
Specifies the identity of the site collection to be moved.
For example, http://servername/sites/sitename.

```yaml
Type: SPDeletedSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DestinationDatabase
Specifies the content database that the site collection should be moved to.
For example, ContentDB2.

```yaml
Type: SPContentDatabasePipeBind
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

### -ContentDatabase
Specifies the SQL Server content database where the site collection data will be stored.
If no content database is specified, the content database with the greatest unused site collection capacity and whose database status is ready will be used.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RbsProviderMapping
Used to move a Remote BLOB Storage (RBS)-enabled site collection from one RBS-enabled content database to another RBS-enabled content database without moving the underlying Binary Large Object (BLOB) content.
If the content database has more than one RBS provider associated with it, you must specify all providers.
The same providers must be enabled on the target content database and the source content database.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL, GUID, or name of the Web application from which to list sites.

The type must be a valid URL in the form http://server_name; a valid GUID, for example, 12345678-90ab-cdef-1234-567890bcdefgh; or the Web application name, for example, WebApplication1212.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

