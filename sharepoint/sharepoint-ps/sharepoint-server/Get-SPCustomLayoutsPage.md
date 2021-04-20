---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spcustomlayoutspage
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPCustomLayoutsPage
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPCustomLayoutsPage

## SYNOPSIS

Returns a mapping to a custom layout page.



## SYNTAX

```
Get-SPCustomLayoutsPage -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Identity <SPCustomPage>] [-CompatibilityLevel <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPCustomLayoutsPagecmdlet cmdlet returns a mapping to a custom layout page in a Web application.
If the Identity parameter is not specified, this cmdlet returns the collection of mappings for all custom layout pages.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [https://go.microsoft.com/fwlink/p/?LinkId=251831](https://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- 
```
Get-SPCustomLayoutsPage -Identity '_layouts/accessdenied.aspx' -WebApplication 'https://webAppUrl'
```

This example returns the mapping of the AccessDenied layout page in the Web application.

## PARAMETERS

### -WebApplication
Specifies the SharePoint Web application that contains the custom layout page.

The type must be a valid URL, in the form https://webAppUrl; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
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

### -Identity
Specifies the custom layout page to get.

The type must be one of the following: None, AccessDenied, Confirmation, Error, Login, RequestAccess, Signout, or WebDeleted.

```yaml
Type: SPCustomPage
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompatibilityLevel
Specifies the version of templates to use when creating a new SPSite object. This value sets the initial CompatibilityLevel value for the site collection. When this parameter is not specified, the CompatibilityLevel will default to the highest possible version for the web application depending on the CompatibilityRange setting.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

