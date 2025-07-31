---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/invoke-monitoringprobe
schema: 2.0.0
title: Invoke-MonitoringProbe
---

# Invoke-MonitoringProbe

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Invoke-MonitoringProbe cmdlet to run a Managed Availability probe on a selected server.

This cmdlet cannot be used to run every Managed Availability probe. Only some probes (mainly the deep test probes) can be run manually using this cmdlet. Probes that cannot be run with this cmdlet will generate an error message when Invoke-MonitoringProbe is used to run them.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Invoke-MonitoringProbe [-Identity] <String> -Server <ServerIdParameter>
 [-Account <String>]
 [-Endpoint <String>]
 [-ItemTargetExtension <String>]
 [-Password <String>]
 [-PropertyOverride <String>]
 [-SecondaryAccount <String>]
 [-SecondaryEndpoint <String>]
 [-SecondaryPassword <String>]
 [-TimeOutSeconds <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-MonitoringProbe -Identity ActiveSync.Protocol\ActiveSyncSelfTestProbe -Server EX1
```

This example creates an Exchange ActiveSync monitoring probe on the EX1 server.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the monitoring probe to run.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can't use this parameter to configure other Edge Transport servers remotely.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Account

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Account parameter specifies the identity of the mailbox or user account that will run the monitoring probe.

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

### -Endpoint

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Endpoint parameter specifies the name of the monitoring probe endpoint to connect to, for example, contoso.mail.com.

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

### -ItemTargetExtension

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ItemTargetExtension parameter specifies cmdlet extension data that you can pass to the monitoring probe. The probe that runs on the server may require specific data for its execution. This data is presented to the probe on execution in an XML format.

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

### -Password

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Password parameter specifies the password of the mailbox or user account that will run the monitoring probe.

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

### -PropertyOverride

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PropertyOverride parameter specifies a property that you want to override, for example, to set the time-out value to be extended beyond the default value.

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

### -SecondaryAccount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SecondaryAccount parameter specifies the identity of the delegate mailbox or user account that will run the monitoring probe.

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

### -SecondaryEndpoint

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SecondaryEndpoint parameter specifies the name of the secondary monitoring probe endpoint to connect to, for example, contoso.mail.fabrikam.com.

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

### -SecondaryPassword

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SecondaryPassword parameter specifies the password of the delegate mailbox or user account that will run the monitoring probe.

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

### -TimeOutSeconds

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TimeOutSeconds parameter specifies the monitoring operation time-out period.

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
