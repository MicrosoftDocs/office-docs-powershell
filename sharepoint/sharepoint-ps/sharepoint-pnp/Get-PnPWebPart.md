---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpwebpart
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPWebPart
---

# Get-PnPWebPart

## SYNOPSIS
Returns a web part definition object

## SYNTAX 

```powershell
Get-PnPWebPart -ServerRelativePageUrl <String>
               [-Identity <WebPartPipeBind>]
               [-Web <WebPipeBind>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWebPart -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx"
```

Returns all webparts defined on the given page.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWebPart -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx" -Identity a2875399-d6ff-43a0-96da-be6ae5875f82
```

Returns a specific web part defined on the given page.

## PARAMETERS

### -Identity
The identity of the web part, this can be the web part guid or a web part object

```yaml
Type: WebPartPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -ServerRelativePageUrl
Full server relative URL of the web part page, e.g. /sites/mysite/sitepages/home.aspx

```yaml
Type: String
Parameter Sets: (All)
Aliases: PageUrl

Required: True
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

## OUTPUTS

### List<Microsoft.SharePoint.Client.WebParts.WebPartDefinition>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)