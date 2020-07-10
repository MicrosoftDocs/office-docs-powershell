---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-antiphishpolicy
applicable: Exchange Online, Exchange Online Protection
title: Get-AntiPhishPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-AntiPhishPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AntiPhishPolicy cmdlet to view antiphish policies in your cloud-based organization. This cmdlet returns results only in Exchange Online PowerShell.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AntiPhishPolicy [-Identity <AntiPhishPolicyIdParameter>]
 [-Advanced]
 [-Impersonation]
 [-Spoof]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AntiPhishPolicy | Format-Table Name,Enabled,IsDefault
```

This example shows a summary list of all antiphish policies.

### Example 2
```powershell
Get-AntiPhishPolicy -Identity "Office365 AntiPhish Default"
```

This example shows detailed information about the antiphish policy named Office 365 AntiPhish Default.

## PARAMETERS

### -Identity
The Identity parameter specifies the antiphish policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: AntiPhishPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Advanced
The Advanced switch filters the properties that are returned to the advanced settings in the policy. For example:

- PhishThresholdLevel
- EnableSuspiciousSafetyTip (This value is always False, and you can't change it.)

You don't need to specify a value with this switch.

Advanced settings are only available in ATP anti-phishing policies.

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

### -Impersonation
The Impersonation switch filters the properties that are returned to the impersonation settings in the policy. For example:

- EnableMailboxIntelligence
- EnableMailboxIntelligenceProtection
- EnableOrganizationDomainsProtection
- EnableSimilarDomainsSafetyTips
- EnableSimilarUsersSafetyTips
- EnableTargetedDomainsProtection
- EnableTargetedUserProtection
- EnableUnusualCharactersSafetyTips
- ExcludedDomains
- ExcludedSenders
- ImpersonationProtectionState
- MailboxIntelligenceProtectionAction
- MailboxIntelligenceProtectionActionRecipients
- TargetedDomainActionRecipients
- TargetedDomainProtectionAction
- TargetedDomainsToProtect
- TargetedUserActionRecipients
- TargetedUserProtectionAction
- TargetedUsersToProtect

You don't need to specify a value with this switch.

Impersonation settings are only available in ATP anti-phishing policies.

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

### -Spoof
The Spoof switch filters the properties that are returned to the spoof settings in the policy. For example:

- EnableAntiSpoofEnforcement
- EnableUnauthenticatedSender

You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
