---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Export-ExchangeCertificate
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Export-ExchangeCertificate

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-ExchangeCertificate cmdlet to export existing certificates and pending certificate requests (also known as certificate signing requests or CSRs) from Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Export-ExchangeCertificate [-Thumbprint] <String> [-BinaryEncoded] [-Confirm] [-DomainController <Fqdn>]
 [-Password <SecureString>] [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Export-ExchangeCertificate [-Thumbprint] <String> [-BinaryEncoded] [-Confirm] [-DomainController <Fqdn>]
 [-FileName <String>] [-Password <SecureString>] [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Export-ExchangeCertificate [[-Identity] <ExchangeCertificateIdParameter>] [-BinaryEncoded] [-Confirm]
 [-DomainController <Fqdn>] [-FileName <String>] [-Password <SecureString>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Export-ExchangeCertificate cmdlet creates the following types of files:

- Certificate files: When you export a certificate, the command creates a PKCS #12 file. PKCS #12 is the Personal Information Exchange Syntax standard specified by RSA Laboratories. For more information, see PKCS #12: Personal Information Exchange Syntax Standard (https://www.emc.com/emc-plus/rsa-labs/standards-initiatives/pkcs12-personal-information-exchange-syntax-standard.htm).

  To export a certificate from an Exchange server, the certificate's PrivateKeyExportable property needs to have the value True. To import an exported certificate on another Exchange server, you need to export the certificate by using the Password parameter to include the private key or chain of trust in the certificate file. The default Microsoft Exchange self-signed certificate or new self-signed certificates that you create in the Exchange admin center or by using the default settings of the New-ExchangeCertificate cmdlet aren't exportable, because the private key isn't exportable (the default value of the PrivateKeyExportable parameter is $false).

- Certificate request files: When you export a certificate request, the command creates a PKCS #10 file. PKCS #10 is the Certification Request Syntax standard specified by RFC 2314. For more information, see PKCS #10: Certification Request Syntax (https://www.ietf.org/rfc/rfc2314.txt).

  Typically, you export a certificate request file if you need to resubmit the certificate request to the certification authority. You can't import an exported certificate request on another server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-ExchangeCertificate -Thumbprint 5113ae0233a72fccb75b1d0198628675333d010e -FileName "C:\Data\HT cert.pfx" -BinaryEncoded -Password (ConvertTo-SecureString -String 'P@ssw0rd1' -AsPlainText -Force)
```

This example exports a certificate from the local Exchange server to a file with the following settings:

The certificate that has the thumbprint value 5113ae0233a72fccb75b1d0198628675333d010e is exported to the file C:\\Data\\HT cert.pfx.

The exported certificate file is encoded by DER (not Base64).

The password for the certificate file is P@ssw0rd1.

### -------------------------- Example 2 --------------------------
```
Export-ExchangeCertificate -Thumbprint 72570529B260E556349F3403F5CF5819D19B3B58 -Server Mailbox01 -FileName "\\FileServer01\Data\Fabrikam.req"
```

This example exports a pending certificate request to a file with the following settings:

The pending certificate request that has the thumbprint value 72570529B260E556349F3403F5CF5819D19B3B58 on the Exchange server named Mailbox01 is exported to the file \\\\FileServer01\\Data\\Fabrikam.req.

The exported certificate request file is Base64 encoded, so the information that's written to the file is also displayed onscreen.

## PARAMETERS

### -Thumbprint
The Thumbprint parameter specifies the certificate or certificate request that you want to export. You can find the thumbprint value by using the Get-ExchangeCertificate cmdlet.

The Thumbprint parameter, not the Identity parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the Thumbprint parameter.

```yaml
Type: String
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BinaryEncoded
The BinaryEncoded switch encodes the exported certificate or certificate request file by using Distinguished Encoding Rules (DER). You don't need to specify a value with this switch.

Typically, you use this switch when you export a certificate, because you can store the certificate and its private key or chain of trust in a single binary file when you also use the Password parameter. If you don't use this switch, the exported certificate file is Base64 encoded, and you'll need to export any intermediate or root certificates in the chain of trust separately.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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

### -Password
The Password parameter specifies the password for the private key or chain of trust in the exported certificate file. To import the exported certificate file on another server, you need to know the password.

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

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can't use this parameter with the Identity parameter, but you can use it with the Thumbprint parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: (All), Set1
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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
The FileName parameter specifies the name and path of the exported certificate or certificate request file. You can use a local path if the certificate or certificate request is located on the same Exchange server where you're running the command. Otherwise, use a UNC path (\\\\\<Server\>\\\<Share\>). If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the certificate or certificate request that you want to export. Valid values are:

- \<ServerNameorFQDN\>\\\<Thumbprint\>

- \<Thumbprint\>

You can find the thumbprint value by using the Get-ExchangeCertificate cmdlet.

You can't use this parameter with the Server parameter.

The Thumbprint parameter, not the Identity parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the Thumbprint parameter.

```yaml
Type: ExchangeCertificateIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
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

[Online Version](https://technet.microsoft.com/library/0fffc597-7b46-4bc3-915c-f00c9eb56b40.aspx)
