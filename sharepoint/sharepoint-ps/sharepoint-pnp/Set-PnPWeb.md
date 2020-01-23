---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpweb
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Set-PnPWeb

## SYNOPSIS
Sets properties on a web

## SYNTAX

```powershell
Set-PnPWeb [-SiteLogoUrl <String>]
           [-AlternateCssUrl <String>]
           [-Title <String>]
           [-Description <String>]
           [-MasterUrl <String>]
           [-CustomMasterUrl <String>]
           [-HeaderLayout <HeaderLayoutType>]
           [-HeaderEmphasis <SPVariantThemeType>]
           [-Web <WebPipeBind>]
           [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets properties on a web

## PARAMETERS

### -AlternateCssUrl


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CustomMasterUrl


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -HeaderEmphasis


Only applicable to: SharePoint Online

```yaml
Type: SPVariantThemeType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -HeaderLayout


Only applicable to: SharePoint Online

```yaml
Type: HeaderLayoutType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -MasterUrl


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SiteLogoUrl
Sets the logo of the web to the current url. If you want to set the logo to a modern team site, use Set-PnPSite -SiteLogoPath

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
