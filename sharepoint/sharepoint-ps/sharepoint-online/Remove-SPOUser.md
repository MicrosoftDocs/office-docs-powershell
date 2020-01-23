---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spouser
applicable: SharePoint Online
title: Remove-SPOUser
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOUser

## SYNOPSIS

Removes a user or a security group from a site collection or a group.

## SYNTAX

```powershell
Remove-SPOUser [-Group <String>] -LoginName <String> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

You must be a SharePoint Online global administrator and a site collection administrator to run the `Remove-SPOUser` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at <https://go.microsoft.com/fwlink/p/?LinkId=251832> (<https://go.microsoft.com/fwlink/p/?LinkId=251832).>

## EXAMPLES

### -----------------------EXAMPLE-----------------------------

```powershell
Remove-SPOUser -Site https://contoso.sharepoint.com/sites/sc1 -LoginName joe.healy@contoso.com -Group "SC1 Owners"
```

This example removes a user who has the email address joe.healy@contoso.com from the group SC1 Owners in the site collection <https://contoso.sharepoint.com/sites/sc1.>

## PARAMETERS

### -Group

Specifies the group to remove the user from. If not specified, the cmdlet removes the user from all groups.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
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

Specifies the site collection to remove the user from.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOUser](Get-SPOUser.md)
