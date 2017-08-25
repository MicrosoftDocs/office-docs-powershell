---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPartnerApplication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies an existing partner application.
A partner application is any application that Microsoft Lync Server 2013 Preview can directly exchange security tokens with, without having to go through a third-party security token server.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing partner application.
A partner application is any application that Skype for Business Server 2015 can directly exchange security tokens with, without having to go through a third-party security token server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### CertificateFileData
```
Set-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity> -CertificateFileData <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-ApplicationTrustLevel <ApplicationTrustLevel>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### CertificateRawData
```
Set-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity> -CertificateRawData <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-ApplicationTrustLevel <ApplicationTrustLevel>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Identity
```
Set-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-ApplicationTrustLevel <ApplicationTrustLevel>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### UseOAuthServer
```
Set-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity> [-UseOAuthServer]
 [-AcceptSecurityIdentifierInformation <Boolean>] [-ApplicationTrustLevel <ApplicationTrustLevel>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### MetadataUrl
```
Set-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity> -MetadataUrl <String>
 [-AcceptSecurityIdentifierInformation <Boolean>] [-ApplicationTrustLevel <ApplicationTrustLevel>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsPartnerApplication [-Confirm] [-Force] [-Instance <PSObject>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

In Microsoft Lync Server 2013 Preview, server-to-server authentication (for example, the authentication that enables Lync Server 2013 Preview and Microsoft Exchange Server 2013 Preview to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Lync Server 2013 Preview and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange 2013 Preview or Microsoft SharePoint 2013) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange 2013 Preview) as a partner application.
(You will also need to configure Lync Server 2013 Preview as a partner application for the other server product.) In Lync Server 2013 Preview, partner applications are managed by using the CsPartnerApplication cmdlets.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPartnerApplication"}

Lync Server Control Panel: The functions carried out by the Set-CsPartnerApplication cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server 2015 and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange or SharePoint) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange) as a partner application.
(You will also need to configure Skype for Business Server 2015 as a partner application for the other server product.) In Skype for Business Server 2015, partner applications are managed by using the CsPartnerApplication cmdlets.

Skype for Business Server Control Panel: The functions carried out by the Set-CsPartnerApplication cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 disables the partner application MicrosoftExchange.
This is done by setting the Enabled property to False ($False).

Set-CsPartnerApplication -Identity "MicrosoftExchange" -Enabled $False

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 disables the partner application MicrosoftExchange.
This is done by setting the Enabled property to False ($False).

Set-CsPartnerApplication -Identity "MicrosoftExchange" -Enabled $False

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the partner applications currently in use in the organization are disabled.
To do this, the command first uses Get-CsPartnerApplication to return a collection of all the partner applications.
This collection is then piped to the ForEach-Object cmdlet.
In turn, ForEach-Object runs the Set-CsPartnerApplication cmdlet against each application in the collection.
Doing so disables each of those partner applications.

Get-CsPartnerApplication | ForEach-Object {Set-CsPartnerApplication -Identity $_.Identity -Enabled $False}

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the partner applications currently in use in the organization are disabled.
To do this, the command first uses the Get-CsPartnerApplication cmdlet to return a collection of all the partner applications.
This collection is then piped to the ForEach-Object cmdlet.
In turn, the ForEach-Object cmdlet runs the Set-CsPartnerApplication cmdlet against each application in the collection.
Doing so disables each of those partner applications.

Get-CsPartnerApplication | ForEach-Object {Set-CsPartnerApplication -Identity $_.Identity -Enabled $False}

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 disables all partner applications where the ApplicationTrustLevel property is set to User.
To carry out this task, the command first calls Get-CsPartnerApplication without any parameters; that returns a collection of all the partner applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those applications where the ApplicationTrustLevel property is equal to "User".
That filtered collection is then piped to the ForEach-Object cmdlet, which uses Set-CsPartnerApplication, to take each item in the collection and set the Enabled property to $False.

Get-CsPartnerApplication | Where-Object {$_.ApplicationTrustLevel -eq "User"} | ForEach-Object {Set-CsPartnerApplication -Identity $_.Identity -Enabled $False}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 disables all partner applications where the ApplicationTrustLevel property is set to User.
To carry out this task, the command first calls the Get-CsPartnerApplication cmdlet without any parameters; that returns a collection of all the partner applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those applications where the ApplicationTrustLevel property is equal to "User".
That filtered collection is then piped to the ForEach-Object cmdlet, which uses the Set-CsPartnerApplication cmdlet to take each item in the collection and set the Enabled property to $False.

Get-CsPartnerApplication | Where-Object {$_.ApplicationTrustLevel -eq "User"} | ForEach-Object {Set-CsPartnerApplication -Identity $_.Identity -Enabled $False}

## PARAMETERS

### -CertificateFileData
Path to a certificate file that can be assigned to the partner application.
For example:

-CertificateFileData "C:\Certificates\PartnerApplication.cer"

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

$x = Get-Content "C:\Certificates\PartnerApplication.cer" -Encoding Byte

$y = \[Convert\]::ToBase64String($x)

You can then use this syntax to assign the certificate data stored in the variable $y:

-CertificateRawData $y

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

### -Identity
Unique identifier of the partner application.
For example:

-Identity "MicrosoftExchange"

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: CertificateFileData, CertificateRawData, Identity, UseOAuthServer, MetadataUrl
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetadataUrl
URL of the security token servicer federation metadata that carries the signing keys, the issuer identifier, and the issuer endpoint URL.

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
When present, the partner application will use the configured OAuth Server for server-to-server authentication.
When not present, the partner application will use its built-in security token service for server-to-server authentication.

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
Parameter Sets: CertificateFileData, CertificateRawData, Identity, UseOAuthServer, MetadataUrl
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationTrustLevel
**Below Content Applies To:** Lync Server 2013

Specifies the level of trust between Lync Server 2013 Preview and the partner application.
Allowed values are:

* Full -- The partner application is trusted to represent itself and to impersonate any user in the realm. This is the default value.
* Application -- The partner application is trusted to represent itself within the realm. In order to impersonate a user, it must obtain consent through from a security token server.
* User -- The partner application must obtain consent from a security token server in order to represent a user, and cannot represent itself.

The default value is Full.



**Below Content Applies To:** Skype for Business Server 2015

Specifies the level of trust between Skype for Business Server 2015 and the partner application.
Allowed values are:

* Full -- The partner application is trusted to represent itself and to impersonate any user in the realm. This is the default value.
* Application -- The partner application is trusted to represent itself within the realm. In order to impersonate a user, it must obtain consent through from a security token server.
* User -- The partner application must obtain consent from a security token server in order to represent a user, and cannot represent itself.

The default value is Full.



```yaml
Type: ApplicationTrustLevel
Parameter Sets: CertificateFileData, CertificateRawData, Identity, UseOAuthServer, MetadataUrl
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
**Below Content Applies To:** Lync Server 2013

When set to True, the partner application is available for use with Lync Server 2013 Preview.
When set to False the partner application will continue to run, but will not be able to communicate with Lync Server until the Enabled property has been set to True.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, the partner application is available for use with Skype for Business Server 2015.
When set to False the partner application will continue to run, but will not be able to communicate with Skype for Business Server 2015 until the Enabled property has been set to True.



```yaml
Type: Boolean
Parameter Sets: CertificateFileData, CertificateRawData, Identity, UseOAuthServer, MetadataUrl
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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the partner application being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the partner application being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: CertificateFileData, CertificateRawData, Identity, UseOAuthServer, MetadataUrl
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Set-CsPartnerApplication does not accept pipelined input.

###  
None.
The Set-CsPartnerApplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Set-CsPartnerApplication modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

###  
None.
Instead, the Set-CsPartnerApplication cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPartnerApplication]()

[New-CsPartnerApplication]()

[Remove-CsPartnerApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/29c8c511-157b-478e-814f-b911955a8251(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/29c8c511-157b-478e-814f-b911955a8251(OCS.16).aspx)

