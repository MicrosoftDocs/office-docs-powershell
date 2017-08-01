---
applicable: Skype for Business Online
schema: 2.0.0
---

# Enable-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the Enable-CsOnlineDialInConferencingUser cmdlet to enable a Skype for Business user to access audio conferencing through Skype for Business Online.

## SYNTAX

```
Enable-CsOnlineDialInConferencingUser [[-Identity] <Object>] [-AllowPstnOnlyMeetings <Object>]
 [-BypassDualWrite <Object>] [-ConferenceId <Object>] [-DomainController <Object>] [-Force] [-ReplaceProvider]
 [-SendEmail] [-SendEmailFromAddress <Object>] [-SendEmailFromDisplayName <Object>]
 [-SendEmailToAddress <Object>] [-ServiceNumber <Object>] [-Tenant <Object>] [-TenantDomain <Object>]
 [-TollFreeServiceNumber <Object>] [-AllowTollFreeDialIn <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Enable-CsOnlineDialInConferencingUser cmdlet allows a Skype for Business user to access audio conferencing through Skype for Business Online.
The cmdlet will validate if the user has the correct license assigned.
If the user already uses Microsoft as the audio conferencing provider, the cmdlet will run without any errors but no changes are made to the user.
The user can be moved from a third-party audio conferencing provider to Microsoft as the PSTN conferencing provider by using the ReplaceProvider parameter.

If the bridge information (BridgeID or BridgeName) isn't provided and the tenant is just using one audio conferencing bridge, the user is assigned to the bridge.
If the bridge information isn't provided and the tenant uses multiple audio conferencing bridges, the user is then assigned to the default bridge.

The audio conferencing provider name and domain information is automatically set for the user when they are enabled for audio conferencing.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsOnlineDialInConferencingUser -Identity "Ken Meyer" -AllowPstnOnlyMeetings $false -ConferenceId 3659305 -ReplaceProvider -ServiceNumber 14255551234
```

This example enables a user named Ken Meyer to use audio conferencing and set up Skype for Business Online dial-in meetings.
When the cmdlet runs, it will replace Ken's existing audio conferencing provider information, set the default phone number to 14255551234 and the ConferenceId for meetings to 3659305.


## PARAMETERS

### -Identity
A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
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

### -AllowPstnOnlyMeetings
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
PARAMVALUE: Int32

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

### -DomainController
PARAMVALUE: Fqdn

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
Specifies the default phone number to be used by the user.
The default number is used in meeting invitations.
The service number parameter overwrites the default service number assigned to the bridge for the user.
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
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

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

### -AllowTollFreeDialIn
{{Fill AllowTollFreeDialIn Description}}

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