---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpsearchsettings
applicable: SharePoint Online
schema: 2.0.0
---

# Set-PnPSearchSettings

## SYNOPSIS
Sets search settings for a site

## SYNTAX 

```powershell
Set-PnPSearchSettings [-SearchBoxInNavBar <SearchBoxInNavBarType>]
                      [-SearchPageUrl <String>]
                      [-SearchScope <SearchScopeType>]
                      [-Scope <SearchSettingsScope>]
                      [-Force [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPSearchSettings -SearchBoxInNavBar Hidden -Scope Site
```

Hide the suite bar search box on all pages and sites in the site collection

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPSearchSettings -SearchBoxInNavBar Hidden -Scope Web
```

Hide the suite bar search box on all pages in the current site

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPSearchSettings -SearchPageUrl "https://contoso.sharepoint.com/sites/mysearch/SitePages/search.aspx"
```

Redirect the suite bar search box in the site to a custom URL

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPSearchSettings -SearchPageUrl ""
```

Clear the suite bar search box URL and revert to the default behavior

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPSearchSettings -SearchPageUrl "https://contoso.sharepoint.com/sites/mysearch/SitePages/search.aspx" -Scope Site
```

Redirect classic search to a custom URL

### ------------------EXAMPLE 6------------------
```powershell
Set-PnPSearchSettings -SearchScope Tenant
```

Set default behavior of the suite bar search box to show tenant wide results instead of site or hub scoped results

### ------------------EXAMPLE 7------------------
```powershell
Set-PnPSearchSettings -SearchScope Hub
```

Set default behavior of the suite bar search box to show hub results instead of site results on an associated hub site

## PARAMETERS

### -Force
Do not ask for confirmation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Scope
Scope to apply the setting to. Possible values: Web (default), Site\r\n\r\nFor a root site, the scope does not matter.

```yaml
Type: SearchSettingsScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SearchBoxInNavBar
Set the scope of which the suite bar search box shows. Possible values: Inherit, AllPages, ModernOnly, Hidden

```yaml
Type: SearchBoxInNavBarType
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -SearchPageUrl
Set the URL where the search box should redirect to.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -SearchScope
Set the search scope of the suite bar search box. Possible values: DefaultScope, Tenant, Hub, Site

```yaml
Type: SearchScopeType
Parameter Sets: __AllParameterSets

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