---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings
schema: 2.0.0
title: Set-CsUserCallingSettings
---

# Set-CsUserCallingSettings

## SYNOPSIS
This cmdlet will set the call forwarding, simultaneous ringing and call group settings for the specified user.

## SYNTAX

### Identity (Default)
```
Set-CsUserCallingSettings -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>] [<CommonParameters>]
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

## DESCRIPTION
This cmdlet sets the call forwarding, simultaneous ringing and call group settings for the specified user.

When specifying settings you need to specify all settings with a settings grouping, for instance, you can't just change a forwarding target. Instead, you need to
start by  getting the current settings, making the necessary changes, and then setting/writing all settings within the settings group.

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

## PARAMETERS

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

The forwarding target. Supported types of values are ObjectId's, SIP addresses and phone numbers.
For phone numbers we support the following types of formats: E.164 (+12065551234 or +1206555000;ext=1234) or non-E.164 like 1234.

Only used when ForwardingTargetType is SingleTarget.

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

The forwarding target type. Supported values are Voicemail, SingleTarget, MyDelegates and Group. Voicemail is only supported for Immediate forwarding.

SingleTarget is used when forwarding to another user or PSTN phone number. MyDelegates is used when forwarding to the users's delegates (there needs to be at least 1
delegate). Group is used when forwarding to the user's call group (it needs to have at least 1 member).

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
The Identity of the user to set call forwarding, simultaneous ringing and call group settings for. Can be specified using the ObjectId or the SIP address.

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

The unanswered target. Supported type of values are ObjectId, SIP address and phone number.
For phone numbers we support the following types of formats: E.164 (+12065551234 or +1206555000;ext=1234) or non-E.164 like 1234.

Only used when UnansweredTargetType is SingleTarget.

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

The unanswered target type. Supported values are Voicemail, SingleTarget, MyDelegates and Group.

SingleTarget is used when forwarding the unanswered call to another user or phone number. MyDelegates is used when forwarding the unanswered call to the users's
delegates. Group is used when forwarding the unanswered call to the specified user's call group.

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
The cmdlet is available in Teams PowerShell module 4.0.0 or later.

The specified user need to have the Microsoft Phone System license assigned.

When forwarding to MyDelegates, the specified user needs to have one or more delegates defined that are allowed to receive calls. When forwarding to Group, the
specified user needs to have one or more members of the user's call group.

The cmdlet is validating the different settings and is always writing all the parameters in a settings group. You might see validation errors from the cmdlet due to
this behavior. As an example, if you have ForwardingTargetType set to Group and you want to remove all members of the call group, you will get a validation error.

You can specify a SIP URI without 'sip:' on input, but the output from Get-CsUserCallingSettings will show the full SIP URI.

You are not able to configure delegates via this cmdlet. Please use New-CsUserCallingDelegate, Set-CsUserCallingDelegate cmdlets and Remove-CsUserCallingDelegate.

## RELATED LINKS
[Get-CsUserCallingSettings](https://learn.microsoft.com/powershell/module/microsoftteams/get-csusercallingsettings)

[New-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/new-csusercallingdelegate)

[Set-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate)

[Remove-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csusercallingdelegate)
