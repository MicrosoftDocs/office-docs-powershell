---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsitescriptfromweb
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteScriptFromWeb
---

# Get-PnPSiteScriptFromWeb

## SYNOPSIS
Generates a Site Script from an existing site

## SYNTAX 

### All components
```powershell
Get-PnPSiteScriptFromWeb -Url <String>
                         [-IncludeAll [<SwitchParameter>]]
                         [-Lists <String[]>]
                         [-Connection <SPOnlineConnection>]
```

### Specific components
```powershell
Get-PnPSiteScriptFromWeb -Url <String>
                         [-IncludeBranding [<SwitchParameter>]]
                         [-IncludeLinksToExportedItems [<SwitchParameter>]]
                         [-IncludeRegionalSettings [<SwitchParameter>]]
                         [-IncludeSiteExternalSharingCapability [<SwitchParameter>]]
                         [-IncludeTheme [<SwitchParameter>]]
                         [-Lists <String[]>]
                         [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
This command allows a Site Script to be generated off of an existing site on your tenant. Connect to your SharePoint Online Admin site before executing this command.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteScriptFromWeb -Url https://contoso.sharepoint.com/sites/teamsite -IncludeAll
```

Returns the generated Site Script JSON containing all supported components from the site at the provided Url

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteScriptFromWeb -Url https://contoso.sharepoint.com/sites/teamsite -IncludeAll -Lists "Shared Documents","Lists\MyList"
```

Returns the generated Site Script JSON containing all supported components from the site at the provided Url including the lists "Shared Documents" and "MyList"

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPSiteScriptFromWeb -Url https://contoso.sharepoint.com/sites/teamsite -IncludeBranding -IncludeLinksToExportedItems
```

Returns the generated Site Script JSON containing the branding and navigation links from the site at the provided Url

## PARAMETERS

### -IncludeAll
If specified will include all supported components into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: All components

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeBranding
If specified will include the branding of the site into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: Specific components

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeLinksToExportedItems
If specified will include navigation links into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: Specific components

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeRegionalSettings
If specified will include the regional settings into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: Specific components

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeSiteExternalSharingCapability
If specified will include the external sharing configuration into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: Specific components

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeTheme
If specified will include the branding of the site into the Site Script

```yaml
Type: SwitchParameter
Parameter Sets: Specific components

Required: False
Position: Named
Accept pipeline input: False
```

### -Lists
Allows specifying one or more site relative URLs of lists that should be included into the Site Script, i.e. "Shared Documents","List\MyList"

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
Specifies the URL of the site to generate a Site Script from

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)