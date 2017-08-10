---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsConferencingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Assigns a conferencing policy at the per-user scope.
Conferencing policies determine the features and capabilities that can be used in a conference.
This includes everything from whether or not the meeting can include IP audio and video to the maximum number of people who can attend a meeting.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Assigns a conferencing policy at the per-user scope.
Conferencing policies determine the features and capabilities that can be used in a conference.
This includes everything from whether or not the meeting can include IP audio and video to the maximum number of people who can attend a meeting.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Grant-CsConferencingPolicy \[-Identity\] \<UserIdParameter\> \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

```
Grant-CsConferencingPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Conferencing is an important part of Microsoft Lync Server 2010: conferencing enables groups of users (as few as two people to as many as 250 people) to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might need to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server 2010 conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope, at the site scope, or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

When you create a site policy that policy is automatically assigned to the appropriate site at the time of creation.
This is not the case with per-user policies: per-user policies are not assigned to anyone at the time they are created.
Instead, you must use Grant-CsConferencingPolicy to explicitly assign per-user conferencing policies to a user or set of users.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsConferencingPolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Grant-CsConferencingPolicy"}

**Below Content Applies To:** Lync Server 2013

Conferencing is an important part of Lync Server: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might need to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope, at the site scope, or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

When you create a site policy that policy is automatically assigned to the appropriate site at the time of creation.
This is not the case with per-user policies: per-user policies are not assigned to anyone at the time they are created.
Instead, you must use Grant-CsConferencingPolicy to explicitly assign per-user conferencing policies to a user or set of users.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsConferencingPolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsConferencingPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Conferencing is an important part of Skype for Business Server 2015: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might need to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Skype for Business Server 2015 conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope, at the site scope, or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

When you create a site policy that policy is automatically assigned to the appropriate site at the time of creation.
This is not the case with per-user policies: per-user policies are not assigned to anyone at the time they are created.
Instead, you must use the Grant-CsConferencingPolicy cmdlet to explicitly assign per-user conferencing policies to a user or set of users.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Grant-CsConferencingPolicy -identity "Ken Myer" -PolicyName SalesConferencingPolicy
```

In Example 1, Grant-CsConferencingPolicy is used to assign the policy SalesConferencingPolicy to the user with the Identity "Ken Myer".

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Grant-CsConferencingPolicy is used to assign the policy SalesConferencingPolicy to the user with the Identity "Ken Myer".

Grant-CsConferencingPolicy -identity "Ken Myer" -PolicyName SalesConferencingPolicy

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Grant-CsConferencingPolicy cmdlet is used to assign the policy SalesConferencingPolicy to the user with the Identity "Ken Myer".

Grant-CsConferencingPolicy -identity "Ken Myer" -PolicyName SalesConferencingPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName FinanceConferencingPolicy
```

In the preceding example, the conferencing policy FinanceConferencingPolicy is assigned to all the users who have accounts in the Finance organizational unit.
To assign the same policy to all the users in a given organizational unit (OU), the Get-CsUser cmdlet is used to retrieve all the accounts in that OU.
After the user accounts have been retrieved, that information is then piped to the Grant-CsConferencingPolicy cmdlet, which assigns the FinanceConferencingPolicy policy to each user in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the conferencing policy FinanceConferencingPolicy is assigned to all the users who have accounts in the Finance organizational unit.
To assign the same policy to all the users in a given organizational unit (OU), the Get-CsUser cmdlet is used to retrieve all the accounts in that OU.
After the user accounts have been retrieved, that information is then piped to the Grant-CsConferencingPolicy cmdlet, which assigns the FinanceConferencingPolicy policy to each user in the collection.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName FinanceConferencingPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the conferencing policy FinanceConferencingPolicy is assigned to all the users who have accounts in the Finance organizational unit.
To assign the same policy to all the users in a given organizational unit (OU), the Get-CsUser cmdlet is used to retrieve all the accounts in that OU.
After the user accounts have been retrieved, that information is then piped to the Grant-CsConferencingPolicy cmdlet, which assigns the FinanceConferencingPolicy policy to each user in the collection.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName FinanceConferencingPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName $Null
```

Example 3 represents a variation of Example 2: in this case, however, any per-user conferencing policies previously assigned to the users in the Finance OU are unassigned from these users.
To do this, the command calls Grant-CsConferencingPolicy and specifies a null value ($Null) as the parameter value for the parameter PolicyName.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 represents a variation of Example 2: in this case, however, any per-user conferencing policies previously assigned to the users in the Finance OU are unassigned from these users.
To do this, the command calls Grant-CsConferencingPolicy and specifies a null value ($Null) as the parameter value for the parameter PolicyName.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName $Null

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 represents a variation of Example 2: in this case, however, any per-user conferencing policies previously assigned to the users in the Finance OU are unassigned from these users.
To do this, the command calls the Grant-CsConferencingPolicy cmdlet and specifies a null value ($Null) as the parameter value for the parameter PolicyName.

Get-CsUser -OU "ou=Finance,dc=litwareinc,dc=com" | Grant-CsConferencingPolicy -PolicyName $Null

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUser -LdapFilter "Department=Human Resources" | Grant-CsConferencingPolicy -PolicyName HRConferencingPolicy
```

In the preceding command, the policy HRConferencingPolicy is assigned to all the users who work in the Human Resource Departments.
This is done by calling Get-CsUser and the LdapFilter parameter to retrieve the appropriate set of users; the parameter value "Department=Human Resources" limits the returned items to user accounts where the Department attribute has been set to "Human Resources".
After the user accounts have been retrieved, that collection is piped to Grant-CsConferencingPolicy, which, assigns the policy HRConferencingPolicy to each user in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the policy HRConferencingPolicy is assigned to all the users who work in the Human Resource Departments.
This is done by calling Get-CsUser and the LdapFilter parameter to retrieve the appropriate set of users; the parameter value "Department=Human Resources" limits the returned items to user accounts where the Department attribute has been set to "Human Resources".
After the user accounts have been retrieved, that collection is piped to Grant-CsConferencingPolicy, which, assigns the policy HRConferencingPolicy to each user in the collection.

Get-CsUser -LdapFilter "Department=Human Resources" | Grant-CsConferencingPolicy -PolicyName HRConferencingPolicy

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the policy HRConferencingPolicy is assigned to all the users who work in the Human Resource Departments.
This is done by calling the Get-CsUser cmdlet and the LdapFilter parameter to retrieve the appropriate set of users; the parameter value "Department=Human Resources" limits the returned items to user accounts where the Department attribute has been set to "Human Resources".
After the user accounts have been retrieved, that collection is piped to the Grant-CsConferencingPolicy cmdlet, which, assigns the policy HRConferencingPolicy to each user in the collection.

Get-CsUser -LdapFilter "Department=Human Resources" | Grant-CsConferencingPolicy -PolicyName HRConferencingPolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Indicates the Identity of the user account the policy should be assigned to.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). 
User Identities can also be referenced by using the user's Active Directory distinguished name.

Note that you can use the asterisk (*) wildcard character when specifying the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates the Identity of the user account the policy should be assigned to.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

Note that you can use the asterisk (*) wildcard character when specifying the user Identity.
For example, the Identity "* Smith" returns all the users with a display name that ends with the string value " Smith".



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



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
**Below Content Applies To:** Lync Server 2010

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondConferencingPolicy has a PolicyName equal to  RedmondConferencingPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName parameter to $Null.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondConferencingPolicy has a PolicyName equal to RedmondConferencingPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName parameter to $Null.



**Below Content Applies To:** Skype for Business Online

{{Fill PolicyName Description}}



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified then Grant-CsConferencingPolicy will contact the first available domain controller.



**Below Content Applies To:** Skype for Business Online

{{Fill DomainController Description}}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified then the Grant-CsConferencingPolicy cmdlet will contact the first available domain controller.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsConferencingPolicy cmdlet does not pass objects through the pipeline.



**Below Content Applies To:** Skype for Business Online

{{Fill PassThru Description}}



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Grant-CsConferencingPolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

### Microsoft.Rtc.Management.AD.UserIdParameter

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Grant-CsConferencingPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsConferencingPolicy returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

### System.Object

###  
By default, the Grant-CsConferencingPolicy cmdlet returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/43c63a01-5072-45f0-89ee-8c3ae0cd9035(OCS.14).aspx)

[Get-CsConferencingPolicy]()

[New-CsConferencingPolicy]()

[Remove-CsConferencingPolicy]()

[Set-CsConferencingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/43c63a01-5072-45f0-89ee-8c3ae0cd9035(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/43c63a01-5072-45f0-89ee-8c3ae0cd9035(OCS.16).aspx)

