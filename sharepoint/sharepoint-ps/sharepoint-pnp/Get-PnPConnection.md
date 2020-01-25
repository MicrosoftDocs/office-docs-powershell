---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpconnection
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Get-PnPConnection

## SYNOPSIS
Returns the current context

## DESCRIPTION
Returns a PnP PowerShell Connection for use with the -Connection parameter on other cmdlets.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$ctx = Get-PnPConnection
```

This will put the current connection for use with the -Connection parameter on other cmdlets.

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
