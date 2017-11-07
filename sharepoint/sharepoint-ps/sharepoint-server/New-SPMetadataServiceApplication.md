---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPMetadataServiceApplication

## SYNOPSIS
Creates a new managed metadata service application.


## SYNTAX

### NoQuota
```
New-SPMetadataServiceApplication -Name <String> [-AdministratorAccount <String>]
 -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-CacheTimeCheckInterval <Int32>] [-Confirm] [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>]
 [-DatabaseServer <String>] [-FailoverDatabaseServer <String>] [-FullAccessAccount <String>] [-HubUri <String>]
 [-MaxChannelCache <Int32>] [-PartitionMode] [-ReadAccessAccount <String>] [-RestrictedAccount <String>]
 [-SyndicationErrorReportEnabled] [-WhatIf] [-DisablePartitionQuota] [-DeferUpgradeActions]
 [<CommonParameters>]
```

### Quota
```
New-SPMetadataServiceApplication -Name <String> [-AdministratorAccount <String>]
 -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-CacheTimeCheckInterval <Int32>] [-Confirm] [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>]
 [-DatabaseServer <String>] [-FailoverDatabaseServer <String>] [-FullAccessAccount <String>] [-HubUri <String>]
 [-MaxChannelCache <Int32>] [-PartitionMode] [-ReadAccessAccount <String>] [-RestrictedAccount <String>]
 [-SyndicationErrorReportEnabled] [-WhatIf] -GroupsPerPartition <Int32> -LabelsPerPartition <Int32>
 -PropertiesPerPartition <Int32> -TermSetsPerPartition <Int32> -TermsPerPartition <Int32>
 [-DeferUpgradeActions] [<CommonParameters>]
```

## DESCRIPTION
Use the `New-SPMetadataServiceApplication` cmdlet to create a new managed metadata service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------------EXAMPLE 1-------------
```
C:\PS>New-SPMetadataServiceApplication -Name "MetadataServiceApp1" -ApplicationPool "AppPool1" -DatabaseName "MetadataDB1"
```

This example creates a new managed metadata service application.


### -------------------EXAMPLE 2-------------
```
C:\PS>New-SPMetadataServiceApplication -Name "MetadataServiceApp2" -ApplicationPool "AppPool1" -DatabaseName "MetadataDB2" -HubUri "http://sitename" -SyndicationErrorReportEnabled
```

This example creates a new managed metadata service application and specifies a content type hub to be used for syndication.
It also enables error reporting during syndication.


### -------------------EXAMPLE 3-------------
```
C:\PS>New-SPMetadataServiceApplication -Name "MetadataServiceApp3" -ApplicationPool "AppPool1" -DatabaseName "MetadataDB3" -PartitionMode
```

This example creates a new managed metadata service application that is partitioned, for use by sites in a subscription.


## PARAMETERS

### -Name
Specifies the name of the service application to create.
The name can contain a maximum of 128 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdministratorAccount
A comma-separated list of user accounts or service accounts in the format \<domain\>\\\<account\> that may create and run the service application.
The accounts must already exist.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies an existing IIS application pool in which to run the new managed metadata service application.

The value must be a GUID that is the identity of an SPServiceApplicationPool object; the name of an existing application pool, or an instance of an SPServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CacheTimeCheckInterval
Specifies an interval, in seconds, that a front-end Web Server should wait before asking the application server for changes.
This value is set per timer job, client application, or Web application.

The mininum value is 1, and there is no maximum value.
The default value is 10.

```yaml
Type: Int32
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the PSCredential object that contains the user name and password to be used for database SQL authentication.

If SQL authentication is to be used, either DatabaseCredentials must be specified or both the DatabaseUserName and DatabasePassword parameters must be set.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the name of the database to create for the new managed metadata service application.

The type must be a valid name of a SQL Server database; for example MeatadataDB1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the name of the host server for the database specified in DatabaseName.

The type must be a valid name of a SQL Server database; for example SqlServerHost1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverDatabaseServer
Specifies the name of the host server for the failover database server.

The type must be a valid SQL Server host name; for example, SQLServerHost1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullAccessAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given read/write permission to the managed metadata service's term store and content type gallery.
The accounts must already exist.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HubUri
Specifies the fully qualified URL of the site collection that contains the content type gallery that the service will provide access to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxChannelCache
Specifies the maximum number of Windows Communication Foundation (WCF) channels that a front-end Web server should hold open to the application server.
This value is set per timer job, client application, or Web application.

The minimum value is 0, and there is no maximum value.
The default value is 4.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartitionMode
Specifies that the service application restrict data by subscription.

Note This property cannot be changed after the service application has been created.

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

### -ReadAccessAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given read-only permission to the managed metadata service's term store and content type gallery.
The accounts must already exist.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictedAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given permission to read the managed metadata service's term store and content type gallery; and permission to write to open term sets and local term sets and to create new enterprise keywords. 
The accounts must already exist.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyndicationErrorReportEnabled
Enables reporting of errors when content types are imported.

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

### -DisablePartitionQuota
{{Fill DisablePartitionQuota Description}}

```yaml
Type: SwitchParameter
Parameter Sets: NoQuota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupsPerPartition
{{Fill GroupsPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: Quota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelsPerPartition
{{Fill LabelsPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: Quota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertiesPerPartition
{{Fill PropertiesPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: Quota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TermSetsPerPartition
{{Fill TermSetsPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: Quota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TermsPerPartition
{{Fill TermsPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: Quota
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeferUpgradeActions
{{Fill DeferUpgradeActions Description}}

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
