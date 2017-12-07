---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchMetadataManagedProperty
schema: 2.0.0
---

# Set-SPEnterpriseSearchMetadataManagedProperty

## SYNOPSIS
Sets the properties of a metadata managed property.


## SYNTAX

```
Set-SPEnterpriseSearchMetadataManagedProperty [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DefaultForQueryIndependentRank <UInt32>] [-Description <String>] [-EnabledForQueryIndependentRank <Boolean>]
 [-EnabledForScoping <Boolean>] [-FullTextQueriable <Boolean>] -Identity <ManagedPropertyPipeBind>
 [-IncludeInAlertSignature <Boolean>] [-IncludeInMd5 <Boolean>] [-Name <String>] [-NameNormalized <Boolean>]
 [-NoWordBreaker <Boolean>] [-RemoveDuplicates <Boolean>] [-RespectPriority <Boolean>] [-Retrievable <Boolean>]
 [-SafeForAnonymous <Boolean>] [-SearchApplication <SearchServiceApplicationPipeBind>] [-SiteCollection <Guid>]
 [-Tenant <Guid>] [-UserFlags <Int16>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the properties of a managed property.
It is typically used to change the name or description of a managed property.
SPEnterpriseSearchMetadataManagedProperty represents a managed property in the enterprise search metadata property schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication
Set-SPEnterpriseSearchMetadataManagedProperty -SearchApplication $searchapp -Identity UserName -EnabledForScoping $true
```

This example sets the EnabledForScoping property to true for the managed property named UserName in the default search service application.


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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultForQueryIndependentRank
Specifies that the managed property is mandatory when it is used in query-independent rank (relevance).

Note:
Null indicates that the value is unchanged.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: def
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Adds a description to the metadata managed property.

The type must be a valid string.

Note: Null indicates that the value is unchanged.


```yaml
Type: String
Parameter Sets: (All)
Aliases: d
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledForQueryIndependentRank
Specifies that the managed property is mandatory when it is used in the custom ranking model for the query-independent work of ranking.

The type must be one of the following query-independent ranking features in the custom model XML:

- queryIndependentFeature
- categoryFeature
- languageFeature

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: qir
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledForScoping
Specifies that the managed property can be used in a scope definition.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: e
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullTextQueriable
Specifies that the managed property can be used in enterprise search SQL queries.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: f
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the managed property to update.

The type must be a valid name of a managed property, for example, ManagedProperty1, or an instance of a valid ManagedProperty object


```yaml
Type: ManagedPropertyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludeInAlertSignature
{{Fill IncludeInAlertSignature Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: ia
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeInMd5
Specifies that the managed property is included in the hash used by the crawler to determine whether a document has changed.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: im5
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies a name for the managed property.

The type must be a valid managed property name, for example ManagedProperty1.

Note: Null indicates that the value is unchanged.


```yaml
Type: String
Parameter Sets: (All)
Aliases: n
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameNormalized
Specifies if the values of the managed property should be normalized, that is, enable to return results independent of letter casing and diacritics used in the query.
If value is set to true, the values are normalized.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: nn
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWordBreaker
Specifies that the values for this managed property are processed by a word breaker.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: nw
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDuplicates
Specifies that duplicate values for the managed property are removed.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: rd
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RespectPriority
Specifies that when a mapped crawled property contains multiple values and RespectPriority is set to true, only the first mapped crawled property is copied. 
Otherwise, all mapped crawled properties that have a value are copied.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: rp
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Retrievable
Specifies whether the values for this managed property are retrievable or not.

Note: Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: r
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeForAnonymous
{{Fill SafeForAnonymous Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: sfa
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the managed property collection.

The type must be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
Specifies that the managed properties returned are to be within the scope of a site collection (SPSite).

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies that the managed properties returned are to be within the scope of a tenant.

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFlags
Reserved for future use.

Note: Null indicates that the value is unchanged.


```yaml
Type: Int16
Parameter Sets: (All)
Aliases: u
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
