---
external help file: 
applicable: SharePoint Online
schema: 2.0.0
---

# Test-SPOSite

## SYNOPSIS
Tests a SharePoint Online site collection.

## SYNTAX

```
Test-SPOSite -Identity <SpoSitePipeBind> [-RuleId <Guid>] [-RunAlways] [<CommonParameters>]
```

## DESCRIPTION
The Test-SPOSite cmdlet runs one or all site collection health checks on the site collection and its contents.
Tests are intended not to make any changes except in repair mode, which can be initiated by running the Repair-SPOSite cmdlet.
This cmdlet reports the rules together with a summary of the results.

You must be a SharePoint Online global administrator to run the Test-SPOSite cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   (SharePoint Online)
```

```

## PARAMETERS

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors]()

[Get-SPOSite]()

[New-SPOSite]()

[Repair-SPOSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/356c9605-5ff4-4545-bb81-27b3b3b63da4(Office.15).aspx)

