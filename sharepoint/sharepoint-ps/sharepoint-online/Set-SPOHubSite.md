---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOHubSite
schema: 2.0.0
---

# Set-SPOHubSite

## SYNOPSIS
Sets the hub site information such as name, logo, and description.

## SYNTAX

```
Set-SPOHubSite [-Identity] <SpoHubSitePipeBind>
  [-Title <string>]
  [-LogoUrl <string>]
  [-Description <string>]
  [-SiteDesignId <guid>]
  [-RequiresJoinApproval <bool>]
  [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to set properties such as name, logo, and description. These properties appear for the hub in the SharePoint user interface.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Set-SPOHubSite https://contoso.sharepoint.com/sites/Marketing `
-Title "Marketing Hub" `
-LogoUrl https://contoso.sharepoint.com/sites/Marketing/SiteAssets/hublogo.png `
-Description "Hub for the Marketing division”
```

This example updates the name of the hub displayed in the SharePoint user interface. It also updates the logo used in the hub navigation, and specifies an optional description for the hub.

## PARAMETERS

### -Identity

URL of the hub site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: HubSite
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title

The display name of the hub.

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

### -LogoUrl

The URL of a logo to use in the hub navigation.

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

### -Description

A description of the hub site.

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

### -SiteDesignId

A description of the hub site.

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

### -RequiresJoinApproval

A description of the hub site.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
