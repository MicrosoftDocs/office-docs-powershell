---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csonlinevoiceroutingpolicy
applicable: Skype for Business Online
title: Grant-CsOnlineVoiceRoutingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Grant-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Assigns a per-user online voice routing policy to one or more users. Online voice routing policies manage online PSTN usages for Phone System users.

## SYNTAX

### Identity (Default)
```
Grant-CsOnlineVoiceRoutingPolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String> [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsOnlineVoiceRoutingPolicy [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>]
 [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Microsoft Phone System Direct Routing scenarios. Assigning your Teams users an online voice routing policy enables those users to receive and to place phone calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Grant-CsOnlineVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName "RedmondOnlineVoiceRoutingPolicy"
```

The command shown in Example 1 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy to the user with the display name "Ken Myer".

### -------------------------- Example 2 --------------------------
```
PS C:\> Grant-CsOnlineVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName $Null
```

In Example 2, any per-user online voice routing policy previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global online voice routing policy. To unassign a per-user policy, set the PolicyName to a null value ($Null).

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineUser | Grant-CsOnlineVoiceRoutingPolicy -PolicyName "RedmondOnlineVoiceRoutingPolicy"
```

Example 3 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy to all the users in the tenant. To do this, the command first calls the `Get-CsOnlineUser` cmdlet to get all user accounts enabled for Skype for Business Online. Those user accounts are then piped to the `Grant-CsOnlineVoiceRoutingPolicy` cmdlet, which assigns each user the online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 4 --------------------------
```
PS C:\> Grant-CsOnlineVoiceRoutingPolicy -PolicyName "RedmondOnlineVoiceRoutingPolicy" -Global
```

Example 4 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy to all the users in the tenant, except any that have an explicit policy assignment.

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
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant, except any that have an explicit policy assignment. To skip a warning when you do this operation, specify this parameter.

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
Indicates the Identity of the user account to be assigned the per-user online voice routing policy. User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).

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
Enables you to pass a user object through the pipeline that represents the user account being assigned the online voice routing policy. By default, the `Grant-CsOnlineVoiceRoutingPolicy` cmdlet does not pass objects through the pipeline.

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
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondOnlineVoiceRoutingPolicy has a PolicyName equal to RedmondOnlineVoiceRoutingPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

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
Globally unique identifier (GUID) of the tenant account whose online voice routing policy is being assigned. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/powershell/module/skype/new-csonlinevoiceroutingpolicy?view=skype-ps)

[Get-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/powershell/module/skype/get-csonlinevoiceroutingpolicy?view=skype-ps)

[Set-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoiceroutingpolicy?view=skype-ps)

[Remove-CsOnlineVoiceRoutingPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csonlinevoiceroutingpolicy?view=skype-ps)
