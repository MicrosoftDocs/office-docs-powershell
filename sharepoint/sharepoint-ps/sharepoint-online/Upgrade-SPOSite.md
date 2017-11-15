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

### -----------EXAMPLE---------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


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
{{Fill Identity Description}}

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
{{Fill NoEmail Description}}

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
{{Fill QueueOnly Description}}

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
{{Fill VersionUpgrade Description}}

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

[Request-SPOUpgradeEvaluationSite]()

[New-SPOSite]()
