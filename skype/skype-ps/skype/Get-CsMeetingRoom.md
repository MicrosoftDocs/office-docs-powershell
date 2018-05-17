---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsMeetingRoom
schema: 2.0.0
---

# Get-CsMeetingRoom

## SYNOPSIS
Returns information about all the Skype for Business meeting rooms configured for use in the organization.
A meeting room is a conferencing device designed to address video conferencing and collaboration scenarios in small conference rooms.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsMeetingRoom [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business, meeting rooms are self-contained computer appliances that are installed in conference rooms and supply advanced meeting capabilities such as:

- One touch meeting join experience
- Multi-view video gallery
- Touch-enabled white-boarding on the front of room screen
- Calendar integration to provide access to scheduled meetings
- Content sharing and switching

In order to manage these new endpoint devices you must, among other things, create and enable an Exchange resource mailbox account for the device, then enable that resource account for Skype for Business.
Note that, for Skype for Business, there are no cmdlets for creating or removing meeting rooms.
Instead, you use the Enable-CsMeetingRoom cmdlet to enable meeting rooms and the Disable-CsMeetingRoom cmdlet to disable meeting rooms.
The resource account must already exist in order for you to enable the meeting room, and disabling a meeting room only removes that room from your collection of meeting rooms; it does not delete the resource mailbox account.

The functions carried out by the Get-CsMeetingRoom cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMeetingRoom
```

The command shown in Example 1 returns information about all the meeting rooms configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsMeetingRoom -Identity "sip:RedmondMeetingRoom@litwareinc.com"
```

Example 2 returns information for a single meeting room: the system with the SIP address sip:RedmondMeetingRoom@litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsMeetingRoom -Filter {VoicePolicy -eq "RedmondVoicePolicy"}
```

The command shown in Example 3 returns information for all the meeting rooms that have been assigned the per-user voice policy RedmondVoicePolicy.
To do this, the command includes the Filter parameter and the filter value {VoicePolicy -eq "RedmondVoicePolicy"}.
That filter value limits the returned data to meeting rooms where the VoicePolicy property is equal to (-eq) RedmondVoicePolicy.


## PARAMETERS

### -Credential
Enables you to run the Get-CsMeetingRoom cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
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

### -Filter
Enables you to limit the returned data by filtering on Skype for Business-specific attributes.
For example, you can limit returned data to meeting rooms that have been assigned a specific voice policy, or rooms that have not been assigned a specific voice policy.

The Filter parameter uses much the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only rooms that have been assigned the voice policy RedmondVoicePolicy would look like this:

`{VoicePolicy -eq "RedmondVoicePolicy"}`

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

### -Identity
Indicates the Identity of the meeting room to be retrieved.
Meeting room Identities are typically specified using one of four formats: 1) the room's SIP address; 2) the room's user principal name (UPN); 3) the room's domain name and logon name, in the form domain\logon (for example, litwareinc\room14); and, 4) the room's Active Directory display name (for example, Room 14).

You can also reference a room account by using the room's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the room Identity.
For example, the Identity "*Redmond*" returns all the rooms that have a display name that includes the string value "Redmond".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business).
For example, you can limit returned data to meeting rooms belonging to a specific department.The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only meeting rooms found in the city of Redmond would look like this:

`-LdapFilter "l=Redmond"`

In that syntax, "l" (a lowercase L) represents the Active Directory attribute (locality); "=" represents the comparison operator (equal to); and "Redmond" represents the filter value.

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

### -OU
Enables you to return information about meeting rooms in a specific organizational unit (OU) or container.
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable -- meeting rooms will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example:

`-OU "OU=MeetingRooms,dc=litwareinc,dc=com"`

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to limit the number of records returned by the cmdlet.
For example, to return seven meeting rooms (regardless of the number of meeting rooms that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven meeting rooms will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three meeting rooms in your forest, the command will return those three meeting rooms, and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
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

### Microsoft.Rtc.Management.AD.UserIdParameter or String
The Get-CsMeetingRoom cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled as a Skype for Business  meeting room.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom


## NOTES


## RELATED LINKS

[Disable-CsMeetingRoom](Disable-CsMeetingRoom.md)

[Enable-CsMeetingRoom](Enable-CsMeetingRoom.md)

[Move-CsMeetingRoom](Move-CsMeetingRoom.md)

[Set-CsMeetingRoom](Set-CsMeetingRoom.md)

