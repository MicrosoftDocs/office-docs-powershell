---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPMetadataServiceApplication

## SYNOPSIS
Sets the properties of a managed metadata service application.

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Set-SPMetadataServiceApplication [-Identity] <SPMetadataServiceCmdletPipeBind> [-AdministratorAccount <String>]
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-CacheTimeCheckInterval <Int32>] [-Confirm] [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>]
 [-DatabaseServer <String>] [-DoNotUnpublishAllPackages] [-FailoverDatabaseServer <String>]
 [-FullAccessAccount <String>] [-Name <String>] [-RestrictedAccount <String>] [-SyndicationErrorReportEnabled]
 [-HubUri <String>] [-MaxChannelCache <Int32>] [-ReadAccessAccount <String>] [-WhatIf] [-DisablePartitionQuota]
```

### UNNAMED_PARAMETER_SET_2
```
Set-SPMetadataServiceApplication [-Identity] <SPMetadataServiceCmdletPipeBind> [-AdministratorAccount <String>]
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-CacheTimeCheckInterval <Int32>] [-Confirm] [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>]
 [-DatabaseServer <String>] [-DoNotUnpublishAllPackages] [-FailoverDatabaseServer <String>]
 [-FullAccessAccount <String>] [-Name <String>] [-RestrictedAccount <String>] [-SyndicationErrorReportEnabled]
 [-HubUri <String>] [-MaxChannelCache <Int32>] [-ReadAccessAccount <String>] [-WhatIf]
 -GroupsPerPartition <Int32> -LabelsPerPartition <Int32> -PropertiesPerPartition <Int32>
 -TermSetsPerPartition <Int32> -TermsPerPartition <Int32>
```

## DESCRIPTION
Use the Set-SPMetadataServiceApplication cmdlet to set the properties of a managed metadata service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPMetadataServiceApplication -Identity "MetadataServiceApp1" -HubUri "http://sitename" -SyndicationErrorReportEnabled
```

This example adds a content type hub to an existing managed metadata service application.
It also enables error reporting when content types are imported.

### --------------------EXAMPLE 1--------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPMetadataServiceApplication -Identity "MetadataServiceApp1" -HubUri "http://sitename" -SyndicationErrorReportEnabled
```

This example adds a content type hub to an existing managed metadata service application.
It also enables error reporting when content types are imported.

### --------------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPMetadataServiceApplication -Identity "MetadataServiceApp1" -AdministratorAccount "contoso\username1" -FullAccessAccount "contoso\AppPoolAccount1,contoso\AppPoolAccount2" -RestrictedAccount "contoso\AppPoolAccount3,contoso\AppPoolAccount4,contoso\AppPoolAccount5" -ReadAccessAccount "contoso\AppPoolAccount6"
```

This example sets permissions on an existing managed metadata service application.

If you use Windows PowerShell to set any of the account values, you should set all of them.
The Set-SPMetadataServiceApplication cmdlet first erases all accounts, then adds the accounts that you specified.

### --------------------EXAMPLE 2--------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPMetadataServiceApplication -Identity "MetadataServiceApp1" -AdministratorAccount "contoso\username1" -FullAccessAccount "contoso\AppPoolAccount1,contoso\AppPoolAccount2" -RestrictedAccount "contoso\AppPoolAccount3,contoso\AppPoolAccount4,contoso\AppPoolAccount5" -ReadAccessAccount "contoso\AppPoolAccount6"
```

This example sets permissions on an existing managed metadata service application.

If you use Windows PowerShell to set any of the account values, you should set all of them.
The Set-SPMetadataServiceApplication cmdlet first erases all accounts, then adds the accounts that you specified.

## PARAMETERS

### -Identity
Specifies the managed metadata service application to update.

The type must be a valid GUID or the name of a valid managed metadata  service application.

```yaml
Type: SPMetadataServiceCmdletPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AdministratorAccount
A comma-separated list of user accounts or service accounts in the format \<domain\>\\\<account\> that may create and run the service application.
The accounts must already exist.

If a value is set by using this parameter, any existing values for the FullAccessAccount, ReadAccessAccount, and RestrictedAccount parameters are removed.
Consider setting all four parameters at the same time.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies an existing IIS application pool in which to run the Web service for the managed metadata service application.

The value must be a GUID that is the identity of an SPServiceApplicationPool object; the name of an existing application pool; or an instance of a valid SPServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
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

### -CacheTimeCheckInterval
Specifies the interval, in seconds, that a front-end Web server should wait before asking the application server for changes.
This value is set per timer job, client application, or Web application.

The mininum value is 1, and there is no maximum value.
The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -DatabaseCredentials
Specifies the PSCredential object that contains the user name and password to be used for database SQL authentication.

If SQL authentication is to be used, either the DatabaseCredentials parameter must be specified or both the DatabaseUserName and DatabasePassword parameters must be set.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the name of the database that contains the term store for the managed metadata service application.

The type must be a valid name of a SQL Server database; for example MeatadataDB1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotUnpublishAllPackages
If this flag is set, the packages will not be unpublished.
If the HubUri parameter is changed, all content type packages will be unpublished by default.

If the HubUri parameter is not changed, this flag has no effect.

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

### -FailoverDatabaseServer
Specifies the name of the host server for the failover database server.

The type must be a valid SQL Server host name; for example, SQLServerHost1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullAccessAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given read/write permission to the managed metadata service's term store and content type gallery.
The accounts must already exist.

If a value is set by using this parameter, any existing values for the AdministratorAccount, ReadAccessAccount, and RestrictedAccount parameters are removed.
Consider setting all four parameters at the same time.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the new name of the service application.
The name can contain a maximum of 128 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictedAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given permission to read the managed metadata service's term store and content type gallery, and permission to write to open term sets and local term sets and to create new enterprise keywords.
The accounts must already exist.

If a value is set by using this parameter, any previous values for the FullAccessAccount, ReadAccessAccount, and AdministratorAccount parameters are removed.
Consider setting all four parameters at the same time.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HubUri
Specifies the fully qualified URL of the site collection that contains the content type gallery that the service will provide access to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxChannelCache
Specifies the maximum number of Windows Communication Foundation (WCF) channels that a front-end Web server holds open to the application server.
This value is set per timer job, client application, or Web application.

The minimum value is 0, and there is no maximum value.
The default value is 4.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadAccessAccount
Specifies a comma-separated set of application pool accounts in the format \<domain\>\\\<account\> that will be given read-only permission to the managed metadata service's term store and content type gallery.
The accounts must already exist.

If a value is set by using this parameter, any previous values for the FullAccessAccount, RestrictedAccount, and AdministratorAccount parameters are removed.
Consider setting all four parameters at the same time.

```yaml
Type: String
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

### -DisablePartitionQuota
{{Fill DisablePartitionQuota Description}}

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupsPerPartition
{{Fill GroupsPerPartition Description}}

```yaml
Type: Int32
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

