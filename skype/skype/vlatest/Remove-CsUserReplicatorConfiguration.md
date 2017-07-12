---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsUserReplicatorConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Removes the specified collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes the specified collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsUserReplicatorConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Although Lync Server 2010 maintains its own database of user accounts and user account data, Lync Server still strongly on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
However, when a user is enabled for Lync Server you do not need to specify a new display name.
That's because Lync Server uses the display name already stored in Active Directory.

Of course, user account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and Active Directory remain in synch, Lync Server must periodically check in with Active Directory, retrieve the latest user account updates, and then modify the Lync Server user database accordingly.
This synchronization between Active Directory and Lync Server is carried out by the User Replicator.

When you install Lync Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList  property.

You can also create additional collections at the service scope, but only if you are working with Lync Online 2010.

If your needs change, you can use the Remove-CsUserReplicatorConfiguration cmdlet to remove the custom settings created at the service scope.
Note that you can also run this cmdlet against the global configuration settings.
In that case, however, the global settings will not be removed.
Instead, all the properties within the global collection will be reset to their default values.
In the case of the User Replicator, that means erasing the list of domains that must be synchronized with (thus causing the replicator to synch with all discoverable domains), and setting the replication interval cycle to 1 minute.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsUserReplicatorConfiguration"}

**Below Content Applies To:** Lync Server 2013

Although Lync Server maintains its own database of user accounts and user account data, Lync Server still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
However, when a user is enabled for Lync Server you do not need to specify a new display name.
That's because Lync Server uses the display name already stored in Active Directory.

Of course, user account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and Active Directory remain in synch, Lync Server must periodically connect to Active Directory, retrieve the latest user account updates, and then modify the Lync Server user database accordingly.
This synchronization between Active Directory and Lync Server is carried out by the User Replicator.

When you install Lync Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with and indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

You can also create additional collections at the service scope, but only if you are working with Lync Online.

If your needs change, you can use the Remove-CsUserReplicatorConfiguration cmdlet to remove the custom settings created at the service scope.
Note that you can also run this cmdlet against the global configuration settings.
In that case, however, the global settings will not be removed.
Instead, all the properties within the global collection will be reset to their default values.
In the case of the User Replicator, that means erasing the list of domains that must be synchronized with (thus causing the replicator to synch with all discoverable domains), and setting the replication interval cycle to 1 minute.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsUserReplicatorConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Although Skype for Business Server 2015 maintains its own database of user accounts and user account data, Skype for Business Server 2015 still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
However, when a user is enabled for Skype for Business Server 2015 you do not need to specify a new display name.
That's because Skype for Business Server 2015 uses the display name already stored in Active Directory.

Of course, user account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Skype for Business Server 2015 database and Active Directory remain in synch, Skype for Business Server 2015 must periodically connect to Active Directory, retrieve the latest user account updates, and then modify the Skype for Business Server 2015 user database accordingly.
This synchronization between Active Directory and Skype for Business Server 2015 is carried out by the User Replicator.

When you install Skype for Business Server 2015 global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Skype for Business Server 2015 needs to synch with and indicating how often the User Replicator checks Active Directory for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

You can also create additional collections at the service scope, but only if you are working with Skype for Business Online.

If your needs change, you can use the Remove-CsUserReplicatorConfiguration cmdlet to remove the custom settings created at the service scope.
Note that you can also run this cmdlet against the global configuration settings.
In that case, however, the global settings will not be removed.
Instead, all the properties within the global collection will be reset to their default values.
In the case of the User Replicator, that means erasing the list of domains that must be synchronized with (thus causing the replicator to synch with all discoverable domains), and setting the replication interval cycle to 1 minute.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsUserReplicatorConfiguration -Identity global
```

The preceding command resets the global User Replicator configuration settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 resets the global User Replicator configuration settings.

Remove-CsUserReplicatorConfiguration -Identity global

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 resets the global User Replicator configuration settings.

Remove-CsUserReplicatorConfiguration -Identity global

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier of the User Replicator configuration settings to be removed.
To remove settings at the service scope, use syntax similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".
(Note that you can only remove service-scoped setting if you are using Microsoft Lync Online 2010).
To reset the global settings, use this syntax: -Identity global.
You cannot use wildcards when specifying an Identity.



**Below Content Applies To:** Lync Server 2013

Unique identifier of the User Replicator configuration settings to be removed.
To remove settings at the service scope, use syntax similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".
(Note that you can only remove service-scoped setting if you are using Lync Online).
To reset the global settings, use this syntax: -Identity global.
You cannot use wildcards when specifying an Identity.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the User Replicator configuration settings to be removed.
To remove settings at the service scope, use syntax similar to this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"

Note that you can only remove service-scoped setting if you are using Skype for Business Online.
To reset the global settings, use this syntax:

-Identity global

You cannot use wildcards when specifying an Identity.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.
Remove-CsUserReplicatorConfiguration accepts pipelined input of the User Replicator configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.
The Remove-CsUserReplicatorConfiguration cmdlet accepts pipelined input of the User Replicator configuration object.

## OUTPUTS

###  
None.
Instead, Remove-CsUserReplicatorConfiguration deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

###  
None.
Instead, the Remove-CsUserReplicatorConfiguration cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/26c3a357-558f-406f-8df3-059911f771f0(OCS.14).aspx)

[Get-CsUserReplicatorConfiguration]()

[New-CsUserReplicatorConfiguration]()

[Set-CsUserReplicatorConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/26c3a357-558f-406f-8df3-059911f771f0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/26c3a357-558f-406f-8df3-059911f771f0(OCS.16).aspx)

