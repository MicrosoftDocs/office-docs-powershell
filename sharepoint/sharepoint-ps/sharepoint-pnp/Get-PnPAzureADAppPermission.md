---
external help file: PnP.PowerShell.dll-Help.xml
Module Name: PnP.PowerShell
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPAzureADAppPermission.html
schema: 2.0.0
applicable: SharePoint Online
title: Get-PnPAzureADAppPermission
---

# Get-PnPAzureADAppPermission

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPAzureADAppPermission.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Application.Read.All

Returns app permissions for Microsoft SharePoint and Microsoft Graph

## SYNTAX

```
Get-PnPAzureADAppPermission [-Identity <AzureADAppPipeBind>]
```

## DESCRIPTION
This cmdlet returns the appid, displayname and permissions set for Microsoft SharePoint and the Microsoft Graph APIs

## EXAMPLES

### Example 1
```powershell
Get-PnPAzureADAppPermission
```

Returns all apps with all permissions

### Example 2
```powershell
Get-PnPAzureADAppPermission -Identity MyApp
```

Returns permissions for the specified app

### Example 2
```powershell
Get-PnPAzureADAppPermission -Identity 93a9772d-d0af-4ed8-9821-17282b64690e
```

Returns permissions for the specified app

## PARAMETERS

### -Identity
Specify the display name, id or app id.

```yaml
Type: AzureADAppPipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)