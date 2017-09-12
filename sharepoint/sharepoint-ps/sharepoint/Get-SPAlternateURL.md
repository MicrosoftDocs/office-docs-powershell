---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPAlternateURL

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns all alternate URLs that match a given set of criteria.



## SYNTAX

### ResourceName
```
Get-SPAlternateURL [[-Identity] <SPAlternateUrlPipeBind>] -ResourceName <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Zone <SPUrlZone>] [<CommonParameters>]
```

### WebApplication
```
Get-SPAlternateURL [[-Identity] <SPAlternateUrlPipeBind>] -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Zone <SPUrlZone>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPAlternateURL cmdlet returns all alternate URLs that match the scope given by either the optional Identity parameter or by a combination of the optional WebApplication, Zone, or Resource parameters.
Each criterion that is added narrows the scope.
If no criteria are specified then all alternate URLs are returned.

If the Identity parameter is used, only the specific matching alternate URL is returned.
If no alternate URL with the given identity exists at the given scope, nothing is returned.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPAlternateURL -WebApplication http://sitename
```

This example displays all the alternate URLs on a given Web application.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPAlternateURL -WebApplication http://sitename
```

This example displays all the alternate URLs on a given Web application.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPAlternateURL -ResourceName "MyResource"
```

This example displays all the alternate URLs for a given resource.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPAlternateURL -ResourceName "MyResource"
```

This example displays all the alternate URLs for a given resource.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the alternate URL to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, or a valid URL, in the form http://server_name.

```yaml
Type: SPAlternateUrlPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ResourceName
Specifies the name of the resource from which to list alternate URLs.

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

### -WebApplication
Specifies the Web application from which to list alternate URLs.

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

### -Zone
Specifies one of the five zones with which the alternate URLs is associated.

Must be a valid zone: Default, Intranet, Internet, Extranet, or Custom

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

