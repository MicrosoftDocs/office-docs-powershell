---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/set-csusercallingsettings
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Set-CsUserCallingSettings

## SYNOPSIS
This cmdlet will set the call forwarding, simultaneous ringing and call group settings for the specified user.

> [!NOTE]
> **Preview** The use of this cmdlet is in Public Preview.
  
## SYNTAX

### Identity (Default)
```powershell
Set-CsUserCallingSettings -Identity <String> [<CommonParameters>]
```

### ForwardingOnOff
```powershell
Set-CsUserCallingSettings -Identity <String> -IsForwardingEnabled <Boolean> [<CommonParameters>]
```

### Forwarding
```powershell
Set-CsUserCallingSettings -Identity <String> -IsForwardingEnabled <Boolean> -ForwardingType <String> [-ForwardingTarget <String>] -ForwardingTargetType <String> [<CommonParameters>]
```

### UnansweredOnOff
```powershell
Set-CsUserCallingSettings -Identity <String> -IsUnansweredEnabled <Boolean> [<CommonParameters>]
```

### Unanswered
```powershell
Set-CsUserCallingSettings -Identity <String> -IsUnansweredEnabled <Boolean> [-UnansweredTarget <String>] -UnansweredTargetType <String> -UnansweredDelay <String> [<CommonParameters>]
```

### CallGroup
```powershell
Set-CsUserCallingSettings -Identity <String> -CallGroupOrder <String> -CallGroupTargets <String[]> [<CommonParameters>]
```

### CallGroupMembership
```powershell
Set-CsUserCallingSettings -Identity <String> -GroupMembershipDetails <ICallGroupMembershipDetails[]> [<CommonParameters>]
```

### CallGroupNotification
```powershell
Set-CsUserCallingSettings -Identity <String> -GroupNotificationOverride <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets the call forwarding, simultaneous ringing and call group settings for the specified user.

When specifying settings you need to specify all settings with a settings grouping, for instance, you can't just change a forwarding target. Instead you need to start by getting the current
settings, making the necessary changes and then setting/writing all settings within the settings group.


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
$cgm = @("user2@contoso.com","user3@contoso.com")
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder InOrder -CallGroupTargets $cgm
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $true -ForwardingType Immediate -ForwardingTargetType Group
```
This example shows creating a call group for user1@contoso.com with 2 members and setting immediate call forward to the call group for user1@contoso.com. 

### Example 6
```powershell
$ucs = Get-CsUserCallingSettings -Identity user1@contoso.com
$cgt = {$ucs.CallGroupTargets}.Invoke()
$cgt.Add("user5@contoso.com")
$cgt.Remove("user6@contoso.com")
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder $ucs.CallGroupOrder -CallGroupTargets $cgt

$gmd = (Get-CsUserCallingSettings -Identity user5@contoso.com).GroupMembershipDetails
$gmd[[array]::IndexOf($gmd.CallGroupOwnerId,'user1@contoso.com')].NotificationSetting = 'Banner'
Set-CsUserCallingSettings -Identity user5@contoso.com -GroupMembershipDetails $gmd
```

This example shows how to update the call group of user1@contoso.com to add user5@contoso.com and remove user6@contoso.com. In addition the notification setting for user5@contoso.com for
user1@contoso.com's call group is set to Banner.

The key to note here is the call group membership is defined on the object of the owner of the call group, in the above case this is user1@contoso.com. However the notification setting
for a member for a particular call group is defined on the member. In this case user5@contoso.com.

### Example 7
```powershell
$ucs = Get-CsUserCallingSettings -Identity user1@contoso.com
Set-CsUserCallingSettings -Identity user1@contoso.com -CallGroupOrder $ucs.CallGroupOrder -CallGroupTargets @()
```

This example shows how to remove all members of the call group.

### Example 8
```powershell
[Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails[]]$gmd = @(
	[Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails]@{CallGroupOwnerId='user20@contoso.com';NotificationSetting='Banner'}
	[Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails]@{CallGroupOwnerId='user30@contoso.com';NotificationSetting='Mute'}
)
Set-CsUserCallingSettings -Identity user10@contoso.com -GroupMembershipDetails $gmd
```

In this example user10@contoso.com is a member of 2 call groups: user20@contoso.com and user30@contoso.com. User10@contoso.com would like to have Banner notification for the first call group
and Mute notification for the last one.

### Example 9
```powershell
Set-CsUserCallingSettings -Identity user2@contoso.com -GroupNotificationOverride 'Mute'
```

This example shows how to set the group notification override for user2@contoso.com. This setting overrides any specific notification setting set for the user
on any call group the user is a member of.

## PARAMETERS

### -CallGroupOrder

The order in which to call members of the Call Group. The supported values are Simultaneous and InOrder.

You can only use InOrder, if the call group has 5 or less members.

```yaml
Type: System.String
Parameter Sets: (CallGroup)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallGroupTargets
The members of the Call Group. You need to always specify the full set of members as the parameter value. What you set here will overwrite the current call group membership.

A call group can have up to 25 members.

```yaml
Type: System.Array of System.String
Parameter Sets: (CallGroup)
Aliases:

Required: True
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
Parameter Sets: (Forwarding)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingTargetType

The forwarding target type. Supported values are Voicemail, SingleTarget, MyDelegates and Group. Voicemail is only supported for Immediate forwarding.

SingleTarget is used when forwarding to another user or PSTN phone number. MyDelegates is used when forwarding to the users's delegates (there needs to be at least 1 delegate).
Group is used when forwarding to the user's call group (it needs to have at least 1 member). 

```yaml
Type: System.String
Parameter Sets: (Forwarding)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingType

The type of forwarding to set. Supported values are Immediate and Simultaneous

```yaml
Type: System.String
Parameter Sets: (Forwarding)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMembershipDetails

The group membership details for the specified user. It is an array of ICallGroupMembershipDetails, which is an object containing the identity of an owner of a call group and the notification
setting for the specified user for that call group.

This parameter only exists if the specified user is a member of a call group. You can't create it, you can only change it.

You need to always specify the full group membership details as the parameter value. What you set here will over-write the current group membership details.
 
```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICallGroupMembershipDetails[]
Parameter Sets: (GroupMembershipDetails)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -GroupNotificationOverride

The group notification override that will be set on the specified user. The supported values are Ring, Mute and Banner.

Setting this overrides the call group notification specified for the individual call group for the specified user.
 
```yaml
Type: System.String
Parameter Sets: (GroupNotificationOverride)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity of the user to set call forwarding, simultaneous ringing and call group settings for. Can be specified using the ObjectId, the SIP address
or the e-mail address.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsForwardingEnabled

This parameter controls whether forwarding is enabled or not. 

```yaml
Type: System.Boolean
Parameter Sets: (ForwardingOnOff,Forwarding)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsUnansweredEnabled

This parameter controls whether forwarding for unasnwered calls is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (UnansweredOnOff,Unanswered)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredDelay

The time the call will ring the user before it is forwarded to the unanswered target. The supported format is hh:mm:ss and the delay range needs to be between 10 and 60 seconds in
10 seconds increments, i.e. 00:00:10, 00:00:20, 00:00:30, 00:00:40, 00:00:50 and 00:01:00. The default value is 20 seconds.

```yaml
Type: System.String
Parameter Sets: (Unanswered)
Aliases:

Required: True
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
Parameter Sets: (Unanswered)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredTargetType

The unanswered target type. Supported values are Voicemail, SingleTarget, MyDelegates and Group. 

SingleTarget is used when forwarding the unanswered call to another user or phone number. MyDelegates is used when forwarding the unanswered call to the users's delegates.
Group is used when forwarding the unanswered call to the specified user's call group. 

```yaml
Type: System.String
Parameter Sets: (Unanswered)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction,
and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 3.0.1-preview.

The specified user need to have the Microsoft Phone System license assigned.

When forwarding to MyDelegates, the specified user needs to have 1 or more delegates defined that is allowed to receive calls. When forwarding to Group, the specified user needs to have 1
or more members of the user's call group.

The cmdlet is validating the different settings and is always writing all the parameters in a settings group. You might see validation errors from the cmdlet due to this behavior. As an example,
if you have ForwardingTargetType set to Group and you want to remove all members of the call group, you will get a validation error, even if call forwarding is not enabled. In such a case
you will have to configure ForwardTargetType to something else than Group and then you can remove all members from the call group.

You are not able to configure delegates via this cmdlet. Please use New-CsUserCallingDelegate, Set-CsUserCallingDelegate cmdlets and Remove-CsUserCallingDelegate.

## RELATED LINKS
[Get-CsUserCallingSettings](Get-CsUserCallingSettings.md)

[New-CsUserCallingDelegate](New-CsUserCallingDelegate.md)

[Set-CsUserCallingDelegate](Set-CsUserCallingDelegate.md)

[Remove-CsUserCallingDelegate](Remove-CsUserCallingDelegate.md)
