---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPSiteDesignRun

## SYNOPSIS
Retrieves a list of site designs applied to a specified site collection. If the WebUrl parameter is not specified we show the list of designs applied to the current site. The returned output includes the ID of the scheduled job, the web and site IDs, and the site design ID, version, and title.

## SYNTAX 

```powershell
Get-PnPSiteDesignRun [-SiteDesignId <GuidPipeBind>]
                     [-WebUrl <String>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteDesignRun
```

This example returns a list of the site designs applied to the current site. Providing a specific site design ID will return the details for just that applied site design.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteDesignRun -WebUrl https://mytenant.sharepoint.com/sites/project
```

This example returns a list of the site designs applied to the specified site. Providing a specific site design ID will return the details for just that applied site design.

## PARAMETERS

### -SiteDesignId
The ID of the site design to apply.

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -WebUrl
The URL of the site collection where the site design will be applied. If not specified the design will be applied to the site you connected to with Connect-PnPOnline.

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