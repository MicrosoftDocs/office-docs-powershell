---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-authserver
schema: 2.0.0
title: New-AuthServer
---

# New-AuthServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-AuthServer cmdlet to create an authorization server object in Microsoft Exchange and specify its AuthMetadataUrl. Exchange honors tokens issued by the authorization server for access by a partner application.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AuthMetadataUrl
```
New-AuthServer [-Name] <String> -AuthMetadataUrl <String>
 [-TrustAnySSLCertificate]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### NativeClientAuthServer
```
New-AuthServer [-Name] <String> -AuthMetadataUrl <String> -Type <AuthServerType>
 [-TrustAnySSLCertificate]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### AppSecret
```
New-AuthServer [-Name] <String> -Type <AuthServerType>
 [-ApplicationIdentifier <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DomainName <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Partner applications authorized by Exchange can access their resources after they're authenticated using server-to-server authentication. A partner application can authenticate by using self-issued tokens trusted by Exchange or by using an authorization server trusted by Exchange.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AuthServer -Name WindowsAzureACS -AuthMetadataUrl https://accounts.accesscontrol.windows.net/contoso.onmicrosoft.com/metadata/json/1
```

This command creates an authorization server object with the specified settings.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Name parameter specifies a unique name for the authorization server object. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthMetadataUrl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AuthMetadataUrl parameter specifies the URL for the Microsoft 365 authorization server for your cloud-based organization.

```yaml
Type: String
Parameter Sets: AuthMetadataUrl, NativeClientAuthServer
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Type parameter specifies the type of authorization tokens that are issued by the authorization server. Valid values are:

- ADFS
- AzureAD
- Facebook
- LinkedIn
- MicrosoftACS

```yaml
Type: AuthServerType
Parameter Sets: NativeClientAuthServer, AppSecret
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationIdentifier

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available in the April 18, 2025 Hotfix update (HU) for Exchange 2019 CU15 and Exchange 2016 CU23.

{{ Fill ApplicationIdentifier Description }}

```yaml
Type: String
Parameter Sets: AppSecret
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -DomainName

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in Exchange Server 2016 (CU18 or higher) and Exchange Server 2019 (CU7 or higher).

The DomainName parameter links a cloud-based organization to the corresponding AuthServer object in the Multi-Tenant Exchange Hybrid. This parameter uses the syntax: "domain.onmicrosoft.com".

For example, if the DomainName value is contoso.onmicrosoft.com, the AuthServer object is associated with the contoso cloud-based organization.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Enabled parameter specifies whether the authorization server is enabled. Valid values are:

- $true: Authorization tokens that are issued by the authorization server are accepted. This value is the default
- $false: Authorization tokens that are issued by the authorization server are not accepted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

We don't recommend using this switch in a production environment.

```yaml
Type: SwitchParameter
Parameter Sets: AuthMetadataUrl, NativeClientAuthServer
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
