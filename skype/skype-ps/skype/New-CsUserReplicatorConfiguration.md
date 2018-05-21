---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsUserReplicatorConfiguration
schema: 2.0.0
---

# New-CsUserReplicatorConfiguration

## SYNOPSIS
Creates a new collection of User Replicator configuration settings.
The User Replicator periodically retrieves up-to-date user account information from Active Directory and then synchronizes the new information with the current user data stored by Skype for Business Server.
This cmdlet is designed for use with Skype for Business Online and will not work with the on-premises version of Skype for Business Server.


## SYNTAX

```
New-CsUserReplicatorConfiguration [-Identity] <XdsIdentity> [-ADDomainNamingContextList <PSListModifier>]
 [-ReplicationCycleInterval <TimeSpan>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-SkipFirstSyncAllowedDowntime <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION
Although Skype for Business Server maintains its own database of user accounts and user account data, Skype for Business Server still relies on Active Directory as the ultimate source for user information.
For example, when a new Active Directory user account is created, you must supply basic information about the user account (such as the Active Directory display name).
When a user is enabled for Skype for Business Server, however, you do not need to specify a new display name.
That's because Skype for Business Server uses the display name already stored in Active Directory.

User account information, including the Active Directory display name, is subject to change over time.
For example, a user who gets married might change her last name and, in turn, need to change her display name as well.
In order to ensure that the Skype for Business Server database and Active Directory remain in synch, Skype for Business Server must periodically check in with Active Directory, retrieve the latest user account updates, and then modify the Skype for Business Server user database accordingly.
This synchronization between Active Directory and Skype for Business Server is carried out by the User Replicator.

When you install Skype for Business Server a global set of User Replicator configuration settings is created for you.
By default, these settings are used to manage the User Replicator on an organization-wide basis.
Management of the User Replicator consists of identifying the domains that Skype for Business Server needs to synch with as well as indicating how often the User Replicator checks Active Directory for user account updates.
You can also create additional collections at the service scope, but only if you are working with Skype for Business Online.

New User Replicator configurations settings are created using the `New-CsUserReplicatorConfiguration` cmdlet.
Note that these settings can only be created at the service scope and only for Skype for Business Online.
You cannot create new User Replicator settings for the on-premises version of Skype for Business Server.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsUserReplicatorConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"
```

The command shown in Example 1 creates a new collection of User Replicator configuration settings for the service Registrar:atl-cs-001.litwareinc.com.
Because no additional parameters are specified, the new collection will use the default user replicator values.


### -------------------------- Example 2 ------------------------
```
New-CsUserReplicatorConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com" -ADDomainNamingContextList @{Add="dc=fabrikam,dc=com","dc=contoso.com"}
```

Example 2 also creates a new collection of user replicator configuration settings for the service Registrar:atl-cs-001.litwareinc.com.
In this case, however, the ADDomainNamingContextList is added, along with the distinguished names of the two domains to synchronize with: fabrikam.com and contoso.com.
This new collection of user replicator configuration settings will only configure with those two domains, even if other domains are available.


## PARAMETERS

### -Identity
Unique identifier of the User Replicator configuration settings to be created.
Settings can only be created at the service scope and only for the Registrar service.
That means that new settings must have an Identity similar to this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

Note that this applies only to Skype for Business Online.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ADDomainNamingContextList
Distinguished names of the Active Directory domains that the User Replicator must synchronize with.
For example, to add a domain to the list use syntax similar to this:

`-ADDomainNamingContextList @{Add="dc=fabrikam,dc=com"}`

You can add more than one domain name when calling the `New-CsUserReplicatorConfiguration` cmdlet.
To do this, simply separate the domain names by using a comma:

`-ADDomainNamingContextList @{Add="dc=fabrikam,dc=com","dc=contoso,dc=com"}`

If you set this property to a null value the user replicator will discover and synchronize with all available domains.
If this property is not null then the replicator will only synchronize with the domains specified in the ADDomainNamingContextList.


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationCycleInterval
Represents the amount of time that the User Replicator waits before checking for user account updates in Active Directory.
The replication cycle interval can be any time value between 1 second and 23 hours, 59 minutes and 59 seconds; the default value is 1 minute.
The interval must be expressed using the format hours:minutes:seconds.
For example, this syntax sets to time interval to one hour and 15 minutes:

`-ReplicationCycleInterval 01:15:00`


```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.


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

### -SkipFirstSyncAllowedDowntime
Indicates how long Skype for Business Server should wait for user data to synchronize before marking the service as started.
The default value is 2 hours (02:00:00), meaning that, after 2 hours, the status of the replication service will changed from Pending to Started.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `New-CsUserReplicatorConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsUserReplicatorConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserReplicator.UserReplicatorConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsUserReplicatorConfiguration](Get-CsUserReplicatorConfiguration.md)

[Remove-CsUserReplicatorConfiguration](Remove-CsUserReplicatorConfiguration.md)

[Set-CsUserReplicatorConfiguration](Set-CsUserReplicatorConfiguration.md)

