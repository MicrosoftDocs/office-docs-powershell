---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-healthreport
schema: 2.0.0
title: Get-HealthReport
---

# Get-HealthReport

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-HealthReport cmdlet to return health information for the Exchange server that you specify. You can use the health values to determine the state of the server. The cmdlet also returns an alert value that provides the specific state of your server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HealthReport [-Identity] <ServerIdParameter>
 [-GroupSize <Int32>]
 [-HaImpactingOnly]
 [-HealthSet <String>]
 [-MinimumOnlinePercent <Int32>]
 [-RollupGroup]
 [<CommonParameters>]
```

## DESCRIPTION
The following list contains the health values that are returned:

- Online
- Partially Online
- Offline
- Sidelined
- Functional
- Unavailable

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HealthReport -Identity Mailbox01-RollupGroup
```

This example retrieves health information for the server named Mailbox01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -GroupSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The GroupSize parameter determines the size of the group to process against for a rollup. The default value is 12.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HaImpactingOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The HaImpactingOnly switch filters the results to only the monitors that have HaImpacting set to True. You don't need to specify a value with this switch.

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

### -HealthSet

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The HealthSet parameter filters the results by the specified health set. Monitors that are similar or are tied to a component's architecture are grouped to form a health set. You can determine the collection of monitors (and associated probes and responders) in a given health set by using the Get-MonitoringItemIdentity cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumOnlinePercent

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MinimumOnlinePercent parameter specifies the number of members in the group to be functioning with rollup information Degraded instead of Unhealthy. The default value is 70 percent.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RollupGroup

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RollupGroup switch specifies that the health data is rolled up across servers with redundancy limits. You don't need to specify a value with this switch.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
