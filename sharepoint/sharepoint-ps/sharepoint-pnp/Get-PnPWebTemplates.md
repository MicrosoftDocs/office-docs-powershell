---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpwebtemplates
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPWebTemplates
---

# Get-PnPWebTemplates

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns the available classic web templates

## SYNTAX 

```powershell
Get-PnPWebTemplates [-Lcid <UInt32>]
                    [-CompatibilityLevel <Int>]
                    [-Connection <PnPConnection>]
```

## DESCRIPTION
Will list all available classic templates one can use to create a site. Modern templates will not be returned.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWebTemplates
```



### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWebTemplates -LCID 1033
```

Returns all webtemplates for the Locale with ID 1033 (English)

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPWebTemplates -CompatibilityLevel 15
```

Returns all webtemplates for the compatibility level 15

## PARAMETERS

### -CompatibilityLevel
The compatibily level of SharePoint where 14 is SharePoint 2010, 15 is SharePoint 2013 and 16 is SharePoint 2016 and later including SharePoint Online

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Lcid
The language ID. For instance: 1033 for English. For more information, see Locale IDs supported by SharePoint at https://github.com/pnp/PnP-PowerShell/wiki/Supported-LCIDs-by-SharePoint. To get the list of supported languages on a SharePoint environment use: Get-PnPAvailableLanguage.

```yaml
Type: UInt32
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

## OUTPUTS

### Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Locale IDs](https://github.com/pnp/PnP-PowerShell/wiki/Supported-LCIDs-by-SharePoint)