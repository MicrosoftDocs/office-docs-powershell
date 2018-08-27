---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online
title: Set-PerimeterConfig
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-PerimeterConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-PerimeterConfig cmdlet to modify the list of gateway server IP addresses that have been added to the cloud-based safelists.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Set-PerimeterConfig [-Confirm] [-GatewayIPAddresses <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
If you have an on-premises email system, you can use the Set-PerimeterConfig cmdlet to add the IP addresses of your gateway servers to cloud-based safelists (also known as whitelists) to make sure that messages sent from your on-premises email system aren't treated as spam.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-PerimeterConfig -GatewayIPAddresses 123.0.0.1
```

This example shows how to add an IP address to cloud-based safelists where the gateway server relays email to the cloud-based service from internal email servers only.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf 
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewayIPAddresses
Use the GatewayIPAddresses parameter to create or modify a list of gateway server IP addresses to add to IP safelists. IP addresses are specified in IPv4 format, for example, 10.1.1.1. If you list more than one IP address, separate each entry with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases: 
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### 
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### 
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/4f40a5fc-3275-42a0-b12f-a199bd42c8d5.aspx)
