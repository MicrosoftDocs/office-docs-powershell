---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/enable-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
title: Enable-PnPSiteClassification
---

# Enable-PnPSiteClassification

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Directory.ReadWrite.All

Enables Site Classifications for the tenant

## SYNTAX 

```powershell
Enable-PnPSiteClassification -Classifications <String>
                             -DefaultClassification <String>
                             [-UsageGuidelinesUrl <String>]
                             [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Scopes "Directory.ReadWrite.All"
Enable-PnPSiteClassification -Classifications "HBI","LBI","Top Secret" -DefaultClassification "LBI"
```

Enables Site Classifications for your tenant and provides three classification values. The default value will be set to "LBI"

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -Scopes "Directory.ReadWrite.All"
Enable-PnPSiteClassification -Classifications "HBI","LBI","Top Secret" -UsageGuidelinesUrl https://aka.ms/sppnp
```

Enables Site Classifications for your tenant and provides three classification values. The usage guideliness will be set to the specified URL.

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Classifications


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -DefaultClassification


```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -UsageGuidelinesUrl


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)