---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: New-ExchangeCertificate
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# New-ExchangeCertificate

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-ExchangeCertificate cmdlet to create and renew self-signed certificates, and to create certificate requests (also known as certificate signing requests or CSRs) for new certificates and certificate renewals from a certification authority (CA).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-ExchangeCertificate [-BinaryEncoded] [-Confirm] [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>] [-Force] [-FriendlyName <String>] [-GenerateRequest]
 [-IncludeAcceptedDomains] [-IncludeAutoDiscover] [-IncludeServerFQDN] [-IncludeServerNetBIOSName]
 [-Instance <X509Certificate2>] [-KeySize <Int32>] [-PrivateKeyExportable <$true | $false>]
 [-Server <ServerIdParameter>] [-SubjectKeyIdentifier <String>] [-SubjectName <X500DistinguishedName>]
 [-WhatIf] [-RequestFile <String>] [<CommonParameters>]
```

### Set1
```
New-ExchangeCertificate [-Confirm] [-DomainController <Fqdn>] [-DomainName <MultiValuedProperty>] [-Force]
 [-FriendlyName <String>] [-IncludeAcceptedDomains] [-IncludeAutoDiscover] [-IncludeServerFQDN]
 [-IncludeServerNetBIOSName] [-Instance <X509Certificate2>] [-KeySize <Int32>]
 [-PrivateKeyExportable <$true | $false>] [-Server <ServerIdParameter>]
 [-Services <None | IMAP | POP | UM | IIS | SMTP | Federation>] [-SubjectKeyIdentifier <String>]
 [-SubjectName <X500DistinguishedName>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Exchange uses certificates for SSL and TLS encryption.

There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You need to understand how these factors might affect your overall configuration. For more information, see Digital certificates and encryption in Exchange 2016.

Secure Sockets Layer (SSL) is being replaced by Transport Layer Security (TLS) as the protocol that's used to encrypt data sent between computer systems. They're so closely related that the terms "SSL" and "TLS" (without versions) are often used interchangeably. Because of this similarity, references to "SSL" in Exchange topics, the Exchange admin center, and the Exchange Management Shell have often been used to encompass both the SSL and TLS protocols. Typically, "SSL" refers to the actual SSL protocol only when a version is also provided (for example, SSL 3.0). To find out why you should disable the SSL protocol and switch to TLS, check out Protecting you against the SSL 3.0 vulnerability (https://blogs.office.com/2014/10/29/protecting-ssl-3-0-vulnerability/).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ExchangeCertificate
```

This example creates a self-signed certificate with the following settings:

The Subject value is CN=\<ServerName\> (for example, CN=Mailbox01).

The Domains (subject alternative names) value is \<ServerName\>, \<ServerFQDN\> (for example, Mailbox01,Mailbox01.contoso.com).

The Services value is IMAP,POP,SMTP

The Services value SMTP grants the Network Services local security group read access to the certificate's private key.

The Services value SMTP and the Subject value that contains the server name publishes the certificate to Active Directory so that Exchange direct trust can validate the authenticity of the server for mutual TLS.

If you don't want this certificate to replace the existing self-signed certificate that was created during Exchange setup, be sure to select "No" in the prompt that asks you overwrite the existing default SMTP certificate.

### -------------------------- Example 2 --------------------------
```
New-ExchangeCertificate -GenerateRequest -RequestFile "C:\Cert Requests\woodgrovebank.req" -SubjectName "c=US,o=Woodgrove Bank,cn=mail.woodgrovebank.com" -DomainName autodiscover.woodgrovebank.com,mail.fabrikam.com,autodiscover.fabrikam.com
```

This example creates a new certificate request for a certification authority that has the following settings:

The request is Base64 encoded.

The output is displayed onscreen and is also written to the text file C:\\Cert Requests\\woodgrovebank.req.

The Subject value is c=US,o=Woodgrove Bank,cn=mail.woodgrovebank.com

The Domains (subject alternative names) value contains the additional valuesautodiscover.woodgrovebank.com,mail.fabrikam.com, and autodiscover.fabrikam.com.

After you create the certificate request, you send the output to the CA. After you receive the certificate from the CA, you install the certificate by using the Import-ExchangeCertificate cmdlet, and you assign the certificate to Exchange services by using the Enable-ExchangeCertificate cmdlet.

If the CA requires the certificate request in a file that's encoded by DER, use the BinaryEncoding switch.

### -------------------------- Example 3 --------------------------
```
Get-ExchangeCertificate -Thumbprint c4248cd7065c87cb942d60f7293feb7d533a4afc | New-ExchangeCertificate -PrivateKeyExportable $true
```

This example renewsthe existing self-signed certificate that has the thumbprint value c4248cd7065c87cb942d60f7293feb7d533a4afc. You can find the thumbprint value by using the Get-ExchangeCertificate cmdlet. Setting the PrivateKeyExportable parameter to the value $true allows the renewed self-signed certificate to be exported from the server (and imported on other servers).

### -------------------------- Example 4 --------------------------
```
Get-ExchangeCertificate -Thumbprint 8A141F7F2BBA8041973399723BD2598D2ED2D831 | New-ExchangeCertificate -GenerateRequest -RequestFile "C:\Cert Requests\fabrikam_renewal.req"
```

This example creates a request to renew an existing certificate that was issued by a certification authority. The certificate request has the following settings:

The thumbprint value of the existing certificate is 8A141F7F2BBA8041973399723BD2598D2ED2D831. You can find the thumbprint value by using the Get-ExchangeCertificate cmdlet.

The request is Base64 encoded.

The output is displayed onscreen and is also written to the text file C:\\Cert Requests\\fabrikam\_renewal.req.

After you create the certificate renewal request, you send the output to the CA. After you receive the renewed certificate from the CA, you install the certificate by using the Import-ExchangeCertificate cmdlet.

### -------------------------- Example 5 --------------------------
```
Get-ExchangeCertificate -Thumbprint c4248cd7065c87cb942d60f7293feb7d533a4afc | New-ExchangeCertificate
```

This example shows how to renew a self-signed certificate with a specific thumbprint value. You can obtain the thumbprint value in one of two ways.

Select the certificate in the Exchange Administration Center and then select Edit to view properties of the certificate. The thumbprint value is shown in the Exchange Certificate window.

Run the Get-ExchangeCertificate cmdlet to return a list of all certificates installed on the server with their thumbprint values.

## PARAMETERS

### -BinaryEncoded
The BinaryEncoded switch specifies whether to encode the new certificate request by using Distinguished Encoding Rules (DER). You don't need to specify a value with this switch.

If you don't use this switch, the request is Base64 encoded.

This switch is available only when you use the GenerateRequest switch.

For Base64 encoded requests, you send the contents of the file to the certificate authority. For requests that are encoded by DER, you send the certificate file itself.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainName
The DomainName parameter specifies one or more FQDNs or server names for theSubject Alternative Namefield (also known as the Subject Alt Name or SAN field) of the certificate request or self-signed certificate.

If the value in the certificate's Subject field doesn't match the destination server name or FQDN, the requestor looks for a match in the Subject Alternative Name field.

Typically, values include server names (for example, Mailbox01) and FQDNs (for example, mail.contoso.com). You can specify multiple values separated by commas. Valuescan contain the characters a through z, 0 through 9, and the hyphen (-). The length of the domain name can't exceed 255 characters.

The default value includes the name and FQDN of the Exchange server when both of the following conditions are true:

- You don't use this parameter.

- You don't use any of these parameters: IncludeAcceptedDomains, IncludeAutoDiscover, IncludeServerFQDN, or IncludeServerNetBIOSName.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

By default, when you create a self-signed certificate that's enabled for SMTP (no Services parameter, or the Services parameter contains the value SMTP), you're prompted to replace the existing default SMTP certificate with the new one that you're creating. If you use the Force switch, the new SMTP certificate automatically replaces the existing SMTP certificate without asking.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyName
The FriendlyName parameter specifies a friendly name for the certificate request or self-signed certificate. The value must be less than 64 characters.

The default value is Microsoft Exchange. The friendly name value is descriptive text, and doesn't affect the functionality of the certificate.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateRequest
The GenerateRequest switch specifies that you're creating a certificate request for a certification authority (CA). You don't need to specify a value with this switch.

This switch, together with the RequestFile parameter, generates a PKCS #10 certificate request that you send to the CA. How you send the information depends on the CA, but typically, for Base64 encoded requests, you paste the contents in an email message or in the request form on the CA's web site.

After you install the certificate from the certification authority by using the Import-ExchangeCertificate cmdlet, you use the Enable-ExchangeCertficate cmdlet to enable the certificate for Exchange services.

If you don't use this switch,thecommand creates a new self-signed certificate on the Exchange server.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAcceptedDomains
The IncludeAcceptedDomains switch specifies that all accepted domains in the Exchange organization are included in the Subject Alternative Name field of the certificate request or self-signed certificate. You don't need to specify a value with this switch.

When you use this switch:

- If you've already included an accepted domain in the DomainName parameter, the value isn't duplicated in the Subject Alternative Name field.

- For new self-signed certificates, if you don't use the Services parameter, the certificate is only assigned to SMTP.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAutoDiscover
The IncludeAutoDiscover switch specifies whether to add a Subject Alternative Namevalue with the prefix autodiscover for each accepted domain in the Exchange organization. You don't need to specify a value with this switch.

For example, if the organization has the accepted domains woodgrovebank.com and woodgrovebank.co.uk, using this switch results in the addition of the following values in the Subject Alternative Name field:

- autodiscover.woodgrovebank.com

- autodiscover.woodgrovebank.co.uk

When you use this switch:

- If you've already included the value autodiscover.\<AcceptedDomain\> in the DomainName parameter, the value isn't duplicated in the Subject Alternative Name field.

- For new self-signed certificates, if you don't use the Services parameter, the certificate is only assigned to SMTP.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeServerFQDN
The IncludeServerFQDN switch specifies that the FQDN of the Exchange server is included in the Subject Alternative Name field of the new certificate request or self-signed certificate. You don't need to specify a value with this switch.

When you use this switch, and you've already included the server's FQDN in the DomainName parameter, the value isn't duplicated in the Subject Alternative Name field.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeServerNetBIOSName
The IncludeServerNetBIOSName switch specifies that the NetBIOS name of the Exchange server is included in the Subject Alternative Name field of the new certificate request or self-signed certificate. You don't need to specify a value with this switch

When you use this switch, and you've already included the server's NetBIOS name in the DomainName parameter, the value isn't duplicated in the Subject Alternative Name field.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
This parameter has been deprecated and is no longer used.

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -KeySize
The KeySize parameter specifies the size (in bits) of the RSA public key that's associated with the new certificate request or self-signed certificate. Valid values are:

- 1024

- 2048 (This is the default value)

- 4096

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateKeyExportable
The PrivateKeyExportable parameter specifies whether the new self-signed certificate has an exportable private key, and controls whether you can export the certificate from the server (and import the certificate on other servers). Valid values are:

- $true: The private key is exportable, so you can export the certificate from the server.

- $false: The private key isn't exportable, so you can't export the certificate. This is the default value.

This parameter is only meaningful for new self-signed certificates.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Services
The Services parameter specifies the Exchange services that the new self-signed certificate is enabled for. Valid values are:

- None: You can enable the certificate for Exchange services later by using the Enable-ExchangeCertificate cmdlet.

- Federation

- IIS

- IMAP: Don't enable a wildcard certificate for the IMAP4 service. Instead, use the Set-ImapSettings cmdlet to configure the FQDN that clients use to connect to the IMAP4 service.

- POP: Don't enable a wildcard certificate for the POP3 service. Instead, use the Set-PopSettings cmdlet to configure the FQDN that clients use to connect to the POP3 service.

- SMTP: When you enable a certificate for SMTP, you're prompted to replace the default Exchange self-signed certificate that's used to encrypt SMTP traffic between internal Exchange. If you want to replace the default certificate without the confirmation prompt, use the Force switch.

- UM: This value requires that the UMStartupMode parameter on the Set-UMService cmdlet is set to TLS or Dual. If the UMStartupMode parameter is set to the default value of TCP, you can't enable the certificate for the UM service.

- UMCallRouter: This value requires that the UMStartupMode parameter on the Set-UMCallRouterService cmdlet is set to TLS or Dual. If the UMStartupMode parameter is set to the default value TCP, you can't enable the certificate for the UM Call Router service.

You can specify multiple values separated by commas. The default values are IMAP,POP, and SMTP.

You can't use this parameter with the GenerateRequest switch.

Once you enable a certificate for a service, you can't remove the service from the certificate.

```yaml
Type: None | IMAP | POP | UM | IIS | SMTP | Federation
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectKeyIdentifier
The SubjectKeyIdentifier parameter specifies the unique subject key identifier for a newself-signed certificate. For example, run the command: $ski = [System.Guid]::NewGuid().ToString("N"), and use the value $ski for this parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectName
The SubjectName parameter specifies the Subject field of the certificate request or self-signed certificate.

Every certificate requires a value for the Subject field, and only one value is allowed. The requestor attempts to match the destination server name or FQDN with the common name (CN) value of subject.

This parameter uses the syntax: [C=\<CountryOrRegion\>,S=\<StateOrProvince\>,L=LocalityOrCity,O=\<Organization\>,OU=\<Department\>],CN=\<HostNameOrFQDN\>. Although the only required value is CN=\<HostNameOrFQDN\>, you should always include C=\<CountryOrRegion\> for certificate requests, but other values might also be required by the certification authority.

For example, if you want the certificate's subject to be mail.contoso.com in the United States, you can use any of the following values:

- C=US,S=WA,L=Redmond,O=Contoso,OU=IT,CN=mail.contoso.com

- C=US,O=Contoso,CN=mail.contoso.com

- C=US,CN=mail.contoso.com

If you don't use this parameter, the default value is the name of the Exchange server where you run the command (for example, CN=Mailbox01).

For a subject alternative name (SAN) certificate, you should choose one of the values from the DomainName parameter to use in the SubjectName value. In fact, the CN value that you specify for SubjectName is automatically included in the DomainName values.

For a wildcard certificate, use a SubjectName value that contains the wildcard character (\*). For example, C=US,CN=\*.contoso.com.

```yaml
Type: X500DistinguishedName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestFile
The RequestFile parameter specifies the name and path of the certificate request file. The file contains the same information that's displayed on-screen when you generate a Base64 encoded certificate request (you don't use the BinaryEncoded switch).

You can use a local path if the certificate or certificate request is located on the same Exchange server where you're running the command. Otherwise, use a UNC path (\\\\\<Server\>\\\<Share\>). If the value contains spaces, enclose the value in quotation marks (").

You can use this parameter only when you use the GenerateRequest switch.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5e0b61b0-ece6-4d9b-949a-f6a032dd0fb9.aspx)
