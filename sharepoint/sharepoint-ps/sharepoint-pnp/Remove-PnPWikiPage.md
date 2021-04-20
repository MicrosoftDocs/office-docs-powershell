---
Module Name: PnP.PowerShell
title: Remove-PnPWikiPage
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPWikiPage.html
---
 
# Remove-PnPWikiPage

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPWikiPage.md to change this file.

Removes a wiki page

## SYNTAX

### SERVER
```powershell
Remove-PnPWikiPage [-ServerRelativePageUrl] <String> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

### SITE
```powershell
Remove-PnPWikiPage [-SiteRelativePageUrl] <String> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Remove-PnPWikiPage -PageUrl '/pages/wikipage.aspx'
```

Removes the page '/pages/wikipage.aspx'

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerRelativePageUrl

```yaml
Type: String
Parameter Sets: SERVER
Aliases: PageUrl

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteRelativePageUrl

```yaml
Type: String
Parameter Sets: SITE

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

