---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsUserAcp
schema: 2.0.0
---

# Set-CsUserAcp

## SYNOPSIS
Adds a new audio conferencing provider to a user or group of users, or modifies an existing audio conferencing provider already assigned to a user.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsUserAcp [-Identity] <UserIdParameter> -Domain <String> -Name <String> -ParticipantPasscode <String>
 -TollNumber <String> [-IsDefault <Boolean>] [-TollFreeNumbers <String[]>] [-Url <String>] [-PassThru]
 [-WhatIf] [-Confirm] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
An audio conferencing provider is a third-party company that provides organizations with conferencing services.
Among other things, audio conferencing providers offer a way for users located off site and not connected to the corporate network or the Internet, to participate in the audio portion of a conference or meeting.
Audio conferencing providers often include high-end services such as live translation, transcription and live per-conference operator assistance.

Skype for Business Server does not allow for complete integration with audio conferencing providers.
The CsUserAcp cmdlets enable administrators to set a phone number and passcode and to configure other information that can be used for audio conferencing provider integration any time a user schedules a meeting.
However, because these cmdlets were not designed for the on-premises version of Skype for Business Server (instead, they are only intended for use with Skype for Business Online) no additional audio conferencing provider integration is provided beyond assigning property values.

Audio conferencing providers can be assigned to a user account by using the `Set-CsUserAcp` cmdlet.
(Note that a user can be assigned multiple audio conferencing providers.) The `Set-CsUserAcp` cmdlet is also used to modify the properties of an existing audio conferencing provider.
If you call the `Set-CsUserAcp` cmdlet, the cmdlet uses the parameter information included in the call to check the existing audio conferencing providers assigned to the user.
If a match is found, then the existing provider is modified.
For example, supposed you issue the following command:

`Set-CsUserAcp -Identity "Ken Myer" -TollNumber "15554251298" -ParticipantPassCode 13761 -Domain "fabrikam.com" -Name "Fabrikam ACP"`

Further suppose that Ken Myer has already been assigned an audio conferencing provider named Fabrikam ACP that has the same TollNumber and Domain as those specified in the command.
(In other words, the only difference is the ParticipantPassCode,) In that case, the Set-CsUserAcp cmdlet will modify the existing Fabrikam ACP provider.
If a match is not found, then a new provider will be added to Ken Myer's user account.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsUserAcp -Identity "Ken Myer" -TollNumber "14255551298" -ParticipantPassCode 13761 -Domain "fabrikam.com" -Name "Fabrikam ACP"
```

In Example 1, the `Set-CsUserAcp` cmdlet is used to assign a new audio conferencing provider to the user Ken Myer.
To do this, the Identity parameter is used to indicate the user account to be modified.
In addition, the required parameters TollNumber, ParticipantPassCode, Domain and Name are included, along with the appropriate parameter values.


### -------------------------- Example 2 ------------------------
```
Get-CsUser -LdapFilter "Department=Finance" | Set-CsUserAcp -TollNumber "14255551298" -ParticipantPassCode 13761 -Domain "fabrikam.com" -Name "Fabrikam ACP"
```

The command shown in Example 2 assigns the same audio conferencing provider to all the users who work in the Finance department.
To do this, the command first uses the `Get-CsUser` cmdlet and the LdapFilter (with the filter value "Department=Finance") to return a collection of all the users who work in the Finance department.
This collection is then piped to the `Set-CsUserAcp` cmdlet, which assigns the same audio conferencing provider (Fabrikam ACP) to each user in the collection.


### -------------------------- Example 3 ------------------------
```
Set-CsUserAcp -Identity "Ken Myer" -TollNumber "14255551298" -ParticipantPassCode 13761 -Domain "fabrikam.com" -Name "Fabrikam ACP" -TollFreeNumbers "18005551010", "18005551020"
```

Example 3 assigns the Fabrikam ACP audio conferencing provider to the user Ken Myer.
In addition to specifying the TollNumber, ParticipantPassCode, Domain and Name, this command also includes a pair of toll-free phone numbers.
To assign these two values, include the TollFreeNumbers parameter followed by the two phone numbers, separated from one another by a comma.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be modified.
You can specify a user's identity using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory Domain Services display name (for example, Ken Myer).
User identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends in the string value "Smith".


```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Domain
Domain name of the audio conferencing provider.
For example:

`-Domain "fabrikam.com"`

The domain name will be given to you by the audio conferencing provider.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of the audio conferencing provider.
For example:

`-Name "Fabrikam Conference Services"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParticipantPasscode
Passcode required when connecting to a conference by using the audio conferencing provider.
For example:

`-ParticipantPassCode "0712"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TollNumber
Non-toll-free phone number used for audio conferences.
For example:

`-TollNumber "14255551298"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
Indicates whether or not this is the default audio conferencing provider for the user.
Each user can only have one default provider.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TollFreeNumbers
Collection of toll-free phone number used for audio conferences.
For example:

`-TollFreeNumbers "18005551298"`

To add multiple toll-free numbers, separate the individual numbers by using commas:

`-TollFreeNumbers "18005551298", "18005559876"`


```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Web URL for the audio conferencing provider; for example:

`-Url "http://acp.fabrikam.com"`

The web URL enables audio conferencing providers to point users to a webpage containing additional dial-in phone numbers, as well as information about the services offered by the audio conferencing provider.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass an object through the pipeline that represents the user whose account properties are being configured.
The PassThru parameter is required in such cases because, by default, the `Set-CsUserAcp` cmdlet does not pass objects through the pipeline.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The `Set-CsUserAcp` cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsUserAcp](Get-CsUserAcp.md)

[Remove-CsUserAcp](Remove-CsUserAcp.md)

