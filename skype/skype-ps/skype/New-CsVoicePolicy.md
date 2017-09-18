---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVoicePolicy

## SYNOPSIS
Creates a new voice policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsVoicePolicy [-Identity] <XdsIdentity> [-AllowCallForwarding <Boolean>] [-AllowPSTNReRouting <Boolean>]
 [-AllowSimulRing <Boolean>] [-Description <String>] [-EnableBWPolicyOverride <Boolean>]
 [-EnableCallPark <Boolean>] [-EnableCallTransfer <Boolean>] [-EnableDelegation <Boolean>]
 [-EnableMaliciousCallTracing <Boolean>] [-EnableTeamCall <Boolean>] [-Name <String>]
 [-PreventPSTNTollBypass <Boolean>] [-PstnUsages <PSListModifier>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-CallForwardingSimulRingUsageType <CallForwardingSimulRingUsageType>]
 [-CustomCallForwardingSimulRingUsages <PSListModifier>] [-EnableVoicemailEscapeTimer <Boolean>]
 [-PSTNVoicemailEscapeTimer <Int64>] [-Tenant <Guid>] [-VoiceDeploymentMode <VoiceDeploymentMode>]
 [-EnableBusyOptions <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new voice policy.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
The policy created by this cmdlet determines whether many of these features are enabled or disabled.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsVoicePolicy -Identity UserVoicePolicy1
```

This example creates a new per-user voice policy (with default settings) that has an Identity of UserVoicePolicy1.


### -------------------------- Example 2 --------------------------
```
New-CsVoicePolicy UserVoicePolicy2 -AllowSimulRing $false -PstnUsages @{add = "Local"}
```

This example creates a new per-user voice policy with an Identity of UserVoicePolicy2 and sets the AllowSimulRing property to False, meaning that any users to which this policy is assigned are not enabled for simultaneous ring, a feature that determines whether a second phone (such as a mobile phone) can be set to ring every time the user's office phone rings.
This command also adds "Local" to the list of PSTN usages, which associates this voice policy with a voice route that also uses the Local PSTN usage.
(Note that the Identity parameter is not explicitly specified.
The Identity parameter is a positional parameter and therefore if you put the identity value first in the list of parameters you don't need to explicitly state that it's the Identity.)


### -------------------------- Example 3 --------------------------
```
$a = Get-CsPstnUsage

New-CsVoicePolicy site:Redmond -PstnUsages @{add = $a.Usage}
```

This example creates a new voice policy for site Redmond and applies all the PSTN usages defined for the organization to this policy.
The first line in this example calls the `Get-CsPstnUsage` cmdlet to retrieve the global set of PSTN usages for the organization and save it in the variable $a.
The second line calls the `New-CsVoicePolicy` cmdlet to create the new voice policy for site Redmond.
A value is passed to the PstnUsages parameter to add the list contained in the global set of PSTN usages to this policy.
Note the syntax of the add value: $a.Usage.
This refers to the Usage property of the PSTN usage settings, which contains the list of PSTN usages.


## PARAMETERS

### -Identity
A unique identifier specifying the scope or the name of the policy.
Valid values for this cmdlet are site:\<site name\> (where \<site name\> is the name of the Skype for Business Server site to which this policy applies, such as site:Redmond) and a string designating a per-user policy, such as RedmondVoicePolicy.
A global policy exists by default.


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

### -AllowCallForwarding
If this parameter is set to True, calls can be forwarded.
If this parameter is set to False, calls cannot be forwarded.

Default: True

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

### -AllowPSTNReRouting
When this parameter is set to True, calls made to internal numbers homed on another pool will be routed through the public switched telephone network (PSTN) when the pool or WAN is unavailable.

Default: True

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

### -AllowSimulRing
Simultaneous ring is a feature that allows multiple phones to ring when a single number is dialed.
Setting this parameter to True enables this feature.
If this parameter is set to False, simultaneous ring cannot be configured for any user to which this policy is assigned.

Default: True

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

### -Description
A description of the voice policy.

Maximum length: 1040 characters.

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

### -EnableBWPolicyOverride
Policies can be set to manage network configuration, including limiting bandwidth.
Setting this parameter to True will allow override of these policies.
In other words, if this parameter is set to True, no bandwidth checks will be made and calls will go through regardless of the call admission control (CAC) settings.

Default: False

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

### -EnableCallPark
The Call Park application allows a call to be held, or parked, at a certain number within a range of numbers for later retrieval.
Setting this parameter to True enables the application.
If this parameter is set to False, users assigned to this policy cannot park calls that have been dialed to their phone number.

Default: False

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

### -EnableCallTransfer
Determines whether calls can be transferred to another number.
If this parameter is set to True, calls can be transferred; if the parameter is set to False, calls cannot be transferred.

Default: True

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

### -EnableDelegation
Call delegation allows a user to answer calls for another user or make calls on the other user's behalf.
For example, a manager can set up call delegation so that all incoming calls ring both the manager's phone and the phone of an administrator.
Setting this parameter to True allows users with this policy to set up call delegation.
Setting this parameter to False disables call delegation.

Default: True

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

### -EnableMaliciousCallTracing
Malicious call tracing is a standard that is in place to trace calls that a user designates as malicious.
These calls can be traced even if caller ID is blocked.
The trace is available only to the proper authorities, not the user.
Setting this property to True enables the ability to set a trace on malicious calls.

Default: False

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

### -EnableTeamCall
Team Call allows a user to designate a group of other users whose phones will ring when that user's number is called.
This feature is useful in teams where, for example, anyone from a team can answer incoming calls from customers.
Setting this parameter to True enables this feature.

Default: True

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

### -Name
A displayable name describing this policy.

Default: DefaultPolicy



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

### -PreventPSTNTollBypass
PSTN tolls are more commonly known as long-distance charges.
Organizations can sometimes bypass these tolls by implementing a Voice over Internet Protocol (VoIP) solution that enables branch offices to connect by using network calls.
Setting this parameter to True will send calls through the PSTN and incur charges rather than going through the network and bypassing the tolls.

Default: False


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

### -PstnUsages
A list of PSTN usages available to this policy.
The PSTN usage ties a voice policy to a phone route.

Any string value can be placed into this list, as long as the value exists in the current global list of PSTN usages.
(Duplicate strings are not allowed; all strings must be unique.) The list of PSTN usages can be retrieved by calling the `Get-CsPstnUsage` cmdlet.

By default this list is empty.
If you don't supply a value for this parameter, you'll receive a warning message stating that users granted this policy will not be able to make outbound PSTN calls.

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

### -CallForwardingSimulRingUsageType
Provides a way for administrators to manage call forwarding and simultaneous ringing.
Allowed values are:

VoicePolicyUsage - The default voice policy usage is used to manage call forwarding and simultaneous ringing on all calls.
This is the default value.

InternalOnly - Call forwarding and simultaneous ringing are limited to calls made from one Lync user to another.

CustomUsage.
A custom PSTN usage will be used to manage call forwarding and simultaneous ringing.
This usage must be specified using the CustomCallForwardingSimulRingUsages parameter.


```yaml
Type: CallForwardingSimulRingUsageType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomCallForwardingSimulRingUsages
Custom PSTN usage used to manage call forwarding and simultaneous ringing.
To add a custom usage to voice policy use syntax similar to this:

`-CustomCallForwardingSimulRingUsages @{Add="RedmondPstnUsage"}`

To remove a custom usage, use this syntax:

`-CustomCallForwardingSimulRingUsages @{Remove="RedmondPstnUsage"}`

Note that the usage must exist before it can be used with the CustomCallForwardingSimulRingUsages parameter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVoicemailEscapeTimer
When set to True, calls to an unanswered mobile device will be routed to the organization voicemail instead of the mobile device provider's voicemail.
If a call is answered "too soon" (that is, before the value configured for the PSTNVoicemailEscapeTimer property has elapsed) it will be assumed that the mobile device is not available and the call will be routed to the organization voicemail.

The default value is False.

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

### -PSTNVoicemailEscapeTimer
Amount of time (in milliseconds) used to determine whether or not a call has been answered "too soon". If a response is received within this time interval Skype for Business Server will assume that the mobile device is not available and automatically switch the call to the organization's voicemail.
If no response is received before the time interval is reached then the call will be allowed to proceed.
The default value is 1500 milliseconds.


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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new voice policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceDeploymentMode
Allowed values are:

* OnPrem
* Online
* OnlineBasic
* OnPremOnlineHybrid

The default value is OnPrem.

```yaml
Type: VoiceDeploymentMode
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBusyOptions
{{Fill EnableBusyOptions Description}}

```yaml
Type: Boolean
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
This cmdlet creates an instance of the Microsoft.Rtc.Management.WritableConfig.Voice.VoicePolicy object.

## NOTES

## RELATED LINKS

[Remove-CsVoicePolicy]()

[Set-CsVoicePolicy]()

[Get-CsVoicePolicy]()

[Grant-CsVoicePolicy]()

[Test-CsVoicePolicy]()

[Get-CsPstnUsage]()
