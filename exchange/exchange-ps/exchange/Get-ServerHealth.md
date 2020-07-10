---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-serverhealth
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-ServerHealth
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-ServerHealth

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ServerHealth cmdlet to return health information related to the server you specify.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ServerHealth [-Identity] <ServerIdParameter>
 [-HaImpactingOnly]
 [-HealthSet <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

The cmdlet returns health values that you can use to determine the state of the server. See [Server health and performance in Exchange Server](https://docs.microsoft.com/Exchange/server-health/server-health) for related information.

The cmdlet also returns an alert value that provides the specific state of your server. The following values may be returned:

- Degraded

- Unhealthy

- Repairing

- Disabled

- Unavailable

- UnInitialized

## EXAMPLES

### Example 1
```powershell
Get-ServerHealth -Identity Server01
```

This example returns the server health for server Server01.

## PARAMETERS

### -Identity
The Identity parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -HaImpactingOnly
The HaImpactingOnly switch specifies whether the cmdlet must roll up only the monitors that have HaImpacting set to True.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HealthSet
The HealthSet parameter returns the health state of a group of monitors. Monitors that are similar or are tied to a component's architecture are grouped to form a health set. You can determine the collection of monitors (and associated probes and responders) in a given health set by using the Get-MonitoringItemIdentity cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
