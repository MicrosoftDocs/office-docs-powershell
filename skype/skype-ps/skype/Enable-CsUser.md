---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Enable-CsUser
schema: 2.0.0
---

# Enable-CsUser

## SYNOPSIS
Enables one or more users for Skype for Business Server.
Users cannot use Skype for Business or other Skype for Business Server clients until their user accounts have been enabled for Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Enable-CsUser [-Identity] <UserIdParameter> [-RegistrarPool <Fqdn>] [-SipAddressType <AddressType>]
 [-SipDomain <Fqdn>] [-SipAddress <String>] [-HostingProviderProxyFqdn <Fqdn>] [-ProxyPool <Fqdn>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Before a user can log on to Skype for Business Server, that user must meet two requirements: he or she must have a valid Active Directory account, and that account must be enabled for Skype for Business Server.
One way to enable a user account for Skype for Business Server is to use the Enable-CsUser cmdlet.
To use this cmdlet to enable an account for Skype for Business Server, you must: 1) Select the account (or accounts) to be enabled; 2) Select a Registrar pool for the account; and 3) Assign the account a SIP address.
Skype for Business Server gives administrators the option of assigning the user a specific SIP address or having Skype for Business Server create a SIP address for you.

By default, members of the following groups are authorized to run the Enable-CsUser cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Enable-CsUser"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com
```

In Example 1, the Enable-CsUser cmdlet enables the user account with the display name Pilar Ackerman.
In this example, the user is assigned to the Registrar pool atl-cs-001.litwareinc.com, and Skype for Business Server auto-generates the SIP address by using the user's SamAccountName (pilar) followed by the SIP domain litwareinc.com.

### -------------------------- Example 2 --------------------------
```
Enable-CsUser -Identity "Pilar Ackerman" -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddress "sip:pilar@litwareinc.com"
```

In Example 2, the Active Directory user account belonging to Pilar Ackerman is enabled for use with Skype for Business Server.
In order to configure the account for Skype for Business Server the following parameters are used along with the Enable-CsUser cmdlet: Identity, which identifies the account to be enabled; RegistrarPool, which indicates the Standard Edition server or Enterprise Edition Front End pool on which the user is to be homed; and SipAddress, which specifies the SIP address for the new user.
In this case, the SIP address is explicitly assigned instead of using Skype for Business Server to auto-generate the address.

### -------------------------- Example 3 --------------------------
```
Get-CsAdUser -LdapFilter "department=Finance" | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com
```

In Example 3, all the users who work for the Finance department have their accounts enabled for Skype for Business Server.
To carry out this task, the Get-CsAdUser cmdlet is used, along with the LdapFilter parameter, to return a collection of all the users who work for the Finance department.
That information is then piped to the Enable-CsUser cmdlet, which enables each account in the collection for Skype for Business Server.

In order to enable an account, you must specify the user's Registrar pool and the user's SIP address.
In this example, the Registrar pool is specified by using the RegistrarPool parameter.
The SIP address is not directly assigned, however.
Instead, two parameters, SipAddressType and SipDomain, are added to the command.
That means that a new SIP address consisting of the user's SamAccountName and the SIP domain name will automatically be generated for each account.
For example, a user with the SamAccountName kenmyer will be given the SIP address sip:kenmyer@litwareinc.com.

### -------------------------- Example 4 --------------------------
```
Get-CsAdUser -Filter {Enabled -ne $True} | Enable-CsUser -RegistrarPool "atl-cs-001.litwareinc.com" -SipAddressType SamAccountName -SipDomain litwareinc.com
```

Example 4 enables all the Active Directory users who have not yet been enabled for Skype for Business Server.
To do this, the Get-CsAdUser cmdlet is invoked, along with the Filter parameter.
The filter {Enabled -ne $True} returns a collection of all the users who have not been enabled for Skype for Business Server.
That collection is then piped to the Enable-CsUser cmdlet, which enables each account, assigning the user to the Registrar pool atl-cs-001.litwareinc.com and auto-generating a SIP address for each user.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be enabled for Skype for Business Server.
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
Instructs Skype for Business Server 2015 to auto-generate a SIP address for the new user.
In order to have Skype for Business Server 2015 auto-generate the SIP address, you must include the SipAddressType parameter and use one of the following parameter values:

- FirstLastName: The SIP address is the user's first name and a period followed by the user's last name and the SIP domain.
For example, the user Ken Myer would have a SIP address similar to this: Ken.Myer@litwareinc.com.
If you use this address type then you must also include the SipDomain parameter.
- EmailAddress: The user's email address (as defined in Active Directory) is used as the SIP address.
- UserPrincipalName: The user's UPN is used as the SIP address.
- SamAccountName: The SIP address is the user's SamAccountName (logon name) followed by the SIP domain.
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
The SIP domain for the user account being enabled.
This parameter is required if you use the SipAddressType parameter to have Skype for Business Server auto-generate a SIP address for the user and you based SIP addresses on the SamAccountName or the user's first name and last name.
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
Enables you to assign the user a specific SIP address.
When specifying the SIP address, preface the address with "sip:".
That means the value supplied to the SipAddress parameter should look something like this:

`sip:kenmyer@litwareinc.com`

The SipAddress parameter should not be used if you use the SipAddressType parameter in order to have Skype for Business Server automatically generate a SIP address for the user.

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
This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Server.

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
Enables you to pass a user object through the pipeline that represents the user account being enabled for Skype for Business Server.
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

### String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser
The Enable-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.
The cmdlet also accepts pipelined instances of the Active Directory user object.


## OUTPUTS

### None
The Enable-CsUser cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.


## NOTES


## RELATED LINKS

[Disable-CsUser](Disable-CsUser.md)

[Get-CsUser](Get-CsUser.md)
