---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpknowledgehubsite
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPKnowledgeHubSite
---

# Remove-PnPKnowledgeHubSite

## SYNOPSIS
Removes the Knowledge Hub Site setting for your tenant

## SYNTAX 

```powershell
Remove-PnPKnowledgeHubSite [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPKnowledgeHubSite
```

Removes the Knowledge Hub Site setting for your tenant

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