---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUserServicesConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the User Services configuration settings in use in your organization.
The User Services service helps maintain presence information and manage conferencing.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about the User Services configuration settings in use in your organization.
The User Services service helps maintain presence information and manage conferencing.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsUserServicesConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsUserServicesConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Microsoft Lync Server 2010 relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Get-CsUserServicesConfiguration cmdlet provides a way for administrators to retrieve information about any (or all) of the User Services configuration settings currently in use.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserServicesConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUserServicesConfiguration"}

Below Content Applies To: Lync Server 2013

Lync Server relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Get-CsUserServicesConfiguration cmdlet provides a way for administrators to retrieve information about any (or all) of the User Services configuration settings currently in use.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserServicesConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUserServicesConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Get-CsUserServicesConfiguration cmdlet provides a way for administrators to retrieve information about any (or all) of the User Services configuration settings currently in use.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsUserServicesConfiguration
```

The command shown in Example 1 returns a collection of all the User Services configuration settings currently in use in the organization.
This is achieved by calling Get-CsUserServicesConfiguration without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the User Services configuration settings currently in use in the organization.
This is achieved by calling Get-CsUserServicesConfiguration without any additional parameters.

Get-CsUserServicesConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the User Services configuration settings currently in use in the organization.
This is achieved by calling the Get-CsUserServicesConfiguration cmdlet without any additional parameters.

Get-CsUserServicesConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUserServicesConfiguration -Identity site:Redmond
```

In Example 2, only one collection of User Services configuration settings is returned: the collection with the Identity site:Redmond.
Because identities must be unique, this command can never return more than one item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, only one collection of User Services configuration settings is returned: the collection with the Identity site:Redmond.
Because identities must be unique, this command can never return more than one item.

Get-CsUserServicesConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, only one collection of User Services configuration settings is returned: the collection with the Identity site:Redmond.
Because identities must be unique, this command can never return more than one item.

Get-CsUserServicesConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUserServicesConfiguration -Filter "service:*"
```

Example 3 returns a collection of all the User Services configuration settings that have been applied at the service scope.
This is done by calling Get-CsUserServicesConfiguration along with the -Filter parameter; the filter value "service:*" limits the returned data to settings where the Identity begins with the characters "service:".
By definition, those are settings configured at the service scope.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns a collection of all the User Services configuration settings that have been applied at the service scope.
This is done by calling Get-CsUserServicesConfiguration along with the -Filter parameter; the filter value "service:*" limits the returned data to settings where the Identity begins with the characters "service:".
By definition, those are settings configured at the service scope.

Get-CsUserServicesConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns a collection of all the User Services configuration settings that have been applied at the service scope.
This is done by calling the Get-CsUserServicesConfiguration cmdlet along with the -Filter parameter; the filter value "service:*" limits the returned data to settings where the Identity begins with the characters "service:".
By definition, those are settings configured at the service scope.

Get-CsUserServicesConfiguration -Filter "service:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250}
```

The preceding command returns all the User Services configuration settings that allow users to have more than 250 contacts.
To do this, the command first calls Get-CsUserServicesConfiguration without any additional parameters in order to return a collection of all the User Services configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the MaxContacts property is greater than 250.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the User Services configuration settings that allow users to have more than 250 contacts.
To do this, the command first calls Get-CsUserServicesConfiguration without any additional parameters in order to return a collection of all the User Services configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the MaxContacts property is greater than 250.

Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the User Services configuration settings that allow users to have more than 250 contacts.
To do this, the command first calls the Get-CsUserServicesConfiguration cmdlet without any additional parameters in order to return a collection of all the User Services configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the MaxContacts property is greater than 250.

Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsUserServicesConfiguration | Where-Object {$_.AnonymousUserGracePeriod -gt "00:10:00"}
```

In Example 5, information is reported for those User Services configuration settings where the anonymous user grace period is longer than 10 minutes.
To carry out this task, the command first calls Get-CsUserServicesConfiguration without any additional parameters; this returns a collection of all the User Services configuration settings being used in the organization.
The returned collection is then piped to Where-Object, which selects only the settings where the AnonymousUserGracePeriod property is greater than 10 minutes (00 hours: 10 minutes: 00 seconds).

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, information is reported for those User Services configuration settings where the anonymous user grace period is longer than 10 minutes.
To carry out this task, the command first calls Get-CsUserServicesConfiguration without any additional parameters; this returns a collection of all the User Services configuration settings being used in the organization.
The returned collection is then piped to Where-Object, which selects only the settings where the AnonymousUserGracePeriod property is greater than 10 minutes (00 hours: 10 minutes: 00 seconds).

Get-CsUserServicesConfiguration | Where-Object {$_.AnonymousUserGracePeriod -gt "00:10:00"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, information is reported for those User Services configuration settings where the anonymous user grace period is longer than 10 minutes.
To carry out this task, the command first calls the Get-CsUserServicesConfiguration cmdlet without any additional parameters; this returns a collection of all the User Services configuration settings being used in the organization.
The returned collection is then piped to the Where-Object cmdlet, which selects only the settings where the AnonymousUserGracePeriod property is greater than 10 minutes (00 hours: 10 minutes: 00 seconds).

Get-CsUserServicesConfiguration | Where-Object {$_.AnonymousUserGracePeriod -gt "00:10:00"}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the User Services configuration settings to be returned.
To return the global settings, use this syntax: -Identity global.
To return settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To return settings at the service level, use syntax like this: -Identity service:UserServer:atl-cs-001.litwareinc.com.

If this parameter is omitted then Get-CsUserServicesConfiguration returns all the User Services configuration settings currently in use in your organization.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the User Services configuration settings to be returned.
To return the global settings, use this syntax:.

-Identity global

To return settings configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To return settings at the service level, use syntax like this:

-Identity service:UserServer:atl-cs-001.litwareinc.com

If this parameter is omitted then the Get-CsUserServicesConfiguration cmdlet returns all the User Services configuration settings currently in use in your organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcards when retrieving one or more collections of User Services configuration settings.
For example, to return all the settings configured at the site scope, use this syntax: -Filter "site:*".
To return all the settings configured at the service scope, use this syntax: -Filter "service:*".



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards when retrieving one or more collections of User Services configuration settings.
For example, to return all the settings configured at the site scope, use this syntax:

-Filter "site:*"

To return all the settings configured at the service scope, use this syntax:

-Filter "service:*"



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Below Content Applies To: Lync Server 2010

Retrieves the User Services configuration data from the local replica of the  Central Management store rather than from the Central Management store itself.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves the User Services configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsUserServicesConfiguration does not accept pipelined input.

###  
None.
The Get-CsUserServicesConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsUserServicesConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

###  
The Get-CsUserServicesConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/07884f7a-d9f7-4a3f-a5ef-7f4ba71c2769(OCS.14).aspx)

[New-CsUserServicesConfiguration]()

[Remove-CsUserServicesConfiguration]()

[Set-CsUserServicesConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/07884f7a-d9f7-4a3f-a5ef-7f4ba71c2769(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/07884f7a-d9f7-4a3f-a5ef-7f4ba71c2769(OCS.16).aspx)

