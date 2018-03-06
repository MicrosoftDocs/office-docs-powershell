---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPTenantSite

## SYNOPSIS
Retrieve site information.

## SYNTAX 

```powershell
Get-PnPTenantSite [-Url <String>]
                  [-Template <String>]
                  [-Detailed [<SwitchParameter>]]
                  [-IncludeOneDriveSites [<SwitchParameter>]]
                  [-Filter <String>]
                  [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Use this cmdlet to retrieve site information from your tenant administration.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantSite
```

Returns all site collections

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantSite -Url http://tenant.sharepoint.com/sites/projects
```

Returns information about the project site

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPTenantSite -Detailed
```

Returns all sites with the full details of these sites

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPTenantSite -IncludeOneDriveSites
```

Returns all sites including all OneDrive for Business sites

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPTenantSite -IncludeOneDriveSites -Filter "Url -like '-my.sharepoint.com/personal/'"
```

Returns all OneDrive for Business sites

### ------------------EXAMPLE 6------------------
```powershell
Get-PnPTenantSite -Template SITEPAGEPUBLISHING#0
```

Returns all Communication sites

### ------------------EXAMPLE 7------------------
```powershell
Get-PnPTenantSite -Filter "Url -like 'sales'" 
```

Returns all sites including 'sales' in the url

## PARAMETERS

### -Detailed
By default, not all returned attributes are populated. This switch populates all attributes. It can take several seconds to run. Without this, some attributes will show default values that may not be correct.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Filter
Specifies the script block of the server-side filter to apply. See https://technet.microsoft.com/en-us/library/fp161380.aspx

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeOneDriveSites
By default, the OneDrives are not returned. This switch includes all OneDrives.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Template
By default, all sites will be returned. Specify a template value alike "STS#0" here to filter on the template

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
The URL of the site

```yaml
Type: String
Parameter Sets: (All)
Aliases: Identity

Required: False
Position: 0
Accept pipeline input: True
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

## OUTPUTS

### Microsoft.Online.SharePoint.TenantAdministration.SiteProperties

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)