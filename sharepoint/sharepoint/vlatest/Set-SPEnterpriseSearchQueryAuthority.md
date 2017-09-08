---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/4985f5e3-c922-45cb-b964-ec169e93f56c(Office.15).aspx
schema: 2.0.0
---

# Set-SPEnterpriseSearchQueryAuthority

## SYNOPSIS
Sets the properties of an authoritative page for a shared search application.

## SYNTAX

```
Set-SPEnterpriseSearchQueryAuthority [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -Identity <AuthorityPagePipeBind> [-Level <Single>] -Owner <SearchObjectOwner>
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf]
```

## DESCRIPTION
The Set-SPEnterpriseSearchQueryAuthority cmdlet updates properties of an authoritative page and adjusts the query rank of an authoritative page.
SPEnterpriseSearchQueryAuthority represents authoritative sites that rank higher in relevance than demoted sites, which are de-emphasized in relevance.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
Set-SPEnterpriseSearchQueryAuthority -Identity http://contoso.com -Level 0.5 -SearchApplication MySSA
```

This example adjusts the authoritative level of the URL http://contoso.com to 0.5 on the search service application named MySSA.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Set-SPEnterpriseSearchQueryAuthority -Identity http://contoso.com -Level 0.5 -SearchApplication MySSA
```

This example adjusts the authoritative level of the URL http://contoso.com to 0.5 on the search service application named MySSA.

## PARAMETERS

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

{{Fill AssignmentCollection Description}} Below Content Applies To: SharePoint Server 2016

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
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before running the cmdlet.
Below Content Applies To: SharePoint Server 2016

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

### -Identity
Below Content Applies To: SharePoint Server 2013

{{Fill Identity Description}} Below Content Applies To: SharePoint Server 2016

Specifies the query authority page to update.

The type must be a valid URL, in the form http://server_name; or an instance of a valid AuthorityPage object.

```yaml
Type: AuthorityPagePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Level
Below Content Applies To: SharePoint Server 2013

{{Fill Level Description}} Below Content Applies To: SharePoint Server 2016

Specifies the level of the new authoritative page.
Authoritative pages, designated by the service application administrator, are expert pages that link to the most relevant information.
Because a search service application can have several designated authoritative pages, you use the Level property to specify the value of a specific page.
This parameter sets the level for the most valuable authoritative pages to 0.

The type must be one of the following floating-point numbers: 0, 1, or 2.

```yaml
Type: Single
Parameter Sets: (All)
Aliases: l

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Below Content Applies To: SharePoint Server 2013

{{Fill Owner Description}} Below Content Applies To: SharePoint Server 2016

Specifies the search object owner that defines the scope at which the corresponding Query Authority is created.The owner must be one of the following valid levels:- Search Service Application- Site Subscription

```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Below Content Applies To: SharePoint Server 2013

{{Fill SearchApplication Description}} Below Content Applies To: SharePoint Server 2016

Specifies the search application that contains the authority page collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: SharePoint Server 2013

Shows what would happen if the cmdlet runs.
The cmdlet is not run.
Below Content Applies To: SharePoint Server 2016

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

[Online Version](http://technet.microsoft.com/EN-US/library/4985f5e3-c922-45cb-b964-ec169e93f56c(Office.15).aspx)

