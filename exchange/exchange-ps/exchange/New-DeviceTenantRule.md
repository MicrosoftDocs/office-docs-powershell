---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/devices/new-devicetenantrule
applicable: Office 365 Security & Compliance Center
title: New-DeviceTenantRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-DeviceTenantRule

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the New-DeviceTenantRule cmdlet to create your organization's mobile device tenant rule in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
New-DeviceTenantRule [-ApplyPolicyTo <PolicyResourceScope>]
 [-BlockUnsupportedDevices <Boolean>] [-Confirm] [-DomainController <Fqdn>]
 [-ExclusionList <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
These are the cmdlets that are used for mobile device management in the Security & Compliance Center:

- DeviceTenantPolicy and DeviceTenantRule cmdlets: A policy that defines whether to block or allow mobile device access to Office 365 email by unsupported devices that use Exchange ActiveSync only. This setting applies to all users in your organization. Both allow and block scenarios allow reporting for unsupported devices, and you can specify exceptions to the policy based on security groups.

- DeviceConditionalAccessPolicy and DeviceConditionalAccessRule cmdlets: Policies that control mobile device access to Office 365 for supported devices. These policies are applied to security groups. Unsupported devices are not allowed to enroll in mobile device management.

- DeviceConfigurationPolicy and DeviceConfigurationRule cmdlets: Policies that control mobile device settings for supported devices. These policies are applied to security groups.

- Get-DevicePolicy: Returns all mobile device management policies regardless of type (DeviceTenantPolicy, DeviceConditionalAccessPolicy or DeviceConfigurationPolicy).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-DeviceTenantRule -ExclusionList "e10214c1-49b6-47d2-b5e6-466e918648b1","6e3931bd-a716-4bb9-9a2f-093aa2c967b4"
```

This example creates a new mobile device tenant rule with GUIDs of the security groups named Engineering and Research and Development on the exclusion list. Members of these groups are allowed access even if they use non-compliant devices

You can have only one mobile device tenant rule in your organization.

## PARAMETERS

### -ApplyPolicyTo
The ApplyPolicyTo parameter specifies where to apply the policy in your organization. Valid values for this parameter are:

- ExchangeOnline

- SharePointOnline

- ExchangeAndSharePoint

```yaml
Type: PolicyResourceScope
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockUnsupportedDevices
The BlockUnsupportedDevices parameter specifies whether to block access to your organization by unsupported devices. Valid values for this parameter are:

- $true: Unsupported devices are blocked.

- $false: Unsupported devices are allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusionList
The ExclusionList parameter specifies the security groups to exclude from this policy. Members of the specified security groups who have non-compliant devices are not affected by block access actions.

This parameter uses the GUID value of the group. To find this GUID value, run the command Get-Group | Format-Table Name,GUID.

You can specify multiple groups separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Office 365 Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
