---
external help file: 
applicable: SharePoint Online
schema: 2.0.0
---

# Remove-SPOSite

## SYNOPSIS
Sends a SharePoint Online site collection to the SharePoint Online Recycle Bin.

## SYNTAX

```
Remove-SPOSite [-Confirm] -Identity <SpoSitePipeBind> [-NoWait] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Remove-SPOSite cmdlet does not delete a site collection from the site collections list permanently.
Instead, the removed site collection is moved to the Recycle Bin.
You can use the Restore-SPODeletedSitecmdlet to restore a site collection from the Recycle Bin.
To delete a site collection permanently, first move the site collection to the Recycle Bin by using the Remove-SPOSite cmdlet, and then delete it from the Recycle Bin by using the Remove-SPODeletedSite cmdlet.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

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

### -NoWait
{{Fill NoWait Description}}

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

[Remove-SPODeletedSite]()

[Restore-SPODeletedSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/751a6f18-4fc1-42f2-a2b3-d58fa9c761fe(Office.15).aspx)

