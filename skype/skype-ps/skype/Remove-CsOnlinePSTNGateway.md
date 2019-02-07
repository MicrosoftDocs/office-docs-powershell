---
external help file: tmp_lagl0bvw.h02-help.xml
Module Name: tmp_lagl0bvw.h02
online version:
schema: 2.0.0
---

# Remove-CsOnlinePSTNGateway

## SYNOPSIS
Removes the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity.
This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

```
Remove-CsOnlinePSTNGateway [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-Force] [-AsJob]
```

## DESCRIPTION
Use this cmdlet to remove the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration.
Note the SBC must be removed from all voice routes before executing this cmdlet

## EXAMPLES

### Example 1
```
PS C:\> Remove-CSOnlinePSTNGateway -Identity sbc.contoso.com
```

This example removes SBC with Identity (and FQDN) sbc.contoso.com

### Example 2
```
PS C:\> Removes-CsOnlinePSTNGateway | ?{$_.Identity -like "*.contoso.com"}
```

This example removes the SBC with identities (and FQDNs) matching the pattern *.contoso.com.
For example: sbc1.contoso.com, sbc2.contoso.com etc

## PARAMETERS

### -Identity
The parameter is mandatory for the cmdlet.
The Identity is the same as the SBC FQDN.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CSOnlinePSTNGateway]()

[New-CSOnlinePSTNGateway]()

[Get-CSOnlinePSTNGateway]()

