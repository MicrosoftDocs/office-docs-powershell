---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsWebServiceConfiguration
schema: 2.0.0
---

# Set-CsWebServiceConfiguration

## SYNOPSIS
Modifies an existing collection of Web Services configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsWebServiceConfiguration [[-Identity] <XdsIdentity>] [-AllowAnonymousAccessToLWAConference <Boolean>]
 [-CASigningKeyLength <UInt64>] [-DefaultValidityPeriodHours <UInt64>] [-EnableCertChainDownload <Boolean>]
 [-EnableGroupExpansion <Boolean>] [-InferCertChainFromSSL <Boolean>] [-MACResolverUrl <String>]
 [-MaxCSRKeySize <UInt64>] [-MaxGroupSizeToExpand <UInt32>] [-MaxValidityPeriodHours <UInt64>]
 [-MinCSRKeySize <UInt64>] [-MinValidityPeriodHours <UInt64>] [-SecondaryLocationSourceUrl <String>]
 [-ShowDownloadCommunicatorAttendeeLink <Boolean>] [-ShowJoinUsingLegacyClientLink <Boolean>]
 [-TrustedCACerts <PSListModifier>] [-UseCertificateAuth <Boolean>] [-UsePinAuth <Boolean>]
 [-UseWindowsAuth <UseWindowsAuth>] [-WhatIf] [-Confirm] [-Force] [-AllowExternalAuthentication <Boolean>]
 [-AutoLaunchLyncWebAccess <Boolean>] [-ShowAlternateJoinOptionsExpanded <Boolean>]
 [-UseWsFedPassiveAuth <Boolean>] [-WsFedPassiveMetadataUri <String>]
 [-CrossDomainAuthorizationList <PSListModifier>] [-EnableMediaBasicAuth <Boolean>]
 [-EnableStatisticsInResponse <Boolean>] [-HstsMaxAgeInSeconds <Int64>]
 [-MobilePreferredAuthType <MobilePreferredAuthType>] [-UseDomainAuthInLWA <Boolean>]
 [-UseWebClientLegacyUI <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsWebServiceConfiguration [-Instance <PSObject>] [-AllowAnonymousAccessToLWAConference <Boolean>]
 [-CASigningKeyLength <UInt64>] [-DefaultValidityPeriodHours <UInt64>] [-EnableCertChainDownload <Boolean>]
 [-EnableGroupExpansion <Boolean>] [-InferCertChainFromSSL <Boolean>] [-MACResolverUrl <String>]
 [-MaxCSRKeySize <UInt64>] [-MaxGroupSizeToExpand <UInt32>] [-MaxValidityPeriodHours <UInt64>]
 [-MinCSRKeySize <UInt64>] [-MinValidityPeriodHours <UInt64>] [-SecondaryLocationSourceUrl <String>]
 [-ShowDownloadCommunicatorAttendeeLink <Boolean>] [-ShowJoinUsingLegacyClientLink <Boolean>]
 [-TrustedCACerts <PSListModifier>] [-UseCertificateAuth <Boolean>] [-UsePinAuth <Boolean>]
 [-UseWindowsAuth <UseWindowsAuth>] [-WhatIf] [-Confirm] [-Force] [-AllowExternalAuthentication <Boolean>]
 [-AutoLaunchLyncWebAccess <Boolean>] [-ShowAlternateJoinOptionsExpanded <Boolean>]
 [-UseWsFedPassiveAuth <Boolean>] [-WsFedPassiveMetadataUri <String>]
 [-CrossDomainAuthorizationList <PSListModifier>] [-EnableMediaBasicAuth <Boolean>]
 [-EnableStatisticsInResponse <Boolean>] [-HstsMaxAgeInSeconds <Int64>]
 [-MobilePreferredAuthType <MobilePreferredAuthType>] [-UseDomainAuthInLWA <Boolean>]
 [-UseWebClientLegacyUI <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Many Skype for Business Server components are web-based: these components either use Web Services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server Control Panel use web pages as the interface between Skype for Business Server and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings and allowed authentication methods.
Because you can configure different settings at the global, site and service scope (albeit for the only the Web Services service), you can customize Web Services capabilities for different users and different locations.
The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion; certificate settings; and allowed authentication methods.
Because you can configure different settings at the global, site and service scope (Web Services service only) you can customize Web Services capabilities for different users and different locations.

Custom settings (for example, custom validity periods for certificates) can be specified at the time you create a new Web Services configuration setting collection.
Alternatively, you can modify the property values for an existing collection by using the `Set-CsWebServiceConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsWebServiceConfiguration -Identity site:Redmond -EnableGroupExpansion $True
```

Example 1 enables group expansion for the Web Services configuration settings applied to the Redmond site (-Identity site:Redmond).
This is done by including the EnableGroupExpansion property and setting the parameter value to True.


### -------------------------- Example 2 ------------------------
```
Get-CsWebServiceConfiguration -Filter "site:*" | Set-CsWebServiceConfiguration -MaxValidityPeriodHours 16
```

In Example 2, the maximum validity period for all the Web Services configuration settings applied at the site scope is changed to 16 hours.
To carry out this task, the `Get-CsWebServiceConfiguration` cmdlet is called along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity begins with the characters "site:".
This collection is then piped to the `Set-CsWebServiceConfiguration` cmdlet, which takes each item in the collection and changes the MaxValidityPeriodHours property to 16.


### -------------------------- Example 3 ------------------------
```
Get-CsWebServiceConfiguration | Where-Object {$_.EnableGroupExpansion -eq $True} | Set-CsWebServiceConfiguration -MaxGroupSizeToExpand 400
```

In Example 3, the group expansion size is set to 400 for each collection of Web Services configuration settings that allow group expansion.
To do this, the `Get-CsWebServiceConfiguration` cmdlet is called without any parameters; this returns a collection of all the Web Services configuration settings used in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the EnableGroupExpansion property is equal to True.
In turn, this filtered collection is piped to the `Set-CsWebServiceConfiguration` cmdlet, which takes each item in the collection and sets the value of the MaxGroupSizeToExpand property to 400.


### -------------------------- Example 4 ------------------------
```
Set-CsWebServiceConfiguration -Identity global -ShowDownloadCommunicatorAttendeeLink $True
```

The command shown in Example 4 shows how the global Web Services settings can be configured so that any person joining a meeting using a client application other than Skype for Business Server will first be shown a link to a site where he or she can download Skype for Business Web App.
This is done by including the ShowDownloadCommunicatorAttendeeLink parameter and setting the parameter value to $True.


### -------------------------- Example 5 --------------------------
```
$x = New-CsWebOrigin -Url "http://fabrikam.com"

Set-CsWebServiceConfiguration -Identity "site:Redmond" - CrossDomainAuthorizationList @{Add=$x}
```

The commands shown in Example 5 add the domain http://fabrikam.com to an existing collection of Web service configuration settings.
To carry out this task, the first command in the example uses the `New-CsWebOrigin` cmdlet to create a domain object for fabrikam.com.
The resulting domain object is stored in a variable named $x.

The second command in the example uses the `Set-CsWebServiceConfiguration` cmdlet to add http://fabrikam.com to the Web service configuration settings applied to the Redmond site.
The syntax @{Add=$x} adds the domain to any domains already in the collection of domains authorized for cross-domain scripting.
To replace the existing collection with just http://fabrikam.com use the syntax @{Replace=$x}.


### -------------------------- Example 6 --------------------------
```
$x = Get-CsWebServiceConfiguration -Identity "site:Redmond"

$x.CrossDomainAuthorizationList.RemoveAt(0)

Set-CsWebServiceConfguration -Instance $x
```

In Example 6, the first domain listed in the collection of domains authorized for cross-domain scripting is removed from the web service configuration settings for the Redmond site.
To carry out this task, the first command in the example uses the `Get-CsWebServiceConfiguration` cmdlet to return the current settings for the Redmond site.
Those values are stored in a variable named $x.

In the second command, the RemoveAt method is used to remove the first domain from the CrossDomainAuthorizationList property.
Domains are stored in this property as arrays, with the first domain having an index number of 0, the second domain having an index number of 1 and so on.
To remove the second domain (index number 1) from the CrossDomainAuthorizationList property you would use this syntax:

`$x.CrossDomainAuthorizationList.RemoveAt(1)`

Note that command 2 removes the domain from the copy of the Redmond site stored in the variable $x and not from the site itself.
To actually remove the domain from the Redmond site, the third command in the example uses the `Set-CsWebServiceConfiguration` cmdlet and the Instance parameter to overwrite settings for the Redmond site with the settings stored in $x.


### -------------------------- Example 7 --------------------------
```
Set-CsWebServiceConfiguration -Identity "site:Redmond" - CrossDomainAuthorizationList $Null
```

The command shown in Example 7 modifies the web service configuration settings for the Redmond site by removing all the domains that are authorized for cross-domain scripting.
This is done by setting the CrossDomainAuthorizationList property to a null value ($Null).


## PARAMETERS

### -Identity
Unique identifier for the Web Services configuration settings to be modified.
To modify settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To modify settings configured at the service scope, use syntax similar to this:

`-Identity "service:WebServer:atl-cs-001.litwareinc.com"`

To modify settings configured at the global scope, you can use this syntax:

`-identity global`

If the Identity parameter is not used then the `Set-CsWebServiceConfiguration` cmdlet will automatically modify the global collection.


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

### -AllowAnonymousAccessToLWAConference
When set to True, anonymous users will be allowed to attend Skype for Business Web App conferences.


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

### -CASigningKeyLength
Sets the size of the CA signing key, the private key used by a certification authority (CA) to sign digital certificates.
The signing key length can be set to any integer value between 2048 and 16384 bytes; the default value is 2048.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultValidityPeriodHours
When using certificate authentication, clients can request the period of time (in hours) that the certificate remains valid.
DefaultValidityPeriodHours represents the amount of time a certificate will remain valid if the client does not request a custom validity period.

DefaultValidityPeriodHours can be any integer value between 8 hours and 8760 hours (365 days).
The default value is 4320 (180 days).

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCertChainDownload
If set to True, servers presented with an authentication certificate will download the certificate chain for that certificate.
The certificate chain traces an individual certificate back to the issuing CA.
Certificates will not be accepted for authentication unless the certificate's CA is trusted.

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

### -EnableGroupExpansion
If set to True, group expansion will be enabled in Skype for Business.
With group expansion, users can configure a distribution group as a contact, then "expand" that group.
When a group has been expanded, users can see the individual members of a group and their current presence information.


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

### -InferCertChainFromSSL
If set to True, servers will use the certificate information included in the Secure Sockets Layer (SSL) protocol to determine the issuing CA.
Certificates will not be accepted for authentication unless the certificate's CA is trusted.

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

### -MACResolverUrl
URL for a Web service capable of performing Media Access Control (MAC) resolution.
MAC resolution involves taking the MAC address of a connected client and returning the chassis and port IDs of the network switch that client is connected to.
MAC resolution is used by the Enhanced 9-1-1 service.


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

### -MaxCSRKeySize
Sets the maximum size of the Certificate Signing Request (CSR) key.
(A CSR is a message sent from an applicant to a CA in order to apply for a digital certificate.) The maximum size for a CSR key can be set to any integer value between 1024 and 16384 bytes.
The default value is 16384.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxGroupSizeToExpand
Represents the maximum number of people that will be displayed when a group is expanded.
For example, if MaxGroupSizeToExpand is set to 75 only the first 75 members of the group will be displayed any time the group is expanded.

MaxGroupSizeToExpand can be set to any integer value between 1 and 1000, inclusive.
The default value is 100.

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

### -MaxValidityPeriodHours
When using certificate authentication, clients can request the period of time (in hours) that the certificate remains valid.
MaxValidityPeriodHours represents the maximum amount of time a client can request.

MaxValidityPeriodHours can be any integer value between 8 hours and 8760 hours (365 days).
The default value is 8760.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinCSRKeySize
Sets the minimum size of the Certificate Signing Request (CSR) key.
The minimum size can be set to any integer value between 1024 and 16384 bytes.
The default value is 16384.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinValidityPeriodHours
When using certificate authentication, clients can request the period of time (in hours) that the certificate remains valid.
MinValidityPeriodHours represents the minimum amount of time a client can request.

MinValidityPeriodHours can be any integer value between 8 hours and 4320 hours (180 days).
The default value is 8.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryLocationSourceUrl
URL for a web service that can process a location request.
This service is only used when location requests cannot be resolved locally.

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

### -ShowDownloadCommunicatorAttendeeLink
This parameter has been deprecated for use with the on-premises version of Skype for Business Server.

If set to True (the default value), users joining a meeting by using a client application other than Skype for Business will see a link that points them to a download for Skype for Business Web App.


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

### -ShowJoinUsingLegacyClientLink
This parameter has been deprecated for use with the on-premises version of Skype for Business Server.

If set to True, users joining a meeting by using a client application other than Skype for Business will be given the opportunity to join the meeting by using their current client application.
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

### -TrustedCACerts
Collection of certificates representing certificate chains trusted by the Web Server.
New certificates added to the collection must be created by using the `New-CsWebTrustedCACertificate` cmdlet.

This collection is not used if the InferCertChainFromSSL property is set to True.

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

### -UseCertificateAuth
When set to True (the default value), clients can be authenticated using certificates.
Set this value to False to disable certificate authentication.

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

### -UsePinAuth
When set to True (the default value), clients can be authenticated using personal identification numbers (PINs).
Set this value to False to disable PIN authentication.

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

### -UseWindowsAuth
Determines how (and if) users will be authenticated using Windows authentication; that is, using the same credentials they used when they logged on to Windows.
Valid values are:

Negotiate - The client and server will work together to determine the proper authentication protocol (either Kerberos or NTLM).

NTLM - Windows authentication will be allowed, but only using the NTLM protocol.

None - Windows authentication will not be allowed.

```yaml
Type: UseWindowsAuth
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

### -Force
Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.


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

### -AllowExternalAuthentication
When set to True (the default value), OAuth authentication can be used to authenticate external users.

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

### -AutoLaunchLyncWebAccess
This parameter has been deprecated for use with the on-premises version of Skype for Business Server.

When set to True, Skype for Business Web App will automatically be used as the default web popup for joining an online conference, provided that the prerequisites for using Skype for Business Web App (for example, Silverlight have been installed and Internet Explorer is not blocking pop-up windows) have been met.

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

### -ShowAlternateJoinOptionsExpanded
This parameter has been deprecated for use with the on-premises version of Skype for Business Server.

When set to True then alternate options for joining an online conference will automatically be expanded and shown to users.
When set to False (the default value) these options will be available, but the user will have to display the list of options for themselves.


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

### -UseWsFedPassiveAuth
When set to True, allows for passive authentication: authentication of users by using URL redirection or smart linking.
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

### -WsFedPassiveMetadataUri
URI used by the WS-federation Web requestor protocol.

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

### -CrossDomainAuthorizationList
Collection of domains allowed to host web applications that send cross-domain scripting requests to the Skype for Business Server deployment.

Domains to be added to the list must be created using the `New-CsWebOrigin` cmdlet and then added to the new collection of Web service configuration settings.
Note, too that domain names must be prefaced using the http: or the https: prefix.
See Examples 5, 6 and 7 of this help topic for more information.

This parameter was introduced in the February, 2013 release of Lync Server 2013.

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

### -EnableMediaBasicAuth
When set to True ($True), enables basic authentication for media.

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

### -EnableStatisticsInResponse
When set to True ($True) the X-MS-WebInfraStats header is included in all HTTP responses.
The default value is False ($False).

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

### -HstsMaxAgeInSeconds
Specifies the value of max-age in Strict-Transport-Security header in a HTTPS response.
Default value is 315360000.
A negative value means Strict-Transport-Security header will not appear in HTTPS responses.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobilePreferredAuthType
Specifies the default authentication method used for mobile client connectivity.
Values can include: None | OAuth | WebTicketServiceAnon | WebTicketServiceWinNegotiate | WebTicketServiceWinNtlm | WebTicketServiceCert | WebTicketServicePin | WsFedPassive | WsFedBearer | WebTicketServiceAuth.

Note that if this value is set to a method that is not supported, the web ticket service may not start and an error will be generated in the Event log.

```yaml
Type: MobilePreferredAuthType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDomainAuthInLWA
When set to True, domain authentication can be employed as a way to authenticate Skype for Business Web App users.

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

### -UseWebClientLegacyUI
When set to True, the user interface is displayed for Lync Server 2013.
When set to False, the Skype for Business user interface is displayed.

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
Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.
The `Set-CsWebServiceConfiguration` cmdlet accepts pipelined input of the Web Services settings object.

## OUTPUTS

###  
The `Set-CsWebServiceConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[Get-CsWebServiceConfiguration](Get-CsWebServiceConfiguration.md)

[New-CsWebServiceConfiguration](New-CsWebServiceConfiguration.md)

[Remove-CsWebServiceConfiguration](Remove-CsWebServiceConfiguration.md)
