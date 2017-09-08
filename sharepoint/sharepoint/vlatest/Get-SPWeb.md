---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPWeb

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPWeb [[-Identity] <SPWebPipeBind>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Filter <ScriptBlock>] [-Limit <String>] [-Regex] [-Site <SPSitePipeBind>] [-WhatIf]
```

## DESCRIPTION
The Get-SPWeb cmdlet returns all subsites that match the scope given by the Identity parameter.
All subsites that meet the criteria are returned.

The Identity can be either the full URL or a relative path.
If you specify a relative path, you must also specify the Site parameter to identify the site collection from which to return the subsite.

The Identity parameter also supports providing a partial URL that ends in a wildcard character (*).
All subsites that match this partial URL for the specified scope are returned.
Additionally, if the Regex parameter is provided, the Identity parameter is treated as a regular expression and any subweb with a URL provided in the given scope that matches the expression is returned.

The Filter parameter is a server-side filter for certain subsite properties that are stored in the content database; without the Filter parameter, filtering on these properties is a slow process. 
These subsite properties are Template and Title.
The Filter parameter is a script block that uses the same syntax as a Where-Object statement, but is run server-side for faster results.

It is important to note that every site collection returned by the Get-SPWeb cmdlet is automatically disposed of at the end of the pipeline.
To store the results of Get-SPWeb in a local variable, the Start-SPAssignment and Stop-SPAssignment cmdlets must be used to avoid memory leaks.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE 1---------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWeb -site http://sitename/sites/site1
```

This example returns all the subwebs in a given site collection.

### --------------------EXAMPLE 1---------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWeb -site http://sitename/sites/site1
```

This example returns all the subwebs in a given site collection.

### --------------------EXAMPLE 2---------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWeb -Site http://sitename/sites/site1  -filter {$_.Template -eq "STS#0"}
```

This example displays all subsites that use the "STS#0" template.

### --------------------EXAMPLE 2---------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWeb -Site http://sitename/sites/site1  -filter {$_.Template -eq "STS#0"}
```

This example displays all subsites that use the "STS#0" template.

### --------------------EXAMPLE 3---------------------- (SharePoint Server 2013)
```
C:\PS>Start-SPAssignment -Global

C:\PS>$w = Get-SPWeb http://sitename

C:\PS>$w.set_SiteLogoUrl("http://PathToImage/test.jpg")

C:\PS>$w.Update()

C:\PS>Stop-SPAssignment -Global
```

This example demonstrates how to save a subsite as a variable and to call object model methods on the SPAssignment object.

### --------------------EXAMPLE 3---------------------- (SharePoint Server 2016)
```
C:\PS>Start-SPAssignment -Global

C:\PS>$w = Get-SPWeb http://sitename

C:\PS>$w.set_SiteLogoUrl("http://PathToImage/test.jpg")

C:\PS>$w.Update()

C:\PS>Stop-SPAssignment -Global
```

This example demonstrates how to save a subsite as a variable and to call object model methods on the SPAssignment object.

## PARAMETERS

### -Identity
Specifies the name or full or partial URL of the subsite.
If you use a relative path, you must specify the Site parameter.

A valid URL in the form http://server_name or a relative path in the form of /SubSites/MySubSite.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Specifies the server-side filter to use for the specified scope.

The type must be a valid filter in the form {filterName \<operator\> "filterValue"}.

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Limits the maximum number of subsites to return.
The default value is 200.
To return all sites, enter ALL

The type must be a valid number greater than 0 or ALL.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Regex
Specifies the URL that is provided by the Identity parameter is treated as a regular expression.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the URL or GUID of the site collection from which to list subsites.

The type must be a valid URL, in the form  of http://server_name; a GUID, in the form 1234-5678-9807, or an SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

