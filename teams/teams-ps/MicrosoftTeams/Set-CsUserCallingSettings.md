---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings
schema: 2.0.0
title: Set-CsUserCallingSettings
---

# Set-CsUserCallingSettings

## SYNOPSIS

Configures calling settings for a specified user or resource account, including call forwarding, simultaneous ringing, call groups, delegation, and other call-handling options.

For user accounts, this cmdlet enables configuration of delegates and user-specific call-handling behavior.

For phone-centric scenarios, this cmdlet also supports resource account identities configured for Teams Phone Agents, Call Queues, Auto Attendants, and standalone resource accounts. For these resource accounts, the cmdlet configures immediate forwarding, unanswered call settings, and the maximum number of concurrent calls. It also configures Common Area Phone (CAP) users or regular users as delegates for the resource account.


## SYNTAX

### Identity (Default)
   
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>] [<CommonParameters>]
```

### BusyOnBusy
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -BusyOnBusyOption <String> [<CommonParameters>]
```

### CallGroupNotification
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -GroupNotificationOverride <String> [<CommonParameters>]
```

### CallGroupMembership
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -GroupMembershipDetails <ICallGroupMembershipDetails[]> [<CommonParameters>]
```

### CallGroup
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>] -CallGroupOrder <String>
 -CallGroupTargets <Array> [<CommonParameters>]
```

### Unanswered
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -IsUnansweredEnabled <Boolean> -UnansweredDelay <String> [-UnansweredTarget <String>]
 [-UnansweredTargetType <String>] [<CommonParameters>]
```

### UnansweredOnOff
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -IsUnansweredEnabled <Boolean> [<CommonParameters>]
```

### Forwarding
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -IsForwardingEnabled <Boolean> -ForwardingType <String> -ForwardingTargetType <String>
 [-ForwardingTarget <String>] [<CommonParameters>]
```

### ForwardingOnOff
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>]
 -IsForwardingEnabled <Boolean> [<CommonParameters>]
```

### MaximumConcurrentCalls
```
Set-CsUserCallingSettings -Identity <String> [-MaximumConcurrentCalls <Int32>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [<CommonParameters>]

```

## DESCRIPTION

This cmdlet sets call forwarding, simultaneous ringing, call group, delegation, and other applicable call-handling settings for the specified user or resource account.
For user accounts, the following target types are supported:

- Forwarding: SingleTarget, Voicemail, MyDelegates, and Group.
- Unanswered: "" (no target type), SingleTarget, Voicemail, MyDelegates, and Group.
  
For resource accounts, the supported target types differ:
- Forwarding:  SingleTarget, MyDelegates, and Group.
- Unanswered: "" (no target type), SingleTarget, and Group. MyDelegates isn't supported for resource account unanswered call settings.

For both users and resource accounts, SingleTarget can specify a user, phone number, or resource account. 

For resource accounts Shared Voicemail can be reached by using SingleTarget to target a resource account associated with an Auto Attendant (AA) configured to route calls to Shared Voicemail.

When a resource account is associated with an Auto Attendant (AA), Call Queue (CQ), or Teams Phone Agent (TPA), and immediate forwarding is enabled, incoming calls are forwarded immediately according to the resource account's forwarding settings. In this case, the calls don't reach the associated AA, CQ, or TPA.

When changing settings, all settings within the applicable settings group must be specified together. For example, you can't update only a forwarding target. First retrieve the current settings, modify the required values, and then use this cmdlet to write the complete settings group.


## EXAMPLES

### Example 1
```powershell
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $true -ForwardingType Immediate -ForwardingTargetType Voicemail
```
This example shows setting immediate call forwarding to voicemail for user1@contoso.com.

### Example 2
```powershell
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $false
```
This example shows removing call forwarding for user1@contoso.com.

### Example 3
```powershell
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $true -ForwardingType Simultaneous -ForwardingTargetType SingleTarget -ForwardingTarget "+12065551234"
```
This example shows setting simultaneous ringing to +12065551234 for user1@contoso.com.

### Example 4
```powershell
Set-CsUserCallingSettings -Identity user1@contoso.com -IsUnansweredEnabled $true -UnansweredTargetType MyDelegates -UnansweredDelay 00:00:30
```
This example shows setting unanswered call forward to the delegates after 30 seconds for user1@contoso.com.

### Example 5
```powershell
$cgm = @("sip:user2@contoso.com","sip:user3@contoso.com")
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder InOrder -CallGroupTargets $cgm
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $true -ForwardingType Immediate -ForwardingTargetType Group
```
This example shows creating a call group for user1@contoso.com with 2 members and setting immediate call forward to the call group for user1@contoso.com.

### Example 6
```powershell
$ucs = Get-CsUserCallingSettings -Identity user1@contoso.com
$cgt = {$ucs.CallGroupTargets}.Invoke()
$cgt.Add("sip:user5@contoso.com")
$cgt.Remove("sip:user6@contoso.com")
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder $ucs.CallGroupOrder -CallGroupTargets $cgt

$gmd = (Get-CsUserCallingSettings -Identity user5@contoso.com).GroupMembershipDetails
$gmd[[array]::IndexOf($gmd.CallGroupOwnerId,'sip:user1@contoso.com')].NotificationSetting = 'Banner'
Set-CsUserCallingSettings -Identity user5@contoso.com -GroupMembershipDetails $gmd
```

This example shows how to update the call group of user1@contoso.com to add user5@contoso.com and remove user6@contoso.com. In addition the notification setting for
user5@contoso.com for user1@contoso.com's call group is set to Banner.

The key to note here is the call group membership is defined on the object of the owner of the call group, in the above case this is user1@contoso.com. However,
the notification setting for a member for a particular call group is defined on the member. In this case user5@contoso.com.

### Example 7
```powershell
$ucs = Get-CsUserCallingSettings -Identity user1@contoso.com
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder $ucs.CallGroupOrder -CallGroupTargets @()
```

This example shows how to remove all members of the call group.

### Example 8
```powershell
[Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails[]]$gmd = @(
 [Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails]@{CallGroupOwnerId='sip:user20@contoso.com';NotificationSetting='Banner'}
 [Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails]@{CallGroupOwnerId='sip:user30@contoso.com';NotificationSetting='Mute'}
)
Set-CsUserCallingSettings -Identity user10@contoso.com -GroupMembershipDetails $gmd
```

In this example user10@contoso.com is a member of two call groups: user20@contoso.com and user30@contoso.com. User10@contoso.com would like to have Banner
notification for the first call group and Mute notification for the last one.

### Example 9
```powershell
Set-CsUserCallingSettings -Identity user2@contoso.com -GroupNotificationOverride 'Mute'
```

This example shows how to set the group notification override for user2@contoso.com. This setting overrides any specific notification setting set for the user
on any call group the user is a member of.

### Example 10
```powershell
Set-CsUserCallingSettings -Identity user6@contoso.com -IsForwardingEnabled $false
Set-CsUserCallingSettings -Identity user6@contoso.com -IsUnansweredEnabled $true -UnansweredTargetType Voicemail -UnansweredDelay 00:00:20
```

This example shows how to set the default call forwarding settings for a user.

### Example 11
```powershell
Set-CsUserCallingSettings -Identity user7@contoso.com -IsUnansweredEnabled $false
```

This example shows turning off unanswered call forwarding for a user. The Microsoft Teams client will show this as _If unanswered Do nothing_.

### Example 12 - Configure Maximum Concurrent Calls for a Resource Account
```powershell
Set-CsUserCallingSettings -Identity resource_account1@contoso.com -MaximumConcurrentCalls 5
```

This example configures the maximum number of concurrent calls that can be forwarded to delegates assigned to a resource account. The Identity parameter specifies the resource account.

The MaximumConcurrentCalls setting determines how many simultaneous calls can be handled by the resource account's delegates. In this example, a maximum of five concurrent calls is allowed. When this limit is reached, additional incoming calls are handled according to the resource account's unanswered call settings.

### Example 13 - Configure Call Handling for an Auto Attendant Resource Account with Delegates

The following example configures calling settings for a resource account associated with an Auto Attendant (AA). Immediate forwarding is disabled, delegates have been assigned to the resource account, unanswered calls are forwarded to a specific user after 20 seconds, and a maximum of five concurrent calls is allowed.
```powershell
Set-CsUserCallingSettings -Identity resource_account1@contoso.com -IsForwardingEnabled $false
Set-CsUserCallingSettings -Identity resource_account1@contoso.com -IsUnansweredEnabled $true -UnansweredDelay 00:00:20 -UnansweredTargetType SingleTarget -UnansweredTarget user1@contoso.com
Set-CsUserCallingSettings -Identity resource_account1@contoso.com -MaximumConcurrentCalls 5
```
> [!NOTE]
> Common Area Phone (CAP) users or regular users can be assigned as delegates for a resource account by using the Set-CsUserCallingDelegate cmdlet.

When the Ring delegates first toggle is enabled in the Auto Attendant's business-hours, after-hours, or holiday call flow, incoming calls are redirected to the delegates assigned to the resource account.
The resource account allows a maximum of five concurrent calls. If none of the delegates answers within the configured 20-second delay, the call is forwarded to user1@contoso.com according to the resource account's unanswered call settings. When the maximum number of concurrent calls is reached, additional incoming calls are also handled according to the resource account's unanswered call settings.


## PARAMETERS

### -BusyOnBusyOption

The busy on busy setting for the specified user. Busy on busy controls what happens to a new incoming call when the specified user is already in a call or in a conference. The supported values are:

- `PlayBusySignal`: the new incoming call is rejected with a busy signal.
- `RedirectAsUnansweredCall`: the new incoming call is handled as an unanswered call, that is, it is routed using the user's unanswered call settings (`UnansweredTargetType` and `UnansweredTarget`).
- `RingUser`: the new incoming call rings the user. This turns busy on busy off for the user.

This setting applies when the user's Teams calling policy has `BusyOnBusyEnabledType` set to `UserOverride`. Otherwise, the policy value takes precedence and this setting is ignored.

If you omit this parameter, the current busy on busy setting for the user is left unchanged.

```yaml
Type: System.String
Parameter Sets: BusyOnBusy
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallGroupOrder

The order in which to call members of the Call Group. The supported values are Simultaneous and InOrder.

You can only use InOrder, if the call group has 5 or less members.

```yaml
Type: System.String
Parameter Sets: CallGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallGroupTargets
The members of the Call Group. You need to always specify the full set of members as the parameter value. What you set here will overwrite the current call group membership.

A call group can have up to 25 members.

```yaml
Type: System.Array
Parameter Sets: CallGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingTarget

Specifies the target for forwarded calls. The target can be a user, resource account, or phone number.

A user or resource account can be specified using its ObjectId or SIP address, as applicable.

For phone numbers, supported formats include E.164 (+12065551234 or +1206555000;ext=1234) and non-E.164 formats such as 1234.

This parameter is used only when ForwardingTargetType is set to SingleTarget.


```yaml
Type: System.String
Parameter Sets: Forwarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingTargetType

The forwarding target type.

For a user, supported values are Voicemail, SingleTarget, MyDelegates, and Group. Voicemail is supported only for immediate forwarding.

For a resource account, supported values are SingleTarget, MyDelegates, and Group.

SingleTarget is used when forwarding to a user, PSTN phone number, or resource account.

MyDelegates is used when forwarding to delegates assigned to the user or resource account. At least one delegate must be assigned. For resource accounts, Common Area Phone (CAP) users or regular users can be assigned as delegates.

Group is used when forwarding to a call group. The call group must contain at least one member.

For resource accounts, Shared Voicemail can be reached by using SingleTarget to target a resource account associated with an Auto Attendant (AA) configured to route calls to Shared Voicemail.
When a resource account is associated with an Auto Attendant (AA), Call Queue (CQ), or Teams Phone Agent (TPA), and immediate forwarding is enabled, incoming calls are forwarded according to the resource account's forwarding settings and don't reach the associated AA, CQ, or TPA.


```yaml
Type: System.String
Parameter Sets: Forwarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingType

The type of forwarding to set. Supported values are Immediate and Simultaneous

```yaml
Type: System.String
Parameter Sets: Forwarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMembershipDetails

The group membership details for the specified user. It is an array of ICallGroupMembershipDetails, which is an object containing the identity of an owner of a
call group and the notification setting for the specified user for that call group.

This parameter only exists if the specified user is a member of a call group. You can't create it, you can only change it.

You need to always specify the full group membership details as the parameter value. What you set here will over-write the current group membership details.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails[]
Parameter Sets: CallGroupMembership
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -GroupNotificationOverride

The group notification override that will be set on the specified user. The supported values are Ring, Mute and Banner.

The initial setting is shown as Null. It means that the group notification set for the user in the call group is used. If you set GroupNotificationOverride to Mute, that setting will override the group notification for the user in the call group. If you set the GroupNotificationOverride to Ring or Banner, the group notification set for the user in the call group will be used.

```yaml
Type: System.String
Parameter Sets: CallGroupNotification
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend
{{ Fill HttpPipelinePrepend Description }}

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Runtime.SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the user or resource account to set call forwarding, simultaneous ringing, call group, delegation, and other applicable calling settings for. A user or resource account can be specified using the ObjectId or SIP address.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsForwardingEnabled

This parameter controls whether forwarding is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: Forwarding, ForwardingOnOff
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsUnansweredEnabled

This parameter controls whether forwarding for unanswered calls is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: Unanswered, UnansweredOnOff
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -MaximumConcurrentCalls

> [!IMPORTANT] 
> This cmdlet is currently available only to customers participating in a Private preview program. General Availability for this functionality has not been determined at this time.

Specifies the maximum number of concurrent calls that can be handled by delegates assigned to a resource account. Supported values are from 0 through 50.

When the configured limit is reached, additional incoming calls are handled according to the resource account's unanswered call settings.


```yaml
Type: System.Int32
Parameter Sets: MaximumConcurrentCalls
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredDelay

The time the call will ring the user before it is forwarded to the unanswered target. The supported format is hh:mm:ss and the delay range needs to be between 5 and
60 seconds in 5 seconds increments between 5 and 15 seconds, and 10 seconds increments otherwise, i.e. 00:00:05, 00:00:10, 00:00:15, 00:00:20, 00:00:30, 00:00:40, 00:00:50 and 00:01:00. The default value is 20 seconds.

```yaml
Type: System.String
Parameter Sets: Unanswered
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredTarget

Specifies the target for unanswered calls. Supported values include a user, resource account, or phone number.
A user or resource account can be specified using its ObjectId or SIP address, as applicable.

For phone numbers, the following types of formats are supported E.164 (+12065551234 or +1206555000;ext=1234) or non-E.164 like 1234.

This parameter is used only when UnansweredTargetType is set to SingleTarget.

When a resource account is specified as the SingleTarget, the call is routed according to the configuration associated with that resource account. This can be used for scenarios such as routing unanswered calls to an Auto Attendant (AA), Call Queue (CQ), or another resource account.


```yaml
Type: System.String
Parameter Sets: Unanswered
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredTargetType

The unanswered call target type.

For a user, supported values are Voicemail, SingleTarget, MyDelegates, and Group.

For a resource account, supported values are "" (no target type), SingleTarget, and Group. Voicemail and MyDelegates aren't supported as unanswered target types for resource accounts.
SingleTarget is used when forwarding an unanswered call to a user, PSTN phone number, or resource account.

MyDelegates is used when forwarding an unanswered call to the user's delegates. This option is supported for users but isn't supported for resource accounts.

Group is used when forwarding an unanswered call to the specified user's or resource account's call group.

For resource accounts, Shared Voicemail can be reached by using SingleTarget to target a resource account associated with an Auto Attendant (AA) configured to route calls to Shared Voicemail.

```yaml
Type: System.String
Parameter Sets: Unanswered
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

> [!IMPORTANT]
> Resource account calling settings are currently available to customers in Private Preview. The General Availability (GA) date has not yet been determined.

The cmdlet is available in Teams PowerShell module 4.0.0 or later.

The `BusyOnBusyOption` parameter is available in Teams PowerShell module 8.0.0 or later.

The specified user need to have the Microsoft Phone System license assigned.

When forwarding to MyDelegates, the specified user or resource account must have one or more delegates configured to receive calls. When forwarding to Group, the
specified user needs to have one or more members of the user's call group.

The cmdlet is validating the different settings and is always writing all the parameters in a settings group. You might see validation errors from the cmdlet due to
this behavior. As an example, if you have ForwardingTargetType set to Group and you want to remove all members of the call group, you will get a validation error.

You can specify a SIP URI without 'sip:' on input, but the output from Get-CsUserCallingSettings will show the full SIP URI.

You are not able to configure delegates via this cmdlet. Please use New-CsUserCallingDelegate, Set-CsUserCallingDelegate cmdlets and Remove-CsUserCallingDelegate.

Busy on busy can also be configured at the tenant and per-user level through Set-CsTeamsCallingPolicy. See [Set-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy) for details.


## RELATED LINKS
[Get-CsUserCallingSettings](https://learn.microsoft.com/powershell/module/microsoftteams/get-csusercallingsettings)

[New-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/new-csusercallingdelegate)

[Set-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate)

[Remove-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csusercallingdelegate)
