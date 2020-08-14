---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpsitescript
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPSiteScript
---

# Add-PnPSiteScript

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Creates a new Site Script on the current tenant.

## SYNTAX 

```powershell
Add-PnPSiteScript -Title <String>
                  -Content <String>
                  [-Description <String>]
                  [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPSiteScript -Title "My Site Script" -Description "A more detailed description" -Content $script
```

Adds a new Site Script, where $script variable contains the script.

## PARAMETERS

### -Content
A JSON string containing the site script

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Description
The description of the site script

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
The title of the site script

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

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