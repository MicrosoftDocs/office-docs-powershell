---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsenhancedencryptionpolicy
title: Get-CsTeamsEnhancedEncryptionPolicy
author: xinawang
ms.author: serdars
manager: mdress
schema: 2.0.0
---

# Get-CsTeamsEnhancedEncryptionPolicy

## SYNOPSIS
Returns information about the teams enhanced encryption policies configured for use in your organization.
## SYNTAX

```
Get-CsTeamsEnhancedEncryptionPolicy [-LocalStore] [[-Identity] <Object>] [-Filter <Object>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns information about the Teams enhanced encryption policies configured for use in your organization.
The TeamsEnhancedEncryptionPolicy enables administrators to determine which users in your organization can use the enhanced encryption settings in Teams, setting for End-to-end encryption in ad-hoc 1-to-1 VOIP calls is the parameter supported by this policy currently.

## EXAMPLES

### EXAMPLE 1
```PowerShell
PS C:\> Get-CsTeamsEnhancedEncryptionPolicy
```

The command shown in Example 1 returns information for all the teams enhanced encryption policies configured for use in the tenant.

### EXAMPLE 2
```PowerShell
PS C:\> Get-CsTeamsEnhancedEncryptionPolicy -Identity 'ContosoPartnerEnhancedEncryptionPolicy'
```

In Example 2, information is returned for a single teams enhanced encryption policy: the policy with the Identity ContosoPartnerEnhancedEncryptionPolicy.

## PARAMETERS

### -LocalStore
Internal Microsoft use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier assigned to the Teams enhanced encryption policy.

Use the "Global" Identity if you wish to retrieve the policy set for the entire tenant.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
If you don't know what policies have been pre-constructed, you can use filter to identify all policies available. This is a regex string against the name (Identity) of the pre-constructed policies.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsenhancedencryptionpolicy)

[Set-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsenhancedencryptionpolicy)

[Remove-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsenhancedencryptionpolicy)

[Grant-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsenhancedencryptionpolicy)
