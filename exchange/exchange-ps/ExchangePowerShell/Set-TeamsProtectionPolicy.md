---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-teamsprotectionpolicy
schema: 2.0.0
title: Set-TeamsProtectionPolicy
---

# Set-TeamsProtectionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-TeamsProtectionPolicy cmdlet to modify Microsoft Teams protection policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-TeamsProtectionPolicy [-Identity] <TeamsProtectionPolicyIdParameter>
 [-AdminDisplayName <String>]
 [-Confirm]
 [-HighConfidencePhishQuarantineTag <String>]
 [-MalwareQuarantineTag <String>]
 [-WhatIf]
 [-ZapEnabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-TeamsProtectionPolicy -Identity "Teams Protection Policy" -HighConfidencePhishQuarantineTag AdminOnlyWithNotifications
```

This example changes the quarantine policy that's used for high confidence phishing detections.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the Teams protection policy that you want to modify. There's only one Teams protection policy in an organization named Teams Protection Policy.

```yaml
Type: TeamsProtectionPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdminDisplayName

> Applicable: Exchange Online

The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

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

> Applicable: Exchange Online

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

### -HighConfidencePhishQuarantineTag

> Applicable: Exchange Online

The HighConfidencePhishQuarantineTag parameter specifies the quarantine policy that's used for messages that are quarantined as high confidence phishing by ZAP for Teams. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages, and whether users receive quarantine notifications. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the default quarantine policy that's used is named AdminOnlyAccessPolicy. For more information about this quarantine policy, see [Anatomy of a quarantine policy](https://learn.microsoft.com/defender-office-365/quarantine-policies#anatomy-of-a-quarantine-policy).

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

### -MalwareQuarantineTag

> Applicable: Exchange Online

The MalwareQuarantineTag parameter specifies the quarantine policy that's used for messages that are quarantined as malware by ZAP for Teams. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages, and whether users receive quarantine notifications. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the default quarantine policy that's used is named AdminOnlyAccessPolicy. For more information about this quarantine policy, see [Anatomy of a quarantine policy](https://learn.microsoft.com/defender-office-365/quarantine-policies#anatomy-of-a-quarantine-policy).

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

### -WhatIf

> Applicable: Exchange Online


> Applicable: Exchange Online

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

### -ZapEnabled

> Applicable: Exchange Online

The ZapEnabled parameter specifies whether to enable zero-hour auto purge (ZAP) for malware and high confidence phishing messages in Teams messages. Valid values are:

- $true: ZAP for malware and high confidence phishing messages in Teams is enabled. This is the default value.
- $false: ZAP for malware and high confidence phishing messages in Teams is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
