---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPSecurityTokenServiceConfig
schema: 2.0.0
---

# Set-SPSecurityTokenServiceConfig

## SYNOPSIS
Updates the settings of the SharePoint security token service (STS) identity provider.


## SYNTAX

### QueueSigningCertificateReference
```
Set-SPSecurityTokenServiceConfig -QueueSigningCertificateThumbprint <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-FormsTokenLifetime <Int32>]
 [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-QueueSigningCertificateStoreName <String>] [-ServiceTokenCacheExpirationWindow <Int32>]
 [-ServiceTokenLifetime <Int32>] [-WhatIf] [-WindowsTokenLifetime <Int32>] [<CommonParameters>]
```

### RevokeSigningCertificateReference
```
Set-SPSecurityTokenServiceConfig -RevokeSigningCertificateThumbprint <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-FormsTokenLifetime <Int32>]
 [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-RevokeSigningCertificateStoreName <String>] [-ServiceTokenCacheExpirationWindow <Int32>]
 [-ServiceTokenLifetime <Int32>] [-WhatIf] [-WindowsTokenLifetime <Int32>] [<CommonParameters>]
```

### SigningCertificateReference
```
Set-SPSecurityTokenServiceConfig -SigningCertificateThumbprint <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-FormsTokenLifetime <Int32>]
 [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-ServiceTokenCacheExpirationWindow <Int32>] [-ServiceTokenLifetime <Int32>]
 [-SigningCertificateStoreName <String>] [-WhatIf] [-WindowsTokenLifetime <Int32>]
 [-QueueSigningCertificateThumbprint <String>] [-QueueSigningCertificateStoreName <String>]
 [<CommonParameters>]
```

### SigningCertificateImport
```
Set-SPSecurityTokenServiceConfig [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-FormsTokenLifetime <Int32>] [-ImportSigningCertificate <X509Certificate2>]
 [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-ServiceTokenCacheExpirationWindow <Int32>] [-ServiceTokenLifetime <Int32>] [-WhatIf]
 [-WindowsTokenLifetime <Int32>] [<CommonParameters>]
```

### SigningCertificateQueue
```
Set-SPSecurityTokenServiceConfig [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-FormsTokenLifetime <Int32>] [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-QueueSigningCertificate <X509Certificate2>] [-ServiceTokenCacheExpirationWindow <Int32>]
 [-ServiceTokenLifetime <Int32>] [-WhatIf] [-WindowsTokenLifetime <Int32>] [<CommonParameters>]
```

### SigningCertificateRevoke
```
Set-SPSecurityTokenServiceConfig [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-FormsTokenLifetime <Int32>] [-MaxLogonTokenCacheItems <Int32>] [-MaxServiceTokenCacheItems <Int32>]
 [-RevokeSigningCertificate <X509Certificate2>] [-ServiceTokenCacheExpirationWindow <Int32>]
 [-ServiceTokenLifetime <Int32>] [-WhatIf] [-WindowsTokenLifetime <Int32>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPSecurityTokenServiceConfig` cmdlet updates the settings of the SharePoint security token service (STS) identity provider.
If a certificate file is used, the certificate must be an X509 certificate with private keys, otherwise an exception is raised.

This cmdlet operates only with certificates that can be exported.
To create a certificate which can be used in this cmdlet specify the X509KeyStorageFlags.Exportable bit in the keyStorageFlags parameter of the x509Certificate2 object constructor.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
C:\PS>Set-SPSecurityTokenServiceConfig -SigningCertificateThumbprint "2796BAE63F1801E277261BA0D77770028F20EEE4"
```

This example updates the signing certificate of the SharePoint security token service (STS) identity provider with a certificate that has been deployed in the certificate store.


### --------------------EXAMPLE 2---------------------
```
C:\PS>$stsCert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2 "c:\sts.pfx","a",20

C:\PS>Set-SPSecurityTokenServiceConfig -ImportSigningCertificate $stsCert
```

This example imports the signing certificate for the SharePoint STS identity provider.


## PARAMETERS

### -QueueSigningCertificateThumbprint
{{ Fill QueueSigningCertificateThumbprint Description }}

```yaml
Type: String
Parameter Sets: QueueSigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: SigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RevokeSigningCertificateThumbprint
{{ Fill RevokeSigningCertificateThumbprint Description }}

```yaml
Type: String
Parameter Sets: RevokeSigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SigningCertificateThumbprint
Specifies the thumbrpint of the signing certificate.

The type must be a valid identity of a signing certificate; for example 2796BAE63F1801E277261BA0D77770028F20EEE4.

```yaml
Type: String
Parameter Sets: SigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormsTokenLifetime
Specifies the expiration time, in minutes, for tokens issued to ASP.NET Membership Provider and Role providers.
The default value is 1380.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportSigningCertificate
Specifies the X.509 certificate object from trusted authentication provider farm.

The type must be a name of a valid X.509 certificate; for example, Certificate1.

```yaml
Type: X509Certificate2
Parameter Sets: SigningCertificateImport
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogonTokenCacheItems
Specifies the maximum number of entries for the in-memory logon token cache.
The default value is 10000 entries.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxServiceTokenCacheItems
Specifies the maximum number of entries for the in-memory service token cache.
The default value is 10000 entries.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueSigningCertificate
{{ Fill QueueSigningCertificate Description }}

```yaml
Type: X509Certificate2
Parameter Sets: SigningCertificateQueue
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueSigningCertificateStoreName
{{ Fill QueueSigningCertificateStoreName Description }}

```yaml
Type: String
Parameter Sets: QueueSigningCertificateReference, SigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RevokeSigningCertificate
{{ Fill RevokeSigningCertificate Description }}

```yaml
Type: X509Certificate2
Parameter Sets: SigningCertificateRevoke
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RevokeSigningCertificateStoreName
{{ Fill RevokeSigningCertificateStoreName Description }}

```yaml
Type: String
Parameter Sets: RevokeSigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceTokenCacheExpirationWindow
Specifies the interval, in minutes, for automatically renewing the token in the cache.
The default value is 2 minutes.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceTokenLifetime
Specifies the expiration time, in minutes, for the security token service cache.
The default value is 15 minutes.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SigningCertificateStoreName
Specifies the certificate store where the signing certificate resides.
The identity store for an identity provider can be a SQL database table, an Active Directory Domain Services (AD DS), or Active Directory Lightweight Directory Service (AD LDS).

The type must be a valid identity of a signing certificate store; for example IdentityStore1.

```yaml
Type: String
Parameter Sets: SigningCertificateReference
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsTokenLifetime
Specifies the expiration time, in minutes, for tokens issued to Windows users.
The default value is 1380 minutes.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
