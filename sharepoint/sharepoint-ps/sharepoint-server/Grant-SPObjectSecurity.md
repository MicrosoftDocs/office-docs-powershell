---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/grant-spobjectsecurity
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Grant-SPObjectSecurity
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Grant-SPObjectSecurity

## SYNOPSIS

Adds a new security principal to an SPObjectSecurity object.



## SYNTAX

```
Grant-SPObjectSecurity [-Identity] <SPObjectSecurity> [-Principal] <SPClaim> [-Rights] <String[]>
 [-AssignmentCollection <SPAssignmentCollection>] [-Replace] [<CommonParameters>]
```

## DESCRIPTION
The Grant-SPObjectSecurity cmdlet adds a new security principal, such as a user, to a SPObjectSecurity object.
An SPObjectSecurity object is a common object that is used to represent the security access control list (ACL) of SharePoint administrative objects, in particular, service applications.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
$principal = New-SPClaimsPrincipal "CONTOSO\JaneDoe" -IdentityType WindowsSamAccountName 
$sa = Get-SPServiceApplication | ?{$_.TypeName -eq 'User Profile Service Application'}
$security = Get-SPServiceApplicationSecurity $sa -Admin
Grant-SPObjectSecurity $security $principal "Full Control"
Set-SPServiceApplicationSecurity $sa -Admin $security
```

This example retrieves the SPObjectSecurity object corresponding to the administrator ACL on the User Profile Service Application and adds a new user principal to that ACL.

The new user is an administrator for the service application $serviceApp.

## PARAMETERS

### -Identity
Specifies the SPObjectSecurity object to which the new security principal is added.
You can use the Get-SPServiceApplicationSecurity cmdlet to get a SPObjectSecurity object .

```yaml
Type: SPObjectSecurity
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Principal
Specifies the principal to whom the rights apply.

The type must a valid name a principal; for example, Full Control.

```yaml
Type: SPClaim
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rights
Specifies the rights granted to the principal.

The type must a valid array of strings that represents the rights granted to the principal.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 3
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Replace
Replaces the existing rights on the SPObjectSecurity object with the new rights specified.
If this parameter is not specified, the new rights are added to the existing rights.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

