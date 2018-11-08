---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPSite

## SYNOPSIS
BETA: This cmdlet is using early release APIs. Notice that functionality and parameters can change. Creates a new site collection

## SYNTAX 

### Communication Site with Built-In Site Design
```powershell
New-PnPSite -Title <String>
            -Url <String>
            -Type <SiteType>
            [-Description <String>]
            [-Classification <String>]
            [-AllowFileSharingForGuestUsers [<SwitchParameter>]]
            [-SiteDesign <CommunicationSiteDesign>]
            [-Lcid <UInt32>]
            [-Connection <SPOnlineConnection>]
```

### Team Site
```powershell
New-PnPSite -Title <String>
            -Alias <String>
            -Type <SiteType>
            [-Description <String>]
            [-Classification <String>]
            [-IsPublic <String>]
            [-Connection <SPOnlineConnection>]
```

### Communication Site with Custom Design
```powershell
New-PnPSite -Title <String>
            -Url <String>
            -SiteDesignId <GuidPipeBind>
            -Type <SiteType>
            [-Description <String>]
            [-Classification <String>]
            [-AllowFileSharingForGuestUsers [<SwitchParameter>]]
            [-Lcid <UInt32>]
            [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
The New-PnPSite cmdlet creates a new site collection for the current tenant. Currently only 'modern' sites like Communication Site and the Modern Team Site are supported. If you want to create a classic site, use New-PnPTenantSite.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
New-PnPSite -Type CommunicationSite -Title Contoso -Url https://tenant.sharepoint.com/sites/contoso
```

This will create a new Communications Site collection with the title 'Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso'

### ------------------EXAMPLE 2------------------
```powershell
New-PnPSite -Type CommunicationSite -Title Contoso -Url https://tenant.sharepoint.com/sites/contoso -SiteDesign Showcase
```

This will create a new Communications Site collection with the title 'Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso'. It will use the 'Showcase' design for the site.

### ------------------EXAMPLE 3------------------
```powershell
New-PnPSite -Type CommunicationSite -Title Contoso -Url https://tenant.sharepoint.com/sites/contoso -SiteDesignId ae2349d5-97d6-4440-94d1-6516b72449ac
```

This will create a new Communications Site collection with the title 'Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso'. It will use the specified custom site design for the site.

### ------------------EXAMPLE 4------------------
```powershell
New-PnPSite -Type CommunicationSite -Title Contoso -Url https://tenant.sharepoint.com/sites/contoso -Classification "HBI"
```

This will create a new Communications Site collection with the title 'Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso'. The classification for the site will be set to "HBI"

### ------------------EXAMPLE 5------------------
```powershell
New-PnPSite -Type CommunicationSite -Title Contoso -Url https://tenant.sharepoint.com/sites/contoso -AllowFileSharingForGuestUsers
```

This will create a new Communications Site collection with the title 'Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso'. File sharing for guest users will be enabled.

### ------------------EXAMPLE 6------------------
```powershell
New-PnPSite -Type TeamSite -Title 'Team Contoso' -Alias contoso
```

This will create a new Modern Team Site collection with the title 'Team Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso' or 'https://tenant.sharepoint.com/teams/contoso' based on the managed path configuration in the SharePoint Online Admin portal.

### ------------------EXAMPLE 7------------------
```powershell
New-PnPSite -Type TeamSite -Title 'Team Contoso' -Alias contoso -IsPublic
```

This will create a new Modern Team Site collection with the title 'Team Contoso' and the url 'https://tenant.sharepoint.com/sites/contoso' or 'https://tenant.sharepoint.com/teams/contoso' based on the managed path configuration in the SharePoint Online Admin portal and sets the site to public.

## PARAMETERS

### -Alias
Specifies the alias of the new site collection which represents the part of the URL that will be assigned to the site behind 'https://tenant.sharepoint.com/sites/' or 'https://tenant.sharepoint.com/teams/' based on the managed path configuration in the SharePoint Online Admin portal

```yaml
Type: String
Parameter Sets: Team Site

Required: True
Position: 0
Accept pipeline input: False
```

### -AllowFileSharingForGuestUsers
Specifies if guest users can share files in the new site collection

```yaml
Type: SwitchParameter
Parameter Sets: Communication Site with Built-In Site Design

Required: False
Position: 0
Accept pipeline input: False
```

### -Classification
Specifies the classification of the new site collection

```yaml
Type: String
Parameter Sets: Communication Site with Built-In Site Design

Required: False
Position: 0
Accept pipeline input: False
```

### -Description
Specifies the description of the new site collection

```yaml
Type: String
Parameter Sets: Communication Site with Built-In Site Design

Required: False
Position: 0
Accept pipeline input: False
```

### -IsPublic
Specifies if new site collection is public. Defaults to false.

```yaml
Type: String
Parameter Sets: Team Site

Required: False
Position: 0
Accept pipeline input: False
```

### -Lcid
Specifies the language of the new site collection. Defaults to the current language of the web connected to.

```yaml
Type: UInt32
Parameter Sets: Communication Site with Built-In Site Design

Required: False
Position: 0
Accept pipeline input: False
```

### -SiteDesign
Specifies the site design of the new site collection. Defaults to 'Topic'

```yaml
Type: CommunicationSiteDesign
Parameter Sets: Communication Site with Built-In Site Design

Required: False
Position: 0
Accept pipeline input: False
```

### -SiteDesignId
Specifies the site design id to use for the new site collection. If specified will override SiteDesign

```yaml
Type: GuidPipeBind
Parameter Sets: Communication Site with Custom Design

Required: True
Position: 0
Accept pipeline input: False
```

### -Title
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: Communication Site with Built-In Site Design

Required: True
Position: 0
Accept pipeline input: False
```

### -Type
@Specifies with type of site to create.

```yaml
Type: SiteType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Url
Specifies the full url of the new site collection

```yaml
Type: String
Parameter Sets: Communication Site with Built-In Site Design

Required: True
Position: 0
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

## OUTPUTS

### System.String

Returns the url of the newly created site collection

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)