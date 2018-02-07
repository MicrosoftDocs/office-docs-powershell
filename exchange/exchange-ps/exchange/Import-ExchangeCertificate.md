---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Import-ExchangeCertificate

## SYNOPSIS
!!! Exchange Server 2010

Use the Import-ExchangeCertificate cmdlet to import a certificate or chain of certificates.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Import-ExchangeCertificate cmdlet to import a certificate or chain of certificates.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Import-ExchangeCertificate cmdlet to import certificates on Exchange servers. You use this cmdlet to install certificates that were exported from other servers, and to complete pending certification requests (also known as certificate signing requests or CSRs) from certification authorities (CAs).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Import-ExchangeCertificate -FileData <Byte[]> [-Confirm] [-DomainController <Fqdn>] [-FriendlyName <String>]
 [-Password <SecureString>] [-PrivateKeyExportable <$true | $false>] [-Server <ServerIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set2
```
Import-ExchangeCertificate -Instance <String[]> [-Confirm] [-DomainController <Fqdn>] [-FriendlyName <String>]
 [-Password <SecureString>] [-PrivateKeyExportable <$true | $false>] [-Server <ServerIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set3
```
Import-ExchangeCertificate -FileName <String> [-Confirm] [-DomainController <Fqdn>] [-FriendlyName <String>]
 [-Password <SecureString>] [-PrivateKeyExportable <$true | $false>] [-Server <ServerIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can use the Import-ExchangeCertificate cmdlet for the following purposes:

- To import a certificate or chain of certificates from a PKCS #7 file that has been issued by a certification authority (CA). PKCS #7 is the Cryptographic Message Syntax Standard, a syntax used for digitally signing or encrypting data using public key cryptography, including certificates.

- To import an existing certificate and private key from a PKCS #12 (.pfx or .p12) file to the certificate store on the local computer. PKCS #12 is the Personal Information Exchange Syntax Standard, a file format used to store certificates with corresponding private keys protected with a password. The standard is specified by RSA Laboratories. For more information, see the PKCS #12: Personal Information Exchange Syntax Standard (https://www.rsasecurity.com/rsalabs/node.asp?id=2138) Web site.

  There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You must understand how these factors may affect your overall configuration. Before you continue, see Understanding TLS Certificates.

  In Microsoft Exchange Server 2010, to import data from a file, you must use the Get-Content cmdlet to retrieve file data and use the FileData parameter to specify the retrieved data. This can be done in a two-step process, or in a single step. Examples shown in this cmdlet use the single-step approach. For more information about importing and exporting files in Exchange 2010, see Understanding Importing and Exporting Files in the Exchange Management Shell.

The certificate may be published in Active Directory for the purposes of direct trust by using mutual TLS if the following conditions are true:

- The certificate is marked as an SMTP TLS certificate.

- The Subject Name on the certificate matches the fully qualified domain name (FQDN) of the local computer.

The certificate may be published in Active Directory by Edge Subscription if the following conditions are true:

- You import the certificate to an Edge Transport server.

- The certificate has an FQDN that matches the server FQDN.

The Import-ExchangeCertificate cmdlet imports either a certificate that's issued from an outstanding request or a PKCS #12 file.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Certificate management" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You can use the Import-ExchangeCertificate cmdlet for the following purposes:

- To import a certificate or chain of certificates from a PKCS #7 file that has been issued by a certification authority (CA). PKCS #7 is the Cryptographic Message Syntax Standard, a syntax used for digitally signing or encrypting data using public key cryptography, including certificates.

- To import an existing certificate and private key from a PKCS #12 (.pfx or .p12) file to the certificate store on the local computer. PKCS #12 is the Personal Information Exchange Syntax Standard, a file format used to store certificates with corresponding private keys protected with a password. The standard is specified by RSA Laboratories. For more information, see the PKCS #12: Personal Information Exchange Syntax Standard (https://www.emc.com/emc-plus/rsa-labs/standards-initiatives/pkcs12-personal-information-exchange-syntax-standard.htm) website.

  There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You must understand how these factors may affect your overall configuration.

  In Microsoft Exchange Server 2013, to import data from a file, you must use the Get-Content cmdlet to retrieve file data and use the FileData parameter to specify the retrieved data. This can be done in a two-step process, or in a single step. Examples shown in this cmdlet use the single-step approach.

The certificate may be published in Active Directory for the purposes of direct trust by using mutual TLS if the following conditions are true:

- The certificate is marked as an SMTP TLS certificate.

- The Subject Name on the certificate matches the fully qualified domain name (FQDN) of the local computer.

The certificate may be published in Active Directory by Edge Subscription if the following conditions are true:

- You import the certificate to an Edge Transport server.

- The certificate has an FQDN that matches the server FQDN.

The Import-ExchangeCertificate cmdlet imports either a certificate that's issued from an outstanding request or a PKCS #12 file.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Certificate management" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

You can use the Import-ExchangeCertificate cmdlet to import the following types of certificate files on an Exchange server:

- APKCS #7 certificate or chain of certificates file (.p7b or .p7c) that was issued by a certification authority (CA). PKCS #7 is the Cryptographic Message Syntax Standard, a syntax used for digitally signing or encrypting data using public key cryptography, including certificates. For more information, see PKCS #7: Cryptographic Message Syntax Standard (https://go.microsoft.com/fwlink/p/?LinkID=510681).

- A PKCS #12 certificate file (.cer, .crt, .der, .p12, or .pfx) that contains the private key. PKCS #12 is the Personal Information Exchange Syntax Standard, a file format used to store certificates with corresponding private keys that are protected by a password. The standard is specified by RSA Laboratories. For more information, see the PKCS #12: Personal Information Exchange Syntax Standard (https://go.microsoft.com/fwlink/p/?LinkID=90249) website.

After you import a certificate on an Exchange server, you need to assign the certificate to one or more Exchange services by using the Enable-ExchangeCertificate cmdlet.

There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You need to understand how these factors might affect your overall configuration. For more information, see Digital certificates and encryption in Exchange 2016.

Secure Sockets Layer (SSL) is being replaced by Transport Layer Security (TLS) as the protocol that's used to encrypt data sent between computer systems. They're so closely related that the terms "SSL" and "TLS" (without versions) are often used interchangeably. Because of this similarity, references to "SSL" in Exchange topics, the Exchange admin center, and the Exchange Management Shell have often been used to encompass both the SSL and TLS protocols. Typically, "SSL" refers to the actual SSL protocol only when a version is also provided (for example, SSL 3.0). To find out why you should disable the SSL protocol and switch to TLS, check out Protecting you against the SSL 3.0 vulnerability (https://blogs.office.com/2014/10/29/protecting-ssl-3-0-vulnerability/).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Import-ExchangeCertificate -FileData ([Byte[]]$(Get-Content -Path c:\certificates\ExportedCert.pfx -Encoding byte -ReadCount 0)) -Password:(Get-Credential).password
```

This example imports an existing certificate and private key from the PKCS #12 file ExportedCert.pfx.

### Example 1 -------------------------- (Exchange Server 2013)
```
Import-ExchangeCertificate -FileData ([Byte[]]$(Get-Content -Path c:\certificates\ExportedCert.pfx -Encoding byte -ReadCount 0)) -Password:(Get-Credential).password
```

This example imports an existing certificate and private key from the PKCS #12 file ExportedCert.pfx.

### Example 1 -------------------------- (Exchange Server 2016)
```
Import-ExchangeCertificate -Server Mailbox01 -FileName" \\FileServer01\Data\Exported Fabrikam Cert.pfx" -Password (ConvertTo-SecureString -String 'P@ssw0rd1' -AsPlainText -Force)
```

This example imports the certificate from the PKCS #12 file from \\\\FileServer01\\Data\\Exported Fabrikam Cert.pfx to the Exchange server named Mailbox01. This file requires the password P@ssw0rd1. This certificate could have been exported from another server, or issued by a certification authority.

### Example 2 -------------------------- (Exchange Server 2010)
```
Import-ExchangeCertificate -FileData ([Byte[]]$(Get-Content -Path c:\certificates\IssuedCert.p7b -Encoding byte -ReadCount 0))
```

This example imports a chain of certificates from the PKCS #7 file IssuedCert.p7b.

### Example 2 -------------------------- (Exchange Server 2013)
```
Import-ExchangeCertificate -FileData ([Byte[]]$(Get-Content -Path c:\certificates\IssuedCert.p7b -Encoding byte -ReadCount 0))
```

This example imports a chain of certificates from the PKCS #7 file IssuedCert.p7b.

### Example 2 -------------------------- (Exchange Server 2016)
```
Import-ExchangeCertificate -FileData ([Byte[]](Get-Content -Path "C:\Certificates\Fabrikam IssuedCert.p7b" -Encoding byte -ReadCount 0))
```

This example imports a chain of certificates from the PKCS #7 file C:\\Certificates\\Fabrikam IssuedCert.p7b on the local Exchange server.

## PARAMETERS

### -FileData
!!! Exchange Server 2010

The FileData parameter specifies the content retrieved from the certificate file using the Get-Content cmdlet, as shown in "Examples" later in this topic.

For more information about the syntax required to use this parameter, see Understanding Importing and Exporting Files in the Exchange Management Shell.



!!! Exchange Server 2013

The FileData parameter specifies the content retrieved from the certificate file using the Get-Content cmdlet. For implementation details, see the section.



!!! Exchange Server 2016

The FileData parameter specifies the contents of the certificate file that you want to import. Typically, you use this parameter for PKCS #7 text certificate files that have .p7b or .p7c filename extensions. These text files contain the text: -----BEGIN CERTIFICATE----- and -----END CERTIFICATE----- or -----BEGIN PKCS7----- and -----END PKCS7-----.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

You can use a local path if the certificate file is located on the Exchange server where you're running the command, and this is the same server where you want to install the certificate. Otherwise, use a UNC path (\\\\\<Server\>\\\<Share\>).

If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: Byte[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
!!! Exchange Server 2010, Exchange Server 2013

The Instance parameter specifies whether to pass a whole object to the command to be processed. This parameter is mainly used in scripts where a whole object must be passed to the command.



!!! Exchange Server 2016

The Instance parameter is no longer used and will be deprecated.



```yaml
Type: String[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyName
!!! Exchange Server 2010, Exchange Server 2013

The FriendlyName parameter specifies a friendly name for the resulting certificate. The friendly name must be less than 64 characters.

The default friendly name is Microsoft Exchange.



!!! Exchange Server 2016

The FriendlyName parameter specifies a friendly name for the certificate. The value must be less than 64 characters.

The friendly name value is descriptive text, and doesn't affect the functionality of the certificate.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
!!! Exchange Server 2010

The Password parameter specifies the password for the private key that's imported with this command. Use the Get-Credential cmdlet to store the password variable.

The Get-Credential cmdlet prompts you for a user name and password, but only the password field is used to import the certificate. You don't have to use a real domain name or user name in the Name field. For implementation details, see "Examples" later in this topic.



!!! Exchange Server 2013

The Password parameter specifies the password for the private key that's imported with this command. Use the Get-Credential cmdlet to store the password variable.

The Get-Credential cmdlet prompts you for a user name and password, but only the password field is used to import the certificate. You don't have to use a real domain name or user name in the Name field. For implementation details, see the section.



!!! Exchange Server 2016

The Password parameter specifies the password that's required to import the certificate.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.



```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateKeyExportable
!!! Exchange Server 2010, Exchange Server 2013

The PrivateKeyExportable parameter specifies whether the private key of the certificate can be exported.



!!! Exchange Server 2016

The PrivateKeyExportable parameter specifies whether the certificate has an exportable private key, and controls whether you can export the certificate from this server. Valid values are:

- $true: The private key is exportable, so you can export the certificate from this server.

- $false: The private key isn't exportable, so you can't export the certificate from this server. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
!!! Exchange Server 2010, Exchange Server 2013

The Server parameter specifies the server name to which you want to import the certificate.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.



```yaml
Type: ServerIdParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: ServerIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
!!! Exchange Server 2013

The FileName parameter specifies the name of the file that contains the certificate you want to import.



!!! Exchange Server 2016

The FileName parameter specifies the certificate file that you want to import. Typically, you use this parameter for PKCS #12 binary certificate files that have .cer, .crt, .der, .p12, or .pfx filename extensions. This type of binary certificate file is protected by a password when the file contains the private key or chain of trust.

You can use a local path if the certificate file is located on the Exchange server where you're running the command, and this is the same server where you want to install the certificate. Otherwise, use a UNC path (\\\\\<Server\>\\\<Share\>).

If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
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

[Online Version](https://technet.microsoft.com/library/c1a98e97-e58a-49c8-a44d-948b2fc07876.aspx)

