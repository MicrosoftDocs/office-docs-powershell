---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOSiteGroup
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOSiteGroup

## SYNOPSIS

Updates the SharePoint Online owner and permission levels on a group inside a site collection.

## SYNTAX

```powershell
Set-SPOSiteGroup -Identity <String> [-Name <String>] [-Owner <String>] [-PermissionLevelsToAdd <String[]>]
 [-PermissionLevelsToRemove <String[]>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

You must be a SharePoint Online global administrator and a site collection administrator to run the `Set-SPOSiteGroup` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at <https://go.microsoft.com/fwlink/p/?LinkId=251832> (<https://go.microsoft.com/fwlink/p/?LinkId=251832).>

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
Set-SPOSiteGroup -Site https://contoso.sharepoint.com/sites/siteA -Identity "ProjectViewers" -PermissionLevelsToRemove "Full Control" -PermissionLevelsToAdd "View Only"
```

Example 1 changes permission level of the ProjectViewers group inside site collection <https://contoso.sharepoint.com/sites/siteA> from Full Control to View Only.

### -----------------------EXAMPLE 2-----------------------------

```powershell
Set-SPOSiteGroup -Site https://contoso.sharepoint.com -Identity "ProjectViewers" -Owner Melissa.kerr@contoso.com
```

Example 2 sets Melissa.kerr@contoso.com as the owner of the ProjectViewers group.

## PARAMETERS

### -Identity

Specifies the name of the group.

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

### -Name

Specifies the new name of the group.

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

### -Owner

Specifies the owner (individual or a security group) of the group to be created.

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

### -PermissionLevelsToAdd

Specifies the permission levels to grant to the group.

> [!NOTE]
> Permission levels are defined by SharePoint Online global administrators from SharePoint Online Administration Center.  

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionLevelsToRemove

Specifies the permission levels to remove from the group.

> [!NOTE]
> Permission levels are defined by SharePoint Online global administrators from SharePoint Online Administration Center.  

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site

Specifies the site collection the group belongs to.

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

[Get-SPOSiteGroup](Get-SPOSiteGroup.md)
