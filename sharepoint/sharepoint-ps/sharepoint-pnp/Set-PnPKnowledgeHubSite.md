---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpknowledgehubsite
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPKnowledgeHubSite
---

# Set-PnPKnowledgeHubSite

## SYNOPSIS
Sets the Knowledge Hub Site for your tenant

## SYNTAX 

```powershell
Set-PnPKnowledgeHubSite -KnowledgeHubSiteUrl <String>
                        [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPKnowledgeHubSite -KnowledgeHubSiteUrl https://yoursite.sharepoint.com/sites/knowledge
```

Sets the Knowledge Hub Site for your tenant

## PARAMETERS

### -KnowledgeHubSiteUrl


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