---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Backup-SPConfigurationDatabase

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Backup-SPConfigurationDatabase -Directory <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>] [-DatabaseServer <String>] [-Item <String>]
```

### UNNAMED_PARAMETER_SET_2
```
Backup-SPConfigurationDatabase [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>] [-DatabaseServer <String>] [-Item <String>]
 [-ShowTree]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Backup-SPConfigurationDatabase cmdlet performs a configuration-only backup of the current farm or a configuration-only backup of a separate configuration database which is not attached to the current farm.
If you wish to perform a configuration-only backup of the current farm, there is no need to specify the DatabaseServer and DatabaseName parameters.
However, using the Backup-SPFarm cmdlet with the ConfigurationOnly parameter is recommended for such a scenario.

An example of a configuration backup is an administrator creates a farm configuration template which then can be applied to other SharePoint farms by performing a restore using the Restore-SPFarm cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE 1-------------------- (SharePoint Server 2013)
```
C:\PS>Backup-SPConfigurationDatabase -DatabaseName SharePoint_Config -DatabaseServer SqlServer1 -Directory \\server\share\Backup -ShowTree
```

This example displays components that are available for inclusion in a configuration-only backup.

### -------------------EXAMPLE 1-------------------- (SharePoint Server 2016)
```
C:\PS>Backup-SPConfigurationDatabase -DatabaseName SharePoint_Config -DatabaseServer SqlServer1 -Directory \\server\share\Backup -ShowTree
```

This example displays components that are available for inclusion in a configuration-only backup.

### -------------------EXAMPLE 2-------------------- (SharePoint Server 2013)
```
C:\PS>Backup-SPConfigurationDatabase -DatabaseName SharePoint_Config -DatabaseServer SqlServer1 -Directory \\server\share\Backup -Verbose
```

This example performs a configuration-only backup with verbose output.

### -------------------EXAMPLE 2-------------------- (SharePoint Server 2016)
```
C:\PS>Backup-SPConfigurationDatabase -DatabaseName SharePoint_Config -DatabaseServer SqlServer1 -Directory \\server\share\Backup -Verbose
```

This example performs a configuration-only backup with verbose output.

## PARAMETERS

### -Directory
Specifies the path where SharePoint 2010 Products stores the backup package it generates.
If you have a computer on which SQL Server 2008 and an instance of SharePoint 2010 Products are installed, you can use local drive paths.
This includes a basic installation.
However, if SQL Server 2008 and SharePoint 2010 Products are installed on multiple computers or if you have multiple servers running SharePoint 2010 Products, you must use Universal Naming Convention (UNC) share paths so that the SQL Server database and search components are written to the same location; for example, \\\\computer_name\volume\Backup).

Multiple backup packages can be stored in the same location.
This is the same path that you pass to the Directory parameter of the Restore-SPFarm cmdlet.

The type must be either of the valid paths:

- C:\folder_name
- \\\\server_name\folder_name

The spbr* folders are automatically created.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
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

### -DatabaseCredentials
Specifies the ID and password that corresponds to the administrator user name for the SQL Server database.

This parameter should only be specified if SQL authentication is used to connect to the database.
If Windows authentication is used to connect to the database, then this parameter should not be specified.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DatabaseName
Specifies the configuration database name.

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
Specifies the SQL database server that contains the configuration database.
The default value is the local computer name.

The type must be a valid database server; for example, DS.

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

### -Item
Indicates the part of the farm to back up.
You may use the full farm path notation as displayed by the ShowTree parameter or the name of the target component in the path if the component has a unique name.
If multiple items match the name, the full path must be provided.
Surround the item or path in quotation marks if it contains a space.

If the Item parameter is not specified, the entire farm configuration is backed up.

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

### -ShowTree
Displays which objects in the farm will be backed up based on the other parameters passed to the backup cmdlet, namely the Item parameter.
Items that will be excluded from the backup based on the other parameters passed to the Backup-SPConfigurationDatabase cmdlet will be preceded with an asterisk character (*).
Items that cannot be backed up will be enclosed in square brackets (\[ \]).
A backup will not be performed if the ShowTree parameter is present.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

