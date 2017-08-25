---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsPresencePolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Grants a per-user presence policy to a user or group of users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Grants a per-user presence policy to a user or group of users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsPresencePolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Microsoft Lync 2010 Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount, then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Microsoft Lync Server 2010, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

When you create a per-user policy, that policy is not automatically assigned to anyone.
Instead, per-user presence policies must be explicitly assigned to users (or groups of users) by running the Grant-CsPresencePolicy cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsPresencePolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Grant-CsPresencePolicy"}

**Below Content Applies To:** Lync Server 2013

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Lync Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount, then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Lync Server, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

When you create a per-user policy, that policy is not automatically assigned to anyone.
Instead, per-user presence policies must be explicitly assigned to users (or groups of users) by running the Grant-CsPresencePolicy cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsPresencePolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsPresencePolicy"}

**Below Content Applies To:** Skype for Business Server 2015

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Skype for Business Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount, then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Lync Server, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

When you create a per-user policy, that policy is not automatically assigned to anyone.
Instead, per-user presence policies must be explicitly assigned to users (or groups of users) by running the Grant-CsPresencePolicy cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Grant-CsPresencePolicy -Identity "Ken Myer" -PolicyName "RedmondPresencePolicy"
```

The command shown in Example 1 assigns the per-user presence policy RedmondPresencePolicy to a single user: the user with the Identity Ken Myer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 assigns the per-user presence policy RedmondPresencePolicy to a single user: the user with the Identity Ken Myer.

Grant-CsPresencePolicy -Identity "Ken Myer" -PolicyName "RedmondPresencePolicy"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 assigns the per-user presence policy RedmondPresencePolicy to a single user: the user with the Identity Ken Myer.

Grant-CsPresencePolicy -Identity "Ken Myer" -PolicyName "RedmondPresencePolicy"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"
```

In Example 2, the presence policy RedmondPresencePolicy is assigned to all the users who have accounts in the Redmond OU in Active Directory Domain Services (AD DS).
To do this, the command first uses Get-CsUser and the OU parameter to return a collection of all the user accounts found in the Redmond OU (OU=Redmond,dc=litware,dc=com).
This collection is then piped to Grant-CsPresencePolicy, which assigns the policy RedmondPresencePolicy to each user in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the presence policy RedmondPresencePolicy is assigned to all the users who have accounts in the Redmond OU in Active Directory Domain Services (AD DS).
To do this, the command first uses Get-CsUser and the OU parameter to return a collection of all the user accounts found in the Redmond OU (OU=Redmond,dc=litwareinc,dc=com).
This collection is then piped to Grant-CsPresencePolicy, which assigns the policy RedmondPresencePolicy to each user in the collection.

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the presence policy RedmondPresencePolicy is assigned to all the users who have accounts in the Redmond OU in Active Directory Domain Services.
To do this, the command first uses the Get-CsUser cmdlet and the OU parameter to return a collection of all the user accounts found in the Redmond OU (OU=Redmond,dc=litwareinc,dc=com).
This collection is then piped to the Grant-CsPresencePolicy cmdlet, which assigns the policy RedmondPresencePolicy to each user in the collection.

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsUser -LDAPFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"
```

The preceding command assigns the policy RedmondPresencePolicy to all the users who work in the city of Redmond.
To carry out this task, the command first uses Get-CsUser and the LDAPFilter parameter to return a collection of all the users who work in Redmond; the filter value "l=Redmond" limits the returned data to users from Redmond.
(In the LDAP query language, l, the lowercase L, is short for "locality.") The retrieved collection is then piped to Grant-CsPresencePolicy, which assigns the policy RedmondPresencePolicy to each user in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 assigns the policy RedmondPresencePolicy to all the users who work in the city of Redmond.
To carry out this task, the command first uses Get-CsUser and the LdapFilter parameter to return a collection of all the users who work in Redmond; the filter value "l=Redmond" limits the returned data to users from Redmond.
(In the LDAP query language, l, the lowercase L, is short for "locality.") The retrieved collection is then piped to Grant-CsPresencePolicy, which assigns the policy RedmondPresencePolicy to each user in the collection.

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 assigns the policy RedmondPresencePolicy to all the users who work in the city of Redmond.
To carry out this task, the command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who work in Redmond; the filter value "l=Redmond" limits the returned data to users from Redmond.
(In the LDAP query language, l, the lowercase L, is short for "locality.") The retrieved collection is then piped to the Grant-CsPresencePolicy cmdlet, which assigns the policy RedmondPresencePolicy to each user in the collection.

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName "RedmondPresencePolicy"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsUser -LDAPFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName $Null
```

The command shown in Example 4 unassigns any per-user presence policy previously assigned to users who work in Redmond.
Calling Grant-CsPresencePolicy while setting the PolicyName parameter to a null value ($Null) causes the cmdlet to remove any per-user presence policies assigned to the users affected by the command.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 unassigns any per-user presence policy previously assigned to users who work in Redmond.
Calling Grant-CsPresencePolicy while setting the PolicyName parameter to a null value ($Null) causes the cmdlet to remove any per-user presence policies assigned to the users affected by the command.

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName $Null

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 unassigns any per-user presence policy previously assigned to users who work in Redmond.
Calling the Grant-CsPresencePolicy cmdlet while setting the PolicyName parameter to a null value ($Null) causes the cmdlet to remove any per-user presence policies assigned to the users affected by the command.

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsPresencePolicy -PolicyName $Null

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the presence policy.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users with display name that ends with the string value "Smith".

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Identity of the per-user policy to be assigned; for example: -PolicyName "RedmondPresencePolicy".
The PolicyName is the Identity of the policy minus the "tag:" prefix.
For example, a policy with the Identity "tag:NorthAmericaPresencePolicy" has a PolicyName equal to "NorthAmericaPresencePolicy".



**Below Content Applies To:** Skype for Business Server 2015

Identity of the per-user policy to be assigned; for example:

-PolicyName "RedmondPresencePolicy"

The PolicyName is the Identity of the policy minus the "tag:" prefix.
For example, a policy with the Identity "tag:NorthAmericaPresencePolicy" has a PolicyName equal to "NorthAmericaPresencePolicy".



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified name of the domain (FQDN) controller to be contacted when assigning the policy.
For example: -DomainController atl-dc-001.litwareinc.com.

If not specified, Grant-CsPresencePolicy will contact the nearest available domain controller when assigning the policy.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified name of the domain (FQDN) controller to be contacted when assigning the policy.
For example:

-DomainController atl-dc-001.litwareinc.com

If not specified, the Grant-CsPresencePolicy cmdlet will contact the nearest available domain controller when assigning the policy.



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
By default, the Grant-CsPresencePolicy cmdlet does not pass objects through the pipeline.

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
String value or Microsoft.Rtc.Management.WritebleConfig.Policy.Presence.PresencePolicy object.
Grant-CsPresencePolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

###  
String value or Microsoft.Rtc.Management.WritebleConfig.Policy.Presence.PresencePolicy object.
The Grant-CsPresencePolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsPresencePolicy does not return an objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

###  
By default, the Grant-CsPresencePolicy cmdlet does not return an objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/756c08a7-26b0-4ea8-816b-b33ebcac51aa(OCS.14).aspx)

[Get-CsPresencePolicy]()

[New-CsPresencePolicy]()

[Remove-CsPresencePolicy]()

[Set-CsPresencePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/756c08a7-26b0-4ea8-816b-b33ebcac51aa(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/756c08a7-26b0-4ea8-816b-b33ebcac51aa(OCS.16).aspx)

