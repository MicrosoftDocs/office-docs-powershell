---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/add-globalmonitoringoverride
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Add-GlobalMonitoringOverride
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Add-GlobalMonitoringOverride

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Add-GlobalMonitoringOverride cmdlet to override the thresholds and parameters of the managed availability probes, monitors and responders on all Exchange 2013 or later servers in your organization. The cmdlet enables monitoring changes and threshold tuning to the environment.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ApplyVersion
```
Add-GlobalMonitoringOverride [-Identity] <String> -ApplyVersion <Version> -ItemType <MonitoringItemTypeEnum> -PropertyName <String> -PropertyValue <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Roles <String>]
 [-WhatIf] [<CommonParameters>]
```

### Duration
```
Add-GlobalMonitoringOverride [-Identity] <String> -ItemType <MonitoringItemTypeEnum> -PropertyName <String> -PropertyValue <String> [-BuildRange <String>] [-Duration <EnhancedTimeSpan>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Roles <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-GlobalMonitoringOverride -Identity "FrontendTransport\OnPremisesInboundProxy" -PropertyName Enabled -PropertyValue 0 -Duration 30.00:00:00 -ItemType Probe
```

This example adds a global monitoring override that disables the OnPremisesInboundProxy probe for 30 days. Note that the value of Identity is case-sensitive.

### Example 2
```powershell
Add-GlobalMonitoringOverride -Identity "MailboxSpace\StorageLogicalDriveSpaceEscalate" -PropertyName Enabled -PropertyValue 0 -ItemType Responder -ApplyVersion "15.01.0225.0422"
```

This example adds a global monitoring override that disables the StorageLogicalDriveSpaceEscalate responder for all Exchange 2016 servers running version 15.01.0225.0422. Note that the value of Identity is case-sensitive.

## PARAMETERS

### -ApplyVersion
The ApplyVersion parameter specifies the version of Exchange that gets the override. If an Exchange server is older or newer than the version you specify, the override isn't applied to the server. Typically, you increase the Exchange version by applying Cumulative Updates or Service Packs.

Valid input for this parameter is an Exchange version number in the format 15.0x.xxxx.xxx.

You can't use this parameter with the Duration parameter.

```yaml
Type: Version
Parameter Sets: ApplyVersion
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the probe, monitor, or responder. This parameter uses the syntax \<HealthSetName\>\\\<MonitoringItemName\>[\\\<TargetResource\>]. Note that the values are case sensitive. For example, use "AD\\ActiveDirectoryConnectivityServerReboot", not "ad\\activedirectoryconnectivityserverreboot".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemType
The ItemType parameter specifies the item type for the property that you want to override. Valid values are:

- Probe

- Monitor

- Responder

```yaml
Type: MonitoringItemTypeEnum
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
The PropertyName parameter specifies the property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
The PropertyValue parameter specifies the new value for the property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Duration
The Duration parameter specifies the length of time that the override is active.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

For example, 30.10:00:00 specifies 30 days and 10 hours.

You can't use this parameter with the ApplyVersion parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: Duration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildRange
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Duration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roles
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

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
