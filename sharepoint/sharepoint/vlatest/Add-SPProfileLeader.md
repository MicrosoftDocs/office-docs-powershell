---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Add-SPProfileLeader

## SYNOPSIS
Adds a company leader.

## SYNTAX

```
Add-SPProfileLeader [-ProfileServiceApplicationProxy] <SPServiceApplicationProxyPipeBind>
 [-Name] <SPProfileLeaderPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [-WhatIf]
```

## DESCRIPTION
This cmdlet was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

Use the Add-SPProfileLeader cmdlet to add a user as the company leader.

For additional information about SPProfileLeader cmdlets, see The *-SPProfileLeader Windows PowerShell cmdlets in SharePoint Server 2010 SP1 (http://go.microsoft.com/fwlink/p/?LinkId=226295) (http://go.microsoft.com/fwlink/p/?LinkId=226295).

After you use the Add-SPProfileLeader cmdlet to add a company leader, you have to complete a full crawl of your content sources for the changes to take effect.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------EXAMPLE------------ (SharePoint Server 2013)
```
C:\PS>$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq

C:\PS>Add-SPProfileLeader -ProfileServiceApplicationProxy $upaProxy -Name "contoso\janedow"
```

This example adds a company leader named, Jane Dow.

### ---------EXAMPLE------------ (SharePoint Server 2016)
```
C:\PS>$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq

          C:\PS>Add-SPProfileLeader -ProfileServiceApplicationProxy $upaProxy -Name "contoso\janedow"
```

This example adds a company leader named, Jane Dow.

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

### -Name
Specifies the account name to be added as a leader for the new User Profile Service application.
For example, Contoso\Joe.

```yaml
Type: SPProfileLeaderPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
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

