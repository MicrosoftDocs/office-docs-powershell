---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-csusercallingsettings
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Get-CsUserCallingSettings

## SYNOPSIS
This cmdlet will show the call forwarding, simultaneous ringing, call group and delegation settings for a user.

> [!NOTE]
> **Preview** The use of this cmdlet is in Public Preview.
  
## SYNTAX

```powershell
Get-CsUserCallingSettings -Identity <String> [<CommonParameters>]

```

## DESCRIPTION
This cmdlet shows the call forwarding, simultaneous ringing, call group and delegation settings for a user. It will also show any call groups the user is a member of and
if someone else has added the user as a delegate.

## EXAMPLES

### Example 1
```powershell
Get-CsUserCallingSettings -Identity user1@contoso.com
```
```output
SipUri                    : sip:user1@contoso.com
IsForwardingEnabled       : True
ForwardingType            : Immediate
ForwardingTarget          :
ForwardingTargetType      : Voicemail
IsUnansweredEnabled       : False
UnansweredTarget          :
UnansweredTargetType      : Voicemail
UnansweredDelay           : 00:00:20
Delegates                 :
Delegators                :
CallGroupOrder            : InOrder
CallGroupTargets          : {}
GroupMembershipDetails    :
GroupNotificationOverride :
```

This example shows that user1@contoso.com has immediate call forwarding set (IsForwardingEnabled and ForwardingType) to route all incoming calls to voicemail (ForwardingTargetType).

### Example 2
```powershell
Get-CsUserCallingSettings -Identity user2@contoso.com
```
```output
SipUri                    : sip:user2@contoso.com
IsForwardingEnabled       : True
ForwardingType            : Simultaneous
ForwardingTarget          : user3@contoso.com
ForwardingTargetType      : SingleTarget
IsUnansweredEnabled       : True
UnansweredTarget          :
UnansweredTargetType      : Voicemail
UnansweredDelay           : 00:00:20
Delegates                 :
Delegators                :
CallGroupOrder            : InOrder
CallGroupTargets          : {}
GroupMembershipDetails    :
GroupNotificationOverride :
```

This example shows that user2@contoso.com has simultaneous ringing set (IsForwardingEnabled and ForwardingType) to user3@contoso.com (ForwardingTarget and ForwardingTargetType) 
and if the call has not been answered (IsUnansweredEnabled) within 20 seconds (UnansweredDelay) the call is routed to voicemail (UnansweredTargetType).

### Example 3
```powershell
Get-CsUserCallingSettings -Identity user4@contoso.com
```
```output
SipUri                    : sip:user4@contoso.com
IsForwardingEnabled       : True
ForwardingType            : Simultaneous
ForwardingTarget          :
ForwardingTargetType      : Group
IsUnansweredEnabled       : True
UnansweredTarget          :
UnansweredTargetType      : Voicemail
UnansweredDelay           : 00:00:20
Delegates                 :
Delegators                :
CallGroupOrder            : InOrder
CallGroupTargets          : {user5@contoso.com}
GroupMembershipDetails    : CallGroupOwnerId:user6@contoso.com
GroupNotificationOverride : Mute
```
```powershell
(Get-CsUserCallingSettings -Identity user4@contoso.com).GroupMembershipDetails
```
```output
CallGroupOwnerId            NotificationSetting
----------------            -------------------
user6@contoso.com           Ring
```

This example shows that user4@contoso.com has simultaneous ringing set to his/her call group (ForwardingTargetType) and that the call group contains user5@contoso.com 
(CallGroupTargets). The call group is defined to ring members in the order listed in the call group (CallGroupOrder).

You can also see that user4@contoso.com is a member of user6@contoso.com's call group (GroupMembershipDetails), that user6@contoso.com defined the call group with Ring
notification for user4@contoso.com (NotificationSetting) and that user4@contoso.com has decided to turn off call notification for call group calls (GroupNotificationOverride).


### Example 4
```powershell
Get-CsUserCallingSettings -Identity user7@contoso.com
```
```output
SipUri                    : sip:opr7@contoso.com
IsForwardingEnabled       : True
ForwardingType            : Simultaneous
ForwardingTarget          :
ForwardingTargetType      : MyDelegates
IsUnansweredEnabled       : True
UnansweredTarget          :
UnansweredTargetType      : Voicemail
UnansweredDelay           : 00:00:20
Delegates                 : Id:user8@contoso.com
Delegators                : 
CallGroupOrder            : InOrder
CallGroupTargets          : {}
GroupMembershipDetails    :
GroupNotificationOverride : Ring
```
```powershell
(Get-CsUserCallingSettings -Identity user7@contoso.com).Delegates
```
```output
Id             : user8@contoso.com
MakeCalls      : True
ManageSettings : True
ReceiveCalls   : True
```

This example shows that user7@contoso.com has simultaneous ringing set to his/her delegates (ForwardingTargetType). User8@contoso.com is the only delegate (Delegates) and 
that user has all the permissions you can have as a delegate (Delegates).

### Example 5
```powershell
Get-CsUserCallingSettings -Identity user9@contoso.com
```
```output
SipUri                    : sip:user9@contoso.com
IsForwardingEnabled       : False
ForwardingType            : Immediate
ForwardingTarget          :
ForwardingTargetType      : Voicemail
IsUnansweredEnabled       : True
UnansweredTarget          :
UnansweredTargetType      : Voicemail
UnansweredDelay           : 00:00:20
Delegates                 :
Delegators                : Id:user10@contoso.com
CallGroupOrder            : InOrder
CallGroupTargets          : {}
GroupMembershipDetails    :
GroupNotificationOverride : Ring
```
```powershell
(Get-CsUserCallingSettings -Identity user9@contoso.com).Delegators
```
```output
Id             : user10@contoso.com
MakeCalls      : True
ManageSettings : True
ReceiveCalls   : True
```

This example shows that user9@contoso.com is a delegate of user10@contoso.com (Delegators) and that user10@contoso.com has given user9@contoso.com all the permissions you can
have as a delegate (Delegators).


## PARAMETERS

### -Identity
The Identity of the user to show call forwarding, simultaneous ringing, call group and delegation settings for. Can be specified using the ObjectId, the SIP address
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 3.0.1-preview.

## RELATED LINKS

[Set-CsUserCallingSettings](Set-CsUserCallingSettings.md)

[New-CsUserCallingDelegate](New-CsUserCallingDelegate.md)

[Set-CsUserCallingDelegate](Set-CsUserCallingDelegate.md)

[Remove-CsUserCallingDelegate](Remove-CsUserCallingDelegate.md)
