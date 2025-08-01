---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csuser
schema: 2.0.0
title: Set-CsUser
---

# Set-CsUser

## SYNOPSIS
Modifies Skype for Business properties for an existing user account.
Properties can be modified only for accounts that have been enabled for use with Skype for Business.
This cmdlet was introduced in Lync Server 2010.

**Note**: Using this cmdlet for Microsoft Teams users in commercial and GCC cloud instances has been deprecated. Use the new [Set-CsPhoneNumberAssignment](/powershell/module/teams/set-csphonenumberassignment) and [Remove-CsPhoneNumberAssignment](/powershell/module/teams/remove-csphonenumberassignment) cmdlets instead.

## SYNTAX

```
Set-CsUser [-DomainController <Fqdn>] [-Identity] <UserIdParameter> [-PassThru] [-WhatIf] [-Confirm]
 [-OnPremLineURI <String>] [-LineServerURI <String>] [-AudioVideoDisabled <Boolean>]
 [-RemoteCallControlTelephonyEnabled <Boolean>] [-PrivateLine <String>] [-AcpInfo <AcpInfo>]
 [-HostedVoiceMail <Boolean>] [-EnterpriseVoiceEnabled <Boolean>]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [-LineURI <String>] [-SipAddress <String>]
 [-Enabled <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsUser` cmdlet enables you to modify the Skype for Business related user account attributes that are stored in Active Directory Domain Services or modify a subset of Skype for Business online user attributes that are stored in Microsoft Entra ID.
For example, you can disable or re-enable a user for Skype for Business Server; enable or disable a user for audio/video (A/V) communications; or modify a user's private line and line URI numbers. For Skype for Business online enable or disable a user for enterprise voice, hosted voicemail, or modify the user's on premise line uri.
The `Set-CsUser` cmdlet can be used only for users who have been enabled for Skype for Business.

The only attributes you can modify using the `Set-CsUser` cmdlet are attributes related to Skype for Business.
Other user account attributes, such as the user's job title or department, cannot be modified by using this cmdlet.
Keep in mind, however, that the Skype for Business attributes should only be modified by using the `Set-CsUser` cmdlet or the Skype for Business Server Control Panel.
You should not attempt to manually configure these attributes.

## EXAMPLES

### Example 1
```powershell
Set-CsUser -Identity "Pilar Ackerman" -EnterpriseVoiceEnabled $True
```

In Example 1, the `Set-CsUser` cmdlet is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to enable Enterprise Voice, the Microsoft implementation of VoIP.
This task is carried out by adding the EnterpriseVoiceEnabled parameter, and then setting the parameter value to $True.


### Example 2
```powershell
Get-CsUser -LdapFilter "Department=Finance" | Set-CsUser -EnterpriseVoiceEnabled $True
```

In Example 2, all the users in the Finance department have their accounts enabled for Enterprise Voice.
In this command, the `Get-CsUser` cmdlet and the LdapFilter parameter are first used to return a collection of all the users who work in the Finance department.
That information is then piped to the `Set-CsUser` cmdlet, which enables Enterprise Voice for each account in the collection.

### Example 3
```powershell
Set-CsUser -Identity "Pilar Ackerman" -LineUri "tel:+123456789"
```

In Example 3, the `Set-CsUser` cmdlet is used to modify the user account with the Identity Pilar Ackerman.
In this case, the account is modified to set the phone number assigned to the user settings its LineUri property.

## PARAMETERS

### -AcpInfo

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to assign one or more third-party audio conferencing providers to a user.
However, it is recommended that you use the `Set-CsUserAcp` cmdlet to assign Audio conferencing providers.

```yaml
Type: AcpInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioVideoDisabled

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user is allowed to make audio/visual (A/V) calls by using Skype for Business.
If set to True, the user will largely be restricted to sending and receiving instant messages.

You cannot disable A/V communications if a user is currently enabled for remote call control, Enterprise Voice, and/or Internet Protocol private branch exchange (IP-PBX) soft phone routing.

**Note**: This parameter is not available for Teams Only tenants from version 3.0.0 onwards.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to specify a domain controller to connect to when modifying a user account.
If this parameter is not included then the cmdlet will use the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not the user has been enabled for Skype for Business Server.
If you set this value to False, the user will no longer be able to log on to Skype for Business Server; setting this value to True re-enables the user's logon privileges.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the user is enabled for Enterprise Voice and/or remote call control) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.
This differs from using the `Disable-CsUser` cmdlet to disable a user account.
When you run the `Disable-CsUser` cmdlet, all the Skype for Business Server data associated with that account is deleted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user has been enabled for Enterprise Voice, which is the Microsoft implementation of Voice over Internet Protocol (VoIP).
With Enterprise Voice, users can make telephone calls using the Internet rather than using the standard telephone network.

**Note**: Using this parameter for Microsoft Teams users in commercial and GCC cloud instances has been deprecated. Use the new [Set-CsPhoneNumberAssignment](/powershell/module/teams/set-csphonenumberassignment) cmdlet instead.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchivingPolicy

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedVoiceMail

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, enables a user's voice mail calls to be routed to a hosted version of Microsoft Exchange Server.
In addition, setting this option to True enables Skype for Business users to directly place a call to another user's voice mail.

**Note**: It is not required to set this parameter for Microsoft Teams users. Using this parameter has been deprecated for Microsoft Teams users in commercial and GCC cloud instances.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates the Identity of the user account to be modified.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity.
For example, the Identity "Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LineServerURI

> Applicable: Lync Server 2010, Lync Server 2013,  Skype for Business Server 2015, Skype for Business Server 2019

The URI of the remote call control telephone gateway assigned to the user.
The LineServerUri is the gateway URI, prefaced by "sip:".
For example: sip:rccgateway@litwareinc.com

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019, Microsoft Teams

Phone number to be assigned to the user in Skype for Business Server or Direct Routing phone number to be assigned to a Microsoft Teams user in GCC High and DoD cloud instances only.

The line Uniform Resource Identifier (URI) must be specified using the E.164 format and the "tel:" prefix, for example: tel:+14255551297.
Any extension number should be added to the end of the line URI, for example: tel:+14255551297;ext=51297.

It is important to note that Skype for Business Server treats tel:+14255551297 and tel:+14255551297;ext=51297 as two different numbers.
If you assign Ken Myer the line URI tel:+14255551297 and later try to assign Pilar Ackerman the line URI tel:+14255551297;ext=51297, that assignment will succeed; the number assigned to Pilar will not
be flagged as a duplicate number. This is due to the fact that, depending on your setup, those two numbers could actually be different. For example, in some organizations dialing 1-425-555-1297
routes your call to an Exchange Auto Attendant. Conversely, dialing just the extension (51297) or using Skype for Business to dial the number 1-425-555-1297 extension 51297 will route your call
directly to the user.

For Direct Routing phone numbers in GCC High and DoD cloud instances, assigning a base phone number to a user or resource account is not supported if you already have other users or resource accounts assigned phone numbers with the same base phone number and extensions or vice versa. For instance, if you have a user with the assigned phone number +14255551200;ext=123 you can't assign the phone number +14255551200 to another user or resource account or if you have a user or resource account with the assigned phone number +14255551200 you can't assign the phone number +14255551200;ext=123 to another user or resource account. Assigning phone numbers with the same base number but different extensions to users and resource accounts is supported. For instance, you can have a user with +14255551200;ext=123 and another user with +14255551200;ext=124.

Note: Extension should be part of the E164 Number. For example if you have 5 digit Extensions then the last 5 digits of the E164 Number should always match the 5 digit extension tel:+14255551297;ext=51297

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremLineURI

> Applicable: Skype for Business Online

Specifies the phone number assigned to the user if no number is assigned to that user in the Skype for Business hybrid environment.
The line Uniform Resource Identifier (URI) must be specified using the E.164 format and use the "tel:" prefix.
For example: tel:+14255551297.
Any extension number should be added to the end of the line URI, for example: tel:+14255551297;ext=51297.

Note that Skype for Business treats tel:+14255551297 and tel:+14255551297;ext=51297 as two different numbers.
If you assign Ken Myer the line URI tel:+14255551297 and later try to assign Pilar Ackerman the line URI tel:+14255551297;ext=51297, that assignment will succeed.
Depending on your setup, those two numbers could actually be different.
For example, in some organizations dialing 1-425-555-1297 routes your call to an Exchange Auto Attendant.
Conversely, dialing just the extension (51297) or using Skype for Business to dial the number 1-425-555-1297 extension 51297 will route your call directly to the user.

**Note**: Using this parameter for Microsoft Teams users in commercial and GCC cloud instances has been deprecated. Use the new [Set-CsPhoneNumberAssignment](/powershell/module/teams/set-csphonenumberassignment) cmdlet instead.

**Note**: Using this parameter for Microsoft Teams users in GCC High and DoD cloud instances has been deprecated. Use the -LineURI parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to pass a user object through the pipeline that represents the user whose account is being modified.
By default, the `Set-CsUser` cmdlet does not pass objects through the pipeline.

**Note**: This parameter is not available for Teams Only tenants from version 3.0.0 onwards.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateLine

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Phone number for the user's private telephone line.
A private line is a phone number that is not published in Active Directory Domain Services and, as a result, is not readily available to other people.
In addition, this private line bypasses most in-bound call routing rules; for example, a call to a private line will not be forwarded to a person's delegates.
Private lines are often used for personal phone calls or for business calls that should be kept separate from other team members.

The private line value should be specified using the E.164 format, and be prefixed by the "tel:" prefix.
For example: tel:+14255551297.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCallControlTelephonyEnabled

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier (similar to an email address) that allows the user to communicate using SIP devices such as Skype for Business.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example: `-SipAddress sip:kenmyer@litwareinc.com`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Stringor Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The `Set-CsUser` cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

### None
The `Set-CsUser` cmdlet does not return any objects.

## NOTES

## RELATED LINKS

[Disable-CsUser](Disable-CsUser.md)

[Enable-CsUser](Enable-CsUser.md)

[Get-CsUser](Get-CsUser.md)

[Move-CsUser](Move-CsUser.md)

