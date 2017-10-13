---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Grant-CsPinPolicy
schema: 2.0.0
---

# Grant-CsPinPolicy

## SYNOPSIS

Assigns a client personal identification number (PIN) policy to a user or group of users.
PIN authentication enables users to access Skype for Business Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsPinPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>] [-PassThru]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN as well as determine whether you will allow PINs that use "common patterns" such as repeating digits (for example, a PIN like 11223344).
PIN policies can be configured at the global or the site scope; in addition, PIN policies can be configured at the per-user scope and then assigned to a user or a specified set of users.
In order to assign a per-user policy you must use the Grant-CsPinPolicy cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsPinPolicy -Identity "kenmyer@litwareinc.com" -PolicyName RedmondUsersPinPolicy
```

The command shown in Example 1 assigns the policy RedmondUsersPinPolicy to the user kenmyer@litwareinc.com.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Grant-CsPinPolicy -Identity kenmyer@litwareinc.com -PolicyName $Null
```

Example 2 unassigns any per-user PIN policy previously assigned to the user kenmyer@litwareinc.com.
Calling the Grant-CsPinPolicy cmdlet and setting the policy name to a null value ($Null) removes any per-user policy assigned to the user.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsPinPolicy -PolicyName RedmondUsersPinPolicy

```

In Example 3, the policy RedmondUsersPinPolicy is assigned to all the users who work in the city of Redmond.
To do this, the Get-CsUser cmdlet first retrieves a collection of all the users who work in Redmond; this is done by including the LdapFilter parameter and using the filter value "l=Redmond".
(With LDAP filters, l, a lowercase L, represents the user's locality.) That collection of users is then piped to the Grant-CsPinPolicy cmdlet, which assigns each user the policy RedmondUsersPinPolicy.

### -------------------------- EXAMPLE 4 -------------------------- 
```

Get-CsUser -Filter {PinPolicy -eq $Null} | Grant-CsPinPolicy -PolicyName RedmondUsersPinPolicy
```

In Example 4, the policy RedmondUsersPinPolicy is assigned to all the users who have not been assigned a per-user PIN policy.
To determine which users have not been assigned a PIN policy, the Get-CsUser cmdlet is called, along with the Filter parameter; the filter value {ClientPinPolicy -eq $Null} returns only those users where the ClientPinPolicy property is null (that is, no per-user PIN policy has been assigned).
That collection of users is then piped to the Grant-CsPinPolicy cmdlet, which assigns the policy RedmondUsersPinPolicy to each person in the collection.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the per-user PIN policy.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (four example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

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

### -PolicyName

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondUsersPinPolicy has a PolicyName equal to RedmondUsersPinPolicy.
To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

Enables you to specify the fully qualified domain name of a domain (FQDN) controller to be contacted when assigning the new policy.
If this parameter is not specified then the Grant-CsPinPolicy cmdlet will contact the first available domain controller.



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
Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsPinPolicy cmdlet does not pass objects through the pipeline.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String value or Microsoft.Rtc.Management.UserPinService.PinInfoDetails object.
The Grant-CsPinPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, the Grant-CsPinPolicy cmdlet does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Get-CsPinPolicy](Get-CsPinPolicy.md)

[New-CsPinPolicy](New-CsPinPolicy.md)

[Remove-CsPinPolicy](Remove-CsPinPolicy.md)

[Set-CsPinPolicy](Set-CsPinPolicy.md)

