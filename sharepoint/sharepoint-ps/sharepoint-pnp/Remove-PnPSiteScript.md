---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpsitescript
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPSiteScript
---

# Remove-PnPSiteScript

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Removes a Site Script

## SYNTAX 

```powershell
Remove-PnPSiteScript -Identity <TenantSiteScriptPipeBind>
                     [-Force [<SwitchParameter>]]
                     [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPSiteScript -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd
```

Removes the specified site script

## PARAMETERS

### -Force
If specified you will not be asked to confirm removing the specified Site Script

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The ID of the Site Script to remove

```yaml
Type: TenantSiteScriptPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
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