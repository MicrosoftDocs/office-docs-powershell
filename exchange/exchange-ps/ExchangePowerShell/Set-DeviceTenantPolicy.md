---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-devicetenantpolicy
schema: 2.0.0
title: Set-DeviceTenantPolicy
---

# Set-DeviceTenantPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-DeviceTenantPolicy cmdlet to modify your organization's mobile device tenant policy in Basic Mobility and Security in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### RetryDistribution
```
Set-DeviceTenantPolicy [-Identity <PolicyIdParameter>]
 [-RetryDistribution]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Set-DeviceTenantPolicy [-Identity <PolicyIdParameter>]
 [-Comment <String>]
 [-Enabled <Boolean>]
 [-Force]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The cmdlets in Basic Mobility and Security are described in the following list:

- DeviceTenantPolicy and DeviceTenantRule cmdlets: A policy that defines whether to block or allow mobile device access to Exchange Online email by unsupported devices that use Exchange ActiveSync only. This setting applies to all users in your organization. Both allow and block scenarios allow reporting for unsupported devices, and you can specify exceptions to the policy based on security groups.
- DeviceConditionalAccessPolicy and DeviceConditionalAccessRule cmdlets: Policies that control mobile device access to Microsoft 365 for supported devices. These policies are applied to security groups. Unsupported devices are not allowed to enroll in Basic Mobility and Security.
- DeviceConfigurationPolicy and DeviceConfigurationRule cmdlets: Policies that control mobile device settings for supported devices. These policies are applied to security groups.
- Get-DevicePolicy: Returns all Basic Mobility and Security policies regardless of type (DeviceTenantPolicy, DeviceConditionalAccessPolicy or DeviceConfigurationPolicy).

For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DeviceTenantPolicy -Enabled $false
```

This example disables your organization's mobile device tenant policy.

## PARAMETERS

### -RetryDistribution

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: RetryDistribution
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

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

### -Enabled

> Applicable: Security & Compliance

The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled. This is the default value.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Security & Compliance

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the name of the mobile device tenant policy that you want to modify, but there's only one in your organization. The name of the policy is a GUID value. For example, a6958701-c82c-4064-ac11-64e40e7f4032. You can find this value by running the command: Get-DeviceTenantPolicy | Format-List Name.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

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
