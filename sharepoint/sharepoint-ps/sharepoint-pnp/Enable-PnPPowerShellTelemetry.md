---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Enable-PnPPowerShellTelemetry

## SYNOPSIS
Enables PnP PowerShell telemetry tracking.

## SYNTAX 

```powershell
Enable-PnPPowerShellTelemetry [-Force [<SwitchParameter>]]
```

## DESCRIPTION
In order to help to make PnP PowerShell better, we can track anonymous telemetry. We track the version of the cmdlets you are using, which cmdlet you are executing and which version of SharePoint you are connecting to. Use Disable-PnPPowerShellTelemetry to turn this off, alternative, use the -NoTelemetry switch on Connect-PnPOnline to turn it off for that session.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Enable-PnPPowerShellTelemetry
```

Will prompt you to confirm to enable telemetry tracking.

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)