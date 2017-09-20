---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsWebTrustedCACertificate
schema: 2.0.0
---

# New-CsWebTrustedCACertificate

## SYNOPSIS
Creates a new certificate ID object based on an existing certification authority (CA) certificate.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsWebTrustedCACertificate -Thumbprint <String> -CAStore <CAStore> [<CommonParameters>]
```

## DESCRIPTION
Web Services configuration settings are used to help manage Skype for Business Server Web servers and Web Services.
Among the property values that can be managed using these settings is the TrustedCACerts property, which represents a collection of certification authorities trusted by Skype for Business Phone Edition.
Certificates obtained from trusted CAs allow these clients to enhance the security of connections with servers running Skype for Business Server.
To add a new CA to the collection of trusted certification authorities, you must add the certificate chain for that CA in the local computer's certificate store.
After you have verified that the certificate chain has been installed, you can then use the `New-CsWebTrustedCACertificate` cmdlet to create a certificate ID object that can be added to a collection of Web Services configuration settings.

Note that the certification authority that signs the default server certificate used when installing Skype for Business Server is automatically trusted and does not need to be added to the TrustedCACerts property of a collection of Web Services configuration settings.
TrustedCACerts should only contain the identities of CAs that need to be trusted in addition to the CA that issued the default certificate.
In most cases, the CA that issued the default certificate will be the only certification authority that needs to be trusted.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = New-CsWebTrustedCACertificate -Thumbprint "D543DFF74FEEA425162FD25F342786F1AB453BB3" -CAStore TrustedRootCA

Set-CsWebServiceConfiguration -Identity site:Redmond -TrustedCACerts @{Add=$x}
```

The commands shown in Example 1 create a new trusted CA certificate and then add that certificate to the TrustedCACerts property of the Web Services configuration settings for the Redmond site.
To carry out this task, the first command in the example uses the `New-CsWebTrustedCACertificate` cmdlet to create a new trusted CA certificate; that certificate can be found in the Trusted Root certificate store and has the Thumbprint D543DFF74FEEA425162FD25F342786F1AB453BB3.
The resulting certificate object is stored in a variable named $x.

After the certificate object has been created, the second command in the example adds that certificate to the TrustedCACerts property.
To do this, the command uses the `Set-CsWebServiceConfiguration` cmdlet and the TrustedCACerts parameter.
The parameter value ${Add=$x} tells the cmdlet to add the certificate stored in the variable $x to the collection of trusted CA certificates.


## PARAMETERS

### -Thumbprint
Thumbprint of the certificate which should be trusted by Lync Phone Edition.
You can retrieve certificate issuer and thumbprint values by running this command:

`Get-CsCertificate | Select-Object Issuer, Thumbprint`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CAStore
Indicates the name of the certificate store (on the local computer) where the certificate is stored.
Valid values are:

TrustedRootCA

IntermediateCA

ThirdPartyRootCA

```yaml
Type: CAStore
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
The `New-CsWebTrustedCACertificate` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsWebTrustedCACertificate` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Web.CACertID object.

## NOTES

## RELATED LINKS

[New-CsWebServiceConfiguration]()

[Set-CsWebServiceConfiguration]()
