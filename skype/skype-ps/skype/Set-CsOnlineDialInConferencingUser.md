---
external help file: 
applicable: Skype for Business Online
title: Set-CsOnlineDialInConferencingUser
schema: 2.0.0
---

# Set-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the `Set-CsOnlineDialInConferencingUser` cmdlet to modify the properties of a user that has been enabled for Microsoft's audio conferencing service.

## SYNTAX

```
Set-CsOnlineDialInConferencingUser [[-Identity] <Object>] [-TenantDomain <Object>]
 [-AllowPSTNOnlyMeetings <Object>] [-BridgeId <Object>] [-BridgeName <Object>] [-BypassDualWrite <Object>]
 [-ConferenceId <Object>] [-Confirm] [-DomainController <Object>] [-Force] [-ResetConferenceId]
 [-ResetLeaderPin] [-SendEmail] [-SendEmailFromAddress <Object>] [-SendEmailFromDisplayName <Object>]
 [-SendEmailToAddress <Object>] [-ServiceNumber <Object>] [-Tenant <Object>] [-TollFreeServiceNumber <Object>]
 [-WhatIf] [-AllowTollFreeDialIn <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsOnlineDialInConferencingUser` cmdlet is used to modify properties for a Microsoft audio conferencing user.
This cmdlet will not work for users with third-party conferencing providers.
The cmdlet will verify that the correct license is assigned to the user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -ConferenceId 3542699 -ResetLeaderPin -ServiceNumber 14255037265
```

This example shows how to set a ConferenceId for a user, reset the meeting leader's PIN and set the audio conferencing provider default meeting phone number.


### -------------------------- Example 2 --------------------------
```
Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -BridgeName "Conference Bridge" -ConferenceId 3542699
```

This example sets a user's ConferenceId and conference bridge assignment.


## PARAMETERS

### -Identity
Specifies the Identity of the user account to be to be modified.
A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
Specifies the domain name for the tenant or organization.

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

### -AllowPSTNOnlyMeetings
If true, non-authenticated users can start meetings.
If false, non-authenticated callers wait in the lobby until an authenticated user joins, thereby starting the meeting.
An authenticated user is a user who joins the meeting using a Skype for Business client, or the organizer that joined the meeting via dial-in conferencing and was authenticated by a PIN number.
The default is false.

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

### -BridgeId
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

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

### -BridgeName
Specifies the name of the audio conferencing bridge.

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

### -ConferenceId
Specifies the ConferenceId that will be used by the user for dial-in meetings.
The cmdlet will fail if:

The ConferenceId is already being used in the bridge where the user is assigned, or to which the user would be assigned.

The ConferenceId doesn't meet the ConferenceId format requirements.

ConferenceId and ResetConferenceId are mutually exclusive.
When ConferenceId is specified the new ConferenceId will be assigned to the user.
When ResetConferenceId is specified, the user will get an auto-generated ConferenceId.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: Passcode
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

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): `-DomainController atl-cs-001.Contoso.com.`

Computer name: `-DomainController atl-cs-001`

This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
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

### -ResetConferenceId
Specifies whether to reset the ConferenceId for meetings that the user is organizing.
If specified, the meetings using the old ConferenceId will fail.
The user will have to reschedule his existing meetings, or run the meeting migration tool.

ConferenceId and ResetConferenceId are mutually exclusive.
When ConferenceId is specified the new ConferenceId will be assigned to the user.
When ResetConferenceId is specified, the user will get an auto-generated ConferenceId.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: ResetPasscode
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetLeaderPin
Specifies whether to reset the meeting organizer or leaders PIN for meetings.

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

### -SendEmail
PARAMVALUE: SwitchParameter

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

### -SendEmailFromAddress
PARAMVALUE: String

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
PARAMVALUE: String

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

### -SendEmailToAddress
PARAMVALUE: String

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

### -ServiceNumber
Specifies the default service number for the user.
The default number is used in meeting invitations.
The cmdlet will verify that the service number is assigned to the user's current conference bridge, or the one the user is being assigned to.

The service number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

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
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`.
You can find your tenant ID by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

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

### -TollFreeServiceNumber
PARAMVALUE: String

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

### -AllowTollFreeDialIn
If toll-free numbers are available in your Microsoft Audio Conferencing bridge, this parameter controls if they can be used to join the meetings of a given user. Please note that making modifications to this value could trigger rescheduling all existing meetings organized by the given users, and all meeting invites will be resent to all participants. 

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

## OUTPUTS

## NOTES

## RELATED LINKS
