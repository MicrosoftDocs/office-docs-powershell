---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPSite

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns all site collections that match the specified criteria.



## SYNTAX

### AllSitesInIdentity
```
Get-SPSite [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <Int32>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>] [-Regex] [-WhatIf]
 [<CommonParameters>]
```

### AllSitesInContentDB
```
Get-SPSite -ContentDatabase <SPContentDatabasePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <Int32>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>] [-WhatIf]
 [-NeedsB2BUpgrade] [<CommonParameters>]
```

### AllSitesInSiteSubscription
```
Get-SPSite -SiteSubscription <SPSiteSubscriptionPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <Int32>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>] [-WhatIf]
 [<CommonParameters>]
```

### AllSitesInWebApplication
```
Get-SPSite [-AssignmentCollection <SPAssignmentCollection>] [-CompatibilityLevel <Int32>] [-Confirm]
 [-Filter <ScriptBlock>] [-Limit <String>] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPSite cmdlet returns either a single site that matches the Identity parameter, or all the sites that match the Filter parameter for the specified scope.
The scopes are the WebApplication, ContentDatabase , and SiteSubscription parameters.
If none of these scopes is provided, the scope is the farm.
If the scope is specified with no Filter parameter, all sites in that scope are returned.

The Identity parameter supports providing a partial URL that ends in a wildcard character (*).
All site collections that match this partial URL for the specified scope are returned.
Additionally, if the Regex parameter is provided, the Identity parameter is treated as a regular expression and any site collection with a URL provided in the given scope that matches the expression is returned.

The Filter parameter is a server-side filter for certain site collection properties that are stored in the content database; without the Filter parameter, filtering on these properties is a slow process.
These site collection properties are Owner, SecondaryOwner, and LockState.
The Filter parameter is a script block that uses the same syntax as a Where-Object statement, but is run on the server for faster results.

Valid values for LockState are: Unlock, NoAdditions, ReadOnly, NoAccess.

It is important to note that every site collection that the Get-SPSite cmdlet returns is automatically destroyed at the end of the pipeline.
To store the results of Get-SPSite in a local variable, use the Start-SPAssignment and Stop-SPAssignment cmdlets to avoid memory leaks.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite 'http://<site name>' | Get-SPWeb -Limit All | Select Title
```

This example gets the collection of subweb titles in site collection at http://\<site name\>.

### ------------------EXAMPLE 1--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite 'http://<site name>' | Get-SPWeb -Limit All | Select Title
```

This example gets the collection of subweb titles in site collection at http://\<site name\>.

### ------------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite -ContentDatabase "b399a366-d899-4cff-8a9b-8c0594ee755f" | Format-Table -Property Url, Owner, SecondaryOwner
```

This example gets a subset of data from all sites in the content database b399a366-d899-4cff-8a9b-8c0594ee755f.

### ------------------EXAMPLE 2--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite -ContentDatabase "b399a366-d899-4cff-8a9b-8c0594ee755f" | Format-Table -Property Url, Owner, SecondaryOwner
```

This example gets a subset of data from all sites in the content database b399a366-d899-4cff-8a9b-8c0594ee755f.

### ------------------EXAMPLE 3--------------------- (SharePoint Server 2013)
```
C:\PS>Start-SPAssignment -Global

C:\PS>$s = Get-SPSite -Identity http://<MyApp>/Sites/Site1

C:\PS>$s.Url

C:\PS>Stop-SPAssignment -Global
```

This example gets the sites specified by the Identity parameter and inserts the results in the variable s

The previous example uses the Global method of assignment collection.
The Global method is easy to use but the contents of this object grows quickly.
Be careful not to run a Get-SPSite command that returns many results while global assignment is enabled.

### ------------------EXAMPLE 3--------------------- (SharePoint Server 2016)
```
C:\PS>Start-SPAssignment -Global

C:\PS>$s = Get-SPSite -Identity http://<MyApp>/Sites/Site1

C:\PS>$s.Url

C:\PS>Stop-SPAssignment -Global
```

This example gets the sites specified by the Identity parameter and inserts the results in the variable s

The previous example uses the Global method of assignment collection.
The Global method is easy to use but the contents of this object grows quickly.
Be careful not to run a Get-SPSite command that returns many results while global assignment is enabled.

### ------------------EXAMPLE 4--------------------- (SharePoint Server 2013)
```
C:\PS>$GC = Start-SPAssignment

C:\PS>$Sites = $GC | Get-SPSite -Filter {$_.Owner -eq "DOMAIN\JDow"} -Limit 50

C:\PS>Stop-SPAssignment $GC
```

This example gets the first 50 sites owned by user DOMAIN\JDow by using a server-side query, and assigns them to a local variable.

This example uses advanced assignment collection methods.

### ------------------EXAMPLE 4--------------------- (SharePoint Server 2016)
```
C:\PS>$GC = Start-SPAssignment

C:\PS>$Sites = $GC | Get-SPSite -Filter {$_.Owner -eq "DOMAIN\JDow"} -Limit 50

C:\PS>Stop-SPAssignment $GC
```

This example gets the first 50 sites owned by user DOMAIN\JDow by using a server-side query, and assigns them to a local variable.

This example uses advanced assignment collection methods.

### ------------------EXAMPLE 5--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWebApplication http://<site name> | Get-SPSite -Limit All |ForEach-Object {$sum=0}{ $sum+=$_.Usage.Storage }{$sum}
```

This example shows a command that returns the sum of the disk space usage for all sites in a given web application.

### ------------------EXAMPLE 5--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWebApplication http://<site name> | Get-SPSite -Limit All |ForEach-Object {$sum=0}{ $sum+=$_.Usage.Storage }{$sum}
```

This example shows a command that returns the sum of the disk space usage for all sites in a given web application.

### ------------------EXAMPLE 6--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite -Identity "http://localserver/(my|personal)/sites" -Regex
```

This example returns all sites that match the given regular expression.

The Quotes on the Identity parameter are required when the Regex parameter is used.

### ------------------EXAMPLE 6--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite -Identity "http://localserver/(my|personal)/sites" -Regex
```

This example returns all sites that match the given regular expression.

The Quotes on the Identity parameter are required when the Regex parameter is used.

### ------------------EXAMPLE 7--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite http://<site name>/sites/teams/* -Limit 100
```

This example gets up to 100 of the sites under the URL http://sitename/sites/teams.

### ------------------EXAMPLE 7--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite http://<site name>/sites/teams/* -Limit 100
```

This example gets up to 100 of the sites under the URL http://sitename/sites/teams.

### ------------------EXAMPLE 8--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite | select url, @{Expression={$_.Usage.Storage}}
```

This example gets the amount of storage used by a site collection, by using the storage field of the .UsageInfo property.

### ------------------EXAMPLE 8--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite | select url, @{Expression={$_.Usage.Storage}}
```

This example gets the amount of storage used by a site collection, by using the storage field of the .UsageInfo property.

### ------------------EXAMPLE 9--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite -Limit all -CompatibilityLevel 14
```

This example returns all SharePoint Server 2010 mode site collections.

### ------------------EXAMPLE 9--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite -Limit all -CompatibilityLevel 14
```

This example returns all SharePoint Server 2010 mode site collections.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the site collection to get.

The type must be a valid URL, in the form, http://server_name or http://server_name/sites/sitename, or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPSitePipeBind
Parameter Sets: AllSitesInIdentity
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ContentDatabase
Specifies the GUID of the content database from which to list site collections.

The type must be a valid database name, in the form, SPContentDB01, or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: AllSitesInContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteSubscription
Specifies the site subscription from which to get site collections.

The type must be a valid URL, in the form, http://server_name or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: AllSitesInSiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CompatibilityLevel
Specifies the version of templates to use when creating a new SPSite object.
This value sets the initial CompatibilityLevel value for the site collection.
The values for this parameter can be either SharePoint Server 2010 or SharePoint Server 2013.
When this parameter is not specified, the CompatibilityLevel will default to the highest possible version for the web application depending on the SiteCreationMode setting.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

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

### -Filter
Specifies the script block of the server-side filter to apply.

The type must be a valid filter name and value in the form {$_PropertyName \<operator\> "filterValue"}.

Valid operators are: EQ, NE, LIKE, NOTLIKE.

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Limits the maximum number of site collections to return.
The default value is 200.

The type must be a valid non-negative number.
Specify ALL to return all site collections for the given scope.

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

### -Regex
When used, the URL provided for the Identity parameter is treated as a regular expression.

```yaml
Type: SwitchParameter
Parameter Sets: AllSitesInIdentity
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL, GUID, or name of the web application from which to list sites.

The type must be a valid URL, in the form, http://server_name, a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh); or the name of the web application (for example, WebApplication1212).

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: AllSitesInWebApplication
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
For more information, type the following command: get-help about_commonparameters

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

### -NeedsB2BUpgrade
{{Fill NeedsB2BUpgrade Description}}

```yaml
Type: SwitchParameter
Parameter Sets: AllSitesInContentDB
Aliases: 
Applicable: SharePoint Server 2016

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

