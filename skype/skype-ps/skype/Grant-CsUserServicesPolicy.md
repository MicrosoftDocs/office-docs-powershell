---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Grant-CsUserServicesPolicy
schema: 2.0.0
---

# Grant-CsUserServicesPolicy

## SYNOPSIS

Assigns a per-user User Services policy to one or more users.
User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Microsoft Outlook, and/or Microsoft Outlook Web Access.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Grant-CsUserServicesPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The unified contact store introduced in Skype for Business Server gives administrators the option of storing a user's contacts in Skype for Business instead of in Skype for Business Server; in turn that allows the user to access the same set of contacts in Microsoft Outlook and Outlook Web Access as well as in Skype for Business.
(Alternatively, you can continue to store contacts in Skype for Business Server.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access, and one for use with Skype for Business.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the Invoke-CsUcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business Server.

Skype for Business Server Control Panel: The functions carried out by the Grant-CsUserServicesPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Grant-CsUserServicesPolicy -Identity "Ken Myer" -PolicyName "RedmondUserServicesPolicy"
```

The command shown in Example 1 assigns the per-user User Services policy RedmondUserServicesPolicy to the user with the Identity (in this example, the Active Directory display name) Ken Myer.


### -------------------------- Example 2 -------------------------- 
```

Grant-CsUserServicesPolicy -Identity "Ken Myer" -PolicyName $Null
```

Example 2 unassigns any per-user Users Services policy previously assigned to Ken Myer.
Per-user policies are unassigned by setting the PolicyName parameter to a Null value ($Null).


### -------------------------- Example 3 -------------------------- 
```

Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsUserServicesPolicy -PolicyName "RedmondUserServicesPolicy"
```

In Example 3, all the users on the RegistrarPool atl-cs-001.litwareinc.com are assigned the per-user Users Services policy RedmondUserServicesPolicy.
To do this, the Get-CsUser cmdlet is first called along with the Filter parameter; the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com" limits the returned data to users who have been homed on the Registrar pool atl-cs-001.litwareinc.com.
This collection of users is then piped to the Grant-CsUserServicesPolicy cmdlet, which, in turn assigns the policy RedmondUserServicesPolicy to each user in the collection.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the per-user user experience policy.
User Identities are typically specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (four example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve user information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.
By default, the Grant-CsUserServicesPolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondUserExperiencePolicy has a PolicyName equal to RedmondUserExperiencePolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The Grant-CsUserServicesPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, the Grant-CsUserServicesPolicy cmdlet does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Get-CsUserServicesPolicy](Get-CsUserServicesPolicy.md)

[New-CsUserServicesPolicy](New-CsUserServicesPolicy.md)

[Remove-CsUserServicesPolicy](Remove-CsUserServicesPolicy.md)

[Set-CsUserServicesPolicy](Set-CsUserServicesPolicy.md)
