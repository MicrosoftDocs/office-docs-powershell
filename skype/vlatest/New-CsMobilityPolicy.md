---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsMobilityPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new mobility policy at the site or the per-user scope.
Mobility policies determine whether or not a user can use Lync Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

Below Content Applies To: Skype for Business Online

New-CsMobilityPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-EnableOutsideVoice \<bool\>\] \[-EnableMobility \<bool\>\] \[-EnableIPAudioVideo \<bool\>\] \[-RequireWIFIForIPVideo \<bool\>\] \[-AllowCustomerExperienceImprovementProgram \<bool\>\] \[-RequireWiFiForSharing \<bool\>\] \[-AllowSaveCallLogs \<bool\>\] \[-AllowExchangeConnectivity \<bool\>\] \[-AllowSaveIMHistory \<bool\>\] \[-AllowSaveCredentials \<bool\>\] \[-EnablePushNotifications \<bool\>\] \[-EncryptAppData \<bool\>\] \[-AllowDeviceContactsSync \<bool\>\] \[-RequireIntune \<bool\>\] \[-AllowAutomaticPstnFallback \<bool\>\] \[-VoiceSettings \<string\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Creates a new mobility policy at the site or the per-user scope.
Mobility policies determine whether or not a user can use Skype for Business Mobile.
These policies also manage a user's ability to employ Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving calls.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
New-CsMobilityPolicy [-Identity] <XdsIdentity> [-Confirm] [-Description <String>]
 [-EnableIPAudioVideo <Boolean>] [-EnableMobility <Boolean>] [-EnableOutsideVoice <Boolean>] [-Force]
 [-InMemory] [-RequireWIFIForIPAudio <Boolean>] [-RequireWIFIForIPVideo <Boolean>] [-WhatIf]
 [-AllowAutomaticPstnFallback <Object>] [-AllowCustomerExperienceImprovementProgram <Object>]
 [-AllowDeviceContactsSync <Object>] [-AllowExchangeConnectivity <Object>] [-AllowSaveCallLogs <Object>]
 [-AllowSaveCredentials <Object>] [-AllowSaveIMHistory <Object>] [-BypassDualWrite <Object>]
 [-EnablePushNotifications <Object>] [-EncryptAppData <Object>] [-RequireIntune <Object>]
 [-RequireWiFiForSharing <Object>] [-Tenant <Object>] [-VoiceSettings <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

Lync Mobile is a client application that enables users to run Lync on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Lync Server Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.

Both of these capabilities - the ability to run Lync Server and the ability to use Call via Work - are managed using mobility policies.
When you install Lync Server, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

Other than a description of the policy, mobility policies have only two properties.
The first, EnableOutsideVoice, determines whether or not Call via Work is enabled; the second, EnableMobility, determines whether or not users are allowed to use Lync Mobile.
Both of these properties must be set to true before a user can take advantage of Call via Work.
If EnableMobility is set to True and EnableOutsideVoice is set to False, the user can run Microsoft Lync Mobile but will not be able to use Call via Work.
If EnableMobility is set to False and EnableOutsideVoice is set to True the user will not be able to run Microsoft Lync Mobile.
In turn, that means that the user will not be able to use Call via Work, regardless of the value of the EnableOutsideVoice property.

To use Call via Work, users must be managed by a voice policy that allows simultaneous ringing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsMobilityPolicy cmdlet locally: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Mobile is a client application that enables users to run Skype for Business on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Skype for Business Server 2015 Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed by using mobility policies.

With Skype for Business Server 2015, mobile devices can make or receive phone calls by using either the standard cellular phone network.
or by using Wi-Fi connections.
Mobility policies can be used to require Wi-Fi connections and to prevent calls over the cellular network.

When you install Skype for Business Server 2015, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

Note that two different properties must be configured in order to enable Call via Work.
The first property, EnableOutsideVoice, determines whether or not Call via Work is enabled; the second, EnableMobility, determines whether or not users are allowed to use Skype for Business Mobile.
Both of these properties must be set to true before a user can take advantage of Call via Work.
If EnableMobility is set to True and EnableOutsideVoice is set to False, the user can run Skype for Business Server 2015 Mobile but will not be able to use Call via Work.
If EnableMobility is set to False and EnableOutsideVoice is set to True the user will not be able to run Skype for Business Mobile.
In turn, that means that the user will not be able to use Call via Work, regardless of the value of the EnableOutsideVoice property.

To use Call via Work, users must be managed by a voice policy that allows simultaneous ringing.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new mobility policy for the Redmond site, and disables the use of Call via Work for any users affected by the policy.
This is done by setting the EnableOutsideVoice parameter to False.

New-CsMobilityPolicy -Identity site:Redmond -EnableOutsideVoice $False

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new mobility policy for the Redmond site, and disables the use of Call via Work for any users affected by the policy.
This is done by setting the EnableOutsideVoice parameter to False.

New-CsMobilityPolicy -Identity site:Redmond -EnableOutsideVoice $False

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 demonstrates how you can create a new mobility policy in memory, modify a property value for that policy, and then use the Set-CsMobilityPolicy cmdlet to turn the virtual policy into an actual Lync Server mobility policy.
To do this, the command first uses New-CsMobilityPolicy and the InMemory parameter to create a new policy for the Redmond site.
Because the InMemory parameter causes this policy to exists in memory only, the resulting object must be stored in variable ($x).

In command 2, the EnableOutsideVoice property for the virtual policy is set to False.
After that, command 3 uses Set-CsMobilityPolicy and the Instance parameter to write the changes to Lync Server and create a mobility policy for the Redmond site.
If you do not call Set-CsMobilityPolicy, the policy will not be created, and, in fact, will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsMobilityPolicy -Identity site:Redmond -InMemory

$x.EnableOutsideVoice = $False

Set-CsMobilityPolicy -Instance $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 demonstrates how you can create a new mobility policy in memory, modify a property value for that policy, and then use the Set-CsMobilityPolicy cmdlet to turn the virtual policy into an actual Lync Server mobility policy.
To do this, the command first uses the New-CsMobilityPolicy cmdlet and the InMemory parameter to create a new policy for the Redmond site.
Because the InMemory parameter causes this policy to exists in memory only, the resulting object must be stored in variable ($x).

In command 2, the EnableOutsideVoice property for the virtual policy is set to False.
After that, command 3 uses the Set-CsMobilityPolicy cmdlet and the Instance parameter to write the changes to Lync Server and create a mobility policy for the Redmond site.
If you do not call the Set-CsMobilityPolicy cmdlet, the policy will not be created, and, in fact, will disappear as soon as you end your Windows PowerShell command-line interface session or delete the variable $x.

$x = New-CsMobilityPolicy -Identity site:Redmond -InMemory

$x.EnableOutsideVoice = $False

Set-CsMobilityPolicy -Instance $x

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2013

Unique Identity to be assigned to the policy.
New mobility policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site:

-Identity site:Redmond

To create a new per-user policy, use an Identity similar to this:

-Identity SalesDepartmentPolicy

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsMobilityPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use Set-CsMobilityPolicy.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



Below Content Applies To: Skype for Business Server 2015

Unique Identity to be assigned to the policy.
New mobility policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site:

-Identity site:Redmond

To create a new per-user policy, use an Identity similar to this:

-Identity SalesDepartmentPolicy

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsMobilityPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use the Set-CsMobilityPolicy cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide explanatory text to accompany the policy.
For example, the Description might include information about the users that the policy should be assigned to.



Below Content Applies To: Skype for Business Online

{{Fill Description Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableIPAudioVideo
Below Content Applies To: Lync Server 2013

When set to False, prohibits the user from making voice over IP (VoIP) calls using the mobile device.
The default value is True, meaning that VoIP calls are allowed.

This parameter was introduced in Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Online

{{Fill EnableIPAudioVideo Description}}



Below Content Applies To: Skype for Business Server 2015

When set to False, prohibits the user from making voice over IP (VoIP) calls using the mobile device.
The default value is True, meaning that VoIP calls are allowed.

This parameter was introduced in Lync Server 2013.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMobility
Below Content Applies To: Lync Server 2013

When set to True, users are allowed to use Lync Mobile.



Below Content Applies To: Skype for Business Online

{{Fill EnableMobility Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users are allowed to use Skype for Business Mobile.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOutsideVoice
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

When set to True, enables users to take advantage of Call via Work.
When set to False, users cannot use Call via Work.

The default value is True.



Below Content Applies To: Skype for Business Online

{{Fill EnableOutsideVoice Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of a command called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Online

{{Fill InMemory Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireWIFIForIPAudio
Below Content Applies To: Lync Server 2013

When set to True, the user can use IP audio in calls only if his or her mobile device is connected to a WiFi network.
The default value is False.

This parameter was introduced in Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Server 2015

When set to True, the user can use IP audio in calls made when his or her mobile device is connected to a WiFi network.
That means that the user will only be allowed to make audio calls using Wi-Fi, and will not be able to use the standard cellular phone network.
The default value is False.

This parameter was introduced in Lync Server 2013.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireWIFIForIPVideo
Below Content Applies To: Lync Server 2013

When set to True, the user can use IP video in calls only if his or her mobile device is connected to a WiFi network.
The default value is False.

This parameter was introduced in Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Online

{{Fill RequireWIFIForIPVideo Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, the user can use IP video only in calls made when mobile device is connected to a Wi-Fi network.
If mobile device goes outside of Wi-Fi range, then video calls will be received as audio calls only.
If this property is set to False (the default value) then the user can make or receive IP video calls in using either a Wi-Fi or a cellular data connection.

This parameter was introduced in Lync Server 2013.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutomaticPstnFallback
{{Fill AllowAutomaticPstnFallback Description}}

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

### -AllowCustomerExperienceImprovementProgram
Below Content Applies To: Skype for Business Online

{{Fill AllowCustomerExperienceImprovementProgram Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) mobile users will be allowed to participate in the Microsoft Customer Experience Improvement Program.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDeviceContactsSync
{{Fill AllowDeviceContactsSync Description}}

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

### -AllowExchangeConnectivity
Below Content Applies To: Skype for Business Online

{{Fill AllowExchangeConnectivity Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) users will be allowed to connect to Exchange by using their mobile device.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveCallLogs
Below Content Applies To: Skype for Business Online

{{Fill AllowSaveCallLogs Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) users will be allowed to save a call log of calls made from or received by their mobile device.

Note that this setting does not apply to Android devices.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveCredentials
Below Content Applies To: Skype for Business Online

{{Fill AllowSaveCredentials Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) users will be allowed to save credentials information (such as passwords) on their mobile device.
This information can then be applied to auto-logon scenarios.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSaveIMHistory
Below Content Applies To: Skype for Business Online

{{Fill AllowSaveIMHistory Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) users will be allowed to save transcripts of IM and conferencing sessions on their mobile devices.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

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

### -EnablePushNotifications
{{Fill EnablePushNotifications Description}}

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

### -EncryptAppData
{{Fill EncryptAppData Description}}

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

### -RequireIntune
{{Fill RequireIntune Description}}

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

### -RequireWiFiForSharing
Below Content Applies To: Skype for Business Online

{{Fill RequireWiFiForSharing Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, mobile users must use a WiFi connection in order to participate in an application sharing session.
When set to False (the default value) mobile users can participate in application sharing by using either a WiFi connection or a cellular (3G/4G) connection.

If this value is set to True, then users then users will not be able to change their sharing configuration settings.
If this value is set to False users can use the Options page to modify their sharing configuration settings.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new mobility policy is being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceSettings
{{Fill VoiceSettings Description}}

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
None.
New-CsMobilityPolicy does not accept pipelined input.

### None

###  
None.
The New-CsMobilityPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1fba8c3e-087d-4ba4-918b-371f8757df7c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1fba8c3e-087d-4ba4-918b-371f8757df7c(OCS.16).aspx)

