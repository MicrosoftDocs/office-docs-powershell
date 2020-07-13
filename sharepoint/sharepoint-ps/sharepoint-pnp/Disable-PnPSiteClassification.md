---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disable-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
title: Disable-PnPSiteClassification
---

# Disable-PnPSiteClassification

## SYNOPSIS
Disables Site Classifications for the tenant

## SYNTAX 

```powershell
Disable-PnPSiteClassification [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Directory.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-PnPSiteClassification
```

Disables Site Classifications for your tenant.

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)