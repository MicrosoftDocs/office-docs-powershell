---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsUserReplicatorConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies an existing collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory Domain Services (AD DS) and then synchronizes the new information with the current user data stored by Microsoft Lync Server 2010.

Below Content Applies To: Lync Server 2013

Modifies an existing collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory Domain Services (AD DS) and then synchronizes the new information with the current user data stored by Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Modifies an existing collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory Domain Services and then synchronizes the new information with the current user data stored by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsUserReplicatorConfiguration [[-Identity] <XdsIdentity>] [-ADDomainNamingContextList <PSListModifier>]
 [-ReplicationCycleInterval <TimeSpan>] [-Force] [-WhatIf] [-Confirm] [-DomainControllerList <PSListModifier>]
 [-SkipFirstSyncAllowedDowntime <TimeSpan>] [<CommonParameters>]
```

### Instance
```
Set-CsUserReplicatorConfiguration [-Instance <PSObject>] [-ADDomainNamingContextList <PSListModifier>]
 [-ReplicationCycleInterval <TimeSpan>] [-Force] [-WhatIf] [-Confirm] [-DomainControllerList <PSListModifier>]
 [-SkipFirstSyncAllowedDowntime <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Although Lync Server 2010 maintains its own database of user accounts and user account data, Lync Server 2010 still strongly on AD DS as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such the Active Directory display name).
When a user is enabled for Lync Server, however, you do not need to specify a new display name.
That's because Lync Server uses the display name already stored in AD DS.

User account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and AD DS remain in synch, Lync Server must periodically check in with AD DS, retrieve the latest user account updates, and then modify the Lync Server user database accordingly.
This synchronization between AD DS and Lync Server is carried out by the User Replicator.

When you install Lync Server, a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with in addition to indicating how often the User Replicator checks AD DS for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList  property.

You can also create additional collections at the service scope, but only if you are working with Microsoft Lync Online 2010.

The Set-CsUserReplicatorConfiguration cmdlet enables you to modify any of the User Replicator settings currently in use in your organization.
You can use this cmdlet to add or remove domains from the list of domains the User Replicator must synchronize with, and to modify the time interval between replication cycles.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom role-based access control (RBAC) roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUserReplicatorConfiguration"}

Below Content Applies To: Lync Server 2013

Although Lync Server maintains its own database of user accounts and user account data, Lync Server still relies on AD DS as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such the Active Directory display name).
When a user is enabled for Lync Server, however, you do not need to specify a new display name.
That's because Lync Server uses the display name already stored in AD DS.

User account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Lync Server database and AD DS remain in synch, Lync Server must periodically check in with AD DS, retrieve the latest user account updates, and then modify the Lync Server user database accordingly.
This synchronization between AD DS and Lync Server is carried out by the User Replicator.

When you install Lync Server, a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Lync Server needs to synch with in addition to indicating how often the User Replicator checks AD DS for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

You can also create additional collections at the service scope, but only if you are working with Lync Online.

The Set-CsUserReplicatorConfiguration cmdlet enables you to modify any of the User Replicator settings currently in use in your organization.
You can use this cmdlet to add or remove domains from the list of domains the User Replicator must synchronize with, and to modify the time interval between replication cycles.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUserReplicatorConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom role-based access control (RBAC) roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUserReplicatorConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Although Skype for Business Server 2015 maintains its own database of user accounts and user account data, Skype for Business Server 2015 still relies on AD DS as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such the Active Directory display name).
When a user is enabled for Skype for Business Server 2015, however, you do not need to specify a new display name.
That's because Skype for Business Server 2015 uses the display name already stored in AD DS.

User account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Skype for Business Server 2015 database and AD DS remain in synch, Skype for Business Server 2015 must periodically check in with AD DS, retrieve the latest user account updates, and then modify the Skype for Business Server 2015 user database accordingly.
This synchronization between AD DS and Skype for Business Server 2015 is carried out by the User Replicator.

When you install Skype for Business Server 2015, a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Skype for Business Server 2015 needs to synch with in addition to indicating how often the User Replicator checks AD DS for user account updates.
By default, the User Replicator discovers and synchs with all available domains.
However, by using the AdDomainNamingContextList property you can restrict synchronization to a specific set of domains: the domains that appear in the AdDomainNamingContextList property.

You can also create additional collections at the service scope, but only if you are working with Skype for Business Online.

The Set-CsUserReplicatorConfiguration cmdlet enables you to modify any of the User Replicator settings currently in use in your organization.
You can use this cmdlet to add or remove domains from the list of domains the User Replicator must synchronize with, and to modify the time interval between replication cycles.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsUserReplicatorConfiguration -Identity global -ReplicationCycleInterval "00:05:00"
```

The preceding command sets the value of the ReplicationCycleInterval of the global User Replicator settings to five minutes (00 hours: 05 minutes: 00 seconds).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 sets the value of the ReplicationCycleInterval of the global User Replicator settings to five minutes (00 hours: 05 minutes: 00 seconds).

Set-CsUserReplicatorConfiguration -Identity global -ReplicationCycleInterval "00:05:00"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 sets the value of the ReplicationCycleInterval of the global User Replicator settings to five minutes (00 hours: 05 minutes: 00 seconds).

Set-CsUserReplicatorConfiguration -Identity global -ReplicationCycleInterval "00:05:00"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList $Null
```

The command shown in Example 2 clears the value of the ADDomainNamingContextList property.
This task is carried out by including the ADDomainNamingContextList parameter and setting the parameter value to null.
By setting this value to null the User Replicator will automatically discover and synchronize with all the available domains.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 clears the value of the ADDomainNamingContextList property.
This task is carried out by including the ADDomainNamingContextList parameter and setting the parameter value to null.
By setting this value to null the User Replicator will automatically discover and synchronize with all the available domains.

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList $Null

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 clears the value of the ADDomainNamingContextList property.
This task is carried out by including the ADDomainNamingContextList parameter and setting the parameter value to null.
By setting this value to null the User Replicator will automatically discover and synchronize with all the available domains.

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList $Null

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Add="dc=fabrikam,dc=com"}
```

In Example 3 an additional name is added to the ADDomainNamingContextList property of the global User Replicator settings.
To do this, the syntax @{Add=} is used, along with the distinguished name of the domain being added.
When this command is executed, fabrikam.com will be added to the list of domain names.
To configure the global settings so that only fabrikam.com is on the list use this syntax:

-ADDomainNamingContextList @{Replace="dc=fabrikam,dc=com"}

When the AdDomainNamingContextList property is set to anything but a null value, the User Replicator will only synchronize with the domains listed in the property value.
This will be the case even if there are other domains in the deployment.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3 an additional name is added to the ADDomainNamingContextList property of the global User Replicator settings.
To do this, the syntax @{Add=} is used, along with the distinguished name of the domain being added.
When this command is run, fabrikam.com will be added to the list of domain names.
To configure the global settings so that only fabrikam.com is on the list use this syntax:

-ADDomainNamingContextList @{Replace="dc=fabrikam,dc=com"}

When the AdDomainNamingContextList property is set to anything but a null value, the User Replicator will only synchronize with the domains listed in the property value.
This will be the case even if there are other domains in the deployment.

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Add="dc=fabrikam,dc=com"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3 an additional name is added to the ADDomainNamingContextList property of the global User Replicator settings.
To do this, the syntax @{Add=} is used, along with the distinguished name of the domain being added.
When this command is run, fabrikam.com will be added to the list of domain names.
To configure the global settings so that only fabrikam.com is on the list use this syntax:

-ADDomainNamingContextList @{Replace="dc=fabrikam,dc=com"}

When the AdDomainNamingContextList property is set to anything but a null value, the User Replicator will only synchronize with the domains listed in the property value.
This will be the case even if there are other domains in the deployment.

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Add="dc=fabrikam,dc=com"}

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Remove="dc=fabrikam,dc=com"}
```

Example 4 removes the domain fabrikam.com from the ADDomainNamingContextList property of the global User Replicator configuration settings.
To do this the syntax @{Remove=} is used, along with the distinguished name (DN) of the domain (dc=fabrikam,dc=com).

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 removes the domain fabrikam.com from the ADDomainNamingContextList property of the global User Replicator configuration settings.
To do this the syntax @{Remove=} is used, along with the distinguished name (DN) of the domain (dc=fabrikam,dc=com).

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Remove="dc=fabrikam,dc=com"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 removes the domain fabrikam.com from the ADDomainNamingContextList property of the global User Replicator configuration settings.
To do this the syntax @{Remove=} is used, along with the distinguished name (DN) of the domain (dc=fabrikam,dc=com).

Set-CsUserReplicatorConfiguration -Identity global -ADDomainNamingContextList @{Remove="dc=fabrikam,dc=com"}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier of the User Replicator configuration settings to be modified.
To modify the global settings, use this syntax: -Identity global.



Below Content Applies To: Skype for Business Server 2015

Unique identifier of the User Replicator configuration settings to be modified.
To modify the global settings, use this syntax:

-Identity global



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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ADDomainNamingContextList
Distinguished names of the Active Directory domains that the User Replicator must synchronize with.
For example, to add a domain to the list use syntax similar to this:

-ADDomainNamingContextList @{Add="dc=fabrikam,dc=com"}

If you set this property to a null value the User Replicator will discover and synchronize with all available domains.
If this property is not null then the User Replicator will only synchronize with the domains specified in the ADDomainNamingContextList.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationCycleInterval
Represents the amount of time that the User Replicator waits before checking for user account updates in AD DS.
The replication cycle interval can be any time value between 1 second and 23 hours, 59 minutes, and 59 seconds; the default value is 1 minute.
The interval must be expressed using the format hours:minutes:seconds.
For example, this syntax sets to time interval to one hour and 15 minutes:

-ReplicationCycleInterval 01:15:00

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -DomainControllerList
List of domain controllers to be used for user replication.
Typically the user replicator service is able to identify domain controllers by using the DsGetDcName Windows API.
Because of this, it is recommended that you consult with Microsoft support personnel before manually selecting domain controllers by using this parameter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipFirstSyncAllowedDowntime
Indicates how long Skype for Business Server 2015 should wait for user data to synchronize before marking the service as started.
The default value is 2 hours (02:00:00), meaning that, after 2 hours, the status of the replication service will changed from Pending to Started.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Set-CsUserReplicatorConfiguration accepts pipelined input of the User Replicator configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.
The Set-CsUserReplicatorConfiguration cmdlet accepts pipelined input of the User Replicator configuration object.

## OUTPUTS

###  
Set-CsUserReplicatorConfiguration does not return any objects or values.
Instead, the cmdlet modifies the global instance (the only such instance) of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

###  
The Set-CsUserReplicatorConfiguration cmdlet does not return any objects or values.
Instead, the cmdlet modifies the global instance (the only such instance) of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7164960f-8e88-4c8d-9a12-1814aa2b9047(OCS.14).aspx)

[Get-CsUserReplicatorConfiguration]()

[New-CsUserReplicatorConfiguration]()

[Remove-CsUserReplicatorConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/7164960f-8e88-4c8d-9a12-1814aa2b9047(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7164960f-8e88-4c8d-9a12-1814aa2b9047(OCS.16).aspx)

