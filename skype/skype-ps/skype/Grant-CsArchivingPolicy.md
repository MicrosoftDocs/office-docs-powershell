---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsArchivingPolicy
schema: 2.0.0
---

# Grant-CsArchivingPolicy

## SYNOPSIS

Enables you to assign instant messaging (IM) session archiving policies to users or sets of users.
These policies give you the ability to archive all IM sessions that take place between internal users, and/or to archive all IM sessions that take place between internal users and external partners.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsArchivingPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Many organizations find it useful to keep an archive of all the IM sessions that their users take part in; other organizations are legally required to keep such an archive.
In order to archive IM sessions with Skype for Business Server, you must perform two steps.
First, you need to enable archiving at the global and/or the site scope by using the Set-CsArchivingConfiguration cmdlet.
This gives you the ability to archive IM sessions; however, it does not automatically begin archiving those sessions.

To actually save transcripts of your IM sessions, you must complete step 2: create one or more IM session archiving policies.
These policies determine which users will have their IM sessions recorded as well as which type of IM sessions (internal and/or external) will be archived.
Internal IM sessions are sessions where all the participants are authenticated users who have Active Directory accounts within your organization.
By comparison, external IM sessions are sessions where at least one participant is an unauthenticated user who does not have an Active Directory account within your organization.
You can choose to archive only internal sessions, only external sessions, or both internal and external sessions.

Archiving policies can be assigned to the global scope or to the site scope.
In addition, these policies can be assigned to the per-user scope and then applied to a specific user or a specific set of users.
For example, suppose your global policy only archives only internal IM sessions.
In that case, you might create a second policy, one that archives both internal and external sessions and apply that policy only to your sales staff.
Because per-user policies take precedence over global and site policies, members of the sales staff will have all their IM sessions archived.
Other users (users who are not part of the sales department and are not affected by the sales policy) will have only their internal IM sessions archived.

The Grant-CsArchivingPolicy cmdlet is used to assign per-user archiving policies to a user or specified set of users.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsArchivingPolicy -Identity "Ken Myer" -PolicyName RedmondArchivingPolicy
```

In Example 1, the archiving policy RedmondArchivingPolicy is assigned to the user with the display name "Ken Myer".
Note that, with the Grant-CsArchivingPolicy cmdlet, the Identity property refers to the Identity of the user, not the Identity of the archiving policy.
Instead, the policy to be assigned is specified by using the PolicyName parameter; the parameter value is the policy Identity (minus the "tag:" prefix).


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsArchivingPolicy -PolicyName RedmondArchivingPolicy
```

In Example 2, all of the users with accounts in the Redmond organizational unit (OU) are assigned the archiving policy RedmondArchivingPolicy.
To do this, the Get-CsUser cmdlet and the OU parameter are used to return a collection of all the users who have accounts in the OU with the distinguished name "OU=Redmond,dc=litwareinc,dc=com".
This collection is then piped to the Grant-CsArchivingPolicy cmdlet, which assigns the policy RedmondArchivingPolicy to each user in the collection.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsUser -LdapFilter "l=Redmond" | Grant-CsArchivingPolicy -PolicyName RedmondArchivingPolicy
```

The command shown in Example 3 assigns the policy RedmondArchivingPolicy to all the users who work in Redmond.
To carry out this task, the Get-CsUser cmdlet is called along with the LdapFilter parameter; the LDAP filter value "l=Redmond" returns a collection of all the users who work in the city of Redmond.
(In the LDAP query language, l, a lowercase L, is short for "locality", or city.) This collection is then piped to the Grant-CsArchivingPolicy cmdlet, which assigns the RedmondArchivingPolicy policy to each user in the collection.


### -------------------------- EXAMPLE 4 -------------------------- 
```

Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsArchivingPolicy -PolicyName RedmondArchivingPolicy
```

In Example 4 all the users homed on the Registrar pool atl-cs-001.litwareinc.com are assigned the policy RedmondArchivingPolicy.
To do this, the Get-CsUser cmdlet is first used to return all the users who have been enabled for Skype for Business Server.
This collection is then piped to the Where-Object cmdlet, which selects only those users who have a RegistrarPool that is equal to atl-cs-001-litwareinc.com.
This filtered collection is then piped to the Grant-CsArchivingPolicy cmdlet, which assigns the policy RedmondArchivingPolicy to each user in the collection.

### -------------------------- EXAMPLE 5 -------------------------- 
```

Get-CsUser -Filter {ArchivingPolicy -eq "RedmondArchivingPolicy"} | Grant-CsArchivingPolicy -PolicyName "NorthAmericaArchivingPolicy"
```

Example 5 locates all the users who have been assigned the policy RedmondArchivingPolicy and then assigns each of these users a different policy: NorthAmericaArchivingPolicy.
To perform this task, the Get-CsUser cmdlet is used to return a collection of all the users who have been enabled for Skype for Business Server; the Filter parameter and the filter value {ArchivingPolicy -eq "RedmondArchivingPolicy"} limit the returned data to accounts where the ArchivingPolicy is equal to "RedmondArchivingPolicy".
The filtered collection is then piped to the Grant-CsArchivingPolicy cmdlet, which assigns the policy NorthAmericaArchivingPolicy to each user in the collection.


### -------------------------- EXAMPLE 6 -------------------------- 
```

Get-CsUser -Filter {ArchivingPolicy -eq "RedmondArchivingPolicy"} | Grant-CsArchivingPolicy -PolicyName $Null
```

Example 6 is a variation of Example 5.
This time, however, the policy RedmondArchivingPolicy is unassigned from all the users who were previously assigned that policy: calling the Grant-CsArchivingPolicy cmdlet with a PolicyName equal to $Null removes any previously assigned per-user policies.


## PARAMETERS

### -Identity
Indicates the Identity of the user account the policy should be assigned to.
User Identities can be specified by using one of four formats: 1) The user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends in the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the scope designator "tag:".
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondArchivingPolicy has a PolicyName equal to RedmondArchivingPolicy.

To remove a per-user policy that has been assigned to a user, set PolicyName to a null value:

`-PolicyName $Null`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to specify a domain controller to connect to when assigning the policy.
If this parameter is not included then the cmdlet will use the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

If present, causes the cmdlet to pass the user object (or objects) through the Windows PowerShell pipeline.
By default, the Grant-CsArchivingPolicy cmdlet does not pass objects through the pipeline.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The Grant-CsArchivingPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
The Grant-CsArchivingPolicy cmdlet does not return a value or object.
Instead, the cmdlet assigns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.IM.ImArchivingPolicy object to users or groups of users.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Get-CsArchivingPolicy](Get-CsArchivingPolicy.md)

[New-CsArchivingPolicy](New-CsArchivingPolicy.md)

[Remove-CsArchivingPolicy](Remove-CsArchivingPolicy.md)

[Set-CsArchivingPolicy](Set-CsArchivingPolicy.md)


