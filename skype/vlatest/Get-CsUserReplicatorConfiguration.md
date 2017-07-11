---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUserReplicatorConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the User Replicator configuration settings currently employed in your organization.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Returns information about the User Replicator configuration settings currently employed in your organization.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the User Replicator configuration settings currently employed in your organization.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsUserReplicatorConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsUserReplicatorConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Although Lync Server 2010 maintains its own database of user accounts and user account data, Lync Server still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
When a user is enabled for Lync Server, however, you do not need to specify a new display name for that user.
That's because Lync Server uses the display name already stored in Active Directory Domain Services (AD DS).

Of course, user account information (including the Active Directory display name) is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and Active Directory remain in synch, Lync Server must periodically check in with Active Directory, retrieve the latest user account updates, and then modify its own user database accordingly.
This synchronization between Active Directory and Lync Server is carried out by the User Replicator.

When you install Lync Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList  property.

If you are working with Lync Online 2010 you can also use the CsUserReplicatorConfiguration cmdlets to create and manage configuration settings at the service scope.
However, with the on-premises version of Lync Server 2010 you are limited to a single collection of configuration settings assigned to the global scope.

The Get-CsUserReplicatorConfiguration cmdlet enables administrators to return information about all the User Replicator settings currently employed in their organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUserReplicatorConfiguration"}

**Below Content Applies To:** Lync Server 2013

Although Lync Server maintains its own database of user accounts and user account data, Lync Server still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
When a user is enabled for Lync Server, however, you do not need to specify a new display name for that user.
That's because Lync Server uses the display name already stored in Active Directory Domain Services (AD DS).

Of course, user account information (including the Active Directory display name) is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and Active Directory remain in synch, Lync Server must periodically check in with Active Directory, retrieve the latest user account updates, and then modify its own user database accordingly.
This synchronization between Active Directory and Lync Server is carried out by the User Replicator.

When you install Lync Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

If you are working with Lync Server you can also use the CsUserReplicatorConfiguration cmdlets to create and manage configuration settings at the service scope.
However, with the on-premises version of Lync Server you are limited to a single collection of configuration settings assigned to the global scope.

The Get-CsUserReplicatorConfiguration cmdlet enables administrators to return information about all the User Replicator settings currently employed in their organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUserReplicatorConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Although Skype for Business Server 2015 maintains its own database of user accounts and user account data, Skype for Business Server 2015 still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
When a user is enabled for Skype for Business Server 2015, however, you do not need to specify a new display name for that user.
That's because Skype for Business Server 2015 uses the display name already stored in Active Directory Domain Services.

Of course, user account information (including the Active Directory display name) is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Skype for Business Server 2015 database and Active Directory remain in synch Skype for Business Server 2015 must periodically check in with Active Directory, retrieve the latest user account updates, and then modify its own user database accordingly.
This synchronization between Active Directory and Skype for Business Server 2015 is carried out by the User Replicator.

When you install Skype for Business Server 2015 a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Skype for Business Server 2015 needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

If you are working with Skype for Business Server 2015 you can also use the CsUserReplicatorConfiguration cmdlets to create and manage configuration settings at the service scope.
However, with the on-premises version of Skype for Business Server 2015 you are limited to a single collection of configuration settings assigned to the global scope.

The Get-CsUserReplicatorConfiguration cmdlet enables administrators to return information about all the User Replicator settings currently employed in their organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsUserReplicatorConfiguration
```

The command shown in Example 1 returns information about all the User Replicator configuration settings currently in use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the User Replicator configuration settings currently in use in your organization.

Get-CsUserReplicatorConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the User Replicator configuration settings currently in use in your organization.

Get-CsUserReplicatorConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier of the User Replicator configuration settings to be returned.
To return settings at the service scope, use syntax similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".
(Note that service scope settings are available only if you are runningLync Online 2010).
To return the global settings, use this syntax: -Identity global.
If this parameter is not specified then all the User Replicator configurations settings currently in use in your organization will be returned.



**Below Content Applies To:** Lync Server 2013

Unique identifier of the User Replicator configuration settings to be returned.
To return settings at the service scope, use syntax similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".
(Note that service scope settings are available only if you are running Lync Online).
To return the global settings, use this syntax: -Identity global.
If this parameter is not specified then all the User Replicator configurations settings currently in use in your organization will be returned.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the User Replicator configuration settings to be returned.
To return settings at the service scope, use syntax similar to this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"

Note that service scope settings are available only if you are running Skype for Business Online.
To return the global settings, use this syntax:

-Identity global

If this parameter is not specified then all the User Replicator configurations settings currently in use in your organization will be returned.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to use wildcards when specifying the collection (or collections) of User Replicator configuration settings to be returned.
For example, this command returns all the settings configured at the service scope: -Filter "service:*".



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use wildcards when specifying the collection (or collections) of User Replicator configuration settings to be returned.
For example, this command returns all the settings configured at the service scope:

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
Retrieves the User Replicator configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsUserReplicatorConfiguration does not accept pipelined input.

###  
None.
The Get-CsUserReplicatorConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsUserReplicatorConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

###  
The Get-CsUserReplicatorConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7318ae92-e07b-4817-9ec1-be9c7f35aa26(OCS.14).aspx)

[New-CsUserReplicatorConfiguration]()

[Remove-CsUserReplicatorConfiguration]()

[Set-CsUserReplicatorConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/7318ae92-e07b-4817-9ec1-be9c7f35aa26(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7318ae92-e07b-4817-9ec1-be9c7f35aa26(OCS.16).aspx)

