---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPEnterpriseSearchSiteHitRule
schema: 2.0.0
---

# New-SPEnterpriseSearchSiteHitRule

## SYNOPSIS
Adds a new site hit rule for a search application.


## SYNTAX

```
New-SPEnterpriseSearchSiteHitRule -Behavior <String> -HitRate <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-SearchService <SearchServicePipeBind>] [-WhatIf]
 -Name <String> [<CommonParameters>]
```

## DESCRIPTION
The `New-SPEnterpriseSearchSiteHitRule` cmdlet sets the maximum limits for crawling a site.
The new site hit rule is used by all search service applications on the current farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ----------------EXAMPLE------------------
```
C:\PS>New-SPEnterpriseSearchSiteHitRule -Identity myHost -Behavior 0 
-HitRate 40
```

This example creates a new site hit rule on the myHost host that limits to 40 the number of simultaneous requests.


## PARAMETERS

### -Behavior
Defines a rule to be followed when the farm's search service crawls the given site.
If a value of zero is specified, the hit rate is the maximum number of simultaneous requests.
If a value of 1 is specified, then hit rate is the number of seconds to delay between requests to the server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HitRate
Value to use for maximum requests or seconds of delay, according to behavior.

```yaml
Type: String
Parameter Sets: (All)
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -SearchService
Specifies the search service in the farm that hosts the crawl.

The type must be an instance of a valid SearchService object; otherwise, the local service on the server that hosts the Windows PowerShell cmdlet will be used.

```yaml
Type: SearchServicePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
{{Fill Name Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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
