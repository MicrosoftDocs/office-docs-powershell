---
external help file: 
applicable: SharePoint Online
title: Remove-SPODeletedSite
schema: 2.0.0
---

# Remove-SPODeletedSite

## SYNOPSIS
Removes a SharePoint Online deleted site collection from the Recycle Bin.


## SYNTAX

```
Remove-SPODeletedSite [-Confirm] -Identity <SpoSitePipeBind> [-NoWait] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPODeletedSite` cmdlet permanently removes a SharePoint Online deleted site collection from the Recycle Bin.

You have to be a SharePoint Online global administrator and site collection administrator permissions to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
Remove-SPODeletedSite -Identity https://contoso.sharepoint.com/sites/sitetoremove
```
This example removes a SharePoint Online deleted site collection named https://contoso.sharepoint.com/sites/sitetoremove from the Recycle Bin and deletes it permanently.


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
Specifies the URL of the site collection to remove.

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
PARAMVALUE: SwitchParameter

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

[Remove-SPOSite](Remove-SPOSite.md)

[Get-SPODeletedSite](Get-SPODeletedSite.md)
