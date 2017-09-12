---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Move-SPBlobStorageLocation

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Copies a content database to a new location by using Remote BLOB Storage (RBS).



## SYNTAX

```
Move-SPBlobStorageLocation [-SourceDatabase] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DestinationDatabase <String>] [-DestinationDataSourceInstance <String>] [-Dir <String>]
 [-VerboseMod <Boolean>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Move-SPBlobStorageLocation cmdlet to use Remote BLOB Storage (RBS) to copy a content database to an instance of a SQL Server database.
The database size limitation for SQL Server is 4 gigabytes (GB).
If a content database is greater than 4 GB, the database cannot be copied directly to a SQL Server database instance.
The Move-SPBlobStorageLocation cmdlet uses the advantage of RBS and copies databases larger than 4 GB.
RBS stores the data on the local hard disk and keeps the links to the data in the database, which results in a smaller database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Move-SPBlobStorageLocation WSS_Content
```

This example copies the content database named WSS_Content from the Windows Internal Database to the same database name in SQL Server 2008 Express by using RBS.

### -------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Move-SPBlobStorageLocation WSS_Content
```

This example copies the content database named WSS_Content from the Windows Internal Database to the same database name in SQL Server 2008 Express by using RBS.

### -------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Move-SPBlobStorageLocation WSS_Content -DestinationDatabase WSS_V4_Content -BackupDatabase WSSBackupDB -VerboseMod:$true
```

This example copies the content database named WSS_Content from the Windows Internal Database to a database in SQL Server 2008 Express.
The name of the new database will be WSS_V4_Content.
During the move, the backup file name will be WSSBackupDB.
The output of this command displays log information to the Command Prompt window.

### -------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Move-SPBlobStorageLocation WSS_Content -DestinationDatabase WSS_V4_Content -BackupDatabase WSSBackupDB -VerboseMod:$true
```

This example copies the content database named WSS_Content from the Windows Internal Database to a database in SQL Server 2008 Express.
The name of the new database will be WSS_V4_Content.
During the move, the backup file name will be WSSBackupDB.
The output of this command displays log information to the Command Prompt window.

## PARAMETERS

### -SourceDatabase
Specifies the name of the Windows Internal Database.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

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

### -DestinationDatabase
Specifies the name of the migrated database.
If the DestinationDatabase parameter is not specified, the SourceDatabase parameter is used.

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

### -DestinationDataSourceInstance
Specifies the name of the instance of the destination database.
The value in the SourceDatabase parameter is migrated to this instance.
The name of the instance of the database should be SQL Server 2008 with Service Pack 1 (SP1) and Cumulative Update 2 version or higher.
If the DestinationDataSourceInstance parameter is not specified, the local host name is used.

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

### -Dir
Used for all disk operations, including storing temporary backups and database (.mdf) files of a migrated database.
If the Dir parameter is not specified, a default directory of the destination SQL Server instance is used.
The free space in this directory should be at least two times the size of the source database.

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

### -VerboseMod
Generates verbose log output to be displayed in the Command Prompt window.
If the VerboseMod parameter is not specified, no output is displayed.

```yaml
Type: Boolean
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

