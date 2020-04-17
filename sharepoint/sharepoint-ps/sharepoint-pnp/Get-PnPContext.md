---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpcontext
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPContext
---

# Get-PnPContext

## SYNOPSIS
Returns the current context

## DESCRIPTION
Returns a Client Side Object Model context

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$ctx = Get-PnPContext
```

This will put the current context in the $ctx variable.

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -Url $siteAurl -Credentials $credentials
$ctx = Get-PnPContext
Get-PnPList # returns the lists from site specified with $siteAurl
Connect-PnPOnline -Url $siteBurl -Credentials $credentials
Get-PnPList # returns the lists from the site specified with $siteBurl
Set-PnPContext -Context $ctx # switch back to site A
Get-PnPList # returns the lists from site A
```



## OUTPUTS

### Microsoft.SharePoint.Client.ClientContext

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)