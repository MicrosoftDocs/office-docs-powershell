---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spositeuserinvitations
applicable: SharePoint Online
title: Remove-SPOSiteUserInvitations
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Remove-SPOSiteUserInvitations

## SYNOPSIS

.

## SYNTAX

```powershell
Remove-SPOSiteUserInvitations [-Site] <SpoSitePipeBind> [-EmailAddress] <string> [-CountOnly] [<CommonParameters>]
```

## DESCRIPTION

.

## EXAMPLES

### Example 1

```powershell
Remove-SPOSiteUserInvitations -Site https://contoso.sharepoint.com/sites/Research -EmailAddress "someone@contoso.com"
```

This example removes the user with the mail address "someone@contoso.com" from the site with the url <https://contoso.sharepoint.com/sites/Research.>

## PARAMETERS

### -Site

Specifies the URL of the site collection.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress

Email Address of the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountOnly

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
