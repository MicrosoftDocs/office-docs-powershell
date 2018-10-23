---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPEnterpriseSearchQueryKeyword
schema: 2.0.0
---

# New-SPEnterpriseSearchQueryKeyword

## SYNOPSIS
Adds a keyword term to a shared search application.


## SYNTAX

```
New-SPEnterpriseSearchQueryKeyword [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Contact <String>] [-Definition <String>] [-EndDate <DateTime>] [-ReviewDate <DateTime>]
 -Site <SPSitePipeBind> [-StartDate <DateTime>] -Term <String> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPEnterpriseSearchQueryKeyword` cmdlet changes query results by creating a new keyword.
A query keyword is a query component of a query topology.
SPEnterpriseSearchQueryKeyword represents relevance setting through keywords.

You can use this cmdlet for keywords in site collections that are in SharePoint Server.
You cannot use this cmdlet after a site collection is upgraded to SharePoint Server because keywords and Best Bets are automatically migrated to query rules.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>New-SPEnterpriseSearchQueryKeyword -Term Tangible -Site http://myserver/sites/team
```

This example creates a new query keyword for the site http://myserver/sites/team with the term Tangible.


## PARAMETERS

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

### -Contact
Specifies the user name associated with the new keyword.

The type must be a valid user name; for example, KeywordUser1.


```yaml
Type: String
Parameter Sets: (All)
Aliases: c
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Definition
Specifies the definition of the new keyword term.

The type must be a valid string; for example, a keyword term definition.


```yaml
Type: String
Parameter Sets: (All)
Aliases: d
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
Specifies the expiration date of the keyword term.
The default value is MaxDate.

The type must be a valid DateTime type, in the form 2010,12,05.


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: e
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReviewDate
Specifies the review date of the keyword term.
The default value is MaxDate.

The type must be a valid date, in the form 2010,12,05.


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: r
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Associates the new keyword term to the specified results URL.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.


```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Specifies the activation date for the keyword term.
The default value is the current date.

The type must be a valid date, in the form 2010,12,05.


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: s
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Term
Specifies the keyword term to create.

The type must be a valid string that contains a keyword term (for example, KeywordTerm1).


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
