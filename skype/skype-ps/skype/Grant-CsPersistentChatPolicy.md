---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsPersistentChatPolicy
schema: 2.0.0
---

# Grant-CsPersistentChatPolicy

## SYNOPSIS

Assigns a per-user Persistent Chat policy to a user.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Grant-CsPersistentChatPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Skype for Business Server, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope, and thus provide Persistent Chat access to some users while denying this access to other users.

Skype for Business Server Control Panel: To assign a Persistent Chat policy to a user in the Skype for Business Server Control Panel, double-click the appropriate user account.
In the Edit Lync Server User dialog box, select a policy from the Persistent Chat policy dropdown list and then click Commit.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Grant-CsPersistentChatPolicy -Identity "Ken Myer" -PolicyName "RedmondUsersPersistentChatPolicy"
```

The command shown in Example 1 assigns the per-user policy RedmondUsersPersistentChatPolicy to the user with the Active Directory display name "Ken Myer".


### -------------------------- Example 2 -------------------------- 
```

Get-CsUser -LdapFilter "Department=IT" | Grant-CsPersistentChatPolicy -PolicyName "RedmondUsersPersistentChatPolicy"
```

In Example 2, the per-user policy RedmondUsersPersistentChatPolicy is assigned to all the users who work in the IT department.
To do this, the command first calls the Get-CsUser cmdlet along with the LdapFilter property; the filter value "Department=IT" limits the returned data to users who work in the IT department.
That collection of users is then piped to the Grant-CsPersistentChatPolicy cmdlet, which assigns the policy RedmondUsersPersistentChatPolicy to each user in the collection.


### -------------------------- Example 3 -------------------------- 
```

Get-CsUser -Filter {PersistentChatPolicy -eq $Null} | Grant-CsPersistentChatPolicy -PolicyName "RedmondUsersPersistentChatPolicy"
```

In Example 3, the per-user Persistent Chat policy RedmondUsersPersistentChatPolicy is assigned to all the users who do not currently have a per-user Persistent Chat policy assigned to them.
To carry out this task, the command first employs the Get-CsUser cmdlet and the Filter parameter; the filter value {PersistentChatPolicy -eq $Null} limits the returned data to user accounts in which the PersistentChatPolicy property is currently null ($Null).
That collection of users is then piped to the Grant-CsPersistentChatPolicy cmdlet, which assigns each user in the collection the policy RedmondUsersPersistentChatPolicy.


### -------------------------- Example 4 -------------------------- 
```

Get-CsUser -Filter {PersistentChatPolicy -eq "RedmondUsersPersistentChatPolicy"} | Grant-CsPersistentChatPolicy -PolicyName $Null
```

The command shown in Example 4 unassigns the per-user Persistent Chat policy RedmondUsersPersistentChatPolicy from any user currently assigned that policy.
To carry out this task, the command first uses the Get-CsUser cmdlet and the Filter parameter to return a collection of users currently assigned the policy RedmondUsersPersistentChatPolicy; the filter value {PersistentChatPolicy -eq "RedmondUsersPersistentChatPolicy"} restricts the returned items to user accounts where the PersistentChatPolicy property is equal to RedmondUsersPersistentChatPolicy.
That collection is then piped the Grant-CsPersistentChatPolicy cmdlet, which unassigns the per-user policy by setting the PersistentChatPolicy property to a null value ($Null).

After the per-user policy has been unassigned, users will have their Persistent Chat capabilities managed by their Persistent Chat site policy (if it exists) or, if not, by the global Persistent Chat policy.


## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the per-user Persistent Chat policy.
User Identities are typically specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (four example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

Enables you to specify the fully qualified domain name of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified then the Grant-CsPersistentChatPolicy cmdlet will contact the first available domain controller.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsPersistentChatPolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondUsersPersistentChatPolicy has a PolicyName equal to RedmondUsersPersistentChatPolicy.
To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
String value or Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.
The Grant-CsPersistentChatPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, the Grant-CsPersistentChatPolicy cmdlet does not return an objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatPolicy](Get-CsPersistentChatPolicy.md)

[New-CsPersistentChatPolicy](New-CsPersistentChatPolicy.md)

[Remove-CsPersistentChatPolicy](Remove-CsPersistentChatPolicy.md)

[Set-CsPersistentChatPolicy](Set-CsPersistentChatPolicy.md)

