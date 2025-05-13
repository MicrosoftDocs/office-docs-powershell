---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-smimeconfig
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-SmimeConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-SmimeConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-SmimeConfig cmdlet to modify the S/MIME configuration for Outlook on the web (formerly known as Outlook Web App).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SmimeConfig [[-Identity] <OrganizationIdParameter>]
 [-Confirm]
 [-OWAAllowUserChoiceOfSigningCertificate <Boolean>]
 [-OWAAlwaysEncrypt <Boolean>]
 [-OWAAlwaysSign <Boolean>]
 [-OWABCCEncryptedEmailForking <UInt32>]
 [-OWACheckCRLOnSend <Boolean>]
 [-OWAClearSign <Boolean>]
 [-OWACopyRecipientHeaders <Boolean>]
 [-OWACRLConnectionTimeout <UInt32>]
 [-OWACRLRetrievalTimeout <UInt32>]
 [-OWADisableCRLCheck <Boolean>]
 [-OWADLExpansionTimeout <UInt32>]
 [-OWAEncryptionAlgorithms <String>]
 [-OWAEncryptTemporaryBuffers <Boolean>]
 [-OWAForceSMIMEClientUpgrade <Boolean>]
 [-OWAIncludeCertificateChainAndRootCertificate <Boolean>]
 [-OWAIncludeCertificateChainWithoutRootCertificate <Boolean>]
 [-OWAIncludeSMIMECapabilitiesInMessage <Boolean>]
 [-OWANoSignOnReply <Boolean>]
 [-OWAOnlyUseSmartCard <Boolean>]
 [-OWASenderCertificateAttributesToDisplay <String>]
 [-OWASignedEmailCertificateInclusion <Boolean>]
 [-OWASigningAlgorithms <String>]
 [-OWATripleWrapSignedEncryptedMail <Boolean>]
 [-OWAUseKeyIdentifier <Boolean>]
 [-OWAUseSecondaryProxiesWhenFindingCertificates <Boolean>]
 [-SMIMECertificateIssuingCA <Byte[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-SmimeConfig cmdlet can change several important parameters than can reduce the overall level of message security. Review your organization's security policy before you make any changes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SmimeConfig -OWAAllowUserChoiceOfSigningCertificate $true -OWACRLRetrievalTimeout 10000 -OWAEncryptionAlgorithms 6602:128
```

This example sets the S/MIME configuration to allow users the choice of signing the message, limits the Certificate Revocation List (CRL) retrieval time-out to 10 seconds, and specifies the 128 bit RC2 encryption algorithm.

## PARAMETERS

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAAllowUserChoiceOfSigningCertificate
The OWAAllowUserChoiceOfSigningCertificate parameter specifies whether to allow users to select the certificate to use when they digitally sign email messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAAlwaysEncrypt
The OWAAlwaysEncrypt parameter specifies whether all outgoing messages are automatically encrypted in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAAlwaysSign
The OWAAlwaysSign parameter specifies whether all outgoing messages are automatically signed in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWABCCEncryptedEmailForking
The OWABCCEncryptedEmailForking parameter specifies how Bcc messages are encrypted in Outlook on the web. Valid values are:

- 0: One encrypted message per Bcc recipient. This is the default value.
- 1: One single encrypted message for all Bcc recipients.
- 2: One encrypted message without Bcc forking.

This setting affects the security and privacy of Outlook on the web. Consult your organization's security policy before you change this setting.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWACheckCRLOnSend
The OWACheckCRLOnSend parameter specifies how the certificate revocation list (CRL) check is enforced when an email message is sent in Outlook on the web. Valid values are:

- $true: When the CRL distribution point is inaccessible, Outlook on the web displays a warning dialog box and prevents signed or encrypted messages from being sent.
- $false: When the CRL distribution point is inaccessible, Outlook on the web allows signed or encrypted messages to be sent. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAClearSign
The OWAClearSign parameter specifies how email messages are signed in Outlook on the web. Valid values are:

- $true: Digitally signed messages are clear-signed. This is the default value.
- $false: digitally signed messages are opaque-signed.

Clear-signed messages are larger than opaque-signed messages, but clear-signed messages can be read in most email clients, including clients that don't support S/MIME.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWACopyRecipientHeaders
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWACRLConnectionTimeout
The OWACRLConnectionTimeout parameter specifies the time in milliseconds that Outlook on the web waits while connecting to retrieve a single CRL as part of a certificate validation operation.

A valid value is an integer between 0 and 4294967295 (UInt32). The default value is 60000 (60 seconds).

When multiple CRLs in a certificate chain must be retrieved, the time limit that's specified by this parameter applies to each connection. For example, if a certificate requires the retrieval of three CRLs, and this parameter is set to 60000 (60 seconds), each individual CRL retrieval operation has a time limit of 60 seconds. If any one of the CRLs isn't retrieved before the time limit expires, the entire operation fails. The total time limit for all the retrievals is controlled by the OWACRLRetrievalTimeout parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWACRLRetrievalTimeout
The OWACRLRetrievalTimeout parameter specifies the time in milliseconds that Outlook on the web waits to retrieve all CRLs when validating a certificate.

VA valid value is an integer between 0 and 4294967295 (UInt32). The default value is 10000 (10 seconds).

If all the required CRLs are not retrieved before the time limit expires, the operation fails. Suppose the retrieval of three CRLs is required, the OWACRLConnectionTimeout value is set to 60000 (60 seconds), and the OWACRLRetrievalTimeout is set to 120000 (2 minutes). In this example, if any individual CRL retrieval takes more than 60 seconds, the operation fails. Also, if all the CRL retrievals together take more than 120 seconds, the operation fails.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWADisableCRLCheck
The OWADisableCRLCheck parameter enables or disables CRL checking in Outlook on the web. Valid values are:

- $true: CRL checks are disabled when validating certificates.
- $false: CRL checks are enabled when validating certificates.This is the default value.

Disabling CRL checking can decrease the time that's required to validate the signatures of signed email messages, but it also validates email messages that are signed with revoked certificates.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWADLExpansionTimeout
The OWADLExpansionTimeout parameter specifies the time in milliseconds that Outlook on the web waits when sending encrypted messages to members of a distribution group that requires expansion.

A valid value is an integer between 0 and 4294967295 (UInt32). The default value is 60000 (60 seconds). If the operation doesn't complete in the time specified by this parameter, the operation fails and the message is not sent.

When sending an encrypted message to a distribution group, Exchange expands the distribution group to retrieve the encryption certificate of each recipient. While the distribution group is being expanded, the sender receives no response from Outlook on the web.

The timeout value that's specified by this parameter is applied to the expansion of each distribution group. For example, if an encrypted message is sent to three distribution group, and the value of this parameter is 60000 (60 seconds), the entire operation can take no more than 180 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEncryptionAlgorithms
The OWAEncryptionAlgorithms parameter specifies a list of symmetric encryption algorithms that are used by Outlook on the web to encrypt messages. Valid values are:

- 6601: DES (56-bit)
- 6602: RC2. Supported key lengths are 40, 56, 64, and 128. RC2 is the only supported algorithm that offers multiple key lengths.
- 6603: 3DES (168-bit)
- 660E: AES128
- 660F: AES192
- 6610: AES256 (This is the default value)

If you use a third-party cryptographic service provider (CSP), you need to specify the object identifier (OID) together with an algorithm ID (Outlook on the web needs an algorithm ID to infer how the algorithm should be used). For example, to provide a custom replacement for the 3DES algorithm, use the value `6603,<CustomOID>`.

This parameter uses the syntax `<AlgorithmID>` or `RC2:<KeyLength>` or `<AlgorithmID>,<CustomOID>`. You can specify multiple values separated by semicolons (;). For example, to set the encryption algorithms to 3DES, RC2-128, RC2-64, DES, and RC2-56, use the following value: `6603;6602:128;6602:64;6601;6602:56`.

If the parameter is not specified or is not formatted correctly, Outlook on the web uses 6610 (AES256). If the encryption algorithm or minimum key length is not available on a client, Outlook on the web does not allow encryption.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEncryptTemporaryBuffers
The OWAEncryptTemporaryBuffers parameter specifies whether the Outlook on the web client-side temporary message storage buffers are encrypted. Valid values are:

- $true: All client-side temporary buffers that store message data are encrypted using an ephemeral key and the 3DES algorithm. This is the default value.
- $false: Temporary buffer encryption is disabled.

Disabling encryption of the buffers can increase performance of the Outlook on the web client but also leaves information unencrypted in the client's buffer. Consult your organization's security policy before you disable this feature.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAForceSMIMEClientUpgrade
The OWAForceSMIMEClientUpgrade parameter specifies whether or not users are forced to upgrade an S/MIME control that's older than their current version in Outlook on the web.

- $true: Users need to download and install the new control before they can use S/MIME. This is the default value.
- $false: Users receive a warning if the S/MIME control on their computer is not current, but they can still use S/MIME without updating the control.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAIncludeCertificateChainAndRootCertificate
The OWAIncludeCertificateChainAndRootCertificate parameter specifies whether the certificate chains and root certificates of the signing or encryption certificates are included in the message in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAIncludeCertificateChainWithoutRootCertificate
The OWAIncludeCertificateChainWithoutRootCertificate parameter specifies whether the certificate chains of the signing or encryption certificates are included in messages in Outlook on the web. Valid values are:

- $true: Signed or encrypted messages include the full certificate chain, but not the root certificate.
- $false: Signed or encrypted messages include only the signing and encrypting certificates, not their corresponding certificate chains. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAIncludeSMIMECapabilitiesInMessage
The OWAIncludeSMIMECapabilitiesInMessage parameter specifies whether signed and encrypted messages in Outlook on the web include attributes that describe the supported encryption and signing algorithms.

Valid input for this parameter is $true or $false. The default is $false.

Enabling this option increases the size of messages, but may make it easier for some email clients to interact with encrypted messages in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWANoSignOnReply
This parameter is available only in the cloud-based service.

{{ Fill OWANoSignOnReply Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAOnlyUseSmartCard
The OWAOnlyUseSmartCard parameter specifies whether smartcard-based certificates are required for Outlook on the web message signing and decryption. Valid values are:

$true: Smartcard-based certificates for signing and decryption are required when you use Outlook on the web and the S/MIME control.

$false: Smartcard-based certificates for signing and decryption aren't required when you use Outlook on the web and the S/MIME control. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWASenderCertificateAttributesToDisplay
The OWASenderCertificateAttributesToDisplay parameter controls which certificate attributes are displayed when signature verification proceeds despite a mismatch between the sender's email address and the email address in sender's certificate.

The parameter accepts a comma-separated list of object identifiers (OIDs). This setting is blank ($null) by default.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWASignedEmailCertificateInclusion
The OWASignedEmailCertificateInclusion parameter specifies whether the sender's encryption certificate is excluded from a signed email message in Outlook on the web. Valid values are:

- $true: Outlook on the web and the S/MIME control include both signing and encrypting certificates with signed email messages. This is the default value.
- $false: Outlook on the web and the S/MIME control do not include signing and encrypting certificates with signed email messages.

When you don't include the certificates with signed email messages, the size of encrypted messages is reduced. However, recipients don't have access to the sender's encryption certificate in the message. Recipients need to retrieve the certificate from a directory, or from the sender.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWASigningAlgorithms
The OWASigningAlgorithms parameter specifies the list of symmetric encryption signing algorithms that are used by Outlook on the web to sign messages with the S/MIME control. Valid values are:

- 8003: CALG\_MD5 or 128-bit MD5
- 800E: CALG\_SHA\_512 or 512-bit Secure Hash Algorithm (SHA)
- 800D: CALG\_SHA\_384 or 384-bit SHA
- 800C: CALG\_SHA\_256 or 256-bit SHA
- 8004: SHA1 or 160-bit SHA-1 (This is the default value)

If you use a third-party cryptographic service provider (CSP), you need to specify the object identifier (OID) together with an algorithm ID (Outlook on the web needs an algorithm ID to infer how the algorithm should be used). For example, to provide a custom replacement for the SHA1 algorithm, use the value `8804,<CustomOID>`.

This parameter uses the syntax `<AlgorithmID>` or `<AlgorithmID>:<KeyLength>` or `<AlgorithmID>,<CustomOID>`. You can specify multiple values separated by semicolons (;).

For example, to set the signing algorithms to CALG\_SHA\_512, SHA1, and CALG\_MD5, use the value `800E;8004;8003`.

If this parameter is not specified or is not formatted correctly, Outlook on the web defaults to 8004 (SHA1).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWATripleWrapSignedEncryptedMail
The OWATripleWrapSignedEncryptedMail parameter specifies whether signed and encrypted email messages in Outlook on the web are triple-wrapped. Valid values are:

- $true: A signed message is encrypted, and then the encrypted message is signed (signed-encrypted-signed).
- $false: A signed message is encrypted only (there is no additional signing of the encrypted message). This is the default value.

Triple-wrapped messages offer the highest level of security for messages under the S/MIME standard, but are larger in size.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAUseKeyIdentifier
The OWAUseKeyIdentifier parameter specifies whether a certificate's key identifier is used to encode the asymmetrically encrypted token in Outlook on the web.

Valid input for this parameter is $true or $false. The default is $false.

By default, Outlook on the web encodes the asymmetrically encrypted token (sometimes called a Lockbox) that's required to decrypt the rest of the message by indicating the issuer and serial number of each recipient's certificate. The issuer and serial number can then be used to locate the certificate and private key for decrypting the message.

This parameter causes the use of a certificate's key identifier when encoding the asymmetrically encrypted token. Because a key pair can be reused in new certificates, using the key identifier for encrypted email messages means that users need to keep only the most recent certificate and associated private key, rather than all old certificates. Because some email clients do not support finding certificates with a key identifier, Outlook on the web uses the issuer and serial number of each recipient's certificate by default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAUseSecondaryProxiesWhenFindingCertificates
The OWAUseSecondaryProxiesWhenFindingCertificates parameter specifies whether alternative proxies are used during the certificate search in Outlook on the web.

Valid input for this parameter is $true or $false. The default is $true.

Outlook on the web attempts to find the correct certificate for a recipient when sending encrypted messages. The certificate subject or subject alternative name values can each contain an email address. Because a recipient can have multiple proxy addresses, the certificate's subject or subject alternative name values may not match the recipient's primary SMTP address. When this parameter is set to $true, and the certificate subject or subject alternative name values do not match the recipient's primary SMTP address, Outlook on the web tries to match the certificate's subject to one of the recipient's proxy addresses.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMIMECertificateIssuingCA
The SMIMECertificateIssuingCA parameter specifies the serialized certificate store (SST) that contains the Certificate Authority (CA) signing and intermediate certificate information.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

Each certificate is checked, and if any certificates are expired, the operation will fail.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
