---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsTrunkConfiguration
schema: 2.0.0
---

# New-CsTrunkConfiguration

## SYNOPSIS
Creates a new trunk configuration that describes the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsTrunkConfiguration [-Identity] <XdsIdentity> [-ConcentratedTopology <Boolean>] [-Description <String>]
 [-EnableBypass <Boolean>] [-EnableMobileTrunkSupport <Boolean>] [-EnablePIDFLOSupport <Boolean>]
 [-EnableReferSupport <Boolean>] [-EnableSessionTimer <Boolean>] [-EnableSignalBoost <Boolean>]
 [-MaxEarlyDialogs <UInt32>] [-OutboundTranslationRulesList <PSListModifier>] [-RemovePlusFromUri <Boolean>]
 [-RTCPActiveCalls <Boolean>] [-RTCPCallsOnHold <Boolean>]
 [-SipResponseCodeTranslationRulesList <PSListModifier>] [-SRTPMode <SRTPMode>] [-Force] [-InMemory] [-WhatIf]
 [-Confirm] [-Enable3pccRefer <Boolean>] [-EnableFastFailoverTimer <Boolean>] [-EnableOnlineVoice <Boolean>]
 [-EnableRTPLatching <Boolean>] [-ForwardCallHistory <Boolean>] [-ForwardPAI <Boolean>]
 [-OutboundCallingNumberTranslationRulesList <PSListModifier>] [-PstnUsages <PSListModifier>]
 [-EnableLocationRestriction <Boolean>] [-NetworkSiteID <String>] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to create a new trunking configuration applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions and whether to require secure real-time protocol (SRTP) encryption.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsTrunkConfiguration -Identity site:Redmond
```

This example creates a new trunk configuration with the Identity site:Redmond.
The remaining properties for this new configuration will be populated with default values.


### -------------------------- Example 2 ------------------------
```
New-CsTrunkConfiguration -Identity site:Redmond -EnableBypass $True
```

This example creates a new trunk configuration with the Identity site:Redmond and enables media bypass.
Media bypass is enabled by assigning the value $True to the EnableBypass parameter.
The remaining properties for this new configuration will be populated with default values.


### -------------------------- Example 3 ------------------------
```
New-CsTrunkConfiguration -Identity site:Redmond

New-CsOutboundTranslationRule -Identity site:Redmond/OTR1 -Pattern '^\+(\d{8})$' -Translation '9$1'
```

This example creates a new trunk configuration with the Identity site:Redmond and then assigns a new outbound translation to that trunk.
The first line of the example calls the `New-CsTrunkConfiguration` cmdlet to create the new trunk configuration with default settings.
The second line calls the `New-CsOutboundTranslationRule` cmdlet.
Notice the value assigned to the Identity: site:Redmond/OTR1.
The first part of the Identity (site:Redmond) defines the scope at which the rule is applied.
This scope matches the Identity of the new trunk configuration, which means this rule will automatically be applied to that configuration.
The scope is followed by a slash (/) then a string, which is simply a unique name for this rule (there can be more than one rule per scope).
After that we pass values to the Pattern and Translation parameters to define this rule.


## PARAMETERS

### -Identity
A unique identifier that includes the scope of the trunk configuration.
Trunk configurations can be created at the Site scope, or at the Service scope for a PSTN Gateway service.
(A global configuration exists by default and cannot be removed or re-created.) For example, site:Redmond (for site) or PstnGateway:Redmond.litwareinc.com (for service).

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

### -ConcentratedTopology
The value of this parameter determines whether there is a well-known media termination point.
(An example of a well-known media termination point would be a PSTN gateway where the media termination has the same IP as the signaling termination.) Set this value to False if the trunk does not have a well-known media termination point.

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
A string describing the purpose of the trunk configuration.

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

### -EnableBypass
The value of this parameter determines whether media bypass is enabled for this trunk.
Set this value to True to enable bypass.
Note that in order for the media bypass to work successfully, certain capabilities must be supported by PSTN gateways, SBCs and PBXs, including:

- The ability to receive forked responses to an Invite.
- Skype for Business Server clients and the media termination point must be able to communicate directly without going through a Mediation Server.
- The gateway subnet must be defined as being at the same site as the client's subnet or, if at a different site, the sites must not be separated by WAN links with constrained bandwidth.

Media bypass can be enabled only under the following circumstances:

- The ConcentratedTopology parameter is set to True
- The EnableReferSupport parameter is set to False and RTCPActiveCalls and RTCPCallsOnHold are set to False, or EnableReferSupport is set to True

Note that if EnableBypass is True and EnableReferSupport is False, bypass calls that are subsequently transferred will become non-bypass.

For media bypass to work for a particular trunk, it needs to be enabled globally as well as for the trunk in question.
Use the `New-CsNetworkMediaBypassConfiguration` cmdlet to enable media bypass globally.

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

### -EnableMobileTrunkSupport
Defines whether the service provider is a mobile carrier.

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

### -EnablePIDFLOSupport
Defines whether to route emergency calls with Presence Information Data Format Location Object (PIDF-LO) through the defined gateway.
Set this parameter to True if emergency calls are to be routed to a certified emergency services provider.
(The location will be transmitted with the call.)

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

### -EnableReferSupport
Defines whether this trunk supports receiving Refer requests from the Mediation Server.

Media bypass can be enabled only under the following circumstances:

- The ConcentratedTopology parameter is set to True
- The EnableReferSupport parameter is set to False and RTCPActiveCalls and RTCPCallsOnHold are set to False, or EnableReferSupport is set to True

Note that if EnableBypass is True and EnableReferSupport is False, bypass calls that are subsequently transferred will become non-bypass.

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

### -EnableSessionTimer
Specifies whether the session timer is enabled.
Session timers are used to determine whether a particular session is still active.

Note that even if this parameter is set to False, session timers can be applicable if the remote connection has session timer enabled.
In such a case, the Mediation Server will reply to session timer probes from the remote entity.

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

### -EnableSignalBoost
When this parameter is set to True the PSTN gateway, IP-PBX, or SBC at the service provider will boost the audio volume in voice streams that are sent to the Mediation Server or Skype for Business Server clients.
If this value is set to False, audio will be boosted either at the Mediation Server (for non-bypass calls) or in Skype for Business Server clients (for bypass calls).

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

### -MaxEarlyDialogs
The maximum number of forked responses a PSTN gateway, IP-PBX, or SBC at the service provider can receive to an Invite that it sent to the Mediation Server.

Default: 20

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundTranslationRulesList
A collection of phone number translation rules that apply to calls handled by Outbound Routing (calls routed to PBX or PSTN destinations).

While this list and these rules can be created directly with this cmdlet, it is recommended that you create the outbound translation rules with the `New-CsOutboundTranslationRule` cmdlet, which will create the rule and assign it to the trunk configuration with the matching scope.

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

### -RemovePlusFromUri
Setting this parameter to True will cause the Mediation Server to remove leading plus signs (+) from Uniform Resource Identifiers (URIs) before sending them on to the service provider.

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

### -RTCPActiveCalls
This parameter determines whether RTCP packets are sent from the PSTN gateway, IP-PBX, or SBC at the service provider for active calls.
An active call in this context is a call where media is allowed to flow in at least one direction.
If RTCPActiveCalls is set to True, the Mediation Server or Skype for Business Server client can terminate a call if it does not receive RTCP packets for a period exceeding 30 seconds.

Note that disabling the checks for received RTCP media for active calls in Skype for Business Server elements removes an important safeguard for detecting a dropped peer and should be done only if necessary.

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

### -RTCPCallsOnHold
This parameter determines whether RTCP packets continue to be sent across the trunk for calls that have been placed on hold and no media packets are expected to flow in either direction.
If Music on Hold is enabled at either the Skype for Business Server client or the trunk, the call will be considered to be active and this property will be ignored.
In these circumstances use the RTCPActiveCalls parameter.

Note that disabling the checks for received RTCP media for active calls in Skype for Business Server elements removes an important safeguard for detecting a dropped peer and should be done only if necessary.

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

### -SipResponseCodeTranslationRulesList
A list of SIP response code translation rules that apply to response codes received from a PSTN gateway, IP-PBX, or SBC at the service provider.
These rules allow the administrator to map SIP response codes with values between 400 and 699 received over a trunk to new values more consistent with Skype for Business Server.

You can create this list and corresponding rules directly with this cmdlet.
However, it is recommended that you create the SIP response code translation rules by calling the `New-CsSipResponseCodeTranslationRule` cmdlet.
That cmdlet will create the rule and assign it to the trunk configuration with the matching scope.


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

### -SRTPMode
The value of this parameter determines the level of support for SRTP to protect media traffic between the Mediation Server and the PSTN Gateway, IP-PBX, or SBC at the service provider.
For media bypass cases, this value must be compatible with the EncryptionLevel setting in the media configuration.
Media configuration is set by using the `New-CsMediaConfiguration` cmdlet and the `Set-CsMediaConfiguration` cmdlet.

Valid values:

- Required: SRTP encryption must be used.
- Optional: SRTP will be used if the gateway supports it.
- NotSupported: SRTP encryption is not supported and therefore will not be used.

Note: SRTPMode is used only if the gateway is configured to use Transport Layer Security (TLS).
If the gateway is configured with Transmission Control Protocol (TCP) as the transport, SRTPMode is internally set to NotSupported.

Default: Required


```yaml
Type: SRTPMode
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

### -Enable3pccRefer
Indicates whether the 3pcc protocol can be used to allow transferred calls to bypass the hosted site.
3pcc is also known as "third party control," and occurs when a third-party is used to connect a pair of callers (for example, an operator placing a call from person A to person B).
The REFER method is a standard SIP method which indicates that the recipient should contact a third-party by using information supplied by the sender.
The default value is False ($False).

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

### -EnableFastFailoverTimer
When set to True, outbound calls that are not answered by the gateway within 10 seconds will be routed to the next available trunk; if there are no additional trunks then the call will automatically be dropped.
In an organization with slow networks and gateway responses, that could potentially result in calls being dropped unnecessarily.

The default value is True.

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

### -EnableOnlineVoice
Indicates whether the SIP trunks support online voice.
With online voice, users have an on-premises Lync Server account but have their voicemail hosted by Office 365.
The default value is False ($False).

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

### -EnableRTPLatching
Indicates whether or not the SIP trunks support RTP latching.
RTP latching is a technology that enables RTP/RTCP connectivity through a NAT (network address translator) device or firewall.
The default value is False ($False).

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

### -ForwardCallHistory
Indicates whether call history information will be forwarded through the trunk.
The default value is False ($False).

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

### -ForwardPAI
Indicates whether the P-Asserted-Identity (PAI) header will be forwarded along with the call.
The PAI header provides a way to verify the identity of the caller.
The default value is False ($False).

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

### -OutboundCallingNumberTranslationRulesList
Collection of outbound calling number translation rules assigned to the trunk.
You can retrieve information about the available rules by running this command:

`Get-CsOutboundCallingNumberTranslationRule`

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

### -PstnUsages
Collection of PSTN usages assigned to the trunk.
You can retrieve information about the available usages by running this command:

`Get-CsPstnUsage`

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

### -EnableLocationRestriction
When set to True, location-based voice routing will be enabled for calls passing through the SIP trunks managed by the specified collection of SIP trunk configuration settings.
With location-based voice routing, the locations of both the user making the call and the user receiving the call are taken into account when calls are routed.
If this property is set to True (the default value is False) then you should also set the NetworkSiteId property.

This parameter was introduced in the February, 2013 version of Lync Server 2013.

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

### -NetworkSiteID
Site ID of the network site associated with the new collection of trunk configuration settings.
If the EnableLocationRestriction property is set to True then location-based voice routing through this trunk will be managed by using the settings configured for the specified site.
Network site IDs can be retrieved by using this command:

`Get-CsNetworkSite | Select NetworkSiteID`

This parameter was introduced in the February, 2013 release of Lync Server 2013.

```yaml
Type: String
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
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration.

## NOTES

## RELATED LINKS

[Remove-CsTrunkConfiguration](Remove-CsTrunkConfiguration.md)

[Set-CsTrunkConfiguration](Set-CsTrunkConfiguration.md)

[Get-CsTrunkConfiguration](Get-CsTrunkConfiguration.md)

[Test-CsTrunkConfiguration](Test-CsTrunkConfiguration.md)

[New-CsOutboundTranslationRule](New-CsOutboundTranslationRule.md)
