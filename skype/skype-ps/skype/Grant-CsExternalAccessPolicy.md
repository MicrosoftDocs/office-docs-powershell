---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsExternalAccessPolicy
schema: 2.0.0
---

# Grant-CsExternalAccessPolicy

## SYNOPSIS

Enables you to assign an external access policy to a user or a group of users.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Skype for Business Server over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsExternalAccessPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION

When you install Skype for Business Server your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Active Directory Domain Services.
In addition, users are not allowed to access Skype for Business Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation will not automatically provide users with this capability.
Instead, you must enable federation, and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.
Access Skype for Business Server over the Internet, without having to first log on to your internal network.
This enables your users to use Skype for Business and log on to Skype for Business Server from an Internet café or other remote location.

When you install Skype for Business Server, a global external access policy is automatically created for you.
In addition to this global policy, you can use the New-CsExternalAccessPolicy cmdlet to create additional external access policies configured at either the site or the per-user scope.

When a policy is created at the site scope, it is automatically assigned to the site in question; for example, an external access policy with the Identity site:Redmond will automatically be assigned to the Redmond site.
By contrast, policies created at the per-user scope are not automatically assigned to anyone.
Instead, these policies must be explicitly assigned to a user or a group of users.
Assigning per-user policies is the job of the Grant-CsExternalAccessPolicy cmdlet.

Note that per-user policies always take precedent over site policies and the global policy.
For example, suppose you create a per-user policy that allows communication with federated users, and you assign that policy to Ken Myer.
As long as that policy is in force, Ken will be allowed to communicate with federated users even if this type of communication is not allowed by Ken's site policy or by the global policy.
That's because the settings in the per-user policy take precedence.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsExternalAccessPolicy -Identity "Ken Myer" -PolicyName RedmondAccessPolicy
```

Example 1 assigns the external access policy RedmondAccessPolicy to the user with the Active Directory display name Ken Myer.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsExternalAccessPolicy -PolicyName RedmondAccessPolicy
```

The command shown in Example 2 assigns the external access policy RedmondAccessPolicy to all the users who work in the city of Redmond.
To do this, the command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who work in Redmond; the filter value "l=Redmond" limits returned data to those users who work in the city of Redmond (the l in the filter, a lowercase L, represents the locality).
That collection is then piped to the Grant-CsExternalAccessPolicy cmdlet, which assigns the policy RedmondAccessPolicy to each user in the collection.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser -LdapFilter "Title=Sales Representative" | Grant-CsExternalAccessPolicy -PolicyName SalesAccessPolicy
```

In Example 3, all the users who have the job title "Sales Representative" are assigned the external access policy SalesAccessPolicy.
To perform this task, the command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the Sales Representatives; the filter value "Title=Sales Representative" restricts the returned collection to users who have the job title "Sales Representative".
This filtered collection is then piped to the Grant-CsExternalAccessPolicy cmdlet, which assigns the policy SalesAccessPolicy to each user in the collection.


### -------------------------- EXAMPLE 4 -------------------------- 
```

Get-CsUser -Filter {ExternalAccessPolicy -eq $Null} | Grant-CsExternalAccessPolicy -PolicyName BasicAccessPolicy
```

The command shown in Example 4 assigns the external access policy BasicAccessPolicy to all the users who have not been explicitly assigned a per-user policy.
(That is, users currently being governed by a site policy or by the global policy.) To do this, the Get-CsUser cmdlet and the Filter parameter are used to return the appropriate set of users; the filter value {ExternalAccessPolicy -eq $Null} limits the returned data to user accounts where the ExternalAccessPolicy property is equal to (-eq) a null value ($Null).
By definition, ExternalAccessPolicy will be null only if users have not been assigned a per-user policy.


### -------------------------- EXAMPLE 5 -------------------------- 
```

Get-CsUser -OU "ou=US,dc=litwareinc,dc=com" | Grant-CsExternalAccessPolicy -PolicyName USAccessPolicy
```

Example 5 assigns the external access policy USAccessPolicy to all the users who have accounts in the US organizational unit (OU).
The command starts off by calling the Get-CsUser cmdlet and the OU parameter; the parameter value "ou=US,dc=litwareinc,dc=com" limits the returned data to user accounts found in the US OU.
The returned collection is then piped to the Grant-CsExternalAccessPolicy cmdlet, which assigns the policy USAccessPolicy to each user in the collection.


### -------------------------- EXAMPLE 6 -------------------------- 
```

Get-CsUser | Grant-CsExternalAccessPolicy -PolicyName $Null
```

Example 6 unassigns any per-user external access policy previously assigned to any of the users enabled for Skype for Business Server.
To do this, the command calls the Get-CsUser cmdlet (without any additional parameters) in order to return a collection of all the users enabled for Skype for Business Server.
That collection is then piped to the Grant-CsExternalAccessPolicy cmdlet, which uses the syntax "`-PolicyName $Null`" to remove any per-user external access policy previously assigned to these users.


## PARAMETERS

### -Identity

Identity of the user account the policy should be assigned to.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when specifying the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith."




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

### -PolicyName

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondAccessPolicy has a PolicyName equal to RedmondAccessPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName parameter to $Null.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified, then the Grant-CsExternalAccessPolicy cmdlet will contact the first available domain controller.



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

### -PassThru

Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsExternalAccessPolicy cmdlet does not pass objects through the pipeline.




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

### -Tenant
{{Fill Tenant Description}}

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Grant-CsExternalAccessPolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

### Microsoft.Rtc.Management.AD.UserIdParameter

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Grant-CsExternalAccessPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsExternalAccessPolicy does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

### System.Object

###  
By default, the Grant-CsExternalAccessPolicy cmdlet does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

[Get-CsExternalAccessPolicy](Get-CsExternalAccessPolicy.md)

[New-CsExternalAccessPolicy](New-CsExternalAccessPolicy.md)

[Remove-CsExternalAccessPolicy](Remove-CsExternalAccessPolicy.md)

[Set-CsExternalAccessPolicy](Set-CsExternalAccessPolicy.md)

