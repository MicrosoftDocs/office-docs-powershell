---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: mdress
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsenhancedencryptionpolicy
schema: 2.0.0
title: Remove-CsTeamsEnhancedEncryptionPolicy
---

# Remove-CsTeamsEnhancedEncryptionPolicy

## SYNOPSIS
Use this cmdlet to remove an existing Teams enhanced encryption policy.

## SYNTAX

```
Remove-CsTeamsEnhancedEncryptionPolicy [[-Identity] <Object>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove an existing Teams enhanced encryption policy.

The TeamsEnhancedEncryptionPolicy enables administrators to determine which users in your organization can use the enhanced encryption settings in Teams, setting for End-to-end encryption in ad-hoc 1-to-1 VOIP calls is the parameter supported by this policy currently.

## EXAMPLES

### EXAMPLE 1
```PowerShell
PS C:\> Remove-CsTeamsEnhancedEncryptionPolicy -Identity 'ContosoPartnerTeamsEnhancedEncryptionPolicy'
```

The command shown in Example 1 deletes the Teams enhanced encryption policy ContosoPartnerTeamsEnhancedEncryptionPolicy.

### EXAMPLE 2
```PowerShell
PS C:\> Get-CsTeamsEnhancedEncryptionPolicy -Filter 'Tag:*' | Remove-CsTeamsEnhancedEncryptionPolicy
```

In Example 2, all the Teams enhanced encryption policies configured at the per-user scope are removed. The Filter value "Tag:*" limits the returned data to Teams enhanced encryption policies configured at the per-user scope. Those per-user policies are then removed.

## PARAMETERS

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
Accept pipeline input: True (ByPropertyName)
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

[Get-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsenhancedencryptionpolicy)

[New-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsenhancedencryptionpolicy)

[Set-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsenhancedencryptionpolicy)

[Grant-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsenhancedencryptionpolicy)
