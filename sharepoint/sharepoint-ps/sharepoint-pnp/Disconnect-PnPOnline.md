---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disconnect-pnponline
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Disconnect-PnPOnline
---

# Disconnect-PnPOnline

## SYNOPSIS
Disconnects the context

## SYNTAX 

```powershell
Disconnect-PnPOnline [-Connection <PnPConnection>]
```

## DESCRIPTION
Disconnects the current context and requires you to build up a new connection in order to use the Cmdlets again. Using Connect-PnPOnline to connect to a different site has the same effect.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disconnect-PnPOnline
```

This will clear out all active tokens

## PARAMETERS

### -Connection
Connection to be used by cmdlet

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)