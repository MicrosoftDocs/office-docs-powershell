---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinedialinconferencingtenantsettings
schema: 2.0.0
title: Set-CsOnlineDialInConferencingTenantSettings
---

# Set-CsOnlineDialInConferencingTenantSettings

## SYNOPSIS
Use the `Set-CsOnlineDialInConferencingTenantSettings` to modify the tenant level settings of dial-in conferencing.
Dial-in conferencing tenant settings control the conference experience of users and manage some conferencing administrative functions.

## SYNTAX

```powershell
Set-CsOnlineDialInConferencingTenantSettings [-AllowedDialOutExternalDomains <Object>]
 [-AllowFederatedUsersToDialOutToSelf <String>] [-AllowFederatedUsersToDialOutToThirdParty <String>]
 [-AllowPSTNOnlyMeetingsByDefault <Boolean>] [-AutomaticallyMigrateUserMeetings <Boolean>]
 [-AutomaticallyReplaceAcpProvider <Boolean>] [-AutomaticallySendEmailsToUsers <Boolean>]
 [-EnableDialOutJoinConfirmation <Boolean>] [-EnableEntryExitNotifications <Boolean>]
 [-EnableNameRecording <Boolean>] [-EntryExitAnnouncementsType <String>] [[-Identity] <String>]
 [-IncludeTollFreeNumberInMeetingInvites <Boolean>] [-MaskPstnNumbersType <String>]
 [-MigrateServiceNumbersOnCrossForestMove <Boolean>] [-PinLength <UInt32>] [-SendEmailFromAddress <String>]
 [-SendEmailFromDisplayName <String>] [-SendEmailFromOverride <Boolean>] [-UseUniqueConferenceIds <Boolean>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Dial-in conferencing tenant settings control what functions are available during a conference call.
For example, whether or not entries and exits from the call are announced.
The settings also manage some of the administrative functions, such as when users get notification of administrative actions, like a PIN change.
By contrast, the higher level dial-in conferencing configuration only maintains a flag for whether dial-in conferencing is enabled for your organization.
For more information, see `Get-CsOnlineDialinConferencingTenantConfiguration`.

There is always a single instance of the dial-in conferencing settings per tenant.
You can modify the settings using `Set-CsOnlineDialInConferencingTenantSettings` and revert those settings to their defaults by using `Remove-CsOnlineDialInConferencingTenantSettings`.

The following parameters are not applicable to Teams: EnableDialOutJoinConfirmation, IncludeTollFreeNumberInMeetingInvites, MigrateServiceNumbersOnCrossForestMove, and UseUniqueConferenceIds

## EXAMPLES

### Example 1
```
Set-CsOnlineDialInConferencingTenantSettings -EnableEntryExitNotifications $True -EnableNameRecording $True -PinLength 7
```

This example sets the tenant's conferencing settings to enable entry and exit notifications supported by name recording.
The PIN length is set to 7.

### Example 2
```
Set-CsOnlineDialInConferencingTenantSettings -SendEmailFromOverride $true -SendEmailFromAddress admin@contoso.com -SendEmailFromDisplayName "Conferencing Administrator"
```

This example defines the contact information to be used in dial-in conferencing email notifications and enables the default address to be overridden.

## PARAMETERS

### -AllowedDialOutExternalDomains

Used to specify which external domains are allowed for dial-out conferencing.

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

### -AllowFederatedUsersToDialOutToSelf

Meeting participants can call themselves when they join a meeting. Possible settings are [No|Yes|RequireSameEnterpriseUser].
 This parameter is Microsoft internal use only.

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

### -AllowFederatedUsersToDialOutToThirdParty

Specifies at this scope if dial out to third party participants is allowed. Possible settings are [No|Yes|RequireSameEnterpriseUser].
This parameter is Microsoft internal use only.

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

### -AllowPSTNOnlyMeetingsByDefault

> Applicable: Microsoft Teams

Specifies the default value that gets assigned to the "AllowPSTNOnlyMeetings" setting of users when they are enabled for dial-in conferencing, or when a user's dial-in conferencing provider is set to Microsoft.
If set to $true, the "AllowPSTNOnlyMeetings" setting of the user will also be set to true.
If $false, the user setting will be false.
The default value for AllowPSTNOnlyMeetingsByDefault is $false.

When AllowPSTNOnlyMeetingsByDefault is changed, the value of the "AllowPSTNOnlyMeetings" setting of currently enabled users doesn't change.
The new default value will only be applied to users that are subsequently enabled for dial-in conferencing, or whose provider is changed to Microsoft.

The "AllowPSTNOnlyMeetings" setting of a user defines if unauthenticated callers can start a meeting if they are the first person to join.
An unauthenticated caller is defined as a participant who joins a meeting over the phone and doesn't provide the organizer PIN when joining the meeting.

For more information on the "AllowPSTNOnlyMeetings" user setting, see `Set-CsOnlineDialInConferencingUser`.

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

### -AutomaticallyMigrateUserMeetings

> Applicable: Microsoft Teams

Specifies if meetings of users in the tenant should automatically be rescheduled via the Meeting Migration Service when there's a change in the users' Cloud PSTN Confernecing coordinates, e.g. when a user is provisioned, de-provisoned, assigned a new default service number etc. If this is false, users will need to manually migrate their conferences using the Meeting Migration tool.
PARAMVALUE: $true | $false

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

### -AutomaticallyReplaceAcpProvider

> Applicable: Microsoft Teams

Specifies if a user already enabled for a 3rd party Audio Conferencing Provider (ACP) should automatically be converted to Microsoft's Online DialIn Conferencing service when a license for Microsoft's service is assigned to the user. If this is false, tenant admins will need to manually provision the user with the Enable-CsOnlineDialInConferencingUser cmdlet with the -ReplaceProvider switch present.
PARAMVALUE: $true | $false

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

### -AutomaticallySendEmailsToUsers

> Applicable: Microsoft Teams

Specifies whether advisory emails will be sent to users when the events listed below occur.
Setting the parameter to $true enables the emails to be sent, $false disables the emails.
The default is $true.

User is enabled or disabled for dial-in conferencing.

The dial-in conferencing provider is changed either to Microsoft, or from Microsoft to another provider, or none.

The dial-in conferencing PIN is reset by the tenant administrator.

Changes to either the user's conference ID, or the user's default dial-in conference number.

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

> Applicable: Microsoft Teams

The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -EnableDialOutJoinConfirmation

Specifies if the callees need to confirm to join the conference call. If true, the callees will hear prompts to ask for confirmation to join the conference call, otherwise callees will join the conference call directly.

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

### -EnableEntryExitNotifications

> Applicable: Microsoft Teams

Specifies if, by default, announcements are made as users enter and exit a conference call.
Set to $true to enable notifications, $false to disable notifications.
The default is $true.

This setting can be overridden on a meeting by meeting basis when a user joins a meeting via a Skype for Business client and modifies the Announce when people enter or leave setting on the Skype Meeting Options menu of a meeting.

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

### -EnableNameRecording

> Applicable: Microsoft Teams

Specifies whether the name of a user is recorded on entry to the conference.
This recording is used during entry and exit notifications.
Set to $true to enable name recording, set to $false to bypass name recording.
The default is $true.

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

### -EntryExitAnnouncementsType

> Applicable: Microsoft Teams

Specifies if the Entry and Exit Announcement Uses names or tones only.
PARAMVALUE: UseNames | ToneOnly

```yaml
Type: EntryExitAnnouncementsType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Microsoft Teams

The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeTollFreeNumberInMeetingInvites

> Applicable: Microsoft Teams

This parameter is obsolete and not functional.

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

### -Instance

> Applicable: Microsoft Teams

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

### -MaskPstnNumbersType
This parameter allows tenant administrators to configure masking of PSTN participant phone numbers in the roster view for Microsoft Teams meetings enabled for Audio Conferencing, scheduled within the organization.

Possible values are:
- MaskedForExternalUsers (masked to external users)
- MaskedForAllUsers (masked for everyone)
- NoMasking (visible to everyone)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: MaskedForExternalUsers
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateServiceNumbersOnCrossForestMove

> Applicable: Microsoft Teams

Specifies whether service numbers assigned to the tenant should be migrated to the new forest of the tenant when the tenant is migrated cross region. If false, service numbers will be released back to stock once the migration completes. This settings does not apply to ported-in numbers that are always migrated.
PARAMVALUE: $true | $false

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

### -MsftInternalProcessingMode

For Microsoft internal use only.

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

### -PinLength

> Applicable: Microsoft Teams

Specifies the number of digits in the automatically generated PINs.
Organizers can enter their PIN to start a meeting they scheduled if they join via phone and are the first person to join.
The minimum value is 4, the maximum is 12, and the default is 5.

A user's PIN will only authenticate them as leaders for a meeting they scheduled.
The PIN of a user that did not schedule the meeting will not enable that user to lead the meeting.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromAddress

> Applicable: Microsoft Teams

Specifies the email address to use in the "From" contact information on emails that are sent to users to notify them of their dial-in conferencing settings, or when their settings change.
The email address needs to be in the form \<UserAlias\>@\<Domain\>.
For example, "KenMyer@Contoso.com" or "Admin@Contoso.com".

The SendEmailFromAddress value is used only if the SendEmailFromDisplayName setting is specified, and the SendEmailFromOverride setting is $true.

Note: The parameter has been deprecated and may be removed in future versions.

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

### -SendEmailFromDisplayName

> Applicable: Microsoft Teams

Specifies the display name to use in the "From" contact information on emails that are sent to users to notify them of their dial-in conferencing settings, or when their settings change.

The SendEmailFromDisplayName value is used only if the SendEmailFromDisplayName setting is specified, and the SendEmailFromOverride setting is $true.

Note: The parameter has been deprecated and may be removed in future versions.

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

### -SendEmailFromOverride

> Applicable: Microsoft Teams

Specifies if the contact information on dial-in conferencing notifications will be the default generated by Office 365, or administrator defined values.
Setting SendEmailFromOverride to $true enables the system to use the SendEmailFromAddress and SendEmailFromDisplayName parameter inputs as the "From" contact information.
Setting this parameter to $false will cause email notifications to be sent with the system generated default.
The default is $false.

SendEmailFromOverride can't be $true if SendEmailFromAddress and SendEmailFromDisplayName aren't specified.

If you want to change the email address information, you need to make sure that your inbound email policies allow for emails that come from the address specified by the SendEmailFromAddress parameter.

Note: The parameter has been deprecated and may be removed in future versions.

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

### -Tenant

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

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

### -UseUniqueConferenceIds

> Applicable: Microsoft Teams

Specifies if Private Meetings are enabled for the users in this tenant.
PARAMVALUE: $true | $false

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

### -WhatIf

> Applicable: Microsoft Teams

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsOnlineDialInConferencingTenantSettings](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinedialinconferencingtenantsettings)

[Remove-CsOnlineDialInConferencingTenantSettings](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinedialinconferencingtenantsettings)
