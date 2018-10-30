---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPSiteURL
schema: 2.0.0
---

# Set-SPSiteURL

## SYNOPSIS
Adds or changes an URL mapping for the site.


## SYNTAX

```
Set-SPSiteURL [-Identity] <SPSitePipeBind> -Url <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [-Zone <SPUrlZone>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPSiteUrl` cmdlet adds or changes an URL mapping for the site.

The `Set-SPSiteUrl` cmdlet only applies to the root site collection for a host name that is, http://www.contoso.com.
This cmdlet cannot be directly run against a managed path site collection underneath the root that is, http://www.contoso.com/sites/test.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
C:\PS>$site = Get-SPSite 'http://www.contoso.com'

PS C:\>Set-SPSiteURL -Identity $site -Url http://contoso.sharepoint.com -Zone 0
```

This example adds an additional URL, http://contoso.sharepoint.com, to the site collection.
The newly added URL is in the default zone.


## PARAMETERS

### -Identity
Specifies the URL or GUID of the site collection to set.
Must be the root site collection for a host-name.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
Specifies the URL.
This must be unique.
This must be an absolute URL including scheme (that is, https://www.contoso.com).
If URL exists, the current entry is updated.
Otherwise, the URL entry is added and cannot be in use by another site collection.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

### -Zone
Specifies one of the five zones with which the alternate URL is associated.
If the Zone parameter is not specified and is a new entry, the default value is set.
If an entry exists and is not specified, do not change.


```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
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

[Get-SPSiteUrl](Get-SPSiteUrl.md)

[Remove-SPSiteUrl](Remove-SPSiteUrl.md)
