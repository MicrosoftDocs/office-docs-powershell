---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/sync-pnpapptoteams
applicable: SharePoint Online
schema: 2.0.0
---

# Sync-PnPAppToTeams

## SYNOPSIS
Synchronize an app from the tenant app catalog to the Microsoft Teams app catalog

## SYNTAX

```powershell
Sync-PnPAppToTeams -Identity <AppMetadataPipeBind>
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Sync-PnPAppToTeams -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will synchronize the given app with the Microsoft Teams app catalog

## PARAMETERS

### -Identity
Specifies the Id of the Addin Instance

```yaml
Type: AppMetadataPipeBind
Parameter Sets: (All)

Required: True
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
