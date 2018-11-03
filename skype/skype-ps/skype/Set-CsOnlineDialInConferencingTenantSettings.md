---
external help file: 
applicable: Skype for Business Online
title: Set-CsOnlineDialInConferencingTenantSettings
schema: 2.0.0
---

# Set-CsOnlineDialInConferencingTenantSettings

## SYNOPSIS
Use the `Set-CsOnlineDialInConferencingTenantSettings` to modify the tenant level settings of dial-in conferencing.
Dial-in conferencing tenant settings control the conference experience of users and manage some conferencing administrative functions.

## SYNTAX

```
Set-CsOnlineDialInConferencingTenantSettings [[-Identity] <Object>] [-AllowPSTNOnlyMeetingsByDefault <Object>]
 [-AutomaticallyMigrateUserMeetings <Object>] [-AutomaticallyReplaceAcpProvider <Object>]
 [-AutomaticallySendEmailsToUsers <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-EnableEntryExitNotifications <Object>] [-EnableNameRecording <Object>]
 [-EntryExitAnnouncementsType <Object>] [-Force] [-IncludeTollFreeNumberInMeetingInvites <Object>]
 [-Instance <Object>] [-MigrateServiceNumbersOnCrossForestMove <Object>] [-PinLength <Object>]
 [-SendEmailFromAddress <Object>] [-SendEmailFromDisplayName <Object>] [-SendEmailFromOverride <Object>]
 [-Tenant <Object>] [-UseUniqueConferenceIds <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Dial-in conferencing tenant settings control what functions are available during a conference call.
For example, whether or not entries and exits from the call are announced.
The settings also manage some of the administrative functions, such as when users get notification of administrative actions, like a PIN change.
By contrast, the higher level dial-in conferencing configuration only maintains a flag for whether dial-in conferencing is enabled for your organization.
For more information, see `Get-CsOnlineDialinConferencingTenantConfiguration`.

There is always a single instance of the dial-in conferencing settings per tenant.
You can modify the settings using `Set-CsOnlineDialInConferencingTenantSettings` and revert those settings to their defaults by using `Remove-CsOnlineDialInConferencingTenantSettings`.

The following parameters are not applicable to Skype for Business Online: AsJob, EnableDialOutJoinConfirmation, IncludeTollFreeNumberInMeetingInvites, MigrateServiceNumbersOnCrossForestMove, and UseUniqueConferenceIds

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingTenantSettings -EnableEntryExitNotifications $True -EnableNameRecording $True -PinLength 7
```

This example sets the tenant's conferencing settings to enable entry and exit notifications supported by name recording.
The PIN length is set to 7.


### -------------------------- Example 2 --------------------------
```
Set-CsOnlineDialInConferencingTenantSettings -SendEmailFromOverride $true -SendEmailFromAddress admin@contoso.com -SendEmailFromDisplayName "Conferencing Administrator"
```

This example defines the contact information to be used in dial-in conferencing email notifications and enables the default address to be overridden.


## PARAMETERS

### -AllowPSTNOnlyMeetingsByDefault
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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticallyMigrateUserMeetings
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticallyReplaceAcpProvider
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticallySendEmailsToUsers
Specifies whether advisory emails will be sent to users when the events listed below occur.
Setting the parameter to $true enables the emails to be sent, $false disables the emails.
The default is $true.

User is enabled or disabled for dial-in conferencing.

The dial-in conferencing provider is changed either to Microsoft, or from Microsoft to another provider, or none.

The dial-in conferencing PIN is reset by the tenant administrator.

Changes to either the user's conference ID, or the user's default dial-in conference number.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableEntryExitNotifications
Specifies if, by default, announcements are made as users enter and exit a conference call.
Set to $true to enable notifications, $false to disable notifications.
The default is $true.

This setting can be overridden on a meeting by meeting basis when a user joins a meeting via a Skype for Business client and modifies the Announce when people enter or leave setting on the Skype Meeting Options menu of a meeting.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableNameRecording
Specifies whether the name of a user is recorded on entry to the conference.
This recording is used during entry and exit notifications.
Set to $true to enable name recording, set to $false to bypass name recording.
The default is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryExitAnnouncementsType
PARAMVALUE: UseNames | ToneOnly

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeTollFreeNumberInMeetingInvites
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateServiceNumbersOnCrossForestMove
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinLength
Specifies the number of digits in the automatically generated PINs.
Organizers can enter their PIN to start a meeting they scheduled if they join via phone and are the first person to join.
The minimum value is 4, the maximum is 12, and the default is 5.

A user's PIN will only authenticate them as leaders for a meeting they scheduled.
The PIN of a user that did not schedule the meeting will not enable that user to lead the meeting.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromAddress
Specifies the email address to use in the "From" contact information on emails that are sent to users to notify them of their dial-in conferencing settings, or when their settings change.
The email address needs to be in the form \<UserAlias\>@\<Domain\>.
For example, "KenMyer@Contoso.com" or "Admin@Contoso.com".

The SendEmailFromAddress value is used only if the SendEmailFromDisplayName setting is specified, and the SendEmailFromOverride setting is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromDisplayName
Specifies the display name to use in the "From" contact information on emails that are sent to users to notify them of their dial-in conferencing settings, or when their settings change.

The SendEmailFromDisplayName value is used only if the SendEmailFromDisplayName setting is specified, and the SendEmailFromOverride setting is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromOverride
Specifies if the contact information on dial-in conferencing notifications will be the default generated by Office 365, or administrator defined values.
Setting SendEmailFromOverride to $true enables the system to use the SendEmailFromAddress and SendEmailFromDisplayName parameter inputs as the "From" contact information.
Setting this parameter to $false will cause email notifications to be sent with the system generated default.
The default is $false.

SendEmailFromOverride can't be $true if SendEmailFromAddress and SendEmailFromDisplayName aren't specified.

If you want to change the email address information, you need to make sure that your inbound email policies allow for emails that come from the address specified by the SendEmailFromAddress parameter.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseUniqueConferenceIds
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

