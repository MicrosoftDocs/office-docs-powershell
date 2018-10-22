---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPDeletedSite
schema: 2.0.0
---

# Get-SPDeletedSite

## SYNOPSIS

Gets a list of deleted site collections.



## SYNTAX

```
Get-SPDeletedSite [-Identity] <SPDeletedSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-ContentDatabase <SPContentDatabasePipeBind>] [-DateTimeFrom <String>] [-DateTimeTo <String>]
 [-Limit <String>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

This cmdlet was introduced in SharePoint Server with Service Pack 1 (SP1) and SharePoint Foundation with Service Pack 1 (SP1).

Use the Get-SPDeletedSite cmdlet to display a list of deleted site collections by using the Identity parameter.
If no parameter is specified, then all deleted site collections in the farm are displayed.

Unlike the Get-SPSite cmdlet that uses the host name and scheme for the Identity parameter (that is, http://server_name), the value of the identity parameter for all SPDeletedSite cmdlets use a server-relative URL.
Typically, the forward slash character (/) begins the relative URL and also denotes the root site.

For additional information about a server-relative URL or understanding general concepts about absolute and relative URLs, see Server-relative URL Property (http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spsite.serverrelativeurl.aspx) or Understanding Absolute and Relative URL Addresses (http://msdn.microsoft.com/en-us/library/bb208688(office.12).aspx).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1--------------------- 
```
PS C:\>Get-SPDeletedSite -Identity 610857cb-8414-4a89-8bf3-ad3628f6c86c
```

This example gets a specific deleted site collection by using a site ID.

### ------------------EXAMPLE 2--------------------- 
```
PS C:\>Get-SPDeletedSite "/"
```

This example gets a deleted site collection from the root site.

### ------------------EXAMPLE 3--------------------- 
```
PS C:\>Get-SPDeletedSite '/Site/cat*'
```

This example matches a deleted site collection that contains any combination with the string "cat".
The asterisk (*) wildcard character requests a match for multiple characters.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the site collection to get.

The identity can be either a valid server-relative URL in the form /sites/site_name or a valid GUID, for example, 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPDeletedSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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

### -ContentDatabase
Specifies the GUID of the content database from which to list site collections.

The type must be a valid database name in the form SPContentDB01 or a valid GUID, for example, 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DateTimeFrom
The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

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

### -DateTimeTo
The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

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

### -Limit
Limits the maximum number of site collections to return.
The default value is 1000.

The type must be a valid non-negative number.
Specify ALL to return all site collections for the given scope.

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

### -SiteSubscription
Specifies the site subscription from which to get site collections.

The type must be a valid URL in the form http://server_name or a valid GUID, for example, 12345678-90ab-cdef-1234-567890bcdefgh.

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

### -WebApplication
Specifies the URL, GUID, or name of the Web application from which to list sites.

The type must be a valid URL in the form http://server_name; a valid GUID, for example, 12345678-90ab-cdef-1234-567890bcdefgh; or the Web application name, for example, WebApplication1212.

```yaml
Type: SPWebApplicationPipeBind
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

