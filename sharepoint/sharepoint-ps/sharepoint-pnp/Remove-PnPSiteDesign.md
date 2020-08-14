---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpsitedesign
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPSiteDesign
---

# Remove-PnPSiteDesign

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Removes a Site Design

## SYNTAX 

```powershell
Remove-PnPSiteDesign -Identity <TenantSiteDesignPipeBind>
                     [-Force [<SwitchParameter>]]
                     [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPSiteDesign -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd
```

Removes the specified site design

## PARAMETERS

### -Force
If specified you will not be asked to confirm removing the specified Site Design

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The ID of the site design to remove

```yaml
Type: TenantSiteDesignPipeBind
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