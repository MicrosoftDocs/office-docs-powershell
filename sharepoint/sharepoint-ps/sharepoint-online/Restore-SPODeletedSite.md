---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/restore-spodeletedsite
applicable: SharePoint Online
title: Restore-SPODeletedSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Restore-SPODeletedSite

## SYNOPSIS

Restores a SharePoint Online deleted site collection from the Recycle Bin.

## SYNTAX

```powershell
Restore-SPODeletedSite -Identity <SpoSitePipeBind> [-NoWait] [<CommonParameters>]
```

## DESCRIPTION

You must be a SharePoint Online administrator or Global Administrator and be a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### ----------------------EXAMPLE-----------------------

```powershell
Restore-SPODeletedSite -Identity https://contoso.sharepoint.com/sites/arecycledsite
```

This example restores a SharePoint Online deleted site collection named "<https://contoso.sharepoint.com/sites/arecycledsite"> from the Recycle Bin.

## PARAMETERS

### -Identity

Specifies the URL of the site collection to restore.

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

Specifies to continue executing script immediately.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPODeletedSite](Get-SPODeletedSite.md)

[Remove-SPODeletedSite](Remove-SPODeletedSite.md)
