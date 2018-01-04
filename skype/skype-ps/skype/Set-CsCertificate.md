---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsCertificate
schema: 2.0.0
---

# Set-CsCertificate

## SYNOPSIS
Enables you to assign a certificate to a Skype for Business Server server or server role.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### CertificateReference
```
Set-CsCertificate [-NetportId <String>] -Reference <CertificateReference> [-Type <CertType[]>] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [-Identity <XdsIdentity>] [-EffectiveDate <DateTime>] [-Roll]
 [<CommonParameters>]
```

### Thumbprint
```
Set-CsCertificate [-NetportId <String>] -Thumbprint <String> [-Type <CertType[]>] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [-Identity <XdsIdentity>] [-EffectiveDate <DateTime>] [-Roll] [<CommonParameters>]
```

### Path
```
Set-CsCertificate -Identity <XdsIdentity> -Path <String> -Type <CertType[]> [-Confirm]
 [-EffectiveDate <DateTime>] [-Force] [-Password <String>] [-Report <String>] [-Roll] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server and vice versa.
In order to fully implement Skype for Business Server, you will need to have the appropriate certificates assigned to the appropriate server roles.

The `Set-CsCertificate` cmdlet enables administrators to assign a certificate to a server or server role.
Note that you can only assign certificates that have already been configured for use with Skype for Business Server.
To identify certificates available for assignment, use the `Get-CsCertificate` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsCertificate -Type WebServicesExternal -Thumbprint "B142918E463981A76503828BB1278391B716280987B"
```

The command shown in Example 1 assigns the certificate with the Thumbprint B142918E463981A76503828BB1278391B716280987B to the WebServicesExternal role on the local computer.


### -------------------------- Example 2 ------------------------
```
Set-CsCertificate -Type Default, WebServicesInternal, WebServicesExternal -Thumbprint "B142918E463981A76503828BB1278391B716280987B"
```

Example 2 assigns the assigns the certificate with the Thumbprint B142918E463981A76503828BB1278391B716280987B to three different roles on the local computer: Default, WebServicesInternal and WebServicesExternal.


## PARAMETERS

### -NetportId
Reserved for future use.
This parameter is for certificates dedicated to a specific port, a scenario not yet supported by Lync Server.

```yaml
Type: String
Parameter Sets: CertificateReference, Thumbprint
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reference
Object reference to a certificate configured for use with Skype for Business Server.
The following command returns an object reference (the variable $x) representing a certificate with the thumbprint B142918E463981A76503828BB1278391B716280987B:

`$x = Get-CsCertificate | Where-Object {$_.Thumbprint -eq "B142918E463981A76503828BB1278391B716280987B"`.


```yaml
Type: CertificateReference
Parameter Sets: CertificateReference
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Thumbprint
Unique identifier for the certificate.
A certificate thumbprint looks similar to this: B142918E463981A76503828BB1278391B716280987B.

```yaml
Type: String
Parameter Sets: Thumbprint
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Type of certificate being assigned.
Certificate types include, but are not limited to, the following:

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

iPhoneAPNService

iPadAPNService

MPNService

PICWebService (Skype for Business Online only)

ProvisionService (Skype for Business Online only)

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax assigns the Default certificate: `-Type Default`.

You can specify multiple types in a single command by separating the certificate types with commas:

`-Type Internal,External,Default`


```yaml
Type: CertType[]
Parameter Sets: CertificateReference, Thumbprint
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: CertType[]
Parameter Sets: Path
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Enables you to record detailed information about the procedures carried out by the `Set-CsCertificate` cmdlet.
The parameter value should be the full path to the HTML file to be generated; for example: `-Report C:\Logs\Certificates.html`.
If the specified file already exists it will automatically be overwritten with the new information.


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
Parameter Sets: CertificateReference, Thumbprint
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: Path
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Full path to the .PFX certificate file.

```yaml
Type: String
Parameter Sets: Path
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

`-EffectiveDate "7/31/2012 8:00 AM"`

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: EffectiveTime
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
Password for the certificate.

```yaml
Type: String
Parameter Sets: Path
Aliases: 
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
Parameter Sets: (All)
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
Microsoft.Rtc.Management.Deployment.CertificateReference.

## OUTPUTS

###  
The `Set-CsCertificate` cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Get-CsCertificate](Get-CsCertificate.md)

[Import-CsCertificate](Import-CsCertificate.md)

[Remove-CsCertificate](Remove-CsCertificate.md)

[Request-CsCertificate](Request-CsCertificate.md)
