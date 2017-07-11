---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUserAcp

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the audio conferencing providers assigned to a user or group of users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the audio conferencing providers assigned to a user or group of users.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsUserAcp \[\[-Identity\] \<UserIdParameter\>\] \[-Filter \<string\>\] \[-LdapFilter \<string\>\] \[-Credential \<pscredential\>\] \[-ResultSize \<Unlimited\[uint32\]\>\] \[\<CommonParameters\>\]



## SYNTAX

```
Get-CsUserAcp [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-Filter <String>]
 [-LdapFilter <String>] [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

An audio conferencing provider is a third-party company that provides organizations with conferencing services.
Among other things, audio conferencing providers provide a way for users located off site, and not connected to the corporate network or the Internet, to participate in the audio portion of a conference or meeting.
Audio conferencing providers often provide high-end services such as live translation, transcription, and live per-conference operator assistance.

Microsoft Lync Server 2010 does not allow for complete integration with audio conferencing providers.
The CsUserAcp cmdlets enable administrators to set a phone number and passcode, and to configure other information that can be used for audio conferencing provider integration any time a user schedules a meeting.
However, because these cmdlets were not designed for the on-premises version of Lync Server (instead, they are primarily intended for use with Microsoft Lync Online 2010) no additional audio conferencing provider integration is provided beyond assigning property values.

The Get-CsUserAcp cmdlet enables you to return information about the audio conferencing providers that have been assigned to a user or a group of users.
To return audio conferencing provider information for a single user, simply include the Identity parameter followed by the Identity of the user whose information is to be returned.
To return information for multiple users, you can use either the LdapFilter or the Filter parameters.
The LdapFilter parameter enables you to use generic Active Directory attributes such as Department or Title when specifying user account information; for example, the parameter value "Title=Accountant" restricts the returned information to users who have the job title Accountant.
The Filter parameter enables you to use Microsoft Lync Server 2010-specific attributes (for example, VoicePolicy or EnterpriseVoiceEnabled) to filter the returned data.
For example, the filter value {EnterpriseVoiceEnabled -eq $True} limits the user accounts returned by Get-CsUserAcp to users who have been enabled for Enterprise Voice.

Alternatively, you can call Get-CsUserAcp without any parameters in order to return audio conferencing provider information for all your users.
Note that Get-CsUserAcp returns audio conferencing provider information for all your users, including users who have not been enabled for Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserAcp cmdlet locally: RTCUniversalUserAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUserAcp"}

**Below Content Applies To:** Lync Server 2013

An audio conferencing provider is a third-party company that provides organizations with conferencing services.
Among other things, audio conferencing providers provide a way for users located off site, and not connected to the corporate network or the Internet, to participate in the audio portion of a conference or meeting.
Audio conferencing providers often provide high-end services such as live translation, transcription, and live per-conference operator assistance.

Lync Server does not allow for complete integration with audio conferencing providers.
The CsUserAcp cmdlets enable administrators to set a phone number and passcode, and to configure other information that can be used for audio conferencing provider integration any time a user schedules a meeting.
However, because these cmdlets were not designed for the on-premises version of Lync Server (instead, they are primarily intended for use with Lync Online) no additional audio conferencing provider integration is provided beyond assigning property values.

The Get-CsUserAcp cmdlet enables you to return information about the audio conferencing providers that have been assigned to a user or a group of users.
To return audio conferencing provider information for a single user, simply include the Identity parameter followed by the Identity of the user whose information is to be returned.
To return information for multiple users, you can use either the LdapFilter or the Filter parameters.
The LdapFilter parameter enables you to use generic Active Directory attributes such as Department or Title when specifying user account information; for example, the parameter value "Title=Accountant" restricts the returned information to users who have the job title Accountant.
The Filter parameter enables you to use Lync Server-specific attributes (for example, VoicePolicy or EnterpriseVoiceEnabled) to filter the returned data.
For example, the filter value {EnterpriseVoiceEnabled -eq $True} limits the user accounts returned by Get-CsUserAcp to users who have been enabled for Enterprise Voice.

Alternatively, you can call Get-CsUserAcp without any parameters in order to return audio conferencing provider information for all your users.
Note that Get-CsUserAcp returns audio conferencing provider information for all your users, including users who have not been enabled for Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserAcp cmdlet locally: RTCUniversalUserAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUserAcp"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

An audio conferencing provider is a third-party company that provides organizations with conferencing services.
Among other things, audio conferencing providers provide a way for users located off site, and not connected to the corporate network or the Internet, to participate in the audio portion of a conference or meeting.
Audio conferencing providers often provide high-end services such as live translation, transcription, and live per-conference operator assistance.

Skype for Business Server 2015 does not allow for complete integration with audio conferencing providers.
The CsUserAcp cmdlets enable administrators to set a phone number and passcode, and to configure other information that can be used for audio conferencing provider integration any time a user schedules a meeting.
However, because these cmdlets were not designed for the on-premises version of Skype for Business Server 2015 (instead, they are primarily intended for use with Skype for Business Online) no additional audio conferencing provider integration is provided beyond assigning property values.

The Get-CsUserAcp cmdlet enables you to return information about the audio conferencing providers that have been assigned to a user or a group of users.
To return audio conferencing provider information for a single user, simply include the Identity parameter followed by the Identity of the user whose information is to be returned.
To return information for multiple users, you can use either the LdapFilter or the Filter parameters.
The LdapFilter parameter enables you to use generic Active Directory attributes such as Department or Title when specifying user account information; for example, the parameter value "Title=Accountant" restricts the returned information to users who have the job title Accountant.
The Filter parameter enables you to use Skype for Business Server 2015-specific attributes (for example, VoicePolicy or EnterpriseVoiceEnabled) to filter the returned data.
For example, the filter value {EnterpriseVoiceEnabled -eq $True} limits the user accounts returned by the Get-CsUserAcp cmdlet to users who have been enabled for Enterprise Voice.

Alternatively, you can call the Get-CsUserAcp cmdlet without any parameters in order to return audio conferencing provider information for all your users.
Note that the Get-CsUserAcp cmdlet returns audio conferencing provider information for all your users, including users who have not been enabled for Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsUserAcp
```

The command shown in Example 1 returns audio conferencing provider information for all the users in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns audio conferencing provider information for all the users in your organization.

Get-CsUserAcp

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns audio conferencing provider information for all the users in your organization.

Get-CsUserAcp

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsUserAcp -Identity "Ken Myer"
```

The preceding command returns audio conferencing provider information for a single user: the user with the Identity Ken Myer.
In this case, the identity is specified by using the user's Active Directory display name.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns audio conferencing provider information for a single user: the user with the Identity Ken Myer.
In this case, the identity is specified by using the user's Active Directory display name.

Get-CsUserAcp -Identity "Ken Myer"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns audio conferencing provider information for a single user: the user with the Identity Ken Myer.
In this case, the identity is specified by using the user's Active Directory display name.

Get-CsUserAcp -Identity "Ken Myer"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsUserAcp -Filter {AcpInfo -ne $Null}
```

Example 3 returns information for all the users who have been assigned at least one audio conferencing provider.
To do this, the Filter parameter is included along with the filter value {AcpInfo -ne $Null}; this filter value limits the returned data to users who have an AcpInfo property value that is not equal to a null value.
To return information about users who have not been assigned an audio conferencing provider use this filter value:

{AcpInfo -eq $Null}

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information for all the users who have been assigned at least one audio conferencing provider.
To do this, the Filter parameter is included along with the filter value {AcpInfo -ne $Null}; this filter value limits the returned data to users who have an AcpInfo property value that is not equal to a null value.
To return information about users who have not been assigned an audio conferencing provider use this filter value:

{AcpInfo -eq $Null}

Get-CsUserAcp -Filter {AcpInfo -ne $Null}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information for all the users who have been assigned at least one audio conferencing provider.
To do this, the Filter parameter is included along with the filter value {AcpInfo -ne $Null}; this filter value limits the returned data to users who have an AcpInfo property value that is not equal to a null value.
To return information about users who have not been assigned an audio conferencing provider use this filter value:

{AcpInfo -eq $Null}

Get-CsUserAcp -Filter {AcpInfo -ne $Null}

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsUserAcp | Where-Object {$_.AcpInfo -match "Fabrikam ACP"
```

The preceding command returns audio conferencing provider information for any user who has been assigned the audio conferencing provider Fabrikam ACP.
To carry out this task the command first uses Get-CsUserAcp without any parameters in order to return audio conferencing provider information for all the users in your organization. 
This information is then piped to the Where-Object cmdlet, which picks out any user whose AcpInfo property includes (-match) the string value "Fabrikam ACP".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns audio conferencing provider information for any user who has been assigned the audio conferencing provider Fabrikam ACP.
To carry out this task the command first uses Get-CsUserAcp without any parameters in order to return audio conferencing provider information for all the users in your organization.
This information is then piped to the Where-Object cmdlet, which picks out any user whose AcpInfo property includes (-match) the string value "Fabrikam ACP".

Get-CsUserAcp | Where-Object {$_.AcpInfo -match "Fabrikam ACP"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns audio conferencing provider information for any user who has been assigned the audio conferencing provider Fabrikam ACP.
To carry out this task the command first uses the Get-CsUserAcp cmdlet without any parameters in order to return audio conferencing provider information for all the users in your organization.
This information is then piped to the Where-Object cmdlet, which picks out any user whose AcpInfo property includes (-match) the string value "Fabrikam ACP".

Get-CsUserAcp | Where-Object {$_.AcpInfo -match "Fabrikam ACP"}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsUserAcp -Identity "Ken Myer" | Select-Object -ExpandProperty AcpInfo
```

In Example 5, detailed information is displayed about the audio conferencing providers assigned to the user Ken Myer.
To do this, Get-CsUserAcp is first called in order to return audio conferencing provider information for Ken Myer.
This data is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the AcpInfo property.
When a property value is expanded, that means that all the information stored in that value is displayed in easy-to-read format.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, detailed information is displayed about the audio conferencing providers assigned to the user Ken Myer.
To do this, Get-CsUserAcp is first called in order to return audio conferencing provider information for Ken Myer.
This data is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the AcpInfo property.
When a property value is expanded, that means that all the information stored in that value is displayed in easy-to-read format.

Get-CsUserAcp -Identity "Ken Myer" | Select-Object -ExpandProperty AcpInfo

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, detailed information is displayed about the audio conferencing providers assigned to the user Ken Myer.
To do this, the Get-CsUserAcp cmdlet is first called in order to return audio conferencing provider information for Ken Myer.
This data is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the AcpInfo property.
When a property value is expanded, that means that all the information stored in that value is displayed in easy-to-read format.

Get-CsUserAcp -Identity "Ken Myer" | Select-Object -ExpandProperty AcpInfo

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Indicates the Identity of the user account to be retrieved.
You can specify a user's identity using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory Domain Services (AD DS)display name (for example, Ken Myer).
You can also references a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".



**Below Content Applies To:** Lync Server 2013

Indicates the Identity of the user account to be retrieved.
You can specify a user's identity using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory Domain Services (AD DS) display name (for example, Ken Myer).
You can also references a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity of the user account to be retrieved.
You can specify a user's identity using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory Domain Services display name (for example, Ken Myer).
You can also references a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to run the Get-CsUserAcp cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet Help topic.



**Below Content Applies To:** Skype for Business Online

{{Fill Credential Description}}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to run the Get-CsUserAcp cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2010

Enables you to limit the returned data by filtering on attributes specific to Lync Server.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory Domain Services (AD DS) attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell  variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



**Below Content Applies To:** Lync Server 2013

Enables you to limit the returned data by filtering on attributes specific to Lync Server.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory Domain Services (AD DS) attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server 2015.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory Domain Services attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



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

### -LdapFilter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Lync Server).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



**Below Content Applies To:** Skype for Business Online

{{Fill LdapFilter Description}}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



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

### -ResultSize
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to limit the number of records returned by a command.
For example, to return seven users (regardless of how many users are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which 7 users will be returned.
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.



**Below Content Applies To:** Skype for Business Online

{{Fill ResultSize Description}}



```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
String.
Get-CsUserAcp accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server 2010.

###  
String.
Get-CsUserAcp accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server.

### Microsoft.Rtc.Management.AD.UserIdParameter

###  
String.
The Get-CsUserAcp cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server 2015.

## OUTPUTS

###  
Get-CsUserAcp returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUserAcp object.

### System.Object

###  
The Get-CsUserAcp cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUserAcp object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/de65eafe-e306-4ada-8509-9688e81491f9(OCS.14).aspx)

[Remove-CsUserAcp]()

[Set-CsUserAcp]()

[Online Version](http://technet.microsoft.com/EN-US/library/de65eafe-e306-4ada-8509-9688e81491f9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/de65eafe-e306-4ada-8509-9688e81491f9(OCS.16).aspx)

