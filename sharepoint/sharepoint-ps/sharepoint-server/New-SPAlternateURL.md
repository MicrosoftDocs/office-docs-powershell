---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPAlternateURL
schema: 2.0.0
---

# New-SPAlternateURL

## SYNOPSIS

Creates a new public or internal URL for the specified Web application zone or resource.



## SYNTAX

### WebApplication
```
New-SPAlternateURL [-Url] <String> -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Internal] [-WhatIf] [-Zone <SPUrlZone>]
 [<CommonParameters>]
```

### ResourceName
```
New-SPAlternateURL [-Url] <String> -ResourceName <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Internal] [-WhatIf] [-Zone <SPUrlZone>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The New-SPAlternateUrl cmdlet creates a new public or internal URL for the specified Web application zone or resource.
Use the ResourceName parameter if the alternate URL is for an external resource.

Each Web application can be associated with a collection of mappings between internal and public URLs.
Both internal and public URLs consist of the protocol and domain portion of the full URL; for example, https://www.fabrikam.com.
Users type a public URL to get to the SharePoint site, and that URL appears in the links on the pages.
Internal URLs are in the URL requests that are sent to the SharePoint site.
Many internal URLs can be associated with a single public URL in multiserver farms; for example, when a load balancer routes requests to specific IP addresses to various servers in the load-balancing cluster.

Each Web application supports five collections of mappings per URL; the five collections correspond to five zones (default, intranet, extranet, Internet, and custom).
When the Web application receives a request for an internal URL in a particular zone, links on the pages returned to the user have the public URL for that zone.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- 
```
C:\PS>#create the public URL
New-SPAlternateURL https://www.contoso.com -Zone "Internet"

C:\PS>#create the internal URL
New-SPAlternateURL http://sharepoint.contoso.com -Zone "Internet" -internal
```

This example translates incoming requests for https://www.contoso.com into http://sharepoint.contoso.com (on the Internet zone).

When a reverse proxy is being set up to handle public URL SSL termination, alternate access mappings must be configured to handle the URL translation.

## PARAMETERS

### -Url
Specifies the public URL that users access to sign in to the Web application.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the name, URL, or GUID of the Web application for which to create the mapping.

The type must be a valid name, URL, in the form WebApplication-1212, http://server_name, or GUID, in the form 1234-5678-9876-0987.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceName
Specifies the resource name, if the alternate URL is for an external resource.
If no value is specified, the value is left blank.

```yaml
Type: String
Parameter Sets: ResourceName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -Internal
Makes this alternate URL an internal URL.
If this parameter is not provided, the URL is a public URL.

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

### -Zone
Specifies one of the five zones with which the alternate URL is associated.

The type must be a valid zone: Default, Intranet, Internet, Extranet, or Custom.

```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
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

