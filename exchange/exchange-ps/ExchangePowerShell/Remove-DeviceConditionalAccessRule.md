---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-deviceconditionalaccessrule
schema: 2.0.0
title: Remove-DeviceConditionalAccessRule
---

# Remove-DeviceConditionalAccessRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Remove-DeviceConditionalAccessRule cmdlet to remove device conditional access rules from Basic Mobility and Security in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-DeviceConditionalAccessRule [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In PowerShell, a policy in Basic Mobility and Security contains a device policy (a device conditional access policy or a device configuration policy) and an associated device rule (a device conditional access rule or a device configuration rule). For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

In device conditional access policies, devices that don't meet the access requirement settings in the policy are prevented from accessing Microsoft 365 resources in supported apps. You specify the policy settings in the associated device conditional access rule. For more information, see [Access control for Microsoft 365 email and documents](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/capabilities#access-control-for-microsoft-365-email-and-documents).

> [!TIP]
> You can't remove the last remaining device rule in your organization. Regardless of how you tried to remove it (on the **Basic Mobility and Security** page, by removing the associated device policy first, or by removing the device rule directly), the _Mode_ value of the last device rule remains in the `PendingDeletion` state. To complete the deletion of the rule, create one or more policies (device policies and associated device rules) on the **Basic Mobility and Security** page or in PowerShell.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-DeviceConditionalAccessRule "Management Group{394b}"
```

This example removes the device conditional access rule named Management Group{394b} without removing the associated device conditional access policy named Management Group (you need to manually remove the policy).

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the device conditional access rule that you want to remove. The name of the rule uses the syntax `<AssociatedDeviceConditionalAccessPolicyName>{<xxx>}`. For example, `Management Group{394b}`.

You can find the name value by running the command: `Get-DeviceConditionalAccessRule | Format-List Name`.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
