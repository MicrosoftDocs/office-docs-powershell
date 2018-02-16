---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Add-SPSiteSubscriptionProfileConfig
schema: 2.0.0
---

# Add-SPSiteSubscriptionProfileConfig

## SYNOPSIS
Adds a new site subscription to a User Profile Service application.

## SYNTAX

### Default
```
Add-SPSiteSubscriptionProfileConfig [-Identity] <SPSiteSubscriptionPipeBind>
 [-MySiteHostLocation <SPSitePipeBind>] -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-SynchronizationOU <String>] [-WhatIf]
 [<CommonParameters>]
```

### MySiteSettings
```
Add-SPSiteSubscriptionProfileConfig [-Identity] <SPSiteSubscriptionPipeBind>
 -MySiteHostLocation <SPSitePipeBind> -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-MySiteManagedPath <SPPrefixPipeBind>]
 [-SiteNamingConflictResolution <String>] [-SynchronizationOU <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Add-SPSiteSubscriptionProfileConfig cmdlet adds a new site subscription to a User Profile Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE------------------
```
C:\PS>#Get UPA Proxy
          $pr = Get-SPServiceApplicationProxy | ? {$_.DisplayName.Contains(PartitionedUserProfileApplication_Proxy)}

          C:\PS>#Add tenant to UPA
          Add-SPSiteSubscriptionProfileConfig -Identity $sub -ProfileServiceApplicationProxy $pr -MySiteHostLocation http://contoso/my

          C:\PS>#Create new site subscription
          $sub = New-SPSiteSubscription
```

This example creates a new User Profile Service application tenant.

## PARAMETERS

### -Identity
Specifies the proxy of the User Profile Service application to add the site subscription to.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a User Profile Service application proxy (for example, UserProfileSvcProxy1); or an instance of a valid SPServiceApplicationProxy object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MySiteHostLocation
Specifies the site collection where the My Site host for the site subscription is provisioned.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSitePipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ProfileServiceApplicationProxy
Specifies the identifier for the User Profile Service Application proxy where the tenant is to be created.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
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

### -MySiteManagedPath
Specifies the managed path where personal sites will be created.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: SPPrefixPipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteNamingConflictResolution
Specifies the format to use to name personal sites.

Use one of the following integer values:

1   Personal site collections are to be named based on user names without any conflict resolution.
For example, http://portal_site/location/username/

2   Personal site collections are to be based on user names with conflict resolution by using domain names.
For example, .../username/ or .../domain_username/

3   Personal site collections are to be named by using domain and user name always, to avoid any conflicts.
For example, http://portal_site/location/domain_username/

The default value is 1 (do not resolve conflicts).

```yaml
Type: String
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SynchronizationOU
Specifies the organizational unit serving the site subscription.

The type must be a valid name of an organizational unit; for example, OrgUnit1.

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

