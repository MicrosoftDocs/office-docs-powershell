---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsearchsettings
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSearchSettings
---

# Get-PnPSearchSettings

## SYNOPSIS
Retrieves search settings for a site

## SYNTAX 

```powershell
Get-PnPSearchSettings [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSearchSettings
```

Retrieve search settings for the site

## PARAMETERS

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)