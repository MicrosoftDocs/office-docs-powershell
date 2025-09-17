---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csmobilitypolicy
schema: 2.0.0
title: New-CsMobilityPolicy
---

# New-CsMobilityPolicy

## SYNOPSIS

Creates a new mobility policy at the site or the per-user scope.
Mobility policies determine whether or not a user can use Skype for Business Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving IP video/screen share calls.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

The following parameters are not applicable to Skype for Business Online: AllowAutomaticPstnFallback, AllowCustomerExperienceImprovementProgram, AllowExchangeConnectivity, AllowSaveCallLogs, Description, EncryptAppData, Force, Identity, InMemory, PipelineVariable, RequireIntune, Tenant, and VoiceSettings

## SYNTAX

```
New-CsMobilityPolicy [-Tenant <Guid>] [-Description <String>] [-EnableOutsideVoice <Boolean>]
 [-EnableMobility <Boolean>] [-EnableIPAudioVideo <Boolean>] [-RequireWIFIForIPVideo <Boolean>]
 [-AllowCustomerExperienceImprovementProgram <Boolean>] [-RequireWiFiForSharing <Boolean>]
 [-AllowSaveCallLogs <Boolean>] [-AllowExchangeConnectivity <Boolean>] [-AllowSaveIMHistory <Boolean>]
 [-AllowSaveCredentials <Boolean>] [-EnablePushNotifications <Boolean>] [-EncryptAppData <Boolean>]
 [-AllowDeviceContactsSync <Boolean>] [-RequireIntune <Boolean>] [-AllowAutomaticPstnFallback <Boolean>]
 [-VoiceSettings <String>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Mobile is a client application that enables users to run Skype for Business on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Skype for Business Server Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed by using mobility policies.

With Skype for Business Server, mobile devices can make or receive phone calls by using either the standard cellular phone network.
or by using Wi-Fi connections.

When you install Skype for Business Server, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

Note that two different properties must be configured in order to enable Call via Work.
The first property, EnableOutsideVoice, determines whether or not Call via Work is enabled; the second, EnableMobility, determines whether or not users are allowed to use Skype for Business Mobile.
Both of these properties must be set to true before a user can take advantage of Call via Work.
If EnableMobility is set to True and EnableOutsideVoice is set to False, the user can run Skype for Business Server Mobile but will not be able to use Call via Work.
If EnableMobility is set to False and EnableOutsideVoice is set to True the user will not be able to run Skype for Business Mobile.
In turn, that means that the user will not be able to use Call via Work, regardless of the value of the EnableOutsideVoice property.

To use Call via Work, users must be managed by a voice policy that allows simultaneous ringing.

## EXAMPLES

### EXAMPLE 1

```powershell
New-CsMobilityPolicy -Identity site:Redmond -EnableOutsideVoice $False
```

The command shown in Example 1 creates a new mobility policy for the Redmond site, and disables the use of Call via Work for any users affected by the policy.
This is done by setting the EnableOutsideVoice parameter to False.

### EXAMPLE 2

```powershell
$x = New-CsMobilityPolicy -Identity site:Redmond -InMemory

$x.EnableOutsideVoice = $False

Set-CsMobilityPolicy -Instance $x
```

Example 2 demonstrates how you can create a new mobility policy in memory, modify a property value for that policy, and then use the Set-CsMobilityPolicy cmdlet to turn the virtual policy into an actual Lync Server mobility policy.
To do this, the command first uses the New-CsMobilityPolicy cmdlet and the InMemory parameter to create a new policy for the Redmond site.
Because the InMemory parameter causes this policy to exists in memory only, the resulting object must be stored in variable ($x).

In command 2, the EnableOutsideVoice property for the virtual policy is set to False.
After that, command 3 uses the Set-CsMobilityPolicy cmdlet and the Instance parameter to write the changes to Lync Server and create a mobility policy for the Redmond site.
If you do not call the Set-CsMobilityPolicy cmdlet, the policy will not be created, and, in fact, will disappear as soon as you end your Windows PowerShell command-line interface session or delete the variable $x.

## PARAMETERS

### -AllowAutomaticPstnFallback

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

When set to True (the default value) users will be allowed to sync device contacts on the mobile apps.

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

Enables administrators to provide explanatory text to accompany the policy.
For example, the Description might include information about the users that the policy should be assigned to.

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

When set to True (the default value) users will be allowed to receive push notifications on their mobile devices.

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

When set to True (the default value) users will be allowed to encrypt data on their mobile apps.

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

Unique Identity to be assigned to the policy.
New mobility policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site:

`-Identity site:Redmond`

To create a new per-user policy, use an Identity similar to this:

`-Identity SalesDepartmentPolicy`

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsMobilityPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use the Set-CsMobilityPolicy cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of a command called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -RequireIntune

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

### -RequireWIFIForIPVideo

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, the user can use IP video only in calls made when mobile device is connected to a Wi-Fi network.
If mobile device goes outside of Wi-Fi range, then video calls will be received as audio calls only.
If this property is set to False (the default value) then the user can make or receive IP video calls in using either a Wi-Fi or a cellular data connection.

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

When set to True, mobile users must use a WiFi connection in order to participate in an application sharing session.
When set to False (the default value) mobile users can participate in application sharing by using either a WiFi connection or a cellular (3G/4G) connection.

If this value is set to True, then users then users will not be able to change their sharing configuration settings.
If this value is set to False users can use the Options page to modify their sharing configuration settings.

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

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new mobility policy is being created.
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

**VoIPAlways:** WiFi will be used when available, otherwise a call back will be performed.

**VoIPOverWiFi:** If WiFi is not available, a call back to the pre-defined phone number will be performed.

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

This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS


### None

The New-CsMobilityPolicy cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility

Creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

### System.Object

## NOTES

## RELATED LINKS
