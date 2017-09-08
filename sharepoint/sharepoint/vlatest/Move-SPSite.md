---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/5bff925f-3845-434e-be9f-3ba50673be28(Office.15).aspx
schema: 2.0.0
---

# Move-SPSite

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Move-SPSite [-Identity] <SPSitePipeBind> -DestinationDatabase <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-RbsProviderMapping <Hashtable>] [-WhatIf]
 [-CopyEvents <Boolean>]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

The Move-SPSite cmdlet moves the data in the specified site collection from its current content database to the content database specified by the DestinationDatabase parameter.
A no-access lock is applied to the site collection to prevent users from altering data within the site collection while the move is taking place.
Once the move is complete, the site collection is returned to its original lock state. 
The destination content database specified must already exist, must be attached to the same SQL Server as the site collection's current content database, and must be attached to the site collection's current Web application.

After you run the Move-SPSite cmdlet, run the IISReset command to update changes to IIS.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).
Below Content Applies To: SharePoint Server 2016

The Move-SPSite cmdlet moves the data in the specified site collection from its current content database to the content database specified by the DestinationDatabase parameter.
A no-access lock is applied to the site collection to prevent users from altering data within the site collection while the move is taking place.
Once the move is complete, the site collection is returned to its original lock state. 
The destination content database specified must already exist, must be attached to the same SQL Server as the site collection's current content database, and must be attached to the site collection's current Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Move-SPSite http://servername/sites/sitename -DestinationDatabase ContentDb2
```

This example moves the site collection http://servername/sites/sitename to the content database ContentDb2.

### ---------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Move-SPSite http://servername/sites/sitename -DestinationDatabase ContentDb2
```

This example moves the site collection http://servername/sites/sitename to the content database ContentDb2.

### ---------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite -ContentDatabase ContentDb1 | Move-SPSite -DestinationDatabase ContentDb2
```

This example moves all site collections in ContentDb1 to ContentDb2.

### ---------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite -ContentDatabase ContentDb1 | Move-SPSite -DestinationDatabase ContentDb2
```

This example moves all site collections in ContentDb1 to ContentDb2.

### ---------------------EXAMPLE 3----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSiteAdministration | where { $_.OwnerLoginName -eq "DOMAIN\username" } | Move-SPSite -DestinationDatabase ContentDb2
```

This example moves all site collections where DOMAIN\username is the site collection owner to ContentDb2.
The Get-SPSiteAdministration cmdlet is used instead of the Get-SPSite cmdlet because you must have permission within the site collection to access the properties of the SPSite object.
You can access the properties of the SPSiteAdministration object as a SharePoint farm administrator.

### ---------------------EXAMPLE 3----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSiteAdministration | where { $_.OwnerLoginName -eq "DOMAIN\username" } | Move-SPSite -DestinationDatabase ContentDb2
```

This example moves all site collections where DOMAIN\username is the site collection owner to ContentDb2.
The Get-SPSiteAdministration cmdlet is used instead of the Get-SPSite cmdlet because you must have permission within the site collection to access the properties of the SPSite object.
You can access the properties of the SPSiteAdministration object as a SharePoint farm administrator.

### ---------------------EXAMPLE 4----------------------- (SharePoint Server 2013)
```
C:\PS>Move-SPSite -Identity siteUrl -DestinationDatabase databaseName -RbsProviderMapping       @{"sourceProvider1"="targetProvider1", "sourceProvider2"="targetProvider2"}
```

This example moves an RBS-enabled site collection from one RBS-enabled content database to another RBS-enabled content database, sourceProvider1 is the source RBS provider and targetProvider1 is the target RBS provider.

### ---------------------EXAMPLE 4----------------------- (SharePoint Server 2016)
```
C:\PS>Move-SPSite -Identity siteUrl -DestinationDatabase databaseName -RbsProviderMapping
       @{"sourceProvider1"="targetProvider1", "sourceProvider2"="targetProvider2"}
```

This example moves an RBS-enabled site collection from one RBS-enabled content database to another RBS-enabled content database, sourceProvider1 is the source RBS provider and targetProvider1 is the target RBS provider.

## PARAMETERS

### -Identity
Specifies the identity of the site collection to be moved.
For example, http://servername/sites/sitename.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

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

### -RbsProviderMapping
This parameter was added in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

Used to move an RBS-enabled site collection from one RBS-enabled content database to another RBS-enabled content database without moving the underlying BLOB content.
If the content database has more than one RBS provider associated with it, you must specify all providers.
The same providers must be enabled on the target content database and the source content database.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyEvents
{{Fill CopyEvents Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

