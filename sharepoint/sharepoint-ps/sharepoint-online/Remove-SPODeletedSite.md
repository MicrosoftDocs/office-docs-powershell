---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spodeletedsite
applicable: SharePoint Online
title: Remove-SPODeletedSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
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

You must be a SharePoint Administrator or Global Administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251832 (https://go.microsoft.com/fwlink/p/?LinkId=251832).

**Note**: As of today, the modern admin center UI does not allow permanent deletion of group connected site, but the use of this cmdlet does allow the deletion, but when this occurs it does not delete the associated group, just the site.



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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Remove-SPOSite](Remove-SPOSite.md)

[Get-SPODeletedSite](Get-SPODeletedSite.md)
