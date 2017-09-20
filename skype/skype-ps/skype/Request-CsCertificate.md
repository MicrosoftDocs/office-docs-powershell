---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Request-CsCertificate
schema: 2.0.0
---

# Request-CsCertificate

## SYNOPSIS
Provides a way to request certificates for use with servers running Skype for Business Server and server roles.
Also provides a way to check the status of existing certificate requests and, if needed, to cancel any (or all) of those requests.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ByNew
```
Request-CsCertificate [-New] -Type <CertType[]> [-CA <String>] [-CaAccount <String>] [-CaPassword <String>]
 [-City <String>] [-ClientEKU <Boolean>] [-ComputerFqdn <Fqdn>] [-Country <String>] [-DomainName <String>]
 [-FriendlyName <String>] [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>]
 [-KeyAlg <KeyAlgorithmIdentifier>] [-KeySize <Int32>] [-Organization <String>] [-OU <String>]
 [-Output <String>] [-PrivateKeyExportable <Boolean>] [-State <String>] [-Template <String>] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [-AllSipDomain] [<CommonParameters>]
```

### ByClear
```
Request-CsCertificate [-Clear] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-RequestId <Int32>]
 [<CommonParameters>]
```

### ByList
```
Request-CsCertificate [-List] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-RequestId <Int32>]
 [<CommonParameters>]
```

### ByRetrieve
```
Request-CsCertificate [-Retrieve] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-RequestId <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server and vice versa.
In order to fully implement Skype for Business Server, you will need to have the appropriate certificates assigned to the appropriate server roles.

One way to request certificates for use with Skype for Business Server is to call the `Request-CsCertificate` cmdlet.
Although it is possible to use other standard Windows tools in order to request certificates for use with Skype for Business Server, one major advantage to using the `Request-CsCertificate` cmdlet is the fact that the cmdlet will analyze your topology before contacting the certification authority (CA).
Based on that analysis, the `Request-CsCertificate` cmdlet will automatically request a certificate with the proper subject name and subject alternative name fields.

The `Request-CsCertificate` cmdlet is designed to request certificates specifically for use with Skype for Business Server.
It is not designed to be an all-purpose certificate management tool.

In addition to requesting new certificates, this cmdlet can also be used to review any pending certificate requests, provided those requests were made using the `Request-CsCertificate` cmdlet.
The `Request-CsCertificate` cmdlet can also be used to delete pending certificate requests, as long as those requests were made using the cmdlet.

When attempting to retrieve certificate requests you might receive an error message if you have any revoked requests; currently the `Request-CsCertificate` cmdlet only supports these request types: Issued, Denied and Pending.
If you encounter problems due to a revoked certificate use a command similar to this to clear the revoked request (where 224 is the RequestID of the revoked certificate request):

`Request-CsCertificate -Clear -RequestID 224`

After that you should be able to retrieve certificate requests.


## EXAMPLES

### -------------------------- Example 1 -----------------------
```
Request-CsCertificate -New -Type WebServicesExternal -CA "atl-ca-001.litwareinc.com\myca"
```

The command shown in Example 1 creates a new certificate request: it contacts the CA atl-ca-001.litwareinc.com\myca and requests a new WebServicesExternal certificate.


### -------------------------- Example 2 -----------------------
```
Request-CsCertificate -List
```

Example 2 lists all the pending certificate requests made by using the `Request-CsCertificate` cmdlet.


### -------------------------- Example 3 -----------------------
```
Request-CsCertificate -New -Type WebServicesExternal -Output C:\Certificates\WebServicesExternal.cer
```

Example 3 uses the Output parameter to create an offline certificate request.


### -------------------------- Example 4 -----------------------
```
Request-CsCertificate -New -Type Default,WebServicesInternal,WebServicesExternal -ComputerFqdn "atl-cs-001.litwareinc.com" -CA "atl-ca-001.litwareinc.com\myca" -FriendlyName "Standard Edition Certficate" -Template jcila -PrivateKeyExportable $True -DomainName "atl-cs-001.litwareinc.com,atl-ext.litwareinc.com"
```

Example 4 is a more detailed (and more realistic) example of how to use the `Request-CsCertificate` cmdlet.
This example requests a certificate for use with the Standard Edition of Skype for Business Server.


### -------------------------- Example 5 -----------------------
```
Request-CsCertificate -New -Type Default,WebServicesInternal,WebServicesExternal -ComputerFqdn "atl-cs-001.litwareinc.com" -CA "atl-ca-001.litwareinc.com\myca" -FriendlyName "Enterprise Edition Pool Certificate" -Template jcila -PrivateKeyExportable $True -DomainName "pool1.litwareinc.com,pool1int.litwareinc.com,pool1ext.litwareinc.com"
```

In Example 5, a pool certificate is requested for use with the Enterprise Edition of Skype for Business Server.


### -------------------------- Example 6 -----------------------
```
Request-CsCertificate -New -Type Internal -ComputerFqdn "atl-edge-001" -CA "atl-ca-001.litwareinc.com\myca" -FriendlyName "Internal Edge Certificate" -Template jcila -PrivateKeyExportable $True -DomainName "atl-edge-001.litwareinc.com, ap.litwareinc.com"
```

Example 6 shows how you can request a certificate for the internal Edge Server.


### -------------------------- Example 7 -----------------------
```
Request-CsCertificate -New -Type AccessEdgeExternal,DataEdgeExternal,AudioVideoAuthentication -ComputerFqdn "atl-edge-001" -CA "atl-ca-001.litwareinc.com\myca" -FriendlyName "External Edge Certificate" -Template jcila -PrivateKeyExportable $True -DomainName "atl-edge-001.litwareinc.com,ap.litwareinc.com,dp.litwareinc.com,atl-edge-001"
```

Example 7 is a variation of the command shown in Example 6, In this case, however, the request is for the external Edge Server.


## PARAMETERS

### -Type
Type of certificate being requested.
Certificate types include (but are not limited to):

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

iPhoneAPNService

iPadAPNService

MPNService

PICWebService (Skype for Business Online only)

ProvisionService (Skype for Business Online only)

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax requests a new Default certificate: `-Type Default`.

You can specify multiple types in a single command by separating the certificate types with commas:

`-Type Internal,External,Default`


```yaml
Type: CertType[]
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CA
Fully qualified domain name (FQDN) that points to the CA.
For example: `-CA "atl-ca-001.litwareinc.com\myca"`.
To obtain a list of known CAs, type the following at the Windows PowerShell prompt, and then press ENTER:

certutil

The Config property returned by Certutil indicates the location of a CA.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaAccount
Account name of the user requesting the new certificate, using the format domain_name\user_name.
For example: `-CaAccount "litwareinc\kenmyer"`.
If not specified, the `Request-CsCertificate` cmdlet will use the credentials of the logged-on user when requesting the new certificate.


```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaPassword
Password for the user requesting the new certificate (as specified using the CaAccount parameter).

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
City where the certificate will be deployed.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Clear
When present, deletes any pending certificate requests made by using the `Request-CsCertificate` cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: ByClear
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientEKU
Set this parameter to True if the certificate is to be used for client authentication.
This type of authentication is required if you want your users to be able to exchange instant messages with people who have accounts with AOL.
The EKU portion of the parameter name is short for extended key usage; the extended key usage field lists the valid uses for the certificate.

```yaml
Type: Boolean
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerFqdn
FQDN of the computer for which the certificate is being requested.
When present, this parameter forces the `Request-CsCertificate` cmdlet to connect to the Central Management store in order to locate the specified computer.
You should always use the computer name when requesting a certificate, even when requesting a pool certificate.
The `Request-CsCertificate` cmdlet will automatically add the pool name to the Subject Name of any certificate obtained using this cmdlet.


```yaml
Type: Fqdn
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Country
Country/region where the certificate will be deployed.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainName
Comma-separated list of fully-qualified domain names that should be added to the certificate's Subject Alternative Name field.
For example:

`-DomainName "atl-cs-001.litwareinc.com, atl-cs-002.litwareinc.com,atl-cs-003.litwareinc.com"`


```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyName
User-assigned name that makes it easier to identify the certificate.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the `Request-CsCertificate` cmdlet on a computer with an account in your domain.


```yaml
Type: Fqdn
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container then any domain controller can be used and this parameter can be omitted.


```yaml
Type: Fqdn
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyAlg
Indicates the type of cryptographic algorithm to be used in generating the public and private keys for the new certificate.
Valid key algorithms include:

RSA

ECDH_P256

ECDH_P384

ECDH_P521

```yaml
Type: KeyAlgorithmIdentifier
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeySize
Indicates the size (in bits) of the private key used by the certificate.
Larger key sizes are more secure, but require more processing overhead in order to be decrypted.

Valid key sizes are 1024; 2048; and 4096.
For example: `-KeySize 2048`.

```yaml
Type: Int32
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -List
When present, lists any pending certificate requests made by using the `Request-CsCertificate` cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: ByList
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -New
When present, indicates that you want to request a new certificate.

```yaml
Type: SwitchParameter
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
Name of the organization requesting the new certificate.
For example: `-Organization "Litwareinc"`.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Active Directory organizational unit for the computer that will be assigned the new certificate.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Output
Path to the certificate file.
If you want to create an offline certificate request use the Output parameter and specify a file path for the certificate request; for example: `-Output C:\Certificates\NewCertificate.pfx`.
That will create a certificate request file that can then be emailed to a certification authority for processing.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateKeyExportable
Set this parameter to True if you want to make the certificate's private key exportable.
When a private key is exportable, the certificate can be copied and used on multiple computers.

```yaml
Type: Boolean
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Retrieve
When present, retrieves any pending certificate requests made by using the `Request-CsCertificate` cmdlet and attempts to complete the operation and import the requested certificate.


```yaml
Type: SwitchParameter
Parameter Sets: ByRetrieve
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
U.S.
state where the certificate will be deployed.
For example: `-State WA`.

```yaml
Type: String
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
Indicates the certificate template to be used when generating the new certificate; for example: `-Template "WebServer"`.
The requested template must be installed on the CA.
Note that the value entered must be the template name, not the template display name.

```yaml
Type: String
Parameter Sets: ByNew
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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\Certificates.html"`

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

### -RequestId
Identification number associated with a certificate request.
The RequestID parameter provides a way for you to list, retrieve, or clear an individual certificate.

```yaml
Type: Int32
Parameter Sets: ByClear, ByList, ByRetrieve
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllSipDomain
When present, all your SIP domains are automatically added to the certificates Subject Alternative Name field.
If not present, only the primary SIP domain is added by default.
However, additional domains can be specified by using the DomainName parameter.

```yaml
Type: SwitchParameter
Parameter Sets: ByNew
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Request-CsCertificate` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the `Request-CsCertificate` cmdlet helps manage instances of the Microsoft.Rtc.Management.Deployment.CertificateReference object.

## NOTES

## RELATED LINKS

[Get-CsCertificate]()

[Import-CsCertificate]()

[Remove-CsCertificate]()

[Set-CsCertificate]()
