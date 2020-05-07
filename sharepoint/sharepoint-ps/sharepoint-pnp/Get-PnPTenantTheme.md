---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenanttheme
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantTheme
---

# Get-PnPTenantTheme

## SYNOPSIS
Returns all or a specific theme

## SYNTAX 

```powershell
Get-PnPTenantTheme [-Name <String>]
                   [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns all or a specific tenant theme.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantTheme
```

Returns all themes

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantTheme -Name "MyCompanyTheme"
```

Returns the specified theme

## PARAMETERS

### -Name
The name of the theme to retrieve

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)