---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-authconfig
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-AuthConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-AuthConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-AuthConfig cmdlet to modify the authorization configuration for your Exchange organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CurrentCertificateParameter
```
Set-AuthConfig -CertificateThumbprint <String>
 [-SkipImmediateCertificateDeployment]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublishAuthCertificateParameter
```
Set-AuthConfig [-ClearPreviousCertificate]
 [-PublishCertificate]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### NewCertificateParameter
```
Set-AuthConfig [-NewCertificateEffectiveDate <DateTime>]
 [-NewCertificateThumbprint <String>]
 [-SkipImmediateCertificateDeployment]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AuthConfigSettings
```
Set-AuthConfig [-Realm <String>]
 [-ServiceName <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-AuthConfig parameter defines Microsoft Exchange as a partner application for server-to-server authentication with other partner applications such as Microsoft SharePoint 2013 and Microsoft Lync 2013 or Skype for Business Server 2015, including the certificate used for signing tokens. It's generally not required for this configuration to be modified except in some cases where you must use a different certificate instead of the self-signed certificate created by Exchange Setup or to use a new certificate after the old one has expired.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AuthConfig -NewCertificateThumbprint DB821B4FCA2A5DA9593B9DE00C86BC5EA35D0FC0 -NewCertificateEffectiveDate 4/17/2014
```

This example specifies a new certificate and a date when the certificate will become effective.

### Example 2
```powershell
Set-AuthConfig -PublishCertificate
```

This example immediately rolls over the certificate configured as the next certificate and makes it the current certificate. You must have installed a certificate marked as the next certificate.

## PARAMETERS

### -CertificateThumbprint
The CertificateThumbprint parameter specifies the thumbprint of the certificate to be used by Exchange for server-to-server authentication.

```yaml
Type: String
Parameter Sets: CurrentCertificateParameter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearPreviousCertificate
The ClearPreviousCertificate switch clears the certificate that was saved as the previous certificate in the authorization configuration. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: PublishAuthCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: CurrentCertificateParameter, PublishAuthCertificateParameter, NewCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewCertificateEffectiveDate
The NewCertificateEffectiveDate parameter specifies a date when the certificate configured as the next certificate should be used.

```yaml
Type: DateTime
Parameter Sets: NewCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewCertificateThumbprint
The NewCertificateThumbprint parameter specifies the thumbprint of the new certificate to be used as the next certificate in the authorization configuration.

```yaml
Type: String
Parameter Sets: NewCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishCertificate
The PublishCertificate switch immediately rolls over the specified certificate as the current certificate. You don't need to specify a value with this switch.

The certificate is immediately deployed to all Client Access servers.

```yaml
Type: SwitchParameter
Parameter Sets: PublishAuthCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm
The Realm parameter specifies a security realm for partner applications. If a service or user presents a token from a domain that's not an accepted domain in the Exchange organization, the token must contain the specified realm to gain access to resources.

```yaml
Type: String
Parameter Sets: AuthConfigSettings
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter isn't available in this release.

```yaml
Type: ServerIdParameter
Parameter Sets: CurrentCertificateParameter, NewCertificateParameter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceName
The ServiceName parameter identifies Microsoft Exchange to other partner applications such as SharePoint 2013.

Exchange Setup configures the ServiceName parameter with a specific constant value. You shouldn't change this parameter. Changing the ServiceName parameter can result in server-to-server authentication with partner applications not functioning.

```yaml
Type: String
Parameter Sets: AuthConfigSettings
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipImmediateCertificateDeployment
The SkipImmediateCertificateDeployment switch specifies that the certificate shouldn't be used immediately. You don't need to specify a value with this switch.

We don't recommend using this switch in a production environment.

```yaml
Type: SwitchParameter
Parameter Sets: CurrentCertificateParameter, NewCertificateParameter
Aliases:

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
