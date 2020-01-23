---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disable-pnpsiteclassification
applicable: SharePoint Online
schema: 2.0.0
---

# Disable-PnPSiteClassification

## SYNOPSIS
Disables Site Classifications for the tenant. Requires a connection to the Microsoft Graph.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Scopes "Directory.ReadWrite.All"
Disable-PnPSiteClassification
```

Disables Site Classifications for your tenant.

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
