---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnphubsitechild
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPHubSiteChild
---

# Get-PnPHubSiteChild

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Retrieves all sites linked to a specific hub site

## SYNTAX 

```powershell
Get-PnPHubSiteChild -Identity <HubSitePipeBind>
                    [-Connection <PnPConnection>]
```

## DESCRIPTION
Retrieves all sites linked to a specific hub site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHubSiteChild -Identity https://contoso.sharepoint.com/sites/myhubsite
```

Returns the sites having configured the provided hub site as their hub site

## PARAMETERS

### -Identity
The URL of the hubsite for which to receive the sites refering to it

```yaml
Type: HubSitePipeBind
Parameter Sets: (All)

Required: True
Position: Named
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)