---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-partnerapplication
schema: 2.0.0
title: Set-PartnerApplication
---

# Set-PartnerApplication

## SYNOPSIS
This cmdlet is functional only in on-premises Exchange.

Use the Set-PartnerApplication cmdlet to configure partner application configurations in on-premises Exchange organizations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ACSTrustApplication
```
Set-PartnerApplication [-Identity] <PartnerApplicationIdParameter>
 [-ApplicationIdentifier <String>]
 [-Realm <String>]
 [-AcceptSecurityIdentifierInformation <Boolean>]
 [-AccountType <SupportedAccountType>]
 [-ActAsPermissions <String[]>]
 [-AppOnlyPermissions <String[]>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-IssuerIdentifier <String>]
 [-LinkedAccount <UserIdParameter>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### AuthMetadataUrl
```
Set-PartnerApplication [-Identity] <PartnerApplicationIdParameter>
 [-AuthMetadataUrl <String>]
 [-TrustAnySSLCertificate]
 [-AcceptSecurityIdentifierInformation <Boolean>]
 [-AccountType <SupportedAccountType>]
 [-ActAsPermissions <String[]>]
 [-AppOnlyPermissions <String[]>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-IssuerIdentifier <String>]
 [-LinkedAccount <UserIdParameter>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### RefreshAuthMetadata
```
Set-PartnerApplication [-Identity] <PartnerApplicationIdParameter>
 [-RefreshAuthMetadata]
 [-AcceptSecurityIdentifierInformation <Boolean>]
 [-AccountType <SupportedAccountType>]
 [-ActAsPermissions <String[]>]
 [-AppOnlyPermissions <String[]>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-IssuerIdentifier <String>]
 [-LinkedAccount <UserIdParameter>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can configure partner applications such as SharePoint to access Exchange resources. Use the New-PartnerApplication cmdlet to create a partner application configuration for an application that needs to access Exchange resources. For details, see [Plan Exchange 2016 integration with SharePoint and Skype for Business](https://learn.microsoft.com/Exchange/plan-and-deploy/integration-with-sharepoint-and-skype/integration-with-sharepoint-and-skype). We recommend that you use the Configure-EnterprisePartnerApplication.ps1 script in the %ExchangeInstallPath%Scripts folder to configure partner applications.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-PartnerApplication HRApp -RefreshAuthMetadata
```

This example refreshes the auth metadata for the HRApp partner application.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the partner application you want to modify. You can use any value that uniquely identifies the partner application. For example:

- Name
- ApplicationID (GUID value)
- Distinguished name (DN)
- GUID

```yaml
Type: PartnerApplicationIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptSecurityIdentifierInformation

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AcceptSecurityIdentifierInformation parameter specifies whether Exchange should accept security identifiers (SIDs) from another trusted Active Directory forest for the partner application. By default, new partner applications are configured to not accept SIDs from another forest. If you're in deployment with a trusted forest, set the parameter to $true.

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

### -AccountType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The AccountType parameter specifies the type of Microsoft account that's required for the partner application. Valid values are:

- OrganizationalAccount: This value is the default
- ConsumerAccount

```yaml
Type: SupportedAccountType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActAsPermissions

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ActAsPermissions parameter specifies the delegate permissions that are allowed for the partner application. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationIdentifier

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ApplicationIdentifier parameter specifies a unique application identifier for the partner application that uses an authorization server.

```yaml
Type: String
Parameter Sets: ACSTrustApplication
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppOnlyPermissions

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthMetadataUrl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The AuthMetadataUrl parameter specifies the URL that Exchange can retrieve the AuthMetadata document from for a partner application that doesn't use an authorization server.

```yaml
Type: String
Parameter Sets: AuthMetadataUrl
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

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

### -Enabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Enabled parameter specifies whether the partner application is enabled. By default, new partner applications are enabled. Set the parameter to $false to create the application configuration in a disabled state.

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

### -IssuerIdentifier

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedAccount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The LinkedAccount parameter specifies a linked Active Directory user account for the application. Exchange evaluates Role Based Access Control (RBAC) permissions for the linked account when authorizing a token used to perform a task.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies a new name for the partner application.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The Realm parameter specifies a security realm for the partner application. If the token is from a domain that's not an accepted domain, Exchange checks the realm specified in the token. In such a scenario, only tokens with the same realm specified in the partner application can access Exchange resources.

```yaml
Type: String
Parameter Sets: ACSTrustApplication
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshAuthMetadata

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The RefreshAuthMetadata switch refreshes the auth metadata from the authorization server. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RefreshAuthMetadata
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

We don't recommend using this switch in a production environment.

```yaml
Type: SwitchParameter
Parameter Sets: AuthMetadataUrl
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
