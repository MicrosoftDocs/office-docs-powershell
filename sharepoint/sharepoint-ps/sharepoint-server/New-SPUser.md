---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPUser
schema: 2.0.0
---

# New-SPUser

## SYNOPSIS
Adds an existing user to a SharePoint site with the designated permissions.


## SYNTAX

```
New-SPUser [-UserAlias] <String> -Web <SPWebPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DisplayName <String>] [-Email <String>] [-Group <SPGroupPipeBind>] [-PermissionLevel <String[]>]
 [-SiteCollectionAdmin] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPUser` cmdlet adds an existing user to a SharePoint web site with the designated permissions.
This user has the given permissions in all subsites that inherit permissions.
The user account must already exist in the user directory.

If your environment is in Active Directory mode, the user must already exist in Active Directory Domain Services (AD DS) and only the UserAlias parameter is required; all other fields are pulled from AD DS.
If only an alias is given and the farm is in Active Directory Account Create mode, the Email parameter is also required.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1----------------------
```
PS C:\>New-SPUser -UserAlias 'Contoso\Jdow'-DisplayName 'Jane Dow' -Web http://contoso.com
```

This example adds a new user named Jane Dow to the Contoso domain.


### ------------------EXAMPLE 2----------------------
```
PS C:\>Get-SPWeb http://sitename | New-SPUser -UserAlias Contoso\Jdow
```

This example adds Contoso\Jdow to all webs in the http://sitename site collection.
Because this site collection uses inherited permissions, only the top-level web site needs to be touched.


## PARAMETERS

### -UserAlias
Specifies the user alias from Active Directory Domain Services (AD DS).

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

### -Web
Specifies the URL or GUID of the web on which to create this user.

The type must be a valid URL, in the form http://server_name, or a GUID, in the form 1234-5678-9876-0987.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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

### -DisplayName
Specifies a string that contains the display name of the user.

The type must be a valid user name; for example, Joe.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Email
Specifies the email address of the new user.

The type must be a valid email address, in the form someone@contoso.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the user group to which the new user belongs.

```yaml
Type: SPGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionLevel
Adds a user to a permission level.

The type must be a valid permission level for the web application; for example, Full Control, Read, Contribute, or All.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollectionAdmin
Specifies whether to add the user as an administrator to the site collection.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
