---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/add-servermonitoringoverride
schema: 2.0.0
title: Add-ServerMonitoringOverride
---

# Add-ServerMonitoringOverride

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Add-ServerMonitoringOverride cmdlet to override the thresholds and parameters of managed availability probes, monitors, and responders on Exchange servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ApplyVersion
```
Add-ServerMonitoringOverride [-Identity] <String> -ApplyVersion <Version> -ItemType <MonitoringItemTypeEnum> -PropertyName <String> -PropertyValue <String> -Server <ServerIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### Duration
```
Add-ServerMonitoringOverride [-Identity] <String> -ItemType <MonitoringItemTypeEnum> -PropertyName <String> -PropertyValue <String> -Server <ServerIdParameter>
 [-Duration <EnhancedTimeSpan>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-ServerMonitoringOverride -Identity "AD\ActiveDirectoryConnectivityConfigDCServerReboot" -Server EXCH03 -ItemType Responder -PropertyName Enabled -PropertyValue 0 -Duration 20.00:00:00
```

This example adds a server monitoring override that disables the responder ActiveDirectoryConnectivityConfigDCServerReboot on the server named EXCH03 for 20 days. Note that the value of Identity is case-sensitive.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the monitoring item that you want to override. This parameter uses the syntax `HealthSet\MonitoringItemName[\TargetResource]`. Note that the values are case sensitive. For example, use `AD\ActiveDirectoryConnectivityConfigDCServerReboot`, not `ad\activedirectoryconnectivityconfigdcserverreboot`.

You can use Get-ServerHealth to find the correct object for the monitoring item you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyVersion

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ApplyVersion parameter specifies the version of Exchange that gets the override. If you update Exchange to a newer version (for example, you apply a Cumulative Update or Service Pack), the override is no longer applied to the server.

Valid input for this parameter is an Exchange version number in the format 15.01.xxxx.xxx.

You can't use this parameter with the Duration parameter.

```yaml
Type: Version
Parameter Sets: ApplyVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemType

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ItemType parameter specifies the server item type for the property that you want to override. Valid value are:

- Probe
- Monitor
- Responder

```yaml
Type: MonitoringItemTypeEnum
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PropertyName parameter specifies the server property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PropertyValue parameter specifies the new value for the server property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter specifies the Exchange server where you want to add the monitoring override. You can use any value that uniquely identifies the server. For example:

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

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Duration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Duration parameter specifies the length of time that the override is active.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

For example, 30.10:00:00 specifies 30 days and 10 hours.

You can't use this parameter with the ApplyVersion parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: Duration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
