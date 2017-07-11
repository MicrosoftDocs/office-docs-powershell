---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsLocationPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies an existing location policy.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies an existing location policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsLocationPolicy [[-Identity] <XdsIdentity>] [-ConferenceMode <ConferenceModeEnum>]
 [-ConferenceUri <String>] [-Description <String>] [-EmergencyDialMask <String>]
 [-EmergencyDialString <String>] [-EnhancedEmergencyServicesEnabled <Boolean>]
 [-LocationRequired <LocationRequiredEnum>] [-NotificationUri <String>] [-PstnUsage <String>]
 [-UseLocationForE911Only <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [-EnhancedEmergencyServiceDisclaimer <String>] [-LocationRefreshInterval <Int64>] [-Tenant <Guid>]
 [-EmergencyNumbers <PSListModifier>] [<CommonParameters>]
```

### Instance
```
Set-CsLocationPolicy [-Instance <PSObject>] [-ConferenceMode <ConferenceModeEnum>] [-ConferenceUri <String>]
 [-Description <String>] [-EmergencyDialMask <String>] [-EmergencyDialString <String>]
 [-EnhancedEmergencyServicesEnabled <Boolean>] [-LocationRequired <LocationRequiredEnum>]
 [-NotificationUri <String>] [-PstnUsage <String>] [-UseLocationForE911Only <Boolean>] [-Force] [-WhatIf]
 [-Confirm] [-EnhancedEmergencyServiceDisclaimer <String>] [-LocationRefreshInterval <Int64>] [-Tenant <Guid>]
 [-EmergencyNumbers <PSListModifier>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

The location policy is used to apply settings that relate to Enhanced 9-1-1 (E9-1-1) functionality and client location.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet modifies an existing location policy.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsLocationPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsLocationPolicy"}

Below Content Applies To: Skype for Business Server 2015

The location policy is used to apply settings that relate to Enhanced 9-1-1 (E9-1-1) functionality and client location.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet modifies an existing location policy.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True
```

This command uses the Set-CsLocationPolicy cmdlet to modify the location policy with the Identity site:Redmond.
(In other words, it modifies the location policy applied to the Redmond site.) In this case, the command sets the value of the EnhancedEmergencyServicesEnabled property to True, which will enable E9-1-1 functionality for all users connected to (in this case) the Redmond site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command uses the Set-CsLocationPolicy cmdlet to modify the location policy with the Identity site:Redmond.
(In other words, it modifies the location policy applied to the Redmond site.) In this case, the command sets the value of the EnhancedEmergencyServicesEnabled property to True, which will enable E9-1-1 functionality for all users connected to (in this case) the Redmond site.

Set-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command uses the Set-CsLocationPolicy cmdlet to modify the location policy with the Identity site:Redmond.
(In other words, it modifies the location policy applied to the Redmond site.) In this case, the command sets the value of the EnhancedEmergencyServicesEnabled property to True, which will enable E9-1-1 functionality for all users connected to (in this case) the Redmond site.

Set-CsLocationPolicy -Identity site:Redmond -EnhancedEmergencyServicesEnabled $True

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy | Where-Object {$_.ConferenceUri -ne $null} | Set-CsLocationPolicy -ConferenceMode twoway
```

Example 2 modifies all the location policies in use in the organization that have defined a conferencing URI to have a conferencing mode of two-way.
To carry out this task, the command first uses Get-CsLocationPolicy to return a collection of all the location policies currently defined.
This collection is then piped to the Where-Object cmdlet to narrow the collection down to only those location policies that have a ConferenceUri property that is not empty (not equal to Null).
This results in a collection of location policies that have ConferenceUri values.
This collection is then piped to Set-CsLocationPolicy, which then modifies the value of the ConferenceMode property for each policy in the collection by setting the value to twoway.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 modifies all the location policies in use in the organization that have defined a conferencing URI to have a conferencing mode of two-way.
To carry out this task, the command first uses Get-CsLocationPolicy to return a collection of all the location policies currently defined.
This collection is then piped to the Where-Object cmdlet to narrow the collection down to only those location policies that have a ConferenceUri property that is not empty (not equal to Null).
This results in a collection of location policies that have ConferenceUri values.
This collection is then piped to Set-CsLocationPolicy, which then modifies the value of the ConferenceMode property for each policy in the collection by setting the value to twoway.

Get-CsLocationPolicy | Where-Object {$_.ConferenceUri -ne $null} | Set-CsLocationPolicy -ConferenceMode twoway

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 modifies all the location policies in use in the organization that have defined a conferencing URI to have a conferencing mode of two-way.
To carry out this task, the command first uses the Get-CsLocationPolicy cmdlet to return a collection of all the location policies currently defined.
This collection is then piped to the Where-Object cmdlet to narrow the collection down to only those location policies that have a ConferenceUri property that is not empty (not equal to Null).
This results in a collection of location policies that have ConferenceUri values.
This collection is then piped to the Set-CsLocationPolicy cmdlet, which then modifies the value of the ConferenceMode property for each policy in the collection by setting the value to twoway.

Get-CsLocationPolicy | Where-Object {$_.ConferenceUri -ne $null} | Set-CsLocationPolicy -ConferenceMode twoway

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010

The unique identifier of the location policy you want to modify.
To modify the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Microsoft Lync Server 2010 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



Below Content Applies To: Lync Server 2013

The unique identifier of the location policy you want to modify.
To modify the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Lync Server deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



Below Content Applies To: Skype for Business Server 2015

The unique identifier of the location policy you want to modify.
To modify the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Skype for Business Server 2015 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

A reference to a location policy object.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy, which can be retrieved by calling Get-CsLocationPolicy.
Retrieve this object, change the properties in memory, and then pass the object reference as a value to this parameter to update that location policy.



Below Content Applies To: Skype for Business Server 2015

A reference to a location policy object.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy, which can be retrieved by calling the Get-CsLocationPolicy cmdlet.
Retrieve this object, change the properties in memory, and then pass the object reference as a value to this parameter to update that location policy.



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

### -ConferenceMode
Below Content Applies To: Lync Server 2010, Lync Server 2013

If a value is specified for the ConferenceUri parameter, the ConferenceMode parameter determines whether a third party can participate in the call or can only listen in.
Available values are:

- oneway: Third party can only listen to the conversation between the caller and the Public Safety Answering Point (PSAP) operator.
- twoway: Third party can listen in and participate in the call between the caller and the PSAP operator.



Below Content Applies To: Skype for Business Server 2015

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
For example, "Building 30, 3rd Floor, Northeast corner".

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
In the United States this value is "911".

The string must be made of the digits 0 through 9 and can be from 1 to 10 characters in length.

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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Specifies whether the users associated with this policy are enabled for E9-1-1.
Set the value to True to enable E9-1-1, so Lync Server clients will retrieve location information on registration and include that information when an emergency call is made.



Below Content Applies To: Skype for Business Server 2015

Specifies whether the users associated with this policy are enabled for E9-1-1.
Set the value to True to enable E9-1-1, so Skype for Business Server 2015 clients will retrieve location information on registration and include that information when an emergency call is made.



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
Below Content Applies To: Lync Server 2010

If the client was unable to retrieve a location from the location configuration database, the user can be prompted to manually enter a location.
This parameter accepts the following values:

- no: The user will not be prompted for a location. When a call is made with no location information, the Emergency Service Provider will answer the call and ask for a location.
- yes: The user will be prompted to input location information when the client registers at a new location. The user can dismiss the prompt without entering any information. If information is entered, a call made to 911 will first be answered by the Emergency Service Provider to verify the location before being routed to the PSAP (that is, the 911 operator).
- disclaimer: This option is the same as yes except that the user cannot dismiss the prompt without entering location information. The user can still complete a 911 call, but no other calls can be completed without entering the information. In addition, disclaimer text will be displayed to the user that can alert them to the consequences of declining to enter location information. (The disclaimer text must be set by calling the Set-CsEnhancedEmergencyServiceDisclaimer cmdlet.)

This value is ignored if EnhancedEmergencyServicesEnabled is set to False (the default).
Users will not be prompted for location information.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

If the client was unable to retrieve a location from the location configuration database, the user can be prompted to manually enter a location.
This parameter accepts the following values:

- no: The user will not be prompted for a location. When a call is made with no location information, the Emergency Service Provider will answer the call and ask for a location.
- yes: The user will be prompted to input location information when the client registers at a new location. The user can dismiss the prompt without entering any information. If information is entered, a call made to 911 will first be answered by the Emergency Service Provider to verify the location before being routed to the PSAP (that is, the 911 operator).
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
Below Content Applies To: Lync Server 2010

One or more SIP Uniform Resource Identifiers (URIs) to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Keep in mind that distribution lists and group URIs are not supported.

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.



Below Content Applies To: Lync Server 2013

One or more SIP Uniform Resource Identifiers (URIs) to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Note that, with the release of Lync Server 2013 Preview, distribution lists can now be configured as a notification URI.

The string must be from 1 to 256 characters in length and must begin with the prefix sip:.



Below Content Applies To: Skype for Business Server 2015

One or more SIP Uniform Resource Identifiers (URIs) to be notified when an emergency call is made.
For example, the company security office could be notified through an instant message whenever an emergency call is made.
If the caller's location is available that location will be included in the notification.

Multiple SIP URIs can be included as a comma-separated list.
For example, -NotificationUri sip:security@litwareinc.com,sip:kmyer@litwareinc.com.
Note that, with the release of Skype for Business Server 2015 distribution lists can now be configured as a notification URI.

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
The public switched telephone network (PSTN) usage that will be used to determine which voice route will be used to route 911 calls from clients using this profile.
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
Below Content Applies To: Lync Server 2010

Location information can be used by the Microsoft Lync 2010 client for various reasons (such as notifying teammates of current location).
Set this value to True to ensure location information is available only for use with an emergency call.



Below Content Applies To: Lync Server 2013

Location information can be used by the Lync Server client for various reasons (such as notifying teammates of current location).
Set this value to True to ensure location information is available only for use with an emergency call.



Below Content Applies To: Skype for Business Server 2015

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
Below Content Applies To: Lync Server 2013

Text value containing information that will be displayed to users who are connected from locations that cannot be resolved by the location mapping (wiremap) who choose not to enter their location manually.
To remove a service disclaimer from a location policy set this property to a null value:

-EnhancedEmergencyServiceDisclaimer $Null

Location policies, and the EnhancedEmergencyServiceDisclaimer property, should be used in Lync Server 2013 Preview to set disclaimers for the E9-1-1 service.
This differs from Lync Server 2010, where the Set-CsEnhancedEmergencyServiceDisclaimer cmdlet was used to set a global disclaimer for the entire organization.
By using location policies to set these disclaimers, you can create different disclaimers for different locales or different sets of users.



Below Content Applies To: Skype for Business Server 2015

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the location policy is being modified.
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
Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.
Accepts pipelined input of location policy objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/efa2840c-2e21-408e-b9fe-6f9998c81db2(OCS.14).aspx)

[New-CsLocationPolicy]()

[Remove-CsLocationPolicy]()

[Get-CsLocationPolicy]()

[Grant-CsLocationPolicy]()

[Test-CsLocationPolicy]()

[Get-CsPstnUsage]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/efa2840c-2e21-408e-b9fe-6f9998c81db2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/efa2840c-2e21-408e-b9fe-6f9998c81db2(OCS.16).aspx)

