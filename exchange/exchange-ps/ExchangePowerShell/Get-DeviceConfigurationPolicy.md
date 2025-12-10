---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-deviceconfigurationpolicy
schema: 2.0.0
title: Get-DeviceConfigurationPolicy
---

# Get-DeviceConfigurationPolicy

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DeviceConfigurationPolicy cmdlet to view device configuration policies in Basic Mobility and Security. These policies were created by using the New-DeviceConfigurationPolicy cmdlet or on the **Basic Mobility and Security** page with option **If a device doesn't meet the requirements above, then...** \> **Allow access (device enrollment is required)** selected.

> [!TIP]
> The Get-DevicePolicy cmdlet returns results for device conditional access policies and device configuration policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DeviceConfigurationPolicy [[-Identity] <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
In PowerShell, a policy in Basic Mobility and Security contains a device policy (a device conditional access policy or a device configuration policy) and an associated device rule (a device conditional access rule or a device configuration rule). For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

In device configuration policies, devices that don't meet the access requirement settings in the policy are prompted to enroll in Basic Mobility and Security from accessing Microsoft 365 resources in supported apps. You specify the policy settings in the associated device configuration rule. For more information, see [Access control for Microsoft 365 email and documents](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/capabilities#access-control-for-microsoft-365-email-and-documents).

The interesting properties in a device policy are:

- Name (you can't change the name after you create the policy)
- Comment
- Enabled (you can only disable and enable policies in PowerShell)
- Mode
- Priority (corresponds to the order that policies are shown on the **Basic Mobility and Security** page)

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DeviceConfigurationPolicy | Format-Table Name,Enabled,Mode,Priority
```

This example shows summary information for all device configuration policies.

### Example 2
```powershell
Get-DeviceConfigurationPolicy -Identity "Engineering Group"
```

This example shows details about the device configuration policy named Engineering Group.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance

The Identity parameter specifies the device configuration policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
