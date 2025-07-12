---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-deviceconfigurationrule
applicable: Exchange Online, Security & Compliance
title: Get-DeviceConfigurationRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DeviceConfigurationRule

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DeviceConfigurationRule cmdlet to view mobile device configuration rules in Basic Mobility and Security in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DeviceConfigurationRule [[-Identity] <ComplianceRuleIdParameter>]
 [-CompareToWorkload]
 [-DomainController <Fqdn>]
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
Get-DeviceConfigurationRule | Format-List Name,Disabled,Priority
```

This example shows summary information for all mobile device configuration rules.

### Example 2
```powershell
Get-DeviceConfigurationRule -Identity "Legal Team{58b50d1c-2b18-461c-8893-3e20c648b136}"
```

This example shows details about the mobile device configuration rule named Legal Team{58b50d1c-2b18-461c-8893-3e20c648b136}

## PARAMETERS

### -Identity
The Identity parameter specifies the mobile device configuration rule that you want to view. The name of the rule uses the syntax `<Mobile device configuration policy name>{<GUID value>}`. For example, `Legal Team{58b50d1c-2b18-461c-8893-3e20c648b136}`.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CompareToWorkload
The CompareToWorkload switch specifies whether to compare the mobile device configuration rule to Intune rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
