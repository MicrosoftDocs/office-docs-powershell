---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Restore-SPFarm
schema: 2.0.0
---

# Restore-SPFarm

## SYNOPSIS
Restores one or more items from a backup.


## SYNTAX

### DefaultSet
```
Restore-SPFarm -Directory <String> -RestoreMethod <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-BackupId <Guid>] [-ConfigurationOnly] [-Confirm] [-FarmCredentials <PSCredential>] [-Force] [-Item <String>]
 [-NewDatabaseServer <String>] [-Percentage <Int32>] [-RestoreThreads <Int32>] [-WhatIf] [<CommonParameters>]
```

### ShowTree
```
Restore-SPFarm -Directory <String> [-ShowTree] [-AssignmentCollection <SPAssignmentCollection>]
 [-BackupId <Guid>] [-ConfigurationOnly] [-Confirm] [-Item <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Restore-SPFarm` cmdlet restores one or more items from a backup such as an individual database, Web application, or the entire farm.
This cmdlet can also be used to apply a farm template to the entire farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------------EXAMPLE 1-----------------------
```
C:\PS>Restore-SPFarm -Directory \\file_server\share\Backup -BackupId 12345678-90ab-cdef-1234-567890abcdef -RestoreMethod new -ConfigurationOnly
```

This example restores the configuration settings from the backup package in the \\\\file_server\share\Backup directory to the farm.


### -------------------EXAMPLE 2-----------------------
```
C:\PS>Restore-SPFarm -ShowTree -Directory \\file_server\share\Backup -BackupId 12345678-90ab-cdef-1234-567890abcdef -Item "Microsoft SharePoint Foundation Web Application" -Verbose
```

This example show which components of the farm would be restored under the Microsoft SharePoint Foundation Web Application node, but does not actually restore them.


### -------------------EXAMPLE 3-----------------------
```
C:\PS>Restore-SPFarm -Directory C:\Backup -BackupId 12345678-90ab-cdef-1234-567890abcdef  -RestoreMethod overwrite -RestoreThreads 10 -Force
```

This example restores a farm by using 10 threads and suppresses the overwrite warning.


## PARAMETERS

### -Directory
Specifies the path where SharePoint Products stored the backup package.
If you have a computer on which SQL Server and an instance of SharePoint Products are installed, you can use local drive paths.
This includes a basic installation.
However, if SQL Server and SharePoint Products are installed on multiple computers, you must use Universal Naming Convention (UNC) share paths so that the SQL Server and SharePoint Products can read from the same location (for example, \\\\computer_name \volume\Backup).

The type must be either of the valid paths:

- C:\folder_name
- \\\\server_name\folder_name

The spbr* folders are created automatically.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestoreMethod
Specifies the method of restore to perform.

The valid values are:

- New; Specifies a new location to restore the content and is intended to be used when restoring to a different farm. Additional prompts will be presented to specify the new settings.
- Overwrite; Restores content and settings to their original locations and is intended to be used when restoring to the same farm it was backed up from. If the Overwrite parameter is used, a confirmation prompt is displayed. If you want the confirmation prompt suppressed, use the Force parameter.

```yaml
Type: String
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowTree
Displays which objects in the farm will be restored based on the other parameters passed to the `Restore-SPFarm` cmdlet namely the Item and ConfigurationOnly parameters.
Items that will be excluded from the restore based on the other parameters passed to the `Restore-SPFarm` cmdlet will be preceded with an asterisk (*).
Items that cannot be restored will be enclosed in square brackets (\[ \]).
A restore operation will not be performed if the ShowTree parameter is present.

```yaml
Type: SwitchParameter
Parameter Sets: ShowTree
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

### -BackupId
Specifies the GUID of the backup package that is to be restored.
Each backup package has a unique GUID associated with it.
The GUID can be seen by using the `Get-SPBackupHistory` cmdlet to view the backup history.
If this parameter is not specified, the most recent backup package in the path that is specified with the Directory parameter is used.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890abcdef.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ConfigurationOnly
Specifies settings only (no data) will be restored from the backup package and applied to objects on the destination farm.

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FarmCredentials
Specifies the credentials that will be used for all components being restored.
For example, the application pool credentials for Web applications being restored.
If an application pool being restored already exists in the farm, the credentials specified by the FarmCredentials parameter is ignored when restoring that application pool.

```yaml
Type: PSCredential
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the prompt warning that you will overwrite components when you perform an overwrite restore operation.

```yaml
Type: SwitchParameter
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Item
Indicates the part of the backup package to be restored.
You can use the full farm path notation as displayed by the ShowTree parameter or the name of the target component in the path if it has a unique name.
If multiple items match the name, the full path must be provided.
Surround the item or path in double quotation marks if it contains a space.
If this parameter is absent, the entire backup package is restored.

The type must be a valid item, such as:

Farm\Microsoft SharePoint Foundation Web Application\SharePoint - 80

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

### -NewDatabaseServer
Specifies a valid SQL Database Server name.
If specified, will be used as a default Database Server name for all databases within the restore operation.

This parameter is only valid when restoring as new. 
It is not valid for overwrite restores.

```yaml
Type: String
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Percentage
Requests that progress updates about the restore operation be displayed in increments of that percentage.
For example, a value of 5 displays restore progress updates at every 5 percent completed, and a value of 10 displays restore progress updates at every 10 percent completed.

Note: Progress will only be displayed in the output if the -Verbose parameter is specified. 
Otherwise, you may see the progress in the restore log file.

This percentage is not precise and the actual progress updates might be lower or higher than requested.

For a very large database, 1 is the recommended value.

The type must be an integer value between 1 and 100.

The default value is 5.

```yaml
Type: Int32
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestoreThreads
The number of threads that should be used during the restore.

The fewer the restore threads, the easier it is to understand the restore log. 
However, the more restore threads, the more components can be restored in parallel, potentially resulting in a faster restore.

The valid range is between 1 and 10.
The default value is 3.

```yaml
Type: Int32
Parameter Sets: DefaultSet
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
