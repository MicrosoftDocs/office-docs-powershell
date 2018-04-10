---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPProfileServiceApplication
schema: 2.0.0
---

# New-SPProfileServiceApplication

## SYNOPSIS
Adds a User Profile Service Application to a farm.


## SYNTAX

### Default
```
New-SPProfileServiceApplication -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-Name <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-MySiteHostLocation <SPSitePipeBind>]
 [-PartitionMode] [-ProfileDBCredentials <PSCredential>] [-ProfileDBName <String>] [-ProfileDBServer <String>]
 [-ProfileSyncDBCredentials <PSCredential>] [-ProfileDBFailoverServer <String>] [-ProfileSyncDBName <String>]
 [-ProfileSyncDBServer <String>] [-ProfileSyncDBFailoverServer <String>] [-SocialDBCredentials <PSCredential>]
 [-SocialDBName <String>] [-SocialDBServer <String>] [-SocialDBFailoverServer <String>] [-WhatIf]
 [-DeferUpgradeActions] [<CommonParameters>]
```

### MySiteSettings
```
New-SPProfileServiceApplication -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-Name <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] -MySiteHostLocation <SPSitePipeBind>
 [-MySiteManagedPath <SPPrefixPipeBind>] [-PartitionMode] [-ProfileDBCredentials <PSCredential>]
 [-ProfileDBName <String>] [-ProfileDBServer <String>] [-ProfileSyncDBCredentials <PSCredential>]
 [-ProfileDBFailoverServer <String>] [-ProfileSyncDBName <String>] [-ProfileSyncDBServer <String>]
 [-ProfileSyncDBFailoverServer <String>] [-SiteNamingConflictResolution <String>]
 [-SocialDBCredentials <PSCredential>] [-SocialDBName <String>] [-SocialDBServer <String>]
 [-SocialDBFailoverServer <String>] [-WhatIf] [-DeferUpgradeActions] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.

You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `New-SPProfileServiceApplication` cmdlet adds and creates a new profile service application, or creates an instance of a profile service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>New-SPProfileServiceApplication -Name 'User Profile Service Application' -ApplicationPool 'SharePoint Web Services Default' -ProfileDBName Profile -SocialDBName Social -ProfileSyncDBname Sync
```

This example creates a new User Profile Service application.


## PARAMETERS

### -ApplicationPool
Specifies the existing IIS application pool in which to run the Web service for the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the display name for the new User Profile Service application.
The name must be a unique name of a User Profile Service application in this farm.
The name can be a maximum of 64 characters.

The type must be a valid name of a service application; for example, UserProfileSvcApp1.

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

### -MySiteHostLocation
Specifies the site collection where the My Site will be created.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSitePipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MySiteManagedPath
Specifies the managed path where personal sites will be created.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: SPPrefixPipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PartitionMode
Specifies that the service application restrict data by site group.
After the PartitionMode parameter is set and the service application is created, it cannot be changed.

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

### -ProfileDBCredentials
Specifies the set of security credentials, such as a user name and a password, that is used to connect to the User Profile database that this cmdlet creates.

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

### -ProfileDBName
Specifies the name of the database where the User Profile database is created.

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

### -ProfileDBServer
Specifies the database where the User Profile database will be created.

The type must be a valid name of a SQL Server database; for example, ProfileAppDB1.

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

### -ProfileSyncDBCredentials
Specifies the set of security credentials, such as a user name and a password, that will be used to connect to the Profile Sync database that is specified in the ProfileSyncDBName parameter.

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

### -ProfileDBFailoverServer
Associates a content database with a specific failover server that is used in conjunction with SQL Server database mirroring.
The server name is the required value.

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

### -ProfileSyncDBName
Specifies the database where the Profile Sync database will be created.

The type must be a valid name of a SQL Server database; for example, ProfileSyncAppDB1.

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

### -ProfileSyncDBServer
Specifies the database server that will host the Profile Sync database that is specified in the ProfileSyncDBName parameter.

The type must be a valid name of a SQL Server host; for example, SQLServerProfileSyncHost1.

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

### -ProfileSyncDBFailoverServer
Associates a Profile Sync database with a specific failover server that is used in conjunction with SQL Server database mirroring.
The server name is the required value.

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

### -SiteNamingConflictResolution
Specifies the format to use to name personal sites.

Use one of the following integer values:

1   Personal site collections are to be based on user names without any conflict resolution.
For example, http://portal_site/location/username/

2   Personal site collections are to be based on user names with conflict resolution by using domain names.
For example, .../username/ or .../domain_username/

3   Personal site collections are to be named by using domain and user name always, to avoid any conflicts.
For example, http://portal_site/location/domain_username/

The default value is 1 (do not resolve conflicts).

```yaml
Type: String
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SocialDBCredentials
The set of security credentials, including a user name and a password, that is used to connect to the Social database that this cmdlet creates.

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

### -SocialDBName
Specifies the database where the Social database will be created.

The type must be a valid name of a SQL Server host; for example, SQLServerSocialHost1.

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

### -SocialDBServer
Specifies the database server that will host the Social database that is specified in SocialDBName.

The type must be a valid name of a SQL Server host; for example, SQLServerSocialHost1.

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

### -SocialDBFailoverServer
Associates a Social database with a specific failover server that is used in conjunction with SQL Server database mirroring.
The server name is the required value.

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

### -DeferUpgradeActions
Specifies if the upgrade process is to be deferred and manually completed.

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
