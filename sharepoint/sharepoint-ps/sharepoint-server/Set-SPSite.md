---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPSite
schema: 2.0.0
---

# Set-SPSite

## SYNOPSIS
Configures the specified sites.


## SYNTAX

### SiteSubscription
```
Set-SPSite [-Identity] <SPSitePipeBind> [-AdministrationSiteType <SPAdministrationSiteType>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [-WhatIf] [<CommonParameters>]
```

### Default
```
Set-SPSite [-Identity] <SPSitePipeBind> [-AdministrationSiteType <SPAdministrationSiteType>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-LockState <String>] [-MaxSize <Int64>]
 [-OwnerAlias <SPUserPipeBind>] [-QuotaTemplate <SPQuotaTemplatePipeBind>]
 [-SecondaryOwnerAlias <SPUserPipeBind>] [-SharingType <String>] [-Template <SPWebTemplatePipeBind>]
 [-Url <String>] [-UserAccountDirectoryPath <String>] [-WarningSize <Int64>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPSite` cmdlet configures the site collection that is specified by the Identity parameter.
If a parameter is not used, the value is not changed.

The QuotaTemplate parameter is mutually exclusive to the MaxSize parameter and WarningSize parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
C:\PS>Get-SPSite http://sitename/sites/teams/* | Set-SPSite -SecondaryOwner "DOMAIN\Jdoe"
```

This example sets the secondary owner on a set of site collections to DOMAIN\Jdoe.


### --------------------EXAMPLE 2---------------------
```
C:\PS>Set-SPSite -identity "http://sitename" -MaxSize 4000000 -WarningSize 2000000
```

This example configures the Quota settings for the site collection http://sitename.


## PARAMETERS

### -Identity
Specifies the URL or GUID of the site collection to configure, or refers to an SPSite object that contains sites to configure.

The type must be a valid URL, in the form http://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AdministrationSiteType
Specifies the site type.

Valid values are None or TentantAdministration.

```yaml
Type: SPAdministrationSiteType
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
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

### -Force
Suppresses confirmation messages involved in setting the site subscription.
This parameter is used in conjunction with the SiteSubscription parameter.

```yaml
Type: SwitchParameter
Parameter Sets: SiteSubscription
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockState
Sets the lock state of this site collection.
The valid lock states are

Unlock   Unlocks the site collection and makes it available to users

NoAdditions   Prevents users from adding new content to the site collection.
Updates and deletions are still allowed

ReadOnly   Prevents users from adding, updating, or deleting content.

NoAccess   Prevents access to content completely.
Users who attempt to access the site receive an access-denied message.

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSize
Sets the maximum storage size for the site collection in bytes.

The integer value must be larger than the WarningSize value.
You cannot use this parameter if the site collection is using a quota template.

```yaml
Type: Int64
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwnerAlias
Specifies the alias name of the site collection administrator.

The type must be a valid e-mail alias, in the form domain\username.

```yaml
Type: SPUserPipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuotaTemplate
Specifies the new quota template for this site collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890abcdef or a string

```yaml
Type: SPQuotaTemplatePipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryOwnerAlias
Sets the alias of the secondary site collection administrator.

The type must be a valid e-mail alias, in the form domain\username.

```yaml
Type: SPUserPipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingType
Specifies whether external access a site collection should be disabled, limited to external users only, or enabled for external users and anonymous guests.

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
Specifies the Site Group to get site collections.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: SiteSubscription
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
Specifies the template for this site collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890abcdef.

```yaml
Type: SPWebTemplatePipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the URL of the new site.

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccountDirectoryPath
Sets an organization unit to which to scope user accounts.

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WarningSize
Sets the storage warning level for the site collection in bytes.

The integer value must be between 0 and the MaxSize value.
You cannot use this parameter if the site collection is using a quota template.

```yaml
Type: Int64
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

## OUTPUTS

## NOTES

## RELATED LINKS
