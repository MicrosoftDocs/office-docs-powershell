---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-queuedigest
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-QueueDigest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-QueueDigest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-QueueDigest cmdlet to view information about message delivery queues across database availability groups (DAGs) Active Directory sites, or Active Directory forests in your organization.

By default, the Get-QueueDigest cmdlet displays delivery queues that contain ten or more messages, and the results are between one and two minutes old. For instructions on how to change these default values, see [Configure Get-QueueDigest](https://learn.microsoft.com/exchange/configure-get-queuedigest-exchange-2013-help).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Dag
```
Get-QueueDigest -Dag <MultiValuedProperty>
 [-DetailsLevel <DetailsLevel>]
 [-Filter <String>]
 [-GroupBy <QueueDigestGroupBy>]
 [-ResultSize <Unlimited>]
 [-Timeout <EnhancedTimeSpan>]
 [<CommonParameters>]
```

### Forest
```
Get-QueueDigest [-Forest]
 [-DetailsLevel <DetailsLevel>]
 [-Filter <String>]
 [-GroupBy <QueueDigestGroupBy>]
 [-ResultSize <Unlimited>]
 [-Timeout <EnhancedTimeSpan>]
 [<CommonParameters>]
```

### Server
```
Get-QueueDigest -Server <MultiValuedProperty>
 [-DetailsLevel <DetailsLevel>]
 [-Filter <String>]
 [-GroupBy <QueueDigestGroupBy>]
 [-ResultSize <Unlimited>]
 [-Timeout <EnhancedTimeSpan>]
 [<CommonParameters>]
```

### Site
```
Get-QueueDigest -Site <MultiValuedProperty>
 [-DetailsLevel <DetailsLevel>]
 [-Filter <String>]
 [-GroupBy <QueueDigestGroupBy>]
 [-ResultSize <Unlimited>]
 [-Timeout <EnhancedTimeSpan>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QueueDigest -Forest
```

This example returns information about all queues in the Active Directory forest.

### Example 2
```powershell
Get-QueueDigest -Dag DAG01
```

This example returns information about all queues in the DAG named DAG01.

## PARAMETERS

### -Dag
The Dag parameter filters the delivery queue results by DAG. You can specify any value that uniquely identifies the DAG. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

You can't use the Dag parameter with the Server, Site or Forest parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: Dag
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Forest
The Forest switch filters the delivery queue results by Active Directory forest. You don't need to specify a value with the Forest switch.

You can't use the Forest switch with the Server, Site or Dag parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Forest
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter filters the delivery queue results by Exchange server. You can specify any value that uniquely identifies the server. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

You can't use the Server parameter with the Dag, Site or Forest parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: Server
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Site
The Site parameter filters the delivery queue results by Active Directory site. You can specify any value that uniquely identifies the site. You can specify multiple sites separated by commas.

You can't use the Site parameter with the Server, Dag or Forest parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: Site
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DetailsLevel
The DetailsLevel parameter specifies the level of detail to display in the results. Valid values for this parameter are None, Normal and Verbose. The default value is Normal.

```yaml
Type: DetailsLevel
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter specifies one or more queues by using OPATH filter syntax. The OPATH filter includes a queue property name followed by a comparison operator and value (for example, `"NextHopDomain -eq 'contoso.com'"`). For details about filterable queue properties and comparison operators, see [Queue properties in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/queues/queue-properties) and [Find queues and messages in queues in the Exchange Management Shell](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell).

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").

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

### -GroupBy
The GroupedBy parameter sorts the messages in the delivery queue results. Valid values are:

- DeliveryType
- LastError
- NextHopCategory
- NextHopDomain (this is the default value)
- NextHopKey
- RiskLevel
- Status
- ServerName
- OutboundIPPool

```yaml
Type: QueueDigestGroupBy
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter filters the delivery queue results by the number of messages in the queue. Valid input for this parameter is an integer. The default value is 1000. For example, if you specify the value 50, the command displays the 50 queues that contain the most messages.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
The Timeout parameter specifies the number of seconds before the operation times out. The default value is 10 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

```yaml
Type: EnhancedTimeSpan
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
