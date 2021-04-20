---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spprofileserviceapplicationsecurity
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPProfileServiceApplicationSecurity
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPProfileServiceApplicationSecurity

## SYNOPSIS
Sets permission and identity information.

## SYNTAX

```
Set-SPProfileServiceApplicationSecurity -Identity <SPObjectSecurity>
 -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [-Type <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPProfileServiceApplictionSecurity` cmdlet to set permission and identity information for the following User Profile objects:

- Read individual My Sites
- Use Personal Features
- Use Social Features
- Create Personal Site

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
$proxy = Get-SPServiceApplicationProxy | ?{$_.TypeName -eq 'User Profile Service Application Proxy'}
$security = Get-SPProfileServiceApplicationSecurity -ProfileServiceApplicationProxy $proxy
$everyone = New-SPClaimsPrincipal -Identity 'c:0(.s|true' -IdentityType EncodedClaim
Revoke-SPObjectSecurity -Identity $security -Principal $everyone -Rights 'Create Personal Site'
Set-SPProfileServiceApplicationSecurity -Identity $security -ProfileServiceApplicationProxy $proxy
```

This example revokes the right 'Create Personal Site' from All Authenticated Users.

### --------------------EXAMPLE 2---------------------
```
$proxy = Get-SPServiceApplicationProxy | ?{$_.TypeName -eq 'User Profile Service Application Proxy'}
$security = Get-SPProfileServiceApplicationSecurity -ProfileServiceApplicationProxy $proxy
$everyone = New-SPClaimsPrincipal -Identity 'c:0(.s|true' -IdentityType EncodedClaim
Grant-SPObjectSecurity -Identity $security -Principal $everyone -Rights 'All'
Set-SPProfileServiceApplicationSecurity -Identity $security -ProfileServiceApplicationProxy $proxy
```

This example grants the right 'All' to All Authenticated Users.

## PARAMETERS

### -Identity
Specifies the User Profile Service Application security object.

```yaml
Type: SPObjectSecurity
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ProfileServiceApplicationProxy
Specifies the unique identifier for the proxy.

```yaml
Type: SPServiceApplicationProxyPipeBind
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
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -SiteSubscription
Specifies the account under which this service should run.
This parameter is mandatory in a hosted-environment and optional in a non-hosted environment.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Type
Specifies the type of object to display.

The type is any one of the following values:

- MySiteReaderACL
- UserACL

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
