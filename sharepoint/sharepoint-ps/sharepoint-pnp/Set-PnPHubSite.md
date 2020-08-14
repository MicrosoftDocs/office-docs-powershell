---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnphubsite
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPHubSite
---

# Set-PnPHubSite

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Sets hub site properties

## SYNTAX 

```powershell
Set-PnPHubSite [-SiteDesignId <GuidPipeBind>]
               [-HideNameInNavigation [<SwitchParameter>]]
               [-RequiresJoinApproval [<SwitchParameter>]]
               [-Connection <PnPConnection>]
```

## DESCRIPTION
Allows configuring a hub site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -Title "My New Title"
```

Sets the title of the hub site

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -Description "My updated description"
```

Sets the description of the hub site

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -SiteDesignId df8a3ef1-9603-44c4-abd9-541aea2fa745
```

Sets the site design which should be applied to sites joining the the hub site

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -LogoUrl "https://tenant.sharepoint.com/SiteAssets/Logo.png"
```

Sets the logo of the hub site

## PARAMETERS

### -HideNameInNavigation


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RequiresJoinApproval


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SiteDesignId
GUID of the SharePoint Site Design which should be applied when a site joins the hub site

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
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