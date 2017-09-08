---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPProfileLeader

## SYNOPSIS
Returns the current company leaders.

## SYNTAX

```
Get-SPProfileLeader [-ProfileServiceApplicationProxy] <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
```

## DESCRIPTION
This cmdlet was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

Use the Get-SPProfileLeader cmdlet to display the current company leaders.

For additional information about SPProfileLeader cmdlets, see The *-SPProfileLeader Windows PowerShell cmdlets in SharePoint Server 2010 SP1 (http://go.microsoft.com/fwlink/p/?LinkId=226295) (http://go.microsoft.com/fwlink/p/?LinkId=226295).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq

C:\PS>Get-SPProfileLeader -ProfileServiceApplicationProxy $upaProxy
```

This example returns a company leader from the specific user profile service application as indicated by the variable, $upaProxy.

### ----------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq

          C:\PS>Get-SPProfileLeader -ProfileServiceApplicationProxy $upaProxy
```

This example returns a company leader from the specific user profile service application as indicated by the variable, $upaProxy.

## PARAMETERS

### -ProfileServiceApplicationProxy
Specifies the name of the User Profile Service Application Proxy to use.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteSubscription
Specifies the account under which this service should run.
This parameter is mandatory in a hosted-environment and optional in a non-hosted environment.

```yaml
Type: SPSiteSubscriptionPipeBind
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

