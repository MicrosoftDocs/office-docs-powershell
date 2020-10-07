---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnphidedefaultthemes
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPHideDefaultThemes
---

# Get-PnPHideDefaultThemes

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns if the default / OOTB themes should be visible to users or not.

## SYNTAX 

```powershell
Get-PnPHideDefaultThemes [-Connection <PnPConnection>]
```

## DESCRIPTION
Returns if the default themes are visible. Use Set-PnPHideDefaultThemes to change this value.

You must be a SharePoint Online global administrator to run the cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHideDefaultThemes
```

This example returns the current setting if the default themes should be visible

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)