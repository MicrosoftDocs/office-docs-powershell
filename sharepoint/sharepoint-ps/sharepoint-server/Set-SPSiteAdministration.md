---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPSiteAdministration
schema: 2.0.0
---

# Set-SPSiteAdministration

## SYNOPSIS
Allows farm administrators to configure any site collection.


## SYNTAX

### SiteSubscription
```
Set-SPSiteAdministration [-Identity] <SPSiteAdministrationPipeBind>
 [-AdministrationSiteType <SPAdministrationSiteType>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-SiteSubscription <SPSiteSubscriptionPipeBind>] [-WhatIf] [<CommonParameters>]
```

### Default
```
Set-SPSiteAdministration [-Identity] <SPSiteAdministrationPipeBind>
 [-AdministrationSiteType <SPAdministrationSiteType>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-LockState <String>] [-MaxSize <Int64>] [-OwnerAlias <SPUserPipeBind>]
 [-SecondaryOwnerAlias <SPUserPipeBind>] [-Template <SPWebTemplatePipeBind>] [-WarningSize <Int64>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPSiteAdministration` cmdlet allows a farm administrator to configure particular settings on a site collection even if the farm administrator is not granted explicit permissions.
Any parameter that is not provided is not changed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
C:\PS>Set-SPSiteAdministration http://sitename -OwnerAlias "DOMAIN\NewOwner"
```

This example allows farm administrators to change the ownership of a site collection to which they do not have access.


## PARAMETERS

### -Identity
Specifies the URL (full or partial) or GUID of the site collection.

The type must be a valid URL, in the form http://server_name, or a GUID, in the form 1234-456-987fg.

```yaml
Type: SPSiteAdministrationPipeBind
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
Specifies the lock state for the given site collection.

The type must be any of the following values:

- Unlock: Sets the site collection to unlock.
- Content: No new content can be added. Updates and deletions are allowed.
- Readonly: Sets the site collection to read-only.
- Noaccess: Sets the site collection to unavailable to all users.

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
Sets the maximum storage size of the site collection.

The type must be a valid number greater than or equal to 0.

Set to 0 for unlimited.


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
Sets the owner of this site collection.

The type must be a valid user alias.

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

### -SecondaryOwnerAlias
Sets the secondary owner of this site collection.

The type must be a valid user alias.

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
Specifies the Web template for the top-level Web site of this site collection.
This can only be given if the template has not already been configured.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890abcdef, or an SPWebTemplate object.

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

### -WarningSize
Specifies the site collection warning size limit.

The type must be a valid number greater than or equal to 0.
Set to 0 for unlimited.

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
