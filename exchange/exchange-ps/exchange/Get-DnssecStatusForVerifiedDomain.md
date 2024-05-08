---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dnssecstatusforverifieddomain
applicable: Exchange Online
title: Get-DnssecStatusForVerifiedDomain
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DnssecStatusForVerifiedDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet and the associated features are currently in Preview, aren't available in all organizations, and are subject to change.

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
PS C:\> Get-Get-DnssecStatusForVerifiedDomain -DomainName contoso.com

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
{{ Fill DomainName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDnsValidation
The SkipDnsValidation switch specifies whether to skip the check for the DNSSEC-secured MX record in the domain. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMtaStsValidation
The SkipMtaStsValidation switch specifies whether to skip the check for the DNSSEC-secured mail host in the MTA-STS Policy. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMxValidation
The SkipMxValidation switch specifies whether to skip the check for the priority value 10 in the DNSSEC-secured MX record. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
