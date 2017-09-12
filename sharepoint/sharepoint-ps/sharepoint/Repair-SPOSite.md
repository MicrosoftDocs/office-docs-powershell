---
external help file: 
applicable: SharePoint Online
schema: 2.0.0
---

# Repair-SPOSite

## SYNOPSIS
Checks and repairs the site collection and its contents.

## SYNTAX

```
Repair-SPOSite [-Confirm] -Identity <SpoSitePipeBind> [-RuleId <Guid>] [-RunAlways] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Repair-SPOSite cmdlet runs one or all site collection health checks on the site collection and its contents.
This cmdlet will make changes if issues are found and automatically repairable.

The cmdlet reports the health check rules with a summary of the results.
The rules might not support automatic repair.
Tests without repair mode can be initiated by running the Test-SPOSite cmdlet.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   (SharePoint Online)
```

```

###   (SharePoint Online)
```

```

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

### -RuleId
{{Fill RuleId Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunAlways
{{Fill RunAlways Description}}

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

[Test-SPOSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/6ef179d0-ed05-47c2-bb0c-0fd65b13c79e(Office.15).aspx)

