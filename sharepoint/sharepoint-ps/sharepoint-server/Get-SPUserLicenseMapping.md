---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spuserlicensemapping
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPUserLicenseMapping
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPUserLicenseMapping

## SYNOPSIS

Returns the claim-to-user license mappings.



## SYNTAX

```
Get-SPUserLicenseMapping [-AssignmentCollection <SPAssignmentCollection>]
 [-WebApplication <SPWebApplicationPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPUserLicenseMapping cmdlet returns the claim-to-user license mappings for the entire SharePoint farm or a specific web application.

Getting the mappings for the entire farm does not retrieve any specific mappings on a web application.

If you specify no parameters, the license mappings for the entire farm are returned.
To display the license mappings for a specific web application, use the WebApplication parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ---------------EXAMPLE 1----------------- 
```
Get-SPUserLicenseMapping
```

This example returns all claim-to-user license mappings for the entire SharePoint farm.

### ---------------EXAMPLE 2 ----------------- 
```
Get-SPUserLicenseMapping -WebApplication "SharePoint - 80"
```

This example returns all claim-to-user license mappings for the web application with the name "SharePoint - 80".

### ---------------EXAMPLE 3 ----------------- 
```
Get-SPUserLicenseMapping -WebApplication https://<server_name>/sitename
```

This example returns all claim-to-user license mappings for the Web application with the URL https://\<server_name\>/sites/sitename.

## PARAMETERS

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL, GUID, web application name, or instance of a web application object from which to get the user license mappings.
The type must be an URL in the form https://server_name or https://server_name/sites/sitename, a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh), a web application name (that is, SharePoint - 80), or an instance of a web application object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPUserLicenseMapping](Add-SPUserLicenseMapping.md)

[Remove-SPUserLicenseMapping](Remove-SPUserLicenseMapping.md)

