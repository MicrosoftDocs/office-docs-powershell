---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-deviceconditionalaccesspolicy
schema: 2.0.0
title: New-DeviceConditionalAccessPolicy
---

# New-DeviceConditionalAccessPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DeviceConditionalAccessPolicy cmdlet to create device conditional access policies in Basic Mobility and Security. These policies also result from creating policies on the **Basic Mobility and Security** page with option **If a device doesn't meet the requirements above, then...** \> **Block access** selected.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DeviceConditionalAccessPolicy [-Name] <String>
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In PowerShell, a policy in Basic Mobility and Security contains a device policy (a device conditional access policy or a device configuration policy) and an associated device rule (a device conditional access rule or a device configuration rule). For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

In device conditional access policies, devices that don't meet the access requirement settings in the policy are prevented from accessing Microsoft 365 resources in supported apps. You specify the policy settings in the associated device conditional access rule. For more information, see [Access control for Microsoft 365 email and documents](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/capabilities#access-control-for-microsoft-365-email-and-documents).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-DeviceConditionalAccessPolicy -Identity "Human Resources"
```

This example creates a new device conditional access policy named Human Resources. After you create the policy, use the New-DeviceConditionalAccessRule cmdlet to create the associated device conditional access rule.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the policy. If the value contains spaces, enclose the value in double quotation marks.

You can't change the name of the policy after you create it.

The policy name (for example, Human Resources) is used in the name value of the associated rule when you create it (for example, Human Resources{xxx}).

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

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

- $true: The policy is enabled. This value is the default.
- $false: The policy is disabled.

You can only disable and re-enable policies in PowerShell.

```yaml
Type: Boolean
Parameter Sets: (All)
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
