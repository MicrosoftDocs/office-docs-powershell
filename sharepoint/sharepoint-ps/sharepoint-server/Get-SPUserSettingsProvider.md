---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spusersettingsprovider
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPUserSettingsProvider
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPUserSettingsProvider

## SYNOPSIS

Returns a list of User Settings Providers installed on the farm.



## SYNTAX

```
Get-SPUserSettingsProvider [[-Identity] <SPUserSettingsProviderPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPUserSettingsProvider cmdlet to return a list of User Settings Providers.
To return a list of a specific user setting provider, use the Identity parameter.
Otherwise, the list for the entire farm is returned.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -----------EXAMPLE-------- 
```
C:\PS>$provider = Get-SPUserSettingsProvider

C:\PS>$site = Get-SPSite -Identity https://someserver

C:\PS>$user = $site.RootWeb.CurrentUser

C:\PS>$ctx = $provider.GetProviderContext($user)

C:\PS>$provider.GetUserRegionalSettings($ctx,$user)
```

This example returns the regional settings for a specified user.

## PARAMETERS

### -Identity
Specifies the GUID ID for a User Settings Provider.

```yaml
Type: SPUserSettingsProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-SPUserSettingsProvider](New-SPUserSettingsProvider.md)

[Remove-SPUserSettingsProvider](Remove-SPUserSettingsProvider.md)

[Get-SPUserSettingsProviderManager](Get-SPUserSettingsProviderManager.md)

