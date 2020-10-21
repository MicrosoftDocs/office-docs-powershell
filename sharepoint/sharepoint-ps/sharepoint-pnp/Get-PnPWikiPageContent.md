---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpwikipagecontent
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPWikiPageContent
---

# Get-PnPWikiPageContent

## SYNOPSIS
Gets the contents/source of a wiki page

## SYNTAX 

```powershell
Get-PnPWikiPageContent -ServerRelativePageUrl <String>
                       [-Web <WebPipeBind>]
                       [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWikiPageContent -PageUrl '/sites/demo1/pages/wikipage.aspx'
```

Gets the content of the page '/sites/demo1/pages/wikipage.aspx'

## PARAMETERS

### -ServerRelativePageUrl
The server relative URL for the wiki page

```yaml
Type: String
Parameter Sets: (All)
Aliases: PageUrl

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
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

### System.String

### Notes
Get-PnPWikiPageContent Cmdlet works with Modern Wiki Pages. It does not work with Wiki Pages created with classic site template like Enterprise Wiki Site Template.
## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
