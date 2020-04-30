---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpsitedesigntask
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPSiteDesignTask
---

# Add-PnPSiteDesignTask

## SYNOPSIS
This command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-PnPSiteDesign is limited to 30 actions and subactions).
This command is intended to replace Invoke-PnPSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.

## SYNTAX 

```powershell
Add-PnPSiteDesignTask -SiteDesignId <GuidPipeBind>
                      [-WebUrl <String>]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPSiteDesignTask -SiteDesignId 501z8c32-4147-44d4-8607-26c2f67cae82
```

This example applies a site design the currently connected to site. Executing the commands will schedule the site design to be queued and run against the designated site collection.

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPSiteDesignTask -SiteDesignId 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/project"
```

This example applies a site design to the designated site. Executing the commands will schedule the site design to be queued and run against the designated site collection.

## PARAMETERS

### -SiteDesignId
The ID of the site design to apply.

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
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