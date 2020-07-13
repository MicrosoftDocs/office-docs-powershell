---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteClassification
---

# Get-PnPSiteClassification

## SYNOPSIS
Returns the defined Site Classifications for the tenant

## SYNTAX 

```powershell
Get-PnPSiteClassification [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Directory.Read.All, Directory.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteClassification
```

Returns the currently set site classifications for the tenant.

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