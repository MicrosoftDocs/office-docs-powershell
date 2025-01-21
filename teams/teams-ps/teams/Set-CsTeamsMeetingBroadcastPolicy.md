---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingbroadcastpolicy
applicable: Microsoft Teams
title: Set-CsTeamsMeetingBroadcastPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsTeamsMeetingBroadcastPolicy

## SYNOPSIS

User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.

## SYNTAX

### Identity (Default)

```powershell
Set-CsTeamsMeetingBroadcastPolicy [-Tenant <Guid>] [-Description <String>]
 [-AllowBroadcastScheduling <Boolean>] [-AllowBroadcastTranscription <Boolean>]
 [-BroadcastAttendeeVisibilityMode <String>] [-BroadcastRecordingMode <String>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance

```powershell
Set-CsTeamsMeetingBroadcastPolicy [-Tenant <Guid>] [-Description <String>]
 [-AllowBroadcastScheduling <Boolean>] [-AllowBroadcastTranscription <Boolean>]
 [-BroadcastAttendeeVisibilityMode <String>] [-BroadcastRecordingMode <String>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.  Use this cmdlet to update an existing policy.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsMeetingBroadcastPolicy -Identity Global -AllowBroadcastScheduling $false
```

Sets the value of the Default (Global) Broadcast Policy in the organization to disable broadcast scheduling, and leaves all other parameters the same.

## PARAMETERS

### -AllowBroadcastScheduling

Specifies whether this user can create broadcast events in Teams.  This setting impacts broadcasts that use both self-service and external encoder production methods.

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

### -AllowBroadcastTranscription

Specifies whether real-time transcription and translation can be enabled in the broadcast event.

> [!NOTE]
> This setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.

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

### -BroadcastAttendeeVisibilityMode

Specifies the attendee visibility mode of the broadcast events created by this user.  This setting controls who can watch the broadcast event - e.g. anyone can watch this event including anonymous users or only authenticated users in my company can watch the event.

> [!NOTE]
> This setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.

Possible values:
- Everyone
- EveryoneInCompany
- InvitedUsersInCompany
- EveryoneInCompanyAndExternal
- InvitedUsersInCompanyAndExternal

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

### -BroadcastRecordingMode

Specifies whether broadcast events created by this user are always recorded (AlwaysEnabled), never recorded (AlwaysDisabled) or user can choose whether to record or not (UserOverride).

> [!NOTE]
> This setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.

Possible values:
- AlwaysEnabled
- AlwaysDisabled
- UserOverride

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

Enables administrators to provide additional text about the conferencing policy. For example, the Description might indicate the users the policy should be assigned to.

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

Suppresses the display of any non-fatal error message that might occur when running the command.

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

Unique identifier for the policy to be modified. Policies can be configured at the global or per-user scopes. To modify the global policy, use this syntax: -Identity global. To modify a per-user policy, use syntax similar to this: -Identity SalesPolicy.

Note that wildcards are not allowed when specifying an Identity. If you do not specify an Identity the cmdlet will automatically modify the global policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

Not applicable to online service.

```yaml
Type: Guid
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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
