---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchCrawlLogReadPermission
schema: 2.0.0
---

# Get-SPEnterpriseSearchCrawlLogReadPermission

## SYNOPSIS
Retrieves the list of users with permission to access the crawl log information.

## SYNTAX

```
Get-SPEnterpriseSearchCrawlLogReadPermission -SearchApplication <SearchServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Only the Search Service Application administrator can use the Get-SPEnterpriseSearchCrawlLogReadPermission cmdlet.

The Search Service Application administrator uses the cmdlet to retrieve a list of users with permission to view the crawl log information.
The administrator can choose to limit this list to users with permission to view crawl log information from a particular tenant.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Get-SPEnterpriseSearchCrawlLogReadPermission -SearchApplication $ssa -Tenant '00000000-0000-0000-0000-000000000001'
```

This example retrieves a list of users who have permission to view the crawl log information for a tenant with id '00000000-0000-0000-0000-000000000001' on the search application referenced by `$ssa`.

## PARAMETERS

### -SearchApplication
Specifies the name of the search application for which to list crawl log permissions.
The type must be a valid GUID, of the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
Specifies that the list of users shall be within the scope of this tenant.
The type must be a valid GUID of the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
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

[Set-SPEnterpriseSearchCrawlLogReadPermission](Set-SPEnterpriseSearchCrawlLogReadPermission.md)

[Remove-SPEnterpriseSearchCrawlLogReadPermission](Remove-SPEnterpriseSearchCrawlLogReadPermission.md)

