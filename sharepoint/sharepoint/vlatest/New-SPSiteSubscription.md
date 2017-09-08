---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPSiteSubscription

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
New-SPSiteSubscription [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The New-SPSiteSubscription cmdlet creates a new subscription to which the SPSites object can belong. 
Sites that are members of a site subscription can share settings and configuration information.
A site collection can be a member of only one site subscription and, once set, cannot be changed.

Site subscriptions are not persisted in a database until used in conjunction with either an SPSite or the Site Subscription Settings Service.
After a site subscription is applied to any site collection in the farm, the site subscription can be retrieved by using the Get-SPSiteSubscription cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>New-SPSiteSubscription |%{ New-SPSite http://contoso.com/sites/admin -SiteSubscription $_ -Template "TenantAdmin#0"}

C:\PS>
```

This example creates a new site subscription and applies it to a new Tenant Administration site collection.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>New-SPSiteSubscription |%{ New-SPSite http://contoso.com/sites/admin -SiteSubscription $_ -Template "TenantAdmin#0"}

C:\PS>
```

This example creates a new site subscription and applies it to a new Tenant Administration site collection.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>$s = New-SPSiteSubscription

C:\PS>Get-SPSite http://sitename | Set-SPSite -SiteSubscription $s

C:\PS>Set-SPSite http://sitename -SiteSubscription {New-SPSiteSubscription}
```

This example adds a new subscription to an existing site collection at http://sitename.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>$s = New-SPSiteSubscription

C:\PS>Get-SPSite http://sitename | Set-SPSite -SiteSubscription $s

C:\PS>Set-SPSite http://sitename -SiteSubscription {New-SPSiteSubscription}
```

This example adds a new subscription to an existing site collection at http://sitename.

## PARAMETERS

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

