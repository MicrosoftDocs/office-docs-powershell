---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csmobilitypolicy
schema: 2.0.0
title: Set-CsMobilityPolicy
---

# Set-CsMobilityPolicy

## SYNOPSIS
Modifies an existing mobility policy.
Mobility policies determine whether or not a user can use Skype for Business Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving calls.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.


## SYNTAX

### Identity (Default)
```
Set-CsMobilityPolicy [-Tenant <Guid>] [-Description <String>] [-EnableOutsideVoice <Boolean>]
 [-EnableMobility <Boolean>] [-EnableIPAudioVideo <Boolean>] [-RequireWIFIForIPVideo <Boolean>]
 [-AllowCustomerExperienceImprovementProgram <Boolean>] [-RequireWiFiForSharing <Boolean>]
 [-AllowSaveCallLogs <Boolean>] [-AllowExchangeConnectivity <Boolean>] [-AllowSaveIMHistory <Boolean>]
 [-AllowSaveCredentials <Boolean>] [-EnablePushNotifications <Boolean>] [-EncryptAppData <Boolean>]
 [-AllowDeviceContactsSync <Boolean>] [-RequireIntune <Boolean>] [-AllowAutomaticPstnFallback <Boolean>]
 [-VoiceSettings <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsMobilityPolicy [-Tenant <Guid>] [-Description <String>] [-EnableOutsideVoice <Boolean>]
 [-EnableMobility <Boolean>] [-EnableIPAudioVideo <Boolean>] [-RequireWIFIForIPVideo <Boolean>]
 [-AllowCustomerExperienceImprovementProgram <Boolean>] [-RequireWiFiForSharing <Boolean>]
 [-AllowSaveCallLogs <Boolean>] [-AllowExchangeConnectivity <Boolean>] [-AllowSaveIMHistory <Boolean>]
 [-AllowSaveCredentials <Boolean>] [-EnablePushNotifications <Boolean>] [-EncryptAppData <Boolean>]
 [-AllowDeviceContactsSync <Boolean>] [-RequireIntune <Boolean>] [-AllowAutomaticPstnFallback <Boolean>]
 [-VoiceSettings <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Mobile is a client application that enables users to run Skype for Business on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Skype for Business Server Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed by using mobility policies.

With Skype for Business Server mobile devices can make or receive phone calls by using either the standard cellular phone network
or by using Wi-Fi connections.
Mobility policies can be used to require Wi-Fi connections and to prevent calls over the cellular network.

These policies can be modified at any time by using the `Set-CsMobilityPolicy` cmdlet.

Note that two different properties must be configured in order to enable Call via Work.
The first property, EnableOutsideVoice, determines whether or not Call via Work is enabled; the second, EnableMobility, determines whether or not users are allowed to use Skype for Business Mobile.
Both of these properties must be set to true before a user can take advantage of Call via Work.
If EnableMobility is set to True and EnableOutsideVoice is set to False, the user can run Skype for Business Server Mobile but will not be able to use Call via Work.
If EnableMobility is set to False and EnableOutsideVoice is set to True the user will not be able to run Skype for Business Mobile.
In turn, that means that the user will not be able to use Call via Work, regardless of the value of the EnableOutsideVoice property.

To use Call via Work, users must be managed by a voice policy that allows simultaneous ringing.

The following parameters are not applicable to Skype for Business Online: AllowAutomaticPstnFallback, AllowCustomerExperienceImprovementProgram, AllowExchangeConnectivity, AllowSaveCallLogs, Description, EncryptAppData, Force, Identity, Instance, PipelineVariable, RequireIntune, Tenant, VoiceSettings

## EXAMPLES

### Example 1
```
Set-CsMobilityPolicy -Identity "site:Redmond" -EnableOutsideVoice $False
```

In Example 1, Call via Work is disabled in the mobility policy assigned to the Redmond site.
This is done by setting the EnableOutsideVoice property to False.


### Example 2
```
Get-CsMobilityPolicy -Filter "tag:*" | Set-CsMobilityPolicy -EnableOutsideVoice $False
```

The command shown in Example 2 disables Call via Work for all the mobility policies configured at the per-user scope.
To carry out this task, the command first calls the `Get-CsMobilityPolicy` cmdlet along with the Filter parameter; the filter value "tag:*" limits the returned data to policies that have an Identity that begins with the string value "tag:".
That filtered collection of policies is then piped to the `Set-CsMobilityPolicy` cmdlet, which takes each policy in the collection and sets the EnableOutsideVoice property to False.


### Example 3
```
Get-CsMobilityPolicy | Where-Object {$_.Description -eq $Null} | Set-CsMobilityPolicy -Description "Policy owner: kenmyer@litwareinc.com"
```

In Example 3, a new description is added to any mobility policy that does not currently have a description.
To do this, the first uses the `Get-CsMobilityPolicy` cmdlet to return a collection of all the mobility policies currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those policies where the Description property is equal to (-eq) a null value.
That filtered collection is then piped to the `Set-CsMobilityPolicy` cmdlet, which sets the Description property for each policy to the string value "Policy owner: kenmyer@litwareinc.com".


## PARAMETERS

### -AllowAutomaticPstnFallback

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCustomerExperienceImprovementProgram

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) mobile users will be allowed to participate in the Microsoft Customer Experience Improvement Program.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDeviceContactsSync

> Applicable: Skype for Business Online

When set to True users will be allowed to sync device contacts on the mobile apps.

More information: [How to disable CallKit integration for Skype for Business iOS](https://learn.microsoft.com/SkypeForBusiness/troubleshoot/server-phone-system/disable-callkit-integration).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExchangeConnectivity

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) users will be allowed to connect to Exchange by using their mobile device.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveCallLogs

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) users will be allowed to save a call log of calls made from or received by their mobile device.

Note that this setting does not apply to Android devices.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveCredentials

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) users will be allowed to save credentials information (such as passwords) on their mobile device.
This information can then be applied to auto-logon scenarios.

Note: If a user has AllowSaveCredentials set to False in the CsMobility policy, the Skype for Business App for iOS may sign out automatically when bringing it from the background to the foreground. This is due to the password not being saved anywhere but in the iOS process memory. Once the process is killed by the iOS system, the password will no longer be available, so the user will need to enter it again. However, there is no impact if modern authentication is implemented.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveIMHistory

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) users will be allowed to save transcripts of IM and conferencing sessions on their mobile devices.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Enables administrators to provide additional text to accompany a mobility policy.
For example, the Description might include information about the users the policy should be assigned to.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableIPAudioVideo

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to False, prohibits the user from making voice over IP (VoIP) calls using the mobile device.
The default value is True, meaning that VoIP calls are allowed.

This parameter was introduced in Lync Server 2013.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMobility

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, users are allowed to use Skype for Business Mobile.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOutsideVoice

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, enables users to take advantage of Call via Work.
When set to False, users cannot use Call via Work.

The default value is True.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePushNotifications

> Applicable: Skype for Business Online

When set to True users will be allowed to receive push notifications on their mobile devices.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptAppData

> Applicable: Skype for Business Online

When set to True users will be allowed to encrypt data on their mobile apps.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier assigned to the policy when it was created.
Mobility policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a policy at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To refer to a per-user policy, use syntax similar to this:

`-Identity RedmondMobilityPolicy`

If you do not specify an Identity, then the `Set-CsMobilityPolicy` cmdlet will modify the global policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RequireIntune

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireWIFIForIPAudio

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, the user can use IP audio in calls made when his or her mobile device is connected to a Wi-Fi network.
That means that the user will only be allowed to make audio calls using Wi-Fi, and will not be able to use the standard cellular phone network.
The default value is False.

This parameter was introduced in Lync Server 2013.


```yaml
Type: Boolean
Parameter Sets: Identity, Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireWIFIForIPVideo

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, the user can use IP video only in calls made when their mobile device is connected to a Wi-Fi network.
If the mobile device goes outside of Wi-Fi range, then video calls will be received as audio calls only.
If this property is set to False (the default value) then the user can make or receive IP video calls using either a Wi-Fi or a cellular data connection.

This parameter was introduced in Lync Server 2013.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireWiFiForSharing

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, mobile users must use a Wi-Fi connection in order to participate in an application sharing session.
When set to False (the default value) mobile users can participate in application sharing by using either a Wi-Fi connection or a cellular (3G/4G) connection.

If this value is set to True, users will not be able to change their sharing configuration settings.
If this value is set to False, users can use the Options page to modify their sharing configuration settings.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the mobility policy is being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceSettings

> Applicable: Skype for Business Online

Controls how audio is connected by a mobile device joining a meeting or a peer-to-peer call. When the Skype for Business client is first run, and the user is enabled for Phone System with a Calling Plan, they are prompted to configure a call back phone number. This number is stored in settings under the **Calls and Meetings** section and will be used based on the value chosen for this parameter. Acceptable values are:

**VoIPAlways:** Wi-Fi will be used when available, otherwise a call back will be performed.

**VoIPOverWiFi:** If Wi-Fi is not available, a call back to the pre-defined phone number will be performed.

**Cellular:** Always perform a call back to the pre-defined phone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility
The `Set-CsMobilityPolicy` cmdlet accepts pipelined instances of the Mobility object.

## OUTPUTS

### None
Instead, the `Set-CsMobilityPolicy` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

## NOTES

## RELATED LINKS
