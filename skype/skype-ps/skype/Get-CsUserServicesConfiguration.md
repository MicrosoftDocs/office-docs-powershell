---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsUserServicesConfiguration
schema: 2.0.0
---

# Get-CsUserServicesConfiguration

## SYNOPSIS

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

Skype for Business Server relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Get-CsUserServicesConfiguration cmdlet provides a way for administrators to retrieve information about any (or all) of the User Services configuration settings currently in use.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsUserServicesConfiguration
```

The command shown in Example 1 returns a collection of all the User Services configuration settings currently in use in the organization.
This is achieved by calling the Get-CsUserServicesConfiguration cmdlet without any additional parameters.


### -------------------------- Example 2 -------------------------- 
```
Get-CsUserServicesConfiguration -Identity site:Redmond
```

In Example 2, only one collection of User Services configuration settings is returned: the collection with the Identity site:Redmond.
Because identities must be unique, this command can never return more than one item.

### -------------------------- Example 3 -------------------------- 
```
Get-CsUserServicesConfiguration -Filter "service:*"
```

Example 3 returns a collection of all the User Services configuration settings that have been applied at the service scope.
This is done by calling the Get-CsUserServicesConfiguration cmdlet along with the -Filter parameter; the filter value "service:*" limits the returned data to settings where the Identity begins with the characters "service:".
By definition, those are settings configured at the service scope.


### -------------------------- Example 4 -------------------------- 
```
Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250}
```

Example 4 returns all the User Services configuration settings that allow users to have more than 250 contacts.
To do this, the command first calls the Get-CsUserServicesConfiguration cmdlet without any additional parameters in order to return a collection of all the User Services configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the MaxContacts property is greater than 250.


### -------------------------- Example 5 -------------------------- 
```
Get-CsUserServicesConfiguration | Where-Object {$_.AnonymousUserGracePeriod -gt "00:10:00"}
```

In Example 5, information is reported for those User Services configuration settings where the anonymous user grace period is longer than 10 minutes.
To carry out this task, the command first calls the Get-CsUserServicesConfiguration cmdlet without any additional parameters; this returns a collection of all the User Services configuration settings being used in the organization.
The returned collection is then piped to the Where-Object cmdlet, which selects only the settings where the AnonymousUserGracePeriod property is greater than 10 minutes (00 hours: 10 minutes: 00 seconds).


## PARAMETERS

### -Identity

Unique identifier for the User Services configuration settings to be returned.
To return the global settings, use this syntax:.

`-Identity global`

To return settings configured at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To return settings at the service level, use syntax like this:

`-Identity service:UserServer:atl-cs-001.litwareinc.com`

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

Enables you to use wildcards when retrieving one or more collections of User Services configuration settings.
For example, to return all the settings configured at the site scope, use this syntax:

`-Filter "site:*"`

To return all the settings configured at the service scope, use this syntax:

`-Filter "service:*"`



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
The Get-CsUserServicesConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsUserServicesConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

## NOTES

## RELATED LINKS


[New-CsUserServicesConfiguration](New-CsUserServicesConfiguration.md)

[Remove-CsUserServicesConfiguration](Remove-CsUserServicesConfiguration.md)

[Set-CsUserServicesConfiguration](Set-CsUserServicesConfiguration.md)
