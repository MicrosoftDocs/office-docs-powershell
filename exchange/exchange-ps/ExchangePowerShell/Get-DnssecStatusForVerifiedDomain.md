---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-dnssecstatusforverifieddomain
schema: 2.0.0
title: Get-DnssecStatusForVerifiedDomain
---

# Get-DnssecStatusForVerifiedDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-DnssecStatusForVerifiedDomain cmdlet to view information about Domain Name System Security (DNSSEC) for accepted domains in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DnssecStatusForVerifiedDomain [-DomainName] <String>
 [-Confirm]
 [-SkipDnsValidation]
 [-SkipMtaStsValidation]
 [-SkipMxValidation]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about debugging, enabling, and disabling SMTP DANE with DNSSEC, see [How SMTP DANE works](https://learn.microsoft.com/purview/how-smtp-dane-works).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-DnssecStatusForVerifiedDomain -DomainName contoso.com

DnssecFeatureStatus : Enabled
ExpectedMxRecord    : Microsoft.Exchange.Management.ProvisioningTasks.ExpectedMxRecordInfo
Errors              : {}
Warnings            : {}
DnsValidation       : Microsoft.Exchange.Management.ProvisioningTasks.DnsValidationResult
MxValidation        : Microsoft.Exchange.Management.ProvisioningTasks.MxValidationResult
MtaStsValidation    : Microsoft.Exchange.Management.ProvisioningTasks.MtaStsValidationResult
```

This example shows the basic output of the cmdlet for the domain contoso.com.

### Example 2
```powershell
PS C:\> $result = Get-DnssecStatusForVerifiedDomain -DomainName contoso.com; $result; "DNSSEC feature"; $result.DnssecFeatureStatus; "DNSSEC validation"; $result.DnsValidation; "Expected MX record: [$($result.ExpectedMxRecord.Record)]"; "", "MX validation"; $result.MxValidation; "MTA-STS validation"; $result.MtaStsValidation

DnssecFeatureStatus : Enabled
ExpectedMxRecord    : Microsoft.Exchange.Management.ProvisioningTasks.ExpectedMxRecordInfo
Errors              : {}
Warnings            : {}
DnsValidation       : Microsoft.Exchange.Management.ProvisioningTasks.DnsValidationResult
MxValidation        : Microsoft.Exchange.Management.ProvisioningTasks.MxValidationResult
MtaStsValidation    : Microsoft.Exchange.Management.ProvisioningTasks.MtaStsValidationResult

DNSSEC feature
Value : Enabled

DNSSEC validation
DnssecSupport : Valid
Errors        : {}
Warnings      : {}

Expected MX record: [@ 60 IN MX 10 contoso-com.e-v1.mx.microsoft]

MX validation
Status          : Valid
ActualMxRecords : {@ 60 IN MX 10 contoso-com.e-v1.mx.microsoft}
Errors          : {}
Warnings        : {}

MTA-STS validation
Status          : Valid
MtaStsAvailable : False
MtaStsMode      : Unavailable
Errors          : {}
Warnings        : {}
```

This example contains the output from Example 1 and readable values for the DnsValidation, MxValidation, and MtaStsValidation properties. This command confirms the following information:

- The DNSSEC-secured MX record is present in the domain.
- The priority of the MX record is 10.
- The MTA-STS Policy contains the DNSSEC-secured mail host (if MTA-STS present).

## PARAMETERS

### -DomainName

> Applicable: Exchange Online

The DomainName parameter specifies the accepted domain in the Exchange Online organization where you want to view information about DNSSEC (for example, contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -SkipDnsValidation

> Applicable: Exchange Online

The SkipDnsValidation switch specifies whether to skip the check for the DNSSEC-secured MX record in the domain. You don't need to specify a value with this switch.

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

### -SkipMtaStsValidation

> Applicable: Exchange Online

The SkipMtaStsValidation switch specifies whether to skip the check for the DNSSEC-secured mail host in the MTA-STS Policy. You don't need to specify a value with this switch.

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

### -SkipMxValidation

> Applicable: Exchange Online

The SkipMxValidation switch specifies whether to skip the check for the priority value 10 in the DNSSEC-secured MX record. You don't need to specify a value with this switch.

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

### -WhatIf

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

## OUTPUTS

## NOTES

## RELATED LINKS
