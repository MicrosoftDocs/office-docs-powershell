---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsMeetingRoom
schema: 2.0.0
---

# Set-CsMeetingRoom

## SYNOPSIS
Modifies the property values of an existing Skype for Business Server meeting room.
A meeting room is a conferencing device designed to address video conferencing and collaboration scenarios in small conference rooms.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Set-CsMeetingRoom [-Identity] <UserIdParameter>
 [-AcpInfo <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[Microsoft.Rtc.Management.ADConnect.Collections.AcpInfo]>]
 [-AudioVideoDisabled <Boolean>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <Boolean>]
 [-EnterpriseVoiceEnabled <Boolean>] [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>]
 [-HostedVoiceMail <Boolean>] [-LineServerURI <String>] [-LineURI <String>] [-PassThru] [-PrivateLine <String>]
 [-RemoteCallControlTelephonyEnabled <Boolean>] [-SipAddress <String>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, meeting rooms are self-contained computer appliances that are installed in conference rooms and supply advanced meeting capabilities such as:

One touch meeting join experience

Multi-view video gallery

Touch-enabled white-boarding on the front of room screen

Calendar integration to provide access to scheduled meetings

Content sharing and switching

In order to manage these new endpoint devices you must, among other things, create and enable an Exchange resource mailbox account for the device, then enable that resource account for Skype for Business Server.
Note that, for Skype for Business Server, there are no cmdlets for creating or removing meeting rooms.
Instead, you use the `Enable-CsMeetingRoom` cmdlet to enable meeting rooms and the `Disable-CsMeetingRoom` cmdlet to disable meeting rooms.
The resource account must already exist in order for you to enable the meeting room, and disabling a meeting room only removes that room from your collection of meeting rooms; it does not delete the resource mailbox account.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsMeetingRoom` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsMeetingRoom -Identity "RedmondMeetingRoom" -LineUri "tel:+12065551219"
```

The command show in Example 1 updates the LineUri assigned to the meeting room RedmondMeetingRoom.


### -------------------------- Example 2 --------------------------
```
Set-CsMeetingRoom -Identity "RedmondMeetingRoom" -Enabled $False

Set-CsMeetingRoom -Identity "RedmondMeetingRoom" -Enabled $True
```

In Example 2, the meeting room RedmondMeetingRoom is temporarily disabled; this is done by setting the Enabled property to False ($False):

`Set-CsMeetingRoom -Identity "RedmondMeetingRoom" -Enabled $False`

To re-enable the room, simply set the Enabled property to True ($True):

`Set-CsMeetingRoom -Identity "RedmondMeetingRoom" -Enabled $True`

### -------------------------- Example 3 --------------------------
```
Get-CsMeetingRoom | Set-CsMeetingRoom -Enabled $False
```

Example 3 temporarily disables all the meeting rooms in the organization.
To do this, the command first calls the `Get-CsMeetingRoom` cmdlet without any parameters; that returns a collection of all the available meeting rooms.
That collection is then piped to the `Set-CsMeetingRoom` cmdlet, which temporarily disables each room in the collection.


### -------------------------- Example 4 --------------------------
```
Get-CsMeetingRoom | Set-CsMeetingRoom -ExchangeArchivingPolicy "UseLyncArchivingPolicy"
```

In Example 4, all the meeting rooms in the organization are configured to use Skype for Business Server archiving rather than Exchange archiving.
To carry out this task, the command first uses the `Get-CsMeetingRoom` cmdlet to return a collection of all the available meeting rooms.
That collection is then piped to the `Set-CsMeetingRoom` cmdlet, which uses the ExchangeArchivingPolicy cmdlet to configure each room in the collection to use Skype for Business Server archiving.


## PARAMETERS

### -Identity
Indicates the Identity of the meeting room to be modified.
Meeting room Identities are typically specified using one of four formats: 1) the room's SIP address; 2) the room's user principal name (UPN); 3) the room's domain name and logon name, in the form domain\logon (for example, litwareinc\room14) and 4) the room's Active Directory display name (for example, Room 14).
You can also reference a room account by using the room's Active Directory distinguished name.


```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AcpInfo
Enables you to assign one or more third-party audio conferencing providers to a meeting room.
However, it is recommended that you use the `Set-CsUserAcp` cmdlet to assign Audio conferencing providers.


```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[Microsoft.Rtc.Management.ADConnect.Collections.AcpInfo]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioVideoDisabled
Indicates whether the room is allowed to make audio/video (A/V) calls by using Skype for Business.
If set to True, the room will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a room is currently enabled for remote call control, Enterprise Voice and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve meeting room information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Indicates whether or not the room has been enabled for Skype for Business Server.
If you set this value to False, the room will no longer be able to log on to Skype for Business Server; setting this value to True re-enables the meeting room's logon privileges.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the room is enabled for Enterprise Voice and/or remote call control) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.
This differs from using the `Disable-CsMeetingRoom` cmdlet to disable a meeting room account.
When you run `Disable-CsMeetingRoom`, all the Skype for Business Server data associated with that account is deleted.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
Indicates whether the room has been enabled for Enterprise Voice, which is the Microsoft implementation of Voice over Internet Protocol (VoIP).
With Enterprise Voice, rooms can make telephone calls using the Internet rather than using the standard telephone network.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchivingPolicy
Indicates how (and where) the room's instant messaging and conferencing sessions will be archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

NoArchiving

ArchivingToExchange


```yaml
Type: ExchangeArchivingPolicyOptionsEnum
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedVoiceMail
When set to True, enables a room's voice mail calls to be routed to a hosted version of Exchange.
In addition, setting this option to True enables rooms to directly place a call to another user's voice mail.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineServerURI
The URI of the remote call control telephone gateway assigned to the room.
The LineServerUri is the gateway URI, prefaced by "sip:".
For example:

`-LineServerUri "sip:rccgateway@litwareinc.com"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI
Phone number assigned to the room.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "TEL:" prefix.
For example:

`-LineUri "TEL:+14255551297"`

Any extension number should be added to the end of the line URI, for example:

`-LineUri "TEL:+14255551297;ext=51297"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a meeting room object through the pipeline that represents the meeting room being modified.
By default, the `Set-CsMeetingRoom` cmdlet does not pass objects through the pipeline.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateLine
Phone number for the room private telephone line.
A private line is a phone number that is not published in Active Directory Domain Services (AD DS) and, as a result, is not readily available to other people.
In addition, this private line bypasses most in-bound call routing rules; for example, a call to a private line will not be forwarded to a room's delegates.
Private lines are often used for personal phone calls or for business calls that should be kept separate from other team members.

The private line value should be specified using the E.164 format, and be prefixed by the "TEL:" prefix.
For example:

`-PrivateLine "TEL:+14255551297"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCallControlTelephonyEnabled
Indicates whether the room has been enabled for remote call control telephony.
When enabled for remote call control, a room can employ Skype for Business Server to answer phone calls made to his or her desk phone.
Phone calls can also be made using Skype for Business.
These calls all rely on the standard telephone network, also known as the public switched telephone network (PSTN).
To make and receive phone calls over the Internet, the room must be enabled for Enterprise Voice.
For details, see the parameter EnterpriseVoiceEnabled.

To be enabled for remote call control, a room must also have both a LineUri and a LineServerUri.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
Unique identifier (similar to an email address) that allows the room to communicate using SIP devices such as Skype for Business.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example:

`-SipAddress "sip:room14@litwareinc.com"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsMeetingRoom` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

## OUTPUTS

###  
None.
Instead, the `Set-CsMeetingRoom` cmdlet modifies existing instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

## NOTES

## RELATED LINKS

[Disable-CsMeetingRoom](Disable-CsMeetingRoom.md)

[Enable-CsMeetingRoom](Enable-CsMeetingRoom.md)

[Get-CsMeetingRoom](Get-CsMeetingRoom.md)

[Move-CsMeetingRoom](Move-CsMeetingRoom.md)

