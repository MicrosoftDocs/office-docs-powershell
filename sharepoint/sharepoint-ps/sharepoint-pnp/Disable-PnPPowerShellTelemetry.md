---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disable-pnppowershelltelemetry
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Disable-PnPPowerShellTelemetry

## SYNOPSIS
Disables PnP PowerShell telemetry tracking

## SYNTAX 

```powershell
Disable-PnPPowerShellTelemetry [-Force [<SwitchParameter>]]
```

## DESCRIPTION
Disables PnP PowerShell telemetry tracking

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-PnPPowerShellTelemetry
```

Will prompt you to confirm to disable telemetry tracking.

### ------------------EXAMPLE 2------------------
```powershell
Disable-PnPPowerShellTelemetry -Force
```

Will disable telemetry tracking without prompting.

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)