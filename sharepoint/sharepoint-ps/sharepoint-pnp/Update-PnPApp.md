---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/update-pnpapp
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Update-PnPApp

## SYNOPSIS
Updates an available app from the app catalog

## SYNTAX 

```powershell
Update-PnPApp -Identity <AppMetadataPipeBind>
              [-Scope <AppCatalogScope>]
              [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Update-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will update an already installed app if a new version is available in the tenant app catalog. Retrieve a list all available apps and the installed and available versions with Get-PnPApp

### ------------------EXAMPLE 2------------------
```powershell
Update-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Scope Site
```

This will update an already installed app if a new version is available in the site collection app catalog. Retrieve a list all available apps and the installed and available versions with Get-PnPApp -Scope Site

## PARAMETERS

### -Identity
Specifies the Id or an actual app metadata instance

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AppMetadataPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Scope
Defines which app catalog to use. Defaults to Tenant

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AppCatalogScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)