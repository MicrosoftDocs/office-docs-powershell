---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPrivacyConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing set of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies an existing set of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Set-CsPrivacyConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-EnablePrivacyMode \<bool\>\] \[-AutoInitiateContacts \<bool\>\] \[-PublishLocationDataDefault \<bool\>\] \[-DisplayPublishedPhotoDefault \<bool\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsPrivacyConfiguration \[-Tenant \<guid\>\] \[-EnablePrivacyMode \<bool\>\] \[-AutoInitiateContacts \<bool\>\] \[-PublishLocationDataDefault \<bool\>\] \[-DisplayPublishedPhotoDefault \<bool\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

### Identity
```
Set-CsPrivacyConfiguration [[-Identity] <XdsIdentity>] [-AutoInitiateContacts <Boolean>]
 [-DisplayPublishedPhotoDefault <Boolean>] [-EnablePrivacyMode <Boolean>]
 [-PublishLocationDataDefault <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsPrivacyConfiguration [-Instance <PSObject>] [-AutoInitiateContacts <Boolean>]
 [-DisplayPublishedPhotoDefault <Boolean>] [-EnablePrivacyMode <Boolean>]
 [-PublishLocationDataDefault <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

###  (Default)
```
Set-CsPrivacyConfiguration [[-Identity] <Object>] [-AutoInitiateContacts <Object>] [-BypassDualWrite <Object>]
 [-Confirm] [-DisplayPublishedPhotoDefault <Object>] [-EnablePrivacyMode <Object>] [-Force]
 [-Instance <Object>] [-PublishLocationDataDefault <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets (Get-CsPrivacyConfiguration, Set-CsPrivacyConfiguration, New-CsPrivacyConfiguration, and Remove-CsPrivacyConfiguration) enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Microsoft Lync 2010 while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Set-CsPrivacyConfiguration cmdlet enables you to modify any of the privacy configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPrivacyConfiguration"}

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
The Set-CsPrivacyConfiguration cmdlet enables you to modify any of the privacy configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPrivacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPrivacyConfiguration"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

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
The Set-CsPrivacyConfiguration cmdlet enables you to modify any of the privacy configuration settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $False -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True
```

The command shown in Example 1 modifies three property values for the privacy configuration settings with the Identity site:Redmond.
The three property values modified are AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies three property values for the privacy configuration settings with the Identity site:Redmond.
The three property values modified are AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault.

Set-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $False -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies three property values for the privacy configuration settings with the Identity site:Redmond.
The three property values modified are AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault.

Set-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $False -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPrivacyConfiguration | Set-CsPrivacyConfiguration -EnablePrivacyMode $True
```

The preceding command enables privacy mode for all the privacy configuration settings currently in use in the organization.
To do this, the command first calls Get-CsPrivacyConfiguration without any parameters; this returns the complete collection of privacy settings.
This collection is then piped to Set-CsPrivacyConfiguration, which takes each item in the collection and sets the EnablePrivacyMode property to True.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 enables privacy mode for all the privacy configuration settings currently in use in the organization.
To do this, the command first calls Get-CsPrivacyConfiguration without any parameters; this returns the complete collection of privacy settings.
This collection is then piped to Set-CsPrivacyConfiguration, which takes each item in the collection and sets the EnablePrivacyMode property to True.

Get-CsPrivacyConfiguration | Set-CsPrivacyConfiguration -EnablePrivacyMode $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 enables privacy mode for all the privacy configuration settings currently in use in the organization.
To do this, the command first calls the Get-CsPrivacyConfiguration cmdlet without any parameters; this returns the complete collection of privacy settings.
This collection is then piped to the Set-CsPrivacyConfiguration cmdlet, which takes each item in the collection and sets the EnablePrivacyMode property to True.

Get-CsPrivacyConfiguration | Set-CsPrivacyConfiguration -EnablePrivacyMode $True

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Set-CsPrivacyConfiguration -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True
```

In Example 3, modifications are made to all the privacy configuration settings that are not currently using privacy mode.
To carry out this task, Get-CsPrivacyConfiguration is first used in order to return a collection of all the privacy configuration settings.
This collection is piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
The filtered collection is then piped to Set-CsPrivacyConfiguration, which assigns values to the AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault properties for each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, modifications are made to all the privacy configuration settings that are not currently using privacy mode.
To carry out this task, Get-CsPrivacyConfiguration is first used in order to return a collection of all the privacy configuration settings.
This collection is piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
The filtered collection is then piped to Set-CsPrivacyConfiguration, which assigns values to the AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault properties for each item in the collection.

Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Set-CsPrivacyConfiguration -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, modifications are made to all the privacy configuration settings that are not currently using privacy mode.
To carry out this task, the Get-CsPrivacyConfiguration cmdlet is first used in order to return a collection of all the privacy configuration settings.
This collection is piped to the Where-Object cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
The filtered collection is then piped to the Set-CsPrivacyConfiguration cmdlet, which assigns values to the AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault properties for each item in the collection.

Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Set-CsPrivacyConfiguration -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the privacy configuration settings to be modified.
To modify the global settings, use this syntax: -Identity global.
To modify settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To modify settings at the service level, use syntax like this: -Identity service:Redmond-UserServices-1.
Note that privacy settings can only be applied to the User Server service.
An error will occur if you try to apply these settings to any other service.

If this parameter is not specified then the global settings will be updated when you call Set-CsPrivacyConfiguration.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the privacy configuration settings to be modified.
To modify the global settings, use this syntax:

-Identity global

To modify settings configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To modify settings at the service level, use syntax like this:

-Identity service:Redmond-UserServices-1

Note that privacy settings can only be applied to the User Server service.
An error will occur if you try to apply these settings to any other service.

If this parameter is not specified then the global settings will be updated when you call the Set-CsPrivacyConfiguration cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.



**Below Content Applies To:** Skype for Business Online

{{Fill Instance Description}}



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutoInitiateContacts
**Below Content Applies To:** Lync Server 2010

If True, Lync 2010 will automatically add all of your team members to your Contacts list.
The default value is True.



**Below Content Applies To:** Lync Server 2013

If True, Lync will automatically add your manager and your direct reports to your Contacts list.
The default value is True.



**Below Content Applies To:** Skype for Business Online

{{Fill AutoInitiateContacts Description}}



**Below Content Applies To:** Skype for Business Server 2015

If True, Skype for Business will automatically add your manager and your direct reports to your Contacts list.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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



**Below Content Applies To:** Skype for Business Online

{{Fill DisplayPublishedPhotoDefault Description}}



**Below Content Applies To:** Skype for Business Server 2015

If True, the user's photo will automatically be published in Skype for Business.
If False, the user's photo will not be available unless he or she explicitly selects the option Let others see my photo.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePrivacyMode
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

If True, gives users the opportunity to enable the advanced privacy mode.
In advanced privacy mode, only people on your Contacts list will be allowed to view your presence information.
If False, your presence information will be available to anyone in your organization.
The default value is False.



**Below Content Applies To:** Skype for Business Online

{{Fill EnablePrivacyMode Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

If True, location data will automatically be published in Lync Server.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.



**Below Content Applies To:** Skype for Business Online

{{Fill PublishLocationDataDefault Description}}



**Below Content Applies To:** Skype for Business Server 2015

If True, location data will automatically be published in Skype for Business.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



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

### -Tenant
**Below Content Applies To:** Lync Server 2010

This parameter is not used with the on-premises version of Lync Server.



**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the privacy configuration settings being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Online

{{Fill Tenant Description}}



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the privacy configuration settings being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.



```yaml
Type: Guid
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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



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

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.
Set-CsPrivacyConfiguration accepts pipelined input of the privacy configuration object.

### System.Management.Automation.PSObject

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.
The Set-CsPrivacyConfiguration cmdlet accepts pipelined input of the privacy configuration object.

## OUTPUTS

###  
Set-CsPrivacyConfiguration does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

### System.Object

###  
The Set-CsPrivacyConfiguration cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/67fbd99a-0708-4e6f-8755-cb1a08d07ff3(OCS.14).aspx)

[Get-CsPrivacyConfiguration]()

[New-CsPrivacyConfiguration]()

[Remove-CsPrivacyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/67fbd99a-0708-4e6f-8755-cb1a08d07ff3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/67fbd99a-0708-4e6f-8755-cb1a08d07ff3(OCS.16).aspx)

