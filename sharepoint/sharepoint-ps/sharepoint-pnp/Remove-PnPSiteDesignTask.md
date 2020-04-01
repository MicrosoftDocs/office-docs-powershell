---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpsitedesigntask
applicable: SharePoint Online
schema: 2.0.0
---

# Remove-PnPSiteDesignTask

## SYNOPSIS
Removes a Site Design Task. If the execution of the associated site script has already started the execution will not be terminated.

## SYNTAX 

```powershell
Remove-PnPSiteDesignTask -Identity <TenantSiteDesignTaskPipeBind>
                         [-Force [<SwitchParameter>]]
                         [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPSiteDesignTask -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd
```

Removes the specified site design task

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
Type: TenantSiteDesignTaskPipeBind
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