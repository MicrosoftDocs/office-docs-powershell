---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-availabilityaddressspace
schema: 2.0.0
title: Add-AvailabilityAddressSpace
---

# Add-AvailabilityAddressSpace

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-AvailabilityAddressSpace cmdlet to create availability address space objects that are used to share free/busy data across Exchange organizations.

The maximum number off Availability address spaces returned by Active Directory to Exchange is 100. We recommend using 100 or fewer address spaces in order for Availability lookups to work properly.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-AvailabilityAddressSpace -AccessMethod <AvailabilityAccessMethod> -ForestName <String>
 [-Confirm]
 [-Credentials <PSCredential>]
 [-DomainController <Fqdn>]
 [-ProxyUrl <Uri>]
 [-TargetAutodiscoverEpr <Uri>]
 [-TargetServiceEpr <String>]
 [-TargetTenantId <String>]
 [-UseServiceAccount <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In Exchange Online, you need to run the New-AvailabilityConfig cmdlet before you run the Add-AvailabilityAddressSpace cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-AvailabilityAddressSpace -ForestName contoso.com -AccessMethod OrgWideFB -Credentials (Get-Credential)
```

In on-premises Exchange, this example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a username and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 2
```powershell
Add-AvailabilityAddressSpace -ForestName contoso.com -AccessMethod PerUserFB -Credentials (Get-Credential)
```

In on-premises Exchange, this example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 3
```powershell
Add-AvailabilityAddressSpace -ForestName contoso.com -AccessMethod PerUserFB -UseServiceAccount $true
```

In on-premises Exchange, this example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

### Example 4
```powershell
Add-AvailabilityAddressSpace -ForestName contoso.onmicrosoft.com -AccessMethod OrgWideFBToken -TargetTenantId "9d341953-da1f-41b0-8810-76d6ef905273" -TargetServiceEpr "outlook.office.com"
```

In Exchange Online, this example sets up the sharing of free/busy information with contoso.onmicrosoft.com (tenant ID value 9d341953-da1f-41b0-8810-76d6ef905273), which is a regular Microsoft 365 organization.

## PARAMETERS

### -AccessMethod

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AccessMethod parameter specifies how the free/busy data is accessed. Valid values are:

- PerUserFB: Per-user free/busy information can be requested. The free/busy data is accessed in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. This value requires a trust between the two forests, and requires you to use either the UseServiceAccount parameter or Credentials parameter.
- OrgWideFB: Only default free/busy for each user can be requested. The free/busy data is accessed in the per-user free/busy proxy account or group in the target forest. This value requires you to use either the UseServiceAccount parameter or Credentials parameter.
- OrgWideFBBasic: Free/busy sharing between tenants that are all in Exchange Online.
- InternalProxy: The request is proxied to an Exchange server in the site that's running a later version of Exchange.
- PublicFolder: This value was used to access free/busy data on Exchange Server 2003 servers.

```yaml
Type: AvailabilityAccessMethod
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ForestName parameter specifies the SMTP domain name of the target forest that contains the users you're trying to read free/busy information from. If users are distributed among multiple SMTP domains in the target forest, run the Add-AvailabilityAddressSpace command once for each SMTP domain.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -Credentials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Credentials parameter specifies the username and password that's used to access the Availability services in the target forest.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -ProxyUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ProxyUrl parameter was used to specify the URL that directed an Exchange 2007 Client Access server to proxy free/busy requests through an Exchange 2010 or Exchange 2013 Client Access server when requesting federated free/busy data for a user in another organization. When you used this parameter, you needed to set the AccessMethod parameter value to InternalProxy.

This parameter required that you created the proper trust relationships and sharing relationships between the Exchange organizations. For more information, see [New-FederationTrust](https://learn.microsoft.com/powershell/module/exchangepowershell/new-federationtrust).

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAutodiscoverEpr

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The TargetAutodiscoverEpr parameter specifies the Autodiscover URL of Exchange Web Services for the external organization that you're trying to read free/busy information from. For example, `https://contoso.com/autodiscover/autodiscover.xml`. Exchange uses Autodiscover to automatically detect the correct server endpoint for external requests.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetServiceEpr

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The TargetServiceEpr parameter specifies the Exchange Online Calendar Service URL of the external Microsoft 365 organization that you're trying to read free/busy information from. Valid values are:

- Microsoft 365 or Microsoft 365 GCC: outlook.office.com
- Office 365 operated by 21Vianet: partner.outlook.cn
- Microsoft 365 GCC High or DoD: outlook.office365.us

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

### -TargetTenantId

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The TargetTenantID parameter specifies the tenant ID of the external Microsoft 365 organization that you're trying to read free/busy information from.

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

### -UseServiceAccount

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The UseServiceAccount parameter specifies whether to use the local Availability service account for authorization. Valid values

- $true: The local Availability service account is used for authorization.
- $false: The local Availability service account isn't used for authorization. You need to use the Credentials parameter.

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
