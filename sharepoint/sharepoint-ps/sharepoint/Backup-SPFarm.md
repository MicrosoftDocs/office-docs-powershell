---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Backup-SPFarm

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Creates a backup of an individual database, Web application, or the entire farm.



## SYNTAX

### DefaultSet
```
Backup-SPFarm -BackupMethod <String> -Directory <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-BackupThreads <Int32>] [-ConfigurationOnly] [-Force] [-Item <String>] [-Percentage <Int32>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### ShowTree
```
Backup-SPFarm [-ShowTree] [-AssignmentCollection <SPAssignmentCollection>] [-ConfigurationOnly]
 [-Item <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Backup-SPFarm cmdlet creates a backup for the entire farm or individual components within the farm.
It can also be used to back up just the configuration settings of a farm to be used as a farm template for other SharePoint farms.
If you want to back up a single site collection, use the Backup-SPSite cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>Backup-SPFarm -Directory \\file_server\share\Backup -BackupMethod full -ConfigurationOnly
```

This example backs up the configuration settings of the farm to the \\\\file_server\share\Backup directory.

### --------------------EXAMPLE 1--------------------- (SharePoint Server 2016)
```
C:\PS>Backup-SPFarm -Directory \\file_server\share\Backup -BackupMethod full -ConfigurationOnly
```

This example backs up the configuration settings of the farm to the \\\\file_server\share\Backup directory.

### --------------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Backup-SPFarm -ShowTree -Item "Microsoft SharePoint Foundation Web Application" -Verbose
```

This example shows which components of the farm would be backed up under the "Microsoft SharePoint Foundation Web Application" node, but do not actually back them up.

### --------------------EXAMPLE 2--------------------- (SharePoint Server 2016)
```
C:\PS>Backup-SPFarm -ShowTree -Item "Microsoft SharePoint Foundation Web Application" -Verbose
```

This example shows which components of the farm would be backed up under the "Microsoft SharePoint Foundation Web Application" node, but do not actually back them up.

### --------------------EXAMPLE 3--------------------- (SharePoint Server 2013)
```
C:\PS>Backup-SPFarm -Directory C:\Backup -BackupMethod full -BackupThreads 10 -Force
```

This example performs a backup of a farm using 10 threads and forces the backup to be saved to the C:\Backup directory even though SharePoint estimates that it does not have sufficient space available.

### --------------------EXAMPLE 3--------------------- (SharePoint Server 2016)
```
C:\PS>Backup-SPFarm -Directory C:\Backup -BackupMethod full -BackupThreads 10 -Force
```

This example performs a backup of a farm using 10 threads and forces the backup to be saved to the C:\Backup directory even though SharePoint estimates that it does not have sufficient space available.

## PARAMETERS

### -BackupMethod
Specifies the type of backup file to be created.

If a backup is performed with the -ShowTree parameter, then the BackupMethod parameter is not used.

A full backup is a backup of all the selected data.
A differential backup is a backup of all the selected data that has changed since the last full backup.
If an item does not support differential backup, then a full backup is performed for that item instead.

The type must be either of the following:

- Full
- Differential

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
Displays which objects in the farm will be backed up based on the other parameters passed to the Backup-SPFarm cmdelt, namely the Item parameter.
Items that will be excluded from the backup based on the other parameters passed to the Backup-SPFarm cmdlet will be preceded with an asterisk character (*).
Items that cannot be backed up will be enclosed in square brackets (\[ \]).
A backup will not be performed if the ShowTree parameter is present.

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -BackupThreads
Specifies the number of threads to be used during the backup.
The fewer the threads, the easier the backup log file is to read and understand.
The more the threads, the more components that can be backed up in parallet, potentially resulting in a faster backup operation.
The minimum value is 1 and the maximum value is 10.

The default value is 3.

If a backup is performed with the -ShowTree parameter, then the BackupMethod parameter is not used.

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

### -ConfigurationOnly
If set, the backup will contain configuration settings only (no data) for each of the objects to be backed up.

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

### -Force
Specifies to proceed with a backup operation even if the estimation is that the backup directory does not have sufficient space to hold the entire backup.

If a backup is performed with the ShowTree parameter, then the Force parameter is not used.

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
Indicates the part of the farm to back up.
You might use the full farm path notation as displayed by the ShowTree parameter or the name of the target component in the path if the component has a unique name.
If multiple items are included in the same match, the full path must be provided.
By default, the top node is selected.
Surround the item or path in quotation marks if it contains a space.
If this parameter is not specified, the entire farm is backed up.

The type must be a valid item; for example, Farm\Microsoft SharePoint Foundation Web Application\SharePoint - 80.

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

### -Percentage
Requests progress updates about the backup operation to be displayed in increments of that percentage; for example, a value of 5 displays backup progress updates at every 5 percent completed, and a value of 10 displays backup progress updates at every 10 percent completed.
To have progress outputs displayed, you must specify the Verbose parameter.

This percentage is not precise and the actual progress updates might be lower or higher than requested.
Progress updates are always recorded in the backup log file.

The percentage value is not prcesie and the actual progress updates might be lower or higher than requested.

The default value is 5.
For a very large database, 1 is the recommended value.

Valid values are an integer value between 1 and 100.

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
For more information, type the following command: get-help about_commonparameters

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

