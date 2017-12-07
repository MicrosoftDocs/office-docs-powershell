---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPEnterpriseSearchServiceApplication
schema: 2.0.0
---

# New-SPEnterpriseSearchServiceApplication

## SYNOPSIS
Adds a search service application to a farm.


## SYNTAX

```
New-SPEnterpriseSearchServiceApplication [[-Name] <String>]
 -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DatabaseName <String>] [-DatabasePassword <SecureString>] [-DatabaseServer <String>]
 [-DatabaseUsername <String>] [-Partitioned] [-WhatIf]
 [-AdminApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-CloudIndex <Boolean>]
 [-FailoverDatabaseServer <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used when the search functionality is first configured or when a new shared search application is added to a farm.
SPEnterpriseSearchServiceApplication represents a self-contained aggregation of indexed content and properties available for search and provides an anchor class for setting global search properties.
A farm can include multiple search service applications.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$appPool = New-SPServiceApplicationPool -name "SsaAppPool" -account contoso\adminUser
$ssa = New-SPEnterpriseSearchServiceApplication -Name "NewSSA" -ApplicationPool $appPool
$searchInstance = Get-SPEnterpriseSearchServiceInstance -Local
$ssa | get-SPEnterpriseSearchAdministrationComponent | set-SPEnterpriseSearchAdministrationComponent -SearchServiceInstance $searchInstance
$ssa | Get-SPEnterpriseSearchAdministrationComponent
```

This example creates a new search service application named NewSSA in a new application pool and initializes its administration component.
A search service application that is created in this manner will have active search topology, but no search components.


## PARAMETERS

### -Name
Specifies the names of the new search application.

The type must be a valid name of a search application, for example, SearchApp1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the IIS application pool to use for the new search application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL of a search application, in the form http://server_name; or an instance of a valid SPIisWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

### -DatabaseName
Specifies the name of the database to create for the new search application.

The type must be a valid name of a SQL Server database, for example, SearchAppDB1.

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

### -DatabasePassword
Specifies the password for the user ID that is used for accessing the search application database on SQL Server.

The type must be a valid password.

```yaml
Type: SecureString
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
Specifies the name of the host server for the database specified in DatabaseName.

The type must be a valid SQL Server host name, for example, SQLServerHost1.

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

### -DatabaseUsername
Specifies the user ID to use for accessing the search application SQL Server database.

The type must be a valid user name, for example, SearchUserName1.

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

### -Partitioned
Specifies that the search service application uses web-hosted mode.
web-hosted mode segregates results for a given hosted subscription.

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

### -AdminApplicationPool
{{Fill AdminApplicationPool Description}}

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloudIndex
{{Fill CloudIndex Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverDatabaseServer
{{Fill FailoverDatabaseServer Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
