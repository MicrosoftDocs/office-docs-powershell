---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsTeamsMeetingBroadcastPolicy
schema: 2.0.0
---


# New-CsTeamsMeetingBroadcastPolicy

## SYNOPSIS
New-CsTeamsMeetingBroadcastPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-AllowBroadcastScheduling \<bool\>\] \[-AllowBroadcastTranscription \<bool\>\] \[-BroadcastAttendeeVisibilityMode \<string\>\] \[-BroadcastRecordingMode \<string\>\] \[-InMemory\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
New-CsTeamsMeetingBroadcastPolicy [-Description <Object>] [-BroadcastRecordingMode <Object>] [-WhatIf]
 [-BroadcastAttendeeVisibilityMode <Object>] [-AllowBroadcastTranscription <Object>] [[-Identity] <Object>]
 [-Tenant <Object>] [-InMemory] [-AllowBroadcastScheduling <Object>] [-Confirm] [-Force] [-AsJob]
```

## DESCRIPTION
User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.  Use this cmdlet to create a new policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsMeetingBroadcastPolicy -Identity Students -AllowBroadcastScheduling $false 
```

Creates a new MeetingBroadcastPolicy with broadcast scheduling disabled, which can then be assigned to individual users using the corresponding grant- command.


## PARAMETERS

### -AllowBroadcastScheduling
Specifies whether this user can create broadcast events in Teams.  This settng impacts broadcasts that use both self-service and external encoder production methods. 

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

### -AllowBroadcastTranscription
Specifies whether real-time transcription and translation can be enabled in the broadcast event.  Note: this setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.

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

### -BroadcastAttendeeVisibilityMode
Specifies the attendee visibility mode of the broadcast events created by this user.  This setting controls who can watch the broadcast event - e.g. anyone can watch this event including anonymous users or only authenticated users in my company can watch the event.  Note: this setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.


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

### -BroadcastRecordingMode
Specifies whether broadcast events created by this user are always recorded, never recorded or user can choose whether to record or not.  Note: this setting is applicable to broadcast events that use Teams Meeting production only and does not apply when external encoder is used as production method.

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
Specifies why this policy is being created.

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
Specifies the name of the policy being created

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
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -Tenant
Not applicable, you can only specify policies for your own logged-in tenant.

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
