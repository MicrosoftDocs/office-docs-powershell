---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPSiteAdministration

## SYNOPSIS

Returns a site administration object that allows farm administrators to view certain information about site collections to which they might not have access.



## SYNTAX

### AllSitesInIdentity
```
Get-SPSiteAdministration [-Identity] <SPSiteAdministrationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>] [-Regex]
 [-WhatIf] [<CommonParameters>]
```

### AllSitesInContentDB
```
Get-SPSiteAdministration -ContentDatabase <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>]
 [-WhatIf] [<CommonParameters>]
```

### AllSitesInSiteSubscription
```
Get-SPSiteAdministration -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Filter <ScriptBlock>] [-Limit <String>]
 [-WhatIf] [<CommonParameters>]
```

### AllSitesInWebApplication
```
Get-SPSiteAdministration [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Filter <ScriptBlock>]
 [-Limit <String>] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPSiteAdminitration cmdlet returns a site administration object that allows farm administrators to view certain information about site collections to which they might not have access.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>Get-SPSiteAdministration | Select -Property Url, OwnerLoginName, @{Name="Storage";Expression={$_.Quota.StorageMaximumLevel}}
```

This example gets a subset of data from all of the sites in the content database with the URL b399a366-d899-4cff-8a9b-8c0594ee755f (farm administrator does not require access).
This command uses the calculated property Storage to display the maximum storage value for the content database.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Start-SPAssignment -Global
$s = Get-SPSiteAdministration -Identity http://MyApp/Sites/Site1
$s.Url
Stop-SPAssignment -Global
```

This example gets the site collections specified by the Identity parameter and inserts the results into the variable s.
This example uses the Global method of garbage collection.
This method is easier to use but grows quickly.
Do not run a Get-SPSite command that returns many results while global assignment is on.

### ------------------EXAMPLE 3-------------------
```
C:\PS>$GC = Start-SPAssignment
$Sites = $GC | Get-SPSiteAdministration -Filter {$_.Owner -eq "DOMAIN\JDoe"} -Limit 50
Stop-SPAssignment $GC
```

This example gets the first 50 sites owned by user DOMAIN\JDoe by using a server-side query, and assigns the returned sites to a local variable.
This command uses advanced assignment collection methods.

### ------------------EXAMPLE 4------------------ 
```
C:\PS>Get-SPWebApplication http://sitename | Get-SPSiteAdministration -Limit All |ForEach-Object {$sum=0}{ $sum+=$_.DiskUsed }{$sum}
```

This command returns the sum of the disk space usage for all sites in the specified Web application.

### ------------------EXAMPLE 5------------------ 
```
C:\PS>Get-SPWebApplication http://sitename | Get-SPSiteAdministration -Limit ALL | Select URL
```

This example gets the URLs for all site collections in a Web application.

### ------------------EXAMPLE 6------------------ 
```
C:\PS>Get-SPSiteAdministration -identity "http://localserver/(my|personal)/sites" -Regex
```

This example returns all sites that match the given regular expression.
The quotation marks around the value specified for the Identity parameter are required when using the Regex flag.

### ------------------EXAMPLE 7------------------ 
```
C:\PS>Get-SPSite "http://sitename/sites/teams/*" -Limit 100
```

This example gets up to 100 of the sites under the URL http://sitename/sites/teams.

## PARAMETERS

### -Identity
Specifies the URL (full or partial) or GUID of the site collection to retrieve.

The type must be a valid URL, in the form http://server_name, or a GUID, in the form 1234-456-987fg.

```yaml
Type: SPSiteAdministrationPipeBind
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
Specifies the URL (full or partial) or GUID of the site collection to retrieve.

The type must be a valid URL, in the form http://server_name, or a GUID, in the form, 1234-456-987fg.

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
Specifies the site group from which to get site collections.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; an SPSite (object or URL) of a site collection that is a member of the site subscription; or an instance of a valid SiteSubscription object.

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

### -Filter
Specifies the script block of the server-side filter to apply.

The type must be a valid filter name and a value in the form { $_ PropertyName \<operator \> "filterValue"}}

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
Provide ALL to return all site collections for the given scope.

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
Enabling this switch causes the URL provided for the Identity parameter to be treated as a regular expression.

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
Specifies the URL, GUID, or name of the Web application from which to list sites.

The type must be a valid URL, in the form http://server_name; a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh); or the Web application name (for example, WebApplication1212).

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

