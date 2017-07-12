---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsUser

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies Microsoft Lync Server 2010 properties for an existing user account.
Properties can be modified only for accounts that have been enabled for use with Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Modifies Lync Server properties for an existing user account.
Properties can be modified only for accounts that have been enabled for use with Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Modifies Skype for Business Online properties for an existing user account.

**Below Content Applies To:** Skype for Business Server 2015

Modifies Skype for Business Server 2015 properties for an existing user account.
Properties can be modified only for accounts that have been enabled for use with Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsUser [-Identity] <UserIdParameter> [-AudioVideoDisabled <Boolean>] [-Enabled <Boolean>]
 [-DomainController <Fqdn>] [-EnterpriseVoiceEnabled <Boolean>] [-HostedVoiceMail <Boolean>]
 [-LineURI <String>] [-LineServerURI <String>] [-PrivateLine <String>]
 [-RemoteCallControlTelephonyEnabled <Boolean>] [-SipAddress <String>] [-PassThru] [-WhatIf] [-Confirm]
 [-AcpInfo <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[Microsoft.Rtc.Management.ADConnect.Collections.AcpInfo]>]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [-OnPremLineURI <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Set-CsUser enables you to modify the Lync Server-related user account attributes that are stored in Active Directory Domain Services (AD DS).
For example, you can disable or re-enable a user for Lync Server; enable or disable a user for audio/video (A/V) communications; or modify a user's private line and line URI numbers.
Set-CsUser can be used only for users who have been enabled for Lync Server.

The only attributes you can modify using Set-CsUser are attributes related to Lync Server.
Other user account attributes, such as the user's job title or department, cannot be modified by using this cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUser\b"}

**Below Content Applies To:** Skype for Business Online

The Set-CsUser cmdlet enables you to modify property values for one or more Skype for Business Online user accounts; for example, you can disable or re-enable a user for Skype for Business Online.
However, the only attributes you can modify using the Set-CsUser cmdlet are attributes related to Skype for Business Online.
Other user account attributes, such as the user's job title or department, cannot be modified by using this cmdlet.

**Below Content Applies To:** Skype for Business Server 2015

The Set-CsUser cmdlet enables you to modify the Skype for Business Server 2015-related user account attributes that are stored in Active Directory Domain Services.
For example, you can disable or re-enable a user for Skype for Business Server 2015; enable or disable a user for audio/video (A/V) communications; or modify a user's private line and line URI numbers.
The Set-CsUser cmdlet can be used only for users who have been enabled for Skype for Business Server 2015.

The only attributes you can modify using the Set-CsUser cmdlet are attributes related to Skype for Business Server 2015.
Other user account attributes, such as the user's job title or department, cannot be modified by using this cmdlet.
Keep in mind, however, that the Skype for Business Server 2015 attributes should only be modified by using the Set-CsUser cmdlet or the Skype for Business Server Control Panel.
You should not attempt to manually configure these attributes.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsUser -Identity "Pilar Ackerman" -EnterpriseVoiceEnabled $True
```

In Example 1, Set-CsUser is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to enable Enterprise Voice, the Microsoft implementation of VoIP.
This task is carried out by adding the EnterpriseVoiceEnabled parameter, and then setting the parameter value to $True.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Set-CsUser is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to enable Enterprise Voice, the Microsoft implementation of VoIP.
This task is carried out by adding the EnterpriseVoiceEnabled parameter, and then setting the parameter value to $True.

Set-CsUser -Identity "Pilar Ackerman" -EnterpriseVoiceEnabled $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Online)
```

```

In Example 1, the Set-CsUser cmdlet is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to enable Enterprise Voice, the Microsoft implementation of VoIP.
This task is carried out by adding the EnterpriseVoiceEnabled parameter, and then setting the parameter value to $True.

Set-CsUser -Identity "Pilar Ackerman" -EnterpriseVoiceEnabled $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Set-CsUser cmdlet is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to enable Enterprise Voice, the Microsoft implementation of VoIP.
This task is carried out by adding the EnterpriseVoiceEnabled parameter, and then setting the parameter value to $True.

Set-CsUser -Identity "Pilar Ackerman" -EnterpriseVoiceEnabled $True

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -LdapFilter "Department=Finance" | Set-CsUser -EnterpriseVoiceEnabled $True
```

In Example 2, all the users in the Finance department have their accounts enabled for Enterprise Voice.
In this command, the Get-CsUser cmdlet and the LDAPFilter are first used to return a collection of all the users who work in the Finance department.
That information is then piped to Set-CsUser, which enables Enterprise Voice for each account in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the users in the Finance department have their accounts enabled for Enterprise Voice.
In this command, the Get-CsUser cmdlet and the LdapFilter parameter are first used to return a collection of all the users who work in the Finance department.
That information is then piped to Set-CsUser, which enables Enterprise Voice for each account in the collection.

Get-CsUser -LdapFilter "Department=Finance" | Set-CsUser -EnterpriseVoiceEnabled $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Online)
```

```

In Example 2, all the users in the Finance department have their accounts enabled for Enterprise Voice.
In this command, the Get-CsOnlineUser cmdlet and the LdapFilter parameter are first used to return a collection of all the users who work in the Finance department.
That information is then piped to the Set-CsUser cmdlet, which enables Enterprise Voice for each account in the collection.

Get-CsOnlineUser -LdapFilter "Department=Finance" | Set-CsUser -EnterpriseVoiceEnabled $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the users in the Finance department have their accounts enabled for Enterprise Voice.
In this command, the Get-CsUser cmdlet and the LdapFilter parameter are first used to return a collection of all the users who work in the Finance department.
That information is then piped to the Set-CsUser cmdlet, which enables Enterprise Voice for each account in the collection.

Get-CsUser -LdapFilter "Department=Finance" | Set-CsUser -EnterpriseVoiceEnabled $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Identity of the user account to be modified.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".



**Below Content Applies To:** Skype for Business Online

Indicates the Identity of the user account to be modified.
User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity of the user account to be modified.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity.
For example, the Identity "Smith" returns all the users who have a display name that ends with the string value " Smith".



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AudioVideoDisabled
**Below Content Applies To:** Lync Server 2010

Indicates whether the user is allowed to make audio/visual (A/V) calls by using Lync 2010.
If set to True, the user will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a user is currently enabled for remote call control, Enterprise Voice, and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.



**Below Content Applies To:** Lync Server 2013

Indicates whether the user is allowed to make audio/visual (A/V) calls by using Lync.
If set to True, the user will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a user is currently enabled for remote call control, Enterprise Voice, and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.



**Below Content Applies To:** Skype for Business Online

Indicates whether the user is allowed to make audio/visual (A/V) calls by using Skype for Business client.
If set to True, the user will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a user is currently enabled for remote call control, Enterprise Voice, and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether the user is allowed to make audio/visual (A/V) calls by using Skype for Business.
If set to True, the user will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a user is currently enabled for remote call control, Enterprise Voice, and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates whether or not the user has been enabled for Lync Server.
If you set this value to False, the user will no longer be able to log on to Lync Server; setting this value to True re-enables the user's logon privileges.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the user is enabled for Enterprise Voice and/or remote call control) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.
This differs from using the cmdlet Disable-CsUser to disable a user account.
When you run Disable-CsUser, all the Lync Server data associated with that account is deleted.



**Below Content Applies To:** Skype for Business Online

Indicates whether or not the user has been enabled for Skype for Business Online.
If you set this value to False, the user will no longer be able to log on to Skype for Business Online; setting this value to True re-enables the user's logon privileges.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the user is enabled for Enterprise Voice and/or remote call control) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether or not the user has been enabled for Skype for Business Server 2015.
If you set this value to False, the user will no longer be able to log on to Skype for Business Server 2015; setting this value to True re-enables the user's logon privileges.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the user is enabled for Enterprise Voice and/or remote call control) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.
This differs from using the Disable-CsUser cmdlet to disable a user account.
When you run the Disable-CsUser cmdlet, all the Skype for Business Server 2015 data associated with that account is deleted.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to specify a domain controller to connect to when modifying a user account.
If this parameter is not included then the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Online

This parameter is not used with Skype for Business Online.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether the user has been enabled for Enterprise Voice, which is the Microsoft implementation of Voice over Internet Protocol (VoIP).
With Enterprise Voice, users can make telephone calls using the Internet rather than using the standard telephone network.



**Below Content Applies To:** Skype for Business Online

Indicates whether the user has been enabled for Enterprise Voice, the Microsoft implementation of Voice over Internet Protocol (VoIP).
With Enterprise Voice, users can make telephone calls using the Internet rather than using the standard telephone network.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedVoiceMail
**Below Content Applies To:** Lync Server 2010

When set to True, enables a user's voice mail calls to be routed to a hosted version of Microsoft Exchange Server.
In addition, setting this option to True enables Lync 2010 users to directly place a call to another user's voice mail.



**Below Content Applies To:** Lync Server 2013

When set to True, enables a user's voice mail calls to be routed to a hosted version of Microsoft Exchange Server.
In addition, setting this option to True enables Lync users to directly place a call to another user's voice mail.



**Below Content Applies To:** Skype for Business Online

When set to True, enables a user's voice mail calls to be routed to a hosted version of Exchange.
In addition, setting this option to True enables users to directly place a call to another user's voice mail.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, enables a user's voice mail calls to be routed to a hosted version of Microsoft Exchange Server.
In addition, setting this option to True enables Skype for Business users to directly place a call to another user's voice mail.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI
**Below Content Applies To:** Lync Server 2010

Phone number assigned to the user.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: TEL:+14255551297;ext=51297.



**Below Content Applies To:** Lync Server 2013

Phone number assigned to the user.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: TEL:+14255551297;ext=51297.

It is important to note that Lync Server treats TEL:+14255551297 and TEL:+14255551297;ext=51297 as two different numbers.
If you assign Ken Myer the line URI TEL:+14255551297 and later try to assign Pilar Ackerman the line URI TEL:+14255551297;ext=51297, that assignment will succeed; the number assigned to Pilar will not be flagged as a duplicate number.
This is due to the fact that, depending on your setup, those two numbers could actually be different.
For example, in some organizations dialing 1-425-555-1297 routes your call to an Exchange Auto Attendant.
Conversely, dialing just the extension (51297) or using Lync to dial the number 1-425-555-1297 extension 51297 will route your call directly to the user.



**Below Content Applies To:** Skype for Business Online

This parameter is not used in Skype for Business Online



**Below Content Applies To:** Skype for Business Server 2015

Phone number assigned to the user.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: TEL:+14255551297;ext=51297.

It is important to note that Skype for Business Server 2015 treats TEL:+14255551297 and TEL:+14255551297;ext=51297 as two different numbers.
If you assign Ken Myer the line URI TEL:+14255551297 and later try to assign Pilar Ackerman the line URI TEL:+14255551297;ext=51297, that assignment will succeed; the number assigned to Pilar will not be flagged as a duplicate number.
This is due to the fact that, depending on your setup, those two numbers could actually be different.
For example, in some organizations dialing 1-425-555-1297 routes your call to an Exchange Auto Attendant.
Conversely, dialing just the extension (51297) or using Skype for Business to dial the number 1-425-555-1297 extension 51297 will route your call directly to the user.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineServerURI
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The URI of the remote call control telephone gateway assigned to the user.
The LineServerUri is the gateway URI, prefaced by "sip:".
For example: sip:rccgateway@litwareinc.com



**Below Content Applies To:** Skype for Business Online

This parameter is not used in Skype for Business Online



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateLine
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Phone number for the user's private telephone line.
A private line is a phone number that is not published in Active Directory Domain Services (AD DS) and, as a result, is not readily available to other people.
In addition, this private line bypasses most in-bound call routing rules; for example, a call to a private line will not be forwarded to a person's delegates.
Private lines are often used for personal phone calls or for business calls that should be kept separate from other team members.

The private line value should be specified using the E.164 format, and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.



**Below Content Applies To:** Skype for Business Online

This parameter is not used in Skype for Business Online



**Below Content Applies To:** Skype for Business Server 2015

Phone number for the user's private telephone line.
A private line is a phone number that is not published in Active Directory Domain Services and, as a result, is not readily available to other people.
In addition, this private line bypasses most in-bound call routing rules; for example, a call to a private line will not be forwarded to a person's delegates.
Private lines are often used for personal phone calls or for business calls that should be kept separate from other team members.

The private line value should be specified using the E.164 format, and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCallControlTelephonyEnabled
**Below Content Applies To:** Lync Server 2010

Indicates whether the user has been enabled for remote call control telephony.
When enabled for remote call control, a user can employ Lync Server to answer phone calls made to his or her desk phone.
Phone calls can also be made using Lync 2010.
These calls all rely on the standard telephone network, also known as the public switched telephone network (PSTN).
To make and receive phone calls over the Internet, the user must be enabled for Enterprise Voice.
For details, see the parameter EnterpriseVoiceEnabled.

To be enabled for remote call control, a user must have both a LineUri and a LineServerUri.



**Below Content Applies To:** Lync Server 2013

Indicates whether the user has been enabled for remote call control telephony.
When enabled for remote call control, a user can employ Lync Server to answer phone calls made to his or her desk phone.
Phone calls can also be made using Lync.
These calls all rely on the standard telephone network, also known as the public switched telephone network (PSTN).
To make and receive phone calls over the Internet, the user must be enabled for Enterprise Voice.
For details, see the parameter EnterpriseVoiceEnabled.

To be enabled for remote call control, a user must have both a LineUri and a LineServerUri.



**Below Content Applies To:** Skype for Business Online

This parameter is not used in Lync Online.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether the user has been enabled for remote call control telephony.
When enabled for remote call control, a user can employ Skype for Business to answer phone calls made to his or her desk phone.
Phone calls can also be made using Skype for Business.
These calls all rely on the standard telephone network, also known as the public switched telephone network (PSTN).
To make and receive phone calls over the Internet, the user must be enabled for Enterprise Voice.
For details, see the parameter EnterpriseVoiceEnabled.

To be enabled for remote call control, a user must have both a LineUri and a LineServerUri.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
**Below Content Applies To:** Lync Server 2010

Unique identifier (similar to an email address) that allows the user to communicate using SIP devices such as Lync 2010.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example: -SipAddress sip:kenmyer@litwareinc.com.



**Below Content Applies To:** Lync Server 2013

Unique identifier (similar to an email address) that allows the user to communicate using SIP devices such as Lync.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example: -SipAddress sip:kenmyer@litwareinc.com.



**Below Content Applies To:** Skype for Business Online

Unique identifier (similar to an email address) that allows the user to communicate using SIP devices such as Skype for Business client.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example: -SipAddress sip:kenmyer@litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier (similar to an email address) that allows the user to communicate using SIP devices such as Skype for Business.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example: -SipAddress sip:kenmyer@litwareinc.com.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user whose account is being modified.
By default, the Set-CsUser cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcpInfo
**Below Content Applies To:** Lync Server 2010

Enables you to assign one or more third-party audio conferencing providers to a user.
However, it is recommended that you use the  Set-UserAcp cmdlet to assign Audio conferencing providers.



**Below Content Applies To:** Lync Server 2013, Skype for Business Online

Enables you to assign one or more third-party audio conferencing providers to a user.
However, it is recommended that you use the Set-UserAcp cmdlet to assign Audio conferencing providers.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to assign one or more third-party audio conferencing providers to a user.
However, it is recommended that you use the Set-CsUserAcp cmdlet to assign Audio conferencing providers.



```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[Microsoft.Rtc.Management.ADConnect.Collections.AcpInfo]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchivingPolicy
**Below Content Applies To:** Lync Server 2013, Skype for Business Online

Indicates where the user's instant messaging sessions are archived.
Allowed values are:

* Uninitialized
* UseLyncArchivingPolicy
* ArchivingToExchange
* NoArchiving



**Below Content Applies To:** Skype for Business Server 2015

Indicates where the user's instant messaging sessions are archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

ArchivingToExchange

NoArchiving



```yaml
Type: ExchangeArchivingPolicyOptionsEnum
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremLineURI
Specifies the phone number assigned to the user if no number is assigned to that user in the Skype for Business hybrid environment.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: TEL:+14255551297;ext=51297.

Note that Skype for Business treats TEL:+14255551297 and TEL:+14255551297;ext=51297 as two different numbers.
If you assign Ken Myer the line URI TEL:+14255551297 and later try to assign Pilar Ackerman the line URI TEL:+14255551297;ext=51297, that assignment will succeed.
Depending on your setup, those two numbers could actually be different.
For example, in some organizations dialing 1-425-555-1297 routes your call to an Exchange Auto Attendant.
Conversely, dialing just the extension (51297) or using Skype for Business to dial the number 1-425-555-1297 extension 51297 will route your call directly to the user.

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

###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Set-CsUser accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Set-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server 2015.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###  
Set-CsUser does not return any objects.

###  
The Set-CsUser cmdlet does not return any objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6c452df7-75c9-4d94-86bc-4990d718ffe9(OCS.14).aspx)

[Disable-CsUser]()

[Enable-CsUser]()

[Get-CsUser]()

[Move-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/6c452df7-75c9-4d94-86bc-4990d718ffe9(OCS.15).aspx)

[Get-CsOnlineUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/df5a97b1-4d09-41cb-8ff3-7d0824a74f1b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6c452df7-75c9-4d94-86bc-4990d718ffe9(OCS.16).aspx)

