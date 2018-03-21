---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Mount-SPContentDatabase
schema: 2.0.0
---

# Mount-SPContentDatabase

## SYNOPSIS

Attaches an existing content database to the farm.



## SYNTAX

```
Mount-SPContentDatabase [-Name] <String> [-WebApplication] <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-AssignNewDatabaseId] [-ChangeSyncKnowledge] [-Confirm]
 [-ClearChangeLog] [-DatabaseCredentials <PSCredential>] [-DatabaseServer <String>] [-MaxSiteCount <Int32>]
 [-NoB2BSiteUpgrade] [-SkipIntegrityChecks] [-WarningSiteCount <Int32>] [-WhatIf]
 [-DatabaseAccessCredentials <PSCredential>] [-DatabaseFailoverServer <String>] [-SkipSiteUpgrade]
 [-UseLatestSchema] [<CommonParameters>]
```

## DESCRIPTION
The Mount-SPContentDatabase cmdlet attaches an existing content database to the farm.
If the database being mounted requires an upgrade, this cmdlet will cause the database to be upgraded.

The default behavior of this cmdlet causes an upgrade of the schema of the database and initiates upgraded builds for all site collections within the specified content database if required.
To prevent initiation of upgraded builds of site collections, use the NoB2BSiteUpgrade parameter.
This cmdlet does not trigger version-to-version upgrade of any site collections.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------EXAMPLE 1--------------------- 
```
C:\PS>Mount-SPContentDatabase "MyDatabase" -DatabaseServer "MyServer" -WebApplication http://sitename
```

This example mounts an existing database to the sitename web application.
If upgrades are required, it triggers database schema upgrade and then performs only build-to-build upgrade actions on existing site collections if required.
This operation does not changed the CompatibilityLevel for existing site collections in this database.

### -----------------EXAMPLE 2--------------------- 
```
C:\PS>Mount-SPContentDatabase "MyDatabase" -DatabaseServer "MyServer" -WebApplication http://sitename -NoB2BSiteUpgrade
```

This example mounts an existing database to the sitename web application but it prevents any site upgrades from occurring.
If upgrades are required, it triggers database schema upgrades only and no build-to-build upgrade actions are performed on any site collections.
This operation does not change the CompatibilityLevel for existing site collections in this database.

## PARAMETERS

### -Name
Specifies the existing content database to attach to the farm.

The type must be a valid name of a SharePoint content database; for example, SPContentDB1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Attaches the content database to the specified SharePoint web application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignNewDatabaseId
Creates a new database ID automatically when the content database is attached.

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

### -ChangeSyncKnowledge
Database attach will cause all Groove sync client to re-synchronize their content.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -ClearChangeLog
Clears any pending changes from the change log in the content database.

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

### -DatabaseCredentials
Specifies the PSCredential object that contains the user name and password to be used for database SQL Authentication.

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

### -DatabaseServer
Specifies the name of the host server for the content database specified in the Name parameter.

The type must be a valid SQL Server host name; for example, SQLServerHost1.

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

### -MaxSiteCount
Specifies the maximum number of web sites that can use the content database.

The type must be a positive integer.

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

### -UpdateUserExperience
Determines whether the content databases should upgrade to the latest user interface. By default, the user interface will not change during upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -NoB2BSiteUpgrade
Specifies not to upgrade all child objects when performing a build-to-build upgrade.
This parameter has no effect when a version-to-version upgrade is specified.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipIntegrityChecks
Specifies the upgrade process not to run the internal integrity checks such as missing templates, and orphan detection as part of the upgrade process.
        
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

### -WarningSiteCount
Specifies the number of sites that can be created before a warning event is generated and the owner of the site collection is notified.

The type must be a positive integer.

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

### -DatabaseAccessCredentials
Specifies the credential that belong to SPDataAccess role.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseFailoverServer
Specifies the name of the database server to be mirrored.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipSiteUpgrade
Specifies to not upgrade all site objects when performing upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: NoB2BSiteUpgrade
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLatestSchema
Specifies to use the latest schema. In an on-premises environment, this parameter has no effect.

There are two values $True and $False.

The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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

