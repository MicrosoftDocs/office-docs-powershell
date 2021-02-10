---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamscallingpolicy
applicable: Skype for Business Online
title: Set-CsTeamsCallingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTeamsCallingPolicy

## SYNOPSIS
Use this cmdlet to update values in existing Teams Calling Policies.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsCallingPolicy [-Tenant <System.Guid>] [-AllowWebPSTNCalling <Boolean>] [-SafeTransferEnabled <Object>] [-AllowCalling <Boolean>] [-AllowPrivateCalling <Boolean>] [-AllowVoicemail <String>] [-AllowCallGroups <Boolean>] [-AllowDelegation <Boolean>] [-AllowCallForwardingToUser <Boolean>] [-AllowCallForwardingToPhone <Boolean>] [-AllowCloudRecordingForCalls <Boolean>] [-PreventTollBypass <Boolean>] [-BusyOnBusyEnabledType <String>] [-MusicOnHoldEnabledType <Enum>] [-AutoAnswerEnabledType <Enum>] [[-Identity] <XdsIdentity>] [-AllowTranscriptionForCalling <Boolean>] [-Description <String>] [-LiveCaptionsEnabledTypeForCalling <String>] [-SpamFilteringEnabledType <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsCallingPolicy [-Tenant <System.Guid>] [-AllowCalling <Boolean>] [-AllowPrivateCalling <Boolean>] [-AllowVoicemail <String>] [-AllowCallGroups <Boolean>] [-AllowDelegation <Boolean>] [-AllowCallForwardingToUser <Boolean>] [-AllowCallForwardingToPhone <Boolean>] [-AllowCloudRecordingForCalls <Boolean>] [-PreventTollBypass <Boolean>] [-BusyOnBusyEnabledType <String>] [-MusicOnHoldEnabledType <Enum>] [-AutoAnswerEnabledType <Enum>] [-Instance <PSObject>] [-AllowTranscriptionForCalling <Boolean>] [-Description <String>] [-LiveCaptionsEnabledTypeForCalling <String>] [-SpamFilteringEnabledType <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Teams Calling Policies designate which users are able to use calling functionality within teams and determine the interopability state with Skype for Business. 
This cmdlet allows admins to set values in a given calling policy.

## EXAMPLES

### Example 1
```
PS C:\> Set-CsTeamsCallingPolicy -Identity Global -AllowPrivateCalling $true
```

Sets the value of the parameter AllowPrivateCalling, which controls whether or not users can leverage calling functionality in Microsoft Teams, in the global (default) tenant CallingPolicy.

## PARAMETERS

### -AllowWebPSTNCalling
Allows PSTN calling from the Team web client.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCalling
Controls interop calling capabilities.
Turning this on will allow Skype for Business users to have one-on-one calls with Teams users and vice-versa.

[!NOTE] This parameter is disabled.

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

### -AllowPrivateCalling
Controls all calling capabilities in Teams.
Turning this off will turn off all calling functionality in Teams.
If you use Skype for Business for calling, this policy will not affect calling functionality in Skype for Business.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Name of the policy being modified.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Use this to pipe a specific calling policy to be set. You can only modify the global policy, so can only pass the global instance of the Calling Policy.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use.

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
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallForwardingToPhone
Enables call forwarding or simultaneous ringing of inbound calls to any phone number.

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

### -AllowCallForwardingToUser
Enables call forwarding or simultaneous ringing of inbound calls to other users in your tenant.

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

### -AllowCallGroups
Enables inbound calls to be routed to call groups.

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

### -AllowDelegation
Enables inbound calls to be routed to delegates; allows delegates to make outbound calls on behalf of the users for whom they have delegated permissions.

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

### -AllowVoicemail
Enables inbound calls to be routed to voice mail. Valid options are: AlwaysEnabled, AlwaysDisabled, UserOverride.

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
### -AllowCloudRecordingForCalls
Determines whether cloud recording is allowed in a user's 1:1 call. Set this to TRUE to allow the user to be able to record 1:1 calls. Set this to FALSE to prohibit the user from recording 1:1 calls.

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

### -PreventTollBypass
Setting this parameter to True will send calls through PSTN and incur charges rather than going through the network and bypassing the tolls. 

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

### -BusyOnBusyEnabledType
Setting this parameter lets you configure how incoming calls are handled when a user is already in a call or conference or has a call placed on hold. New or incoming calls will be rejected with a busy signal. Valid options are: Enabled, Disabled.

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
### -MusicOnHoldEnabledType
Setting this parameter allows you to turn on or turn off the music on hold when a PSTN caller is placed on hold. It is turned on by default. Valid options are Enabled, Disabled, and UserOverride. For now, setting the value to UserOverride is the same as Enabled. This setting does not apply to call park and SLA boss delegate features.

```yaml
Type: Enum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeTransferEnabled
Teams users will be able to transfer a call safely, between Teams and Skype For Business. If the target user does not answer the call, it will ring back to the transferrer. The person transferring the call must be a Teams user. The person the call is being transferred to must be either a Teams or Skype for Business user in the same tenant or in a federated tenant.

Possible values
- Enabled
- Disabled
- UserOverride

**Note**: This parameter is not available for use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAnswerEnabledType
Setting this parameter allows you to enable or disable auto answer for incoming meeting invites. It is turned off by default. Valid options are Enabled and Disabled. This setting applies only to incoming meeting invites and does not include support for other call types.

```yaml
Type: Enum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTranscriptionForCalling
Determines whether post-call transcriptions are allowed. Set this to TRUE to allow. Set this to FALSE to prohibit.
Note: This feature is not yet released.

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

### -Description
Enables administrators to provide explanatory text about the calling policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -LiveCaptionsEnabledTypeForCalling
Determines whether real-time captions are available for the user in Teams calls. Set this to DisabledUserOverride to allow user to turn on live captions. Set this to Disabled to prohibit.

Possible values:
- DisabledUserOverride
- Disabled

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

### -SpamFilteringEnabledType
Determines if Spam filtering is enabled.

Possible values:
- Enabled
- Disabled

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
