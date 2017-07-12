---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsTelemetryConfiguration

## SYNOPSIS
Use the Set-CsTelemetryConfiguration cmdlet to change the settings on existing telemetry configurations.
UNRESOLVED_TOKEN_VAL(PS_TelemetryDataStatement)

## SYNTAX

### Identity
```
Set-CsTelemetryConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-EnableClientTelemetry <Boolean>] [-Force]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsTelemetryConfiguration [-Confirm] [-EnableClientTelemetry <Boolean>] [-Force] [-Instance <PSObject>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
For privacy information, see the Skype for Business Privacy Statement (http://go.microsoft.com/fwlink/?LinkID=517480&clcid=0x409).

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example enables client telemetry on the configuration scoped to the Redmond site.

Set-CsTelemetryConfiguration -Identity site:Redmond -EnableClientTelemetry $True

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableClientTelemetry
When set to true, client telemetry will be enabled.
The default is false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier that includes the scope of the telemetry configuration.
Telemetry configurations can be scoped at the Global, Site, or Service level.
For example, "site:Redmond" (for site).
The format of the service scope is "Service:\<Identity\>", where identity is derived from the topology.
You can use the following commands to identify the relevant services.

Get-CsService -WebServer | fl Identity

Get-CsService -PoolFqdn \<pool\> | fl Identity

The first command will give you all of the WebServices in the topology, regardless of the pool.
The second will give you all of the services on the pool, regardless of their role.
You can combine the two commands to zero in on a single role in a single pool.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
This cmdlet takes pipeline input of the Get-CsTelemetryConfiguration cmdlet.

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/69ef190e-427e-4583-9efc-bfac64e062ca(OCS.16).aspx)

