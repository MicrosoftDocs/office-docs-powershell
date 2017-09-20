---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsUserReplicatorConfiguration
schema: 2.0.0
---

# Get-CsUserReplicatorConfiguration

## SYNOPSIS

Returns information about the User Replicator configuration settings currently employed in your organization.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Skype for Business Server.
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

Although Skype for Business Server maintains its own database of user accounts and user account data, Skype for Business Server still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
When a user is enabled for Skype for Business Server, however, you do not need to specify a new display name for that user.
That's because Skype for Business Server uses the display name already stored in Active Directory Domain Services.

Of course, user account information (including the Active Directory display name) is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Skype for Business Server database and Active Directory remain in synch Skype for Business Server must periodically check in with Active Directory, retrieve the latest user account updates, and then modify its own user database accordingly.
This synchronization between Active Directory and Skype for Business Server is carried out by the User Replicator.

When you install Skype for Business Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Skype for Business Server needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

If you are working with Skype for Business Server you can also use the CsUserReplicatorConfiguration cmdlets to create and manage configuration settings at the service scope.
However, with the on-premises version of Skype for Business Server you are limited to a single collection of configuration settings assigned to the global scope.

The Get-CsUserReplicatorConfiguration cmdlet enables administrators to return information about all the User Replicator settings currently employed in their organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsUserReplicatorConfiguration
```

The command shown in Example 1 returns information about all the User Replicator configuration settings currently in use in your organization.



## PARAMETERS

### -Identity

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
The Get-CsUserReplicatorConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsUserReplicatorConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

## NOTES

## RELATED LINKS


[New-CsUserReplicatorConfiguration]()

[Remove-CsUserReplicatorConfiguration]()

[Set-CsUserReplicatorConfiguration]()