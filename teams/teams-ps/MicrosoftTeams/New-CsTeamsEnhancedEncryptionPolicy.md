---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: mdress
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsenhancedencryptionpolicy
schema: 2.0.0
title: New-CsTeamsEnhancedEncryptionPolicy
---

# New-CsTeamsEnhancedEncryptionPolicy

## SYNOPSIS
Use this cmdlet to create a new Teams enhanced encryption policy.

## SYNTAX

```
New-CsTeamsEnhancedEncryptionPolicy [-Description <Object>] [-CallingEndtoEndEncryptionEnabledType <Object>] [-MeetingEndToEndEncryption <Object>]
 [[-Identity] <Object>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to create a new Teams enhanced encryption policy.

The TeamsEnhancedEncryptionPolicy enables administrators to determine which users in your organization can use the enhanced encryption settings in Teams, setting for end-to-end encryption in ad-hoc 1-to-1 VOIP calls is the parameter supported by this policy currently.

## EXAMPLES

### EXAMPLE 1
```PowerShell
PS C:\> New-CsTeamsEnhancedEncryptionPolicy -Identity ContosoPartnerTeamsEnhancedEncryptionPolicy
```

Creates a new instance of TeamsEnhancedEncryptionPolicy called ContosoPartnerTeamsEnhancedEncryptionPolicy and applies the default values to its settings.

### EXAMPLE 2
```PowerShell
PS C:\> New-CsTeamsEnhancedEncryptionPolicy -Identity ContosoPartnerTeamsEnhancedEncryptionPolicy -CallingEndtoEndEncryptionEnabledType DisabledUserOverride -MeetingEndToEndEncryption DisabledUserOverride
```

Creates a new instance of TeamsEnhancedEncryptionPolicy called ContosoPartnerTeamsEnhancedEncryptionPolicy and applies the provided values to its settings.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling Set-CsTeamsEnhancedEncryptionPolicy.

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

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsenhancedencryptionpolicy)

[Set-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsenhancedencryptionpolicy)

[Remove-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsenhancedencryptionpolicy)

[Grant-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsenhancedencryptionpolicy)
