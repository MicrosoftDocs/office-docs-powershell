---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/New-CsTeamsCallingPolicy
title: New-CsTeamsCallingPolicy
schema: 2.0.0
---

# New-CsTeamsCallingPolicy

## SYNOPSIS
Use this cmdlet to create a new Teams Calling Policy.

## SYNTAX

```
New-CsTeamsCallingPolicy [-AllowWebPSTNCalling <Boolean>] [-Description <String>] [[-Identity] <XdsIdentity>]
 [-InMemory] [-Force] [-AllowCloudRecordingForCalls <Boolean>] [-LiveCaptionsEnabledTypeForCalling <String>]
 [-AllowCallGroups <Boolean>] [-Tenant <System.Guid>] [-SafeTransferEnabled <Object>]
 [-SpamFilteringEnabledType <String>] [-BusyOnBusyEnabledType <String>] [-Confirm] [-AllowVoicemail <String>]
 [-MusicOnHoldEnabledType <Enum>] [-PreventTollBypass <Boolean>] [-AllowCallForwardingToUser <Boolean>]
 [-AllowCallForwardingToPhone <Boolean] [-AllowPrivateCalling <Boolean>] [-WhatIf] [-AllowDelegation <Boolean>]
 [-AutoAnswerEnabledType <Enum>] [-AllowTranscriptionForCalling <Boolean>] [-AsJob]
```

## DESCRIPTION
The Teams Calling Policies designate which users are able to use calling functionality within teams and determine the interopability state with Skype for Business. 
This cmdlet allows admins to create a new calling policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsCallingPolicy -Identity SalesCallingPolicy -AllowPrivateCalling $true -AllowCloudRecordingForCalls $true
```

Creates a new Teams Calling policy and sets the AllowPrivateCalling AllowCloudRecordingForCalls and to true.

## PARAMETERS

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

### -AllowCloudRecordingForCalls
Determines whether cloud recording is allowed in a user's 1:1 call. Set this to TRUE to allow the user to be able to record 1:1 calls. Set this to FALSE to prohibit the user from recording 1:1 calls.

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

### -AllowVoicemail
Enables inbound calls to be routed to voice mail. Valid options are: AlwaysEnabled, AlwaysDisabled, UserOverride.

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

### -AllowWebPSTNCalling
Allows PSTN calling from the Team web client.

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

### -AutoAnswerEnabledType
Setting this parameter allows you to enable or disable auto answer for incoming meeting invites. It is turned off by default. Valid options are Enabled and Disabled. This setting applies only to incoming meeting invites and does not include support for other call types.

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

### -BusyOnBusyEnabledType
Setting this parameter lets you configure how incoming calls are handled when a user is already in a call or conference or has a call placed on hold. New or incoming calls will be rejected with a busy signal. Valid options are: Enabled, Disabled.

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

### -Force
Suppresses all non-fatal errors.

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

### -Identity
Name of the policy being created.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
The InMemory parameter creates an object reference without actually committing the object as a permanent change.

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

### -MusicOnHoldEnabledType
Setting this parameter allows you to turn on or turn off the music on hold when a PSTN caller is placed on hold. It is turned on by default. Valid options are Enabled, Disabled, and UserOverride. For now, setting the value to UserOverride is the same as Enabled. This setting does not apply to call park and SLA boss delegate features.

```yaml
Type: Enum
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

### -Tenant
Internal Microsoft use.

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

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-7.1) and [about_Remote_Jobs](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-7.1).


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

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
