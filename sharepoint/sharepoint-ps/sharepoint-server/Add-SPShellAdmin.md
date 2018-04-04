---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Add-SPShellAdmin
schema: 2.0.0
---

# Add-SPShellAdmin

## SYNOPSIS

Adds a user to the SharePoint_Shell_Access role for the specified database.



## SYNTAX

```
Add-SPShellAdmin [-UserName] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-database <SPDatabasePipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When you run this cmdlet to add a user to the SharePoint_Shell_Access role, you must have membership in the securityadmin fixed server role on the SQL Server instance, membership in the db_owner fixed database role on all affected databases, and local administrative permission on the local computer.

This cmdlet is intended only to be used with a database that uses Windows authentication.
There is no need to use this cmdlet for databases that use SQL authentication; in fact, doing so may result in an error message.

Use the Add-SPShellAdmin cmdlet to add a user to the SharePoint_Shell_Access role as follows:

--If you specify only the user, the user is added to the role for the farm configuration database.

--If you use the database parameter, the user is added to the role on the farm configuration database, the Central Administration content database, and the specified database. Using the database parameter is the preferred method because most of the administrative operations require access to the Central Administration content database.

The user is added to the WSS_Admin_WPG group on all Web servers when the user is added to the SharePoint_Shell_Access role.
If the target database does not have a SharePoint_Shell_Access role, the role is automatically created.

In order to use Windows PowerShell for SharePoint Products, a user must be a member of the SharePoint_Shell_Access role on the configuration database and a member of the WSS_ADMIN_WPG local group on the computer where SharePoint Products is installed.
However, the result of running this cmdlet is that the user specified with the UserName parameter will have the dbo_owner role access on the affected databases as described above.
Therefore, you should carefully plan which users are given this access.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [http://go.microsoft.com/fwlink/p/?LinkId=251831](http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE 1------------------------- 
```
C:\PS>Add-SPShellAdmin -UserName CONTOSO\User1
```

This example adds a new user named User1 to the SharePoint_Shell_Access role in the farm configuration database only, and also ensures the user is added to the WSS_Admin_WPG local group on each server in the farm.

### -------------------EXAMPLE 2------------------------- 
```
C:\PS>Add-SPShellAdmin -UserName CONTOSO\User1 -database 4251d855-3c15-4501-8dd1-98f960359fa6
```

This example adds a new user named User1 to the SharePoint_Shell_Access role in both the specified content database and the configuration database by passing a database GUID to the cmdlet.

### -------------------EXAMPLE 3------------------------- 
```
C:\PS>Get-SPDatabase | Where-Object {$_.WebApplication -like "SPAdministrationWebApplication"} | Add-SPShellAdmin CONTOSO\User1
```

This example adds a new user named User1 to the SharePoint_Shell_Access role in both the specified Central Administration content database and the configuration database.

### -------------------EXAMPLE 4------------------------- 
```
C:\PS>Get-SPDatabase | ?{$_.Name -eq "WSS_Content"} | Add-SPShellAdmin -Username CONTOSO\User1
```

This example adds a new user named User1 to the SharePoint_Shell_Access role of both the specified content database and the configuration database by passing the name of the database to the cmdlet.

## PARAMETERS

### -UserName
Specifies the name of the user to add to the SharePoint_Shell_Access role in the target database.

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

### -database
Specifies the GUID of the database or the Database object that includes the SharePoint_Shell_Access role to which you want to add the user.
If the database parameter is not specified, the configuration database is used.
The farm configuration database is always included, even if you specify another database.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

