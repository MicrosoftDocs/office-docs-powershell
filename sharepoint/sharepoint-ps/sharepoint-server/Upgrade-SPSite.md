---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/upgrade-spsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Upgrade-SPSite
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Upgrade-SPSite

## SYNOPSIS
Starts the upgrade process on a site collection.

## SYNTAX

```
Upgrade-SPSite [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Email] [-QueueOnly] [-Unthrottled] [-VersionUpgrade] [-WhatIf] [-Priority <Byte>] [<CommonParameters>]
```

## DESCRIPTION
The `Upgrade-SPSite` cmdlet starts the upgrade process on a site collection.

The `Upgrade-SPSite` cmdlet activates the upgrade process for the specified SPSite object.
You can also use this cmdlet to resume failed upgrades.
When you use this cmdlet to initiate upgrade on an SPSite object, the object can be either a build-to-build or version-to-version upgrade.

By default, the `Upgrade-SPSite` cmdlet operates as a build-to-build upgrade.
This prevents unexpected version upgrades of site collections if you use this cmdlet after a patching operation.
When in version-to-version upgrade mode, site collection health checks are run in repair mode to ensure that the site collection is healthy enough to upgrade successfully.
If successful, the remainder of the upgrade occurs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -------------EXAMPLE 1----------
```
Upgrade-SPSite https://<site name>/sites/testsite
```

This example upgrades the existing https://\<site name\>/sites/testsite site collection by using only build-to-build upgrade actions.
The SPSite.CompatibilityLevel will not be changed by this operation.

### -------------EXAMPLE 2----------
```
Upgrade-SPSite https://<site name>/sites/testsite -VersionUpgrade
```

This example upgrades the existing https://\<site name\>/sites/testsite site collection by using only build-to-build upgrade actions.
The SPSite.CompatibilityLevel will not be changed by this operation.

## PARAMETERS

### -Identity
Specifies the SPSite object to run upgrade operations against.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Email
Specifies whether to send mail on completion of the site collection upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueOnly
Specifies to put the site into the queue for a delayed upgrade that is managed by a timer job. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Unthrottled
Specifies a farm administrator to bypass the throttle which permits a site collection to be upgraded even if there are "too many" site collections in the throttle to be upgraded.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VersionUpgrade
Specifies to perform a version-to-version upgrade on the SPSite object.
When this parameter is set, it internally triggers all available build-to-build actions that are associated with the current site collection operating mode.
Version-to-version actions follow to bring site collections to the next site collection operating mode inclusive of all new build-to-build actions that are associated with the new site collection operating mode.
When this parameter is not set, it triggers only available build-to-build upgrade actions that are associated with the current site collection operating mode.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Specifies what priority to upgrade the site.

The valid values are:

* 128 - 255 (Low Priority)

* 11 - 127 (Normal Priority)

* 0 - 10 (High Priority)

```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
