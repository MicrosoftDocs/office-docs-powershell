---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Remove-SPShellAdmin
schema: 2.0.0
---

# Remove-SPShellAdmin

## SYNOPSIS
Removes a user from the SharePoint_Shell_Access role.


## SYNTAX

```
Remove-SPShellAdmin [-UserName] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-database <SPDatabasePipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Remove-SPShellAdmin` cmdlet to remove a user from the SharePoint_Shell_Access role in a specified database.

When you use this cmdlet to remove a user from the role, you do not remove the user from the WSS_ADMIN_WPG group in the target database.

When you run this cmdlet to add a user to the SharePoint_Shell_Access role, the user must have the following security permissions:

- Security_Admin role access on the instance of SQL Server and the db_owner role in the database.
- Administrative permission to the local computer.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
PS C:\>Remove-SPShellAdmin -UserName CONTOSO\User1 -database 4251d855-3c15-4501-8dd1-98f960359fa6
```

This example removes an existing user named User1 from the SharePoint_Shell_Access role in the database specified.


## PARAMETERS

### -UserName
Specifies the name of the user you want to remove from the SharePoint_Shell_Access role in the specified database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -database
Specifies the GUID of the database or the Databse Object that includes the SharePoint_Shell_Access role from which the user is to be removed.
If the database parameter is not specified, the configuration database is used.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
