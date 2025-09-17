---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.Management-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exchangediagnosticinfo
schema: 2.0.0
title: Get-ExchangeDiagnosticInfo
---

# Get-ExchangeDiagnosticInfo

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeDiagnosticInfo cmdlet to return information about processes that are running on Exchange servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExchangeDiagnosticInfo [-Argument <String>]
 [-Component <String>]
 [-Process <String>]
 [-Server <ServerIdParameter>]
 [-Unlimited]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExchangeDiagnosticInfo
```

This example returns a summary list of all Exchange processes that are running on the server.

### Example 2
```powershell
[xml]$edi = Get-ExchangeDiagnosticInfo

$edi.Diagnostics.Processlocator.Process | Format-Table -Auto Name,ID,Guid
```

This example display the XML output of the command in format that's easier to read.

## PARAMETERS

### -Argument

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Argument parameter specifies a valid argument to use with the specified Component value.

Common Argument values that you can use with virtually Component value are Help and Verbose.

To see the Argument values that are available for a given Component value, run the command `Get-ExchangeDiagnosticInfo -Process ProcessName -Component ComponentName -Argument Help`.

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

### -Component

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Component parameter returns detailed information for the specified Component of the given Process value.

To see the Component values that are available for a given Process value, run the command `Get-ExchangeDiagnosticInfo -Process ProcessName -Argument Help`.

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

### -Process

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Process parameter provides details for the specified Exchange process. Valid values are the name of the process (for example, MSExchangeTransport or Microsoft.Exchange.Directory.TopologyService).

To see the list of available Exchange processes, run the command Get-ExchangeDiagnosticInfo.

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

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Unlimited

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Unlimited switch tells the command to return all available information. You don't need to specify a value with this switch.

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

## OUTPUTS

## NOTES

## RELATED LINKS
