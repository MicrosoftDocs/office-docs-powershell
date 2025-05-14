---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-authserver
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-AuthServer
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-AuthServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-AuthServer cmdlet to configure an authorization server that partner applications can use to obtain tokens recognized by Microsoft Exchange.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AuthMetadataUrl
```
Set-AuthServer [-Identity] <AuthServerIdParameter>
 [-AuthMetadataUrl <String>]
 [-TrustAnySSLCertificate]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### NativeClientAuthServer
```
Set-AuthServer [-Identity] <AuthServerIdParameter>
 [-AuthMetadataUrl <String>]
 [-IsDefaultAuthorizationEndpoint <Boolean>]
 [-TrustAnySSLCertificate]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### RefreshAuthMetadata
```
Set-AuthServer [-Identity] <AuthServerIdParameter>
 [-RefreshAuthMetadata]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### AppSecret
```
Set-AuthServer [-Identity] <AuthServerIdParameter>
 [-ApplicationIdentifier <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty]>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Partner applications authorized by Exchange can access their resources after they're authenticated using server-to-server authentication. A partner application can authenticate by using self-issued tokens trusted by Exchange or by using an authorization server trusted by Exchange. You can use the New-AuthServer cmdlet to create a trusted authorization server object in Exchange, which allows it to trust tokens issued by the authorization server.

Use the Set-AuthServer cmdlet to enable or disable the authorization server, change the AuthMetadataUrl parameter or refresh authorization metadata.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AuthServer ACS -Enabled $false
```

This command disables the authorization server ACS.

## PARAMETERS

### -Identity
The Identity parameter specifies the authorization server object that you want to modify. You can use any value that uniquely identifies the authorization server. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: AuthServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApplicationIdentifier
This parameter is available in the April 18, 2025 Hotfix update (HU) for Exchange 2019 CU15 and Exchange 2016 CU23.

{{ Fill ApplicationIdentifier Description }}

```yaml
Type: String
Parameter Sets: AppSecret
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthMetadataUrl
The AuthMetadataUrl parameter specifies the URL of the authorization server. This can be the AuthMetadataUrl of your Exchange Online organization.

```yaml
Type: String
Parameter Sets: AuthMetadataUrl, NativeClientAuthServer
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainName
This parameter is available only in Exchange Server 2016 (CU18 or higher) and Exchange Server 2019 (CU7 or higher).

The DomainName parameter specifies the tenant domain that's linked with the AuthServer object. This parameter uses the syntax: "tenantname.onmicrosoft.com".

This parameter is used to link Tenant to the corresponding authserver object in the Multi-Tenant Exchange Hybrid. For example, if DomainName is contoso.onmicrosoft.com, then the AuthServer object will be associated with the contoso tenant.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the authorization server is enabled. Only enabled authorization servers can issue and accept tokens. Disabling the authorization server prevents any partner applications configured to use the authorization server from getting a token.

The Enabled parameter specifies whether the authorization server is enabled. Valid values are:

- $true: Authorization tokens that are issued by the authorization server are accepted. This is the default value
- $false: The authorization server does not issue or accept authorization tokens.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefaultAuthorizationEndpoint
The IsDefaultAuthorizationEndpoint parameter specifies whether this server is the default authorization endpoint. Valid values are:

$true: The authorization server's URL is advertised to calling partner applications and applications that need to get their OAuth access tokens from the authorization server.

$false: The authorization server's URL is not advertised. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: NativeClientAuthServer
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the authorization server object. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshAuthMetadata
The RefreshAuthMetadata switch specifies whether Exchange should refresh the auth metadata from the specified URL. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RefreshAuthMetadata
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

We don't recommend using this switch in a production environment.

```yaml
Type: SwitchParameter
Parameter Sets: AuthMetadataUrl, NativeClientAuthServer
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
