---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenanttemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Get-PnPTenantTemplate

## SYNOPSIS
Generates a provisioning tenant template from a site. If the site is a hubsite any connected site will be included.

## SYNTAX 

### Extract a template to a file
```powershell
Get-PnPTenantTemplate -Out <String>
                      [-SiteUrl <String>]
                      [-Force [<SwitchParameter>]]
                      [-Configuration <ExtractConfigurationPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

### Extract a template as an object
```powershell
Get-PnPTenantTemplate -AsInstance [<SwitchParameter>]
                      [-SiteUrl <String>]
                      [-Configuration <ExtractConfigurationPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantTemplate -Out tenanttemplate.xml
```

Extracts a tenant template

## PARAMETERS

### -AsInstance
Returns the template as an in-memory object, which is an instance of the ProvisioningHierarchy type of the PnP Core Component. It cannot be used together with the -Out parameter.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Extract a template as an object

Required: True
Position: Named
Accept pipeline input: False
```

### -Configuration
Specify a JSON configuration file to configure the extraction progress.

Only applicable to: SharePoint Online

```yaml
Type: ExtractConfigurationPipeBind
Parameter Sets: Extract a template to a file, Extract a template as an object

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
Overwrites the output file if it exists.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Extract a template to a file

Required: False
Position: Named
Accept pipeline input: False
```

### -Out
Filename to write to, optionally including full path

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Extract a template to a file

Required: True
Position: 0
Accept pipeline input: False
```

### -SiteUrl


Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Extract a template to a file, Extract a template as an object

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)