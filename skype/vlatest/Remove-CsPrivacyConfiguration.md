---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPrivacyConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an existing collection of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an existing collection of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsPrivacyConfiguration [-Identity] <XdsIdentity> [-Tenant <Guid>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Microsoft Lync Server 2010 gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets (Get-CsPrivacyConfiguration, Set-CsPrivacyConfiguration, New-CsPrivacyConfiguration, and Remove-CsPrivacyConfiguration) enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings.
For example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Lync 2010 while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Remove-CsPrivacyConfiguration cmdlet provides a way for you to delete settings that have been configured at either the site or service scope; for example, if you run the cmdlet against settings configured at the site scope, those settings will be deleted and users in that site will have their privacy settings governed by the global collection.
Remove-CsPrivacyConfiguration can also be run against the global collection; however, the global collection will not be deleted.
Instead, all that properties in that collection will be reset to their default values.
For example, suppose you previously changed the EnablePrivacyMode property to True.
If you now "delete" the global collection EnablePrivacyMode will revert to its default value of False.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPrivacyConfiguration"}

Below Content Applies To: Lync Server 2013

Lync Server gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets (Get-CsPrivacyConfiguration, Set-CsPrivacyConfiguration, New-CsPrivacyConfiguration, and Remove-CsPrivacyConfiguration) enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings.
For example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Lync Server while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Remove-CsPrivacyConfiguration cmdlet provides a way for you to delete settings that have been configured at either the site or service scope; for example, if you run the cmdlet against settings configured at the site scope, those settings will be deleted and users in that site will have their privacy settings governed by the global collection.
Remove-CsPrivacyConfiguration can also be run against the global collection; however, the global collection will not be deleted.
Instead, all that properties in that collection will be reset to their default values.
For example, suppose you previously changed the EnablePrivacyMode property to True.
If you now "delete" the global collection EnablePrivacyMode will revert to its default value of False.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPrivacyConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings.
For example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Skype for Business Server 2015 while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Remove-CsPrivacyConfiguration cmdlet provides a way for you to delete settings that have been configured at either the site or service scope; for example, if you run the cmdlet against settings configured at the site scope, those settings will be deleted and users in that site will have their privacy settings governed by the global collection.
The Remove-CsPrivacyConfiguration cmdlet can also be run against the global collection; however, the global collection will not be deleted.
Instead, all that properties in that collection will be reset to their default values.
For example, suppose you previously changed the EnablePrivacyMode property to True.
If you now "delete" the global collection EnablePrivacyMode will revert to its default value of False.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsPrivacyConfiguration -Identity site:Redmond
```

The preceding command returns the privacy configuration settings assigned to the Redmond site.
When these settings are deleted, users in the Redmond site will automatically inherit the global privacy configuration settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns the privacy configuration settings assigned to the Redmond site.
When these settings are deleted, users in the Redmond site will automatically inherit the global privacy configuration settings.

Remove-CsPrivacyConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns the privacy configuration settings assigned to the Redmond site.
When these settings are deleted, users in the Redmond site will automatically inherit the global privacy configuration settings.

Remove-CsPrivacyConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPrivacyConfiguration -Filter "site:*" | Remove-CsPrivacyConfiguration
```

In Example 2, all the privacy configuration settings assigned at the site scope are deleted, To do this, the command first calls Get-CsPrivacyConfiguration along with the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site" are returned.
The filtered collection is then piped to Remove-CsPrivacyConfiguration, which removes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the privacy configuration settings assigned at the site scope are deleted, To do this, the command first calls Get-CsPrivacyConfiguration along with the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site" are returned.
The filtered collection is then piped to Remove-CsPrivacyConfiguration, which removes each item in the collection.

Get-CsPrivacyConfiguration -Filter "site:*" | Remove-CsPrivacyConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the privacy configuration settings assigned at the site scope are deleted, To do this, the command first calls the Get-CsPrivacyConfiguration cmdlet along with the Filter parameter; the filter value "site:*" ensures that only those settings that have an Identity that begins with the characters "site" are returned.
The filtered collection is then piped to the Remove-CsPrivacyConfiguration cmdlet, which removes each item in the collection.

Get-CsPrivacyConfiguration -Filter "site:*" | Remove-CsPrivacyConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Remove-CsPrivacyConfiguration
```

The command shown in Example 3 deletes all the privacy configuration settings where privacy mode has been disabled.
To carry out this task, the command first calls Get-CsPrivacyConfiguration without any parameters; that returns a collection of all the privacy configuration settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
This filtered collection is piped to Remove-CsPrivacyConfiguration which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 deletes all the privacy configuration settings where privacy mode has been disabled.
To carry out this task, the command first calls Get-CsPrivacyConfiguration without any parameters; that returns a collection of all the privacy configuration settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
This filtered collection is piped to Remove-CsPrivacyConfiguration which deletes each item in the collection.

Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Remove-CsPrivacyConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 deletes all the privacy configuration settings where privacy mode has been disabled.
To carry out this task, the command first calls the Get-CsPrivacyConfiguration cmdlet without any parameters; that returns a collection of all the privacy configuration settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
This filtered collection is piped to the Remove-CsPrivacyConfiguration cmdlet, which deletes each item in the collection.

Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Remove-CsPrivacyConfiguration

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the privacy configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To remove settings at the service level, use syntax like this: -Identity service:UserServer:atl-cs-001.litwareinc.com.

Remove-CsPrivacyConfiguration can also be run against the global collection of settings.
In that case, however, the global settings will not be deleted.
Instead, all the properties in that collection will be reset to their default values.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the privacy configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To remove settings at the service level, use syntax like this:

-Identity service:UserServer:atl-cs-001.litwareinc.com

The Remove-CsPrivacyConfiguration cmdlet can also be run against the global collection of settings.
In that case, however, the global settings will not be deleted.
Instead, all the properties in that collection will be reset to their default values.



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

### -Tenant
Below Content Applies To: Lync Server 2010

This parameter is not used with the on-premises version of Lync Server 2010.



Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which privacy configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which privacy configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.
Remove-CsPrivacyConfiguration accepts pipelined input of the privacy configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.
The Remove-CsPrivacyConfiguration cmdlet accepts pipelined input of the privacy configuration object.

## OUTPUTS

###  
None.
Instead, Remove-CsPrivacyConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

###  
None.
Instead, the Remove-CsPrivacyConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/32052c51-953d-4278-9425-306245d297ed(OCS.14).aspx)

[Get-CsPrivacyConfiguration]()

[New-CsPrivacyConfiguration]()

[Set-CsPrivacyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/32052c51-953d-4278-9425-306245d297ed(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/32052c51-953d-4278-9425-306245d297ed(OCS.16).aspx)

