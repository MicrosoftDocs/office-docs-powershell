---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsClientPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Assigns a client policy to a user or a group of users.
Among other things, client policies help determine the features of Microsoft Lync 2010 that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.

**Below Content Applies To:** Lync Server 2013

Assigns a client policy to a user or a group of users.
Among other things, client policies help determine the features of Lync Server that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Assigns a client policy to a user or a group of users.
Among other things, client policies help determine the features of Skype for Business that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.

**Below Content Applies To:** Skype for Business Server 2015

Assigns a client policy to a user or a group of users.
Among other things, client policies help determine the features of Skype for Business Server 2015 that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsClientPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In Lync Server 2010, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server 2010.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis; that makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server 2010 over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server 2010 uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server 2010 policies, can readily be targeted towards selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
In order to assign per-user policies to users, you must use the Grant-CsClientPolicy cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsClientPolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Grant-CsClientPolicy"}

**Below Content Applies To:** Lync Server 2013

In Lync Server, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis; that makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
In order to assign per-user policies to users, you must use the Grant-CsClientPolicy cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsClientPolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsClientPolicy"}

**Below Content Applies To:** Skype for Business Online

Skype for Business Online uses client policies to help determine the features and capabilities that are available to users.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

**Below Content Applies To:** Skype for Business Server 2015

Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business Server 2015 policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
In order to assign per-user policies to users, you must use the Grant-CsClientPolicy cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName SalesPolicy
```

In the preceding example, the client policy SalesPolicy is assigned to the user with the Identity Ken Myer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the client policy SalesPolicy is assigned to the user with the Identity Ken Myer.

Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName SalesPolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Online)
```

```

In Example 1, the client policy SalesPolicy is assigned to the user with the Identity Ken Myer.

Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName SalesPolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the client policy SalesPolicy is assigned to the user with the Identity Ken Myer.

Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName SalesPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "Department=Sales" | Grant-CsClientPolicy -PolicyName SalesPolicy
```

In Example 2, all the users who belong to the Sales department are assigned the SalesPolicy client policy.
The command first uses Get-CsUser and the LdapFilter parameter to return a collection of all the users who are members of the Sales department.
This collection of users is then piped to Grant-CsClientPolicy, which assigns the policy SalesPolicy to each user in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the users who belong to the Sales department are assigned the SalesPolicy client policy.
The command first uses Get-CsUser and the LdapFilter parameter to return a collection of all the users who are members of the Sales department.
This collection of users is then piped to Grant-CsClientPolicy, which assigns the policy SalesPolicy to each user in the collection.

Get-CsUser -LDAPFilter "Department=Sales" | Grant-CsClientPolicy -PolicyName SalesPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Online)
```

```

In Example 2, all the users who belong to the Sales department are assigned the SalesPolicy client policy.
The command first uses the Get-CsOnlineUser cmdlet and the LdapFilter parameter to return a collection of all the users who are members of the Sales department.
This collection of users is then piped to the Grant-CsClientPolicy cmdlet, which assigns the policy SalesPolicy to each user in the collection.

Get-CsOnlineUser -LDAPFilter "Department=Sales" | Grant-CsClientPolicy -PolicyName SalesPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the users who belong to the Sales department are assigned the SalesPolicy client policy.
The command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who are members of the Sales department.
This collection of users is then piped to the Grant-CsClientPolicy cmdlet, which assigns the policy SalesPolicy to each user in the collection.

Get-CsUser -LDAPFilter "Department=Sales" | Grant-CsClientPolicy -PolicyName SalesPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "(&(Title=Accountant)(l=Redmond))" | Grant-CsClientPolicy -PolicyName RedmondAccountingPolicy
```

In Example 3, the client policy RedmondAccountingPolicy is assigned to all the users who meet two criteria: 1) the user must have the job title Accountant; and, 2) the user must work in the city of Redmond.
To do this, the command first uses Get-CsUser and the LdapFilter parameter to return a collection of all the users who work in Redmond and have the job title Accountant.
The filter value "(&(Title=Accountant)(l=Redmond))" limits the returned data to users who have the job title Accountant (Title=Accountant) and (&) who work in Redmond (l=Redmond).
(The "l" is a lowercase L, and represents the user's locality.)

The resulting collection is then piped to Grant-CsClientPolicy, which assigns the policy RedmondAccountingPolicy to each user in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the client policy RedmondAccountingPolicy is assigned to all the users who meet two criteria: 1) the user must have the job title Accountant; and, 2) the user must work in the city of Redmond.
To do this, the command first uses Get-CsUser and the LdapFilter parameter to return a collection of all the users who work in Redmond and have the job title Accountant.
The filter value "(&(Title=Accountant)(l=Redmond))" limits the returned data to users who have the job title Accountant (Title=Accountant) and (&) who work in Redmond (l=Redmond).
(The "l" is a lowercase L, and represents the user's locality.)

The resulting collection is then piped to Grant-CsClientPolicy, which assigns the policy RedmondAccountingPolicy to each user in the collection.

Get-CsUser -LDAPFilter "(&(Title=Accountant)(l=Redmond))" | Grant-CsClientPolicy -PolicyName RedmondAccountingPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Online)
```

```

In Example 3, the client policy RedmondAccountingPolicy is assigned to all the users who meet two criteria: 1) the user must have the job title Accountant; and, 2) the user must work in the city of Redmond.
To do this, the command first uses the Get-CsOnlineUser cmdlet and the LdapFilter parameter to return a collection of all the users who work in Redmond and have the job title Accountant.
The filter value "(&(Title=Accountant)(l=Redmond))" limits the returned data to users who have the job title Accountant (Title=Accountant) and (&) who work in Redmond (l=Redmond).
(The "l" is a lowercase L, and represents the user's locality.)

The resulting collection is then piped to the Grant-CsClientPolicy cmdlet, which assigns the policy RedmondAccountingPolicy to each user in the collection.

Get-CsOnlineUser -LDAPFilter "(&(Title=Accountant)(l=Redmond))" | Grant-CsClientPolicy -PolicyName RedmondAccountingPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the client policy RedmondAccountingPolicy is assigned to all the users who meet two criteria: 1) the user must have the job title Accountant; and, 2) the user must work in the city of Redmond.
To do this, the command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who work in Redmond and have the job title Accountant.
The filter value "(&(Title=Accountant)(l=Redmond))" limits the returned data to users who have the job title Accountant (Title=Accountant) and (&) who work in Redmond (l=Redmond).
(The "l" is a lowercase L, and represents the user's locality.)

The resulting collection is then piped to the Grant-CsClientPolicy cmdlet, which assigns the policy RedmondAccountingPolicy to each user in the collection.

Get-CsUser -LDAPFilter "(&(Title=Accountant)(l=Redmond))" | Grant-CsClientPolicy -PolicyName RedmondAccountingPolicy

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "(|(Title=Accountant)(Title=Senior Accountant))" | Grant-CsClientPolicy -PolicyName AccountingPolicy
```

The preceding command assigns the policy AccountingPolicy to all the users who meet one of two criteria: either the user has the job title Accountant or the user has the job title Senior Accountant.
To carry out this task, Get-CsUser and the LdapFilter parameter are used to return a collection of users with the job title Accountant or Senior Accountant.
The filter value "(|(Title=Accountant)(Title=Senior Accountant))" limits the returned data to users with the job title Accountant (Title=Accountant) or (|) users with the job title Senior Accountant (Title=Senior Accountant).
This filtered collection is then piped to Grant-CsClientPolicy, which assigns the client policy AccountingPolicy to each user in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 assigns the policy AccountingPolicy to all the users who meet one of two criteria: either the user has the job title Accountant or the user has the job title Senior Accountant.
To carry out this task, Get-CsUser and the LdapFilter parameter are used to return a collection of users with the job title Accountant or Senior Accountant.
The filter value "(|(Title=Accountant)(Title=Senior Accountant))" limits the returned data to users with the job title Accountant (Title=Accountant) or (|) users with the job title Senior Accountant (Title=Senior Accountant).
This filtered collection is then piped to Grant-CsClientPolicy, which assigns the client policy AccountingPolicy to each user in the collection.

Get-CsUser -LdapFilter "(|(Title=Accountant)(Title=Senior Accountant))" | Grant-CsClientPolicy -PolicyName AccountingPolicy

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Online)
```

```

Example 4 assigns the policy AccountingPolicy to all the users who meet one of two criteria: either the user has the job title Accountant or the user has the job title Senior Accountant.
To carry out this task, the Get-CsOnlineUser cmdlet and the LdapFilter parameter are used to return a collection of users with the job title Accountant or Senior Accountant.
The filter value "(|(Title=Accountant)(Title=Senior Accountant))" limits the returned data to users with the job title Accountant (Title=Accountant) or (|) users with the job title Senior Accountant (Title=Senior Accountant).
This filtered collection is then piped to the Grant-CsClientPolicy cmdlet, which assigns the client policy AccountingPolicy to each user in the collection.

Get-CsOnlineUser -LdapFilter "(|(Title=Accountant)(Title=Senior Accountant))" | Grant-CsClientPolicy -PolicyName AccountingPolicy

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 assigns the policy AccountingPolicy to all the users who meet one of two criteria: either the user has the job title Accountant or the user has the job title Senior Accountant.
To carry out this task, the Get-CsUser cmdlet and the LdapFilter parameter are used to return a collection of users with the job title Accountant or Senior Accountant.
The filter value "(|(Title=Accountant)(Title=Senior Accountant))" limits the returned data to users with the job title Accountant (Title=Accountant) or (|) users with the job title Senior Accountant (Title=Senior Accountant).
This filtered collection is then piped to the Grant-CsClientPolicy cmdlet, which assigns the client policy AccountingPolicy to each user in the collection.

Get-CsUser -LdapFilter "(|(Title=Accountant)(Title=Senior Accountant))" | Grant-CsClientPolicy -PolicyName AccountingPolicy

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsClientPolicy -PolicyName AtlantaBranchPolicy
```

In Example 5 all the users with accounts on the Registrar pool atl-cs-001.litwareinc.com are assigned the client policy AtlantaBranchPolicy.
To do this, Get-CsUser is first called to return the appropriate user accounts; the Filter parameter and the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com"} ensure that only user accounts homed on the Registrar pool atl-cs-001.litwareinc.com will be returned.
This collection is then piped to Grant-CsClientPolicy, which assigns each user the client policy AtlantaBranchPolicy.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5 all the users with accounts on the Registrar pool atl-cs-001.litwareinc.com are assigned the client policy AtlantaBranchPolicy.
To do this, Get-CsUser is first called to return the appropriate user accounts; the Filter parameter and the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com"} ensure that only user accounts homed on the Registrar pool atl-cs-001.litwareinc.com will be returned.
This collection is then piped to Grant-CsClientPolicy, which assigns each user the client policy AtlantaBranchPolicy.

Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsClientPolicy -PolicyName AtlantaBranchPolicy

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5 all the users with accounts on the Registrar pool atl-cs-001.litwareinc.com are assigned the client policy AtlantaBranchPolicy.
To do this, the Get-CsUser cmdlet is first called to return the appropriate user accounts; the Filter parameter and the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com"} ensure that only user accounts homed on the Registrar pool atl-cs-001.litwareinc.com will be returned.
This collection is then piped to the Grant-CsClientPolicy cmdlet, which assigns each user the client policy AtlantaBranchPolicy.

Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Grant-CsClientPolicy -PolicyName AtlantaBranchPolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates the Identity of the user account the policy should be assigned to.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
User Identities can also be referenced by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends in the string value " Smith".



**Below Content Applies To:** Skype for Business Online

Indicates the Identity of the user account the policy should be assigned to.
User Identities can be specified by using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).



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
The PolicyName is simply the policy Identity minus the policy scope ("tag:").
For example, a policy that has the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondConferencingPolicy has a PolicyName equal to  RedmondConferencingPolicy.

If you set PolicyName to a null value, then the command will unassign any per-user policy assigned to the user.
For example:

Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName $Null



**Below Content Applies To:** Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope ("tag:").
For example, a policy that has the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondConferencingPolicy has a PolicyName equal to RedmondConferencingPolicy.

If you set PolicyName to a null value, then the command will unassign any per-user policy assigned to the user.
For example:

Grant-CsClientPolicy -Identity "Ken Myer" -PolicyName $Null



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to specify a domain controller to connect to when assigning the policy.
If this parameter is not included then the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Online

This parameter is not used with Skype for Business Online.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If present, causes the cmdlet to pass the user object (or objects) through the Windows PowerShell pipeline.
By default, Grant-CsClientPolicy does not pass objects through the pipeline.



**Below Content Applies To:** Skype for Business Online, Skype for Business Server 2015

If present, causes the cmdlet to pass the user object (or objects) through the Windows PowerShell pipeline.
By default, the Grant-CsClientPolicy cmdlet does not pass objects through the pipeline.



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
Globally unique identifier (GUID) of the tenant account whose hybrid configuration settings are being returned.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

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
Grant-CsClientPolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Grant-CsClientPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsClientPolicy returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

###  
By default, the Grant-CsClientPolicy cmdlet returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c09d743d-cf2c-4622-b00c-cc815852e4a6(OCS.14).aspx)

[Get-CsClientPolicy]()

[New-CsClientPolicy]()

[Remove-CsClientPolicy]()

[Set-CsClientPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/c09d743d-cf2c-4622-b00c-cc815852e4a6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/aba83aca-9b49-44e9-b5fb-385d1acdd420(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c09d743d-cf2c-4622-b00c-cc815852e4a6(OCS.16).aspx)

