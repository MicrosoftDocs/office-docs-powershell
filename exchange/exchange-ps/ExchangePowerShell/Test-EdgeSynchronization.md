---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/test-edgesynchronization
schema: 2.0.0
title: Test-EdgeSynchronization
---

# Test-EdgeSynchronization

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-EdgeSynchronization cmdlet to diagnose whether the subscribed Edge Transport servers have a current and accurate synchronization status.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### SingleValidation
```
Test-EdgeSynchronization -VerifyRecipient <ProxyAddress>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
Test-EdgeSynchronization [-ExcludeRecipientTest]
 [-FullCompareMode]
 [-MaxReportSize <Unlimited>]
 [-MonitoringContext <Boolean>]
 [-TargetServer <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Test-EdgeSynchronization cmdlet is a diagnostic cmdlet that provides a report of the synchronization status of subscribed Edge Transport servers. You can use the VerifyRecipient parameter with this cmdlet to verify that a single recipient is synchronized to the Active Directory Lightweight Directory Services (AD LDS) instance. The Edge Subscription process establishes one-way replication of recipient and configuration information from Active Directory to AD LDS.

This cmdlet compares the data stored in Active Directory and the data stored in AD LDS. Any inconsistencies in data are reported in the results output by this cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-EdgeSynchronization -MaxReportSize 500 -MonitoringContext $true
```

This example diagnoses the synchronization status of subscribed Edge Transport servers, outputs only the first 500 data inconsistencies, and generates events and performance counters for use by System Center Operations Manager 2007.

### Example 2
```powershell
Test-EdgeSynchronization -VerifyRecipient kate@contoso.com
```

This example verifies the synchronization status of the single recipient kate@contoso.com.

## PARAMETERS

### -VerifyRecipient

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The VerifyRecipient parameter specifies a single recipient with which to verify the synchronization status. You identify the recipient by specifying a proxy address assigned to the recipient. The proxy address is the recipient's email address. The recipient verification test is mutually exclusive of the test that verifies synchronization of configuration data.

```yaml
Type: ProxyAddress
Parameter Sets: SingleValidation
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeRecipientTest

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExcludeRecipientTest switch specifies whether to exclude validation of recipient data synchronization. You don't need to specify a value with this switch.

If you use this switch, only the synchronization of configuration objects is validated. Validating that recipient data is synchronized takes longer than validating only configuration data.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullCompareMode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The FullCompareMode switch specifies whether a full comparison of the configuration data between Active Directory and AD LDS instance on the target Edge Transport server is performed. You don't need to specify a value with this switch.

If you don't use this switch, a full comparison of replicated configuration data is skipped and the command only tests the Edge synchronization by verifying the replication cookie.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReportSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxReportSize parameter specifies the total number of objects and properties listed in the results. The results output by this command include a list of all out-of-sync objects and properties in both AD LDS and Active Directory. If the directory services aren't synchronized, a large amount of data can result. If you don't specify a value for this parameter, the default value of 1,000 is used. The minimum value for this parameter is 1. The maximum value for this parameter is unlimited.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values are:

- $true: Monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).
- $false: Monitoring events and performance counters aren't included in the command results. This value is the default.

```yaml
Type: Boolean
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TargetServer parameter specifies an Edge Transport server to initiate edge synchronization with. If omitted, all Edge Transport servers are synchronized.

You might want to use this parameter to specify a single Edge Transport server for synchronization if a new Edge Transport server is installed or if that Edge Transport server is unavailable for some time.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
