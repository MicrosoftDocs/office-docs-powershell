---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchCrawlLogReadPermission
schema: 2.0.0
---

# Remove-SPEnterpriseSearchCrawlLogReadPermission

## SYNOPSIS
Removes permission to view crawl log information.


## SYNTAX

```
Remove-SPEnterpriseSearchCrawlLogReadPermission [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Identity <CrawlLogReadPermissionPipeBind>] [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-Tenant <Guid>] [-UserNames <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Only the Search Service Application administrator can use this cmdlet.

The `Remove-SPEnterpriseSearchCrawlLogReadPermission` cmdlet removes the permission to view crawl log information for one or more users.
The administrator can choose to restrict this removal to a particular tenant.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>$crawlLogPermission = Get-SPEnterpriseSearchCrawlLogReadPermission -SearchApplication $ssa -Tenant "00000000-0000-0000-0000-000000000001"
PS C:\>Remove-SPEnterpriseSearchCrawlLogReadPermission -Identity $crawlLogPermission -UserNames "contoso\user1;contoso\user2"
```

This example removes user1 and user2 from the list of users referenced by $crawlLogPermission.
$crawlLogPermission is the list of users who have permission to view the crawl log information from the tenant with id "00000000-0000-0000-0000-000000000001" on the search application referenced by $ssa.


## PARAMETERS

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

### -Identity
Specifies the crawl log permissions list from which to remove the user(s).

```yaml
Type: CrawlLogReadPermissionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the crawl log.
The type must be a valid GUID, of the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
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
Specifies the tenant for which the user permissions shall be removed.
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

### -UserNames
Specifies the user names that shall no longer have permission to view the crawl log information.
Separate names with semi-colons.

Specifies the user names that no longer shall have permission to view the crawl log information.
Use the form "domain\username".
When adding several user names, separate names with semi-colons.

```yaml
Type: String
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPEnterpriseSearchCrawlLogReadPermission](Set-SPEnterpriseSearchCrawlLogReadPermission.md)

[Get-SPEnterpriseSearchCrawlLogReadPermission](Get-SPEnterpriseSearchCrawlLogReadPermission.md)
