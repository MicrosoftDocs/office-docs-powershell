---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamscallingpolicy
applicable: Microsoft Teams
title: New-CsTeamsCallingPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# New-CsTeamsCallingPolicy

## SYNOPSIS
Use this cmdlet to create a new instance of a Teams Calling Policy.

## SYNTAX

### Identity (Default)
```
New-CsTeamsCallingPolicy [-Identity] <string>
 [-Description <string>]
 [-AllowPrivateCalling <boolean>]
 [-AllowWebPSTNCalling <boolean>]
 [-AllowSIPDevicesCalling <boolean>]
 [-AllowVoicemail <string>]
 [-AllowCallGroups <boolean>]
 [-AllowDelegation <boolean>]
 [-AllowCallForwardingToUser <boolean>]
 [-AllowCallForwardingToPhone <boolean>]
 [-PreventTollBypass <boolean>]
 [-BusyOnBusyEnabledType <string>]
 [-MusicOnHoldEnabledType <string>]
 [-AllowCloudRecordingForCalls <boolean>]
 [-AllowTranscriptionForCalling <boolean>]
 [-PopoutForIncomingPstnCalls <string>]
 [-PopoutAppPathForIncomingPstnCalls <string>]
 [-LiveCaptionsEnabledTypeForCalling <string>]
 [-AutoAnswerEnabledType <string>]
 [-SpamFilteringEnabledType <string>]
 [-CallRecordingExpirationDays <long>]
 [-AllowCallRedirect <string>]
 [-EnableWebPstnMediaBypass <Boolean>]
 [-InboundPstnCallRoutingTreatment <string>]
 [-InboundFederatedCallRoutingTreatment <string>]
 [-PayAsYouGoSpendingLimits <Boolean>] 
 [-PayAsYouGoSpendingUserLimit <long>] 
 [-Force]
 [-WhatIf]
 [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Teams Calling Policy controls which calling and call forwarding features are available to users in Microsoft Teams. This cmdlet allows admins to create new policy instances.

## EXAMPLES

### Example 1
```
PS C:\> New-CsTeamsCallingPolicy -Identity Sales -AllowPrivateCalling $false
```

The cmdlet create the policy instance Sales and sets the value of the parameter AllowPrivateCalling to False. The rest of the parameters are set to the corresponding
values in the Global policy instance.

## PARAMETERS

### -AllowCallForwardingToPhone
Enables the user to configure in the Microsoft Teams client call forwarding or simultaneous ringing of inbound calls to any phone number.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallForwardingToUser
Enables the user to configure in the Microsoft Teams client call forwarding or simultaneous ringing of inbound calls to other users in your tenant.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallGroups
Enables the user to configure call groups in the Microsoft Teams client and that inbound calls should be routed to call groups.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallRedirect
Setting this parameter enables local call redirection for SIP devices connecting via the Microsoft Teams SIP gateway.


Valid options are:
- Enabled: Enables the user to redirect an incoming call.
- Disabled: The user is not enabled to redirect an incoming call.

- UserOverride: This option is not available for use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCloudRecordingForCalls
Determines whether cloud recording is allowed in a user's 1:1 Teams or PSTN calls. Set this to True to allow the user to be able to record 1:1 calls. Set this to False to prohibit the user from recording 1:1 calls.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDelegation
Enables the user to configure delegation in the Microsoft Teams client and that inbound calls to be routed to delegates; allows delegates to make outbound calls on behalf of the users for whom they have delegated permissions.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPrivateCalling
Controls all calling capabilities in Teams. Turning this off will turn off all calling functionality in Teams.
If you use Skype for Business for calling, this policy will not affect calling functionality in Skype for Business.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSIPDevicesCalling
Determines whether the user is allowed to use a SIP device for calling on behalf of a Teams client.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTranscriptionForCalling
Determines whether post-call transcriptions are allowed. Set this to True to allow. Set this to False to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowVoicemail
Enables inbound calls to be routed to voicemail. 

Valid options are:
- AlwaysEnabled: Calls are always forwarded to voicemail on unanswered after ringing for thirty seconds, regardless of the unanswered call forward setting for the user.
- AlwaysDisabled: Calls are never routed to voicemail, regardless of the call forward or unanswered settings for the user. Voicemail isn't available as a call forwarding or unanswered setting in Teams.
- UserOverride: Calls are forwarded to voicemail based on the call forwarding and/or unanswered settings for the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowWebPSTNCalling
Allows PSTN calling from the Team web client.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAnswerEnabledType
Setting this parameter allows you to enable or disable auto-answer for incoming meeting invites on Teams Phones. This setting applies only to incoming meeting invites and does not include support for other call types.

Valid options are:
- Enabled: Auto-answer is enabled.
- Disabled: Auto-answer is disabled. This is the default setting.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusyOnBusyEnabledType
Setting this parameter lets you configure how incoming calls are handled when a user is already in a call or conference or has a call placed on hold.

Valid options are:
- Enabled: New or incoming calls will be rejected with a busy signal.
- Unanswered: The user's unanswered settings will take effect, such as routing to voicemail or forwarding to another user.
- Disabled: New or incoming calls will be presented to the user.
- UserOverride: Users can set their busy options directly from call settings in Teams app.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallRecordingExpirationDays
Sets the expiration of the recorded 1:1 calls. Default is 60 days.

```yaml
Type: Long
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text about the calling policy. For example, the Description might indicate the users to whom the policy should be assigned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableWebPstnMediaBypass
 Determines if MediaBypass is enabled for PSTN calls on specified Web platforms.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Name of the policy instance being created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundFederatedCallRoutingTreatment
Setting this parameter lets you control how inbound federated calls should be routed. 

Valid options are:
- RegularIncoming: No changes are made to default inbound routing. This is the default setting.
- Unanswered: The inbound federated call will be routed according to the called user's unanswered call settings and the call will not be presented to the called user. The called user will see a missed call notification. If the called user has not enabled unanswered call settings the call will be disconnected.

- Voicemail: The inbound federated call will be routed directly to the called user's voicemail and the call will not be presented to the user. If the called user does not have voicemail enabled the call will be disconnected.

Setting this parameter to Unanswered or Voicemail will have precedence over other call forwarding settings like call forward/simultaneous ringing to delegate, call groups, or call forwarding.


```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: RegularIncoming
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundPstnCallRoutingTreatment
Setting this parameter lets you control how inbound PSTN calls should be routed. 

Valid options are:
- RegularIncoming: No changes are made to default inbound routing. This is the default setting.
- Unanswered: The inbound PSTN call will be routed according to the called user's unanswered call settings and the call will not be presented to the called user. The called user will see a missed call notification. If the called user has not enabled unanswered call settings the call will be disconnected.

- Voicemail: The inbound PSTN call will be routed directly to the called user's voicemail and the call will not be presented to the user. If the called user does not have voicemail enabled the call will be disconnected.
- UserOverride: For now, setting the value to UserOverride is the same as RegularIncoming.

Setting this parameter to Unanswered or Voicemail will have precedence over other call forwarding settings like call forward/simultaneous ringing to delegate, call groups, or call forwarding.


```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: RegularIncoming
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiveCaptionsEnabledTypeForCalling
Determines whether real-time captions are available for the user in Teams calls.

Valid options are:
- DisabledUserOverride: Allows the user to turn on live captions.

- Disabled: Prohibits the user from turning on live captions.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldEnabledType
Setting this parameter allows you to turn on or turn off the music on hold when a caller is placed on hold. 

Valid options are:
- Enabled: Music on hold is enabled. This is the default.
- Disabled: Music on hold is disabled.
- UserOverride: For now, setting the value to UserOverride is the same as Enabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopoutAppPathForIncomingPstnCalls
Setting this parameter allows you to set the PopoutForIncomingPstnCalls setting's URL path of the website to launch upon receiving incoming PSTN calls. This parameter accepts an HTTPS URL with less than 1024 characters. The URL can contain a `{phone}` placeholder that is replaced with the caller's PSTN number in E.164 format when launched.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: ""
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopoutForIncomingPstnCalls
Setting this parameter allows you to control the tenant users' ability to launch an external website URL automatically in the browser window upon incoming PSTN calls for specific users or user groups. Valid options are Enabled and Disabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreventTollBypass
Setting this parameter to True will send calls through PSTN and incur charges rather than going through the network and bypassing the tolls. 

**Note**: Do not set this parameter to True for Calling Plan or Operator Connect users as it will prevent successful call routing. This setting only works with Direct Routing which is configured to handle location-based routing restrictions. 

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpamFilteringEnabledType
Determines Spam filtering mode.

Possible values:
- Enabled: Spam Filtering is fully enabled. Both Basic and Captcha Interactive Voice Response (IVR) checks are performed. In case the call is considered spam, the user will get a "Spam Likely" notification in Teams.
- Disabled: Spam Filtering is completely disabled. No checks are performed. A "Spam Likely" notification will not appear.
- EnabledWithoutIVR: Spam Filtering is partially enabled. Captcha IVR checks are disabled. A "Spam Likely" notification will appear. A call might get dropped if it gets a high score from Basic checks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PayAsYouGoSpendingLimits
Determines if spending limit is enabled for pay-as-you-go PSTN calls.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PayAsYouGoSpendingUserLimit
Determines the value of spending limit for a user making pay-as-you-go PSTN calls.

Possible values are any positive integer.

```yaml
Type: Long
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsCallingPolicy](Get-CsTeamsCallingPolicy.md)

[Remove-CsTeamsCallingPolicy](Remove-CsTeamsCallingPolicy.md)

[Grant-CsTeamsCallingPolicy](Grant-CsTeamsCallingPolicy.md)

[Set-CsTeamsCallingPolicy](Set-CsTeamsCallingPolicy.md)
