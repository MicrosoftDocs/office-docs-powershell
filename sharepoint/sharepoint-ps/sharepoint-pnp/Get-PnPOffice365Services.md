---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpoffice365services
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPOffice365Services
---

# Get-PnPOffice365Services

## SYNOPSIS

**Required Permissions**

  * Microsoft Office 365 Management API: ServiceHealth.Read

Gets the services available in Office 365 from the Office 365 Management API

## SYNTAX 

```powershell
Get-PnPOffice365Services [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOffice365Services
```

Retrieves the current services available in Office 365

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