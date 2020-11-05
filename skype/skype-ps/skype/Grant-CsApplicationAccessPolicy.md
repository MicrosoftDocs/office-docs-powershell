---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csapplicationaccesspolicy
applicable: Skype for Business Online
title: Grant-CsApplicationAccessPolicy
schema: 2.0.0
manager: zhengni
author: frankpeng7
ms.author: frpeng
ms.reviewer:
---

# Grant-CsApplicationAccessPolicy

## SYNOPSIS

Assigns a per-user application access policy to one or more users. After assigning an application access policy to a user, the applications configured in the policy will be authorized to access online meetings on behalf of that user.

## SYNTAX

### FileName

```
Grant-CsApplicationAccessPolicy [-Identity <UserIdParameter>] [-PolicyName <String>] [-Global]
```

## DESCRIPTION

This cmdlet assigns a per-user application access policy to one or more users. After assigning an application access policy to a user, the applications configured in the policy will be authorized to access online meetings on behalf of that user.

## EXAMPLES

### Assign an application access policy to a user

```
PS C:\> Grant-CsApplicationAccessPolicy -Identity "dc17674c-81d9-4adb-bfb2-8f6a442e4624" -PolicyName "ASimplePolicy"
```

The command shown above assigns the per-user application access policy "ASimplePolicy" to the user with object ID "dc17674c-81d9-4adb-bfb2-8f6a442e4624".

### Unassign an application access policy from a user

```
PS C:\> Grant-CsApplicationAccessPolicy -Identity "dc17674c-81d9-4adb-bfb2-8f6a442e4624" -PolicyName $Null
```

In the command shown above, any per-user application access policy previously assigned to the user with user (object) ID "dc17674c-81d9-4adb-bfb2-8f6a442e4624" is unassigned from that user; as a result, applications configured in the policy can no longer access online meetings on behalf of that user. To unassign a per-user policy, set the PolicyName to a null value ($Null).

### Assign an application access policy to all users in the tenant

```
PS C:\> Get-CsOnlineUser | Grant-CsApplicationAccessPolicy -PolicyName "ASimplePolicy"
```

The command shown above assigns the per-user application access policy ASimplePolicy to all the users in the tenant. To do this, the command first calls the `Get-CsOnlineUser` cmdlet to get all user accounts enabled for Skype for Business Online. Those user accounts are then piped to the `Grant-CsApplicationAccessPolicy` cmdlet, which assigns each user the application access policy "ASimplePolicy".

### Assign an application access policy to users who have not been assigned one

```
PS C:\> Grant-CsApplicationAccessPolicy -PolicyName "ASimplePolicy" -Global
```

The command shown above assigns the per-user application access policy "ASimplePoicy" to all the users in the tenant, except any that have an explicit policy assignment.

## PARAMETERS

### -Identity

Indicates the user (object) ID of the user account to be assigned the per-user application access policy. 

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName

Name of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:ASimplePolicy has a PolicyName equal to ASimplePolicy.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global

When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant, except any that have an explicit policy assignment. To skip a warning when you do this operation, specify this parameter.

```yaml
Type: SwitchParameter
Parameter Sets:(All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy](New-CsApplicationAccessPolicy.md)
[Get-CsApplicationAccessPolicy](Get-CsApplicationAccessPolicy.md)
[Set-CsApplicationAccessPolicy](Set-CsApplicationAccessPolicy.md)
[Remove-CsApplicationAccessPolicy](Remove-CsApplicationAccessPolicy.md)
