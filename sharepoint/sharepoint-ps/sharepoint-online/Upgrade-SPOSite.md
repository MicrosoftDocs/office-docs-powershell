---
external help file: 
applicable: SharePoint Online
title: Upgrade-SPOSite
schema: 2.0.0
---

# Upgrade-SPOSite

## SYNOPSIS
Starts the upgrade process on a site collection.


## SYNTAX

```
Upgrade-SPOSite [-Confirm] -Identity <SpoSitePipeBind> [-NoEmail] [-QueueOnly] [-VersionUpgrade] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Upgrade-SPOSite` cmdlet activates the upgrade process for the specified SharePoint Online site collection.
This cmdlet can also be used to resume failed upgrades.

When upgrade is initiated, it can either be a build-to-build or version-to-version upgrade.
The default is build-to-build upgrade.
When in version-to-version upgrade, site collection health checks are first run in repair mode to ensure that the site collection can be upgraded successfully.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Upgrade-SPOSite -Identity https://contoso.sharepoint.com/sites/marketing
```

Example 1 runs a build-to-build upgrade of the existing site collection https://contoso.sharepoint.com/sites/marketing. The CompatibilityLevel property associated with the site collection is not changed by this operation. For more information about CompatibilityLevel, see `New-SPOSite`.

### -----------------------EXAMPLE 2-----------------------------
```
Upgrade-SPOSite -Identity https://contoso.sharepoint.com/sites/marketing -VersionUpgrade
```

Example 2 runs a version-to-version upgrade of the existing site collection https://contoso.sharepoint.com/sites/marketing. The CompatibilityLevel property associated with the site collection is changed to a value of SharePoint 2013 by this operation. For more information about CompatibilityLevel, see `New-SPOSite`.


## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the SharePoint Online site collection to upgrade.


```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NoEmail
Specifies that the system not send the requester and site collection administrators a notification e-mail message at the end of the upgrade process.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueOnly
Adds the site collection to the upgrade queue. The upgrade does not occur immediately.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VersionUpgrade
Specifies whether to perform a version-to-version upgrade on the site collection. When this parameter is set, it internally triggers any available build-to-build upgrade associated with the current site collection operating mode and continues with version-to-version upgrade. When this parameter is not set, it triggers only build-to-build upgrade on the site collection.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

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

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Request-SPOUpgradeEvaluationSite](Request-SPOUpgradeEvaluationSite.md)

[New-SPOSite](New-SPOSite.md)
