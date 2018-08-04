---
external help file: 
applicable: Skype for Business Online
title: Enable-CsOnlineDialInConferencingUser
schema: 2.0.0
---

# Enable-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the `Enable-CsOnlineDialInConferencingUser` cmdlet to enable a Skype for Business user to access audio conferencing through Skype for Business Online.

## SYNTAX

```
Enable-CsOnlineDialInConferencingUser [-AllowPstnOnlyMeetings <Boolean>] [-ServiceNumber <String>]
 [-SendEmailFromDisplayName <String>] [-ConferenceId <Int32>] [-TenantDomain <String>]
 [-TollFreeServiceNumber <String>] [-SendEmailToAddress <String>] [-SendEmailFromAddress <String>] [-SendEmail]
 [[-Identity] <UserIdParameter>] [-Tenant <Guid>] [-AllowTollFreeDialIn <Boolean>] [-DomainController <Fqdn>]
 [-ReplaceProvider] [-Force] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The `Enable-CsOnlineDialInConferencingUser` cmdlet allows a Skype for Business user to access audio conferencing through Skype for Business Online.
The cmdlet will validate if the user has the correct license assigned.
If the user already uses Microsoft as the audio conferencing provider, the cmdlet will run without any errors but no changes are made to the user.
The user can be moved from a third-party audio conferencing provider to Microsoft as the PSTN conferencing provider by using the ReplaceProvider parameter.

If the bridge information (BridgeID or BridgeName) isn't provided and the tenant is just using one audio conferencing bridge, the user is assigned to the bridge.
If the bridge information isn't provided and the tenant uses multiple audio conferencing bridges, the user is then assigned to the default bridge.

The audio conferencing provider name and domain information is automatically set for the user when they are enabled for audio conferencing.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:> Enable-CsOnlineDialInConferencingUser -Identity "Ken Meyer" -AllowPstnOnlyMeetings $false -ConferenceId 3659305 -ReplaceProvider -ServiceNumber 14255551234
```

This example enables a user named Ken Meyer to use audio conferencing and set up Skype for Business Online dial-in meetings.
When the cmdlet runs, it will replace Ken's existing audio conferencing provider information, set the default phone number to 14255551234 and the ConferenceId for meetings to 3659305.


## PARAMETERS

### -Identity
A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
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

### -AllowPstnOnlyMeetings
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

### -ConferenceId
Specifies the ConferenceId that will be used by the user for dial-in meetings. The cmdlet will fail if:

The ConferenceId is already being used in the bridge where the user is assigned, or to which the user would be assigned.

The ConferenceId doesn't meet the ConferenceId format requirements.

ConferenceId and ResetConferenceId are mutually exclusive. When ConferenceId is specified the new ConferenceId will be assigned to the user. When ResetConferenceId is specified, the user will get an auto-generated ConferenceId.

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

### -DomainController
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

### -ReplaceProvider
If present, the ReplaceProvider switch causes the user's default conferencing provider information to be set to Microsoft.
If omitted, the Active Directory information will not be updated.

If the ReplaceProvider parameter is not used and the user is enabled for a 3rd party conferencing provider, the cmdlet will fail.

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
Specifies the default phone number to be used by the user.
The default number is used in meeting invitations.
The service number parameter overwrites the default service number assigned to the bridge for the user.
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
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

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

### -TollFreeServiceNumber
Specifies a toll-free phone number to be used by the user. This number is then used in meeting invitations.
The toll-free number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

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

### -AllowTollFreeDialIn
If true, specified toll-free number is used in meeting invitations.
If false, specified toll-free number is not allowed to be used in meeting invitations.
The default is true.

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
[Disable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/disable-csonlinedialinconferencinguser?view=skype-ps)

[Get-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinedialinconferencinguser?view=skype-ps)

[Set-CsOnlineDialInConferencingUser](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinedialinconferencinguser?view=skype-ps)
