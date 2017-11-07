---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Restore-SPEnterpriseSearchServiceApplication

## SYNOPSIS
Restores third-party backup of a search application.


## SYNTAX

### Config
```
Restore-SPEnterpriseSearchServiceApplication [-Name] <String>
 -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>
 -AdminSearchServiceInstance <SearchServiceInstancePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] -DatabaseName <String> [-DatabasePassword <SecureString>] -DatabaseServer <String>
 [-DatabaseUsername <String>] [-FailoverDatabaseServer <String>] [-WhatIf] [<CommonParameters>]
```

### Full
```
Restore-SPEnterpriseSearchServiceApplication [-Name] <String>
 -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-KeepId] [-WhatIf] -TopologyFile <String> [-DeferUpgradeActions] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

This cmdlet is used by third parties to create a search application that uses existing data.

Some third parties back up the application data and have to restore the application later.
So, the data is restored and uses the `Restore-SPEnterpriseSearchServiceApplication` cmdlet to create a new search application that uses the restored data.

This cmdlet supports parameter sets.
The first set of parameters is for Application Configuration Attach mode and the second set of parameters is for Search Application Attach mode.

Application Configuration Attach mode only restores configuration data that is stored in the administration database.
However, Search Application Attach restores configuration, topology and all crawled data.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ----------------------EXAMPLE 1-----------------------
```
C:\PS>$searchInstance = Get-SPEnterpriseSearchServiceInstance -local
$applicationPool = New-SPServiceApplicationPool -Name "SearchServiceApplicationPool" -Account "domain\username"

C:\PS>Restore-SPEnterpriseSearchServiceApplication -Name "SearchServiceApplication" -ApplicationPool $applicationPool -AdminSearchServiceInstance $searchInstance -DatabaseName "SearchServiceApplication_Admindb" -DatabaseServer "SQLServer1"
```

This example uses Application Configuration Attach mode to restore configuration data.


### ----------------------EXAMPLE 2-----------------------
```
C:\PS>$applicationPool = New-SPServiceApplicationPool -Name "SearchServiceApplicationPool" -Account "domain\username"

C:\PS>Restore-SPEnterpriseSearchServiceApplication -Name "SearchServiceApplication" -ApplicationPool $applicationPool -TopologyFile "C:\TopologyFile.xml"
```

This example uses Search Application Attach mode to restore topology data in the file that is named topology.xml.


## PARAMETERS

### -Name
Specifies the new Search application name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the application pool for the query web service.

Specifies the application pool for the query web service.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminSearchServiceInstance
Specifies the search service instance to be used with the administration component.

```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: Config
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

### -DatabaseName
Specifies the name of the database to create for the restoring the search application.

The type must be a valid name of a SQL Server database, for example, RestoreDB1.

```yaml
Type: String
Parameter Sets: Config
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabasePassword
Specifies the name of the password for the database server on the SQL Server.

```yaml
Type: SecureString
Parameter Sets: Config
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

The type must be a valid SQL Server host name, for example, SQLServerHost1.

```yaml
Type: String
Parameter Sets: Config
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseUsername
Specifies the account name that is specified in the Database Server parameter.

```yaml
Type: String
Parameter Sets: Config
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverDatabaseServer
Use this parameter if you want the administration database to use a failover database server.

```yaml
Type: String
Parameter Sets: Config
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepId
Specifies if the search service application ID's from the topology .xml file should be used for the restored search service application.

```yaml
Type: SwitchParameter
Parameter Sets: Full
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

### -TopologyFile
Specifies the path of the .XML file that contains the application topology information.

```yaml
Type: String
Parameter Sets: Full
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
Parameter Sets: Full
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
