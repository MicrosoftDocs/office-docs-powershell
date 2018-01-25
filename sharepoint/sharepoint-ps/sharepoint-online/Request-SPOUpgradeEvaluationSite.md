---
external help file: 
applicable: SharePoint Online
title: Request-SPOUpgradeEvaluationSite
schema: 2.0.0
---

# Request-SPOUpgradeEvaluationSite

## SYNOPSIS
Requests to create a copy of an existing site collection for the purposes of validating the effects of upgrade without affecting the original site.


## SYNTAX

```
Request-SPOUpgradeEvaluationSite [-Confirm] -Identity <SpoSitePipeBind> [-NoEmail] [-NoUpgrade] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Request-SPOUpgradeEvaluationSite` cmdlet lets the SharePoint Online global administrator request a copy of an existing site collection for the purposes of validating the effects of upgrade without affecting the original site.

A request for an upgrade evaluation site is not automatically processed.
Instead, it is scheduled to occur on the background when it causes the least effect on the service.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Request-SPOUpgradeEvaluationSite http://contoso.sharepoint.com/sites/marketing
```
Example 1 requests a site upgrade evaluation for the marketing site http://contoso.sharepoint.com/sites/marketing using the default options of sending an email message and automatically trying to upgrade the evaluation site.


### -----------------------EXAMPLE 2-----------------------------
```
Request-SPOUpgradeEvaluationSite http://contoso.sharepoint.com/sites/marketing -NoEmail $true -NoUpgrade $true
```
This example requests a site upgrade evaluation for the marketing site http://contoso.sharepoint.com/sites/marketing. It specifies to not send email messages and not automatically try upgrade of the evaluation site. By using the cmdlet in this way, a SharePoint Online global administrator can make changes to the upgrade evaluation site before starting the actual upgrade.


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
Specifies the SharePoint Online site collection for which you want to request a copy for the new Upgrade or Evaluation site collection.


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
Specifies that the system not send the requester and site collection administrators an email message at the end of the upgrade evaluation site creation process.


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

### -NoUpgrade
Specifies that the system not perform an upgrade as part of the evaluation site creation process.


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

[Upgrade-SPOSite](Upgrade-SPOSite.md)
