---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CsCertificate

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Imports a certificate for use with Microsoft Lync Server 2010.
If a certificate is not acquired by using the Request-CsCertificate cmdlet, then that certificate must be imported before it can be assigned to a Lync Server 2010 server role.

Below Content Applies To: Lync Server 2013

Imports a certificate for use with Lync Server.
If a certificate is not acquired by using the Request-CsCertificate cmdlet, then that certificate must be imported before it can be assigned to a Lync Server server role.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Imports a certificate for use with Skype for Business Server 2015.
If a certificate is not acquired by using the Request-CsCertificate cmdlet, then that certificate must be imported before it can be assigned to a Skype for Business Server 2015 server role.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Import-CsCertificate -Path <String> [-Password <String>] [-PrivateKeyExportable <Boolean>] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### CMS
```
Import-CsCertificate [-Identity] <XdsIdentity> -Path <String> -Type <CertType[]> [-Confirm]
 [-EffectiveDate <DateTime>] [-Force] [-Password <String>] [-Report <String>] [-Roll] [-WhatIf]
 [<CommonParameters>]
```

### Local
```
Import-CsCertificate -Path <String> [-Confirm] [-EffectiveDate <DateTime>] [-Force] [-Password <String>]
 [-PrivateKeyExportable <Boolean>] [-Report <String>] [-Roll] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Lync Server 2010 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server and vice versa.
In order to fully implement Lync Server you will need to have the appropriate certificates assigned to the appropriate server roles.

In order for certificates to be assigned to a Lync Server role those certificates must be made known to Lync Server.
The Request-CsCertificate cmdlet enables you to make both online and offline requests for new certificates.
If an online request is made, the certificate will automatically be downloaded and saved in the local certificate store; equally important, it will be immediately available for use by Lync Server 2010.
If an offline request is made, a certificate file will be sent to you.
At that point, you can use Import-CsCertificate to import the certificate, a process that makes the certificate available for assignment to a Lync Server server role.

Who can run this cmdlet: You must be a local administrator in order to run the Import-CsCertificate cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Import-CsCertificate"}

Below Content Applies To: Lync Server 2013

Lync Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server and vice versa.
In order to fully implement Lync Server you will need to have the appropriate certificates assigned to the appropriate server roles.

In order for certificates to be assigned to a Lync Server role those certificates must be made known to Lync Server.
The Request-CsCertificate cmdlet enables you to make both online and offline requests for new certificates.
If an online request is made, the certificate will automatically be downloaded and saved in the local certificate store; equally important, it will be immediately available for use by Lync Server.
If an offline request is made, a certificate file will be sent to you.
At that point, you can use Import-CsCertificate to import the certificate, a process that makes the certificate available for assignment to a Lync Server server role.

Who can run this cmdlet: You must be a local administrator in order to run the Import-CsCertificate cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Import-CsCertificate"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server and vice versa.
In order to fully implement Skype for Business Server 2015 you will need to have the appropriate certificates assigned to the appropriate server roles.

In order for certificates to be assigned to a Skype for Business Server 2015 role those certificates must be made known to Skype for Business Server 2015.
The Request-CsCertificate cmdlet enables you to make both online and offline requests for new certificates.
If an online request is made, the certificate will automatically be downloaded and saved in the local certificate store; equally important, it will be immediately available for use by Skype for Business Server 2015.
If an offline request is made, a certificate file will be sent to you.
At that point, you can use the Import-CsCertificate cmdlet to import the certificate, a process that makes the certificate available for assignment to a Skype for Business Server 2015 server role.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Import-CsCertificate -Path "C:\Certificates\WebServer.cer" -PrivateKeyExportable $True
```

The command shown in Example 1 imports the certificate C:\Certificates\WebServer.cer.
After the command completes, the certificate will be available to be assigned to a server role.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 imports the certificate C:\Certificates\WebServer.pfx.
After the command completes, the certificate will be available to be assigned to a server role.

Import-CsCertificate -Path "C:\Certificates\WebServer.pfx" -PrivateKeyExportable $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 imports the certificate C:\Certificates\WebServer.pfx.
After the command completes, the certificate will be available to be assigned to a server role.

Import-CsCertificate -Path "C:\Certificates\WebServer.pfx" -PrivateKeyExportable $True

## PARAMETERS

### -Path
Full path to the certificate file to be imported.
For example: -Path "C:\Certificates\WebServer.cer".

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

### -Password
Password associated with the certificate file.

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

### -PrivateKeyExportable
When set to True, ensures that the private key portion of the certificate can be read by the Network Service account.

```yaml
Type: Boolean
Parameter Sets: (All), Local
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\Certificates.html"

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
When set to Global, enables the certificate to function at the global scope.
Global certificates will automatically be copied and distributed to the appropriate computers.

```yaml
Type: XdsIdentity
Parameter Sets: CMS
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Below Content Applies To: Lync Server 2013

Type of certificate being requested.
Certificate types include, but are not limited to, the following:

* AccessEdgeExternal
* AudioVideoAuthentication
* DataEdgeExternal
* Default
* External
* Internal
* iPadAPNService
* iPhoneAPNService
* LogRetentionService
* MPNService
* OAuthTokenIssuer
* PICWebService
* ProvisionService
* SMPDNSWebService
* TenantAdmin
* UpgradeEngineService
* WebServicesExternal
* WebServicesInternal
* WsFedTokenTransfer
* XMPPServer



Below Content Applies To: Skype for Business Server 2015

Type of certificate being requested.
Certificate types include, but are not limited to, the following:

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

iPadAPNService

iPhoneAPNService

LogRetentionService

MPNService

OAuthTokenIssuer

PICWebService

ProvisionService

SMPDNSWebService

TenantAdmin

UpgradeEngineService

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

XMPPServer



```yaml
Type: CertType[]
Parameter Sets: CMS
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EffectiveDate
Date and time when the certificate can first be used.
For example, to configure a certificate for first use at 8:00 AM on July 31, 2012 use this syntax on a server running under the US English Region and Language settings:

-EffectiveTime "7/31/2012 8:00 AM"

```yaml
Type: DateTime
Parameter Sets: CMS, Local
Aliases: EffectiveTime
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roll
Enables you to update the specified certificate at the date and time specified by the EffectiveDate parameter; this enables you to specify a date and time when the new certificate will become the primary certificate.
Note that your command will fail if you specify the Roll parameter without including the EffectiveDate parameter.

```yaml
Type: SwitchParameter
Parameter Sets: CMS, Local
Aliases: 
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
Import-CsCertificate does not accept pipelined input.

###  
None.
The Import-CsCertificate cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/87bdafce-f4b9-4c44-ad8f-86c2deb680a4(OCS.14).aspx)

[Get-CsCertificate]()

[Remove-CsCertificate]()

[Request-CsCertificate]()

[Set-CsCertificate]()

[Online Version](http://technet.microsoft.com/EN-US/library/87bdafce-f4b9-4c44-ad8f-86c2deb680a4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/87bdafce-f4b9-4c44-ad8f-86c2deb680a4(OCS.16).aspx)

