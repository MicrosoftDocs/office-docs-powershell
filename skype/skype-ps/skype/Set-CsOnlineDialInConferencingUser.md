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
Set-CsOnlineDialInConferencingUser [-TollFreeServiceNumber <String>] [[-Identity] <UserIdParameter>]
 [-BridgeName <String>] [-SendEmail] [-Confirm] [-ServiceNumber <String>] [-ResetConferenceId] [-Force]
 [-Tenant <Guid>] [-SendEmailFromAddress <String>] [-ResetLeaderPin] [-ConferenceId <Int32>]
 [-DomainController <Fqdn>] [-SendEmailToAddress <String>] [-BridgeId <Guid>] [-TenantDomain <String>]
 [-AllowTollFreeDialIn <Boolean>] [-WhatIf] [-SendEmailFromDisplayName <String>]
 [-AllowPSTNOnlyMeetings <Boolean>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsOnlineDialInConferencingUser` cmdlet is used to modify properties for a Microsoft audio conferencing user.
This cmdlet will not work for users with third-party conferencing providers.
The cmdlet will verify that the correct license is assigned to the user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:> Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -ConferenceId 3542699 -ResetLeaderPin -ServiceNumber 14255037265
```

This example shows how to set a ConferenceId for a user, reset the meeting leader's PIN and set the audio conferencing provider default meeting phone number.


### -------------------------- Example 2 --------------------------
```
PS C:> Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -BridgeName "Conference Bridge" -ConferenceId 3542699
```

This example sets a user's ConferenceId and conference bridge assignment.


## PARAMETERS

### -Identity
Specifies the Identity of the user account to be to be modified.
A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
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
Type: String
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
Type: Boolean
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
Type: Guid
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
Type: String
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
Type: Int32
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
Type: Fqdn
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
Send an email to the user that contains his Audio Conference information.

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
You can specify the From Address to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmailFromDisplayName and -SendEmail.

```yaml
Type: String
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
You can specify the Display Name to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmailFromAddress and -SendEmail.

```yaml
Type: String
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
You can specify the To Address to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmail.

```yaml
Type: String
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
Type: String
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
Type: Guid
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
Specifies a toll-free phone number to be used by the user. This number is then used in meeting invitations. The toll-free number can be specified in the following formats: E.164 number, +<E.164 number> and tel:<E.164 number>.

```yaml
Type: String
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
Type: Boolean
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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
[Enable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/enable-csonlinedialinconferencinguser?view=skype-ps)

[Disable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/disable-csonlinedialinconferencinguser?view=skype-ps)

[Get-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinedialinconferencinguser?view=skype-ps)
