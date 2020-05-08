---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spouser
applicable: SharePoint Online
title: Add-SPOUser
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Add-SPOUser

## SYNOPSIS

Adds an existing Office 365 user or an Office 365 security group to a SharePoint group.

## SYNTAX

```powershell
Add-SPOUser -Group <String> -LoginName <String> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Along with the group memberships that are normally required to run Windows PowerShell, you must have the SharePoint Admin role or Global Administrator role and be a site collection administrator to use the `Add-SPOUser` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at <https://go.microsoft.com/fwlink/p/?LinkId=251832> (<https://go.microsoft.com/fwlink/p/?LinkId=251832).>

## EXAMPLES

### ------------ Example 1 --------------------

```powershell
Add-SPOUser -Site https://contoso.sharepoint.com/sites/sc1 -LoginName joe.healy@contoso.com -Group "SC1 Owners"
```

Example 1 adds a user who has the e-mail address joe.healy@contoso.com to the group "SC1 Owners" in the site collection <https://contoso.sharepoint.com/sites/sc1.>

### ------------ Example 2 --------------------

```powershell
Add-SPOUser -Site https://contoso.sharepoint.com -LoginName melissa.kerr@contoso.com -Group "Team Site Members"
```

Example 2 adds a user who has the e-mail address melissa.kerr@contoso.com to the group "Team Site Members" in the site collection <https://contoso.sharepoint.com.>

## PARAMETERS

### -Group

Specifies the name of the SharePoint group to add the user or the security group to.

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

### -LoginName

Specifies the login name of the user to add.

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

Specifies the URL of the site collection to which you want to add the user.

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

[New-SPOSiteGroup](New-SPOSiteGroup.md)

[Get-SPOUser](Get-SPOUser.md)

[Set-SPOUser](Set-SPOUser.md)

[Remove-SPOUser](Remove-SPOUser.md)
