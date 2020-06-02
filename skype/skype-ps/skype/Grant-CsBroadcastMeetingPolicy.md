---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/grant-csbroadcastmeetingpolicy
applicable: Skype for Business Online
title: Grant-CsBroadcastMeetingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Grant-CsBroadcastMeetingPolicy

## SYNOPSIS
Use the Grant-CsBroadcastMeetingPolicy cmdlet to assign a broadcast meeting policy to a user.

## SYNTAX
```
Grant-CsBroadcastMeetingPolicy [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>]
 [-Identity] <UserIdParameter> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Administrators can manage Broadcast meeting functionality in Skype for Business Online using the following:
- Broadcast meeting configuration at the tenant level
- Broadcast meeting policy at the user level
- Conferencing  policy at the user level.

Broadcast meeting configuration and broadcast meeting policy govern broadcast-specific functionality. In addition, the settings of the conferencing policy assigned to the user producing the broadcast also general conferencing settings that are also relevant for broadcast meetings.  

This document describes how to specify which broadcast meeting policy is assigned to a user. Be sure to also review the following docs to manage conferencing policy:[Grant-CsConferencingPolicy](Grant-CsConferencingPolicy.md), [New-CsConferencingPolicy](New-CsConferencingPolicy.md), and [Set-CsConferencingPolicy](Set-CsConferencingPolicy.md).

**NOTES**
- Broadcast meeting policies are predefined in Skype for Business. The defined settings for each policy can be displayed by using the Get-CsBroadcastMeetingPolicy cmdlet with no parameters.
- New broadcast meeting policy instance can't be created, and existing policies can't be modified. They can only be granted, or assigned to users.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Grant-CsBroadcastMeetingPolicy -Identity jphillips@contoso.com -PolicyName BroadcastMeetingPolicyAllEnabled
```

This example grants the BroadcastMeetingPolicyAllEnabled policy to a user identified by their User Principal Name (UPN).

### -------------------------- Example 2 -------------------------- 
```
Grant-CsBroadcastMeetingPolicy -Identity jphillips@contoso.com -PolicyName $Null
```

In Example 2, any per-user broadcast meeting policy previously assigned to the user jphillips is unassigned from that user; as a result, they will be managed by the global broadcast meeting policy.
To unassign a per-user policy, set the PolicyName to a null value ($Null).


## PARAMETERS

### -Identity
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Specifies the name of the policy to be assigned to a user.
A list of the policies for your organization can be retrieved using Get-CsBroadcastMeetingPolicy.
The PolicyName is the policy identity minus the policy scope (the "tag:" prefix).
For example, a policy with the identity "Tag:BroadcastMeetingPolicyDisabled" has a PolicyName equal to "BroadcastMeetingPolicyDisabled".
To unassign a previously assigned policy, set PolicyName to $Null.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

[Get-CsBroadcastMeetingPolicy](Get-CsBroadcastMeetingPolicy.md)
[Grant-CsConferencingPolicy](Grant-CsConferencingPolicy.md)
[New-CsConferencingPolicy](New-CsConferencingPolicy.md)
[Set-CsConferencingPolicy](Set-CsConferencingPolicy.md)
[Set-CsBroadcastMeetingConfiguration](Set-CsBroadcastMeetingConfiguration.md)

