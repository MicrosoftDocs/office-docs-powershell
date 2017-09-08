---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Request-SPOUpgradeEvaluationSite

## SYNOPSIS
Requests to create a copy of an existing site collection for the purposes of validating the effects of upgrade without affecting the original site.

## SYNTAX

```
Request-SPOUpgradeEvaluationSite [-Confirm] -Identity <SpoSitePipeBind> [-NoEmail] [-NoUpgrade] [-WhatIf]
```

## DESCRIPTION
The Request-SPOUpgradeEvaluationSite cmdlet lets the SharePoint Online global administrator request a copy of an existing site collection for the purposes of validating the effects of upgrade without affecting the original site.

A request for an upgrade evaluation site is not automatically processed.
Instead, it is scheduled to occur on the background when it causes the least effect on the service.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

### (SharePoint Online)
```

```

### (SharePoint Online)
```

```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Identity
{{Fill Identity Description}}

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoUpgrade
{{Fill NoUpgrade Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
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

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Upgrade-SPOSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/bc3114cd-e536-4130-8ce1-3462d652c0e9(Office.15).aspx)

