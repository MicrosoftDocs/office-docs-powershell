---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAccessEdgeConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies the property values of an existing collection of Access Edge configuration settings for computers running the Access Edge service.
The Access Edge service running on these computers (also known as Edge servers) provides a way for users outside your internal network to communicate with users inside that internal network.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies the property values of an existing collection of Access Edge configuration settings for computers running the Access Edge service.
The Access Edge service running on these computers (also known as Edge servers) provides a way for users outside your internal network to communicate with users inside that internal network.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsAccessEdgeConfiguration [[-Identity] <XdsIdentity>] [-AllowAnonymousUsers <Boolean>]
 [-AllowFederatedUsers <Boolean>] [-AllowOutsideUsers <Boolean>] [-EnableArchivingDisclaimer <Boolean>]
 [-KeepCrlsUpToDateForPeers <Boolean>] [-MarkSourceVerifiableOnOutgoingMessages <Boolean>]
 [-OutgoingTlsCountForFederatedPartners <UInt32>] [-Force] [-WhatIf] [-Confirm]
 [-CertificatesDeletedPercentage <UInt32>] [-DiscoveredPartnerReportPeriodMinutes <UInt32>]
 [-DiscoveredPartnerStandardRate <UInt32>] [-EnableDiscoveredPartnerContactsLimit <Boolean>]
 [-EnableUserReplicator <Boolean>] [-MaxAcceptedCertificatesStored <UInt32>]
 [-MaxContactsPerDiscoveredPartner <UInt32>] [-MaxRejectedCertificatesStored <UInt32>]
 [-DnsSrvCacheRecordCount <UInt32>] [-SkypeSearchUrl <String>] [<CommonParameters>]
```

### Instance
```
Set-CsAccessEdgeConfiguration [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### DefaultRoute
```
Set-CsAccessEdgeConfiguration [-AllowAnonymousUsers <Boolean>] [-AllowFederatedUsers <Boolean>]
 [-AllowOutsideUsers <Boolean>] [-DefaultRouteFqdn <String>] [-EnableArchivingDisclaimer <Boolean>]
 [-IsPublicProvider <Boolean>] [-KeepCrlsUpToDateForPeers <Boolean>]
 [-MarkSourceVerifiableOnOutgoingMessages <Boolean>] [-OutgoingTlsCountForFederatedPartners <UInt32>]
 [-VerificationLevel <VerificationLevelType>] [-Force] [-WhatIf] [-Confirm] [-UseDefaultRouting]
 [-CertificatesDeletedPercentage <UInt32>] [-DiscoveredPartnerReportPeriodMinutes <UInt32>]
 [-DiscoveredPartnerStandardRate <UInt32>] [-EnableDiscoveredPartnerContactsLimit <Boolean>]
 [-EnableUserReplicator <Boolean>] [-MaxAcceptedCertificatesStored <UInt32>]
 [-MaxContactsPerDiscoveredPartner <UInt32>] [-MaxRejectedCertificatesStored <UInt32>]
 [-DnsSrvCacheRecordCount <UInt32>] [-SkypeSearchUrl <String>] [<CommonParameters>]
```

### DnsSrvRouting
```
Set-CsAccessEdgeConfiguration [-AllowAnonymousUsers <Boolean>] [-AllowFederatedUsers <Boolean>]
 [-AllowOutsideUsers <Boolean>] [-EnableArchivingDisclaimer <Boolean>] [-EnablePartnerDiscovery <Boolean>]
 [-KeepCrlsUpToDateForPeers <Boolean>] [-MarkSourceVerifiableOnOutgoingMessages <Boolean>]
 [-OutgoingTlsCountForFederatedPartners <UInt32>] [-UseDnsSrvRouting] [-Force] [-WhatIf] [-Confirm]
 [-BeClearingHouse <Boolean>] [-CertificatesDeletedPercentage <UInt32>]
 [-DiscoveredPartnerReportPeriodMinutes <UInt32>] [-DiscoveredPartnerStandardRate <UInt32>]
 [-DiscoveredPartnerVerificationLevel <VerificationLevelType>]
 [-EnableDiscoveredPartnerContactsLimit <Boolean>] [-EnableUserReplicator <Boolean>]
 [-MaxAcceptedCertificatesStored <UInt32>] [-MaxContactsPerDiscoveredPartner <UInt32>]
 [-MaxRejectedCertificatesStored <UInt32>] [-DnsSrvCacheRecordCount <UInt32>] [-SkypeSearchUrl <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Edge servers (also known as access proxy servers) provide a way for you to extend the capabilities of Microsoft Lync Server 2010 to people who are not logged on to your internal network.
For example, if you have remote users, authenticated users who log on to Lync Server over the Internet rather than through the internal network, you will need to set up an Edge server in order to provide access to these users.
Likewise, Edge Servers are required if you want to establish federation with another organization, or if you want to give your users the right to communicate with people who have accounts with a public instant messaging service such as Yahoo!, AOL, or MSN.
Access Edge servers are located on the perimeter network, and are used to make and validate SIP connections between users inside and users outside your internal network.

In Lync Server 2010, the Access Edge servers are managed using a single, global collection of configuration settings; the Set-CsAccessEdgeConfiguration cmdlet enables you to modify these global settings.
Note that the properties that can be modified depend on the routing type you choose for your Edge Servers.
For example, if you choose to use Domain Name System (DNS) service routing, you will see and be able to change the property values BeClearinghouse and EnablePartnerDiscovery.
If you use default routing, those two property values will not be available.
Instead, you will see and be able to change the property values VerificationLevel and IsPublicProvider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAccessEdgeConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAccessEdgeConfiguration"}

Below Content Applies To: Lync Server 2013

Edge servers (also known as access proxy servers) provide a way for you to extend the capabilities of Lync Server to people who are not logged on to your internal network.
For example, if you have remote users, authenticated users who log on to Lync Server over the Internet rather than through the internal network, you will need to set up an Edge server in order to provide access to these users.
Likewise, Edge Servers are required if you want to establish federation with another organization, or if you want to give your users the right to communicate with people who have accounts with a public instant messaging service such as Yahoo!, AOL, or MSN.
Access Edge servers are located on the perimeter network, and are used to make and validate SIP connections between users inside and users outside your internal network.

In Lync Server, the Access Edge servers are managed using a single, global collection of configuration settings; the Set-CsAccessEdgeConfiguration cmdlet enables you to modify these global settings.
Note that the properties that can be modified depend on the routing type you choose for your Edge Servers.
For example, if you choose to use Domain Name System (DNS) service routing, you will see and be able to change the property values BeClearinghouse and EnablePartnerDiscovery.
If you use default routing, those two property values will not be available.
Instead, you will see and be able to change the property values VerificationLevel and IsPublicProvider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAccessEdgeConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAccessEdgeConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Edge servers (also known as access proxy servers) provide a way for you to extend the capabilities of Skype for Business Server 2015 to people who are not logged on to your internal network.
For example, if you have remote users, authenticated users who log on to Skype for Business Server 2015 over the Internet rather than through the internal network, you will need to set up an Edge server in order to provide access to these users.
Likewise, Edge Servers are required if you want to establish federation with another organization, or if you want to give your users the right to communicate with people who have accounts with a public instant messaging service such as Yahoo!, AOL, or MSN.
Access Edge servers are located on the perimeter network, and are used to make and validate SIP connections between users inside and users outside your internal network.

In Skype for Business Server 2015, the Access Edge servers are managed using a single, global collection of configuration settings; the Set-CsAccessEdgeConfiguration cmdlet enables you to modify these global settings.
Note that the properties that can be modified depend on the routing type you choose for your Edge Servers.
For example, if you choose to use Domain Name System (DNS) service routing, you will see and be able to change the property values BeClearinghouse and EnablePartnerDiscovery.
If you use default routing, those two property values will not be available.
Instead, you will see and be able to change the property values VerificationLevel and IsPublicProvider.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsAccessEdgeConfiguration -AllowAnonymousUsers $True -VerificationLevel "UseSourceVerification"
```

In Example 1, two properties of the Access Edge configuration settings are modified: the AllowAnonymousUsers property is set to True and the VerificationLevel property is set to UseSourceVerification.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, two properties of the Access Edge configuration settings are modified: the AllowAnonymousUsers property is set to True and the VerificationLevel property is set to UseSourceVerification.

Set-CsAccessEdgeConfiguration -AllowAnonymousUsers $True -VerificationLevel "UseSourceVerification"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, two properties of the Access Edge configuration settings are modified: the AllowAnonymousUsers property is set to True and the VerificationLevel property is set to UseSourceVerification.

Set-CsAccessEdgeConfiguration -AllowAnonymousUsers $True -VerificationLevel "UseSourceVerification"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsAccessEdgeConfiguration -UseDefaultRouting -DefaultRouteFqdn "atl-edge-001.litwareinc.com"
```

The command shown in Example 2 changes the routing method for the Edge server to default routing.
In order to do this the command must include both the UseDefaultRouting parameter and the DefaultRouteFqdn parameter, along with a parameter value that specifies the fully qualified domain name of the Edge server.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 changes the routing method for the Edge server to default routing.
In order to do this the command must include both the UseDefaultRouting parameter and the DefaultRouteFqdn parameter, along with a parameter value that specifies the fully qualified domain name of the Edge server.

Set-CsAccessEdgeConfiguration -UseDefaultRouting -DefaultRouteFqdn "atl-edge-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 changes the routing method for the Edge server to default routing.
In order to do this the command must include both the UseDefaultRouting parameter and the DefaultRouteFqdn parameter, along with a parameter value that specifies the fully qualified domain name of the Edge server.

Set-CsAccessEdgeConfiguration -UseDefaultRouting -DefaultRouteFqdn "atl-edge-001.litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Set-CsAccessEdgeConfiguration -UseDnsSrvRouting -EnablePartnerDiscovery $True
```

The preceding command changes the routing method for the Edge server to DNS server routing.
This requires the use of two parameters: UseDnsSrvRouting (with no parameter value) and EnablePartnerDiscovery (with the parameter value $True).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 changes the routing method for the Edge server to DNS server routing.
This requires the use of two parameters: UseDnsSrvRouting (with no parameter value) and EnablePartnerDiscovery (with the parameter value $True).

Set-CsAccessEdgeConfiguration -UseDnsSrvRouting -EnablePartnerDiscovery $True

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 changes the routing method for the Edge server to DNS server routing.
This requires the use of two parameters: UseDnsSrvRouting (with no parameter value) and EnablePartnerDiscovery (with the parameter value $True).

Set-CsAccessEdgeConfiguration -UseDnsSrvRouting -EnablePartnerDiscovery $True

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier of the Access Edge configuration settings to be returned.
Because you can only have a single, global instance of these settings, you do not have to include the Identity when calling Set-CsAccessEdgeConfiguration.
However, if you prefer, you can use the following syntax to modify the global settings: -Identity global.



Below Content Applies To: Skype for Business Server 2015

Unique identifier of the Access Edge configuration settings to be returned.
Because you can only have a single, global instance of these settings, you do not have to include the Identity when calling the Set-CsAccessEdgeConfiguration cmdlet.
However, if you prefer, you can use the following syntax to modify the global settings: -Identity global.



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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### -AllowAnonymousUsers
Indicates whether or not anonymous users (that is, unauthenticated users) are allowed to cross the firewall and join meetings and conferences.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowFederatedUsers
Indicates whether internal users are allowed to communicate with users from federated domains.
This property also determines whether internal users can communicate with users in a split domain scenario.
(In a split domain, some of your users have accounts hosted on-premises, while others have accounts hosted off-premises.) The default value is False.

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOutsideUsers
Below Content Applies To: Lync Server 2010, Lync Server 2013

Indicates whether users can access Lync Server across the Internet.
This includes both anonymous users and remote users who are trying to log on to the system.
The default value is True.



Below Content Applies To: Skype for Business Server 2015

Indicates whether users can access Skype for Business Server 2015 across the Internet.
This includes both anonymous users and remote users who are trying to log on to the system.
The default value is True.



```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultRouteFqdn
Below Content Applies To: Lync Server 2010

Fully qualified domain name (FQDN) of the server used for federation requests.
This parameter is required if you use default routing.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Fully qualified domain name (FQDN) of the server used for federation requests.
This parameter is required if you use default routing.

Note that you must delete all your hosting providers and all your public providers before you can assign a new default route.



```yaml
Type: String
Parameter Sets: DefaultRoute
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableArchivingDisclaimer
If set to True, Edge Servers send an archiving notification header to federated and clearinghouse partners.
This notification (which informs people that instant messaging (IM) conversations might be archived) can be displayed in the conversation window of a federated or clearinghouse user.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePartnerDiscovery
Below Content Applies To: Lync Server 2010, Lync Server 2013

If True, Lync Server will use DNS records to try and discover partner domains not listed in the AllowedDomains list.
If False, Lync Server will only federate with domains found on the AllowedDomains list.
This parameter is required if you use DNS service routing.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

If True, Skype for Business Server 2015 will use DNS records to try and discover partner domains not listed in the AllowedDomains list.
If False, Skype for Business Server 2015 will only federate with domains found on the AllowedDomains list.
This parameter is required if you use DNS service routing.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsPublicProvider
Must be set to True if the default route requires a public instant messaging license.

```yaml
Type: Boolean
Parameter Sets: DefaultRoute
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepCrlsUpToDateForPeers
Determines whether or not Edge servers periodically check the certificate revocation lists (CRLs) for federated domain certificates.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkSourceVerifiableOnOutgoingMessages
If True, outgoing messages are marked as verifiable; this enables federated domains to determine the verification level for each message.
If False, outgoing messages are all marked as unverifiable.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutgoingTlsCountForFederatedPartners
Specifies the maximum number of Transport Layer Security (TLS) connections that can be used for each federated partner.
The minimum number of TLS connections is 1, and the maximum number is 4.
By default, OutgoingTlsCountForFederatedPartners is set to 4.
This parameter should not be changed unless you are instructed to do so by Microsoft support personnel.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDnsSrvRouting
Indicates that Edge servers should rely on DNS SRV records when sending and receiving federation requests.
This is the default routing method.

```yaml
Type: SwitchParameter
Parameter Sets: DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerificationLevel
If you are using default routing, the VerificationLevel property is used to monitor and assess the verification level of incoming messages.
Valid values are:

AlwaysVerifiable: All requests received on the default route are marked as verified.
If a verification header is not present it will automatically be added to the message.

AlwaysUnverifiable: Messages are passed only if the addressee (the user the message is intended for) has configured an Allow ACE (access control entry) for the person who sent the message.

UseSourceVerification: Message verification is based on the verification level included with the message.
If no verification header is present then the message will be marked as unverified.

```yaml
Type: VerificationLevelType
Parameter Sets: DefaultRoute
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

### -BeClearingHouse
Indicates whether your Edge servers are directly connected to other organizations.
The default value is False.
This parameter should not be changed unless you are instructed to do so by Microsoft support personnel.

```yaml
Type: Boolean
Parameter Sets: DnsSrvRouting
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultRouting
Below Content Applies To: Lync Server 2010

{{Fill UseDefaultRouting Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Indicates that administrators must specify the fully qualified domain name of the server used to send and receive federation requests.
If you include the UseDefaultRouting parameter then you must also include the DefaultRouteFqdn parameter.



```yaml
Type: SwitchParameter
Parameter Sets: DefaultRoute
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificatesDeletedPercentage
The default value is 20.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveredPartnerReportPeriodMinutes
The default value is 60.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveredPartnerStandardRate
The default value is 20.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveredPartnerVerificationLevel
Sets the verification level for messages sent to and from the discovered partner.
Allowed values are:

* AlwaysVerifiable
* AlwaysUnverifiable
* UseSourceVerification

```yaml
Type: VerificationLevelType
Parameter Sets: DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDiscoveredPartnerContactsLimit
Below Content Applies To: Lync Server 2013

The default value is true ($True).



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value), enables user enumeration protection for Discovered Partner federated peers.



```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUserReplicator
The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAcceptedCertificatesStored
Maximum number of allowed certificates cached by the Edge Server.
The default value is 1000.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxContactsPerDiscoveredPartner
Maximum number of contacts allowed per discovered partner.
The default value is 1000.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRejectedCertificatesStored
Maximum number of rejected certificates cached by the Edge Server.
The default value is 500.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsSrvCacheRecordCount
Maximum number of DNS SRV records that can be maintained in the cache.
SRV records are used to specify service locations and port numbers.

```yaml
Type: UInt32
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkypeSearchUrl
URL for the Skype Graph Search service.
This service enables Skype for Business to search for Skype contacts.

```yaml
Type: String
Parameter Sets: Identity, DefaultRoute, DnsSrvRouting
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
Set-CsAccessEdgeConfiguration does not accept pipelined input.

###  
None.
The Set-CsAccessEdgeConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsAccessEdgeConfiguration does not return any objects or values.

###  
The Set-CsAccessEdgeConfiguration cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f3108b59-1ab2-4288-a470-57d741e7e569(OCS.14).aspx)

[Get-CsAccessEdgeConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/f3108b59-1ab2-4288-a470-57d741e7e569(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f3108b59-1ab2-4288-a470-57d741e7e569(OCS.16).aspx)

