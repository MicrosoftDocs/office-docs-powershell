---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamscallholdpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsCallHoldPolicy
schema: 2.0.0
ms.reviewer:
manager: abnair
ms.author: jomarque
author: joelhmarquez
---

# Grant-CsTeamsCallHoldPolicy

## SYNOPSIS

Assigns a per-user Teams call hold policy to one or more users. The Teams call hold policy is used to customize the call hold experience for Teams clients.


## SYNTAX

### Identity (Default)
```
grant-CsTeamsCallHoldPolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String> [-Tenant <System.Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
grant-CsTeamsCallHoldPolicy [-PolicyName] <String> [-Tenant <System.Guid>] [-DomainController <Fqdn>]
 [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.

Assigning a teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsCallHoldPolicy -Identity 'KenMyer@contoso.com' -PolicyName 'ContosoPartnerTeamsCallHoldPolicy'
```

The command shown in Example 1 assigns the per-user Teams call hold policy, ContosoPartnerTeamsCallHoldPolicy, to the user with the user principal name (UPN) "KenMyer@contoso.com".

### Example 2
```powershell
PS C:\> Grant-CsTeamsCallHoldPolicy -Identity 'Ken Myer' -PolicyName 'ContosoPartnerTeamsCallHoldPolicy'
```

The command shown in Example 2 assigns the per-user Teams call hold policy, ContosoPartnerTeamsCallHoldPolicy, to the user with the display name "Ken Myer".

### Example 3
```powershell
PS C:\> Grant-CsTeamsCallHoldPolicy -Identity 'Ken Myer' -PolicyName $null
```

In Example 3, any per-user Teams call hold policy previously assigned to the user "Ken Myer" is revoked.
As a result, the user will be managed by the global Teams call hold policy.

### Example 4
```powershell
PS C:\> Grant-CsTeamsCallHoldPolicy -Global -PolicyName 'ContosoPartnerTeamsCallHoldPolicy'
```

The command shown in Example 4 sets the Teams call hold policy, ContosoPartnerTeamsCallHoldPolicy, as the Global policy which will apply to all users in your tenant.

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant. To skip a warning when you do this operation, specify "-Global".

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be assigned the per-user Teams call hold policy.
User Identities can be specified using one of the following formats:

- The user's SIP address;
- The user's user principal name (UPN);
- The user's Active Directory display name (for example, Ken Myer).

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the Teams call hold policy.

By default, the Grant-CsTeamsCallHoldPoly cmdlet does not pass objects through the pipeline.

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

### -PolicyName
Name of the policy to be assigned. The PolicyName is simply the policy Identity without the policy scope, i.e. the "Tag:" prefix.

For example, a policy with the Identity Tag:ContosoPartnerCallHoldPolicy has a PolicyName equal to ContosoPartnerCallHoldPolicy.

To revoke a per-user policy previously assigned to a user, set the PolicyName to a null value ($null).

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

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Guid
Parameter Sets: (All)
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

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsCallHoldPolicy](New-CsTeamsCallHoldPolicy.md)

[Get-CsTeamsCallHoldPolicy](Get-CsTeamsCallHoldPolicy.md)

[Set-CsTeamsCallHoldPolicy](Set-CsTeamsCallHoldPolicy.md)

[Remove-CsTeamsCallHoldPolicy](Remove-CsTeamsCallHoldPolicy.md)
