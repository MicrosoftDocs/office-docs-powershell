---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsCertificate
schema: 2.0.0
---

# Get-CsCertificate

## SYNOPSIS
Returns information about certificates on the local computers that have been configured for use with Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsCertificate [-Type <CertType[]>] [-NetportId <String>] [-Report <String>] [[-Identity] <XdsIdentity>]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Skype for Business Server you will need to have the appropriate certificates assigned to the appropriate server roles.

The Get-CsCertificate cmdlet provides a way for you to retrieve detailed information about the certificates that have been configured for use with Skype for Business Server.
Note that the cmdlet only returns information about Skype for Business Server certificates.
If a certificate has not been configured for use with Skype for Business Server (by using the Set-CsCertificate cmdlet) then that certificate will not be returned when you run the Get-CsCertificate cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCertificate
```

The command shown in Example 1 returns information about the certificates currently assigned to Skype for Business Server components.
This is done by calling the Get-CsCertificate cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsCertificate -Type WebServicesInternal
```

Example 2 retrieves all the Skype for Business Server certificates used for internal Web services.
To do this, the Type parameter is included, along with the parameter value WebServicesInternal.

### -------------------------- Example 3 --------------------------
```
Get-CsCertificate | Where-Object {$_.NotAfter -lt "9/1/2018"}
```

Example 3 returns all the Skype for Business Server certificates that expire before September 1, 2018.
To carry out this task, the command first uses the Get-CsCertificate cmdlet to return a collection of all the Skype for Business Server certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those certificates that expire before September 1, 2018.
The date specified in this example (9/1/2018) uses the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

### -------------------------- Example 4 --------------------------
```
Get-CsCertificate | Where-Object {$_.Issuer -eq "Cn=MyCa"}
```

Example 4 returns information about all the Skype for Business Server certificates issued by the certification authority (CA) MyCa.
To do this, the command first calls the Get-CsCertificate cmdlet without any parameters in order to return a collection of all the certificates currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out all the certificates where the Issuer property is equal to (-eq) "Cn=MyCa".

### -------------------------- Example 5 --------------------------
```
Get-CsCertificate | Where-Object {$_.Subject -eq "CN=atl-cs-001.litwareinc.com"}
```

The command shown in Example 5 returns all the Skype for Business Server certificates where the Subject property has been set to CN=atl-cs-001.litwareinc.com.
This is done by using the Get-CsCertificate cmdlet to return a collection of all the Skype for Business Server certificates, then piping that collection to the Where-Object cmdlet.
In turn, the Where-Object cmdlet selects only those certificates where the Subject property is equal to "CN=atl-cs-001.litwareinc.com".


## PARAMETERS

### -Type
Type of certificate being requested.
Certificate types include, but are not limited to, the following:

- AccessEdgeExternal
- AudioVideoAuthentication
- DataEdgeExternal
- Default
- External
- Internal
- iPhoneAPNService
- iPadAPNService
- MPNService
- PICWebService (Skype for Business Online only)
- ProvisionService (Skype for Business Online only)
- WebServicesExternal
- WebServicesInternal
- WsFedTokenTransfer

For example, this syntax returns information about the Default certificate: 

`-Type Default`

You can specify multiple types in a single command by separating the certificate types with commas:

`-Type Internal,External,Default`

```yaml
Type: CertType[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Enables you to record detailed information about the procedures carried out by the Get-CsCertificate cmdlet.
The parameter value should be the full path to the HTML file that will be generated; for example: -Report C:\Logs\Certificates.html.
If the specified file already exists, it will automatically be overwritten with the new information.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Enables you to retrieve certificates configured at the global scope (global certificates are copied and distributed to the appropriate computers).
Use this syntax to return information about the global certificates:

`Get-CsCertificate -Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Deployment.CertificateReference


## NOTES


## RELATED LINKS

[Import-CsCertificate](Import-CsCertificate.md)

[Remove-CsCertificate](Remove-CsCertificate.md)

[Request-CsCertificate](Request-CsCertificate.md)

[Set-CsCertificate](Set-CsCertificate.md)

