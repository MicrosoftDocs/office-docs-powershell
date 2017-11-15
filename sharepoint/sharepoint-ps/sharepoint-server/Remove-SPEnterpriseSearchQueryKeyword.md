---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchQueryKeyword
schema: 2.0.0
---

# Remove-SPEnterpriseSearchQueryKeyword

## SYNOPSIS
Deletes a query keyword.


## SYNTAX

```
Remove-SPEnterpriseSearchQueryKeyword [-Identity] <KeywordPipeBind> -Site <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPEnterpriseSearchQueryKeyword` cmdlet deletes unused or unwanted keywords from the query keyword collection.

You cannot use this cmdlet after a site collection is upgraded to SharePoint Server because keywords and Best Bets are automatically migrated to query rules.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>Get-SPEnterpriseSearchQueryKeyword -Identity Engineering -Site http://myserver/sites/engineering | Remove-SPEnterpriseSearchQueryKeyword -Site http://myserver/sites/engineering
```

This example removes the Engineering keyword from the site collection at http://myserver/sites/engineering.


## PARAMETERS

### -Identity
Specifies the keyword term to delete.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid string that contains a keyword term (for example, KeywordTerm1); or an instance of a valid Keyword object.

```yaml
Type: KeywordPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
Filters to delete keywords from the specified site collection of results.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
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
