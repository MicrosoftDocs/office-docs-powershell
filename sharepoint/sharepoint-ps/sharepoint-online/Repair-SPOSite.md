---
external help file: 
applicable: SharePoint Online
title: Repair-SPOSite
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
The `Repair-SPOSite` cmdlet runs one or all site collection health checks on the site collection and its contents.
This cmdlet will make changes if issues are found and automatically repairable.

The cmdlet reports the health check rules with a summary of the results.
The rules might not support automatic repair.
Tests without repair mode can be initiated by running the `Test-SPOSite` cmdlet.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Repair-SPOSite https://contoso.sharepoint.com/sites/marketing
```

This example runs all the site collection health checks in repair mode on the https://contoso.sharepoint.com/sites/marketing site collection.

### -----------------------EXAMPLE 2-----------------------------
```
Repair-SPOSite https://contoso.sharepoint.com/sites/marketing -RuleID "ee967197-ccbe-4c00-88e4-e6fab81145e1"
```

This example runs the Missing Galleries Check rule in repair mode on the https://contoso.sharepoint.com/sites/marketing site collection.


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
Specifies the SharePoint Online site collection on which to run the repairs.


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
Specifies a health check rule to run.


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
Displays a message that explains the effect of the command instead of executing the command.


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

[Test-SPOSite](Test-SPOSite.md)
