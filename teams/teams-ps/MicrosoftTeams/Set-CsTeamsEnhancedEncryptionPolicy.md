---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: mdress
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsenhancedencryptionpolicy
schema: 2.0.0
title: Set-CsTeamsEnhancedEncryptionPolicy
---

# Set-CsTeamsEnhancedEncryptionPolicy

## SYNOPSIS
Use this cmdlet to update values in existing Teams enhanced encryption policy.

## SYNTAX

```
Set-CsTeamsEnhancedEncryptionPolicy [-Description <Object>] [-CallingEndtoEndEncryptionEnabledType <Object>] [-MeetingEndToEndEncryption <Object>]
 [[-Identity] <Object>] [-Force] [-Instance <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to update values in existing Teams enhanced encryption policy.

The TeamsEnhancedEncryptionPolicy enables administrators to determine which users in your organization can use the enhanced encryption settings in Teams, setting for end-to-end encryption in ad-hoc 1-to-1 VOIP calls is the parameter supported by this policy currently.

## EXAMPLES

### EXAMPLE 1
```PowerShell
PS C:\> Set-CsTeamsEnhancedEncryptionPolicy -Identity "ContosoPartnerTeamsEnhancedEncryptionPolicy" -CallingEndtoEndEncryptionEnabledType DisabledUserOverride
```

The command shown in Example 1 modifies an existing per-user Teams enhanced encryption policy with the Identity ContosoPartnerTeamsEnhancedEncryptionPolicy.

This policy is re-assigned CallingEndtoEndEncryptionEnabledType to be DisabledUserOverride.

Any Microsoft Teams users who are assigned this policy will have their enhanced encryption policy customized such that the user can use the enhanced encryption setting in Teams.

### EXAMPLE 2
```PowerShell
PS C:\> Set-CsTeamsEnhancedEncryptionPolicy -Identity "ContosoPartnerTeamsEnhancedEncryptionPolicy" -MeetingEndToEndEncryption DisabledUserOverride
```

The command shown in Example 2 modifies an existing per-user Teams enhanced encryption policy with the Identity ContosoPartnerTeamsEnhancedEncryptionPolicy.

This policy has re-assigned MeetingEndToEndEncryption to be DisabledUserOverride.

Any Microsoft Teams users who are assigned this policy and have a Teams Premium license will have the option to create end-to-end encrypted meetings. [Learn more about end-to-end encryption for Teams meetings](https://support.microsoft.com/en-us/office/use-end-to-end-encryption-for-teams-meetings-a8326d15-d187-49c4-ac99-14c17dbd617c).

### EXAMPLE 3
```PowerShell
PS C:\> Set-CsTeamsEnhancedEncryptionPolicy -Identity "ContosoPartnerTeamsEnhancedEncryptionPolicy" -Description "allow useroverride"
```

The command shown in Example 2 modifies an existing per-user Teams enhanced encryption policy with the Identity ContosoPartnerTeamsEnhancedEncryptionPolicy.

This policy is re-assigned the description from its existing value to "allow useroverride".

## PARAMETERS

### -CallingEndtoEndEncryptionEnabledType
Determines whether end-to-end encrypted calling is available for the user in Teams. Set this to DisabledUserOverride to allow user to turn on end-to-end encrypted calls. Set this to Disabled to prohibit.

```yaml
Type: Enum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Description
Enables administrators to provide explanatory text to accompany a Teams enhanced encryption policy.

For example, the Description might include information about the users the policy should be assigned to.

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

### -Force
Suppresses all non-fatal errors.

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

Use the "Global" Identity if you wish modify the policy set for the entire tenant.

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

### -Instance
Use this to pipe a specific enhanced encryption policy to be set. You can only modify the global policy, so can only pass the global instance of the enhanced encryption policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MeetingEndToEndEncryption
Determines whether end-to-end encrypted meetings are available in Teams ([requires a Teams Premium license](https://www.microsoft.com/en-us/microsoft-teams/premium)). Set this to DisabledUserOverride to allow users to schedule end-to-end encrypted meetings. Set this to Disabled to prohibit.

```yaml
Type: Enum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Object
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsenhancedencryptionpolicy)

[New-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsenhancedencryptionpolicy)

[Remove-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsenhancedencryptionpolicy)

[Grant-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsenhancedencryptionpolicy)
