---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Restore-SPSite
schema: 2.0.0
---

# Restore-SPSite

## SYNOPSIS
Restores a site collection.


## SYNTAX

### DatabaseFromPipebind
```
Restore-SPSite [-Identity] <String> -Path <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-ContentDatabase <SPContentDatabasePipeBind>] [-Force] [-GradualDelete] [-HostHeaderWebApplication <String>]
 [-WhatIf] [-PreserveSiteID] [<CommonParameters>]
```

### DatabaseParameter
```
Restore-SPSite [-Identity] <String> -Path <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DatabaseName <String>] [-DatabaseServer <String>] [-Force] [-GradualDelete]
 [-HostHeaderWebApplication <String>] [-WhatIf] [-PreserveSiteID] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Restore-SPSite` cmdlet performs a restoration of the site collection to a location specified by the Identity parameter.
A content database may only contain one copy of a site collection.
If a site collection is backed up and restored to a different URL location within the same Web application, an additional content database must be available to hold the restored copy of the site collection.


## EXAMPLES

### ----------------------EXAMPLE 1----------------------
```
C:\PS>Restore-SPSite http://server_name/sites/site_name -Path C:\Backup\site_name.bak
```

This example restores a site collection from the backup file C:\Backup\site_name.bak to the site collection URL http://server_name/sites/site_name.


### ----------------------EXAMPLE 2----------------------
```
C:\PS>Restore-SPSite http://server_name/sites/site_name -Path C:\Backup\site_name.bak -Force -DatabaseServer SQLBE1 -DatabaseName SQLDB1
```

This example restores a site collection backup from the backup file C:\Backup\site_name.bak, but overwrites the existing site collection at http://server_name/sites/site_name while specifying that the site collection must be stored in a specific content database.


### ----------------------EXAMPLE 3----------------------
```
C:\PS>Restore-SPSite http://www.example.com -Path \\file_server\share\site_name.bak -HostHeaderWebApplication http://server_name
```

This example restores a site collection backup from the backup file \\\\file_server\share\site_name.bak to the host-named site collection http://www.example.com on the Web application http://server_name.


## PARAMETERS

### -Identity
Specifies the URL location to which the site collection is restored.

A site collection does not have to already exist at the URL location to perform a restore.
However, you must specify a valid URL location that a site collection can be created.
If a site collection already exists at the specified URL location, you must specify the Force parameter to overwrite it.

The type must be a valid URL, in the form http://server_name/sites/site_name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies a valid path to the location of the backup.
For example, C:\Backup\site_name.bak.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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

### -ContentDatabase
Specifies the SQL Server content database where the site collection data will be stored. 
If no content database is specified, the content database with the greatest unused site collection capacity and whose database status is ready will be used.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: DatabaseFromPipebind
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseName
Specifies the SQL Server content database where the site collection data will be stored.
If no content database is specified, the content database with the greatest unused site collection capacity and whose database status is ready will be used.

The type must be a valid database name, in the form SQLDB1.

```yaml
Type: String
Parameter Sets: DatabaseParameter
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the name of the SQL Server containing the content database specified by the DatabaseName parameter.

The type must be a valid database server name, in the form SQLBE1 and needs to be used in conjunction with the DatabaseName parameter.

```yaml
Type: String
Parameter Sets: DatabaseParameter
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specifies that the existing site collection at the URL location is to be overwritten by this restoration.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GradualDelete
Specifies that the site collection being overwritten with the Force parameter should be gradually deleted over time by a timer job instead of all at once, which reduces its impact on SharePoint Products and SQL Server performance.
This option is recommended for large site collections.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostHeaderWebApplication
A valid URL assigned to the Web application by using alternate access mapping, such as http://server_name

Restores a site collection as a host-named site collection instead of a path-based site collection.
When the HostHeaderWebApplication parameter is present, the value of the Identity parameter is the URL of the host-named site collection and the value of the HostHeaderWebApplication parameter is the URL of the Web application that will hold the host-named site collection.

```yaml
Type: String
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

### -PreserveSiteID
{{Fill PreserveSiteID Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
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
