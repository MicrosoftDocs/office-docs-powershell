---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsWebServiceConfiguration

## SYNOPSIS
Creates a new collection of Web Services configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsWebServiceConfiguration [-Identity] <XdsIdentity> [-AllowAnonymousAccessToLWAConference <Boolean>]
 [-CASigningKeyLength <UInt64>] [-DefaultValidityPeriodHours <UInt64>] [-EnableCertChainDownload <Boolean>]
 [-EnableGroupExpansion <Boolean>] [-InferCertChainFromSSL <Boolean>] [-MACResolverUrl <String>]
 [-MaxCSRKeySize <UInt64>] [-MaxGroupSizeToExpand <UInt32>] [-MaxValidityPeriodHours <UInt64>]
 [-MinCSRKeySize <UInt64>] [-MinValidityPeriodHours <UInt64>] [-SecondaryLocationSourceUrl <String>]
 [-TrustedCACerts <PSListModifier>] [-UseCertificateAuth <Boolean>] [-UsePinAuth <Boolean>]
 [-UseWindowsAuth <UseWindowsAuth>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-ShowDownloadCommunicatorAttendeeLink <Boolean>] [-ShowJoinUsingLegacyClientLink <Boolean>]
 [-AllowExternalAuthentication <Boolean>] [-AutoLaunchLyncWebAccess <Boolean>]
 [-ShowAlternateJoinOptionsExpanded <Boolean>] [-UseWsFedPassiveAuth <Boolean>]
 [-WsFedPassiveMetadataUri <String>] [-CrossDomainAuthorizationList <PSListModifier>]
 [-EnableMediaBasicAuth <Boolean>] [-EnableStatisticsInResponse <Boolean>] [-HstsMaxAgeInSeconds <Int64>]
 [-MobilePreferredAuthType <MobilePreferredAuthType>] [-UseDomainAuthInLWA <Boolean>]
 [-UseWebClientLegacyUI <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Many Skype for Business Server components are web-based: these components either use Web Services or webpages to carry out their tasks.
For example, users employ a Web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server use web pages as the interface between Skype for Business Server Control Panel and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization.
This includes managing group expansion, certificate settings and allowed authentication methods.
Because you can configure different settings at the global, site and service scope (albeit for only the Web Services service), you can customize Web Services capabilities for different users and different locations.

New Web Services configuration settings are created by using the `New-CsWebServiceConfiguration` cmdlet.
Note that these settings can only be created at the site or service scope (and only for the Web Services service); your command will fail if you try to create a new collection at the global scope.
Likewise, your command will fail if you try to create a new collection at, for instance, the Redmond site and that site already hosts a collection of Web service settings.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsWebServiceConfiguration -Identity site:Redmond -EnableGroupExpansion $False -UseCertificateAuth $True
```

The command shown in Example 1 creates a new collection of Web Services configuration settings for the Redmond site (-Identity site:Redmond).
This example includes two optional parameters: EnableGroupExpansion, which is set to False ($False) and UseCertificateAuth, which is set to True ($True).
These two parameters are used to disable group expansion and enable the use of certificates for authentication, respectively.

Note that this command will fail if a collection of Web Services configuration settings has already been created for the Redmond site.
That's because sites are limited to a single collection of Web Services configuration settings.


### -------------------------- Example 2 ------------------------
```
$x = New-CsWebServiceConfiguration -Identity site:Redmond -InMemory

$x.EnableGroupExpansion = $False

$x.UseCertificateAuth = $True

Set-CsWebServiceConfiguration -Instance $x
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the new collection of Web Services configuration settings is initially created in memory only and is only later applied to the Redmond site.
In order to do this, the first command in the example uses the `New-CsWebServiceConfiguration` cmdlet to create a collection of settings for the Redmond site; the InMemory parameter is included to ensure that this collection is created in memory only and is not immediately applied to the Redmond site.
(Because the settings exist only in memory, they must be stored in a variable.
In this case, that's a variable named $x.)

Commands 2 and 3 in the example take these virtual configuration settings and modify the values of the EnableGroupExpansion and UseCertificateAuth properties.
After these changes have been made, the final command uses the `Set-CsWebServiceConfiguration` cmdlet to take the virtual settings and apply them to the Redmond site.
If you do not call the `Set-CsWebServiceConfiguration` cmdlet, no new settings will be assigned to the site.
Instead, your virtual Web Services configuration settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.


### -------------------------- Example 3 --------------------------
```
$x = New-CsWebOrigin -Url "http://fabrikam.com"

New-CsWebServiceConfiguration -Identity "site:Redmond" - CrossDomainAuthorizationList $x
```

The commands shown in Example 3 add the domain http://fabrikam.com to the authorized domains list for a new collection of Web service configuration settings being created for the Redmond site.
To do this, the first command in the example uses the `New-CsWebOrigin` cmdlet to create a domain object for fabrikam.com.
The resulting domain object is stored in a variable named $x.

The second command in the example uses the `New-CsWebServiceConfiguration` cmdlet to create the Web service configuration settings for the Redmond site.
The syntax `- CrossDomainAuthorizationList $x` adds http://fabrikam.com to the collection of domains authorized for cross-domain scripting.


### -------------------------- Example 4 --------------------------
```
$x = New-CsWebOrigin -Url "http://fabrikam.com"

$y = New-CsWebOrigin -Url "http://contoso.com"

New-CsWebServiceConfiguration -Identity "site:Redmond" - CrossDomainAuthorizationList $x, $y
```

Example 4 shows how you can add multiple authorized domains to a new collection of Web service configuration settings.
To add multiple domains, you must create multiple domain objects, storing each in a separate variable.
In Example 4, the domain object for http://fabrikam.com is stored in a variable named $x, while the domain object for http://contoso.com is stored in a variable named $y.

After all the domain objects have been created, all you need to do is include each variable name in the parameter value for the CrossDomainAuthorizationList parameter.
For example:

`-CrossDomainAuthorizationList $x, $y`


## PARAMETERS

### -Identity
Unique identifier for the Web Services configuration settings to be created.
To create settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To create settings configured at the service scope, use syntax similar to this:

`-Identity "service:WebServer:atl-cs-001.litwareinc.com"`

Note that any settings created at the service scope must be assigned to the Web Server service.


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

### -AllowAnonymousAccessToLWAConference
When set to True (the default value), anonymous users will be allowed to attend Skype for Business web App conferences.


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
Sets the size of the certification authority (CA) signing key, the private key used by a CA to sign digital certificates.
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
With group expansion, users can configure a distribution group as a contact and then "expand" that group.
When a group has been expanded, users can see all the individual members of a group and their current presence information.


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
Sets the maximum size of the certificate signing request (CSR) key.
(A CSR is a message sent from an applicant to a CA in order to apply for a digital certificate.) The maximum size can be set to any integer value between 1024 and 16384 bytes.
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
For example, if MaxGroupSizeToExpand is set to 75, only the first 75 members of the group will be displayed any time the group is expanded.

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
Sets the minimum size of the CSR key.
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
URL for a Web service that can process a location request.
This service is typically used only when location requests cannot be resolved locally.

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

### -TrustedCACerts
Collection of certificates representing certificate chains trusted by the Web server.
New certificates added to the collection must be created using the `New-CsWebTrustedCACertificate` cmdlet.

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
Set this value to False ($False) to disable certificate authentication.

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
Set this value to False ($False) to disable PIN authentication.

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

### -ShowDownloadCommunicatorAttendeeLink
This parameter has been deprecated for use with the on-premises version of Skype for Business Server.

If set to True (the default value), users joining a meeting by using a client application other than Skype for Business will see a link that points them toward a download for Skype for Business Web App.


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
Domain names must be prefaced using the http: or the https: prefix.
See Example 3 of this help topic for more information.

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
PARAMVALUE: $true | $false

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
Specifies the time in seconds of the max-age setting in the Strict-Transport-Security (STS) header of an HTTPS response.
A negative value will suppress the STS header in the HTTPS response.
The default is 315,360,000 (one year.)

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
Specifies the preferred authentication type to be used by mobile applications.
If an unsupported method is specified, the web ticket service will not start and an event will be logged by the Skype for Business Server.
Accepted values for the MobilePreferredAuthType parameter are:

None

OAuth

WebTicketServiceAnon

WebTicketServiceWinNegotiate

WebTicketServiceWinNtlm

WebTicketServiceCert

WebTicketServicePin

WsFedPassive

WsFedBearer

WebTicketServiceAuth

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
If true ($True), then the legacy web interface is presented to the client.
If false ($False), the standard web interface is used.
The default is false.

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
The `New-CsWebServiceConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsWebServiceConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[Get-CsWebServiceConfiguration]()

[Remove-CsWebServiceConfiguration]()

[Set-CsWebServiceConfiguration]()
