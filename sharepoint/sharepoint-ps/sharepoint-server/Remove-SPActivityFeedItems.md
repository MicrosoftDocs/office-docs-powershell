---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPActivityFeedItems
schema: 2.0.0
---

# Remove-SPActivityFeedItems

## SYNOPSIS
Removes activity events from the published and consolidated tables.


## SYNTAX

```
Remove-SPActivityFeedItems [-AllItems <Boolean>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-ID <Int64>] -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind> [-SearchText <String>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-SPActivityFeedItems cmdlet to remove an activity event.


## EXAMPLES

### ------------------EXAMPLE------------------
```
$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq
$upaProxy = Get-SPServiceApplicationProxy 1232b6f7-b9ff-99ad-0cd0-fg1g67h981aq
```

This example removes the specific user profile service application.


## PARAMETERS

### -AllItems
Specifies whether to delete events.A value of "1" deletes all events.
A value of "0", no events are deleted.The default value is 0 (zero).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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
Prompts you for confirmation before running the cmdlet.

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

### -ID
Limits events deleted to those which match the specified ActivityEventID.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProfileServiceApplicationProxy
Specifies the proxy of the User Profile Service application that contains the site subscription to delete.The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a service application proxy (for example, UserProfileSvcProxy1); or an instance of a valid SPServiceApplicationProxy object.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchText
Limits events deleted to those which contain SearchText in the string. 

Note that the SearchText will apply to *all* of the XML text saved in SQL representing this activity. The text seen in a browser window may be saved in a different representation in SQL. For example, a ">" feed symbol may be represented as "&gt" text in SQL, so the SearchText should reference “&gt” instead of “>”.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.SharePoint.PowerShell.SPServiceApplicationProxyPipeBind
Microsoft.SharePoint.PowerShell.SPSiteSubscriptionPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
