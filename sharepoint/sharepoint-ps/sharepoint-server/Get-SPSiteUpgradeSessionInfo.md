---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPSiteUpgradeSessionInfo
schema: 2.0.0
---

# Get-SPSiteUpgradeSessionInfo

## SYNOPSIS

Manage or report site upgrade.



## SYNTAX

### ContentDB
```
Get-SPSiteUpgradeSessionInfo -ContentDatabase <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-HideWaiting] [-ShowCompleted] [-ShowFailed]
 [-ShowInProgress] [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

### Site
```
Get-SPSiteUpgradeSessionInfo -Site <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPSiteUpgradeSessionInfo cmdlet to manage or report site upgrade of the farm.

This cmdlet has two modes, get upgrade information for a specific SPSite object or for a given content database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------EXAMPLE 1---------- 
```
C:\PS>$db = Get-SPContentDatabase -Identity wss_content

PS C:\>Get-SPSiteUpgradeSessionInfo -ContentDatabase $db
```

This example returns siteupgradeinfo for every SPContentDatabase returned from Get-SPContentDatabase cmdlet.

### -----------EXAMPLE 2---------- 
```
C:\PS>$site=Get-SPSite -Identity http://localhost

PS C:\>Get-SPSiteUpgradeSessionInfo -Site $site
```

This example returns siteupgradeinfo for every SPSite object returned from Get-SPSite cmdlet.

## PARAMETERS

### -ContentDatabase
Specifies the GUID of the content database from which to list site collections.The type must be a valid database name, in the form  SPContentDB01, or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
```yaml
Type: SPSitePipeBind
Parameter Sets: Site
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -HideWaiting
Specifies to hide site collections that upgrade has not started.

```yaml
Type: SwitchParameter
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowCompleted
Specifies to show site collections that has completed upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowFailed
Specifies to show site collections that have failed upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowInProgress
Displays site collections that are in the process of being upgraded.

```yaml
Type: SwitchParameter
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
Specifies to limit the result to site collections within the site subscription.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: ContentDB
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

[Remove-SPSiteUpgradeSessionInfo](Remove-SPSiteUpgradeSessionInfo.md)

