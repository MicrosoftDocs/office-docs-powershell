---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsUser

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables one or more users for Microsoft Lync Server 2010.
Users cannot use Microsoft Lync 2010 or other Lync Server 2010 clients until their user accounts have been enabled for Lync Server.

**Below Content Applies To:** Lync Server 2013

Enables one or more users for Lync Server.
Users cannot use Microsoft Lync 2013 Preview or other Lync Server clients until their user accounts have been enabled for Lync Server.

**Below Content Applies To:** Skype for Business Server 2015

Enables one or more users for Skype for Business Server 2015.
Users cannot use Skype for Business or other Skype for Business Server 2015 clients until their user accounts have been enabled for Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Enable-CsUser [-Identity] <UserIdParameter> [-RegistrarPool <Fqdn>] [-SipAddressType <AddressType>]
 [-SipDomain <Fqdn>] [-SipAddress <String>] [-HostingProviderProxyFqdn <Fqdn>] [-ProxyPool <Fqdn>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Before a user can log on to Lync Server, that user must meet two requirements: he or she must have a valid Active Directory account, and that account must be enabled for Lync Server.
One way to enable a user account for Lync Server  is to use the Enable-CsUser cmdlet.
To use this cmdlet to enable an account for Lync Server, you must: 1) Select the account (or accounts) to be enabled; 2) Select a Registrar pool for the account; and 3) Assign the account a SIP address.
Lync Server gives administrators the option of assigning the user a specific SIP address or having Lync Server create a SIP address for you.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Enable-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Enable-CsUser"}

**Below Content Applies To:** Lync Server 2013

Before a user can log on to Lync Server, that user must meet two requirements: he or she must have a valid Active Directory account, and that account must be enabled for Lync Server.
One way to enable a user account for Lync Server is to use the Enable-CsUser cmdlet.
To use this cmdlet to enable an account for Lync Server, you must: 1) Select the account (or accounts) to be enabled; 2) Select a Registrar pool for the account; and 3) Assign the account a SIP address.
Lync Server gives administrators the option of assigning the user a specific SIP address or having Lync Server create a SIP address for you.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Enable-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Enable-CsUser"}

**Below Content Applies To:** Skype for Business Server 2015

Before a user can log on to Skype for Business Server 2015, that user must meet two requirements: he or she must have a valid Active Directory account, and that account must be enabled for Skype for Business Server 2015.
One way to enable a user account for Skype for Business Server 2015 is to use the Enable-CsUser cmdlet.
To use this cmdlet to enable an account for Skype for Business Server 2015, you must: 1) Select the account (or accounts) to be enabled; 2) Select a Registrar pool for the account; and 3) Assign the account a SIP address.
Skype for Business Server 2015 gives administrators the option of assigning the user a specific SIP address or having Skype for Business Server 2015 create a SIP address for you.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName  -SipDomain litwareinc.com
```

In Example 1, Enable-CsUser enables the user account with the display name Pilar Ackerman.
In this example, the user is assigned to the Registrar pool atl-cs-001.litwareinc.com, and Lync Server auto-generates the SIP address by using the user's SamAccountName (pilar) followed by the SIP domain litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Enable-CsUser enables the user account with the display name Pilar Ackerman.
In this example, the user is assigned to the Registrar pool atl-cs-001.litwareinc.com, and Lync Server auto-generates the SIP address by using the user's SamAccountName (pilar) followed by the SIP domain litwareinc.com.

Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Enable-CsUser cmdlet enables the user account with the display name Pilar Ackerman.
In this example, the user is assigned to the Registrar pool atl-cs-001.litwareinc.com, and Skype for Business Server 2015 auto-generates the SIP address by using the user's SamAccountName (pilar) followed by the SIP domain litwareinc.com.

Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddress "sip:pilar@litwareinc.com"
```

In the preceding example, the Active Directory user account belonging to Pilar Ackerman is enabled for use with Lync Server.
In order to configure the account for Lync Server  the following parameters are used along with Enable-CsUser:  Identity, which identifies the account to be enabled; RegistrarPool, which indicates the new user's home server; and SipAddress, which specifies the SIP address for the new user.
In this case, the SIP address is explicitly assigned instead of using Lync Server to auto-generate the address.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the Active Directory user account belonging to Pilar Ackerman is enabled for use with Lync Server.
In order to configure the account for Lync Server the following parameters are used along with Enable-CsUser: Identity, which identifies the account to be enabled; RegistrarPool, which indicates the Standard Edition server or Enterprise Edition Front End pool on which the user is to be homed; and SipAddress, which specifies the SIP address for the new user.
In this case, the SIP address is explicitly assigned instead of using Lync Server to auto-generate the address.

Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddress "sip:pilar@litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Active Directory user account belonging to Pilar Ackerman is enabled for use with Skype for Business Server 2015.
In order to configure the account for Skype for Business Server 2015 the following parameters are used along with the Enable-CsUser cmdlet: Identity, which identifies the account to be enabled; RegistrarPool, which indicates the Standard Edition server or Enterprise Edition Front End pool on which the user is to be homed; and SipAddress, which specifies the SIP address for the new user.
In this case, the SIP address is explicitly assigned instead of using Skype for Business Server 2015 to auto-generate the address.

Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddress "sip:pilar@litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -LDAPFilter "department=Finance" | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName  -SipDomain litwareinc.com
```

In Example 3, all the users who work for the Finance department have their accounts enabled for Lync Server.
To carry out this task, the Get-CsAdUser cmdlet is used, along with the LDAPFilter parameter, to return a collection of all the users who work for the Finance department.
That information is then piped to Enable-CsUser, which enables each account in the collection for Lync Server.

In order to enable an account, you must specify the user's Registrar pool and the user's SIP address.
In this example, the Registrar pool is specified by using the RegistrarPool parameter.
The SIP address is not directly assigned, however.
Instead, two parameters, SipAddressType and SipDomain, are added to the command.
That means that a new SIP address consisting of the user's SamAccountName and the SIP domain name will automatically be generated for each account.
For example, a user with the SamAccountName kenmyer will be given the SIP address sip:kenmyer@litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the users who work for the Finance department have their accounts enabled for Lync Server.
To carry out this task, the Get-CsAdUser cmdlet is used, along with the LdapFilter parameter, to return a collection of all the users who work for the Finance department.
That information is then piped to Enable-CsUser, which enables each account in the collection for Lync Server.

In order to enable an account, you must specify the user's Registrar pool and the user's SIP address.
In this example, the Registrar pool is specified by using the RegistrarPool parameter.
The SIP address is not directly assigned, however.
Instead, two parameters, SipAddressType and SipDomain, are added to the command.
That means that a new SIP address consisting of the user's SamAccountName and the SIP domain name will automatically be generated for each account.
For example, a user with the SamAccountName kenmyer will be given the SIP address sip:kenmyer@litwareinc.com.

Get-CsAdUser -LdapFilter "department=Finance" | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the users who work for the Finance department have their accounts enabled for Skype for Business Server 2015.
To carry out this task, the Get-CsAdUser cmdlet is used, along with the LdapFilter parameter, to return a collection of all the users who work for the Finance department.
That information is then piped to the Enable-CsUser cmdlet, which enables each account in the collection for Skype for Business Server 2015.

In order to enable an account, you must specify the user's Registrar pool and the user's SIP address.
In this example, the Registrar pool is specified by using the RegistrarPool parameter.
The SIP address is not directly assigned, however.
Instead, two parameters, SipAddressType and SipDomain, are added to the command.
That means that a new SIP address consisting of the user's SamAccountName and the SIP domain name will automatically be generated for each account.
For example, a user with the SamAccountName kenmyer will be given the SIP address sip:kenmyer@litwareinc.com.

Get-CsAdUser -LdapFilter "department=Finance" | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -Filter {Enabled -ne $True} | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName  -SipDomain litwareinc.com
```

The preceding command enables all the Active Directory users who have not yet been enabled for Lync Server.
To do this, the Get-CsAdUser cmdlet is invoked, along with the Filter parameter.
The filter {Enabled -ne $True} returns a collection of all the users who have not been enabled for Lync Server.
That collection is then piped to Enable-CsUser, which enables each account, assigning the user to the Registrar pool atl-cs-001.litwareinc.com and auto-generating a SIP address for each user.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 enables all the Active Directory users who have not yet been enabled for Lync Server.
To do this, the Get-CsAdUser cmdlet is invoked, along with the Filter parameter.
The filter {Enabled -ne $True} returns a collection of all the users who have not been enabled for Lync Server.
That collection is then piped to Enable-CsUser, which enables each account, assigning the user to the Registrar pool atl-cs-001.litwareinc.com and auto-generating a SIP address for each user.

Get-CsAdUser -Filter {Enabled -ne $True} | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 enables all the Active Directory users who have not yet been enabled for Skype for Business Server 2015.
To do this, the Get-CsAdUser cmdlet is invoked, along with the Filter parameter.
The filter {Enabled -ne $True} returns a collection of all the users who have not been enabled for Skype for Business Server 2015.
That collection is then piped to the Enable-CsUser cmdlet, which enables each account, assigning the user to the Registrar pool atl-cs-001.litwareinc.com and auto-generating a SIP address for each user.

Get-CsAdUser -Filter {Enabled -ne $True} | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Identity of the user account to be enabled for Lync Server.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the user who have a display name that ends with the string value " Smith".



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity of the user account to be enabled for Skype for Business Server 2015.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the user who have a display name that ends with the string value " Smith".



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RegistrarPool
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Registrar pool where the user's Lync Server account will be homed.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Registrar pool where the user's Skype for Business Server 2015 account will be homed.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddressType
**Below Content Applies To:** Lync Server 2010

Instructs Lync Server to auto-generate a SIP address for the new user.
In order to have  Lync Server auto-generate the SIP address, you must include the SipAddressType parameter and use one of the following parameter values:

FirstLastName.
The SIP address is the user's first name and a period followed by the user's last name and the SIP domain.
For example, the user Ken Myer would have a SIP address similar to this: Ken.Myer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

EmailAddress.
The user's email address (as defined in Active Directory) is used as the SIP address.

UserPrincipalName.
The user's UPN is used as the SIP address.

SamAccountName.
The SIP address is the user's SamAccountName (logon name) followed by the SIP domain.
For example, the user with the SamAccountName kmyer will have a SIP address similar to this: kmyer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

The SipAddressType parameter is not required if you use the SIPAddress parameter and explicitly assign the user a SIP address.



**Below Content Applies To:** Lync Server 2013

Instructs Lync Server to auto-generate a SIP address for the new user.
In order to have Lync Server auto-generate the SIP address, you must include the SipAddressType parameter and use one of the following parameter values:

FirstLastName.
The SIP address is the user's first name and a period followed by the user's last name and the SIP domain.
For example, the user Ken Myer would have a SIP address similar to this: Ken.Myer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

EmailAddress.
The user's email address (as defined in Active Directory) is used as the SIP address.

UserPrincipalName.
The user's UPN is used as the SIP address.

SamAccountName.
The SIP address is the user's SamAccountName (logon name) followed by the SIP domain.
For example, the user with the SamAccountName kmyer will have a SIP address similar to this: kmyer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

The SipAddressType parameter is not required if you use the SIPAddress parameter and explicitly assign the user a SIP address.



**Below Content Applies To:** Skype for Business Server 2015

Instructs Skype for Business Server 2015 to auto-generate a SIP address for the new user.
In order to have Skype for Business Server 2015 auto-generate the SIP address, you must include the SipAddressType parameter and use one of the following parameter values:

FirstLastName.
The SIP address is the user's first name and a period followed by the user's last name and the SIP domain.
For example, the user Ken Myer would have a SIP address similar to this: Ken.Myer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

EmailAddress.
The user's email address (as defined in Active Directory) is used as the SIP address.

UserPrincipalName.
The user's UPN is used as the SIP address.

SamAccountName.
The SIP address is the user's SamAccountName (logon name) followed by the SIP domain.
For example, the user with the SamAccountName kmyer will have a SIP address similar to this: kmyer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.

The SipAddressType parameter is not required if you use the SipAddress parameter and explicitly assign the user a SIP address.



```yaml
Type: AddressType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipDomain
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

The SIP domain for the user account being enabled.
This parameter is required if you use the SIPAddressType parameter to have Lync Server auto-generate a SIP address for the user and you based SIP addresses on the SamAccountName or the user's first name and last name.
This parameter is not required if you base SIP addresses on the user's email address or UPN; that's because the domain name is already included in those attribute values.



**Below Content Applies To:** Skype for Business Server 2015

The SIP domain for the user account being enabled.
This parameter is required if you use the SipAddressType parameter to have Skype for Business Server 2015 auto-generate a SIP address for the user and you based SIP addresses on the SamAccountName or the user's first name and last name.
This parameter is not required if you base SIP addresses on the user's email address or UPN; that's because the domain name is already included in those attribute values.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to assign the user a specific SIP address.
When specifying the SIP address, preface the address with "sip:".
That means the value supplied to the SipAddress parameter should look something like this :

sip:kenmyer@litwareinc.com

The SipAddress parameter should not be used if you use the SipAddressType parameter in order to have Lync Server automatically generate a SIP address for the user.

The SipAddress parameter cannot be used if you are attempting to enable multiple users at the same time.
Instead, you must auto-generate SIP address for those users by using the SipAddressType parameter.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to assign the user a specific SIP address.
When specifying the SIP address, preface the address with "sip:".
That means the value supplied to the SipAddress parameter should look something like this:

sip:kenmyer@litwareinc.com

The SipAddress parameter should not be used if you use the SipAddressType parameter in order to have Skype for Business Server 2015 automatically generate a SIP address for the user.

The SipAddress parameter cannot be used if you are attempting to enable multiple users at the same time.
Instead, you must auto-generate SIP address for those users by using the SipAddressType parameter.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostingProviderProxyFqdn
**Below Content Applies To:** Lync Server 2010

This parameter is used only for Microsoft Lync Online 2010.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Lync Server 2013

This parameter is used only for Lync Online.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Skype for Business Server 2015

This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Server 2015.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: HostingProvider
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool
**Below Content Applies To:** Lync Server 2010

This parameter is used only for Lync Online 2010.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Lync Server 2013

This parameter is used only for Lync Online.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Skype for Business Server 2015

This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Online.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to enable a user account.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to pass a user object through the pipeline that represents the user account being enabled for Lync Server.
By default, the Enable-CsUser cmdlet does not pass objects through the pipeline.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to pass a user object through the pipeline that represents the user account being enabled for Skype for Business Server 2015.
By default, the Enable-CsUser cmdlet does not pass objects through the pipeline.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Enable-CsUser accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.

###  
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Enable-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server 2015.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###  
None.
Enable-CsUser does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

###  
None.
The Enable-CsUser cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8ceed97b-e802-4844-b509-c6ca9619ec55(OCS.14).aspx)

[Disable-CsUser]()

[Get-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/8ceed97b-e802-4844-b509-c6ca9619ec55(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8ceed97b-e802-4844-b509-c6ca9619ec55(OCS.16).aspx)

