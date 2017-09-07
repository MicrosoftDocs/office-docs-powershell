---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPartnerApplication

## SYNOPSIS

Creates a new partner application.
A partner application is any application that Skype for Business Server can directly exchange security tokens with, without having to go through a third-party security token server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### UseOAuthServer
```
New-CsPartnerApplication [[-Identity] <XdsGlobalRelativeIdentity>] -ApplicationIdentifier <String>
 -ApplicationTrustLevel <ApplicationTrustLevel> [-UseOAuthServer]
 [-AcceptSecurityIdentifierInformation <Boolean>] [-Confirm] [-Enabled <Boolean>] [-Force] [-InMemory]
 [-Realm <String>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### CertificateFileData
```
New-CsPartnerApplication [[-Identity] <XdsGlobalRelativeIdentity>] -ApplicationIdentifier <String>
 -ApplicationTrustLevel <ApplicationTrustLevel> -CertificateFileData <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-Confirm] [-Enabled <Boolean>] [-Force] [-InMemory]
 -Realm <String> [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### CertificateRawData
```
New-CsPartnerApplication [[-Identity] <XdsGlobalRelativeIdentity>] -ApplicationIdentifier <String>
 -ApplicationTrustLevel <ApplicationTrustLevel> -CertificateRawData <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-Confirm] [-Enabled <Boolean>] [-Force] [-InMemory]
 -Realm <String> [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### MetadataUrl
```
New-CsPartnerApplication [[-Identity] <XdsGlobalRelativeIdentity>]
 -ApplicationTrustLevel <ApplicationTrustLevel> -MetadataUrl <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-Confirm] [-Enabled <Boolean>] [-Force] [-InMemory]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out by using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange or SharePoint) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange) as a partner application.
(You will also need to configure Skype for Business Server as a partner application for the other server product.) In Skype for Business Server, partner applications are managed by using the CsPartnerApplication cmdlets.

Skype for Business Server Control Panel: The functions carried out by the New-CsPartnerApplication cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
New-CsPartnerApplication -Identity "MicrosoftExchange" -ApplicationTrustLevel "Full" -MetadataUrl"https://autodiscover.litwareinc.com/metadata/json/1"

```

The command shown in Example 1 creates a new partner application with the Identity "MicrosoftExchange".
In this example, the new partner application uses the metadata URL https://autodiscover.litwareinc.com/metadata/json/1.


### -------------------------- Example 2 -------------------------- 
```
New-CsPartnerApplication -Identity "MicrosoftExchange" -ApplicationIdentifier "microsoft.exchange" -ApplicationTrustLevel "Full" -UseOAuthServer

```

The command shown in Example 2 also creates a new partner application with the Identity "MicrosoftExchange".
In this case, however, the new partner application does not use a metadata URL but, instead, is configured to use a predefined OAuth Server.
To do this, the command uses the UseOAuthServer parameter instead of the MetadataUrl parameter.


## PARAMETERS

### -ApplicationIdentifier

Unique identifier for the partner application.
The ApplicationIdentifier is provided by the server application.
You cannot use the ApplicationIdentifier parameter and the MetadataUrl parameter in the same command.



```yaml
Type: String
Parameter Sets: UseOAuthServer, CertificateFileData, CertificateRawData
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationTrustLevel

Specifies the level of trust between Skype for Business Server and the partner application.
Allowed values are:

* Full -- The partner application is trusted to represent itself and to impersonate any user in the realm. This is the default value.
* Application -- The partner application is trusted to represent itself within the realm. In order to impersonate a user, it must obtain consent through from a security token server.
* User -- The partner application must obtain consent from a security token server in order to represent a user, and cannot represent itself.

The default value is Full.



```yaml
Type: ApplicationTrustLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateFileData
Path to a certificate file that can be assigned to the partner application.
For example:

`-CertificateFileData "C:\Certificates\PartnerApplication.cer"`

```yaml
Type: String
Parameter Sets: CertificateFileData
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateRawData
Certificate (in Base64 encoded format) that can be assigned to the partner application.
To read raw data from a certificate and then convert that data to the required format, use commands similar to these:

`$x = Get-Content "C:\Certificates\PartnerApplication.cer" -Encoding Byte`

`$y = \[Convert\]::ToBase64String($x)`

You can then use this syntax to assign the certificate data stored in the variable $y:

`-CertificateRawData $y`

```yaml
Type: String
Parameter Sets: CertificateRawData
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetadataUrl
URL where the WS-FederationMetadata for the partner application is published.
Partner applications use the metadata to agree on the types of tokens that will be exchanged as well the keys that will be used to sign these tokens.

```yaml
Type: String
Parameter Sets: MetadataUrl
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseOAuthServer
When present, indicates that the partner application will use one of the pre-authorized OAuth servers instead of a security token server built into the application itself.

```yaml
Type: SwitchParameter
Parameter Sets: UseOAuthServer
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptSecurityIdentifierInformation
When set to True ($True), security identifiers (SIDs) can be used for authentication purposes.
The default value is False.

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

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
When set to True the partner application will be enabled and available for immediate use.
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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the new partner application.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm

Server-to-server security container.
By default, Skype for Business Server uses your default SIP domain as its OAuth realm.



```yaml
Type: String
Parameter Sets: UseOAuthServer
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: CertificateFileData, CertificateRawData
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new partner application is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPartnerApplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsPartnerApplication cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPartnerApplication]()

[Remove-CsPartnerApplication]()

[Set-CsPartnerApplication]()
