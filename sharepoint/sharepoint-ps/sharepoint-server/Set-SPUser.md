---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPUser
schema: 2.0.0
---

# Set-SPUser

## SYNOPSIS
Configures properties of an existing user.


## SYNTAX

```
Set-SPUser [-Identity] <SPUserPipeBind> [-AddPermissionLevel <String[]>]
 [-AssignmentCollection <SPAssignmentCollection>] [-ClearPermissions] [-Confirm] [-DisplayName <String>]
 [-Email <String>] [-Group <SPGroupPipeBind>] [-IsSiteCollectionAdmin] [-PassThru]
 [-RemovePermissionLevel <String[]>] [-SyncFromAD] [-Web <SPWebPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPUser` cmdlet configures properties of an existing user.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>Set-SPUser -Identity 'Contoso\jdow' -Web http:// test -AddPermissionLevel "Contributor"
```

This example sets a user (Contoso\jdow) to be a contributor on http://test.


## PARAMETERS

### -Identity
Specifies the GUID, login name, or SPUser object of the user to be returned.

The type must be a GUID of an existing user in the form, 1234-5678-9876-0987.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AddPermissionLevel
Specifies the permission level to add to the user.

The value must be one of the following options:

--Contribute

Can view, add, update and delete list items and documents.

--Design

Can view, add, update, delete, approve and customize documents.

--Full Control

Has full control for all documents.

--Limited Access

Can view specific lists, document libraries, list items, folders, or documents when permissions are granted.

--Read

Can view pages and list items and download documents.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -ClearPermissions
Deletes all assigned permissions from the user.
If Clear and Add values exist, permissions are first cleared and then new permissions are added.

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

### -DisplayName
Specifies the new display name of the user.

The type must be a valid name.

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

### -Email
Specifies the new email address of the user.

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

### -Group
Adds the user to an existing group in the given site.

```yaml
Type: SPGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsSiteCollectionAdmin
Specifies whether to set the user as a site collection administrator.

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

### -PassThru
If not provided, indicates that this cmdlet has no output. 
If provided, this parameter indicates that the SPUser object for this user is to be returned.

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

### -RemovePermissionLevel
Removes the permission level from the user.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncFromAD
If provided, specifies that user information will be synchronized from the user directory store.

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

### -Web
Specifies the name of the URL or GUID to be used as a scope.
This parameter is not needed if the SPUser object is provided as the identity.

The value must be an authentic URL, in the form http://server_name, or GUID, in the form 1234-5678-9807.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
