---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/remove-spuser
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Remove-SPUser
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer: 
---

# Remove-SPUser

## SYNOPSIS
Removes a user from a Web site.


## SYNTAX

```
Remove-SPUser [-Identity] <SPUserPipeBind> -Web <SPWebPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Group <SPGroupPipeBind>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPUser` cmdlet specifies the identity and user group from which a user is to be removed.
The `Remove-SPUser` cmdlet does not remove the user from Active Directory Domain Services (AD DS).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
Remove-SPUser "Contoso\jdoe" -web https://test/web1

Get-SPWeb "https://test/web1" | Remove-SPUser "Contoso\jdoe"
```

This example removes the user (Contoso\jdoe) from the Web application https://test/web1.


### ------------------EXAMPLE 2-----------------------
```
Get-SPSite https://contoso.com |Get-SPWeb |Remove-SPUser "Contoso\jdoe"
```

This syntax removes the user (Contoso\Jdoe) from every Web in a site collection located at https://contoso.com.


## PARAMETERS

### -Identity
Specifies the GUID, the user name, or SPUser object to remove.

The type must be a valid GUID of the user, in the form 1234-5678-9876-0987.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Specifies the name of the URL or GUID from which the user is to be removed.
This parameter is needed only if the identity provided is the user name.

The type must be a valid URL, in the form https://server_name, or a GUID, in the form 1234-5678-9807.

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

### -Group
The user only gets removed from that group.
Otherwise, the user gets removed from the site.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
