---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsLocationPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new location policy for use with location identification for the Enhanced 9-1-1 (E9-1-1) service and general client location.
The E9-1-1 service enables those who answer 911 calls to determine the caller's geographic location.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new location policy for use with location identification for the Enhanced 9-1-1 (E9-1-1) service and general client location.
The E9-1-1 service enables those who answer 911 calls to determine the caller's geographic location.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsLocationPolicy [-Identity] <XdsIdentity> [-ConferenceMode <ConferenceModeEnum>] [-ConferenceUri <String>]
 [-Description <String>] [-EmergencyDialMask <String>] [-EmergencyDialString <String>]
 [-EnhancedEmergencyServicesEnabled <Boolean>] [-LocationRequired <LocationRequiredEnum>]
 [-NotificationUri <String>] [-PstnUsage <String>] [-UseLocationForE911Only <Boolean>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [-EnhancedEmergencyServiceDisclaimer <String>] [-LocationRefreshInterval <Int64>]
 [-Tenant <Guid>] [-EmergencyNumbers <PSListModifier>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The location policy is used to apply settings that relate to E9-1-1 functionality and location settings to users or contacts.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet creates a new location policy at the site or per-user scope.
(A policy at the global scope already exists.)

IMPORTANT: The location policy behaves differently from other policies in Lync Server 2010 in terms of order of scope.
For all other policies, if a policy is defined at the per-user scope, the policy is applied to any user granted that policy.
If the user has not been granted a per-user policy, the site policy is applied.
If there is no site policy, the global policy is applied.
Location policies are applied in the same way, with one exception: a per-user location policy can also be assigned to a network site.
(A network site consists of a group of subnets.) If the user is making the emergency call from a location that is mapped to a network site within the organization, the user-level policy assigned to that network site is used.
This functionality will override a per-user policy that has been granted to that user.
If the user calls from a location that is unknown or unmapped in the organization, the standard policy scoping will be applied.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsLocationPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsLocationPolicy"}

**Below Content Applies To:** Lync Server 2013

The location policy is used to apply settings that relate to E9-1-1 functionality and location settings to users or contacts.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet creates a new location policy at the site or per-user scope.
(A policy at the global scope already exists.)

IMPORTANT: The location policy behaves differently from other policies in Lync Server in terms of order of scope.
For all other policies, if a policy is defined at the per-user scope, the policy is applied to any user granted that policy.
If the user has not been granted a per-user policy, the site policy is applied.
If there is no site policy, the global policy is applied.
Location policies are applied in the same way, with one exception: a per-user location policy can also be assigned to a network site.
(A network site consists of a group of subnets.) If the user is making the emergency call from a location that is mapped to a network site within the organization, the user-level policy assigned to that network site is used.
This functionality will override a per-user policy that has been granted to that user.
If the user calls from a location that is unknown or unmapped in the organization, the standard policy scoping will be applied.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsLocationPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsLocationPolicy"}

**Below Content Applies To:** Skype for Business Server 2015

The location policy is used to apply settings that relate to E9-1-1 functionality and location settings to users or contacts.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet creates a new location policy at the site or per-user scope.
(A policy at the global scope already exists.)

IMPORTANT: The location policy behaves differently from other policies in Skype for Business Server 2015 in terms of order of scope.
For all other policies, if a policy is defined at the per-user scope, the policy is applied to any user granted that policy.
If the user has not been granted a per-user policy, the site policy is applied.
If there is no site policy, the global policy is applied.
Location policies are applied in the same way, with one exception: a per-user location policy can also be assigned to a network site.
(A network site consists of a group of subnets.) If the user is making the emergency call from a location that is mapped to a network site within the organization, the user-level policy assigned to that network site is used.
This functionality will override a per-user policy that has been granted to that user.
If the user calls from a location that is unknown or unmapped in the organization, the standard policy scoping will be applied.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True
```

Example 1 uses New-CsLocationPolicy to create a new location policy for the Redmond site that enables all users on that site for E9-1-1.
To create this policy, New-CsLocationPolicy is called along with two parameters: one to set the Identity, which in this case is the string site: followed by the name of the site to which this policy will apply; the other to set the value of the EnhancedEmergencyServicesEnabled property to True.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 uses New-CsLocationPolicy to create a new location policy for the Redmond site that enables all users on that site for E9-1-1.
To create this policy, New-CsLocationPolicy is called along with two parameters: one to set the Identity, which in this case is the string site: followed by the name of the site to which this policy will apply; the other to set the value of the EnhancedEmergencyServicesEnabled property to True.

New-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 uses the New-CsLocationPolicy cmdlet to create a new location policy for the Redmond site that enables all users on that site for E9-1-1.
To create this policy, the New-CsLocationPolicy cmdlet is called along with two parameters: one to set the Identity, which in this case is the string site: followed by the name of the site to which this policy will apply; the other to set the value of the EnhancedEmergencyServicesEnabled property to True.

New-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsLocationPolicy -Identity Reno -Description "All users located at the Reno site" -EnhancedEmergencyServicesEnabled $True -PstnUsage Emergency -EmergencyDialString 911
```

This example creates a per-user location policy.
(Per-user policies must be specifically granted to individual users or groups.) This policy has an Identity of Reno.
We've added a more detailed description of the policy by using the Description parameter.
The next parameter we supply is EnhancedEmergencyServicesEnabled, which is set to True to turn on E9-1-1 functionality for all users to which this policy is granted.
The next parameter is PstnUsage, in this case with a value of Emergency.
This value must match a value in the list of PSTN usages.
(This list can be retrieved by calling Get-CsPstnUsage.) The usage should be associated with a voice route that will be used for emergency calls.
(You can retrieve voice routes by calling the Get-CsVoiceRoute cmdlet.) The final parameter used in this example is EmergencyDialString, which specifies the number that is dialed to make an emergency call.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example creates a per-user location policy.
(Per-user policies must be specifically granted to individual users or groups.) This policy has an Identity of Reno.
We've added a more detailed description of the policy by using the Description parameter.
The next parameter we supply is EnhancedEmergencyServicesEnabled, which is set to True to turn on E9-1-1 functionality for all users to which this policy is granted.
The next parameter is PstnUsage, in this case with a value of Emergency.
This value must match a value in the list of PSTN usages.
(This list can be retrieved by calling Get-CsPstnUsage.) The usage should be associated with a voice route that will be used for emergency calls.
(You can retrieve voice routes by calling the Get-CsVoiceRoute cmdlet.) The final parameter used in this example is EmergencyDialString, which specifies the number that is dialed to make an emergency call.

New-CsLocationPolicy -Identity Reno -Description "All users located at the Reno site" -EnhancedEmergencyServicesEnabled $True -PstnUsage Emergency -EmergencyDialString 911

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a per-user location policy.
(Per-user policies must be specifically granted to individual users or groups.) This policy has an Identity of Reno.
We've added a more detailed description of the policy by using the Description parameter.
The next parameter we supply is EnhancedEmergencyServicesEnabled, which is set to True to turn on E9-1-1 functionality for all users to which this policy is granted.
The next parameter is PstnUsage, in this case with a value of Emergency.
This value must match a value in the list of PSTN usages.
(This list can be retrieved by calling the Get-CsPstnUsage cmdlet.) The usage should be associated with a voice route that will be used for emergency calls.
(You can retrieve voice routes by calling the Get-CsVoiceRoute cmdlet.) The final parameter used in this example is EmergencyDialString, which specifies the number that is dialed to make an emergency call.

New-CsLocationPolicy -Identity Reno -Description "All users located at the Reno site" -EnhancedEmergencyServicesEnabled $True -PstnUsage Emergency -EmergencyDialString 911

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

A unique identifier for the location policy.
This cmdlet can be used to create policies at the site or per-user scope.
(A global policy exists by default and cannot be removed.) For a policy created at the site scope, this value must be in the form site:\<site name\>, where site name is the name of a site defined in the Microsoft Lync Server 2010 deployment.
For example, site:Redmond.
A policy created at the per-user scope can be assigned any string value, such as Reno.



**Below Content Applies To:** Lync Server 2013

A unique identifier for the location policy.
This cmdlet can be used to create policies at the site or per-user scope.
(A global policy exists by default and cannot be removed.) For a policy created at the site scope, this value must be in the form site:\<site name\>, where site name is the name of a site defined in the Lync Server deployment.
For example, site:Redmond.
A policy created at the per-user scope can be assigned any string value, such as Reno.



**Below Content Applies To:** Skype for Business Server 2015

A unique identifier for the location policy.
This cmdlet can be used to create policies at the site or per-user scope.
(A global policy exists by default and cannot be removed.) For a policy created at the site scope, this value must be in the form site:\<site name\>, where site name is the name of a site defined in the Skype for Business Server 2015 deployment.
For example, site:Redmond.
A policy created at the per-user scope can be assigned any string value, such as Reno.



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

### -ConferenceMode
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If a value is specified for the ConferenceUri parameter, the ConferenceMode parameter determines whether a third party can participate in the call or can only listen in.
Available values are:

- oneway: Third party can only listen to the conversation between the caller and the Public Safety Answering Point (PSAP) operator.
- twoway: Third party can listen in and participate in the call between the caller and the PSAP operator.



**Below Content Applies To:** Skype for Business Server 2015

If a value is specified for the ConferenceUri parameter, the ConferenceMode parameter determines whether a third party can participate in the call or can only listen in.
Available values are:

Oneway: Third party can only listen to the conversation between the caller and the Public Safety Answering Point (PSAP) operator.

Twoway: Third party can listen in and participate in the call between the caller and the PSAP operator.



```yaml
Type: ConferenceModeEnum
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferenceUri
The SIP Uniform Resource Identifier (URI), in this case the telephone number, of a third party that will be conferenced in to any emergency calls that are made.
For example, the company security office could receive a call when an emergency call is made and listen in or participate in that call (depending on the value of the ConferenceMode property).

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A detailed description of this location.
For example, "Reno corporate users".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyDialMask
A number that is dialed that will be translated into the value of the EmergencyDialString property.
For example, if EmergencyDialMask has a value of "212" and EmergencyDialString has a value of "911", if a user dials 212 the call will be made to 911.
This allows for alternate emergency numbers to be dialed and still have the call reach emergency services (for example, if someone from a country/region with a different emergency number attempts to dial that country/region's number rather than the number for the country/region they're currently in).
You can define multiple emergency dial masks by separating the values with semicolons.
For example, -EmergencyDialMask "212;414".

IMPORTANT.
Ensure that the specified dial mask value is not the same as a number in a call park orbit range.
Call park routing will take precedence over emergency dial string conversion.
To see the existing call park orbit ranges, call the Get-CsCallParkOrbit cmdlet.

Maximum length of the string is 100 characters.
Each character must be a digit 0 through 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyDialString
The number that is dialed to reach emergency services.
In the United States this value is 911.

The string must be made of the digits 0 through 9 and can be from 1 to 10 digits in length.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnhancedEmergencyServicesEnabled
**Below Content Applies To:** Lync Server 2010

Specifies whether the users associated with this policy are enabled for E9-1-1.
Set the value to True to enable E9-1-1 so Lync Server 2010 clients will retrieve location information on registration and include that information when an emergency call is made.

Default Value: False



**Below Content Applies To:** Lync Server 2013

Specifies whether the users associated with this policy are enabled for E9-1-1.
Set the value to True to enable E9-1-1 so Lync Server clients will retrieve location information on registration and include that information when an emergency call is made.

Default Value: False



**Below Content Applies To:** Skype for Business Server 2015

Specifies whether the users associated with this policy are enabled for E9-1-1.
Set the value to True to enable E9-1-1 so Skype for Business Server 2015 clients will retrieve location information on registration and include that information when an emergency call is made.

Default Value: False



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

### -LocationRequired
**Below Content Applies To:** Lync Server 2010

If the client was unable to retrieve a location from the location configuration database, the user can be prompted to manually enter a location.
This parameter accepts the following values:

- no: The user will not be prompted for a location. When a call is made with no location information, the Emergency Service Provider will answer the call and ask for a location.
- yes: The user will be prompted to input location information when the client registers at a new location. The user can dismiss the prompt without entering any information. If information is entered, a call made to 911 will first be answered by the Emergency Service Provider to verify the location before being routed to the PSAP operator (the 911 operator).
- disclaimer: This option is the same as yes except that the user cannot dismiss the prompt without entering location information. The user can still complete a 911 call, but no other calls can be completed without entering the information. In addition, disclaimer text will be displayed to the user that can alert them to the consequences of declining to enter location information. (The disclaimer text must be set by calling the Set-CsEnhancedEmergencyServiceDisclaimer cmdlet.)

This value is ignored if EnhancedEmergencyServicesEnabled is set to False (the default).
Users will not be prompted for location information.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

If the client was unable to retrieve a location from the location configuration database, the user can be prompted to manually enter a location.
This parameter accepts the following values:

- no: The user will not be prompted for a location. When a call is made with no location information, the Emergency Service Provider will answer the call and ask for a location.
- yes: The user will be prompted to input location information when the client registers at a new location. The user can dismiss the prompt without entering any information. If information is entered, a call made to 911 will first be answered by the Emergency Service Provider to verify the location before being routed to the PSAP operator (the 911 operator).
- disclaimer: This option is the same as yes except that if the user dismisses the prompt disclaimer text will be displayed that can alert the user to the consequences of declining to enter location information. (The disclaimer text must be set by calling the Set-CsEnhancedEmergencyServiceDisclaimer cmdlet.)

This value is ignored if EnhancedEmergencyServicesEnabled is set to False (the default).
Users will not be prompted for location information.



```yaml
Type: LocationRequiredEnum
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationUri
**Below Content Applies To:** Lync Server 2010

One or more SIP URIs to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Keep in mind that distribution lists and group URIs are not supported.

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.



**Below Content Applies To:** Lync Server 2013

One or more SIP URIs to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Note that, with the release of Lync Server 2013 Preview, distribution lists can now be configured as a notification URI.

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.



**Below Content Applies To:** Skype for Business Server 2015

One or more SIP URIs to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Note that distribution lists can be configured as a notification URI.

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnUsage
The public switched telephone network (PSTN) usage that will be used to determine which voice route will be used to route emergency calls from clients using this profile.
The route associated with this usage should point to a SIP trunk dedicated to emergency calls.

The usage must already exist in the global list of PSTN usages.
Call the Get-CsPstnUsage cmdlet to retrieve a list of usages.
To create a new usage, call the Set-CsPstnUsage cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLocationForE911Only
**Below Content Applies To:** Lync Server 2010

Location information can be used by the Microsoft Lync 2010 client for various reasons (such as notifying teammates of current location).
Set this value to True to ensure location information is available only for use with an emergency call.



**Below Content Applies To:** Lync Server 2013

Location information can be used by the Lync client for various reasons (such as notifying teammates of current location).
Set this value to True to ensure location information is available only for use with an emergency call.



**Below Content Applies To:** Skype for Business Server 2015

Location information can be used by the Skype for Business Server 2015 client for various reasons (such as notifying teammates of current location).
Set this value to True to ensure location information is available only for use with an emergency call.



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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -EnhancedEmergencyServiceDisclaimer
**Below Content Applies To:** Lync Server 2013

Text value containing information that will be displayed to users who are connected from locations that cannot be resolved by the location mapping (wiremap) who choose not to enter their location manually.
To remove a service disclaimer from a location policy set this property to a null value:

-EnhancedEmergencyServiceDisclaimer $Null

Location policies, and the EnhancedEmergencyServiceDisclaimer property, should be used in Lync Server 2013 Preview to set disclaimers for the E9-1-1 service.
This differs from Lync Server 2010, where the Set-CsEnhancedEmergencyServiceDisclaimer cmdlet was used to set a global disclaimer for the entire organization.
By using location policies to set these disclaimers, you can create different disclaimers for different locales or different sets of users.



**Below Content Applies To:** Skype for Business Server 2015

Text value containing information that will be displayed to users who are connected from locations that cannot be resolved by the location mapping (wiremap) who choose not to enter their location manually.
To remove a service disclaimer from a location policy set this property to a null value:

-EnhancedEmergencyServiceDisclaimer $Null

Location policies, and the EnhancedEmergencyServiceDisclaimer property, should be used in Skype for Business Server 2015 to set disclaimers for the E9-1-1 service.
By using location policies to set these disclaimers, you can create different disclaimers for different locales or different sets of users.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationRefreshInterval
Specifies the amount of time (in hours) between client requests for Location Information service location update.
The LocationRefreshInterval can be set to any value between 1 and 12; the default value is 4.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new location policy is being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyNumbers
{{Fill EmergencyNumbers Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/167dead6-e4d4-402c-9ea4-91968eae5610(OCS.14).aspx)

[Remove-CsLocationPolicy]()

[Set-CsLocationPolicy]()

[Get-CsLocationPolicy]()

[Grant-CsLocationPolicy]()

[Test-CsLocationPolicy]()

[Get-CsPstnUsage]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/167dead6-e4d4-402c-9ea4-91968eae5610(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/167dead6-e4d4-402c-9ea4-91968eae5610(OCS.16).aspx)

