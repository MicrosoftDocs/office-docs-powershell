---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spounifiedgroup
applicable: SharePoint Online
title: Set-SPOUnifiedGroup
schema: 2.0.0
author:
ms.author:
ms.reviewer:
---

# Set-SPOUnifiedGroup

## SYNOPSIS

Sets the Preferred Data Location (PDL) for the specified Office 365 Group. The customer tenant must be multi-geo enabled.

## SYNTAX

```powershell
Set-SPOUnifiedGroup [-GroupAlias] <string> [-PreferredDataLocation] <string> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the Preferred Data Location for an Office 365 Group.

## EXAMPLES

### Example 1

```powershell
Set-SPOUnifiedGroup -GroupAlias EUTeam -PreferredDataLocation EUR
```

Sets the PDL for the Office 365 Group named 'EUTeam' to EUR (Europe).

## PARAMETERS

### -GroupAlias

The alias of the Office 365 Group.

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

### -PreferredDataLocation

The Preferred Data Location for the Office 365 Group.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES

## RELATED LINKS

[Get-SPOUnifiedGroup.md](Get-SPOUnifiedGroup.md]

[Move a SharePoint site to a different geo location](https://docs.microsoft.com/office365/enterprise/move-sharepoint-between-geo-locations)
