---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsCertificate

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about certificates on the local computers that have been configured for use with Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Returns information about certificates on the local computers that have been configured for use with Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about certificates on the local computers that have been configured for use with Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsCertificate [-Type <CertType[]>] [-NetportId <String>] [-Report <String>] [[-Identity] <XdsIdentity>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Lync Server you will need to have the appropriate certificates assigned to the appropriate server roles.

The Get-CsCertificate cmdlet provides a way for you to retrieve detailed information about the certificates that have been configured for use with Lync Server.
Note that the cmdlet only returns information about Lync Server certificates.
If a certificate has not been configured for use with Lync Server (by using the Set-CsCertificate cmdlet) then that certificate will not be returned when you run Get-CsCertificate.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsCertificate cmdlet locally: RTCUniversalServerAdmins.

**Below Content Applies To:** Lync Server 2013

Lync Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Lync Server you will need to have the appropriate certificates assigned to the appropriate server roles.

The Get-CsCertificate cmdlet provides a way for you to retrieve detailed information about the certificates that have been configured for use with Lync Server.
Note that the cmdlet only returns information about Lync Server certificates.
If a certificate has not been configured for use with Lync Server (by using the Set-CsCertificate cmdlet) then that certificate will not be returned when you run Get-CsCertificate.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsCertificate cmdlet locally: RTCUniversalServerAdmins.

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Skype for Business Server 2015 you will need to have the appropriate certificates assigned to the appropriate server roles.

The Get-CsCertificate cmdlet provides a way for you to retrieve detailed information about the certificates that have been configured for use with Skype for Business Server 2015.
Note that the cmdlet only returns information about Skype for Business Server 2015 certificates.
If a certificate has not been configured for use with Skype for Business Server 2015 (by using the Set-CsCertificate cmdlet) then that certificate will not be returned when you run the Get-CsCertificate cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsCertificate
```

The command shown in Example 1 returns information about the certificates currently assigned to Lync Server  components.
This is done by calling Get-CsCertificate without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about the certificates currently assigned to Lync Server components.
This is done by calling Get-CsCertificate without any additional parameters.

Get-CsCertificate

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about the certificates currently assigned to Skype for Business Server 2015 components.
This is done by calling the Get-CsCertificate cmdlet without any additional parameters.

Get-CsCertificate

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsCertificate -Type WebServicesInternal
```

Example 2 retrieves all the Lync Server certificates used for internal Web services.
To do this, the Type parameter is included, along with the parameter value WebServicesInternal.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves all the Lync Server certificates used for internal Web services.
To do this, the Type parameter is included, along with the parameter value WebServicesInternal.

Get-CsCertificate -Type WebServicesInternal

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves all the Skype for Business Server 2015 certificates used for internal Web services.
To do this, the Type parameter is included, along with the parameter value WebServicesInternal.

Get-CsCertificate -Type WebServicesInternal

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsCertificate | Where-Object {$_.NotAfter -lt "9/1/2011"}
```

The preceding command returns all the Lync Server certificates that expire before September 1, 2011.
To carry out this task, the command first uses Get-CsCertificate to return a collection of all the Lync Server certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those certificates that expire before September 1, 2011.
The date specified in this example (9/1/2011) uses the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the Lync Server certificates that expire before September 1, 2012.
To carry out this task, the command first uses Get-CsCertificate to return a collection of all the Lync Server certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those certificates that expire before September 1, 2012.
The date specified in this example (9/1/2012) uses the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

Get-CsCertificate | Where-Object {$_.NotAfter -lt "9/1/2012"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the Skype for Business Server 2015 certificates that expire before September 1, 2012.
To carry out this task, the command first uses the Get-CsCertificate cmdlet to return a collection of all the Skype for Business Server 2015 certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those certificates that expire before September 1, 2012.
The date specified in this example (9/1/2012) uses the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

Get-CsCertificate | Where-Object {$_.NotAfter -lt "9/1/2012"}

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsCertificate | Where-Object {$_.Issuer -eq "Cn=MyCa"}
```

Example 4 returns information about all the Lync Server certificates issued by the certification authority (CA) MyCa.
To do this, the command first calls Get-CsCertificate without any parameters in order to return a collection of all the certificates currently in use.
This collection is then piped to Where-Object, which picks out all the certificates where the Issuer property is equal to (-eq) "Cn=MyCa".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about all the Lync Server certificates issued by the certification authority (CA) MyCa.
To do this, the command first calls Get-CsCertificate without any parameters in order to return a collection of all the certificates currently in use.
This collection is then piped to Where-Object, which picks out all the certificates where the Issuer property is equal to (-eq) "Cn=MyCa".

Get-CsCertificate | Where-Object {$_.Issuer -eq "Cn=MyCa"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about all the Skype for Business Server 2015 certificates issued by the certification authority (CA) MyCa.
To do this, the command first calls the Get-CsCertificate cmdlet without any parameters in order to return a collection of all the certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out all the certificates where the Issuer property is equal to (-eq) "Cn=MyCa".

Get-CsCertificate | Where-Object {$_.Issuer -eq "Cn=MyCa"}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsCertificate | Where-Object {$_.Subject -eq "CN=atl-cs-001.litwareinc.com"}
```

The command shown in Example 5 returns all the Lync Server certificates where the Subject property has been set to CN=atl-cs-001.litwareinc.com.
This is done by using Get-CsCertificate to return a collection of all the Lync Server certificates, then piping that collection to the Where-Object cmdlet.
In turn, Where-Object selects only those certificates where the Subject property is equal to "CN=atl-cs-001.litwareinc.com".

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns all the Lync Server certificates where the Subject property has been set to CN=atl-cs-001.litwareinc.com.
This is done by using Get-CsCertificate to return a collection of all the Lync Server certificates, then piping that collection to the Where-Object cmdlet.
In turn, Where-Object selects only those certificates where the Subject property is equal to "CN=atl-cs-001.litwareinc.com".

Get-CsCertificate | Where-Object {$_.Subject -eq "CN=atl-cs-001.litwareinc.com"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns all the Skype for Business Server 2015 certificates where the Subject property has been set to CN=atl-cs-001.litwareinc.com.
This is done by using the Get-CsCertificate cmdlet to return a collection of all the Skype for Business Server 2015 certificates, then piping that collection to the Where-Object cmdlet.
In turn, the Where-Object cmdlet selects only those certificates where the Subject property is equal to "CN=atl-cs-001.litwareinc.com".

Get-CsCertificate | Where-Object {$_.Subject -eq "CN=atl-cs-001.litwareinc.com"}

## PARAMETERS

### -Type
**Below Content Applies To:** Lync Server 2010

Type of certificate being requested.
Certificate types include, but are not limited to, the following:

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

PICWebService (Microsoft Lync Online 2010 only)

ProvisionService (Microsoft Lync Online 2010 only)

UserDefined

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax returns information about the Default certificate: -Type Default.

You can specify multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



**Below Content Applies To:** Lync Server 2013

Type of certificate being requested.
Certificate types include, but are not limited to, the following:

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

iPhoneAPNService

iPadAPNService

MPNService

PICWebService (Microsoft Lync Online 2010 only)

ProvisionService (Microsoft Lync Online 2010 only)

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax returns information about the Default certificate: -Type Default.

You can specify multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



**Below Content Applies To:** Skype for Business Server 2015

Type of certificate being requested.
Certificate types include, but are not limited to, the following:

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

For example, this syntax returns information about the Default certificate: -Type Default.

You can specify multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



```yaml
Type: CertType[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetportId
Reserved for future use.
This parameter is for certificates dedicated to a specific port, a scenario not yet supported by Lync Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to record detailed information about the procedures carried out by Get-CsCertificate.
The parameter value should be the full path to the HTML file that will be generated; for example: -Report C:\Logs\Certificates.html.
If the specified file already exists, it will automatically be overwritten with the new information.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to record detailed information about the procedures carried out by the Get-CsCertificate cmdlet.
The parameter value should be the full path to the HTML file that will be generated; for example: -Report C:\Logs\Certificates.html.
If the specified file already exists, it will automatically be overwritten with the new information.



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

### -Identity
Enables you to retrieve certificates configured at the global scope (global certificates are copied and distributed to the appropriate computers).
Use this syntax to return information about the global certificates:

Get-CsCertificate -Identity "global"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsCertificate does not accept pipelined input.

###  
None.
The Get-CsCertificate cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsCertificate returns instances of the Microsoft.Rtc.Management.Deployment.CertificateReference object.

###  
The Get-CsCertificate cmdlet returns instances of the Microsoft.Rtc.Management.Deployment.CertificateReference object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/15b8f019-1d00-4389-9abe-18deb8cbf2ea(OCS.14).aspx)

[Import-CsCertificate]()

[Remove-CsCertificate]()

[Request-CsCertificate]()

[Set-CsCertificate]()

[Online Version](http://technet.microsoft.com/EN-US/library/15b8f019-1d00-4389-9abe-18deb8cbf2ea(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/15b8f019-1d00-4389-9abe-18deb8cbf2ea(OCS.16).aspx)

