---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/update-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
title: Update-PnPSiteClassification
---

# Update-PnPSiteClassification

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Directory.ReadWrite.All

Updates Site Classifications for the tenant

## SYNTAX 

### Specific
```powershell
Update-PnPSiteClassification [-Classifications <String>]
                             [-DefaultClassification <String>]
                             [-UsageGuidelinesUrl <String>]
                             [-ByPassPermissionCheck [<SwitchParameter>]]
```

### Settings
```powershell
Update-PnPSiteClassification -Settings <SiteClassificationsSettings>
                             [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Update-PnPSiteClassification -Classifications "HBI","Top Secret"
```

Replaces the existing values of the site classification settings

### ------------------EXAMPLE 2------------------
```powershell
Update-PnPSiteClassification -DefaultClassification "LBI"
```

Sets the default classification value to "LBI". This value needs to be present in the list of classification values.

### ------------------EXAMPLE 3------------------
```powershell
Update-PnPSiteClassification -UsageGuidelinesUrl https://aka.ms/sppnp
```

sets the usage guideliness URL to the specified URL

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
A list of classifications, separated by commas. E.g. "HBI","LBI","Top Secret"

```yaml
Type: String
Parameter Sets: Specific

Required: False
Position: Named
Accept pipeline input: False
```

### -DefaultClassification
The default classification to be used. The value needs to be present in the list of possible classifications

```yaml
Type: String
Parameter Sets: Specific

Required: False
Position: Named
Accept pipeline input: False
```

### -Settings
A settings object retrieved by Get-PnPSiteClassification

```yaml
Type: SiteClassificationsSettings
Parameter Sets: Settings

Required: True
Position: Named
Accept pipeline input: False
```

### -UsageGuidelinesUrl
The UsageGuidelinesUrl. Set to "" to clear.

```yaml
Type: String
Parameter Sets: Specific

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)