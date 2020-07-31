---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPSiteClassification
---

# Add-PnPSiteClassification

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Directory.ReadWrite.All

Adds one ore more site classification values to the list of possible values

## SYNTAX 

```powershell
Add-PnPSiteClassification -Classifications <String>
                          [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPSiteClassification -Classifications "Top Secret"
```

Adds the "Top Secret" classification to the already existing classification values.

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPSiteClassification -Classifications "Top Secret","HBI"
```

Adds the "Top Secret" and the "For Your Eyes Only" classification to the already existing classification values.

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)