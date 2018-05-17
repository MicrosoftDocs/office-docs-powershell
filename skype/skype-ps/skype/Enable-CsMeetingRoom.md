---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Enable-CsMeetingRoom
schema: 2.0.0
---

# Enable-CsMeetingRoom

## SYNOPSIS
Enables a Skype for Business Server meeting room.
A meeting room is a conferencing device designed to address video conferencing and collaboration scenarios in small conference rooms.
To enable a meeting room you must first create an Active Directory user account that will represent that system.
Note that, although meeting room objects are based on user accounts, these objects will not show up when you run the Get-CsUser cmdlet.
This cmdlet was introduced in Lync Server 2013.

The process for creating and updating meeting rooms differs depending on your deployment of Skype for Business Online and Skype for Business Server.  Make sure you are following the guidance here to set up your meeting rooms properly: https://docs.microsoft.com/en-us/skypeforbusiness/deploy/deploy-clients/with-office-365


## SYNTAX

```
Enable-CsMeetingRoom [-Identity] <UserIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-HostingProviderProxyFqdn <Fqdn>] [-OriginatorSid <SecurityIdentifier>] [-PassThru] [-ProxyPool <Fqdn>]
 [-RegistrarPool <Fqdn>] [-SipAddress <String>] [-SipAddressType <AddressType>] [-SipDomain <Fqdn>] [-WhatIf]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, meeting rooms are self-contained computer appliances that are installed in conference rooms and supply advanced meeting capabilities such as:

- One touch meeting join experience
- Multi-view video gallery
- Touch-enabled white-boarding on the front of room screen
- Calendar integration to provide access to scheduled meetings
- Content sharing and switching

In order to manage these new endpoint devices you must, among other things, create and enable an Exchange resource mailbox account for the device, then enable that resource account for Skype for Business Server.
Note that, for Skype for Business Server, there are no cmdlets for creating or removing meeting rooms.
Instead, you use the Enable-CsMeetingRoom cmdlet to enable meeting rooms and the Disable-CsMeetingRoom cmdlet to disable meeting rooms.
The resource account must already exist in order for you to enable the meeting room, and disabling a meeting room only removes that room from your collection of meeting rooms; it does not delete the resource mailbox account.

The process for creating and updating meeting rooms differs depending on your deployment of Skype for Business Online and Skype for Business Server.  Make sure you are following the guidance here to set up your meeting rooms properly: https://docs.microsoft.com/en-us/skypeforbusiness/deploy/deploy-clients/with-office-365

The functions carried out by the Enable-CsMeetingRoom cmdlet are not available in the Skype for Business Server Control Panel.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Enable-CsMeetingRoom"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsMeetingRoom -Identity "Redmond Meeting room" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddress "sip:RedmondMeetingRoom@litwareinc.com"
```

The command shown in Example 1 enables the meeting room that has the Identity (in this case, the Active Directory display name) Redmond Meeting room.
The new meeting room is homed on the Registrar pool arl-cs-001.litwareinc.com and given the SIP address sip:RedmondMeetingRoom@litwareinc.com.

### -------------------------- Example 2 --------------------------
```
Get-CsAdUser -OU "OU=MeetingRooms,dc=litwareinc,dc=com" | Enable-CsMeetingRoom -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType "SamAccountName" -SipDomain "litwareinc.com"
```

Example 2 enables all the meeting rooms found in the MeetingsRoom OU.
(In other words, this command enables all the user accounts in the MeetingsRoom OU.) To do this, the command first calls the Get-CsAdUser cmdlet along with the OU parameter; the parameter value "OU=MeetingRooms,dc=litwareinc,dc=com" limits returned data to user accounts found in the MeetingRooms OU.
Those accounts are then piped to the Enable-CsMeetingRoom cmdlet, which takes each account in the collection and enables that account as a meeting room.
Each new meeting rooms will be home on the Registrar pool atl-cs-001.litwareinc.com and will have a SIP address composed of the account's SamAccountName parameter (for example, room14) and the SIP domain litwareinc.com.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be configured as a meeting room.
Identities are typically specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\room14); and, 4) the user's Active Directory display name (for example, Room 14).

You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "Smith" returns all the user who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to enable a meeting room.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostingProviderProxyFqdn
Fully qualified domain name of the hosting provider proxy server.
This parameter is used only with Skype for Business Online.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: HostingProvider
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OriginatorSid
Value of the msRTCSIP-OriginatorSID attribute.
This Active Directory attribute is used to enable single sign-on.
This parameter is used only with Skype for Business Online.

```yaml
Type: SecurityIdentifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a meeting room object through the pipeline that represents the meeting room being enabled for Skype for Business Server.
By default, the Enable-CsMeetingRoom cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool
Proxy pool name.
This parameter is used only with Skype for Business Online.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool
Indicates the Registrar pool where the meeting room's Skype for Business Server 2015 account will be homed.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
Enables you to assign the meeting room a specific SIP address.
When specifying the SIP address, preface the address with "sip:".
That means the value supplied to the SipAddress parameter should look something like this:

`sip:room14@litwareinc.com`

The SipAddress parameter should not be used if you use the SipAddressType parameter in order to have Skype for Business Server 2015 automatically generate a SIP address for the meeting room.

The SipAddress parameter cannot be used if you are attempting to enable multiple meeting rooms at the same time.
Instead, you must auto-generate SIP address for those rooms by using the SipAddressType parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddressType
Instructs Skype for Business Server to auto-generate a SIP address for the new meeting room.
In order to have Skype for Business Server auto-generate the SIP address, you must include the SipAddressType parameter and use one of the following parameter values:

- FirstLastName: The SIP address is the user's first name and a period followed by the user's last name and the SIP domain.
For example, the user Room 14 would have a SIP address similar to this: Room.14@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

- EmailAddress: The user's email address (as defined in Active Directory) is used as the SIP address.UserPrincipalName. 
The user's UPN is used as the SIP address.

- SamAccountName: The SIP address is the user's SamAccountName (logon name) followed by the SIP domain.
For example, the user with the SamAccountName room14 will have a SIP address similar to this: room14@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

The SipAddressType parameter is not required if you use the SIPAddress parameter and explicitly assign the user a SIP address.

```yaml
Type: AddressType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipDomain
The SIP domain for the meeting room being enabled.
This parameter is required if you use the SIPAddressType parameter to have Skype for Business Server auto-generate a SIP address for the user and you based SIP addresses on the SamAccountName or the user's first name and last name.
This parameter is not required if you base SIP addresses on the user's email address or UPN; that's because the domain name is already included in those attribute values.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

### String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser
The Enable-CsMeetingRoom cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom


## NOTES


## RELATED LINKS

[Disable-CsMeetingRoom](Disable-CsMeetingRoom.md)

[Get-CsMeetingRoom](Get-CsMeetingRoom.md)

[Move-CsMeetingRoom](Move-CsMeetingRoom.md)

[Set-CsMeetingRoom](Set-CsMeetingRoom.md)
