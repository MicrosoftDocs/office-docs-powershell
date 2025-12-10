---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-deviceconditionalaccessrule
schema: 2.0.0
title: Get-DeviceConditionalAccessRule
---

# Get-DeviceConditionalAccessRule

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DeviceConditionalAccessRule cmdlet to view device conditional access rules in Basic Mobility and Security. These rules were created by using the New-DeviceConditionalAccessRule cmdlet or on the **Basic Mobility and Security** page with option **If a device doesn't meet the requirements above, then...** \> **Block access** selected.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DeviceConditionalAccessRule [[-Identity] <ComplianceRuleIdParameter>]
 [-CompareToWorkload]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
In PowerShell, a policy in Basic Mobility and Security contains a device policy (a device conditional access policy or a device configuration policy) and an associated device rule (a device conditional access rule or a device configuration rule). For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

In device conditional access policies, devices that don't meet the access requirement settings in the policy are prevented from accessing Microsoft 365 resources in supported apps. You specify the policy settings in the associated device conditional access rule. For more information, see [Access control for Microsoft 365 email and documents](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/capabilities#access-control-for-microsoft-365-email-and-documents).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DeviceConditionalAccessRule | Format-List Name,TargetGroups,Mode
```

This example shows a summary list of all device conditional access rules.

### Example 2
```powershell
Get-DeviceConditionalAccessRule -Identity "Management Group {394b}"
```

This example shows detailed information for the device conditional access rule named Management Group{394b} that's associated with the device conditional access policy named Management Group.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance

The Identity parameter specifies the device conditional access rule that you want to view. The name of the rule uses the syntax `<AssociatedDeviceConditionalAccessPolicyName>{<xxx>}`. For example, `Management Group{394b}`.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CompareToWorkload

> Applicable: Security & Compliance

The CompareToWorkload switch specifies whether to compare the device conditional access rule to Intune rules. You don't need to specify a value with this switch.

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

### -DomainController

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
