---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: mdress
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsenhancedencryptionpolicy
schema: 2.0.0
title: Grant-CsTeamsEnhancedEncryptionPolicy
---

# Grant-CsTeamsEnhancedEncryptionPolicy

## SYNOPSIS
Cmdlet to assign a specific Teams enhanced encryption Policy to a user.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsEnhancedEncryptionPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>][-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsEnhancedEncryptionPolicy [-PassThru] [[-PolicyName] <String>] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsEnhancedEncryptionPolicy [-PassThru] [[-PolicyName] <String>] -Group <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Cmdlet to assign a specific Teams enhanced encryption Policy to a user.

The TeamsEnhancedEncryptionPolicy enables administrators to determine which users in your organization can use the enhanced encryption settings in Teams, setting for End-to-end encryption in ad-hoc 1-to-1 VOIP calls is the parameter supported by this policy currently.

## EXAMPLES

### EXAMPLE 1
```PowerShell
PS C:\> Grant-CsTeamsEnhancedEncryptionPolicy -Identity 'KenMyer@contoso.com' -PolicyName 'ContosoPartnerTeamsEnhancedEncryptionPolicy'
```

The command shown in Example 1 assigns the per-user Teams enhanced encryption policy, ContosoPartnerTeamsEnhancedEncryptionPolicy, to the user with the user principal name (UPN) "KenMyer@contoso.com".

### EXAMPLE 2
```PowerShell
PS C:\> Grant-CsTeamsEnhancedEncryptionPolicy -Identity 'Ken Myer' -PolicyName $null
```

In Example 2, any per-user Teams enhanced encryption policy previously assigned to the user "Ken Myer" is revoked.

As a result, the user will be managed by the global Teams enhanced encryption policy.

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

### -Global
Use this switch if you want to grant the specified policy to be the default policy for all users in the tenant.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier assigned to the Teams enhanced encryption policy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsEnhancedEncryptionPolicy cmdlet does not pass objects through the pipeline.

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

### -PolicyName
Specifies the name of the policy to be assigned. The PolicyName is the policy identity minus the policy scope ("tag:"). A policy that has an identity of "Tag:ContosoPartnerTeamsEnhancedEncryptionPolicy" has a PolicyName of "ContosoPartnerTeamsEnhancedEncryptionPolicy". If you set PolicyName to a null value, then the command will unassign any individual policy assigned to the user. For example: Grant-CsTeamsEnhancedEncryptionPolicy -Identity "Ken Myer" -PolicyName $Null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: False
Position: Named
Default value: None
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

[Set-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsenhancedencryptionpolicy)

[Remove-CsTeamsEnhancedEncryptionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsenhancedencryptionpolicy)
