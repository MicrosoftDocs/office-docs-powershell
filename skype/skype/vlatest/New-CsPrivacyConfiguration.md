---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPrivacyConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new collection of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new collection of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsPrivacyConfiguration [-Identity] <XdsIdentity> [-AutoInitiateContacts <Boolean>]
 [-DisplayPublishedPhotoDefault <Boolean>] [-EnablePrivacyMode <Boolean>]
 [-PublishLocationDataDefault <Boolean>] [-Force] [-InMemory] [-Tenant <Guid>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync 2010 gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets (Get-CsPrivacyConfiguration, Set-CsPrivacyConfiguration, New-CsPrivacyConfiguration, and Remove-CsPrivacyConfiguration) enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Lync 2010 while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The New-CsPrivacyConfiguration cmdlet enables you to create new privacy configuration settings to be applied to a site or service.
(New collections cannot be created at the global scope.) Note that each individual site or service can have, at most, a single collection of privacy configuration settings: if you try to create a new collection for the Redmond site and that site already has a collection of privacy settings then your command will fail.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsPrivacyConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets (Get-CsPrivacyConfiguration, Set-CsPrivacyConfiguration, New-CsPrivacyConfiguration, and Remove-CsPrivacyConfiguration) enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Lync while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The New-CsPrivacyConfiguration cmdlet enables you to create new privacy configuration settings to be applied to a site or service.
(New collections cannot be created at the global scope.) Note that each individual site or service can have, at most, a single collection of privacy configuration settings: if you try to create a new collection for the Redmond site and that site already has a collection of privacy settings then your command will fail.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsPrivacyConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Skype for Business while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The New-CsPrivacyConfiguration cmdlet enables you to create new privacy configuration settings to be applied to a site or service.
(New collections cannot be created at the global scope.) Note that each individual site or service can have, at most, a single collection of privacy configuration settings: if you try to create a new collection for the Redmond site and that site already has a collection of privacy settings then your command will fail.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $True
```

The command shown in Example 1 creates a new collection of privacy configuration settings that will be applied to the Redmond site (-Identity site:Redmond).
The new settings enable privacy mode; this is done by adding the EnablePrivacyMode parameter and setting the parameter value to True.
Note that this command will fail if the Redmond site already has a collection of privacy settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new collection of privacy configuration settings that will be applied to the Redmond site (-Identity site:Redmond).
The new settings enable privacy mode; this is done by adding the EnablePrivacyMode parameter and setting the parameter value to True.
Note that this command will fail if the Redmond site already has a collection of privacy settings.

New-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new collection of privacy configuration settings that will be applied to the Redmond site (-Identity site:Redmond).
The new settings enable privacy mode; this is done by adding the EnablePrivacyMode parameter and setting the parameter value to True.
Note that this command will fail if the Redmond site already has a collection of privacy settings.

New-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $True

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsPrivacyConfiguration -Identity site:Redmond -InMemory
$x.EnablePrivacyMode = $True
Set-CsPrivacyConfiguration -Instance $x
```

The preceding example demonstrates how you can use the InMemory parameter to create a new collection of privacy configuration settings that initially exist only in memory.
To do this, New-CsPrivacyConfiguration is called along with the Identity and InMemory parameters; the resulting object is stored in a variable named $x.
At this point, the privacy settings exist only in memory; if you run Get-CsPrivacyConfiguration you will not see a listing for site:Redmond.

In the second command, the value of the EnablePrivacyMode property is set to True.
Finally, the third command uses Set-CsPrivacyConfiguration to transform this virtual collection of privacy settings into an actual collection of settings applied to the Redmond site.
Calling Set-CsPrivacyConfiguration is critical: if you fail to call this cmdlet then your new privacy settings will not be applied to the Redmond site, and will disappear when you end your Windows PowerShell session or delete the variable $x

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 demonstrates how you can use the InMemory parameter to create a new collection of privacy configuration settings that initially exist only in memory.
To do this, New-CsPrivacyConfiguration is called along with the Identity and InMemory parameters; the resulting object is stored in a variable named $x.
At this point, the privacy settings exist only in memory; if you run Get-CsPrivacyConfiguration you will not see a listing for site:Redmond.

In the second command, the value of the EnablePrivacyMode property is set to True.
Finally, the third command uses Set-CsPrivacyConfiguration to transform this virtual collection of privacy settings into an actual collection of settings applied to the Redmond site.
Calling Set-CsPrivacyConfiguration is critical: if you fail to call this cmdlet then your new privacy settings will not be applied to the Redmond site, and will disappear when you end your Windows PowerShell session or delete the variable $x

$x = New-CsPrivacyConfiguration -Identity site:Redmond -InMemory

$x.EnablePrivacyMode = $True

Set-CsPrivacyConfiguration -Instance $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 demonstrates how you can use the InMemory parameter to create a new collection of privacy configuration settings that initially exist only in memory.
To do this, the New-CsPrivacyConfiguration cmdlet is called along with the Identity and InMemory parameters; the resulting object is stored in a variable named $x.
At this point, the privacy settings exist only in memory; if you run the Get-CsPrivacyConfiguration cmdlet you will not see a listing for site:Redmond.

In the second command, the value of the EnablePrivacyMode property is set to True.
Finally, the third command uses the Set-CsPrivacyConfiguration cmdlet to transform this virtual collection of privacy settings into an actual collection of settings applied to the Redmond site.
Calling the Set-CsPrivacyConfiguration cmdlet is critical: if you fail to call this cmdlet then your new privacy settings will not be applied to the Redmond site, and will disappear when you end your Windows PowerShell session or delete the variable $x

$x = New-CsPrivacyConfiguration -Identity site:Redmond -InMemory

$x.EnablePrivacyMode = $True

Set-CsPrivacyConfiguration -Instance $x

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the privacy configuration settings to be created.
To create a new collection of settings at the site scope, use syntax similar to this: -Identity site:Redmond.
To create new settings at the service scope, use syntax like this: -Identity service:UserServer:atl-cs-001.litwareinc.com.
Privacy settings can only be created for the User Server service.
An error will occur if you try to apply these settings to any other service.

Note that your command will fail if privacy configuration settings already exist for the specified site or service.
Likewise, your command will fail if you attempt to create a new collection of global settings.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the privacy configuration settings to be created.
To create a new collection of settings at the site scope, use syntax similar to this:

-Identity site:Redmond

To create new settings at the service scope, use syntax like this:

-Identity service:UserServer:atl-cs-001.litwareinc.com

Privacy settings can only be created for the User Server service.
An error will occur if you try to apply these settings to any other service.

Note that your command will fail if privacy configuration settings already exist for the specified site or service.
Likewise, your command will fail if you attempt to create a new collection of global settings.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoInitiateContacts
**Below Content Applies To:** Lync Server 2010

If True, Lync 2010 will automatically add all of your team members to your Contacts list.
The default value is True.



**Below Content Applies To:** Lync Server 2013

If True, Lync will automatically add your manager and your direct reports to your Contacts list.
The default value is True.



**Below Content Applies To:** Skype for Business Server 2015

If True, Skype for Business will automatically add your manager and your direct reports to your Contacts list.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayPublishedPhotoDefault
**Below Content Applies To:** Lync Server 2010

If True, the user's photo will automatically be published in Lync 2010.
If False, the user's photo will not be available unless he or she explicitly selects the option Let others see my photo.
The default value is True.



**Below Content Applies To:** Lync Server 2013

If True, the user's photo will automatically be published in Lync.
If False, the user's photo will not be available unless he or she explicitly selects the option Let others see my photo.
The default value is True.



**Below Content Applies To:** Skype for Business Server 2015

If True, the user's photo will automatically be published in Skype for Business.
If False, the user's photo will not be available unless he or she explicitly selects the option Let others see my photo.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePrivacyMode
If True, gives users the opportunity to enable the advanced privacy mode.
In advanced privacy mode, only people on your Contacts list will be allowed to view your presence information.
If False, your presence information will be available to anyone in your organization.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishLocationDataDefault
**Below Content Applies To:** Lync Server 2010

If True, location data will automatically be published in Lync 2010.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.



**Below Content Applies To:** Lync Server 2013

If True, location data will automatically be published in Lync.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.



**Below Content Applies To:** Skype for Business Server 2015

If True, location data will automatically be published in Skype for Business.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.



```yaml
Type: Boolean
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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -Tenant
**Below Content Applies To:** Lync Server 2010

This parameter is not used with the on-premises version of Lync Server.



**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which the new privacy configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new privacy configuration settings are being created.
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
None.
New-CsPrivacyConfiguration does not accept pipelined input.

###  
None.
The New-CsPrivacyConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPrivacyConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

###  
The New-CsPrivacyConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9b7f02d7-93a5-4fa5-a74c-3fe4baf8bbfc(OCS.14).aspx)

[Get-CsPrivacyConfiguration]()

[Remove-CsPrivacyConfiguration]()

[Set-CsPrivacyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/9b7f02d7-93a5-4fa5-a74c-3fe4baf8bbfc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9b7f02d7-93a5-4fa5-a74c-3fe4baf8bbfc(OCS.16).aspx)

