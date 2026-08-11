---
applicable: Microsoft Teams
author: frankpeng7
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: zhengni
Module Name: MicrosoftTeams
ms.author: frpeng
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csapplicationaccesspolicy
schema: 2.0.0
title: Grant-CsApplicationAccessPolicy
---

# Grant-CsApplicationAccessPolicy

## SYNOPSIS

Assigns a per-user application access policy to one or more users. After assigning an application access policy to a user, the applications configured in the policy will be authorized to access online meetings on behalf of that user.

## SYNTAX

### Identity

```
Grant-CsApplicationAccessPolicy [-Identity <UserIdParameter>] [-PolicyName <String>] [-Global]
```

### GrantToTenant (Default)
```
Grant-CsApplicationAccessPolicy [-Global] [-PassThru] [-PolicyName <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsApplicationAccessPolicy [-PassThru] [-PolicyName <String>] [-MsftInternalProcessingMode <String>]
 -Group <String> [-Rank <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet assigns a per-user application access policy to one or more users. After assigning an application access policy to a user, the applications configured in the policy will be authorized to access online meetings on behalf of that user.**Note:** You can assign only 1 application access policy at a time to a particular user. Assigning a new application access policy to a user will override the existing application access policy if any.

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

The command shown above assigns the per-user application access policy ASimplePolicy to all the users in the tenant. To do this, the command first calls the `Get-CsOnlineUser` cmdlet to get all user accounts enabled for Microsoft Teams or Skype for Business Online. Those user accounts are then piped to the `Grant-CsApplicationAccessPolicy` cmdlet, which assigns each user the application access policy "ASimplePolicy".

### Assign an application access policy to users who have not been assigned one

```
PS C:\> Grant-CsApplicationAccessPolicy -PolicyName "ASimplePolicy" -Global
```

The command shown above assigns the per-user application access policy "ASimplePolicy" to all the users in the tenant, except any that have an explicit policy assignment.

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

When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant, except any that have an explicit policy assignment. For example, if the user already have application access policy "A" assigned, and tenant admin assigns "B" globally, then application access policy "A" will take effect for the user.

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

### -MsftInternalProcessingMode

For internal use only.

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

### -PassThru

Allows the user to indicate whether the cmdlet passes an output object through the pipeline, in this case, after a process is stopped. Be aware that this parameter is tied to the cmdlet itself instead of to a property of the input object.

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

Name of the policy to be assigned. The PolicyName is simply the policy Identity without the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:ASimplePolicy has a PolicyName equal to ASimplePolicy.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csapplicationaccesspolicy)
[Get-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csapplicationaccesspolicy)
[Set-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csapplicationaccesspolicy)
[Remove-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csapplicationaccesspolicy)
