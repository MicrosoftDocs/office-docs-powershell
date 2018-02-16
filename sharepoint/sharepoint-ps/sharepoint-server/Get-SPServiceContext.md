---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPServiceContext
schema: 2.0.0
---

# Get-SPServiceContext

## SYNOPSIS

Returns a service context.



## SYNTAX

### Site
```
Get-SPServiceContext [-Site] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

### SiteSubscription
```
Get-SPServiceContext -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPServiceContext cmdlet returns a service context or a collection of service contexts.
Specify the Site parameter to return an individual service context, or specify the SiteSubscription parameter to return a collection of service contexts.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE--------------- 
```
C:\PS>$sitesub = Get-SPSiteSubscription http://my.contoso.com/

C:\PS>Get-SPServiceContext $sitesub
```

This example returns the service context for a site in a hosted environment.

## PARAMETERS

### -Site
Returns the service context for only the Web application that contains the specified site collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: Site
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteSubscription
Returns all of the service contexts for all Web applications in which the specified site subscription has site collections.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a site subscription (for example, SiteSubscriptionConfig1); or an instance of a valid SiteSubscription object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: SiteSubscription
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

