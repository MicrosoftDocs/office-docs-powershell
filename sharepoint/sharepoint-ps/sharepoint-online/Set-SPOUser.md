---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spouser
applicable: SharePoint Online
title: Set-SPOUser
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOUser

## SYNOPSIS
Configures properties on an existing user.


## SYNTAX

```
Set-SPOUser -IsSiteCollectionAdmin <Boolean> -LoginName <String> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPOUser` cmdlet to configure properties of an existing user.
That is, to add or remove a user as a SharePoint Online site collection administrator.

You must have the SharePoint Online Administrator or Global Administrator role to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251832 (https://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
Set-SPOUser -Site https://contoso.sharepoint.com/sites/marketing -LoginName melissa.kerr@contoso.com -IsSiteCollectionAdmin $true
```
This example makes melissa.kerr@contoso.com a SharePoint Online site collection administrator on https://contoso.sharepoint.com/sites/marketing.


## PARAMETERS

### -IsSiteCollectionAdmin
Specifies whether the user is a site collection administrator.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginName
Specifies the user name.


```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the full URL of the site collection. It must be in a valid managed path in the company’s site.


```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
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

[Get-SPOUser](Get-SPOUser.md)
