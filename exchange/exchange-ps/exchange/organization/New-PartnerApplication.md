---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-PartnerApplication
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-PartnerApplication

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-PartnerApplication cmdlet to create a partner application configuration.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-PartnerApplication [-Name] <String> -ApplicationIdentifier <String>
 [-AcceptSecurityIdentifierInformation <$true | $false>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-LinkedAccount <UserIdParameter>] [-Realm <String>] [-WhatIf] [-AccountType <OrganizationalAccount | ConsumerAccount>] 
 [<CommonParameters>]
```

### Set1
```
New-PartnerApplication [-Name] <String> -AuthMetadataUrl <String>
 [-AcceptSecurityIdentifierInformation <$true | $false>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-LinkedAccount <UserIdParameter>] [-TrustAnySSLCertificate] [-WhatIf] [-AccountType <OrganizationalAccount | ConsumerAccount>] [<CommonParameters>]
```

## DESCRIPTION
You can configure partner applications such as Microsoft SharePoint to access Exchange resources. Use the New-PartnerApplication cmdlet to create a partner application configuration for an application that needs to access Exchange resources. For details, see Plan Exchange 2016 integration with SharePoint and Skype for Business (https://technet.microsoft.com/en-us/library/jj150480.aspx).

We recommend that you use the Configure-EnterprisePartnerApplication.ps1 script in the %ExchangeInstallPath%Scripts folder to configure partner applications.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-PartnerApplication -Name HRApp -ApplicationIdentifier 00000006-0000-0dd1-ac00-000000000000
```

This example creates a new HRApp partner application named HRApp.

## PARAMETERS

### -ApplicationIdentifier
The ApplicationIdentifier parameter specifies a unique application identifier for the partner application that uses an authorization server. When specifying a value for the ApplicationIdentifier parameter, you must also use the UseAuthServer parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthMetadataUrl
This parameter is available only in on-premises Exchange.

The AuthMetadataUrl parameter specifies the URL that Exchange can retrieve the AuthMetadata document from for a partner application that doesn't use an authorization server. When specifying the AuthMetadataUrl parameter for a partner application, you can't specify the ApplicationIdentifier and UseAuthServer parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the partner application.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptSecurityIdentifierInformation
The AcceptSecurityIdentifierInformation parameter specifies whether Exchange should accept security identifiers (SIDs) from another trusted Active Directory forest for the partner application. By default, new partner applications are configured to not accept SIDs from another forest. If you're in deployment with a trusted forest, set the parameter to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the partner application is enabled. By default, new partner applications are enabled. Set the parameter to $false to create the application configuration in a disabled state.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedAccount
The LinkedAccount parameter specifies a linked Active Directory user account for the application. Exchange evaluates Role Based Access Control (RBAC) permissions for the linked account when authorizing a token used to perform a task.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm
This parameter is available only in on-premises Exchange.

The Realm parameter specifies a security realm for the partner application. If the token is from a domain that's not an accepted domain, Exchange checks the realm specified in the token. In such a scenario, only tokens with the same realm specified in the partner application can access Exchange resources.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
This parameter is available only in on-premises Exchange.

The TrustAnySSLCertificate switch specifies whether Exchange should trust certificates issued by a certification authority (CA) not trusted by the server.

We don't recommend using this switch in a production environment.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountType
The AccountType parameter specifies the type of Microsoft account that's required for the partner application. Valid values are:

- OrganizationalAccount: This is the default value

- ConsumerAccount

```yaml
Type: OrganizationalAccount | ConsumerAccount
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e7cce1f0-d4f1-4eb9-a136-551725a35599.aspx)
